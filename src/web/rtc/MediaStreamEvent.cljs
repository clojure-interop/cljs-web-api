(ns web.rtc.MediaStreamEvent
  "The MediaStreamEvent interface represents events that occurs
  relation to a `web.streams.MediaStream`. Two events of this type
  be thrown: addstream and removestream."
  (:refer-clojure :exclude []))

(defn stream
  "Property.

  [Read Only]
  [Experimental]

  The read-only property MediaStreamEvent.stream returns the `web.streams.MediaStream`
  with the event.

  `var stream = event.stream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamEvent/stream`"
  [this]
  (-> this (.-stream)))

