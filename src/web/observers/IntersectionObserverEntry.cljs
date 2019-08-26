(ns web.observers.IntersectionObserverEntry
  "The IntersectionObserverEntry interface of the Intersection Observer
  describes the intersection between the target element and its
  container at a specific moment of transition."
  (:refer-clojure :exclude [time]))

(defn bounding-client-rect
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property returns a `web.dom.DOMRectReadOnly` which in essence
  a rectangle describing the smallest rectangle that contains the
  target element.

  `var boundsRect = IntersectionObserverEntry.boundingClientRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect`"
  [this]
  (-> this (.boundingClientRect)))

(defn set-bounding-client-rect!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property returns a `web.dom.DOMRectReadOnly` which in essence
  a rectangle describing the smallest rectangle that contains the
  target element.

  `var boundsRect = IntersectionObserverEntry.boundingClientRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect`"
  [this val]
  (aset this "boundingClientRect" val))

(defn intersection-ratio
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property tells you how much of the target element is currently
  within the root's intersection ratio, as a value between 0.0
  1.0.

  `var intersectionRatio = IntersectionObserverEntry.intersectionRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio`"
  [this]
  (-> this (.intersectionRatio)))

(defn set-intersection-ratio!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property tells you how much of the target element is currently
  within the root's intersection ratio, as a value between 0.0
  1.0.

  `var intersectionRatio = IntersectionObserverEntry.intersectionRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio`"
  [this val]
  (aset this "intersectionRatio" val))

(defn intersection-rect
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMRectReadOnly` object which describes
  smallest rectangle that contains the entire portion of the target
  which is currently visible within the intersection root.

  `var intersectionRect = IntersectionObserverEntry.intersectionRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect`"
  [this]
  (-> this (.intersectionRect)))

(defn set-intersection-rect!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMRectReadOnly` object which describes
  smallest rectangle that contains the entire portion of the target
  which is currently visible within the intersection root.

  `var intersectionRect = IntersectionObserverEntry.intersectionRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect`"
  [this val]
  (aset this "intersectionRect" val))

(defn is-intersecting
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a Boolean value which is true if the target element
  with the intersection observer's root. If this is true, then,
  IntersectionObserverEntry describes a transition into a state
  intersection; if it's false, then you know the transition is
  intersecting to not-intersecting.

  `var isIntersecting = IntersectionObserverEntry.isIntersecting;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting`"
  [this]
  (-> this (.isIntersecting)))

(defn set-is-intersecting!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a Boolean value which is true if the target element
  with the intersection observer's root. If this is true, then,
  IntersectionObserverEntry describes a transition into a state
  intersection; if it's false, then you know the transition is
  intersecting to not-intersecting.

  `var isIntersecting = IntersectionObserverEntry.isIntersecting;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting`"
  [this val]
  (aset this "isIntersecting" val))

(defn root-bounds
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMRectReadOnly` corresponding to the
  root intersection rectangle, offset by the `IntersectionObserver.rootMargin`
  one is specified.

  `var rootBounds = IntersectionObserverEntry.rootBounds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds`"
  [this]
  (-> this (.rootBounds)))

(defn set-root-bounds!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMRectReadOnly` corresponding to the
  root intersection rectangle, offset by the `IntersectionObserver.rootMargin`
  one is specified.

  `var rootBounds = IntersectionObserverEntry.rootBounds;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds`"
  [this val]
  (aset this "rootBounds" val))

(defn target
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property indicates which targeted `web.Element` has changed its
  of intersection with the intersection root.

  `var target = IntersectionObserverEntry.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target`"
  [this]
  (-> this (.target)))

(defn set-target!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property indicates which targeted `web.Element` has changed its
  of intersection with the intersection root.

  `var target = IntersectionObserverEntry.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target`"
  [this val]
  (aset this "target" val))

(defn time
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMHighResTimeStamp` that indicates the
  at which the intersection change occurred relative to the time
  which the document was created.

  `var time = IntersectionObserverEntry.time;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time`"
  [this]
  (-> this (.time)))

(defn set-time!
  "Property.

  The `web.observers.IntersectionObserverEntry` interface's read-only
  property is a `web.dom.DOMHighResTimeStamp` that indicates the
  at which the intersection change occurred relative to the time
  which the document was created.

  `var time = IntersectionObserverEntry.time;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/time`"
  [this val]
  (aset this "time" val))

