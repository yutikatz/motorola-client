/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var HttpRequestModel = /** @class */ (function () {
    function HttpRequestModel(copy) {
        this.params = {};
        this.body = {};
        Object.assign(this, copy);
        this.params = Object.entries(this.params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        if (Array.isArray(this.body)) {
            return;
        }
        this.body = Object.entries(this.body)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== null;
        }))
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), val = _b[1];
            return val !== undefined;
        }))
            .reduce((/**
         * @param {?} state
         * @param {?} __1
         * @return {?}
         */
        function (state, _a) {
            var _b;
            var _c = tslib_1.__read(_a, 2), key = _c[0], val = _c[1];
            return (tslib_1.__assign({}, state, (_b = {}, _b[key] = val, _b)));
        }), {});
        this.body = Object.keys(this.body).length ? this.body : null;
    }
    Object.defineProperty(HttpRequestModel.prototype, "queryParams", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this._queryParams(this.params);
            return /&/.test(result) ? "?" + result : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    HttpRequestModel.prototype._queryParams = /**
     * @private
     * @param {?} params
     * @param {?=} prefix
     * @return {?}
     */
    function (params, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ''; }
        /** @type {?} */
        var result = Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) !== 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return "" + prefix + key + "=" + decodeURIComponent(value);
        }))
            .join('&');
        return Object.entries(params)
            .filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), value = _b[1];
            return typeof (value) === 'object';
        }))
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return _this._queryParams(value, key + ".");
        }))
            .concat(result)
            .join('&');
    };
    Object.defineProperty(HttpRequestModel.prototype, "fullUrl", {
        get: /**
         * @return {?}
         */
        function () { return "" + this.url + this.action; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpRequestModel.prototype, "fullParams", {
        get: /**
         * @return {?}
         */
        function () {
            return this.params;
        },
        enumerable: true,
        configurable: true
    });
    return HttpRequestModel;
}());
export { HttpRequestModel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvaHR0cC1yZXF1ZXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0lBVUUsMEJBQVksSUFBZ0M7UUFMNUMsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBS2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDdEMsTUFBTTs7OztRQUFDLFVBQUMsRUFBTztnQkFBUCwwQkFBTyxFQUFKLFdBQUc7WUFBTSxPQUFBLEdBQUcsS0FBSyxJQUFJO1FBQVosQ0FBWSxFQUFDO2FBQ2pDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQU87Z0JBQVAsMEJBQU8sRUFBSixXQUFHO1lBQU0sT0FBQSxHQUFHLEtBQUssU0FBUztRQUFqQixDQUFpQixFQUFDO2FBQ3RDLE1BQU07Ozs7O1FBQUMsVUFBQyxLQUFLLEVBQUUsRUFBVTs7Z0JBQVYsMEJBQVUsRUFBVCxXQUFHLEVBQUUsV0FBRztZQUFNLE9BQUEsc0JBQU0sS0FBSyxlQUFHLEdBQUcsSUFBRyxHQUFHLE9BQUc7UUFBMUIsQ0FBMEIsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRXpDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQU87Z0JBQVAsMEJBQU8sRUFBSixXQUFHO1lBQU0sT0FBQSxHQUFHLEtBQUssSUFBSTtRQUFaLENBQVksRUFBQzthQUNqQyxNQUFNOzs7O1FBQUMsVUFBQyxFQUFPO2dCQUFQLDBCQUFPLEVBQUosV0FBRztZQUFNLE9BQUEsR0FBRyxLQUFLLFNBQVM7UUFBakIsQ0FBaUIsRUFBQzthQUN0QyxNQUFNOzs7OztRQUFDLFVBQUMsS0FBSyxFQUFFLEVBQVU7O2dCQUFWLDBCQUFVLEVBQVQsV0FBRyxFQUFFLFdBQUc7WUFBTSxPQUFBLHNCQUMxQixLQUFLLGVBQUcsR0FBRyxJQUFHLEdBQUcsT0FDcEI7UUFGNkIsQ0FFN0IsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELHNCQUFJLHlDQUFXOzs7O1FBQWY7O2dCQUVRLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFN0MsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFJLE1BQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzlDLENBQUM7OztPQUFBOzs7Ozs7O0lBRU8sdUNBQVk7Ozs7OztJQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBbUI7UUFBeEQsaUJBV0M7UUFYb0MsdUJBQUEsRUFBQSxXQUFtQjs7WUFDaEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ2xDLE1BQU07Ozs7UUFBQyxVQUFDLEVBQVM7Z0JBQVQsMEJBQVMsRUFBTixhQUFLO1lBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUTtRQUEzQixDQUEyQixFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUFNLE9BQUEsS0FBRyxNQUFNLEdBQUcsR0FBRyxTQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBRztRQUE5QyxDQUE4QyxFQUFDO2FBQ3JFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQzFCLE1BQU07Ozs7UUFBQyxVQUFDLEVBQVM7Z0JBQVQsMEJBQVMsRUFBTixhQUFLO1lBQU0sT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUTtRQUEzQixDQUEyQixFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxVQUFDLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUssR0FBRyxNQUFHLENBQUM7UUFBbkMsQ0FBbUMsRUFBQzthQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxLQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBRXJELHNCQUFJLHdDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDSCx1QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7Ozs7SUFyREMsc0NBQW1COztJQUNuQiwrQkFBWTs7SUFDWixrQ0FBZTs7SUFDZixrQ0FBb0I7O0lBQ3BCLGdDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsbUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cFJlcXVlc3RNb2RlbCB7XHJcbiAgIFxyXG4gIGxvZ01lc3NhZ2U6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBhY3Rpb246IHN0cmluZztcclxuICBwYXJhbXM6IG9iamVjdCA9IHt9O1xyXG4gIGJvZHk6IGFueSA9IHt9O1xyXG4gIGlzVGV4dDogYm9vbGVhbjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuXHJcbiAgY29uc3RydWN0b3IoY29weT86IFBhcnRpYWw8SHR0cFJlcXVlc3RNb2RlbD4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29weSk7XHJcblxyXG4gICAgdGhpcy5wYXJhbXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSBudWxsKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IHVuZGVmaW5lZClcclxuICAgICAgLnJlZHVjZSgoc3RhdGUsIFtrZXksIHZhbF0pID0+ICh7IC4uLnN0YXRlLCBba2V5XTogdmFsIH0pLCB7fSk7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ib2R5KSkgeyByZXR1cm47IH1cclxuXHJcbiAgICB0aGlzLmJvZHkgPSBPYmplY3QuZW50cmllcyh0aGlzLmJvZHkpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIC5yZWR1Y2UoKHN0YXRlLCBba2V5LCB2YWxdKSA9PiAoe1xyXG4gICAgICAgIC4uLnN0YXRlLCBba2V5XTogdmFsXHJcbiAgICAgIH0pLCB7fSk7XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gT2JqZWN0LmtleXModGhpcy5ib2R5KS5sZW5ndGggPyB0aGlzLmJvZHkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1ZXJ5UGFyYW1zKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX3F1ZXJ5UGFyYW1zKHRoaXMucGFyYW1zKTtcclxuXHJcbiAgICByZXR1cm4gLyYvLnRlc3QocmVzdWx0KSA/IGA/JHtyZXN1bHR9YCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcXVlcnlQYXJhbXMocGFyYW1zOiBvYmplY3QsIHByZWZpeDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiAodmFsdWUpICE9PSAnb2JqZWN0JylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtwcmVmaXh9JHtrZXl9PSR7ZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKVxyXG4gICAgICAuam9pbignJicpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhwYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbHVlXSkgPT4gdHlwZW9mICh2YWx1ZSkgPT09ICdvYmplY3QnKVxyXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHRoaXMuX3F1ZXJ5UGFyYW1zKHZhbHVlLCBgJHtrZXl9LmApKVxyXG4gICAgICAuY29uY2F0KHJlc3VsdClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuICB9XHJcblxyXG4gIGdldCBmdWxsVXJsKCkgeyByZXR1cm4gYCR7dGhpcy51cmx9JHt0aGlzLmFjdGlvbn1gOyB9XHJcblxyXG4gIGdldCBmdWxsUGFyYW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=