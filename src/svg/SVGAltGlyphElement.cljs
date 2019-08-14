(ns svg.SVGAltGlyphElement
  "The SVGAltGlyphElement interface represents an `web.<altglyph>`
  This interface makes it possible to implement more sophisticated
  particular glyph characters. For some textal representations
  ligatures (e.g. æ, ß, etc ), special-purpose fonts (e.g. musical
  or even alternate glyphs such as Asian text strings it is required
  a different set of glyphs be used than the normal given character"
  (:refer-clojure :exclude []))

(defn glyph-ref
  "Property.

  The SVGAltGlyphElement.glyphRef property is a `dom.DOMString`
  a glyph identifier. It has the same meaning as the ‘glyphRef’
  on the `svg.SVGGlyphRefElement` interface of the `web.<glyphRef>`

  `string = myGlyph.glyphRef;
  myGlyph.glyphRef = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/glyphRef`"
  [this]
  (-> this (.glyphRef)))

(defn set-glyph-ref!
  "Property.

  The SVGAltGlyphElement.glyphRef property is a `dom.DOMString`
  a glyph identifier. It has the same meaning as the ‘glyphRef’
  on the `svg.SVGGlyphRefElement` interface of the `web.<glyphRef>`

  `string = myGlyph.glyphRef;
  myGlyph.glyphRef = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/glyphRef`"
  [this val]
  (aset this "glyphRef" val))

(defn format
  "Property.

  The SVGAltGlyphElement.format property is a `dom.DOMString` that
  the format of the given font. It has the same meaning as the
  property of `svg.SVGGlyphRefElement` property. If the font is
  one of the formats listed in CSS2([CSS2], section15.3.5), then
  value is the corresponding <string> parameter of the font.

  `string = myGlyph.format;
  myGlyph.format = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/format`"
  [this]
  (-> this (.format)))

(defn set-format!
  "Property.

  The SVGAltGlyphElement.format property is a `dom.DOMString` that
  the format of the given font. It has the same meaning as the
  property of `svg.SVGGlyphRefElement` property. If the font is
  one of the formats listed in CSS2([CSS2], section15.3.5), then
  value is the corresponding <string> parameter of the font.

  `string = myGlyph.format;
  myGlyph.format = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAltGlyphElement/format`"
  [this val]
  (aset this "format" val))

