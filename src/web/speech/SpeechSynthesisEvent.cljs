(ns web.speech.SpeechSynthesisEvent
  "The SpeechSynthesisEvent interface of the Web Speech API contains
  about the current state of `web.speech.SpeechSynthesisUtterance`
  that have been processed in the speech service."
  (:refer-clojure :exclude [name]))

(defn char-index
  "Property.

  The charIndex read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the index position of the character in the `SpeechSynthesisUtterance.text`
  was being spoken when the event was triggered.

  `event.charIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/charIndex`"
  [this]
  (-> this (.charIndex)))

(defn set-char-index!
  "Property.

  The charIndex read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the index position of the character in the `SpeechSynthesisUtterance.text`
  was being spoken when the event was triggered.

  `event.charIndex;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/charIndex`"
  [this val]
  (aset this "charIndex" val))

(defn elapsed-time
  "Property.

  The elapsedTime read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the elapsed time in seconds after the `SpeechSynthesisUtterance.text`
  being spoken that the event was triggered at.

  `event.elapsedTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/elapsedTime`"
  [this]
  (-> this (.elapsedTime)))

(defn set-elapsed-time!
  "Property.

  The elapsedTime read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the elapsed time in seconds after the `SpeechSynthesisUtterance.text`
  being spoken that the event was triggered at.

  `event.elapsedTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/elapsedTime`"
  [this val]
  (aset this "elapsedTime" val))

(defn name
  "Property.

  The name read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the name associated with certain types of events occuring
  the `SpeechSynthesisUtterance.text` is being spoken: the name
  the SSML marker reached in the case of a mark event, or the type
  boundary reached in the case of a boundary event.

  `event.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the name associated with certain types of events occuring
  the `SpeechSynthesisUtterance.text` is being spoken: the name
  the SSML marker reached in the case of a mark event, or the type
  boundary reached in the case of a boundary event.

  `event.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/name`"
  [this val]
  (aset this "name" val))

(defn utterance
  "Property.

  The utterance read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the `web.speech.SpeechSynthesisUtterance` instance that
  event was triggered on.

  `event.utterance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/utterance`"
  [this]
  (-> this (.utterance)))

(defn set-utterance!
  "Property.

  The utterance read-only property of the `web.speech.SpeechSynthesisUtterance`
  returns the `web.speech.SpeechSynthesisUtterance` instance that
  event was triggered on.

  `event.utterance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisEvent/utterance`"
  [this val]
  (aset this "utterance" val))

