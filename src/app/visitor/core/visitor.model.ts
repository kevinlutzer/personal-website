// I have to maintain both of the following const/type
export const VisitorOptions = ['Friend', 'Professor', 'Other', 'Average Joe/Joesephine', 'Coworker', 'Venture Capitalist'];

export type VisitorType = 'Friend' | 'Professor' | 'Other' | 'Average Joe/Joesephine' | 'Coworker' | 'Venture Capitalist';

export interface Visitor {
    ipAddress?: string;
    type: VisitorType;
}
