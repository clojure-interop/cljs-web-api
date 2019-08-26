(ns web.crypto.RsaOaepParams
  "The RsaOaepParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the RSA_OAEP algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to RSA-OAEP."
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSA-OAEP."
  [this val]
  (aset this "name" val))

