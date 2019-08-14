// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.IntersectionObserverEntry');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only boundingClientRect
 *   returns a `dom.DOMRectReadOnly` which in essence describes a
 *   describing the smallest rectangle that contains the entire target
 * 
 *   `var boundsRect = IntersectionObserverEntry.boundingClientRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect`
 */
web.IntersectionObserverEntry.bounding_client_rect = (function web$IntersectionObserverEntry$bounding_client_rect(this$){
return this$.boundingClientRect();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only boundingClientRect
 *   returns a `dom.DOMRectReadOnly` which in essence describes a
 *   describing the smallest rectangle that contains the entire target
 * 
 *   `var boundsRect = IntersectionObserverEntry.boundingClientRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect`
 */
web.IntersectionObserverEntry.set_bounding_client_rect_BANG_ = (function web$IntersectionObserverEntry$set_bounding_client_rect_BANG_(this$,val){
return (this$["boundingClientRect"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only intersectionRatio
 *   tells you how much of the target element is currently visible
 *   the root's intersection ratio, as a value between 0.0 and 1.0.
 * 
 *   `var intersectionRatio = IntersectionObserverEntry.intersectionRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio`
 */
web.IntersectionObserverEntry.intersection_ratio = (function web$IntersectionObserverEntry$intersection_ratio(this$){
return this$.intersectionRatio();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only intersectionRatio
 *   tells you how much of the target element is currently visible
 *   the root's intersection ratio, as a value between 0.0 and 1.0.
 * 
 *   `var intersectionRatio = IntersectionObserverEntry.intersectionRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio`
 */
web.IntersectionObserverEntry.set_intersection_ratio_BANG_ = (function web$IntersectionObserverEntry$set_intersection_ratio_BANG_(this$,val){
return (this$["intersectionRatio"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only intersectionRect
 *   is a `dom.DOMRectReadOnly` object which describes the smallest
 *   that contains the entire portion of the target element which
 *   currently visible within the intersection root.
 * 
 *   `var intersectionRect = IntersectionObserverEntry.intersectionRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect`
 */
web.IntersectionObserverEntry.intersection_rect = (function web$IntersectionObserverEntry$intersection_rect(this$){
return this$.intersectionRect();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only intersectionRect
 *   is a `dom.DOMRectReadOnly` object which describes the smallest
 *   that contains the entire portion of the target element which
 *   currently visible within the intersection root.
 * 
 *   `var intersectionRect = IntersectionObserverEntry.intersectionRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect`
 */
web.IntersectionObserverEntry.set_intersection_rect_BANG_ = (function web$IntersectionObserverEntry$set_intersection_rect_BANG_(this$,val){
return (this$["intersectionRect"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only isIntersecting
 *   is a Boolean value which is true if the target element intersects
 *   the intersection observer's root. If this is true, then, the
 *   describes a transition into a state of intersection; if it's
 *   then you know the transition is from intersecting to not-intersecting.
 * 
 *   `var isIntersecting = IntersectionObserverEntry.isIntersecting;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting`
 */
web.IntersectionObserverEntry.is_intersecting = (function web$IntersectionObserverEntry$is_intersecting(this$){
return this$.isIntersecting();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only isIntersecting
 *   is a Boolean value which is true if the target element intersects
 *   the intersection observer's root. If this is true, then, the
 *   describes a transition into a state of intersection; if it's
 *   then you know the transition is from intersecting to not-intersecting.
 * 
 *   `var isIntersecting = IntersectionObserverEntry.isIntersecting;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting`
 */
web.IntersectionObserverEntry.set_is_intersecting_BANG_ = (function web$IntersectionObserverEntry$set_is_intersecting_BANG_(this$,val){
return (this$["isIntersecting"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only rootBounds
 *   is a `dom.DOMRectReadOnly` corresponding to the `web.target`'s
 *   intersection rectangle, offset by the `web.IntersectionObserver.rootMargin`
 *   one is specified.
 * 
 *   `var rootBounds = IntersectionObserverEntry.rootBounds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds`
 */
web.IntersectionObserverEntry.root_bounds = (function web$IntersectionObserverEntry$root_bounds(this$){
return this$.rootBounds();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only rootBounds
 *   is a `dom.DOMRectReadOnly` corresponding to the `web.target`'s
 *   intersection rectangle, offset by the `web.IntersectionObserver.rootMargin`
 *   one is specified.
 * 
 *   `var rootBounds = IntersectionObserverEntry.rootBounds;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds`
 */
web.IntersectionObserverEntry.set_root_bounds_BANG_ = (function web$IntersectionObserverEntry$set_root_bounds_BANG_(this$,val){
return (this$["rootBounds"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only target
 *   indicates which targeted `web.Element` has changed its amount
 *   intersection with the intersection root.
 * 
 *   `var target = IntersectionObserverEntry.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target`
 */
web.IntersectionObserverEntry.target = (function web$IntersectionObserverEntry$target(this$){
return this$.target();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only target
 *   indicates which targeted `web.Element` has changed its amount
 *   intersection with the intersection root.
 * 
 *   `var target = IntersectionObserverEntry.target;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target`
 */
web.IntersectionObserverEntry.set_target_BANG_ = (function web$IntersectionObserverEntry$set_target_BANG_(this$,val){
return (this$["target"] = val);
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only time
 *   is a `dom.DOMHighResTimeStamp` that indicates the time at which
 *   intersection change occurred relative to the time at which the
 *   was created.
 * 
 *   `var time = IntersectionObserverEntry.time;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time`
 */
web.IntersectionObserverEntry.time = (function web$IntersectionObserverEntry$time(this$){
return this$.time();
});
/**
 * Property.
 * 
 *   The `web.IntersectionObserverEntry` interface's read-only time
 *   is a `dom.DOMHighResTimeStamp` that indicates the time at which
 *   intersection change occurred relative to the time at which the
 *   was created.
 * 
 *   `var time = IntersectionObserverEntry.time;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time`
 */
web.IntersectionObserverEntry.set_time_BANG_ = (function web$IntersectionObserverEntry$set_time_BANG_(this$,val){
return (this$["time"] = val);
});

//# sourceMappingURL=IntersectionObserverEntry.js.map?rel=1565798811420
