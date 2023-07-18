export const MODEL = 'Activity';

export interface Activity {
    title: string;
    company?: string;
    location?: string;
    description: string;
    content: string;
    activityImgUrl: string;
    activityUrl: string;
    dateStart: Date;
    dateFinish?: Date;
}
