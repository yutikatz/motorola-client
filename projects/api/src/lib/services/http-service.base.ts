import { HttpClient,  HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestModel } from 'types';
import { ConfigurationService } from './configuration.service';

@Injectable()
export abstract class HttpServiceBase {


  index = 0;
  constructor(
    protected http: HttpClient,
    protected config: ConfigurationService,
  ) { }

  get$<T = string>(httpRequest: HttpRequestModel): Observable<T> {

    return this.http.get<T>(httpRequest.fullUrl, { params: { ...httpRequest.fullParams } });
  }

  post$<T = string>(httpRequest: HttpRequestModel): Observable<T> {

    return this.http.post<T>(httpRequest.fullUrl, httpRequest.body,
      { headers: httpRequest.headers, params: { ...httpRequest.fullParams } });
  }
   
}
