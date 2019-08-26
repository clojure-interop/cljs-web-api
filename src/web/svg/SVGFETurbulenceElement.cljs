(ns web.svg.SVGFETurbulenceElement
  "The SVGFETurbulenceElement interface corresponds to the `<feTurbulence>`"
  (:refer-clojure :exclude []))

(defn base-frequency-x
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.baseFrequencyX)))

(defn set-base-frequency-x!
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "baseFrequencyX" val))

