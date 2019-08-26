(ns web.dom.HTMLSourceElement
  "The HTMLSourceElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` object interface it also has available
  it by inheritance) for manipulating `<source>` elements."
  (:refer-clojure :exclude []))

(defn key-system
  "Property.

  Is a DOMString describing the key system encrypting the stream."
  [this]
  (-> this (.keySystem)))

(defn set-key-system!
  "Property.

  Is a DOMString describing the key system encrypting the stream."
  [this val]
  (aset this "keySystem" val))

