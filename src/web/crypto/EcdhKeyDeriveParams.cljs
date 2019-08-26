(ns web.crypto.EcdhKeyDeriveParams
  "The EcdhKeyDeriveParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when using the ECDH algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to ECDH."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to ECDH."
  [this val]
  (aset this "name" val))

