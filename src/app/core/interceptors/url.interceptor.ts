import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { join } from '@fireflysemantics/join';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.startsWith('http://') ||
      request.url.startsWith('https://')
    ) {
      return next.handle(request);
    }

    let apiRequest = request.clone({
      url: join(environment.apiUrl, request.url),
    });
    return next.handle(apiRequest);
  }
}
