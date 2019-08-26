(ns web.streams.DoubleRange
  "The DoubleRange dictionary is used to define a range of permitted
  floating-point values for a property, with either or both a maximum
  minimum value specified. The `web.rtc.ConstrainDouble` dictionary
  based on this, augmenting it to support exact and ideal values
  well."
  (:refer-clojure :exclude [max]))

(defn max
  "Property.

  A floating-point value specifying the largest permissible value
  the property it describes."
  [this]
  (-> this (.max)))

(defn set-max!
  "Property.

  A floating-point value specifying the largest permissible value
  the property it describes."
  [this val]
  (aset this "max" val))

