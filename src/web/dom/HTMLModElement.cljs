(ns web.dom.HTMLModElement
  "The HTMLModElement interface provides special properties (beyond
  regular methods and properties available through the `web.dom.HTMLElement`
  they also have available to them by inheritance) for manipulating
  elements, that is `<del>` and `<ins>`."
  (:refer-clojure :exclude []))

(defn cite
  "Property.

  Is a DOMString reflecting the cite HTML attribute, containing
  URI of a resource explaining the change."
  [this]
  (-> this (.-cite)))

(defn set-cite!
  "Property.

  Is a DOMString reflecting the cite HTML attribute, containing
  URI of a resource explaining the change."
  [this val]
  (aset this "cite" val))

(defn date-time
  "Property.

  Is a DOMString reflecting the datetime HTML attribute, containing
  date-and-time string representing a timestamp for the change."
  [this]
  (-> this (.-dateTime)))

(defn set-date-time!
  "Property.

  Is a DOMString reflecting the datetime HTML attribute, containing
  date-and-time string representing a timestamp for the change."
  [this val]
  (aset this "dateTime" val))

