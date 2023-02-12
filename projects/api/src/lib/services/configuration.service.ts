import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { IpConfig } from 'types';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  ips: IpConfig;

  constructor(
    private http: HttpClient) {
  }

  initConfiguration(path): Promise<any> {
    
    return combineLatest(
      this.http.get<IpConfig>( path ),
    ).pipe(
      tap(response => [this.ips] = response),
    ).toPromise();
  }
}
