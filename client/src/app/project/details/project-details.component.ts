import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service'; 
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from '../shared/project.model';
import { AlertService } from '../../core';
 
@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
  ) {}

  project$: Observable<Project>;

  getReadableId(project: Project): string {
    return project.readableId || '';
  }

  getReadMeUrl(project: Project): string {
    return project.readMeUrl || '';
  }
  
  ngOnInit(): void {

    this.project$ = this.route.paramMap.pipe(
      map((pm: ParamMap) => pm.get('id')),
      switchMap((id) => this.projectService.get$(id))
    )

    this.project$.subscribe(p => {
      if (!p) {
        this.alertService.throwErrorSnack("The project does not exist")
        this.router.navigateByUrl("/projects")
      }
    });
  }

}
