export const MODEL = 'Project';
export interface Project {
    name: string;
    tagline: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    tags: string[];
    startDate: any;
    endDate?: any;
}
