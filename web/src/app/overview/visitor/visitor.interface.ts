import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core';

export interface VisitorSetReponseInterface {
  visitorType: VisitorType;
}

export interface ApiVisitor {
  visitorType: VisitorType;
}

export interface VisitorListResponseInterface extends ApiResponse<ApiVisitor[]> {}

export const VisitorOptions = ['Friend', 'Professor', 'Other', 'Average Joe/Joesephine', 'Coworker', 'Venture Capitalist'];
export type VisitorType = 'Friend' | 'Professor' | 'Other' | 'Average Joe/Joesephine' | 'Coworker' | 'Venture Capitalist';

export class Visitor {
  constructor(public visitorType: VisitorType) {}
}
