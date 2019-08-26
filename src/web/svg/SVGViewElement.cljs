(ns web.svg.SVGViewElement
  "The SVGViewElement interface provides access to the properties
  `<view>` elements, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn view-target
  "Property.

  An SVGStringList corresponding to the viewTarget attribute of
  given <view> element. A list of DOMString values which contain
  names listed in the viewTarget attribute. Each of the DOMString
  can be associated with the corresponding element using the getElementById()
  call."
  [this]
  (-> this (.viewTarget)))

(defn set-view-target!
  "Property.

  An SVGStringList corresponding to the viewTarget attribute of
  given <view> element. A list of DOMString values which contain
  names listed in the viewTarget attribute. Each of the DOMString
  can be associated with the corresponding element using the getElementById()
  call."
  [this val]
  (aset this "viewTarget" val))

