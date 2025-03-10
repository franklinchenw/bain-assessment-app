# Distance Calculator

A web application for calculating distances between two addresses.

## Prerequisites

- Node.js 18+
- npm
- Docker (optional)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

Visit http://localhost:3000

Live https://bain.frankie-chen.com

## Docker Deployment

1. Build image:

```bash
docker build -t distance-calculator .
```

2. Run container:

```bash
docker run -p 3000:3000 distance-calculator
```

Visit http://localhost:3000
