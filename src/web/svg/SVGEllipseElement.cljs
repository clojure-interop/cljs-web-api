(ns web.svg.SVGEllipseElement
  "The SVGEllipseElement interface provides access to the properties
  `<ellipse>` elements."
  (:refer-clojure :exclude []))

(defn cx
  "Property.

  This property returns a SVGAnimatedLength reflecting the cx attribute
  the given <ellipse> element."
  [this]
  (-> this (.-cx)))

(defn set-cx!
  "Property.

  This property returns a SVGAnimatedLength reflecting the cx attribute
  the given <ellipse> element."
  [this val]
  (aset this "cx" val))

(defn cy
  "Property.

  This property returns a SVGAnimatedLength reflecting the cy attribute
  the given <ellipse> element."
  [this]
  (-> this (.-cy)))

(defn set-cy!
  "Property.

  This property returns a SVGAnimatedLength reflecting the cy attribute
  the given <ellipse> element."
  [this val]
  (aset this "cy" val))

(defn rx
  "Property.

  This property returns a SVGAnimatedLength reflecting the rx attribute
  the given <ellipse> element."
  [this]
  (-> this (.-rx)))

(defn set-rx!
  "Property.

  This property returns a SVGAnimatedLength reflecting the rx attribute
  the given <ellipse> element."
  [this val]
  (aset this "rx" val))

(defn ry
  "Property.

  This property returns a SVGAnimatedLength reflecting the ry attribute
  the given <ellipse> element."
  [this]
  (-> this (.-ry)))

(defn set-ry!
  "Property.

  This property returns a SVGAnimatedLength reflecting the ry attribute
  the given <ellipse> element."
  [this val]
  (aset this "ry" val))

