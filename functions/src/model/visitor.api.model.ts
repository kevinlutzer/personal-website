

export const MODEL = 'Visitor';

export class Visitor {
    ip: string;
    type: string;
}

export function convertFirebaseVisitor(data: FirebaseFirestore.DocumentData) {
    const obj = new Visitor()
    obj.ip = data.ip;
    obj.type = data.type;
    return obj;
}