(ns web.audio.MediaRecorder.ev
  "MediaRecorder Events."
  (:refer-clojure :exclude []))

(def error
  "Event.

  Fired when an error occurs: for example because recording wasn't
  or was attempted using an unsupported codec.
  Also available via the onerror property."

  "error")

