import { Observable } from 'rxjs';
import { Visitor } from './visitor.model';

export type RespStatus = "success" | "failure";

export interface VisitorApiServiceInterface {
    create(visitor: Visitor): Observable<{message: string}>;
}

export interface VisitorCreateApiRequestInterface {
    type: string;
}

export interface VisitorCreateApiResponseInterface {
    status: RespStatus;
    message: string;
}

export function buildVisitorCreateApiSuccessResponseInterface(message: string): VisitorCreateApiResponseInterface {
    return {
        status: 'success',
        message: message
    }
}

export function buildVisitorCreateApiFailureResponseInterface(message: string): VisitorCreateApiResponseInterface {
    return {
        status: 'failure',
        message: message
    }
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