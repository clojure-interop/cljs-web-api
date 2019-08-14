(ns speech.SpeechRecognitionEvent
  "The SpeechRecognitionEvent interface of the Web Speech API represents
  event object for the result and nomatch events, and contains
  the data associated with an interim or final speech recognition"
  (:refer-clojure :exclude []))

(defn emma
  "Property.

  The emma read-only property of the `speech.SpeechRecognitionEvent`
  returns an Extensible MultiModal Annotation markup language (EMMA)
  XML — representation of the result.

  `var myEmma = event.emma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/emma`"
  [this]
  (-> this (.emma)))

(defn set-emma!
  "Property.

  The emma read-only property of the `speech.SpeechRecognitionEvent`
  returns an Extensible MultiModal Annotation markup language (EMMA)
  XML — representation of the result.

  `var myEmma = event.emma;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/emma`"
  [this val]
  (aset this "emma" val))

(defn interpretation
  "Property.

  The interpretation read-only property of the `speech.SpeechRecognitionEvent`
  returns the semantic meaning of what the user said.

  `var myInterpretation = event.interpretation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/interpretation`"
  [this]
  (-> this (.interpretation)))

(defn set-interpretation!
  "Property.

  The interpretation read-only property of the `speech.SpeechRecognitionEvent`
  returns the semantic meaning of what the user said.

  `var myInterpretation = event.interpretation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/interpretation`"
  [this val]
  (aset this "interpretation" val))

(defn result-index
  "Property.

  The resultIndex read-only property of the `speech.SpeechRecognitionEvent`
  returns the lowest index value result in the `speech.SpeechRecognitionResultList`
  that has actually changed.

  `var myResultIndex = event.resultIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/resultIndex`"
  [this]
  (-> this (.resultIndex)))

(defn set-result-index!
  "Property.

  The resultIndex read-only property of the `speech.SpeechRecognitionEvent`
  returns the lowest index value result in the `speech.SpeechRecognitionResultList`
  that has actually changed.

  `var myResultIndex = event.resultIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/resultIndex`"
  [this val]
  (aset this "resultIndex" val))

(defn results
  "Property.

  The results read-only property of the `speech.SpeechRecognitionEvent`
  returns a `speech.SpeechRecognitionResultList` object representing
  the speech recognition results for the current session.

  `var myResults = event.results;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results`"
  [this]
  (-> this (.results)))

(defn set-results!
  "Property.

  The results read-only property of the `speech.SpeechRecognitionEvent`
  returns a `speech.SpeechRecognitionResultList` object representing
  the speech recognition results for the current session.

  `var myResults = event.results;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionEvent/results`"
  [this val]
  (aset this "results" val))

