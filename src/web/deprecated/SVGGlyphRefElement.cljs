(ns web.deprecated.SVGGlyphRefElement
  "The SVGGlyphRefElement interface corresponds to the `<glyphRef>`"
  (:refer-clojure :exclude []))

(defn glyph-ref
  "Property.

  A DOMString corresponding to the glyphRef attribute of the given"
  [this]
  (-> this (.-glyphRef)))

(defn set-glyph-ref!
  "Property.

  A DOMString corresponding to the glyphRef attribute of the given"
  [this val]
  (aset this "glyphRef" val))

(defn format
  "Property.

  A DOMString corresponding to the format attribute of the given"
  [this]
  (-> this (.-format)))

(defn set-format!
  "Property.

  A DOMString corresponding to the format attribute of the given"
  [this val]
  (aset this "format" val))

(defn x
  "Property.

  A float corresponding to the x attribute of the given element."
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  A float corresponding to the x attribute of the given element."
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  A float corresponding to the y attribute of the given element."
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  A float corresponding to the y attribute of the given element."
  [this val]
  (aset this "y" val))

(defn dx
  "Property.

  A float corresponding to the dx attribute of the given element."
  [this]
  (-> this (.-dx)))

(defn set-dx!
  "Property.

  A float corresponding to the dx attribute of the given element."
  [this val]
  (aset this "dx" val))

(defn dy
  "Property.

  A float corresponding to the dy attribute of the given element."
  [this]
  (-> this (.-dy)))

(defn set-dy!
  "Property.

  A float corresponding to the dy attribute of the given element."
  [this val]
  (aset this "dy" val))

