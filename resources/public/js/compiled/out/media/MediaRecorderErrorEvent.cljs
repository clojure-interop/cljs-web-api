(ns media.MediaRecorderErrorEvent
  "The MediaRecorderErrorEvent interface represents errors returned
  the MediaStream Recording API. It is an `web.Event` object that
  a reference to a `dom.DOMException` describing the error that"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaRecorderErrorEvent() constructor creates a new `media.MediaRecorderErrorEvent` object that represents an error that occurred during the recording of media by the MediaStream Recording API.

  errorInfo
  An object describing the error object to be created. It must contain the error property at a minimum.

  error
  A `dom.DOMException` that describes the error that occurred. This object's `web.name` property should indicate the name of the error that occurred. The other fields may or may not be present.





  Some user agents add to the error object other properties that provide information such as stack dumps, the name of the JavaScript file and the line number where the error occurred, and other debugging aids, but you should not rely on this information in a production environment.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent`"
  js/MediaRecorderErrorEvent)

(defn error
  "Property.

  The read-only error property in the `media.MediaRecorderErrorEvent`
  is a `dom.DOMException` object providing details about the exception
  was thrown by a `media.MediaRecorder` instance.

  `error = MediaRecorderErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  The read-only error property in the `media.MediaRecorderErrorEvent`
  is a `dom.DOMException` object providing details about the exception
  was thrown by a `media.MediaRecorder` instance.

  `error = MediaRecorderErrorEvent.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorderErrorEvent/error`"
  [this val]
  (aset this "error" val))

