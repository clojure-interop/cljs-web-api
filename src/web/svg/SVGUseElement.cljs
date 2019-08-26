(ns web.svg.SVGUseElement
  "The SVGUseElement interface corresponds to the `<use>` element."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  An SVGAnimatedLength corresponding to the x attribute of the
  element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  An SVGAnimatedLength corresponding to the y attribute of the
  element."
  [this val]
  (aset this "y" val))

(defn width
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An SVGAnimatedLength corresponding to the width attribute of
  given element."
  [this val]
  (aset this "width" val))

(defn height
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given element."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  An SVGAnimatedLength corresponding to the height attribute of
  given element."
  [this val]
  (aset this "height" val))

(defn instance-root
  "Property.

  An SVGAnimatedLength corresponding to the instance root of the
  element, which is a direct child of the elements shadow root.
  the element does not have a shadow tree (for example, because
  URI is invalid or because it has been disabled by conditional
  then getting this attribute returns null."
  [this]
  (-> this (.-instanceRoot)))

(defn set-instance-root!
  "Property.

  An SVGAnimatedLength corresponding to the instance root of the
  element, which is a direct child of the elements shadow root.
  the element does not have a shadow tree (for example, because
  URI is invalid or because it has been disabled by conditional
  then getting this attribute returns null."
  [this val]
  (aset this "instanceRoot" val))

(defn animated-instance-root
  "Property.

  An SVGAnimatedLength corresponding to the instance root of the
  element, which is a direct child of the elements shadow root.
  the element does not have a shadow tree (for example, because
  URI is invalid or because it has been disabled by conditional
  then getting this attribute returns null."
  [this]
  (-> this (.-animatedInstanceRoot)))

(defn set-animated-instance-root!
  "Property.

  An SVGAnimatedLength corresponding to the instance root of the
  element, which is a direct child of the elements shadow root.
  the element does not have a shadow tree (for example, because
  URI is invalid or because it has been disabled by conditional
  then getting this attribute returns null."
  [this val]
  (aset this "animatedInstanceRoot" val))

