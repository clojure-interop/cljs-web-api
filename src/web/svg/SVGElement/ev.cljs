(ns web.svg.SVGElement.ev
  "SVGElement Events."
  (:refer-clojure :exclude [load]))

(def abort
  "Event.

  Fired when page loading is stopped before an SVG element has
  allowed to load completely.
  Also available via the onabort property."

  "abort")

(def error
  "Event.

  Fired when an SVG element does not load properly or when an error
  during script execution.
  Also available via the onerror property."

  "error")

(def load
  "Event.

  Fires on an SVGElement when it is loaded in the browser.
  Also available via the onload property."

  "load")

(def resize
  "Event.

  Fired when an SVG document is being resized.
  Also available via the onresize property."

  "resize")

(def scroll
  "Event.

  Fired when an SVG document view is being shifted along the X
  Y axes.
  Also available via the onscroll property."

  "scroll")

(def unload
  "Event.

  Fired when the DOM implementation removes an SVG document from
  window or frame.
  Also available via the onunload property."

  "unload")

