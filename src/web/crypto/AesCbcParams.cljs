(ns web.crypto.AesCbcParams
  "The AesCbcParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the AES-CBC algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-CBC."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-CBC."
  [this val]
  (aset this "name" val))

(defn iv
  "Property.

  A BufferSource. The initialization vector. Must be 16 bytes,
  and preferably cryptographically random. However, it need not
  secret (for example, it may be transmitted unencrypted along
  the ciphertext)."
  [this]
  (-> this (.-iv)))

(defn set-iv!
  "Property.

  A BufferSource. The initialization vector. Must be 16 bytes,
  and preferably cryptographically random. However, it need not
  secret (for example, it may be transmitted unencrypted along
  the ciphertext)."
  [this val]
  (aset this "iv" val))

