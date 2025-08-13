# Hello API

A simple Node.js Express API for testing Kargo deployments.

## Endpoints

- `GET /` - Basic info about the service
- `GET /health` - Health check endpoint  
- `GET /api/greet/:name` - Greeting endpoint

## Environment Variables

- `VERSION` - Build version
- `BUILD_DATE` - Build timestamp
- `GIT_COMMIT` - Git commit hash
- `ENVIRONMENT` - Deployment environment
- `PORT` - Server port (default: 3000)
