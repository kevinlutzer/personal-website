import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent {
    blogs$ = this.blogService.blogs$;
    loading$ = this.blogService.loadingList$;

    constructor(public blogService: BlogService) {
        this.blogService.list();
    }
}
