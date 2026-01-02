import { CommonModule } from "@angular/common";
import { NgModule, SecurityContext } from "@angular/core";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogSummaryComponent } from "./blog-summary/blog-summary.component";
import { HttpClient } from "@angular/common/http";
import { SharedModule } from "../shared";
import { BlogService } from "./blog.service";
import { BlogSummaryService } from "./blog-summary/blog-summary.service";

@NgModule({
    declarations: [
        BlogListComponent,
        BlogSummaryComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
    ],
    providers: [BlogService, BlogSummaryService]
})
export class BlogModule { }