import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class BaseService {
  constructor(private http:HttpClient) {}
  get(url, params): Observable<any>  {
    return this.http.get(url,  {
      params: params
    });
  }
}