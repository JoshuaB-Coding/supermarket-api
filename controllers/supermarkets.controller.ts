import { Request, Response } from "express";
import { Supermarkets } from '../models/supermarkets.models';
import * as fs from 'fs';

// The errors in this function are not handled correctly
exports.supermarkets = (req: Request, res: Response) => {
    const dataPath = './data/supermarkets.json';

    try {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                throw(err);
            }
            const { supermarkets } = JSON.parse(data) as Supermarkets;
            return res.status(200).send(supermarkets);
        });
    }
    catch (error) {
        console.error(`file path '${dataPath}' could not be loaded`);
        return res.status(400).send({
            error: `Couldn't load data from path '${dataPath}'`,
        });
    };
}