(ns web.crypto.RsaHashedKeyGenParams
  "The RsaHashedKeyGenParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when generating any RSA-based key pair: that is, when the algorithm
  identified as any of RSASSA-PKCS1-v1_5, RSA-PSS, or RSA-OAEP."
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

(defn modulus-length
  "Property.

  A Number. The length in bits of the RSA modulus. This should
  at least 2048: see for example see NIST SP 800-131A Rev. 1. Some
  are now recommending that it should be 4096."
  [this]
  (-> this (.-modulusLength)))

(defn set-modulus-length!
  "Property.

  A Number. The length in bits of the RSA modulus. This should
  at least 2048: see for example see NIST SP 800-131A Rev. 1. Some
  are now recommending that it should be 4096."
  [this val]
  (aset this "modulusLength" val))

(defn public-exponent
  "Property.

  A Uint8Array. The public exponent. Unless you have a good reason
  use something else, specify 65537 here ([0x01, 0x00, 0x01])."
  [this]
  (-> this (.-publicExponent)))

(defn set-public-exponent!
  "Property.

  A Uint8Array. The public exponent. Unless you have a good reason
  use something else, specify 65537 here ([0x01, 0x00, 0x01])."
  [this val]
  (aset this "publicExponent" val))

(defn hash
  "Property.

  A DOMString representing the name of the digest function to
  You can pass any of SHA-256, SHA-384, or SHA-512 here.
  Warning: Although you can technically pass SHA-1 as a value
  this is strongly discouraged as SHA-1 is considered vulnerable."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the name of the digest function to
  You can pass any of SHA-256, SHA-384, or SHA-512 here.
  Warning: Although you can technically pass SHA-1 as a value
  this is strongly discouraged as SHA-1 is considered vulnerable."
  [this val]
  (aset this "hash" val))

