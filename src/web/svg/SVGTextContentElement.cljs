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
  (apply (-> this .-getNumberOfChars) (concat [this] args)))

(defn text-length
  "Property.

  An SVGAnimatedLength reflecting the textLength attribute of the
  element."
  [this]
  (-> this (.textLength)))

(defn set-text-length!
  "Property.

  An SVGAnimatedLength reflecting the textLength attribute of the
  element."
  [this val]
  (aset this "textLength" val))

