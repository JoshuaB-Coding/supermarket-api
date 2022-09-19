import { Request, Response } from "express";
import { Supermarket } from '../models/supermarkets.models';
import * as fs from 'fs';

exports.list = (req: Request, res: Response) => {
    const dataPath = './data/supermarkets.json';
    var supermarkets: Supermarket[] = [];

    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            throw(err);
        }
        const { supermarkets } = JSON.parse(data);
        return res.status(200).send(supermarkets);
    });

    return res.status(400);
}