// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ByteLengthQueuingStrategy');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ByteLengthQueuingStrategy() constructor creates and returns a ByteLengthQueuingStrategy() object instance.
 * 
 *   {highWaterMark}
 *   An object containing a highWaterMark property. This is a non-negative integer defining the total number of chunks that can be contained in the internal queue before backpressure is applied.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy`
 */
web.ByteLengthQueuingStrategy.constructor$ = ByteLengthQueuingStrategy;
/**
 * Method.
 * 
 *   The size() method of the `web.ByteLengthQueueingStrategy` interface
 *   the given chunk’s byteLength property.
 * 
 *   `var size = byteLengthQueuingStrategyInstance.size(chunk);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy/size`
 */
web.ByteLengthQueuingStrategy.size = (function web$ByteLengthQueuingStrategy$size(this$,chunk){
return this$.size(chunk);
});

//# sourceMappingURL=ByteLengthQueuingStrategy.js.map?rel=1565798816699
