#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RoadTripStack } from '../lib/road-trip-stack.js';

const app = new cdk.App();

new RoadTripStack(app, 'RoadTripStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || process.env.AWS_REGION || 'ap-southeast-2'
  }
});
