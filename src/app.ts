import express from 'express';
import cors from 'cors';
import { Endpoint, endpoints } from './endpoints';
import { TestsController } from '../controllers/controllers';
const app = express();
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
  TestsController.tests
]);

app.get('/test', (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  return console.log(`CORS-enabled Express is listening at http://localhost:${port}`);
});
