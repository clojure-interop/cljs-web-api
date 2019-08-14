// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PositionOptions');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The PositionOptions.enableHighAccuracy property is a `web.Boolean`
 *   indicates the application would like to receive the best possible
 *   If true and if the device is able to provide a more accurate
 *   it will do so. Note that this can result in slower response times
 *   increased power consumption (with a GPS chip on a mobile device
 *   example). On the other hand, if false (the default value), the
 *   can take the liberty to save resources by responding more quickly
 *   using less power.
 * 
 *   `positionOptions.enableHighAccuracy = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy`
 */
web.PositionOptions.enable_high_accuracy = (function web$PositionOptions$enable_high_accuracy(this$){
return this$.enableHighAccuracy();
});
/**
 * Property.
 * 
 *   The PositionOptions.enableHighAccuracy property is a `web.Boolean`
 *   indicates the application would like to receive the best possible
 *   If true and if the device is able to provide a more accurate
 *   it will do so. Note that this can result in slower response times
 *   increased power consumption (with a GPS chip on a mobile device
 *   example). On the other hand, if false (the default value), the
 *   can take the liberty to save resources by responding more quickly
 *   using less power.
 * 
 *   `positionOptions.enableHighAccuracy = booleanValue`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/enableHighAccuracy`
 */
web.PositionOptions.set_enable_high_accuracy_BANG_ = (function web$PositionOptions$set_enable_high_accuracy_BANG_(this$,val){
return (this$["enableHighAccuracy"] = val);
});
/**
 * Property.
 * 
 *   The PositionOptions.maximumAge property is a positive long value
 *   the maximum age in milliseconds of a possible cached position
 *   is acceptable to return. If set to 0, it means that the device
 *   use a cached position and must attempt to retrieve the real current
 *   If set to Infinity the device must return a cached position regardless
 *   its age.
 * 
 *   `positionOptions.maximumAge = timeLength`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/maximumAge`
 */
web.PositionOptions.maximum_age = (function web$PositionOptions$maximum_age(this$){
return this$.maximumAge();
});
/**
 * Property.
 * 
 *   The PositionOptions.maximumAge property is a positive long value
 *   the maximum age in milliseconds of a possible cached position
 *   is acceptable to return. If set to 0, it means that the device
 *   use a cached position and must attempt to retrieve the real current
 *   If set to Infinity the device must return a cached position regardless
 *   its age.
 * 
 *   `positionOptions.maximumAge = timeLength`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/maximumAge`
 */
web.PositionOptions.set_maximum_age_BANG_ = (function web$PositionOptions$set_maximum_age_BANG_(this$,val){
return (this$["maximumAge"] = val);
});
/**
 * Property.
 * 
 *   The PositionOptions.timeout property is a positive long value
 *   the maximum length of time (in milliseconds) the device is allowed
 *   take in order to return a position. The default value is Infinity,
 *   that getCurrentPosition() won't return until the position is
 * 
 *   `positionOptions.timeout = timeLength`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/timeout`
 */
web.PositionOptions.timeout = (function web$PositionOptions$timeout(this$){
return this$.timeout();
});
/**
 * Property.
 * 
 *   The PositionOptions.timeout property is a positive long value
 *   the maximum length of time (in milliseconds) the device is allowed
 *   take in order to return a position. The default value is Infinity,
 *   that getCurrentPosition() won't return until the position is
 * 
 *   `positionOptions.timeout = timeLength`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions/timeout`
 */
web.PositionOptions.set_timeout_BANG_ = (function web$PositionOptions$set_timeout_BANG_(this$,val){
return (this$["timeout"] = val);
});

//# sourceMappingURL=PositionOptions.js.map?rel=1565798855917
