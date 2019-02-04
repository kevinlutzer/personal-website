import { isBoolean } from "util";

export const MODEL = 'Visitor';

export class Visitor {
    ip: string;
    type: string;
    created: FirebaseFirestore.Timestamp
}

export function convertFirebaseVisitor(data: FirebaseFirestore.DocumentData) {
    const obj = new Visitor()
    obj.ip = data.ip;
    obj.type = data.type;
    obj.created = data.created
    return obj;
}