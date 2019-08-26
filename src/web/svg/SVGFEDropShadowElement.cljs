(ns web.svg.SVGFEDropShadowElement
  "The SVGFEDropShadowElement interface corresponds to the `<feDropShadow>`"
  (:refer-clojure :exclude []))

(defn set-std-deviation
  "Method.

  Sets the values for the stdDeviation attribute."
  [this & args]
  (apply (-> this .-setStdDeviation) (concat [this] args)))

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

