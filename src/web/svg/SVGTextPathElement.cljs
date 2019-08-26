(ns web.svg.SVGTextPathElement
  "The SVGTextPathElement interface corresponds to the `<textPath>`"
  (:refer-clojure :exclude []))

(defn start-offset
  "Property.

  An SVGAnimatedLength corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.-startOffset)))

(defn set-start-offset!
  "Property.

  An SVGAnimatedLength corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "startOffset" val))

(defn method
  "Property.

  An SVGAnimatedEnumeration corresponding to the method attribute
  the given element. It takes one of the TEXTPATH_METHODTYPE_*
  defined on this interface."
  [this]
  (-> this (.-method)))

(defn set-method!
  "Property.

  An SVGAnimatedEnumeration corresponding to the method attribute
  the given element. It takes one of the TEXTPATH_METHODTYPE_*
  defined on this interface."
  [this val]
  (aset this "method" val))

(defn spacing
  "Property.

  An SVGAnimatedEnumeration corresponding to the spacing attribute
  the given element. It takes one of the TEXTPATH_SPACINGTYPE_*
  defined on this interface."
  [this]
  (-> this (.-spacing)))

(defn set-spacing!
  "Property.

  An SVGAnimatedEnumeration corresponding to the spacing attribute
  the given element. It takes one of the TEXTPATH_SPACINGTYPE_*
  defined on this interface."
  [this val]
  (aset this "spacing" val))

