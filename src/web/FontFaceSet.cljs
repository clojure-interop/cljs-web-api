(ns web.FontFaceSet
  "The FontFaceSet interface of the CSS Font Loading API manages
  loading of font-faces and querying of their download status."
  (:refer-clojure :exclude [load]))

(defn check
  "Method.

  A `web.Boolean` that is true if the font list is available

  `bool = aFontFaceSet.check(font);
  bool = aFontFaceSet.check(font, text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/check`"
  [this & args]
  (apply (-> this .-check) (concat [this] args)))

(defn load
  "Method.

  A `web.Promise` of an `web.Array` of `web.FontFace` loaded. The
  is fulfilled when all the fonts are loaded; it is rejected if
  of the fonts failed to load.

  `result = aFontFaceSet.load(font);

  result = aFontFaceSet.load(font, text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/load`"
  [this & args]
  (apply (-> this .-load) (concat [this] args)))

(defn ready
  "Property.

  The ready readonly property of the `web.FontFaceSet` interface
  a `web.Promise` that resolves to the given `web.FontFaceSet`.

  `fontFaceSet.ready.then(function(fontFaceSet) {
  // ...
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready`"
  [this]
  (-> this (.ready)))

(defn set-ready!
  "Property.

  The ready readonly property of the `web.FontFaceSet` interface
  a `web.Promise` that resolves to the given `web.FontFaceSet`.

  `fontFaceSet.ready.then(function(fontFaceSet) {
  // ...
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready`"
  [this val]
  (aset this "ready" val))

