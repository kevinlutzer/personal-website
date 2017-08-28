export type VisitorType = 'Friend' | 'Professor' | 'Other' | 'Average Joe/Joesephine' | 'Coworker' | 'Venture Capitalist';

export interface Visitor {
    ipAddress?: string;
    type: VisitorType;
}
