(ns speech.SpeechSynthesis
  "The SpeechSynthesis interface of the Web Speech API is the controller
  for the speech service; this can be used to retrieve information
  the synthesis voices available on the device, start and pause
  and other commands besides."
  (:refer-clojure :exclude []))

(defn cancel
  "Method.

  The cancel() method of the `speech.SpeechSynthesis` interface
  all utterances from the utterance queue.

  `speechSynthesisInstance.cancel();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel`"
  [this ]
  (-> this (.cancel)))

(defn get-voices
  "Method.

  The getVoices() method of the `speech.SpeechSynthesis` interface
  a list of `speech.SpeechSynthesisVoice` objects representing
  the available voices on the current device.

  `speechSynthesisInstance.getVoices();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices`"
  [this ]
  (-> this (.getVoices)))

(defn pause
  "Method.

  The pause() method of the `speech.SpeechSynthesis` interface
  the SpeechSynthesis object into a paused state.

  `speechSynthesisInstance.pause();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause`"
  [this ]
  (-> this (.pause)))

(defn resume
  "Method.

  The resume() method of the `speech.SpeechSynthesis` interface
  the SpeechSynthesis object into a non-paused state: resumes it
  it was already paused.

  `speechSynthesisInstance.resume();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/resume`"
  [this ]
  (-> this (.resume)))

(defn speak
  "Method.

  The speak() method of the `speech.SpeechSynthesis` interface
  an `web.utterance` to the utterance queue; it will be spoken
  any other utterances queued before it have been spoken.

  `speechSynthesisInstance.speak(utterance);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak`"
  [this utterance]
  (-> this (.speak utterance)))

(defn onvoiceschanged
  "Property.

  The onvoiceschanged property of the `speech.SpeechSynthesis`
  represents an event handler that will run when the list of `speech.SpeechSynthesisVoice`
  that would be returned by the `speech.SpeechSynthesis.getVoices()`
  has changed (when the voiceschanged event fires.)

  `speechSynthesisInstance.onvoiceschanged = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`"
  [this]
  (-> this (.onvoiceschanged)))

(defn set-onvoiceschanged!
  "Property.

  The onvoiceschanged property of the `speech.SpeechSynthesis`
  represents an event handler that will run when the list of `speech.SpeechSynthesisVoice`
  that would be returned by the `speech.SpeechSynthesis.getVoices()`
  has changed (when the voiceschanged event fires.)

  `speechSynthesisInstance.onvoiceschanged = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`"
  [this val]
  (aset this "onvoiceschanged" val))

(defn paused
  "Property.

  The paused read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if the SpeechSynthesis object
  in a paused state, or false if not.

  `var amIPaused = speechSynthesisInstance.paused;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/paused`"
  [this]
  (-> this (.paused)))

(defn set-paused!
  "Property.

  The paused read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if the SpeechSynthesis object
  in a paused state, or false if not.

  `var amIPaused = speechSynthesisInstance.paused;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/paused`"
  [this val]
  (aset this "paused" val))

(defn pending
  "Property.

  The pending read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if the utterance queue contains
  utterances.

  `var amIPending = speechSynthesisInstance.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pending`"
  [this]
  (-> this (.pending)))

(defn set-pending!
  "Property.

  The pending read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if the utterance queue contains
  utterances.

  `var amIPending = speechSynthesisInstance.pending;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pending`"
  [this val]
  (aset this "pending" val))

(defn speaking
  "Property.

  The speaking read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if an utterance is currently
  the process of being spoken — even if SpeechSynthesis is in a
  state.

  `var amISpeaking = speechSynthesisInstance.speaking;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking`"
  [this]
  (-> this (.speaking)))

(defn set-speaking!
  "Property.

  The speaking read-only property of the `speech.SpeechSynthesis`
  is a `web.Boolean` that returns true if an utterance is currently
  the process of being spoken — even if SpeechSynthesis is in a
  state.

  `var amISpeaking = speechSynthesisInstance.speaking;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking`"
  [this val]
  (aset this "speaking" val))

