// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ResizeObserver');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ResizeObserver constructor creates a new `web.ResizeObserver` object which reports changes to the content rectangle of an `web.Element` or the bounding box of an `svg.SVGElement`.
 * 
 *   callback
 *   The method called whenever a resize occurs. The method is called with an array of `web.ResizeObserverEntry` objects.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver`
 */
web.ResizeObserver.constructor$ = ResizeObserver;
/**
 * Method.
 * 
 *   The disconnect() method of the `web.ResizeObserver` interface
 *   all observed `web.Element` or `svg.SVGElement` targets.
 * 
 *   `resizeObserver.disconnect();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/disconnect`
 */
web.ResizeObserver.disconnect = (function web$ResizeObserver$disconnect(this$){
return this$.disconnect();
});
/**
 * Method.
 * 
 *   The observe() method of the `web.ResizeObserver` interface starts
 *   the specified `web.Element` or `svg.SVGElement`.
 * 
 *   `resizeObserver.observe(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe`
 */
web.ResizeObserver.observe = (function web$ResizeObserver$observe(this$,target){
return this$.observe(target);
});
/**
 * Method.
 * 
 *   The unobserve() method of the `web.ResizeObserver` interface
 *   the observing of a specified `web.Element` or `svg.SVGElement`.
 * 
 *   `void unobserve(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/unobserve`
 */
web.ResizeObserver.unobserve = (function web$ResizeObserver$unobserve(this$,target){
return this$.unobserve(target);
});

//# sourceMappingURL=ResizeObserver.js.map?rel=1565798836382
