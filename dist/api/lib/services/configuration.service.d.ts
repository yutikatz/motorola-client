import { HttpClient } from '@angular/common/http';
import { IpConfig } from 'types';
export declare class ConfigurationService {
    private http;
    ips: IpConfig;
    constructor(http: HttpClient);
    initConfiguration(path: any): Promise<any>;
}
