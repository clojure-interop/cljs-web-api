(ns web.crypto.RsaHashedImportParams
  "The RsaHashedImportParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  or `SubtleCrypto.unwrapKey()`, when importing any RSA-based key
  that is, when the algorithm is identified as any of RSASSA-PKCS1-v1_5,
  or RSA-OAEP."
  (:refer-clojure :exclude [name hash]))

(defn name
  "Property.

  A DOMString. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS,
  RSA-OAEP, depending on the algorithm you want to use."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSASSA-PKCS1-v1_5, RSA-PSS,
  RSA-OAEP, depending on the algorithm you want to use."
  [this val]
  (aset this "name" val))

(defn hash
  "Property.

  A DOMString representing the name of the digest function to
  This can be one of SHA-256, SHA-384, or SHA-512.
  Warning: Although you can technically pass SHA-1 here, this
  strongly discouraged as it is considered vulnerable."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the name of the digest function to
  This can be one of SHA-256, SHA-384, or SHA-512.
  Warning: Although you can technically pass SHA-1 here, this
  strongly discouraged as it is considered vulnerable."
  [this val]
  (aset this "hash" val))

