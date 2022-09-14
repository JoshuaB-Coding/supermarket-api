"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TestController = require('../controllers/test.controller');
const app = (0, express_1.default)();
const port = 3001;
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
//# sourceMappingURL=app.js.map