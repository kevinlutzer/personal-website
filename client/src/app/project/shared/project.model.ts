export const MODEL = 'Project';

export interface Project {
    readableId: string;
    name: string;
    tagline: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    readMeUrl: string;
    tags: string[];
    startDate: any;
    endDate?: any;
}
