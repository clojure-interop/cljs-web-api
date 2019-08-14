// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Gyroscope');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Gyroscope constructor creates a new `web.Gyroscope` object which provides on each reading the angular velocity of the device along all three axes.
 * 
 *   options Optional
 *   Options are as follows:
 * 
 *   frequency: The desired number of times per second a sample should be taken, meaning the number of times per second that `web.sensor.onreading` will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.
 *   referenceFrame: Either 'device' or 'screen'. The default is 'device'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/Gyroscope`
 */
web.Gyroscope.constructor$ = Gyroscope;
/**
 * Property.
 * 
 *   The x read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its x axis.
 * 
 *   `var x = gyroscope.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/x`
 */
web.Gyroscope.x = (function web$Gyroscope$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The x read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its x axis.
 * 
 *   `var x = gyroscope.x`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/x`
 */
web.Gyroscope.set_x_BANG_ = (function web$Gyroscope$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its y axis.
 * 
 *   `var y = gyroscope.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/y`
 */
web.Gyroscope.y = (function web$Gyroscope$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The y read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its y axis.
 * 
 *   `var y = gyroscope.y`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/y`
 */
web.Gyroscope.set_y_BANG_ = (function web$Gyroscope$set_y_BANG_(this$,val){
return (this$["y"] = val);
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its z axis.
 * 
 *   `var z = gyroscope.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/z`
 */
web.Gyroscope.z = (function web$Gyroscope$z(this$){
return this$.z();
});
/**
 * Property.
 * 
 *   The z read-only property of the `web.Gyroscope` interface returns
 *   double precision integer containing the angular velocity of the
 *   along the its z axis.
 * 
 *   `var z = gyroscope.z`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope/z`
 */
web.Gyroscope.set_z_BANG_ = (function web$Gyroscope$set_z_BANG_(this$,val){
return (this$["z"] = val);
});

//# sourceMappingURL=Gyroscope.js.map?rel=1565798842814
