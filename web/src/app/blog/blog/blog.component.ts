import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Observable, combineLatest, debounceTime, map, shareReplay, startWith, switchMap, take } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from '../blog.interface';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent {

    loading$: Observable<boolean>;
    blogContent$: Observable<string>;

    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        const blog$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const id = <string>(params.get('blog_id'));
                return this.blogService.get$(id);
            }),
            shareReplay(1)
        );

        this.blogContent$ = blog$.pipe(
            switchMap((blog: Blog) => this.blogService.getContent$(<string>(blog?.url))),
            shareReplay(1),
            take(1)
        );

        this.loading$ = combineLatest([this.blogService.loadingGet$, this.blogService.loadingContent$]).pipe(
            map(([a, b]: [boolean, boolean]) => {
                return a || b;
            }),
            debounceTime(100),
        );
    }
}
