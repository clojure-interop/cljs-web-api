(ns web.css.CSSCounterStyleRule
  "The CSSCounterStyleRule interface represents an `@counter-style`"
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  Is a DOMString object that contains the serialization of the
  defined for the associated rule."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  Is a DOMString object that contains the serialization of the
  defined for the associated rule."
  [this val]
  (aset this "name" val))

