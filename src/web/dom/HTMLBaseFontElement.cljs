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
  (-> this (.-color)))

(defn set-color!
  "Property.

  Is a DOMString representing the text color using either a named
  or a color specified in the hexadecimal #RRGGBB format."
  [this val]
  (aset this "color" val))

(defn face
  "Property.

  Is a DOMString representing a list of one or more font names.
  document text in the default style is rendered in the first font
  that the client's browser supports. If no font listed is installed
  the local system, the browser typically defaults to the proportional
  fixed-width font for that system."
  [this]
  (-> this (.-face)))

(defn set-face!
  "Property.

  Is a DOMString representing a list of one or more font names.
  document text in the default style is rendered in the first font
  that the client's browser supports. If no font listed is installed
  the local system, the browser typically defaults to the proportional
  fixed-width font for that system."
  [this val]
  (aset this "face" val))

(defn size
  "Property.

  Is a DOMString representing the font size as either a numeric
  relative value. Numeric values range from 1 to 7 with 1 being
  smallest and 3 the default. Relative value starts with a '+'
  a '-'."
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  Is a DOMString representing the font size as either a numeric
  relative value. Numeric values range from 1 to 7 with 1 being
  smallest and 3 the default. Relative value starts with a '+'
  a '-'."
  [this val]
  (aset this "size" val))

