(ns web.audio.BlobEvent
  "The BlobEvent interface represents events associated with a `web.files.Blob`.
  blobs are typically, but not necessarily, associated with media"
  (:refer-clojure :exclude []))

(defn data
  "Property.

  [Read Only]
  [Experimental]

  The BlobEvent.data read-only property represents a `web.files.Blob`
  with the event.

  `associatedBlob = BlobEvent.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/data`"
  [this]
  (-> this (.-data)))

(defn timecode
  "Property.

  [Read Only]
  [Experimental]

  The timecode readonlyinline property of the `web.audio.BlobEvent`
  a `web.dom.DOMHighResTimeStamp` indicating the difference between
  timestamp of the first chunk in data, and the timestamp of the
  chunk in the first BlobEvent produced by this recorder.

  `var timecode = BlobEvent.timecode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/timecode`"
  [this]
  (-> this (.-timecode)))

