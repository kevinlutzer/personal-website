import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../room-environment-monitor/status.interface';
@Component({
  selector: 'device-status-card',
  templateUrl: './device-status-card.component.html',
  styleUrls: ['./device-status-card.component.scss']
})
export class DeviceStatusCard {
    @Input() status: Status;

    lastActiveDate(): string {
        if (isNaN(this.status.lastActive.getTime())) {  
            return '';
        }
        return `${this.status.lastActive.getDay()}/${this.status.lastActive.getMonth()}/${this.status.lastActive.getFullYear()}`;
    }
}
