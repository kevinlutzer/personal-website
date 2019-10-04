export const MODEL = 'Activity';

export interface Activity {
    title: string;
    subTitle: string;
    location: string;
    description: string;
    content: string;
    activityImgUrl: string;
    activityUrl: string;
    dateStart: any;
    dateFinish?: any;
}
