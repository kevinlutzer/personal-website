import { Observable } from 'rxjs';
import { Visitor } from './visitor.model';

export type RespType = "success" | "failure";

export interface VisitorApiServiceInterface {
    create(visitor: Visitor): Observable<VisitorCreateApiResponseInterface>;
}

export interface VisitorCreateApiResponseInterface {
    message: string;
    status: RespType;
}

export function buildVisitorCreateSuccessApiResponse(r: {message: string}): VisitorCreateApiResponseInterface {
    return {
        status: "success",
        message: r.message,
    }
}

export function buildVisitorCreateFailureApiResponse(r: {message: string}): VisitorCreateApiResponseInterface {
    return {
        status: "failure",
        message: r.message,
    }
}

export function buildVisitorCreateApiRequest(v: Visitor): any {
    return {
        visitorType: v.type
    }
}

export interface VisitorApiInterface {
    type: string;
    ip: string;
    created?: string;
}