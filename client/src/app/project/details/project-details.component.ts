import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service'; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from '../shared/project.model';

const RoomEnvironmentMonitorId = "room-environment-monitor";

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private router: ActivatedRoute
  ) {}

  project$: Observable<Project>;
  
  ngOnInit(): void {

    this.project$ = this.router.paramMap.pipe(
      map((pm: ParamMap) => pm.get('id')),
      switchMap((id) => this.projectService.get$(id))
    )

    this.project$.subscribe(console.log);
  }

}
