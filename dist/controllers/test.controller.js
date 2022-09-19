"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tests = (req, res) => {
    const body = req.body;
    return res.status(200).send({
        message: "Good response!"
    });
};
//# sourceMappingURL=test.controller.js.map