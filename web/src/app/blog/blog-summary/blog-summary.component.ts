import { Component, Input } from '@angular/core';
import { Blog } from '../blog.interface';
import { BlogSummaryService } from './blog-summary.service';
import { BehaviorSubject, Observable, ReplaySubject, catchError, shareReplay, switchMap, tap, throwError } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { AlertService } from 'src/app/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-summary',
    styleUrls: ['./blog-summary.component.scss'],
    templateUrl: './blog-summary.component.html'
})
export class BlogSummaryComponent {
    @Input() set blog (v: Blog) {
        this.blog$.next(v);
    }

    shimmer = true;

    blog$ = new ReplaySubject<Blog>(1);
    loadingImage$ = new BehaviorSubject<boolean>(false);
    thumbnailImage$: Observable<SafeUrl>;

    constructor(blogSummaryService: BlogSummaryService, private cliboardService: Clipboard, private alertService: AlertService, private router: Router, private route: ActivatedRoute) {
        this.thumbnailImage$ = this.blog$.pipe(
            tap(() => this.loadingImage$.next(true)),
            switchMap((blog: Blog) => blogSummaryService.getThumbnailImage$(<string>(blog?.thumbnailUrl))),
            catchError((err: any) => {
                this.loadingImage$.next(false);
                return throwError(err);
            }),
            tap(() => this.loadingImage$.next(false)),
            shareReplay(1)
        )
    }

    navigateToBlog(id: number): void {  
        this.router.navigate([id], { relativeTo: this.route });
    }

    shareLink(blog: Blog): void {
        this.cliboardService.copy(location.href + '/' + blog.id);
        this.alertService.throwSuccessSnack('Link copied to clipboard');
    }
}
