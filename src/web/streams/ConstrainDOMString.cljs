(ns web.streams.ConstrainDOMString
  "The ConstrainDOMString dictionary is used to specify a constraint
  a property whose value is a string. It allows you to specify
  or more exact string values from which one must be the parameter's
  or a set of ideal values which should be used if possible. You
  also specify a single string (or an array of strings) which the
  agent will do its best to match once all more stringent constraints
  been applied."
  (:refer-clojure :exclude []))

(defn exact
  "Property.

  Either a single DOMString which must be the value of the property,
  an array of DOMString objects one of which must be the property's
  If the property can't be set to one of the listed values, matching
  fail."
  [this]
  (-> this (.exact)))

(defn set-exact!
  "Property.

  Either a single DOMString which must be the value of the property,
  an array of DOMString objects one of which must be the property's
  If the property can't be set to one of the listed values, matching
  fail."
  [this val]
  (aset this "exact" val))

