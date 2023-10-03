

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, take, tap, delay } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertService, ApiResponse, defaultErrorHandler } from 'src/app/core';
import { ApiBlogInterface, Blog } from './blog.interface';
import { SafeUrl } from '@angular/platform-browser';

@Injectable()
export class BlogService {

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
  ) {}

  private loadingList$$ = new BehaviorSubject<boolean>(false);
  loadingList$ = this.loadingList$$.asObservable();

  private loadingGet$$ = new BehaviorSubject<boolean>(false);
  loadingGet$ = this.loadingGet$$.asObservable();

  private loadingContent$$ = new BehaviorSubject<boolean>(false);
  loadingContent$ = this.loadingContent$$.asObservable();

  private blogs$$ = new BehaviorSubject<Blog[]>([]);
  blogs$ = this.blogs$$.asObservable();

  private apiToBlog(apiBlog: ApiBlogInterface): Blog {
    let published = new Date();
    if (apiBlog.published) {
        published = new Date(apiBlog.published);
    }
    return new Blog(apiBlog.id, apiBlog.title, apiBlog.description, apiBlog.url, apiBlog.thumbnailUrl, apiBlog.tags, published)
  } 

  public get$(id: string): Observable<Blog> {
    this.loadingGet$$.next(true);
    return this.httpClient.post<ApiResponse<ApiBlogInterface>>('/v1/blog/get', { id: id}).pipe(
        map((resp: ApiResponse<ApiBlogInterface>) => {
            const apiBlog = resp.result;
            return this.apiToBlog(<ApiBlogInterface>apiBlog);
        }),
        catchError((err: HttpErrorResponse) => {
            this.loadingGet$$.next(false);
            return defaultErrorHandler(err);
        }),
        tap(() => this.loadingGet$$.next(false)),
        take(1),
    );
  }

  public getContent$(url: string): Observable<string> {
    this.loadingContent$$.next(true);
    return this.httpClient.get(url, {responseType: 'text'}).pipe(
        catchError((err: HttpErrorResponse) => {
            this.loadingContent$$.next(false);
            return defaultErrorHandler(err);
        }),
        delay(1000),
        tap(() => this.loadingContent$$.next(false)),
        take(1),
    );
  }


  public list(): void {
    this.loadingList$$.next(true);
    this.httpClient.post<ApiResponse<ApiBlogInterface[]>>('/v1/blog/list', {}).pipe(
      map((resp: ApiResponse<ApiBlogInterface[]>) => {
        const apiBlogs = resp.result = resp.result || []; 
        return <Blog[]>(apiBlogs).map((apiBlog: ApiBlogInterface) => this.apiToBlog(apiBlog))
      }),
      tap(() => this.loadingList$$.next(false)),
      catchError((err: HttpErrorResponse) => {
        this.loadingList$$.next(false);
        return defaultErrorHandler(err);
      }),
      take(1),
    ).subscribe({
      next: (blogs: Blog[]) => this.blogs$$.next(blogs),
      error: (err) => {
        const msg = 'Failed to load blogs, please refresh and try again!'
        console.error(err);
        this.alertService.throwErrorSnack(msg);
      },
    })
  }
}
