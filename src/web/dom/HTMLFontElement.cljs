(ns web.dom.HTMLFontElement
  "Implements the document object model (DOM) representation of
  font element. The HTML Font Element `<font>` defines the font
  font face and color of text."
  (:refer-clojure :exclude []))

(defn color
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.color property is a `web.dom.DOMString`
  reflects the color HTML attribute, containing either a named
  or a color specified in the hexadecimal #RRGGBB format.

  `colorString = fontObj.color;
  fontObj.color = colorString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/color`"
  [this]
  (-> this (.-color)))

(defn set-color!
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.color property is a `web.dom.DOMString`
  reflects the color HTML attribute, containing either a named
  or a color specified in the hexadecimal #RRGGBB format.

  `colorString = fontObj.color;
  fontObj.color = colorString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/color`"
  [this val]
  (aset this "color" val))

(defn face
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.face property is a `web.dom.DOMString`
  reflects the face HTML attribute, containing a comma-separated
  of one or more font names.

  `faceString = fontObj.face;
  fontObj.face = faceString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/face`"
  [this]
  (-> this (.-face)))

(defn set-face!
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.face property is a `web.dom.DOMString`
  reflects the face HTML attribute, containing a comma-separated
  of one or more font names.

  `faceString = fontObj.face;
  fontObj.face = faceString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/face`"
  [this val]
  (aset this "face" val))

(defn size
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.size property is a `web.dom.DOMString`
  reflects the size HTML attribute. It contains either an integer
  in the range of 1-7 or a relative value to increase/decrease
  value of the size attribute of the `<basefont>` element.

  `sizeString = fontObj.size;
  fontObj.size = sizeString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/size`"
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  [Obsolute]

  The obsolete HTMLFontElement.size property is a `web.dom.DOMString`
  reflects the size HTML attribute. It contains either an integer
  in the range of 1-7 or a relative value to increase/decrease
  value of the size attribute of the `<basefont>` element.

  `sizeString = fontObj.size;
  fontObj.size = sizeString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement/size`"
  [this val]
  (aset this "size" val))

