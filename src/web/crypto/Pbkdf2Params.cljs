(ns web.crypto.Pbkdf2Params
  "The Pbkdf2Params dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  when using the PBKDF2 algorithm."
  (:refer-clojure :exclude [name hash]))

(defn name
  "Property.

  A DOMString. This should be set to PBKDF2."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to PBKDF2."
  [this val]
  (aset this "name" val))

(defn hash
  "Property.

  A DOMString representing the digest algorithm to use. This may
  one of:
  SHA-1
  SHA-256
  SHA-384
  SHA-512
  Warning: SHA-1 is considered vulnerable in most cryptographic
  but is still considered safe in PBKDF2. However, it's advisable
  transition away from it everywhere, so unless you need to use
  don't. Use a different digest algorithm instead."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  A DOMString representing the digest algorithm to use. This may
  one of:
  SHA-1
  SHA-256
  SHA-384
  SHA-512
  Warning: SHA-1 is considered vulnerable in most cryptographic
  but is still considered safe in PBKDF2. However, it's advisable
  transition away from it everywhere, so unless you need to use
  don't. Use a different digest algorithm instead."
  [this val]
  (aset this "hash" val))

(defn salt
  "Property.

  A BufferSource. This should be a random or pseudo-random value
  at least 16 bytes. Unlike the input key material passed into
  salt does not need to be kept secret."
  [this]
  (-> this (.-salt)))

(defn set-salt!
  "Property.

  A BufferSource. This should be a random or pseudo-random value
  at least 16 bytes. Unlike the input key material passed into
  salt does not need to be kept secret."
  [this val]
  (aset this "salt" val))

(defn iterations
  "Property.

  A Number representing the number of times the hash function will
  executed in deriveKey(). This determines how computationally
  (that is, slow) the deriveKey() operation will be. In this context,
  is good, since it makes it more expensive for an attacker to
  a dictionary attack against the keys. The general guidance here
  to use as many iterations as possible, subject to keeping an
  level of performance for your application."
  [this]
  (-> this (.-iterations)))

(defn set-iterations!
  "Property.

  A Number representing the number of times the hash function will
  executed in deriveKey(). This determines how computationally
  (that is, slow) the deriveKey() operation will be. In this context,
  is good, since it makes it more expensive for an attacker to
  a dictionary attack against the keys. The general guidance here
  to use as many iterations as possible, subject to keeping an
  level of performance for your application."
  [this val]
  (aset this "iterations" val))

