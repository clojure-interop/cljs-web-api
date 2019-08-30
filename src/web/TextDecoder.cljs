(ns web.TextDecoder
  "The TextDecoder interface represents a decoder for a specific
  is, a specific character encoding—such as utf-8, iso-8859-2,
  cp1261, gbk, etc. A decoder takes a stream of bytes as input
  emits a stream of code points. For a more scalable, non-native
  see StringView – a C-like representation of strings based on
  arrays."
  (:refer-clojure :exclude []))

(defn decode
  "Method.

  [Experimental]

  The TextDecoder.prototype.decode() method returns a `web.dom.DOMString`
  the text, given in parameters, decoded with the specific method
  that TextDecoder object.

  `b1 = decoder.decode(buffer, options);
  b2 = decoder.decode(buffer);
  b3 = decoder.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode`"
  [this & args]
  (-> this .-decode (.apply this (clj->js args))))

(defn encoding
  "Property.

  [Read Only]
  [Experimental]

  The TextDecoder.prototype.encoding read-only property returns
  `web.dom.DOMString` containing the name of the decoding algorithm
  by the specific decoder.

  `var b = decoder.decoding;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding`"
  [this]
  (-> this (.-encoding)))

(defn fatal
  "Property.

  Is a Boolean indicating whether the error mode is fatal."
  [this]
  (-> this (.-fatal)))

(defn set-fatal!
  "Property.

  Is a Boolean indicating whether the error mode is fatal."
  [this val]
  (aset this "fatal" val))

(defn ignore-bom
  "Property.

  Is a Boolean indicating whether the byte order marker is ignored."
  [this]
  (-> this (.-ignoreBOM)))

(defn set-ignore-bom!
  "Property.

  Is a Boolean indicating whether the byte order marker is ignored."
  [this val]
  (aset this "ignoreBOM" val))

