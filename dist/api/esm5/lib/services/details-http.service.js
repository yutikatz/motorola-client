/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/details-http.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestModel } from 'types';
import { HttpServiceBase } from './http-service.base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./configuration.service";
var DetailsHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsHttpService, _super);
    function DetailsHttpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DetailsHttpService.prototype, "_serverUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.config.ips.servicePath + "details/";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DetailsHttpService.prototype.getDetails$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getDetails',
        }));
    };
    /**
     * @return {?}
     */
    DetailsHttpService.prototype.getAddressee$ = /**
     * @return {?}
     */
    function () {
        return this.get$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'getAddressee',
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DetailsHttpService.prototype.addAddressee$ = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addAddressee',
            body: { name: name }
        }));
    };
    /**
     * @param {?} senderId
     * @param {?} details
     * @return {?}
     */
    DetailsHttpService.prototype.addOrUpdateDetails$ = /**
     * @param {?} senderId
     * @param {?} details
     * @return {?}
     */
    function (senderId, details) {
        details = tslib_1.__assign({ senderId: senderId }, details);
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addOrUpdateDetails',
            body: details
        }));
    };
    DetailsHttpService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DetailsHttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DetailsHttpService_Factory() { return new DetailsHttpService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ConfigurationService)); }, token: DetailsHttpService, providedIn: "root" });
    return DetailsHttpService;
}(HttpServiceBase));
export { DetailsHttpService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1odHRwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGV0YWlscy1odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQXVCLE1BQU0sT0FBTyxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUV0RDtJQUN3Qyw4Q0FBZTtJQUR2RDs7S0EwQ0M7SUF2Q0Msc0JBQVksMENBQVU7Ozs7O1FBQXRCO1lBQ0UsT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLGFBQVUsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3BDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsWUFBWTtTQUNyQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCwwQ0FBYTs7O0lBQWI7UUFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztZQUNwQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsTUFBTSxFQUFFLGNBQWM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELDBDQUFhOzs7O0lBQWIsVUFBYyxJQUFJO1FBRWhCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsRUFBQyxJQUFJLE1BQUEsRUFBQztTQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBR0QsZ0RBQW1COzs7OztJQUFuQixVQUFvQixRQUFRLEVBQUUsT0FBWTtRQUN4QyxPQUFPLHNCQUFJLFFBQVEsVUFBQSxJQUFLLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLGdCQUFnQixDQUFDO1lBQ3JDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNwQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOztnQkF4Q0YsVUFBVSxTQUFDLEVBQUcsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OzZCQUxsQztDQStDQyxBQTFDRCxDQUN3QyxlQUFlLEdBeUN0RDtTQXpDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7IFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3RNb2RlbCwgRGV0YWlscywgSUFkZHJlc3NlZSB9IGZyb20gJ3R5cGVzJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlQmFzZSB9IGZyb20gJy4vaHR0cC1zZXJ2aWNlLmJhc2UnO1xuXG5ASW5qZWN0YWJsZSh7ICBwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIERldGFpbHNIdHRwU2VydmljZSBleHRlbmRzIEh0dHBTZXJ2aWNlQmFzZSAge1xuXG4gIHByaXZhdGUgZ2V0IF9zZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaXBzLnNlcnZpY2VQYXRofWRldGFpbHMvYDtcbiAgfVxuXG4gIGdldERldGFpbHMkKCk6IE9ic2VydmFibGU8RGV0YWlsc1tdPiB7XG5cbiAgICByZXR1cm4gdGhpcy5nZXQkKG5ldyBIdHRwUmVxdWVzdE1vZGVsKHtcbiAgICAgIHVybDogdGhpcy5fc2VydmVyVXJsLFxuICAgICAgYWN0aW9uOiAnZ2V0RGV0YWlscycsXG4gICAgfSkpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VlJCgpOiBPYnNlcnZhYmxlPElBZGRyZXNzZWVbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2dldEFkZHJlc3NlZScsXG4gICAgfSkpO1xuICB9XG5cbiAgYWRkQWRkcmVzc2VlJChuYW1lKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2FkZEFkZHJlc3NlZScsXG4gICAgICBib2R5OiB7bmFtZX1cbiAgICB9KSk7XG4gIH1cblxuICBcbiAgYWRkT3JVcGRhdGVEZXRhaWxzJChzZW5kZXJJZCwgZGV0YWlsczogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgZGV0YWlscyA9IHtzZW5kZXJJZCwgLi4uZGV0YWlsc31cbiAgICByZXR1cm4gdGhpcy5wb3N0JChuZXcgSHR0cFJlcXVlc3RNb2RlbCh7XG4gICAgICB1cmw6IHRoaXMuX3NlcnZlclVybCxcbiAgICAgIGFjdGlvbjogJ2FkZE9yVXBkYXRlRGV0YWlscycsXG4gICAgICBib2R5OiBkZXRhaWxzXG4gICAgfSkpO1xuICB9XG5cbn1cblxuXG4iXX0=