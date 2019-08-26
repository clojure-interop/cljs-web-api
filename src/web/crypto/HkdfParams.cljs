(ns web.crypto.HkdfParams
  "See the examples for `SubtleCrypto.deriveKey()`."
  (:refer-clojure :exclude [name hash]))

(defn name
  "Property.

  A DOMString. This should be set to HKDF."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to HKDF."
  [this val]
  (aset this "name" val))

(defn hash
  "Property.

  A DOMString representing the digest algorithm to use. This may
  one of:
  SHA-1
  SHA-256
  SHA-384
  SHA-512"
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the digest algorithm to use. This may
  one of:
  SHA-1
  SHA-256
  SHA-384
  SHA-512"
  [this val]
  (aset this "hash" val))

(defn salt
  "Property.

  A BufferSource. The HKDF specification states that adding salt
  significantly to the strength of HKDF\". Ideally, the salt is
  random or pseudo-random value with the same length as the output
  the digest function. Unlike the input key material passed into
  salt does not need to be kept secret."
  [this]
  (-> this (.-salt)))

(defn set-salt!
  "Property.

  A BufferSource. The HKDF specification states that adding salt
  significantly to the strength of HKDF\". Ideally, the salt is
  random or pseudo-random value with the same length as the output
  the digest function. Unlike the input key material passed into
  salt does not need to be kept secret."
  [this val]
  (aset this "salt" val))

(defn info
  "Property.

  A BufferSource representing application-specific contextual information.
  is used to bind the derived key to an application or context,
  enables you to derive different keys for different contexts while
  the same input key material. It's important that this should
  independent of the input key material itself. This property is
  but may be an empty buffer."
  [this]
  (-> this (.-info)))

(defn set-info!
  "Property.

  A BufferSource representing application-specific contextual information.
  is used to bind the derived key to an application or context,
  enables you to derive different keys for different contexts while
  the same input key material. It's important that this should
  independent of the input key material itself. This property is
  but may be an empty buffer."
  [this val]
  (aset this "info" val))

