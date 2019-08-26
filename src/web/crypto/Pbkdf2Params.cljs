(ns web.crypto.Pbkdf2Params
  "The Pbkdf2Params dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when using the PBKDF2 algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to PBKDF2."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to PBKDF2."
  [this val]
  (aset this "name" val))

