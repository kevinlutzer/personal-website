import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class BlogSummaryService {
    constructor(
        private httpClient: HttpClient,
        private domSanitizer: DomSanitizer,
    ) { }

    getThumbnailImage$(url: string): Observable<SafeResourceUrl> {
        return this.httpClient.get(url, { responseType: 'blob' }).pipe(
            map((res) => URL.createObjectURL(res)),
            map((url) => this.domSanitizer.bypassSecurityTrustResourceUrl(url)),
            tap((res) => console.log(res)),
        )
    }

}
