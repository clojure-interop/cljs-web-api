(ns web.svg.SVGAnimatedString
  "The SVGAnimatedString interface represents string attributes
  can be animated from each SVG declaration. You need to create
  attribute before doing anything else, everything should be declared
  this."
  (:refer-clojure :exclude []))

(defn anim-val
  "Property.

  AnimVal attribute or animVal property contains the same value
  the baseVal property.If the given attribute or property is being
  contains the current animated value of the attribute or property.
  the given attribute or property is not currently being animated,
  it contains the same value as baseVal

  `var = object.animVal`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString/animVal`"
  [this]
  (-> this (.-animVal)))

(defn set-anim-val!
  "Property.

  AnimVal attribute or animVal property contains the same value
  the baseVal property.If the given attribute or property is being
  contains the current animated value of the attribute or property.
  the given attribute or property is not currently being animated,
  it contains the same value as baseVal

  `var = object.animVal`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString/animVal`"
  [this val]
  (aset this "animVal" val))

(defn base-val
  "Property.

  BaseVal gets or sets the base value of the given attribute before
  animations are applied.The base value of the given attribute
  applying any animations. Setter throws DOMException.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString/baseVal`"
  [this]
  (-> this (.-baseVal)))

(defn set-base-val!
  "Property.

  BaseVal gets or sets the base value of the given attribute before
  animations are applied.The base value of the given attribute
  applying any animations. Setter throws DOMException.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedString/baseVal`"
  [this val]
  (aset this "baseVal" val))

