(ns web.fonts.FontFaceSetLoadEvent
  "The FontFaceSetLoadEvent interface of the the Css Font Loading
  is fired whenever a `web.fonts.FontFaceSet` loads."
  (:refer-clojure :exclude []))

(defn fontfaces
  "Property.

  [Read Only]
  [Experimental]

  The fontfaces read-only property of the `FontFaceLoadEventInit`
  returns an array of `web.fonts.FontFace` instances, each of which
  a single usable font.

  `var fontFace[] = FontFaceSetLoadEvent.fontfaces`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`"
  [this]
  (-> this (.-fontfaces)))

