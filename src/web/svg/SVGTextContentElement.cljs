(ns web.svg.SVGTextContentElement
  "The SVGTextContentElement interface is implemented by elements
  support rendering child text content. It is inherited by various
  interfaces, such as `web.svg.SVGTextElement`, `web.svg.SVGTSpanElement`,
  `web.deprecated.SVGAltGlyphElement` and `web.svg.SVGTextPathElement`."
  (:refer-clojure :exclude []))

(defn get-number-of-chars
  "Method.

  Returns a long representing the total number of addressable characters
  for rendering within the current element, regardless of whether
  will be rendered."
  [this & args]
  (-> this .-getNumberOfChars (.apply this (clj->js args))))

(defn get-computed-text-length
  "Method.

  Returns a float representing the computed length for the text
  the element."
  [this & args]
  (-> this .-getComputedTextLength (.apply this (clj->js args))))

(defn get-sub-string-length
  "Method.

  Returns a float representing the computed length of the formatted
  advance distance for a substring of text within the element.
  that this method only accounts for the widths of the glyphs in
  substring and any extra spacing inserted by the CSS 'letter-spacing'
  'word-spacing' properties. Visual spacing adjustments made by
  'x' attribute is ignored."
  [this & args]
  (-> this .-getSubStringLength (.apply this (clj->js args))))

(defn get-start-position-of-char
  "Method.

  Returns a DOMPoint representing the position of a typographic
  after text layout has been performed.
  Note: In SVG 1.1 this method returned an SVGPoint."
  [this & args]
  (-> this .-getStartPositionOfChar (.apply this (clj->js args))))

(defn get-end-position-of-char
  "Method.

  Returns a DOMPoint representing the trailing position of a typographic
  after text layout has been performed.
  Note: In SVG 1.1 this method returned an SVGPoint."
  [this & args]
  (-> this .-getEndPositionOfChar (.apply this (clj->js args))))

(defn get-extent-of-char
  "Method.

  Returns a DOMRect representing the computed tight bounding box
  the glyph cell that corresponds to a given typographic character."
  [this & args]
  (-> this .-getExtentOfChar (.apply this (clj->js args))))

(defn get-rotation-of-char
  "Method.

  Returns a float representing the rotation of typographic character."
  [this & args]
  (-> this .-getRotationOfChar (.apply this (clj->js args))))

(defn get-char-num-at-position
  "Method.

  Returns a long representing the character which caused a text
  to be rendered at a given position in the coordinate system.
  the relationship between characters and glyphs is not one-to-one,
  the first character of the relevant typographic character is"
  [this & args]
  (-> this .-getCharNumAtPosition (.apply this (clj->js args))))

(defn select-sub-string
  "Method.

  Selects text within the element."
  [this & args]
  (-> this .-selectSubString (.apply this (clj->js args))))

(defn text-length
  "Property.

  An SVGAnimatedLength reflecting the textLength attribute of the
  element."
  [this]
  (-> this (.-textLength)))

(defn set-text-length!
  "Property.

  An SVGAnimatedLength reflecting the textLength attribute of the
  element."
  [this val]
  (aset this "textLength" val))

(defn length-adjust
  "Property.

  An SVGAnimatedEnumeration reflecting the lengthAdjust attribute
  the given element. The numeric type values represent one of the
  values above."
  [this]
  (-> this (.-lengthAdjust)))

(defn set-length-adjust!
  "Property.

  An SVGAnimatedEnumeration reflecting the lengthAdjust attribute
  the given element. The numeric type values represent one of the
  values above."
  [this val]
  (aset this "lengthAdjust" val))

