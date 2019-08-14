(ns speech.SpeechRecognitionResultList
  "The SpeechRecognitionResultList interface of the Web Speech API
  a list of `speech.SpeechRecognitionResult` objects, or a single
  if results are being captured in `web.continuous` mode."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  The item getter of the `speech.SpeechRecognitionResultList` interface
  a standard getter — it allows `speech.SpeechRecognitionResult`
  in the list to be accessed via array syntax.

  `var myResult = speechRecognitionResultListInstance[0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList/item`"
  [this ]
  (-> this (.item)))

(defn length
  "Property.

  The length read-only property of the `speech.SpeechRecognitionResultList`
  returns the length of the \\\"array\\\" — the number of `speech.SpeechRecognitionResult`
  in the list.

  `var myLength = speechRecognitionResultListInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length read-only property of the `speech.SpeechRecognitionResultList`
  returns the length of the \\\"array\\\" — the number of `speech.SpeechRecognitionResult`
  in the list.

  `var myLength = speechRecognitionResultListInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResultList/length`"
  [this val]
  (aset this "length" val))

