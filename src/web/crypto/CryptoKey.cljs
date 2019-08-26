(ns web.crypto.CryptoKey
  "The CryptoKey interface of the Web Crypto API represents a cryptographic"
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  String which may take one of the following values:
  \"secret\": This key is a secret key for use with a symmetric
  \"private\": This key is the private half of an asymmetric algorithm's
  \"public\": This key is the public half of an asymmetric algorithm's"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  String which may take one of the following values:
  \"secret\": This key is a secret key for use with a symmetric
  \"private\": This key is the private half of an asymmetric algorithm's
  \"public\": This key is the public half of an asymmetric algorithm's"
  [this val]
  (aset this "type" val))

(defn extractable
  "Property.

  Boolean indicating whether or not the key may be extracted using
  or SubtleCrypto.wrapKey().
  true: The key may be extracted.
  false The key may not be extracted. exportKey() or wrapKey()
  throw an exception if used to extract this key."
  [this]
  (-> this (.-extractable)))

(defn set-extractable!
  "Property.

  Boolean indicating whether or not the key may be extracted using
  or SubtleCrypto.wrapKey().
  true: The key may be extracted.
  false The key may not be extracted. exportKey() or wrapKey()
  throw an exception if used to extract this key."
  [this val]
  (aset this "extractable" val))

(defn algorithm
  "Property.

  An object describing the algorithm for which this key can be
  and any associated extra parameters.
  AesKeyGenParams if the algorithm is any of the AES variants.
  RsaHashedKeyGenParams if the algorithm is any of the RSA variants.
  EcKeyGenParams if the algorithm is any of the EC variants.
  HmacKeyGenParams if the algorithm is HMAC."
  [this]
  (-> this (.-algorithm)))

(defn set-algorithm!
  "Property.

  An object describing the algorithm for which this key can be
  and any associated extra parameters.
  AesKeyGenParams if the algorithm is any of the AES variants.
  RsaHashedKeyGenParams if the algorithm is any of the RSA variants.
  EcKeyGenParams if the algorithm is any of the EC variants.
  HmacKeyGenParams if the algorithm is HMAC."
  [this val]
  (aset this "algorithm" val))

(defn usages
  "Property.

  An Array of strings, indicating what can be done with the key.
  values for array elements are:
  \"encrypt\": The key may be used to encrypt messages.
  \"decrypt\": The key may be used to decrypt messages.
  \"sign\": The key may be used to sign messages.
  \"verify\": The key may be used to verify signatures.
  \"deriveKey\": The key may be used in deriving a new key.
  \"deriveBits\": The key may be used in deriving bits.
  \"wrapKey\": The key may be used to wrap a key.
  \"unwrapKey\": The key may be used to unwrap a key."
  [this]
  (-> this (.-usages)))

(defn set-usages!
  "Property.

  An Array of strings, indicating what can be done with the key.
  values for array elements are:
  \"encrypt\": The key may be used to encrypt messages.
  \"decrypt\": The key may be used to decrypt messages.
  \"sign\": The key may be used to sign messages.
  \"verify\": The key may be used to verify signatures.
  \"deriveKey\": The key may be used in deriving a new key.
  \"deriveBits\": The key may be used in deriving bits.
  \"wrapKey\": The key may be used to wrap a key.
  \"unwrapKey\": The key may be used to unwrap a key."
  [this val]
  (aset this "usages" val))

