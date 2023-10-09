import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize, switchMap, timer } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isVisible.next(true);
    return timer(800).pipe(
      switchMap(() => next.handle(request)),
      finalize(() => {
        this.loaderService.isVisible.next(false);
      })
    );
  }


  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.loaderService.isVisible.next(true);
  //   return next.handle(request).pipe(
  //     finalize(() => {
  //       this.loaderService.isVisible.next(false);
  //     })
  //   );
  // }

}
