(ns web.dom.HTMLOListElement
  "The HTMLOListElement interface provides special properties (beyond
  defined on the regular `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating ordered list"
  (:refer-clojure :exclude [type]))

(defn reversed
  "Property.

  Is a Boolean value reflecting the reversed and defining if the
  is descending, that is its value is true, or ascending (false)."
  [this]
  (-> this (.-reversed)))

(defn set-reversed!
  "Property.

  Is a Boolean value reflecting the reversed and defining if the
  is descending, that is its value is true, or ascending (false)."
  [this val]
  (aset this "reversed" val))

(defn start
  "Property.

  Is a long value reflecting the start and defining the value of
  first number of the first element of the list."
  [this]
  (-> this (.-start)))

(defn set-start!
  "Property.

  Is a long value reflecting the start and defining the value of
  first number of the first element of the list."
  [this val]
  (aset this "start" val))

(defn type
  "Property.

  Is a DOMString value reflecting the type and defining the kind
  marker to be used to display. It can have the following values:
  '1' meaning that decimal numbers are used: 1, 2, 3, 4, 5, …
  'a' meaning that the lowercase latin alphabet is used: a, b,
  d, e, …
  'A' meaning that the uppercase latin alphabet is used: A, B,
  D, E, …
  'i' meaning that the lowercase latin numerals are used: i, ii,
  iv, v, …
  'I' meaning that the uppercase latin numerals are used: I, II,
  IV, V, …"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString value reflecting the type and defining the kind
  marker to be used to display. It can have the following values:
  '1' meaning that decimal numbers are used: 1, 2, 3, 4, 5, …
  'a' meaning that the lowercase latin alphabet is used: a, b,
  d, e, …
  'A' meaning that the uppercase latin alphabet is used: A, B,
  D, E, …
  'i' meaning that the lowercase latin numerals are used: i, ii,
  iv, v, …
  'I' meaning that the uppercase latin numerals are used: I, II,
  IV, V, …"
  [this val]
  (aset this "type" val))

(defn compact
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced. This property reflects the compact attribute only, it
  consider the line-height CSS property used for that behavior
  modern pages."
  [this]
  (-> this (.-compact)))

(defn set-compact!
  "Property.

  Is a Boolean indicating that spacing between list items should
  reduced. This property reflects the compact attribute only, it
  consider the line-height CSS property used for that behavior
  modern pages."
  [this val]
  (aset this "compact" val))

