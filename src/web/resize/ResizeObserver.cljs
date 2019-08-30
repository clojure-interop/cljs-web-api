(ns web.resize.ResizeObserver
  "The ResizeObserver interface reports changes to the dimensions
  an `web.Element`'s content or border box, or the bounding box
  an `web.svg.SVGElement`."
  (:refer-clojure :exclude []))

(defn disconnect
  "Method.

  The disconnect() method of the `web.resize.ResizeObserver` interface
  all observed `web.Element` or `web.svg.SVGElement` targets.

  `resizeObserver.disconnect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The observe() method of the `web.resize.ResizeObserver` interface
  observing the specified `web.Element` or `web.svg.SVGElement`.

  `resizeObserver.observe(target, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe`"
  [this target options]
  (-> this (.observe target options)))

(defn unobserve
  "Method.

  The unobserve() method of the `web.resize.ResizeObserver` interface
  the observing of a specified `web.Element` or `web.svg.SVGElement`.

  `void unobserve(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/unobserve`"
  [this target]
  (-> this (.unobserve target)))

