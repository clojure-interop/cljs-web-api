(ns web.dom.HTMLPreElement
  "The HTMLPreElement interface exposes specific properties and
  (beyond those of the `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating a block of preformatted
  (`<pre>`)."
  (:refer-clojure :exclude []))

(defn width
  "Property.

  Is a long value reflecting the obsolete width attribute, containing
  fixed-size length for the <pre> element."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Is a long value reflecting the obsolete width attribute, containing
  fixed-size length for the <pre> element."
  [this val]
  (aset this "width" val))

