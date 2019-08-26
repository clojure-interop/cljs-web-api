(ns web.deprecated.SVGAltGlyphElement
  "The SVGAltGlyphElement interface represents an `<altglyph>` element.
  interface makes it possible to implement more sophisticated and
  glyph characters. For some textal representations as: ligatures
  æ, ß, etc ), special-purpose fonts (e.g. musical symbols) or
  alternate glyphs such as Asian text strings it is required that
  different set of glyphs be used than the normal given character"
  (:refer-clojure :exclude []))

(defn glyph-ref
  "Property.

  The SVGAltGlyphElement.glyphRef property is a `web.dom.DOMString`
  a glyph identifier. It has the same meaning as the ‘glyphRef’
  on the `web.deprecated.SVGGlyphRefElement` interface of the `<glyphRef>`

  `string = myGlyph.glyphRef;
  myGlyph.glyphRef = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/glyphRef`"
  [this]
  (-> this (.glyphRef)))

(defn set-glyph-ref!
  "Property.

  The SVGAltGlyphElement.glyphRef property is a `web.dom.DOMString`
  a glyph identifier. It has the same meaning as the ‘glyphRef’
  on the `web.deprecated.SVGGlyphRefElement` interface of the `<glyphRef>`

  `string = myGlyph.glyphRef;
  myGlyph.glyphRef = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/glyphRef`"
  [this val]
  (aset this "glyphRef" val))

