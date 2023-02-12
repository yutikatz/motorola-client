import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRequestModel } from 'types';
import { ConfigurationService } from './configuration.service';
export declare abstract class HttpServiceBase {
    protected http: HttpClient;
    protected config: ConfigurationService;
    index: number;
    constructor(http: HttpClient, config: ConfigurationService);
    get$<T = string>(httpRequest: HttpRequestModel): Observable<T>;
    post$<T = string>(httpRequest: HttpRequestModel): Observable<T>;
}
