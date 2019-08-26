(ns web.deprecated.SVGGlyphRefElement
  "The SVGGlyphRefElement interface corresponds to the `<glyphRef>`"
  (:refer-clojure :exclude []))

(defn glyph-ref
  "Property.

  A DOMString corresponding to the glyphRef attribute of the given"
  [this]
  (-> this (.glyphRef)))

(defn set-glyph-ref!
  "Property.

  A DOMString corresponding to the glyphRef attribute of the given"
  [this val]
  (aset this "glyphRef" val))

