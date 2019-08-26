(ns web.svg.SVGTests
  "The SVGTests interface is used to reflect conditional processing
  and is mixed into other interfaces for elements that support
  attributes."
  (:refer-clojure :exclude []))

(defn has-extension
  "Method.

  Returns true if the browser supports the given extension, specified
  a URI."
  [this & args]
  (apply (-> this .-hasExtension) (concat [this] args)))

(defn required-features
  "Property.

  An SVGStringList corresponding to the requiredFeatures attribute
  the given element."
  [this]
  (-> this (.requiredFeatures)))

(defn set-required-features!
  "Property.

  An SVGStringList corresponding to the requiredFeatures attribute
  the given element."
  [this val]
  (aset this "requiredFeatures" val))

