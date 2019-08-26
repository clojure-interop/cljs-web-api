(ns web.crypto.AesGcmParams
  "The AesGcmParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the AES-GCM algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-GCM."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-GCM."
  [this val]
  (aset this "name" val))

(defn iv
  "Property.

  A BufferSource — the initialization vector. This must be unique
  every encryption operation carried out with a given key. Put
  way: never reuse an IV with the same key. The AES-GCM specification
  that the IV should be 96 bits long, and typically contains bits
  a random number generator. Section 8.2 of the specification outlines
  for constructing IVs. Note that the IV does not have to be secret,
  unique: so it is OK, for example, to transmit it in the clear
  the encrypted message."
  [this]
  (-> this (.-iv)))

(defn set-iv!
  "Property.

  A BufferSource — the initialization vector. This must be unique
  every encryption operation carried out with a given key. Put
  way: never reuse an IV with the same key. The AES-GCM specification
  that the IV should be 96 bits long, and typically contains bits
  a random number generator. Section 8.2 of the specification outlines
  for constructing IVs. Note that the IV does not have to be secret,
  unique: so it is OK, for example, to transmit it in the clear
  the encrypted message."
  [this val]
  (aset this "iv" val))

(defn additional-data
  "Property.

  A BufferSource. This contains additional data that will not
  encrypted but will be authenticated along with the encrypted
  If additionalData is given here then the same data must be given
  the corresponding call to decrypt(): if the data given to the
  call does not match the original data, the decryption will throw
  exception. This gives you a way to authenticate associated data
  having to encrypt it.
  The bit length of additionalData must be ≤ 264-1.
  The additionalData property is optional and may be omitted without
  the security of the encryption operation."
  [this]
  (-> this (.-additionalData)))

(defn set-additional-data!
  "Property.

  A BufferSource. This contains additional data that will not
  encrypted but will be authenticated along with the encrypted
  If additionalData is given here then the same data must be given
  the corresponding call to decrypt(): if the data given to the
  call does not match the original data, the decryption will throw
  exception. This gives you a way to authenticate associated data
  having to encrypt it.
  The bit length of additionalData must be ≤ 264-1.
  The additionalData property is optional and may be omitted without
  the security of the encryption operation."
  [this val]
  (aset this "additionalData" val))

(defn tag-length
  "Property.

  A Number. This determines the size in bits of the authentication
  generated in the encryption operation and used for authentication
  the corresponding decryption.
  According to the Web Crypto specification this must have one
  the following values: 32, 64, 96, 104, 112, 120, or 128. The
  specification recommends that it should be 96, 104, 112, 120
  128, although 32 or 64 bits may be acceptable in some applications:
  C of the specification provides additional guidance here.
  tagLength is optional and defaults to 128 if it is not specified."
  [this]
  (-> this (.-tagLength)))

(defn set-tag-length!
  "Property.

  A Number. This determines the size in bits of the authentication
  generated in the encryption operation and used for authentication
  the corresponding decryption.
  According to the Web Crypto specification this must have one
  the following values: 32, 64, 96, 104, 112, 120, or 128. The
  specification recommends that it should be 96, 104, 112, 120
  128, although 32 or 64 bits may be acceptable in some applications:
  C of the specification provides additional guidance here.
  tagLength is optional and defaults to 128 if it is not specified."
  [this val]
  (aset this "tagLength" val))

