# Australia Road Trips

## Royal Roads — Perth to Adelaide Family Adventure

AWS-oriented monorepo for the family road-trip planning portal covering 19 Dec 2026 to 5 Jan 2027.

## Repository structure

```text
apps/
  frontend/        Royal Roads web UI (Vite + HTML/CSS/JS)
  backend/         Lambda API for family votes and notes
infra/
  cdk/             AWS CDK infrastructure
packages/
  shared/          Shared route/vote constants
```

## AWS architecture

- **Frontend:** Amazon S3 private bucket + CloudFront
- **API:** Amazon API Gateway HTTP API
- **Compute:** AWS Lambda (Node.js 22)
- **Data:** Amazon DynamoDB on-demand table
- **Infrastructure as Code:** AWS CDK v2

The CDK stack keeps the S3 bucket and DynamoDB table private and retained by default. CloudFront uses origin access control to serve the site.

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Frontend production build:

```bash
npm run build
```

## Environment variables

Copy `.env.example` to your preferred local environment file and populate values as required.

- `VITE_API_BASE_URL` — frontend API endpoint, used when the frontend is wired to shared persistence.
- `WEB_ALLOWED_ORIGIN` — CORS origin supplied to the API/Lambda stack.
- `AWS_REGION` / `CDK_DEFAULT_REGION` — defaults to `ap-southeast-2` if not set.
- `CDK_DEFAULT_ACCOUNT` — optional explicit CDK account override.

Do not commit real secrets or credentials.

## CDK workflow

Bootstrap once per AWS account/region if required:

```bash
npx cdk bootstrap
```

Review infrastructure:

```bash
npm run cdk:synth
npm run cdk:diff
```

Deploy after verifying the generated template and environment configuration:

```bash
npm run cdk:deploy
```

The root deploy script builds `apps/frontend/dist` before CDK packages and uploads the frontend assets.

## Current application state

The existing Royal Roads UI includes:

- Balanced Nullarbor route
- Scenic WA route via Esperance/Lucky Bay
- Scenic SA / Eyre Peninsula route
- Outbound and return itinerary switching
- Vehicle/accommodation comparison
- Family voting
- Family notes
- Responsive parchment/navy/gold theme

The current frontend still uses browser `localStorage` for votes and notes. `apps/backend` provides the AWS API foundation for moving those features to shared DynamoDB persistence in the next application integration pass.

## Backend API

- `GET /health`
- `GET /feedback?option=balanced`
- `POST /feedback`
- `GET /notes?option=balanced`
- `POST /notes`

No AWS credentials, access keys, passwords or deployed URLs are committed to this repository.
