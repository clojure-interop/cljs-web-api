(ns web.audio.MediaRecorderErrorEvent
  "The MediaRecorderErrorEvent interface represents errors returned
  the MediaStream Recording API. It is an `web.event.Event` object
  encapsulates a reference to a `web.dom.DOMException` describing
  error that occurred."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  [Read Only]

  The read-only error property in the `web.audio.MediaRecorderErrorEvent`
  is a `web.dom.DOMException` object providing details about the
  that was thrown by a `web.audio.MediaRecorder` instance.

  `error = MediaRecorderErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent/error`"
  [this]
  (-> this (.-error)))

