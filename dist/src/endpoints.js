"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = void 0;
const controllers_1 = require("../controllers/controllers");
exports.endpoints = [
    {
        method: 'GET',
        endpoint: '/v1/tests',
        controller: controllers_1.TestsController.tests
    },
    {
        method: 'GET',
        endpoint: '/v1/ping',
        controller: (req, res) => {
            res.send("To the moon!");
        }
    },
    {
        method: 'POST',
        endpoint: '/v1/post',
        controller: []
    }
];
//# sourceMappingURL=endpoints.js.map