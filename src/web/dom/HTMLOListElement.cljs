(ns web.dom.HTMLOListElement
  "The HTMLOListElement interface provides special properties (beyond
  defined on the regular `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating ordered list"
  (:refer-clojure :exclude []))

(defn reversed
  "Property.

  Is a Boolean value reflecting the reversed and defining if the
  is descending, that is its value is true, or ascending (false)."
  [this]
  (-> this (.reversed)))

(defn set-reversed!
  "Property.

  Is a Boolean value reflecting the reversed and defining if the
  is descending, that is its value is true, or ascending (false)."
  [this val]
  (aset this "reversed" val))

