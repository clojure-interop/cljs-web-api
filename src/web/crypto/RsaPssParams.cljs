(ns web.crypto.RsaPssParams
  "The RsaPssParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  or `SubtleCrypto.verify()`, when using the RSA-PSS algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to RSA-PSS."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to RSA-PSS."
  [this val]
  (aset this "name" val))

(defn salt-length
  "Property.

  A long integer representing the length of the random salt to
  in bytes.
  RFC 3447 says that \"Typical salt lengths\" are either 0 or the
  of the output of the digest algorithm that was selected when
  key was generated. For example, if you use SHA-256 as the digest
  this could be 32.
  The maximum size of saltLength is given by:
  Math.ceil((keySizeInBits - 1)/8) - digestSizeInBytes - 2
  So for a key length of 2048 bits and a digest output size of
  bytes, the maximum size would be 222."
  [this]
  (-> this (.-saltLength)))

(defn set-salt-length!
  "Property.

  A long integer representing the length of the random salt to
  in bytes.
  RFC 3447 says that \"Typical salt lengths\" are either 0 or the
  of the output of the digest algorithm that was selected when
  key was generated. For example, if you use SHA-256 as the digest
  this could be 32.
  The maximum size of saltLength is given by:
  Math.ceil((keySizeInBits - 1)/8) - digestSizeInBytes - 2
  So for a key length of 2048 bits and a digest output size of
  bytes, the maximum size would be 222."
  [this val]
  (aset this "saltLength" val))

