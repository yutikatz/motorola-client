import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesService {
    constructor() { }
}
TypesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TypesService.ctorParameters = () => [];
/** @nocollapse */ TypesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TypesService_Factory() { return new TypesService(); }, token: TypesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TypesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-types',
                template: `
    <p>
      types works!
    </p>
  `
            }] }
];
/** @nocollapse */
TypesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypesModule {
}
TypesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TypesComponent],
                imports: [],
                exports: [TypesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/ip-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IpConfig() { }
if (false) {
    /** @type {?|undefined} */
    IpConfig.prototype.servicePath;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpRequestModel {
    /**
     * @param {?=} copy
     */
    constructor(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== null))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, val]) => val !== undefined))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        (state, [key, val]) => (Object.assign({}, state, { [key]: val }))), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    /**
     * @return {?}
     */
    get queryParams() {
        /** @type {?} */
        const result = this._queryParams(this.params);
        return /&/.test(result) ? `?${result}` : '';
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    _queryParams(params, prefix = '') {
        /** @type {?} */
        const result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) !== 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => `${prefix}${key}=${decodeURIComponent(value)}`))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([, value]) => typeof (value) === 'object'))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ([key, value]) => this._queryParams(value, `${key}.`)))
            .concat(result)
            .join('&');
    }
    /**
     * @return {?}
     */
    get fullUrl() { return `${this.url}${this.action}`; }
    /**
     * @return {?}
     */
    get fullParams() {
        return this.params;
    }
}
if (false) {
    /** @type {?} */
    HttpRequestModel.prototype.logMessage;
    /** @type {?} */
    HttpRequestModel.prototype.url;
    /** @type {?} */
    HttpRequestModel.prototype.action;
    /** @type {?} */
    HttpRequestModel.prototype.params;
    /** @type {?} */
    HttpRequestModel.prototype.body;
    /** @type {?} */
    HttpRequestModel.prototype.isText;
    /** @type {?} */
    HttpRequestModel.prototype.headers;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/details.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Details() { }
if (false) {
    /** @type {?} */
    Details.prototype.firstName;
    /** @type {?} */
    Details.prototype.lastName;
    /** @type {?} */
    Details.prototype.address;
    /** @type {?} */
    Details.prototype.email;
    /** @type {?} */
    Details.prototype.title;
    /** @type {?} */
    Details.prototype.text;
    /** @type {?} */
    Details.prototype.background;
    /** @type {?} */
    Details.prototype.border;
    /** @type {?} */
    Details.prototype.fontColor;
    /** @type {?} */
    Details.prototype.font;
    /** @type {?} */
    Details.prototype.width;
    /** @type {?} */
    Details.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function control() { }
if (false) {
    /** @type {?} */
    control.prototype.type;
    /** @type {?} */
    control.prototype.name;
    /** @type {?} */
    control.prototype.placeholder;
    /** @type {?|undefined} */
    control.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/addressee.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IAddressee() { }
if (false) {
    /** @type {?} */
    IAddressee.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HttpRequestModel, TypesComponent, TypesModule, TypesService };
//# sourceMappingURL=types.js.map
