(ns web.svg.SVGEllipseElement
  "The SVGEllipseElement interface provides access to the properties
  `<ellipse>` elements."
  (:refer-clojure :exclude []))

(defn cx
  "Property.

  This property returns a SVGAnimatedLength reflecting the cx attribute
  the given <ellipse> element."
  [this]
  (-> this (.cx)))

(defn set-cx!
  "Property.

  This property returns a SVGAnimatedLength reflecting the cx attribute
  the given <ellipse> element."
  [this val]
  (aset this "cx" val))

