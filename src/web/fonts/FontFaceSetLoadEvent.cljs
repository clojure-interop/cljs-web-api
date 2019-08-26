(ns web.fonts.FontFaceSetLoadEvent
  "The FontFaceSetLoadEvent interface of the the Css Font Loading
  is fired whenever a `web.fonts.FontFaceSet` loads."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The FontFaceSetLoadEvent constructor creates a new `FontFaceLoadEvent` object which is fired whenever a `web.fonts.FontFaceSet` loads.

  type
  The literal value 'Type' (quotation marks included).
  options Optional
  Options are as follows:

  fontfaces: An array of `web.fonts.FontFace` instances.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent`"
  js/FontFaceSetLoadEvent)

(defn fontfaces
  "Property.

  The fontfaces read-only property of the `FontFaceLoadEventInit`
  returns an array of `web.fonts.FontFace` instances, each of which
  a single usable font.

  `var fontFace[] = FontFaceSetLoadEvent.fontfaces`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`"
  [this]
  (-> this (.fontfaces)))

(defn set-fontfaces!
  "Property.

  The fontfaces read-only property of the `FontFaceLoadEventInit`
  returns an array of `web.fonts.FontFace` instances, each of which
  a single usable font.

  `var fontFace[] = FontFaceSetLoadEvent.fontfaces`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`"
  [this val]
  (aset this "fontfaces" val))

