(ns web.svg.SVGFEImageElement
  "The SVGFEImageElement interface corresponds to the `<feImage>`"
  (:refer-clojure :exclude []))

(defn preserve-aspect-ratio
  "Property.

  An SVGAnimatedPreserveAspectRatio corresponding to the preserveAspectRatio
  of the given element."
  [this]
  (-> this (.-preserveAspectRatio)))

(defn set-preserve-aspect-ratio!
  "Property.

  An SVGAnimatedPreserveAspectRatio corresponding to the preserveAspectRatio
  of the given element."
  [this val]
  (aset this "preserveAspectRatio" val))

(defn cross-origin
  "Property.

  An SVGAnimatedString reflects the crossorigin attribute of the
  element, limited to only known values."
  [this]
  (-> this (.-crossOrigin)))

(defn set-cross-origin!
  "Property.

  An SVGAnimatedString reflects the crossorigin attribute of the
  element, limited to only known values."
  [this val]
  (aset this "crossOrigin" val))

