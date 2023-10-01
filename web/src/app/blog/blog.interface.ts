export interface ApiBlogInterface {
    id: number;
    title: string;
    description: string;
    url: string;
    thumbnailUrl: string;
    tags: string[];
    published: string;
}

export class Blog {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public url: string,
        public thumbnailUrl: string,
        public tags: string[],
        public published: Date
    ) {}
}