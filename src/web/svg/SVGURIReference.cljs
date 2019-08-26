(ns web.svg.SVGURIReference
  "The SVGURIReference interface is used to reflect the href attribute
  the deprecated xlink:href attribute."
  (:refer-clojure :exclude []))

(defn href
  "Property.

  An SVGAnimatedString that represents the value of the href attribute,
  on elements that are defined to support it, the deprecated xlink:href
  On getting href, an SVGAnimatedString object is returned that
  reflects the href attribute, and
  if the element is defined to support the deprecated xlink:href
  additionally reflects that deprecated attribute."
  [this]
  (-> this (.href)))

(defn set-href!
  "Property.

  An SVGAnimatedString that represents the value of the href attribute,
  on elements that are defined to support it, the deprecated xlink:href
  On getting href, an SVGAnimatedString object is returned that
  reflects the href attribute, and
  if the element is defined to support the deprecated xlink:href
  additionally reflects that deprecated attribute."
  [this val]
  (aset this "href" val))

