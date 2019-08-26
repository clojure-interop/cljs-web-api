(ns web.svg.SVGFEImageElement
  "The SVGFEImageElement interface corresponds to the `<feImage>`"
  (:refer-clojure :exclude []))

(defn preserve-aspect-ratio
  "Property.

  An SVGAnimatedPreserveAspectRatio corresponding to the preserveAspectRatio
  of the given element."
  [this]
  (-> this (.preserveAspectRatio)))

(defn set-preserve-aspect-ratio!
  "Property.

  An SVGAnimatedPreserveAspectRatio corresponding to the preserveAspectRatio
  of the given element."
  [this val]
  (aset this "preserveAspectRatio" val))

