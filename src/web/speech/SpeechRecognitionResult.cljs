(ns web.speech.SpeechRecognitionResult
  "The SpeechRecognitionResult interface of the Web Speech API represents
  single recognition match, which may contain multiple `web.speech.SpeechRecognitionAlternative`"
  (:refer-clojure :exclude []))

(defn item
  "Method.

  The item getter of the `web.speech.SpeechRecognitionResult` interface
  a standard getter that allows `web.speech.SpeechRecognitionAlternative`
  within the result to be accessed via array syntax.

  `var myAlternative = speechRecognitionResultInstance[0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/item`"
  [this ]
  (-> this (.item)))

(defn is-final
  "Property.

  The isFinal read-only property of the `web.speech.SpeechRecognitionResult`
  is a `js.Boolean` that states whether this result is final (true)
  not (false) — if so, then this is the final time this result
  be returned; if not, then this result is an interim result, and
  be updated later on.

  `var myIsFinal = speechRecognitionResultInstance.isFinal;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal`"
  [this]
  (-> this (.-isFinal)))

(defn set-is-final!
  "Property.

  The isFinal read-only property of the `web.speech.SpeechRecognitionResult`
  is a `js.Boolean` that states whether this result is final (true)
  not (false) — if so, then this is the final time this result
  be returned; if not, then this result is an interim result, and
  be updated later on.

  `var myIsFinal = speechRecognitionResultInstance.isFinal;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal`"
  [this val]
  (aset this "isFinal" val))

(defn length
  "Property.

  The length read-only property of the `web.speech.SpeechRecognitionResult`
  returns the length of the \\\"array\\\" — the number of `web.speech.SpeechRecognitionAlternative`
  contained in the result (also referred to as \\\"n-best alternatives\\\".)

  `var myLength = speechRecognitionResultInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length read-only property of the `web.speech.SpeechRecognitionResult`
  returns the length of the \\\"array\\\" — the number of `web.speech.SpeechRecognitionAlternative`
  contained in the result (also referred to as \\\"n-best alternatives\\\".)

  `var myLength = speechRecognitionResultInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/length`"
  [this val]
  (aset this "length" val))

