// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.IntersectionObserver');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The IntersectionObserver() constructor creates and returns a new `web.IntersectionObserver` object.
 * 
 *   callback
 *   A function which is called when the percentage of the target element is visible crosses a threshold. The callback receives as input two parameters:
 * 
 *   entries
 *   An array of `web.IntersectionObserverEntry` objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
 *   observer
 *   The `web.IntersectionObserver` for which the callback is being invoked.
 * 
 * 
 *   options Optional
 *   An optional object which customizes the observer. If options isn't specified, the observer uses the document's viewport as the root, with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback). You can provide any combination of the following options:
 * 
 *   root
 *   An `web.Element` object which is an ancestor of the intended target, whose bounding rectangle will be considered the viewport. Any part of the target not visible in the visible area of the root is not considered visible.
 *   rootMargin
 *   A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes. The syntax is approximately the same as that for the CSS `web.margin` property; see The root element and root margin in Intersection Observer API for more information on how the margin works and the syntax. The default is \"0px 0px 0px 0px\".
 *   threshold
 *   Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target. A value of 0.0 means that even a single visible pixel counts as the target being visible. 1.0 means that the entire target element is visible. See Thresholds in Intersection Observer API for a more in-depth description of how thresholds are used. The default is a threshold of 0.0.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver`
 */
web.IntersectionObserver.constructor$ = IntersectionObserver;
/**
 * Method.
 * 
 *   The `web.IntersectionObserver` method disconnect() stops watching
 *   of its target elements for visibility changes.
 * 
 *   `intersectionObserver.disconnect();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect`
 */
web.IntersectionObserver.disconnect = (function web$IntersectionObserver$disconnect(this$){
return this$.disconnect();
});
/**
 * Method.
 * 
 *   The `web.IntersectionObserver` method observe() adds an element
 *   the set of target elements being watched by the IntersectionObserver.
 *   observer has one set of thresholds and one root, but can watch
 *   target elements for visibility changes in keeping with those.
 * 
 *   `IntersectionObserver.observe(targetElement);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe`
 */
web.IntersectionObserver.observe = (function web$IntersectionObserver$observe(this$,target_element){
return this$.observe(target_element);
});
/**
 * Method.
 * 
 *   The `web.IntersectionObserver` method takeRecords() returns an
 *   of `web.IntersectionObserverEntry` objects, one for each targeted
 *   which has experienced an intersection change since the last time
 *   intersections were checked, either explicitly through a call
 *   this method or implicitly by an automatic call to the observer's
 * 
 *   `intersectionObserverEntries = intersectionObserver.takeRecords();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords`
 */
web.IntersectionObserver.take_records = (function web$IntersectionObserver$take_records(this$){
return this$.takeRecords();
});
/**
 * Method.
 * 
 *   The `web.IntersectionObserver` method unobserve() instructs the
 *   to stop observing the specified target element.
 * 
 *   `IntersectionObserver.unobserve(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve`
 */
web.IntersectionObserver.unobserve = (function web$IntersectionObserver$unobserve(this$,target){
return this$.unobserve(target);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only root property
 *   the `web.Element` whose bounds are treated as the bounding box
 *   the viewport for the element which is the observer's target.
 *   the root is null, then the bounds of the actual document viewport
 *   used.
 * 
 *   `var root = intersectionObserver.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root`
 */
web.IntersectionObserver.root = (function web$IntersectionObserver$root(this$){
return this$.root();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only root property
 *   the `web.Element` whose bounds are treated as the bounding box
 *   the viewport for the element which is the observer's target.
 *   the root is null, then the bounds of the actual document viewport
 *   used.
 * 
 *   `var root = intersectionObserver.root;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root`
 */
web.IntersectionObserver.set_root_BANG_ = (function web$IntersectionObserver$set_root_BANG_(this$,val){
return (this$["root"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only rootMargin
 *   is a string with syntax similar to that of the CSS `web.margin`
 *   Each side of the rectangle represented by rootMargin is added
 *   the corresponding side in the `web.root` element's bounding box
 *   the intersection test is performed. This lets you, for example,
 *   the bounds outward so that the target element is considered 100%
 *   even if a certain number of pixels worth of width or height is
 *   away, or treat the target as partially hidden if an edge is too
 *   to the edge of the root's bounding box.
 * 
 *   `var marginString = IntersectionObserver.rootMargin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin`
 */
web.IntersectionObserver.root_margin = (function web$IntersectionObserver$root_margin(this$){
return this$.rootMargin();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only rootMargin
 *   is a string with syntax similar to that of the CSS `web.margin`
 *   Each side of the rectangle represented by rootMargin is added
 *   the corresponding side in the `web.root` element's bounding box
 *   the intersection test is performed. This lets you, for example,
 *   the bounds outward so that the target element is considered 100%
 *   even if a certain number of pixels worth of width or height is
 *   away, or treat the target as partially hidden if an edge is too
 *   to the edge of the root's bounding box.
 * 
 *   `var marginString = IntersectionObserver.rootMargin;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin`
 */
web.IntersectionObserver.set_root_margin_BANG_ = (function web$IntersectionObserver$set_root_margin_BANG_(this$,val){
return (this$["rootMargin"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only thresholds
 *   returns the list of intersection thresholds that was specified
 *   the observer was instantiated with `web.IntersectionObserver()`.
 *   only one threshold ratio was provided when instanitating the
 *   this will be an array containing that single value.
 * 
 *   `var thresholds = IntersectionObserver.thresholds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds`
 */
web.IntersectionObserver.thresholds = (function web$IntersectionObserver$thresholds(this$){
return this$.thresholds();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserver` interface's read-only thresholds
 *   returns the list of intersection thresholds that was specified
 *   the observer was instantiated with `web.IntersectionObserver()`.
 *   only one threshold ratio was provided when instanitating the
 *   this will be an array containing that single value.
 * 
 *   `var thresholds = IntersectionObserver.thresholds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds`
 */
web.IntersectionObserver.set_thresholds_BANG_ = (function web$IntersectionObserver$set_thresholds_BANG_(this$,val){
return (this$["thresholds"] = val);
});

//# sourceMappingURL=IntersectionObserver.js.map?rel=1565798861438
