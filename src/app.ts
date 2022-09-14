import express from 'express';
const TestController = require('../controllers/test.controller');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tests', [
  TestController.tests
]);

app.get('/test', (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
