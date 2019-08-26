(ns web.cssdom.MediaQueryList.ev
  "MediaQueryList Events."
  (:refer-clojure :exclude []))

(def change
  "Event.

  Sent to the MediaQueryList when the result of running the media
  against the document changes. For example, if the media query
  (min-width: 400px), the change event is fired any time the width
  the document's viewport changes to be less than 400 pixels or
  than that.
  Also available using the onchange event handler property."

  "change")

