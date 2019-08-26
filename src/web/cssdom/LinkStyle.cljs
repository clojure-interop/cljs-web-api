(ns web.cssdom.LinkStyle
  "The LinkStyle interface provides access to the associated CSS
  sheet of a node."
  (:refer-clojure :exclude []))

(defn sheet
  "Property.

  Returns the CSSStyleSheet object associated with the given element,
  null if there is none."
  [this]
  (-> this (.-sheet)))

(defn set-sheet!
  "Property.

  Returns the CSSStyleSheet object associated with the given element,
  null if there is none."
  [this val]
  (aset this "sheet" val))

