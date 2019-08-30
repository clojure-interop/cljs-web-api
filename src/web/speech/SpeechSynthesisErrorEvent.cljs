(ns web.speech.SpeechSynthesisErrorEvent
  "The SpeechSynthesisErrorEvent interface of the Web Speech API
  information about any errors that occur while processing `web.speech.SpeechSynthesisUtterance`
  in the speech service."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  [Read Only]
  [Experimental]

  The error property of the `web.speech.SpeechSynthesisErrorEvent`
  returns an error code indicating what has gone wrong with a speech
  attempt.

  `myError = event.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisErrorEvent/error`"
  [this]
  (-> this (.-error)))

