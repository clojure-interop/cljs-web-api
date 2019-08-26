(ns web.speech.SpeechRecognitionError
  "The SpeechRecognitionError interface of the Web Speech API represents
  messages from the recognition service."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  The error read-only property of the `web.speech.SpeechRecognitionError`
  returns the type of error raised.

  `var myError = event.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionError/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  The error read-only property of the `web.speech.SpeechRecognitionError`
  returns the type of error raised.

  `var myError = event.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionError/error`"
  [this val]
  (aset this "error" val))

(defn message
  "Property.

  The message read-only property of the `web.speech.SpeechRecognitionError`
  returns a message describing the error in more detail.

  `var myErrorMsg = event.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionError/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The message read-only property of the `web.speech.SpeechRecognitionError`
  returns a message describing the error in more detail.

  `var myErrorMsg = event.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionError/message`"
  [this val]
  (aset this "message" val))

