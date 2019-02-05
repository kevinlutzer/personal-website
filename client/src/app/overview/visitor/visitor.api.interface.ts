import { Observable } from 'rxjs';
import { Visitor } from './visitor.model';

export type RespStatus = "success" | "failure";

export interface VisitorApiServiceInterface {
    create(visitor: Visitor): Observable<{message: string}>;
}

export interface VisitorCreateApiRequestInterface {
    type: string;
}

export function buildVisitorCreateApiRequestInterface(visitor: Visitor): VisitorCreateApiRequestInterface {
    return {
        type: visitor.type
    }
}

export interface VisitorCreateApiResponseInterface {
    message: string;
    status: RespStatus;
}