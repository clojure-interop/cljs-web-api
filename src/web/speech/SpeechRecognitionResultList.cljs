(ns web.speech.SpeechRecognitionResultList
  "The SpeechRecognitionResultList interface of the Web Speech API
  a list of `web.speech.SpeechRecognitionResult` objects, or a
  one if results are being captured in `continuous` mode."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  [Experimental]

  The item getter of the `web.speech.SpeechRecognitionResultList`
  is a standard getter — it allows `web.speech.SpeechRecognitionResult`
  in the list to be accessed via array syntax.

  `var myResult = speechRecognitionResultListInstance[0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList/item`"
  [this ]
  (-> this (.item)))

(defn length
  "Property.

  [Read Only]
  [Experimental]

  The length read-only property of the `web.speech.SpeechRecognitionResultList`
  returns the length of the \\\"array\\\" — the number of `web.speech.SpeechRecognitionResult`
  in the list.

  `var myLength = speechRecognitionResultListInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList/length`"
  [this]
  (-> this (.-length)))

