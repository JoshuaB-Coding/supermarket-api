import { Response, Request } from 'express';
import { TestsController, SupermarketsController } from "../controllers/controllers";

export interface Endpoint {
    method: 'GET' | 'POST' | 'DELETE';
    endpoint: string;
    controller: any;
}

export const endpoints: Endpoint[] = [
    {
        method: 'GET',
        endpoint: '/v1/tests',
        controller: TestsController.tests,
    },
    {
        method: 'GET',
        endpoint: '/v1/ping',
        controller: (req: Request, res: Response) => {
            res.send("v1 working!");
        },
    },
    {
        method: 'GET',
        endpoint: '/v1/supermarkets/list',
        controller: SupermarketsController.list,
    },
    {
        method: 'POST',
        endpoint: '/v1/post',
        controller: [],
    },
]