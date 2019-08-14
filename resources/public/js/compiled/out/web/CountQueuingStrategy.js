// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CountQueuingStrategy');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The CountQueuingStrategy() constructor creates and returns a CountQueuingStrategy() object instance.
 * 
 *   {highWaterMark}
 *   An object containing a highWaterMark property. This is a non-negative integer defining the total number of chunks that can be contained in the internal queue before backpressure is applied.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy`
 */
web.CountQueuingStrategy.constructor$ = CountQueuingStrategy;
/**
 * Method.
 * 
 *   The size() method of the `web.CountQueuingStrategy` interface
 *   returns 1, so that the total queue size is a count of the number
 *   chunks in the queue.
 * 
 *   `var size = countQueuingStrategyInstance.size();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy/size`
 */
web.CountQueuingStrategy.size = (function web$CountQueuingStrategy$size(this$){
return this$.size();
});

//# sourceMappingURL=CountQueuingStrategy.js.map?rel=1565798806538
