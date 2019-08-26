(ns web.crypto.AesCtrParams
  "The AesCtrParams dictionary of the Web Crypto API represents
  object that should be passed as the algorithm parameter into
  `SubtleCrypto.decrypt()`, `SubtleCrypto.wrapKey()`, or `SubtleCrypto.unwrapKey()`,
  using the AES-CTR algorithm."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  A DOMString. This should be set to AES-CTR."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString. This should be set to AES-CTR."
  [this val]
  (aset this "name" val))

(defn counter
  "Property.

  A BufferSource — the initial value of the counter block. This
  be 16 bytes long (the AES block size). The rightmost length bits
  this block are used for the counter, and the rest is used for
  nonce. For example, if length is set to 64, then the first half
  counter is the nonce and the second half is used for the counter."
  [this]
  (-> this (.-counter)))

(defn set-counter!
  "Property.

  A BufferSource — the initial value of the counter block. This
  be 16 bytes long (the AES block size). The rightmost length bits
  this block are used for the counter, and the rest is used for
  nonce. For example, if length is set to 64, then the first half
  counter is the nonce and the second half is used for the counter."
  [this val]
  (aset this "counter" val))

(defn length
  "Property.

  A Number — the number of bits in the counter block that are used
  the actual counter. The counter must be big enough that it doesn't
  if the message is n blocks and the counter is m bits long, then
  following must be true: n <= 2m. The NIST SP800-38A standard,
  defines CTR, suggests that the counter should occupy half of
  counter block (see Appendix B.2), so for AES it would be 64."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  A Number — the number of bits in the counter block that are used
  the actual counter. The counter must be big enough that it doesn't
  if the message is n blocks and the counter is m bits long, then
  following must be true: n <= 2m. The NIST SP800-38A standard,
  defines CTR, suggests that the counter should occupy half of
  counter block (see Appendix B.2), so for AES it would be 64."
  [this val]
  (aset this "length" val))

