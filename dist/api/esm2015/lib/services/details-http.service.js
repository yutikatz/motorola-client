/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/details-http.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
export class DetailsHttpService extends HttpServiceBase {
    /**
     * @private
     * @return {?}
     */
    get _serverUrl() {
        return `${this.config.ips.servicePath}details/`;
    }
    /**
     * @return {?}
     */
    getDetails$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDetails',
        }));
    }
    /**
     * @return {?}
     */
    getAddressee$() {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getAddressee',
        }));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    addAddressee$(name) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAddressee',
            body: { name }
        }));
    }
    /**
     * @param {?} senderId
     * @param {?} details
     * @return {?}
     */
    addOrUpdateDetails$(senderId, details) {
        details = Object.assign({ senderId }, details);
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addOrUpdateDetails',
            body: details
        }));
    }
}
DetailsHttpService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DetailsHttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DetailsHttpService_Factory() { return new DetailsHttpService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: DetailsHttpService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1odHRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGV0YWlscy1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBdUIsTUFBTSxPQUFPLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBR3RELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlOzs7OztJQUVyRCxJQUFZLFVBQVU7UUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsVUFBVSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO1FBRVQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3BCLE1BQU0sRUFBRSxZQUFZO1NBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVELGFBQWE7UUFFWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFJO1FBRWhCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUM7U0FDYixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUdELG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFZO1FBQ3hDLE9BQU8sbUJBQUksUUFBUSxJQUFLLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7WUF4Q0YsVUFBVSxTQUFDLEVBQUcsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJzsgXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdE1vZGVsLCBEZXRhaWxzLCBJQWRkcmVzc2VlIH0gZnJvbSAndHlwZXMnO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2VCYXNlIH0gZnJvbSAnLi9odHRwLXNlcnZpY2UuYmFzZSc7XG5cbkBJbmplY3RhYmxlKHsgIHByb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0h0dHBTZXJ2aWNlIGV4dGVuZHMgSHR0cFNlcnZpY2VCYXNlICB7XG5cbiAgcHJpdmF0ZSBnZXQgX3NlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5pcHMuc2VydmljZVBhdGh9ZGV0YWlscy9gO1xuICB9XG5cbiAgZ2V0RGV0YWlscyQoKTogT2JzZXJ2YWJsZTxEZXRhaWxzW10+IHtcblxuICAgIHJldHVybiB0aGlzLmdldCQobmV3IEh0dHBSZXF1ZXN0TW9kZWwoe1xuICAgICAgdXJsOiB0aGlzLl9zZXJ2ZXJVcmwsXG4gICAgICBhY3Rpb246ICdnZXREZXRhaWxzJyxcbiAgICB9KSk7XG4gIH1cblxuICBnZXRBZGRyZXNzZWUkKCk6IE9ic2VydmFibGU8SUFkZHJlc3NlZVtdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0QWRkcmVzc2VlJyxcbiAgICB9KSk7XG4gIH1cblxuICBhZGRBZGRyZXNzZWUkKG5hbWUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnYWRkQWRkcmVzc2VlJyxcbiAgICAgIGJvZHk6IHtuYW1lfVxuICAgIH0pKTtcbiAgfVxuXG4gIFxuICBhZGRPclVwZGF0ZURldGFpbHMkKHNlbmRlcklkLCBkZXRhaWxzOiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBkZXRhaWxzID0ge3NlbmRlcklkLCAuLi5kZXRhaWxzfVxuICAgIHJldHVybiB0aGlzLnBvc3QkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnYWRkT3JVcGRhdGVEZXRhaWxzJyxcbiAgICAgIGJvZHk6IGRldGFpbHNcbiAgICB9KSk7XG4gIH1cblxufVxuXG5cbiJdfQ==