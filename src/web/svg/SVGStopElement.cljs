(ns web.svg.SVGStopElement
  "The SVGStopElement interface corresponds to the `<stop>` element."
  (:refer-clojure :exclude []))

(defn offset
  "Property.

  An SVGAnimatedNumber corresponding to the offset of the given"
  [this]
  (-> this (.offset)))

(defn set-offset!
  "Property.

  An SVGAnimatedNumber corresponding to the offset of the given"
  [this val]
  (aset this "offset" val))

