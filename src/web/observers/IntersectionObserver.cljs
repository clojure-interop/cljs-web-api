(ns web.observers.IntersectionObserver
  "provides a way to asynchronously observe changes in the intersection
  a target element with an ancestor element or with a top-level
  viewport."
  (:refer-clojure :exclude []))

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

  [Experimental]

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

  [Read Only]

  The `web.observers.IntersectionObserver` interface's read-only
  property identifies the `web.Element` whose bounds are treated
  the bounding box of the viewport for the element which is the
  target. If the root is null, then the bounds of the actual document
  are used.

  `var root = intersectionObserver.root;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root`"
  [this]
  (-> this (.-root)))

(defn root-margin
  "Property.

  [Read Only]
  [Experimental]

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
  (-> this (.-rootMargin)))

(defn thresholds
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The `web.observers.IntersectionObserver` interface's read-only
  property returns the list of intersection thresholds that was
  when the observer was instantiated with `IntersectionObserver()`.
  only one threshold ratio was provided when instanitating the
  this will be an array containing that single value.

  `var thresholds = IntersectionObserver.thresholds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds`"
  [this]
  (-> this (.-thresholds)))

