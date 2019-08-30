(ns web.other.TextEncoder
  "TextEncoder takes a stream of code points as input and emits
  stream of bytes. For a more scalable, non-native library, see
  – a C-like representation of strings based on typed arrays."
  (:refer-clojure :exclude []))

(defn encode
  "Method.

  The TextEncoder.prototype.encode() method takes a `web.USVString`
  input, and returns a `js.Uint8Array` containing the text given
  parameters encoded with the specific method for that TextEncoder

  `b1 = encoder.encode(string);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode`"
  [this string]
  (-> this (.encode string)))

(defn encode-into
  "Method.

  [Experimental]

  The TextEncoder.prototype.encodeInto() method takes a `web.USVString`
  encode and a destination `js.Uint8Array` to put resulting UTF-8
  text into, and returns a dictionary object indicating the progress
  the encoding. This is potentially more performant than the older
  method especially when the target buffer is a view into a Wasm

  `b1 = encoder.encodeInto(string, uint8Array);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encodeInto`"
  [this string uint8array]
  (-> this (.encodeInto string uint8array)))

(defn encoding
  "Property.

  [Read Only]

  The TextEncoder.encoding read-only property returns a `web.dom.DOMString`
  the name of the encoding algorithm used by the specific encoder.

  `b = encoder.encoding;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encoding`"
  [this]
  (-> this (.-encoding)))

