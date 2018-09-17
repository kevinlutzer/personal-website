import {FirebaseFirestore} from '@firebase/firestore-types';

// export interface CreateVisitorApiInterface {
//     visitorType: string
// }

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