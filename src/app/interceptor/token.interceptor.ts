import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        application_id: '5acddad4dcb50f330be081c9',
        app_user_token: '3aa3f473acc64824b8ddcbd699ce238861ad3d3640cabf0d476d28d8b842e52d',
        publish_type: "Release",
        portal_type: "ap",
        app_user_ip: "115.248.118.242",
        scocu_session_id: "0886ec06935741aa9f27fad64794dbcb",
        sc_sid: "5b46f2eedcb50f4360bb63b1"
      }
    });
    return next.handle(request);
  }
}