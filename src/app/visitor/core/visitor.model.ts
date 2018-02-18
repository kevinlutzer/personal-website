// I have to maintain both of the following const/type
export const VisitorOptions = ['Friend', 'Professor', 'Other', 'Average Joe/Joesephine', 'Coworker', 'Venture Capitalist'];
export type VisitorType = 'Friend' | 'Professor' | 'Other' | 'Average Joe/Joesephine' | 'Coworker' | 'Venture Capitalist';

export class Visitor {
    type: VisitorType;
    ipAddress: string;
    location: string;

    static fromApi(data: any): Visitor {
        let visitor = new Visitor();
        visitor.type = data.type;
        visitor.ipAddress = data.ipAddress || '';
        visitor.location = data.location || '';
        return visitor;
    }
}
