import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from '../blog.interface';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent {

    blog$: Observable<Blog>;

    constructor(private route: ActivatedRoute, private blogService: BlogService) {
        this.blog$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const id = <string>(params.get('blog_id'));
                console.log(id);
                return this.blogService.get$(id);
            })
        );
    }
}
