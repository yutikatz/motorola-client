import { Injectable, ɵɵdefineInjectable, Component, NgModule, ɵɵinject } from '@angular/core';
import { __read, __assign, __extends } from 'tslib';
import { combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { HttpRequestModel } from 'types';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return []; };
    /** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    /**
     * @return {?}
     */
    ApiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ApiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-api',
                    template: "\n    <p>\n      api works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ApiComponent.ctorParameters = function () { return []; };
    return ApiComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ApiComponent],
                    imports: [],
                    exports: [ApiComponent]
                },] }
    ];
    return ApiModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            return _a = __read(response, 1), _this.ips = _a[0], response;
        }))).toPromise();
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(HttpClient)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());
if (false) {
    /** @type {?} */
    ConfigurationService.prototype.ips;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/http-service.base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var HttpServiceBase = /** @class */ (function () {
    function HttpServiceBase(http, config) {
        this.http = http;
        this.config = config;
        this.index = 0;
    }
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.get$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.get(httpRequest.fullUrl, { params: __assign({}, httpRequest.fullParams) });
    };
    /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    HttpServiceBase.prototype.post$ = /**
     * @template T
     * @param {?} httpRequest
     * @return {?}
     */
    function (httpRequest) {
        return this.http.post(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: __assign({}, httpRequest.fullParams) });
    };
    HttpServiceBase.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpServiceBase.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConfigurationService }
    ]; };
    return HttpServiceBase;
}());
if (false) {
    /** @type {?} */
    HttpServiceBase.prototype.index;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpServiceBase.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/details-http.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DetailsHttpService = /** @class */ (function (_super) {
    __extends(DetailsHttpService, _super);
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
        details = __assign({ senderId: senderId }, details);
        return this.post$(new HttpRequestModel({
            url: this._serverUrl,
            action: 'addOrUpdateDetails',
            body: details
        }));
    };
    DetailsHttpService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DetailsHttpService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DetailsHttpService_Factory() { return new DetailsHttpService(ɵɵinject(HttpClient), ɵɵinject(ConfigurationService)); }, token: DetailsHttpService, providedIn: "root" });
    return DetailsHttpService;
}(HttpServiceBase));

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ApiComponent, ApiModule, ApiService, ConfigurationService, DetailsHttpService, HttpServiceBase as ɵa };
//# sourceMappingURL=api.js.map
