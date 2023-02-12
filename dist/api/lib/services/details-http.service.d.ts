import { Observable } from 'rxjs';
import { Details, IAddressee } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class DetailsHttpService extends HttpServiceBase {
    private readonly _serverUrl;
    getDetails$(): Observable<Details[]>;
    getAddressee$(): Observable<IAddressee[]>;
    addAddressee$(name: any): Observable<boolean>;
    addOrUpdateDetails$(senderId: any, details: any): Observable<boolean>;
}
