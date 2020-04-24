import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { default as endpoints } from './mock.config';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const method = request.method;
    const url = request.url.replace(environment.apiUrl, '');
    const endpoint = (endpoints[method] && endpoints[method][url]) || null;
    if (endpoint) {
      console.debug('MockInterceptor:', method, url);
      return endpoint.handler();
    }
    return next.handle(request);
  }
}
