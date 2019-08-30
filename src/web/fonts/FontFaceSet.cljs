(ns web.fonts.FontFaceSet
  "The FontFaceSet interface of the CSS Font Loading API manages
  loading of font-faces and querying of their download status."
  (:refer-clojure :exclude [load]))

(defn add
  "Method.

  Adds a font to the font set."
  [this & args]
  (-> this .-add (.apply this (clj->js args))))

(defn check
  "Method.

  [Experimental]

  A `js.Boolean` that is true if the font list is available

  `bool = aFontFaceSet.check(font);
  bool = aFontFaceSet.check(font, text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/check`"
  [this & args]
  (-> this .-check (.apply this (clj->js args))))

(defn clear
  "Method.

  Removes all fonts from the font set."
  [this & args]
  (-> this .-clear (.apply this (clj->js args))))

(defn delete
  "Method.

  Removes a font from the font set."
  [this & args]
  (-> this .-delete (.apply this (clj->js args))))

(defn load
  "Method.

  [Experimental]

  A `js.Promise` of an `js.Array` of `web.fonts.FontFace` loaded.
  promise is fulfilled when all the fonts are loaded; it is rejected
  one of the fonts failed to load.

  `result = aFontFaceSet.load(font);

  result = aFontFaceSet.load(font, text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/load`"
  [this & args]
  (-> this .-load (.apply this (clj->js args))))

(defn status
  "Property.

  Indicates the font-face's loading status. It will be one of 'loading'
  'loaded'."
  [this]
  (-> this (.-status)))

(defn set-status!
  "Property.

  Indicates the font-face's loading status. It will be one of 'loading'
  'loaded'."
  [this val]
  (aset this "status" val))

(defn ready
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The ready readonly property of the `web.fonts.FontFaceSet` interface
  a `js.Promise` that resolves to the given `web.fonts.FontFaceSet`.

  `fontFaceSet.ready.then(function(fontFaceSet) {
  // ...
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready`"
  [this]
  (-> this (.-ready)))

(defn onloading
  "Property.

  An EventListener called whenever an event of type loading is
  indicating a font-face set has started loading."
  [this]
  (-> this (.-onloading)))

(defn set-onloading!
  "Property.

  An EventListener called whenever an event of type loading is
  indicating a font-face set has started loading."
  [this val]
  (aset this "onloading" val))

(defn onloadingdone
  "Property.

  An EventListener called whenever an event of type loadingdone
  fired, indicating that a font face set has finished loading."
  [this]
  (-> this (.-onloadingdone)))

(defn set-onloadingdone!
  "Property.

  An EventListener called whenever an event of type loadingdone
  fired, indicating that a font face set has finished loading."
  [this val]
  (aset this "onloadingdone" val))

(defn onloadingerror
  "Property.

  An EventListener called whenever an event of type loadingerror
  fired, indicating that an error occurred whilst loading a font-face"
  [this]
  (-> this (.-onloadingerror)))

(defn set-onloadingerror!
  "Property.

  An EventListener called whenever an event of type loadingerror
  fired, indicating that an error occurred whilst loading a font-face"
  [this val]
  (aset this "onloadingerror" val))

