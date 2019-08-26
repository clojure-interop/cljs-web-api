(ns web.crypto.AesCtrParams
  "The AesCtrParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the AES-CTR algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-CTR."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-CTR."
  [this val]
  (aset this "name" val))

