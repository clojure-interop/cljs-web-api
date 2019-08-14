(ns web.FontFaceSetLoadEvent
  "The FontFaceSetLoadEvent interface of the the Css Font Loading
  is fired whenever a `web.FontFaceSet` loads."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The FontFaceSetLoadEvent constructor creates a new `web.FontFaceLoadEvent` object which is fired whenever a `web.FontFaceSet` loads.

  type
  The literal value 'Type' (quotation marks included).
  options Optional
  Options are as follows:

  fontfaces: An array of `web.FontFace` instances.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent`"
  js/FontFaceSetLoadEvent)

(defn fontfaces
  "Property.

  The fontfaces read-only property of the `web.FontFaceLoadEventInit`
  returns an array of `web.FontFace` instances, each of which represents
  single usable font.

  `var fontFace[] = FontFaceSetLoadEvent.fontfaces`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`"
  [this]
  (-> this (.fontfaces)))

(defn set-fontfaces!
  "Property.

  The fontfaces read-only property of the `web.FontFaceLoadEventInit`
  returns an array of `web.FontFace` instances, each of which represents
  single usable font.

  `var fontFace[] = FontFaceSetLoadEvent.fontfaces`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`"
  [this val]
  (aset this "fontfaces" val))

