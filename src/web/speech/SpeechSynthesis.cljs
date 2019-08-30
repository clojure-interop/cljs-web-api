(ns web.speech.SpeechSynthesis
  "The SpeechSynthesis interface of the Web Speech API is the controller
  for the speech service; this can be used to retrieve information
  the synthesis voices available on the device, start and pause
  and other commands besides."
  (:refer-clojure :exclude []))

(defn cancel
  "Method.

  [Experimental]

  The cancel() method of the `web.speech.SpeechSynthesis` interface
  all utterances from the utterance queue.

  `speechSynthesisInstance.cancel();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel`"
  [this ]
  (-> this (.cancel)))

(defn get-voices
  "Method.

  [Experimental]

  The getVoices() method of the `web.speech.SpeechSynthesis` interface
  a list of `web.speech.SpeechSynthesisVoice` objects representing
  the available voices on the current device.

  `speechSynthesisInstance.getVoices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices`"
  [this ]
  (-> this (.getVoices)))

(defn pause
  "Method.

  [Experimental]

  The pause() method of the `web.speech.SpeechSynthesis` interface
  the SpeechSynthesis object into a paused state.

  `speechSynthesisInstance.pause();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause`"
  [this ]
  (-> this (.pause)))

(defn resume
  "Method.

  [Experimental]

  The resume() method of the `web.speech.SpeechSynthesis` interface
  the SpeechSynthesis object into a non-paused state: resumes it
  it was already paused.

  `speechSynthesisInstance.resume();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/resume`"
  [this ]
  (-> this (.resume)))

(defn speak
  "Method.

  [Experimental]

  The speak() method of the `web.speech.SpeechSynthesis` interface
  an `utterance` to the utterance queue; it will be spoken when
  other utterances queued before it have been spoken.

  `speechSynthesisInstance.speak(utterance);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak`"
  [this utterance]
  (-> this (.speak utterance)))

(defn paused
  "Property.

  [Read Only]
  [Experimental]

  The paused read-only property of the `web.speech.SpeechSynthesis`
  is a `js.Boolean` that returns true if the SpeechSynthesis object
  in a paused state, or false if not.

  `var amIPaused = speechSynthesisInstance.paused;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/paused`"
  [this]
  (-> this (.-paused)))

(defn pending
  "Property.

  [Read Only]
  [Experimental]

  The pending read-only property of the `web.speech.SpeechSynthesis`
  is a `js.Boolean` that returns true if the utterance queue contains
  utterances.

  `var amIPending = speechSynthesisInstance.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pending`"
  [this]
  (-> this (.-pending)))

(defn speaking
  "Property.

  [Read Only]
  [Experimental]

  The speaking read-only property of the `web.speech.SpeechSynthesis`
  is a `js.Boolean` that returns true if an utterance is currently
  the process of being spoken — even if SpeechSynthesis is in a
  state.

  `var amISpeaking = speechSynthesisInstance.speaking;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking`"
  [this]
  (-> this (.-speaking)))

(defn onvoiceschanged
  "Property.

  [Experimental]

  The onvoiceschanged property of the `web.speech.SpeechSynthesis`
  represents an event handler that will run when the list of `web.speech.SpeechSynthesisVoice`
  that would be returned by the `SpeechSynthesis.getVoices()` method
  changed (when the voiceschanged event fires.)

  `speechSynthesisInstance.onvoiceschanged = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`"
  [this]
  (-> this (.-onvoiceschanged)))

(defn set-onvoiceschanged!
  "Property.

  [Experimental]

  The onvoiceschanged property of the `web.speech.SpeechSynthesis`
  represents an event handler that will run when the list of `web.speech.SpeechSynthesisVoice`
  that would be returned by the `SpeechSynthesis.getVoices()` method
  changed (when the voiceschanged event fires.)

  `speechSynthesisInstance.onvoiceschanged = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`"
  [this val]
  (aset this "onvoiceschanged" val))

