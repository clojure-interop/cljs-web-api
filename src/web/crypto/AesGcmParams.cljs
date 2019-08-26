(ns web.crypto.AesGcmParams
  "The AesGcmParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the AES-GCM algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-GCM."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-GCM."
  [this val]
  (aset this "name" val))

