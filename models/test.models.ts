export interface TestsRequest {
    id: number;
    name: string;
    body: JSON;
    headers: JSON;
}

export interface TestsResponse {
    status: number;
    response: TestsModel | TestsErrorResponse;
}

export interface TestsModel {
    id: string;
    price: number;
}

interface TestsErrorResponse {
    error: string;
}