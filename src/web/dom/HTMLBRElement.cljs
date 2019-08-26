(ns web.dom.HTMLBRElement
  "The HTMLBRElement interface represents a HTML line break element
  It inherits from `web.dom.HTMLElement`."
  (:refer-clojure :exclude []))

(defn clear
  "Property.

  Is a DOMString indicating the flow of text around floating objects."
  [this]
  (-> this (.-clear)))

(defn set-clear!
  "Property.

  Is a DOMString indicating the flow of text around floating objects."
  [this val]
  (aset this "clear" val))

