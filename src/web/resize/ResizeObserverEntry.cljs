(ns web.resize.ResizeObserverEntry
  "The ResizeObserverEntry interface is the object passed to the
  `ResizeObserver()` constructor."
  (:refer-clojure :exclude []))

(defn content-rect
  "Property.

  The contentRect read-only property of the `web.resize.ResizeObserverEntry`
  returns the new content rectangle of the element whose size is
  observed.

  `var contentRect = resizeObserverEntry.contentRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect`"
  [this]
  (-> this (.-contentRect)))

(defn set-content-rect!
  "Property.

  The contentRect read-only property of the `web.resize.ResizeObserverEntry`
  returns the new content rectangle of the element whose size is
  observed.

  `var contentRect = resizeObserverEntry.contentRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect`"
  [this val]
  (aset this "contentRect" val))

(defn target
  "Property.

  The target read-only property of the `web.resize.ResizeObserverEntry`
  returns reference to the `web.Element` or `web.svg.SVGElement`
  was resized.

  `var element = ResizeObserverEntry.target;
  var svgElement = ResizeObserverEntry.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target`"
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  The target read-only property of the `web.resize.ResizeObserverEntry`
  returns reference to the `web.Element` or `web.svg.SVGElement`
  was resized.

  `var element = ResizeObserverEntry.target;
  var svgElement = ResizeObserverEntry.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target`"
  [this val]
  (aset this "target" val))

