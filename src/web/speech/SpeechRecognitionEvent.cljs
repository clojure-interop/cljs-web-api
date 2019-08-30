(ns web.speech.SpeechRecognitionEvent
  "The SpeechRecognitionEvent interface of the Web Speech API represents
  event object for the result and nomatch events, and contains
  the data associated with an interim or final speech recognition"
  (:refer-clojure :exclude []))

(defn emma
  "Property.

  [Read Only]
  [Experimental]

  The emma read-only property of the `web.speech.SpeechRecognitionEvent`
  returns an Extensible MultiModal Annotation markup language (EMMA)
  XML — representation of the result.

  `var myEmma = event.emma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/emma`"
  [this]
  (-> this (.-emma)))

(defn interpretation
  "Property.

  [Read Only]
  [Experimental]

  The interpretation read-only property of the `web.speech.SpeechRecognitionEvent`
  returns the semantic meaning of what the user said.

  `var myInterpretation = event.interpretation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/interpretation`"
  [this]
  (-> this (.-interpretation)))

(defn result-index
  "Property.

  [Read Only]
  [Experimental]

  The resultIndex read-only property of the `web.speech.SpeechRecognitionEvent`
  returns the lowest index value result in the `web.speech.SpeechRecognitionResultList`
  that has actually changed.

  `var myResultIndex = event.resultIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/resultIndex`"
  [this]
  (-> this (.-resultIndex)))

(defn results
  "Property.

  [Read Only]
  [Experimental]

  The results read-only property of the `web.speech.SpeechRecognitionEvent`
  returns a `web.speech.SpeechRecognitionResultList` object representing
  the speech recognition results for the current session.

  `var myResults = event.results;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results`"
  [this]
  (-> this (.-results)))

