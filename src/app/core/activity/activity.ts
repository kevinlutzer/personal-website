export class Activity {
    name: string;
    location: string;
    description: string;
    dateStart: Date; 
    dateFinish?: Date;
    activityImgUrl: string;
    activityUrl: string;
    
    public fromApi( data: any ): void{
        if (data.date_start) {
            this.dateStart = new Date(data.date_start);
        }
        
        if (data.date_finish) {
            this.dateFinish = new Date(data.date_finish)
        }

        this.name = data.name;
        this.location = data.location;
        this.description = data.description;
        this.activityImgUrl = data.activity_img_url;
        this.activityUrl = data.activity_url;
    }

    get approximateTotalTime(): string {
        if( this.dateStart.getFullYear !== this.dateFinish.getFullYear ) {
            return String(this.dateFinish.getMonth() - this.dateStart.getMonth()) + ' mo';
        } else {
            return String(this.dateFinish.getFullYear() - this.dateStart.getFullYear()) + ' yr';
        }
    }

    get displayStartDate(): string {
        return this.dateStart.toLocaleDateString()
    }

    get displayFinishDate(): string {
        return this.dateFinish ? this.dateFinish.toLocaleDateString() : 'present'; 
    }
}