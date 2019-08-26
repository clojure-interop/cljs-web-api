(ns web.crypto.AesKeyGenParams
  "See the examples for `SubtleCrypto.generateKey()`."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-CBC, AES-CTR, AES-GCM,
  AES-KW, depending on the algorithm you want to use."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-CBC, AES-CTR, AES-GCM,
  AES-KW, depending on the algorithm you want to use."
  [this val]
  (aset this "name" val))

(defn length
  "Property.

  A Number — the length in bits of the key to generate. This must
  one of: 128, 192, or 256."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  A Number — the length in bits of the key to generate. This must
  one of: 128, 192, or 256."
  [this val]
  (aset this "length" val))

