(ns web.svg.SVGZoomAndPan
  "The SVGZoomAndPan interface is used to reflect the zoomAndPan
  and is mixed in to other interfaces for elements that support
  attribute."
  (:refer-clojure :exclude []))

(defn zoom-and-pan
  "Property.

  An unsigned short representing the value of the zoomAndPan attribute."
  [this]
  (-> this (.zoomAndPan)))

(defn set-zoom-and-pan!
  "Property.

  An unsigned short representing the value of the zoomAndPan attribute."
  [this val]
  (aset this "zoomAndPan" val))

