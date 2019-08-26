(ns web.speech.SpeechRecognitionAlternative
  "The SpeechRecognitionAlternative interface of the Web Speech
  represents a single word that has been recognised by the speech
  service."
  (:refer-clojure :exclude []))

(defn transcript
  "Property.

  The transcript read-only property of the `web.speech.SpeechRecognitionResult`
  returns a string containing the transcript of the recognised

  `var myTranscript = speechRecognitionAlternativeInstance.transcript;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript`"
  [this]
  (-> this (.transcript)))

(defn set-transcript!
  "Property.

  The transcript read-only property of the `web.speech.SpeechRecognitionResult`
  returns a string containing the transcript of the recognised

  `var myTranscript = speechRecognitionAlternativeInstance.transcript;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript`"
  [this val]
  (aset this "transcript" val))

(defn confidence
  "Property.

  The confidence read-only property of the `web.speech.SpeechRecognitionResult`
  returns a numeric estimate of how confident the speech recognition
  is that the recognition is correct.

  `var myConfidence = speechRecognitionAlternativeInstance.confidence;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/confidence`"
  [this]
  (-> this (.confidence)))

(defn set-confidence!
  "Property.

  The confidence read-only property of the `web.speech.SpeechRecognitionResult`
  returns a numeric estimate of how confident the speech recognition
  is that the recognition is correct.

  `var myConfidence = speechRecognitionAlternativeInstance.confidence;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/confidence`"
  [this val]
  (aset this "confidence" val))

