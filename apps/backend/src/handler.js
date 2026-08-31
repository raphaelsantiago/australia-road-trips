import { DynamoDBClient, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { randomUUID } from 'node:crypto';

const dynamo = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME;
const ALLOWED_ORIGIN = process.env.WEB_ALLOWED_ORIGIN || '*';

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    'content-type': 'application/json',
    'access-control-allow-origin': ALLOWED_ORIGIN,
    'access-control-allow-headers': 'content-type',
    'access-control-allow-methods': 'GET,POST,OPTIONS'
  },
  body: JSON.stringify(body)
});

const readBody = (event) => {
  if (!event.body) return {};
  try { return JSON.parse(event.body); } catch { return {}; }
};

const optionKey = (value) => String(value || '').trim().toLowerCase();

export const handler = async (event) => {
  if (!TABLE_NAME) return response(500, { message: 'TABLE_NAME is not configured' });

  const method = event.requestContext?.http?.method || event.httpMethod || 'GET';
  const path = event.rawPath || event.path || '/';

  if (method === 'OPTIONS') return response(204, {});
  if (path === '/health' && method === 'GET') return response(200, { status: 'ok' });

  if (path === '/feedback' && method === 'GET') {
    const option = optionKey(event.queryStringParameters?.option);
    if (!option) return response(400, { message: 'option is required' });

    const result = await dynamo.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :prefix)',
      ExpressionAttributeValues: {
        ':pk': { S: `OPTION#${option}` },
        ':prefix': { S: 'VOTE#' }
      }
    }));

    const votes = (result.Items || []).map((item) => ({
      voter: item.voter?.S,
      vote: item.vote?.S,
      updatedAt: item.updatedAt?.S
    }));
    return response(200, { option, votes });
  }

  if (path === '/feedback' && method === 'POST') {
    const body = readBody(event);
    const option = optionKey(body.option);
    const voter = String(body.voter || '').trim();
    const vote = String(body.vote || '').trim().toLowerCase();
    if (!option || !voter || !['prefer', 'maybe', 'no'].includes(vote)) {
      return response(400, { message: 'option, voter and a valid vote are required' });
    }

    const updatedAt = new Date().toISOString();
    await dynamo.send(new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        PK: { S: `OPTION#${option}` },
        SK: { S: `VOTE#${voter.toLowerCase()}` },
        entityType: { S: 'vote' },
        option: { S: option },
        voter: { S: voter },
        vote: { S: vote },
        updatedAt: { S: updatedAt }
      }
    }));
    return response(200, { option, voter, vote, updatedAt });
  }

  if (path === '/notes' && method === 'GET') {
    const option = optionKey(event.queryStringParameters?.option);
    if (!option) return response(400, { message: 'option is required' });

    const result = await dynamo.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: 'PK = :pk AND begins_with(SK, :prefix)',
      ExpressionAttributeValues: {
        ':pk': { S: `OPTION#${option}` },
        ':prefix': { S: 'NOTE#' }
      },
      ScanIndexForward: false
    }));

    const notes = (result.Items || []).map((item) => ({
      id: item.id?.S,
      name: item.name?.S,
      text: item.text?.S,
      createdAt: item.createdAt?.S
    }));
    return response(200, { option, notes });
  }

  if (path === '/notes' && method === 'POST') {
    const body = readBody(event);
    const option = optionKey(body.option);
    const name = String(body.name || '').trim().slice(0, 40);
    const text = String(body.text || '').trim().slice(0, 500);
    if (!option || !name || !text) return response(400, { message: 'option, name and text are required' });

    const id = randomUUID();
    const createdAt = new Date().toISOString();
    await dynamo.send(new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        PK: { S: `OPTION#${option}` },
        SK: { S: `NOTE#${createdAt}#${id}` },
        entityType: { S: 'note' },
        option: { S: option },
        id: { S: id },
        name: { S: name },
        text: { S: text },
        createdAt: { S: createdAt }
      }
    }));
    return response(201, { option, id, name, text, createdAt });
  }

  return response(404, { message: 'Not found' });
};
