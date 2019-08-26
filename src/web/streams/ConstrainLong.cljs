(ns web.streams.ConstrainLong
  "The ConstrainLong type is used to specify a constraint for a
  whose value is an integral number. It extends the `web.streams.LongRange`
  (which provides the ability to specify a permitted range of property
  to also support an exact value and/or an ideal value the property
  take on. In addition, you can specify the value as a simple long
  value, in which case the user agent does its best to match the
  once all other more stringent constraints are met."
  (:refer-clojure :exclude []))

(defn exact
  "Property.

  An integer specifying precise, required, value the property must
  to be considered acceptable."
  [this]
  (-> this (.-exact)))

(defn set-exact!
  "Property.

  An integer specifying precise, required, value the property must
  to be considered acceptable."
  [this val]
  (aset this "exact" val))

(defn ideal
  "Property.

  An integer specifying a value the property would ideally have,
  which can be considered optional if necessary to find a match."
  [this]
  (-> this (.-ideal)))

(defn set-ideal!
  "Property.

  An integer specifying a value the property would ideally have,
  which can be considered optional if necessary to find a match."
  [this val]
  (aset this "ideal" val))

