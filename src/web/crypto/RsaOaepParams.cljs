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
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSA-OAEP."
  [this val]
  (aset this "name" val))

(defn label
  "Property.

  A BufferSource — an array of bytes that does not itself need
  be encrypted but which should be bound to the ciphertext. A digest
  the label is part of the input to the encryption operation.
  Unless your application calls for a label, you can just omit
  argument and it will not affect the security of the encryption"
  [this]
  (-> this (.-label)))

(defn set-label!
  "Property.

  A BufferSource — an array of bytes that does not itself need
  be encrypted but which should be bound to the ciphertext. A digest
  the label is part of the input to the encryption operation.
  Unless your application calls for a label, you can just omit
  argument and it will not affect the security of the encryption"
  [this val]
  (aset this "label" val))

