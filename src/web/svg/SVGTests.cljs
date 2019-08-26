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
  (-> this (.-requiredFeatures)))

(defn set-required-features!
  "Property.

  An SVGStringList corresponding to the requiredFeatures attribute
  the given element."
  [this val]
  (aset this "requiredFeatures" val))

(defn required-extensions
  "Property.

  An SVGStringList corresponding to the requiredExtensions attribute
  the given element."
  [this]
  (-> this (.-requiredExtensions)))

(defn set-required-extensions!
  "Property.

  An SVGStringList corresponding to the requiredExtensions attribute
  the given element."
  [this val]
  (aset this "requiredExtensions" val))

(defn system-language
  "Property.

  An SVGStringList corresponding to the systemLanguage attribute
  the given element."
  [this]
  (-> this (.-systemLanguage)))

(defn set-system-language!
  "Property.

  An SVGStringList corresponding to the systemLanguage attribute
  the given element."
  [this val]
  (aset this "systemLanguage" val))

