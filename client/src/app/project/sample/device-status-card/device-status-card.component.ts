import { Component, Input } from '@angular/core';

export interface DeviceStatusCardDataInterface {
    name: string; 
    roomDescription: string;
    lastActive: Date;
    cpuTemp: number;
    lux: number;
    co2: number;
    tvoc: number;
    roomTemp: number;
    pressure: number;
    humidity: number;
}

@Component({
    selector: 'device-status-card',
    templateUrl: './device-status-card.component.html',
    styleUrls: ['./device-status-card.component.scss']
})  
export class DeviceStatusCard {
    @Input() status: DeviceStatusCardDataInterface;

    showContent: boolean;
    contentButtonText: string = 'See Last Data Sample';

    lastActiveDate(): string {
        if (!this.status.lastActive) {
            return '';
        }

        if (isNaN(this.status.lastActive.getTime())) {  
            return '';
        }
        return `${this.status.lastActive.getDay()}/${this.status.lastActive.getMonth()}/${this.status.lastActive.getFullYear()}`;
    }

    public onShowContent() {
        this.contentButtonText = this.contentButtonText === 'See Last Data Sample' ? 'Hide' : 'See Last Data Sample';
        this.showContent = !this.showContent;
    }
}
