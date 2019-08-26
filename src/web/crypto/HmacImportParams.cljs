(ns web.crypto.HmacImportParams
  "The HmacImportParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  or `SubtleCrypto.unwrapKey()`, when generating a key for the
  algorithm."
  (:refer-clojure :exclude [name hash]))

(defn name
  "Property.

  A DOMString. This should be set to HMAC."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to HMAC."
  [this val]
  (aset this "name" val))

(defn hash
  "Property.

  A DOMString representing the name of the digest function to
  The can take a value of SHA-256, SHA-384, or SHA-512.
  Warning: Although you can technically pass SHA-1 here, this
  strongly discouraged as it is considered vulnerable."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the name of the digest function to
  The can take a value of SHA-256, SHA-384, or SHA-512.
  Warning: Although you can technically pass SHA-1 here, this
  strongly discouraged as it is considered vulnerable."
  [this val]
  (aset this "hash" val))

(defn length
  "Property.

  A Number representing the length in bits of the key. If this
  omitted the length of the key is equal to the length of the digest
  by the digest function you have chosen. Unless you have a good
  to use a different length, omit this property and use the default."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  A Number representing the length in bits of the key. If this
  omitted the length of the key is equal to the length of the digest
  by the digest function you have chosen. Unless you have a good
  to use a different length, omit this property and use the default."
  [this val]
  (aset this "length" val))

