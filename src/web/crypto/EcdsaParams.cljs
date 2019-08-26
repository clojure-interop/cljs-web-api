(ns web.crypto.EcdsaParams
  "The EcdsaParams dictionary of the Web Crypto API represents the
  that should be passed as the algorithm parameter into `SubtleCrypto.sign()`
  `SubtleCrypto.verify()` when using the ECDSA algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to ECDSA."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to ECDSA."
  [this val]
  (aset this "name" val))

