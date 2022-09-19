"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// The errors in this function are not handled correctly
exports.list = (req, res) => {
    const dataPath = './data/supermarkets.json';
    try {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                throw (err);
            }
            const { supermarkets } = JSON.parse(data);
            return res.status(200).send(supermarkets);
        });
    }
    catch (error) {
        console.error(`file path '${dataPath}' could not be loaded`);
        return res.status(400).send({
            error: `Couldn't load data from path '${dataPath}'`,
        });
    }
    ;
};
//# sourceMappingURL=supermarket.controller.js.map