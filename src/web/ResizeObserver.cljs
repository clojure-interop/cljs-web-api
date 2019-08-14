(ns web.ResizeObserver
  "The ResizeObserver interface reports changes to the content rectangle
  an `web.Element` or the bounding box of an `svg.SVGElement`.
  content rectangle is the box in which content can be placed,
  the border box minus the padding. (See The box model for an explanation
  borders and padding.)"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ResizeObserver constructor creates a new `web.ResizeObserver` object which reports changes to the content rectangle of an `web.Element` or the bounding box of an `svg.SVGElement`.

  callback
  The method called whenever a resize occurs. The method is called with an array of `web.ResizeObserverEntry` objects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver`"
  js/ResizeObserver)

(defn disconnect
  "Method.

  The disconnect() method of the `web.ResizeObserver` interface
  all observed `web.Element` or `svg.SVGElement` targets.

  `resizeObserver.disconnect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The observe() method of the `web.ResizeObserver` interface starts
  the specified `web.Element` or `svg.SVGElement`.

  `resizeObserver.observe(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe`"
  [this target]
  (-> this (.observe target)))

(defn unobserve
  "Method.

  The unobserve() method of the `web.ResizeObserver` interface
  the observing of a specified `web.Element` or `svg.SVGElement`.

  `void unobserve(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/unobserve`"
  [this target]
  (-> this (.unobserve target)))

