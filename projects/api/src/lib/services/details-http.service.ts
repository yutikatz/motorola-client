import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpRequestModel, Details, IAddressee } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({  providedIn: 'root'})
export class DetailsHttpService extends HttpServiceBase  {

  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}details/`;
  }

  getDetails$(): Observable<Details[]> {

    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getDetails',
    }));
  }

  getAddressee$(): Observable<IAddressee[]> {

    return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getAddressee',
    }));
  }

  addAddressee$(name): Observable<boolean> {

    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addAddressee',
      body: {name}
    }));
  }

  
  addOrUpdateDetails$(senderId, details: any): Observable<boolean> {
    details = {senderId, ...details}
    return this.post$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'addOrUpdateDetails',
      body: details
    }));
  }

}


