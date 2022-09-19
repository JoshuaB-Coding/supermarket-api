import express from 'express';
import { Endpoint } from './endpoints';
const TestController = require('../controllers/test.controller');
const { Endpoint, endpoints } = require('./endpoints');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

endpoints.filter((endpoint: Endpoint) => endpoint.method === 'GET').forEach((endpoint: Endpoint) => {
  app.get(endpoint.endpoint, [
    endpoint.controller
  ]);
});

app.get('/tests', [
  TestController.tests
]);

app.get('/test', (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  return console.log(`CORS-enabled Express is listening at http://localhost:${port}`);
});
