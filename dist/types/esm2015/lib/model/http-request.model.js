/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/http-request.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HttpRequestModel {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHlwZXMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvaHR0cC1yZXF1ZXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVUzQixZQUFZLElBQWdDO1FBTDVDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUtiLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3RDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksRUFBQzthQUNqQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUM7YUFDdEMsTUFBTTs7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQU0sS0FBSyxJQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFHLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFFakUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV6QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUM7YUFDakMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFDO2FBQ3RDLE1BQU07Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUMxQixLQUFLLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQ3BCLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7O2NBRVAsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUU3QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQWMsRUFBRSxTQUFpQixFQUFFOztjQUNoRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDbEMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFDO2FBQ2xELEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQzthQUNyRSxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRVosT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUMxQixNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUM7YUFDbEQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBQzthQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQUksT0FBTyxLQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7SUFFckQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjs7O0lBckRDLHNDQUFtQjs7SUFDbkIsK0JBQVk7O0lBQ1osa0NBQWU7O0lBQ2Ysa0NBQW9COztJQUNwQixnQ0FBZTs7SUFDZixrQ0FBZ0I7O0lBQ2hCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0TW9kZWwge1xyXG4gICBcclxuICBsb2dNZXNzYWdlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbiAgcGFyYW1zOiBvYmplY3QgPSB7fTtcclxuICBib2R5OiBhbnkgPSB7fTtcclxuICBpc1RleHQ6IGJvb2xlYW47XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvcHk/OiBQYXJ0aWFsPEh0dHBSZXF1ZXN0TW9kZWw+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvcHkpO1xyXG5cclxuICAgIHRoaXMucGFyYW1zID0gT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gbnVsbClcclxuICAgICAgLmZpbHRlcigoWywgdmFsXSkgPT4gdmFsICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIC5yZWR1Y2UoKHN0YXRlLCBba2V5LCB2YWxdKSA9PiAoeyAuLi5zdGF0ZSwgW2tleV06IHZhbCB9KSwge30pO1xyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuYm9keSkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgdGhpcy5ib2R5ID0gT2JqZWN0LmVudHJpZXModGhpcy5ib2R5KVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWxdKSA9PiB2YWwgIT09IG51bGwpXHJcbiAgICAgIC5maWx0ZXIoKFssIHZhbF0pID0+IHZhbCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAucmVkdWNlKChzdGF0ZSwgW2tleSwgdmFsXSkgPT4gKHtcclxuICAgICAgICAuLi5zdGF0ZSwgW2tleV06IHZhbFxyXG4gICAgICB9KSwge30pO1xyXG5cclxuICAgIHRoaXMuYm9keSA9IE9iamVjdC5rZXlzKHRoaXMuYm9keSkubGVuZ3RoID8gdGhpcy5ib2R5IDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeVBhcmFtcygpIHtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9xdWVyeVBhcmFtcyh0aGlzLnBhcmFtcyk7XHJcblxyXG4gICAgcmV0dXJuIC8mLy50ZXN0KHJlc3VsdCkgPyBgPyR7cmVzdWx0fWAgOiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3F1ZXJ5UGFyYW1zKHBhcmFtczogb2JqZWN0LCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgLmZpbHRlcigoWywgdmFsdWVdKSA9PiB0eXBlb2YgKHZhbHVlKSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gYCR7cHJlZml4fSR7a2V5fT0ke2RlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YClcclxuICAgICAgLmpvaW4oJyYnKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMocGFyYW1zKVxyXG4gICAgICAuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHR5cGVvZiAodmFsdWUpID09PSAnb2JqZWN0JylcclxuICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB0aGlzLl9xdWVyeVBhcmFtcyh2YWx1ZSwgYCR7a2V5fS5gKSlcclxuICAgICAgLmNvbmNhdChyZXN1bHQpXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgZnVsbFVybCgpIHsgcmV0dXJuIGAke3RoaXMudXJsfSR7dGhpcy5hY3Rpb259YDsgfVxyXG5cclxuICBnZXQgZnVsbFBhcmFtcygpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmFtcztcclxuICB9XHJcbn1cclxuIl19