export const MODEL = 'Visitor';

export class Visitor {
    ip: string;
    type: string;
    created: FirebaseFirestore.Timestamp;
}

export interface VisitorCreateApiResponse {
    message: string;
}

export function buildVisitorCreateApiResponse(msg: string): VisitorCreateApiResponse {
    return { 
        message: msg
    }
}

export function convertFirebaseVisitor(data: FirebaseFirestore.DocumentData): Visitor {
    const obj = new Visitor()
    obj.ip = data.ip;
    obj.type = data.type;
    obj.created = data.created
    return obj;
}