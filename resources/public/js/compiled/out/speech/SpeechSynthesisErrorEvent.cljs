(ns speech.SpeechSynthesisErrorEvent
  "The SpeechSynthesisErrorEvent interface of the Web Speech API
  information about any errors that occur while processing `speech.SpeechSynthesisUtterance`
  in the speech service."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  The error property of the `speech.SpeechSynthesisErrorEvent`
  returns an error code indicating what has gone wrong with a speech
  attempt.

  `myError = event.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisErrorEvent/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  The error property of the `speech.SpeechSynthesisErrorEvent`
  returns an error code indicating what has gone wrong with a speech
  attempt.

  `myError = event.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisErrorEvent/error`"
  [this val]
  (aset this "error" val))

