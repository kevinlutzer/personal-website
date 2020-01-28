import { Component, OnInit } from '@angular/core';
import { Status, StatusService } from '../room-environment-monitor';
import { Observable } from 'rxjs';

@Component({
  selector: 'project-sample',
  templateUrl: './project-sample.component.html'
})
export class ProjectSampleComponent implements OnInit{
    constructor(
        private statusService: StatusService
    ) {}

    stautses$: Observable<Status[]>

    ngOnInit(): void {
       this.stautses$ = this.statusService.getAllStatus();
       this.stautses$.subscribe(console.log);
    }
}
