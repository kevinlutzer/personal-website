export const MODEL = 'Visitor';
export type RespType = 'success' | 'failure';

export class Visitor {
    ip: string;
    type: string;
    created: FirebaseFirestore.Timestamp;
}

export interface VisitorCreateApiResponse {
    message: string;
    status: RespType;
}

export function buildVisitorCreateFailureApiResponse(msg: string): VisitorCreateApiResponse {
    return { 
        message: msg,
        status: 'failure',
    }
}

export function buildVisitorCreateSuccessApiResponse(msg: string): VisitorCreateApiResponse {
    return { 
        message: msg,
        status: 'success',
    }
}

export function convertFirebaseVisitor(data: FirebaseFirestore.DocumentData): Visitor {
    const obj = new Visitor()
    obj.ip = data.ip;
    obj.type = data.type;
    obj.created = data.created
    return obj;
}