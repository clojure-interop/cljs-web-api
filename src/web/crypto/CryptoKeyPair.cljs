(ns web.crypto.CryptoKeyPair
  "The CryptoKeyPair dictionary of the Web Crypto API represents
  key pair for an asymmetric cryptography algorithm, also known
  a public-key algorithm."
  (:refer-clojure :exclude []))

(defn private-key
  "Property.

  A CryptoKey object representing the private key. For encryption
  decryption algorithms, this key is used to decrypt. For signing
  verification algorithms it is used to sign."
  [this]
  (-> this (.-privateKey)))

(defn set-private-key!
  "Property.

  A CryptoKey object representing the private key. For encryption
  decryption algorithms, this key is used to decrypt. For signing
  verification algorithms it is used to sign."
  [this val]
  (aset this "privateKey" val))

(defn public-key
  "Property.

  A CryptoKey object representing the public key. For encryption
  decryption algorithms, this key is used to encrypt. For signing
  verification algorithms it is used to verify signatures."
  [this]
  (-> this (.-publicKey)))

(defn set-public-key!
  "Property.

  A CryptoKey object representing the public key. For encryption
  decryption algorithms, this key is used to encrypt. For signing
  verification algorithms it is used to verify signatures."
  [this val]
  (aset this "publicKey" val))

