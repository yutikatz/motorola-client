/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ConfigurationService.prototype.initConfiguration = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        return combineLatest(this.http.get(path)).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var _a;
            return _a = tslib_1.__read(response, 1), _this.ips = _a[0], response;
        }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
export { ConfigurationService };
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBpLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2hEO0lBSUUsOEJBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMxQixDQUFDOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixJQUFJO1FBQXRCLGlCQU9DO1FBTEMsT0FBTyxhQUFhLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBRSxDQUNoQyxDQUFDLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsVUFBQSxRQUFROztZQUFJLE9BQUEsZ0NBQXFCLEVBQXBCLGlCQUFRLEVBQUksUUFBUTtRQUFyQixDQUFxQixFQUFDLENBQ3ZDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFKekIsVUFBVTs7OytCQUZuQjtDQXNCQyxBQWhCRCxJQWdCQztTQWZZLG9CQUFvQjs7O0lBQy9CLG1DQUFjOzs7OztJQUdaLG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSXBDb25maWcgfSBmcm9tICd0eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG4gIGlwczogSXBDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgfVxyXG5cclxuICBpbml0Q29uZmlndXJhdGlvbihwYXRoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXHJcbiAgICAgIHRoaXMuaHR0cC5nZXQ8SXBDb25maWc+KCBwYXRoICksXHJcbiAgICApLnBpcGUoXHJcbiAgICAgIHRhcChyZXNwb25zZSA9PiBbdGhpcy5pcHNdID0gcmVzcG9uc2UpLFxyXG4gICAgKS50b1Byb21pc2UoKTtcclxuICB9XHJcbn1cclxuIl19