const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Build info from environment variables
const buildInfo = {
  version: process.env.VERSION || 'dev',
  buildDate: process.env.BUILD_DATE || new Date().toISOString(),
  gitCommit: process.env.GIT_COMMIT || 'unknown',
  environment: process.env.ENVIRONMENT || 'development'
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Hello API is running!',
    ...buildInfo,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', ...buildInfo });
});

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name || 'World';
  res.json({
    greeting: `Hello, ${name}!`,
    ...buildInfo
  });
});

app.get('/api/greet', (req, res) => {
  const name = 'World';
  res.json({
    greeting: `Hello, ${name}!`,
    ...buildInfo
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Hello API listening on port ${PORT}`);
  console.log(`Build info:`, buildInfo);
});
