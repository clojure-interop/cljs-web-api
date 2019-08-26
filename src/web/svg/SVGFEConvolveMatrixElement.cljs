(ns web.svg.SVGFEConvolveMatrixElement
  "The SVGFEConvolveMatrixElement interface corresponds to the `<feConvolveMatrix>`"
  (:refer-clojure :exclude []))

(defn in1
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this]
  (-> this (.in1)))

(defn set-in1!
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this val]
  (aset this "in1" val))

