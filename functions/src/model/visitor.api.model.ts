export const MODEL = 'Visitor';

export class Visitor {
    ip: string;
    type: string;
    created: FirebaseFirestore.Timestamp;
}

export interface VisitorCreateApiResponse {
    message: string;
}

export interface VisitorListApiResponse {
    hasMore: boolean;
    nextCursor: number;
    visitors: Visitor[];
}

export interface VisitorListApiRequest {
    cursor: number;
    pageSize: number;   
}

export function buildVisitorCreateApiResponse(msg: string): VisitorCreateApiResponse {
    return { 
        message: msg
    }
}

export function buildVisitorListApiResponse(hasMore: boolean, nextCursor: number, visitors: Visitor[]): VisitorListApiResponse {
    return { 
        hasMore: hasMore,
        nextCursor: nextCursor,
        visitors: visitors,
    }
}

export function buildVisitorListApiRequest(body: any): VisitorListApiRequest {
    return {
        cursor: body.cursor || 0,
        pageSize: body.pageSize || 1000,
    }
}

export function convertFirebaseVisitor(data: FirebaseFirestore.DocumentData) {
    const obj = new Visitor()
    obj.ip = data.ip;
    obj.type = data.type;
    obj.created = data.created
    return obj;
}