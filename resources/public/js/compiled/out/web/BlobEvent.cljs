(ns web.BlobEvent
  "The BlobEvent interface represents events associated with a `web.Blob`.
  blobs are typically, but not necessarily, associated with media"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The BlobEvent() constructor returns a newly created `web.BlobEvent` object with an associated `web.Blob`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/BlobEvent`"
  js/BlobEvent)

(defn data
  "Property.

  The BlobEvent.data read-only property represents a `web.Blob`
  with the event.

  `associatedBlob = BlobEvent.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The BlobEvent.data read-only property represents a `web.Blob`
  with the event.

  `associatedBlob = BlobEvent.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/data`"
  [this val]
  (aset this "data" val))

(defn timecode
  "Property.

  The timecode readonlyinline property of the `web.BlobEvent` interface
  `dom.DOMHighResTimeStamp` indicating the difference between the
  of the first chunk in data, and the timestamp of the first chunk
  the first BlobEvent produced by this recorder.

  `var timecode = BlobEvent.timecode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/timecode`"
  [this]
  (-> this (.timecode)))

(defn set-timecode!
  "Property.

  The timecode readonlyinline property of the `web.BlobEvent` interface
  `dom.DOMHighResTimeStamp` indicating the difference between the
  of the first chunk in data, and the timestamp of the first chunk
  the first BlobEvent produced by this recorder.

  `var timecode = BlobEvent.timecode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/timecode`"
  [this val]
  (aset this "timecode" val))

