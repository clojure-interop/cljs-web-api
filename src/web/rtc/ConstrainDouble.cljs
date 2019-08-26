(ns web.rtc.ConstrainDouble
  "The ConstrainDouble type is used to specify a constraint for
  property whose value is a double-precision floating-point number.
  extends the `web.streams.DoubleRange` dictionary (which provides
  ability to specify a permitted range of property values) to also
  an exact value and/or an ideal value the property should take
  Additionally, you can specify the property's value as a simple
  value, in which case the user agent does its best to match the
  once all other more stringent constraints are met."
  (:refer-clojure :exclude []))

(defn exact
  "Property.

  A double-precision floating-point number specifying a specific,
  value the property must have to be considered acceptable."
  [this]
  (-> this (.-exact)))

(defn set-exact!
  "Property.

  A double-precision floating-point number specifying a specific,
  value the property must have to be considered acceptable."
  [this val]
  (aset this "exact" val))

(defn ideal
  "Property.

  A double-precision floating-point number specifying a value the
  would ideally have, but which can be considered optional if necessary
  find a match."
  [this]
  (-> this (.-ideal)))

(defn set-ideal!
  "Property.

  A double-precision floating-point number specifying a value the
  would ideally have, but which can be considered optional if necessary
  find a match."
  [this val]
  (aset this "ideal" val))

