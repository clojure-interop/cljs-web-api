// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMPointReadOnly');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOMPointReadOnly() constructor returns a new `dom.DOMPointReadOnly` object representing a point in 2D or 3D space, optionally with perspective, whose values cannot be altered by script code.
 * 
 *   x Optional
 *   The value of the horizontal coordinate, x, as a floating point number. The default value is 0.
 *   y Optional
 *   The value of the vertical coordinate, y, as a floating point number. The default value is 0.
 *   z Optional
 *   The value of the depth coordinate, z, as a floating point number. The default value is 0.
 *   w Optional
 *   The value of the perspective, w, as a floating point number. The default is 1.
 * 
 * 
 * 
 *   Note: Each of these values is what's called an unrestricted number. In addition to any finite floating-point value, you may use special values such as ±`web.Infinity` and `web.NaN`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/DOMPointReadOnly`
 */
dom.DOMPointReadOnly.constructor$ = DOMPointReadOnly;
/**
 * Method.
 * 
 *   The static `dom.DOMPointReadOnly` method fromPoint() creates
 *   returns a new DOMPointReadOnly object given a source point.
 * 
 *   `var point = DOMPointReadOnly.fromPoint(sourcePoint);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/fromPoint`
 */
dom.DOMPointReadOnly.from_point = (function dom$DOMPointReadOnly$from_point(this$,source_point){
return this$.fromPoint(source_point);
});
/**
 * Method.
 * 
 *   The `dom.DOMPointReadOnly` method toJSON() returns a `dom.DOMPointInit`
 *   giving the JSON form of the point object.
 * 
 *   `pointJSON = DOMPointReadOnly.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/toJSON`
 */
dom.DOMPointReadOnly.to_json = (function dom$DOMPointReadOnly$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The DOMPointReadOnly interface's w property holds the point's
 *   value, w, for a read-only point in space.
 * 
 *   `var perspective = DOMPointReadOnly.w;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/w`
 */
dom.DOMPointReadOnly.w = (function dom$DOMPointReadOnly$w(this$){
return this$.w();
});
/**
 * Property.
 * 
 *   The DOMPointReadOnly interface's x property holds the horizontal
 *   x, for a read-only point in space. This property cannot be changed
 *   JavaScript code in this read-only version of the DOMPoint object.
 * 
 *   `var xPos = DOMPointReadOnly.x;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/x`
 */
dom.DOMPointReadOnly.x = (function dom$DOMPointReadOnly$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The DOMPointReadOnly interface's y property holds the vertical
 *   y, for a read-only point in space.
 * 
 *   `var yPos = DOMPointReadOnly.y;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/y`
 */
dom.DOMPointReadOnly.y = (function dom$DOMPointReadOnly$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The DOMPointReadOnly interface's z property holds the depth coordinate,
 *   for a read-only point in space.
 * 
 *   `var zPos = DOMPointReadOnly.z;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointReadOnly/z`
 */
dom.DOMPointReadOnly.z = (function dom$DOMPointReadOnly$z(this$){
return this$.z();
});

//# sourceMappingURL=DOMPointReadOnly.js.map?rel=1565798811543
