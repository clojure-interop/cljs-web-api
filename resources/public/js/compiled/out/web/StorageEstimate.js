// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StorageEstimate');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `web.StorageEstimate` dictionary's quota property is a conservative
 *   of how much storage is allotted to the origin or Web app that
 *   `web.StorageManager.estimate()`; there may be more space available,
 *   there will not be less. This value is an estimate to help prevent
 *   use for fingerprinting—that is, identifying a device using an
 *   of the values of seemingly innocuous properties.
 * 
 *   `quota = StorageEstimate.quota;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`
 */
web.StorageEstimate.quota = (function web$StorageEstimate$quota(this$){
return this$.quota();
});
/**
 * Property.
 * 
 *   The `web.StorageEstimate` dictionary's quota property is a conservative
 *   of how much storage is allotted to the origin or Web app that
 *   `web.StorageManager.estimate()`; there may be more space available,
 *   there will not be less. This value is an estimate to help prevent
 *   use for fingerprinting—that is, identifying a device using an
 *   of the values of seemingly innocuous properties.
 * 
 *   `quota = StorageEstimate.quota;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/quota`
 */
web.StorageEstimate.set_quota_BANG_ = (function web$StorageEstimate$set_quota_BANG_(this$,val){
return (this$["quota"] = val);
});
/**
 * Property.
 * 
 *   The `web.StorageEstimate` dictionary's usage property is a conservative
 *   of how much storage is allotted to the origin or Web app that
 *   `web.StorageManager.estimate()`; there may be more space available,
 *   there will not be less. The value is an estimate because the
 *   agent may use compression, duplication prevention techniques,
 *   other methods to improve storage efficiency.
 * 
 *   `usage = StorageEstimate.usage;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`
 */
web.StorageEstimate.usage = (function web$StorageEstimate$usage(this$){
return this$.usage();
});
/**
 * Property.
 * 
 *   The `web.StorageEstimate` dictionary's usage property is a conservative
 *   of how much storage is allotted to the origin or Web app that
 *   `web.StorageManager.estimate()`; there may be more space available,
 *   there will not be less. The value is an estimate because the
 *   agent may use compression, duplication prevention techniques,
 *   other methods to improve storage efficiency.
 * 
 *   `usage = StorageEstimate.usage;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate/usage`
 */
web.StorageEstimate.set_usage_BANG_ = (function web$StorageEstimate$set_usage_BANG_(this$,val){
return (this$["usage"] = val);
});

//# sourceMappingURL=StorageEstimate.js.map?rel=1565798855447
