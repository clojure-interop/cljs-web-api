(ns web.rtc.MediaStreamEvent
  "The MediaStreamEvent interface represents events that occurs
  relation to a `web.streams.MediaStream`. Two events of this type
  be thrown: addstream and removestream."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaStreamEvent() constructor creates a new `web.rtc.MediaStreamEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent/MediaStreamEvent`"
  js/MediaStreamEvent)

(defn stream
  "Property.

  The read-only property MediaStreamEvent.stream returns the `web.streams.MediaStream`
  with the event.

  `var stream = event.stream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent/stream`"
  [this]
  (-> this (.stream)))

