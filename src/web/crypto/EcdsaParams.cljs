(ns web.crypto.EcdsaParams
  "The EcdsaParams dictionary of the Web Crypto API represents the
  that should be passed as the algorithm parameter into `SubtleCrypto.sign()`
  `SubtleCrypto.verify()` when using the ECDSA algorithm."
  (:refer-clojure :exclude [name hash]))

(defn name
  "Property.

  A DOMString. This should be set to ECDSA."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to ECDSA."
  [this val]
  (aset this "name" val))

(defn hash
  "Property.

  A DOMString. An identifier for the digest algorithm to use. This
  be one of the following:
  SHA-256: selects the SHA-256 algorithm.
  SHA-384: selects the SHA-384 algorithm.
  SHA-512: selects the SHA-512 algorithm.
  Warning: SHA-1 is also supported here but the SHA-1 algorithm
  considered vulnerable and should no longer be used."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString. An identifier for the digest algorithm to use. This
  be one of the following:
  SHA-256: selects the SHA-256 algorithm.
  SHA-384: selects the SHA-384 algorithm.
  SHA-512: selects the SHA-512 algorithm.
  Warning: SHA-1 is also supported here but the SHA-1 algorithm
  considered vulnerable and should no longer be used."
  [this val]
  (aset this "hash" val))

