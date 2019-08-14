(ns media.MediaStream.ev
  "MediaStream Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  The addtrack event is fired when a new MediaStreamTrack object
  been added to a MediaStream.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/addtrack_event`"

  "addtrack")

(def removetrack
  "Event.

  The removetrack event is fired when a new MediaStreamTrack object
  been removed from a MediaStream.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/removetrack_event`"

  "removetrack")

