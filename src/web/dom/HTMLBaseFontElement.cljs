(ns web.dom.HTMLBaseFontElement
  "The HTMLBaseFontElement interface provides special properties
  the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<basefont>` elements."
  (:refer-clojure :exclude []))

(defn color
  "Property.

  Is a DOMString representing the text color using either a named
  or a color specified in the hexadecimal #RRGGBB format."
  [this]
  (-> this (.color)))

(defn set-color!
  "Property.

  Is a DOMString representing the text color using either a named
  or a color specified in the hexadecimal #RRGGBB format."
  [this val]
  (aset this "color" val))

