(ns web.observers.IntersectionObserver
  "provides a way to asynchronously observe changes in the intersection
  a target element with an ancestor element or with a top-level
  viewport."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The IntersectionObserver() constructor creates and returns a new `web.observers.IntersectionObserver` object.

  callback
  A function which is called when the percentage of the target element is visible crosses a threshold. The callback receives as input two parameters:

  entries
  An array of `web.observers.IntersectionObserverEntry` objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
  observer
  The `web.observers.IntersectionObserver` for which the callback is being invoked.


  options Optional
  An optional object which customizes the observer. If options isn't specified, the observer uses the document's viewport as the root, with no margin, and a 0% threshold (meaning that even a one-pixel change is enough to trigger a callback). You can provide any combination of the following options:

  root
  An `web.Element` object which is an ancestor of the intended target, whose bounding rectangle will be considered the viewport. Any part of the target not visible in the visible area of the root is not considered visible.
  rootMargin
  A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections, effectively shrinking or growing the root for calculation purposes. The syntax is approximately the same as that for the CSS `margin` property; see The root element and root margin in Intersection Observer API for more information on how the margin works and the syntax. The default is \\\"0px 0px 0px 0px\\\".
  threshold
  Either a single number or an array of numbers between 0.0 and 1.0, specifying a ratio of intersection area to total bounding box area for the observed target. A value of 0.0 means that even a single visible pixel counts as the target being visible. 1.0 means that the entire target element is visible. See Thresholds in Intersection Observer API for a more in-depth description of how thresholds are used. The default is a threshold of 0.0.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver`"
  js/IntersectionObserver)

(defn disconnect
  "Method.

  The `web.observers.IntersectionObserver` method disconnect()
  watching all of its target elements for visibility changes.

  `intersectionObserver.disconnect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The `web.observers.IntersectionObserver` method observe() adds
  element to the set of target elements being watched by the IntersectionObserver.
  observer has one set of thresholds and one root, but can watch
  target elements for visibility changes in keeping with those.

  `IntersectionObserver.observe(targetElement);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe`"
  [this target-element]
  (-> this (.observe target-element)))

(defn take-records
  "Method.

  The `web.observers.IntersectionObserver` method takeRecords()
  an array of `web.observers.IntersectionObserverEntry` objects,
  for each targeted element which has experienced an intersection
  since the last time the intersections were checked, either explicitly
  a call to this method or implicitly by an automatic call to the
  callback.

  `intersectionObserverEntries = intersectionObserver.takeRecords();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

(defn unobserve
  "Method.

  The `web.observers.IntersectionObserver` method unobserve() instructs
  IntersectionObserver to stop observing the specified target element.

  `IntersectionObserver.unobserve(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/unobserve`"
  [this target]
  (-> this (.unobserve target)))

(defn root
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property identifies the `web.Element` whose bounds are treated
  the bounding box of the viewport for the element which is the
  target. If the root is null, then the bounds of the actual document
  are used.

  `var root = intersectionObserver.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root`"
  [this]
  (-> this (.root)))

(defn set-root!
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property identifies the `web.Element` whose bounds are treated
  the bounding box of the viewport for the element which is the
  target. If the root is null, then the bounds of the actual document
  are used.

  `var root = intersectionObserver.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root`"
  [this val]
  (aset this "root" val))

(defn root-margin
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property is a string with syntax similar to that of the CSS `margin`
  Each side of the rectangle represented by rootMargin is added
  the corresponding side in the `root` element's bounding box before
  intersection test is performed. This lets you, for example, adjust
  bounds outward so that the target element is considered 100%
  even if a certain number of pixels worth of width or height is
  away, or treat the target as partially hidden if an edge is too
  to the edge of the root's bounding box.

  `var marginString = IntersectionObserver.rootMargin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin`"
  [this]
  (-> this (.rootMargin)))

(defn set-root-margin!
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property is a string with syntax similar to that of the CSS `margin`
  Each side of the rectangle represented by rootMargin is added
  the corresponding side in the `root` element's bounding box before
  intersection test is performed. This lets you, for example, adjust
  bounds outward so that the target element is considered 100%
  even if a certain number of pixels worth of width or height is
  away, or treat the target as partially hidden if an edge is too
  to the edge of the root's bounding box.

  `var marginString = IntersectionObserver.rootMargin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin`"
  [this val]
  (aset this "rootMargin" val))

(defn thresholds
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property returns the list of intersection thresholds that was
  when the observer was instantiated with `IntersectionObserver()`.
  only one threshold ratio was provided when instanitating the
  this will be an array containing that single value.

  `var thresholds = IntersectionObserver.thresholds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds`"
  [this]
  (-> this (.thresholds)))

(defn set-thresholds!
  "Property.

  The `web.observers.IntersectionObserver` interface's read-only
  property returns the list of intersection thresholds that was
  when the observer was instantiated with `IntersectionObserver()`.
  only one threshold ratio was provided when instanitating the
  this will be an array containing that single value.

  `var thresholds = IntersectionObserver.thresholds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds`"
  [this val]
  (aset this "thresholds" val))

