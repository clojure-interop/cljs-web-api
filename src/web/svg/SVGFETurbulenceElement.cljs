(ns web.svg.SVGFETurbulenceElement
  "The SVGFETurbulenceElement interface corresponds to the `<feTurbulence>`"
  (:refer-clojure :exclude [type]))

(defn base-frequency-x
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this]
  (-> this (.-baseFrequencyX)))

(defn set-base-frequency-x!
  "Property.

  An SVGAnimatedNumber corresponding to the X component of the
  attribute of the given element."
  [this val]
  (aset this "baseFrequencyX" val))

(defn base-frequency-y
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this]
  (-> this (.-baseFrequencyY)))

(defn set-base-frequency-y!
  "Property.

  An SVGAnimatedNumber corresponding to the Y component of the
  attribute of the given element."
  [this val]
  (aset this "baseFrequencyY" val))

(defn num-octaves
  "Property.

  An SVGAnimatedInteger corresponding to the numOctaves attribute
  the given element."
  [this]
  (-> this (.-numOctaves)))

(defn set-num-octaves!
  "Property.

  An SVGAnimatedInteger corresponding to the numOctaves attribute
  the given element."
  [this val]
  (aset this "numOctaves" val))

(defn seed
  "Property.

  An SVGAnimatedNumber corresponding to the seed attribute of the
  element."
  [this]
  (-> this (.-seed)))

(defn set-seed!
  "Property.

  An SVGAnimatedNumber corresponding to the seed attribute of the
  element."
  [this val]
  (aset this "seed" val))

(defn stitch-tiles
  "Property.

  An SVGAnimatedEnumeration corresponding to the stitchTiles attribute
  the given element. It takes one of the SVG_STITCHTYPE_* constants
  on this interface."
  [this]
  (-> this (.-stitchTiles)))

(defn set-stitch-tiles!
  "Property.

  An SVGAnimatedEnumeration corresponding to the stitchTiles attribute
  the given element. It takes one of the SVG_STITCHTYPE_* constants
  on this interface."
  [this val]
  (aset this "stitchTiles" val))

(defn type
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_TURBULENCE_TYPE_*
  defined on this interface."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_TURBULENCE_TYPE_*
  defined on this interface."
  [this val]
  (aset this "type" val))

