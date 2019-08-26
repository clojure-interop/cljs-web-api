(ns web.streams.ConstrainBoolean
  "The ConstrainBoolean dictionary is used to specify a constraint
  a property whose value is a Boolean value. You can specify an
  value which must be matched, an ideal value that should be matched
  at all possible, and a fallback value to attempt to match once
  more specific constraints have been applied."
  (:refer-clojure :exclude []))

(defn exact
  "Property.

  A Boolean which indicates a value the property must have."
  [this]
  (-> this (.exact)))

(defn set-exact!
  "Property.

  A Boolean which indicates a value the property must have."
  [this val]
  (aset this "exact" val))

