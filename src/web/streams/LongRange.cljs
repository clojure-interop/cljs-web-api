(ns web.streams.LongRange
  "The LongRange dictionary is used to define a range of permitted
  values for a property, with either or both a maximum and minimum
  specified. The `ConstrainLongRange` dictionary is based on this,
  it to support exact and ideal values as well."
  (:refer-clojure :exclude [max min]))

(defn max
  "Property.

  A numeric value in the range of signed 32-bit integers, specifying
  largest permissible value of the property it describes."
  [this]
  (-> this (.-max)))

(defn set-max!
  "Property.

  A numeric value in the range of signed 32-bit integers, specifying
  largest permissible value of the property it describes."
  [this val]
  (aset this "max" val))

(defn min
  "Property.

  A numeric value in the range of signed 32-bit integers, specifying
  smallest permissible value of the property it describes."
  [this]
  (-> this (.-min)))

(defn set-min!
  "Property.

  A numeric value in the range of signed 32-bit integers, specifying
  smallest permissible value of the property it describes."
  [this val]
  (aset this "min" val))

