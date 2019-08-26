(ns web.crypto.HmacKeyGenParams
  "The HmacKeyGenParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when generating a key for the HMAC algorithm."
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
  You can pass any of SHA-1, SHA-256, SHA-384, or SHA-512 here."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the name of the digest function to
  You can pass any of SHA-1, SHA-256, SHA-384, or SHA-512 here."
  [this val]
  (aset this "hash" val))

(defn length
  "Property.

  A Number — the length in bits of the key. If this is omitted
  length of the key is equal to the length of the digest generated
  the digest function you have chosen. Unless you have a good reason
  use a different length, omit this property and use the default."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  A Number — the length in bits of the key. If this is omitted
  length of the key is equal to the length of the digest generated
  the digest function you have chosen. Unless you have a good reason
  use a different length, omit this property and use the default."
  [this val]
  (aset this "length" val))

