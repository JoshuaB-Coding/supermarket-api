import { Response, Request } from 'express';
import { TestsRequest, TestsResponse } from '../models/test.models';

exports.tests = (req: Request, res: Response) => {
    const body: TestsRequest = req.body;

    return res.status(200).send({
        message: "Good response!"
    });
}
