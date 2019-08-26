(ns web.svg.SVGFEDistantLightElement
  "The SVGFEDistantLightElement interface corresponds to the `<feDistantLight>`"
  (:refer-clojure :exclude []))

(defn azimuth
  "Property.

  An SVGAnimatedNumber corresponding to the azimuth attribute of
  given element."
  [this]
  (-> this (.azimuth)))

(defn set-azimuth!
  "Property.

  An SVGAnimatedNumber corresponding to the azimuth attribute of
  given element."
  [this val]
  (aset this "azimuth" val))

