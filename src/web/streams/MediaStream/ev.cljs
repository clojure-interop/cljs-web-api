(ns web.streams.MediaStream.ev
  "MediaStream Events."
  (:refer-clojure :exclude []))

(def addtrack
  "Event.

  Fired when a new MediaStreamTrack object is added.
  Also available via the onaddtrack property."

  "addtrack")

(def removetrack
  "Event.

  The removetrack event is fired when a new MediaStreamTrack object
  been removed from a MediaStream.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/removetrack_event`"

  "removetrack")

