export const MODEL = "Activity";

export interface Activity {
    title: string;
    location: string;
    description: string;
    content: string;
    activityImgUrl: string;
    activityUrl: string;
    dateStart: string;
    dateFinish?: string;
}
