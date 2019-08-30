(ns web.resize.ResizeObserverEntry
  "The ResizeObserverEntry interface represents the object passed
  the `ResizeObserver()` constructor's callback function, which
  you to access the new dimensions of the `web.Element` or `web.svg.SVGElement`
  observed."
  (:refer-clojure :exclude []))

(defn border-box-size
  "Property.

  [Read Only]
  [Experimental]

  The borderBoxSize read-only property of the `web.resize.ResizeObserverEntry`
  returns an object containing the new border box size of the observed
  when the callback is run.

  `var myBorderBoxSize = ResizeObserverEntry.borderBoxSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize`"
  [this]
  (-> this (.-borderBoxSize)))

(defn content-box-size
  "Property.

  [Read Only]
  [Experimental]

  The contentBoxSize read-only property of the `web.resize.ResizeObserverEntry`
  returns an object containing the new content box size of the
  element when the callback is run.

  `var myContentBoxSize = ResizeObserverEntry.contentBoxSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize`"
  [this]
  (-> this (.-contentBoxSize)))

(defn content-rect
  "Property.

  [Read Only]

  The contentRect read-only property of the `web.resize.ResizeObserverEntry`
  returns a `web.dom.DOMRectReadOnly` object containing the new
  of the observed element when the callback is run. Note that this
  better supported than `ResizeObserverEntry.borderBoxSize` or
  but it is left over from an earlier implementation of the Resize
  API, is still included in the spec for web compat reasons, and
  be deprecated in future versions.

  `var contentRect = resizeObserverEntry.contentRect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect`"
  [this]
  (-> this (.-contentRect)))

(defn target
  "Property.

  [Read Only]

  The target read-only property of the `web.resize.ResizeObserverEntry`
  returns a reference to the `web.Element` or `web.svg.SVGElement`
  is being observed.

  `var element = ResizeObserverEntry.target;
  var svgElement = ResizeObserverEntry.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target`"
  [this]
  (-> this (.-target)))

