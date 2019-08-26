(ns web.svg.SVGFEDisplacementMapElement
  "The SVGFEDisplacementMapElement interface corresponds to the
  element."
  (:refer-clojure :exclude []))

(defn in1
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this]
  (-> this (.-in1)))

(defn set-in1!
  "Property.

  An SVGAnimatedString corresponding to the in attribute of the
  element."
  [this val]
  (aset this "in1" val))

(defn in2
  "Property.

  An SVGAnimatedString corresponding to the in2 attribute of the
  element."
  [this]
  (-> this (.-in2)))

(defn set-in2!
  "Property.

  An SVGAnimatedString corresponding to the in2 attribute of the
  element."
  [this val]
  (aset this "in2" val))

(defn scale
  "Property.

  An SVGAnimatedNumber corresponding to the scale attribute of
  given element."
  [this]
  (-> this (.-scale)))

(defn set-scale!
  "Property.

  An SVGAnimatedNumber corresponding to the scale attribute of
  given element."
  [this val]
  (aset this "scale" val))

(defn x-channel-selector
  "Property.

  An SVGAnimatedEnumeration corresponding to the xChannelSelect
  of the given element. It takes one of the SVG_CHANNEL_* constants
  on this interface."
  [this]
  (-> this (.-xChannelSelector)))

(defn set-x-channel-selector!
  "Property.

  An SVGAnimatedEnumeration corresponding to the xChannelSelect
  of the given element. It takes one of the SVG_CHANNEL_* constants
  on this interface."
  [this val]
  (aset this "xChannelSelector" val))

(defn y-channel-selector
  "Property.

  An SVGAnimatedEnumeration corresponding to the yChannelSelect
  of the given element. It takes one of the SVG_CHANNEL_* constants
  on this interface."
  [this]
  (-> this (.-yChannelSelector)))

(defn set-y-channel-selector!
  "Property.

  An SVGAnimatedEnumeration corresponding to the yChannelSelect
  of the given element. It takes one of the SVG_CHANNEL_* constants
  on this interface."
  [this val]
  (aset this "yChannelSelector" val))

