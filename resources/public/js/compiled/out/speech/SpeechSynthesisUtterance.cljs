(ns speech.SpeechSynthesisUtterance
  "The SpeechSynthesisUtterance interface of the Web Speech API
  a speech request. It contains the content the speech service
  read and information about how to read it (e.g. language, pitch
  volume.)"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SpeechSynthesisUtterance() constructor of the `speech.SpeechSynthesisUtterance` interface returns a new SpeechSynthesisUtterance object instance.

  text
  A `dom.DOMString` containing the text that will be synthesised when the utterance is spoken..

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance`"
  js/SpeechSynthesisUtterance)

(defn lang
  "Property.

  The lang property of the `speech.SpeechSynthesisUtterance` interface
  and sets the language of the utterance.

  `var myLang = speechSynthesisUtteranceInstance.lang;
  speechSynthesisUtteranceInstance.lang = 'en-US';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang`"
  [this]
  (-> this (.lang)))

(defn set-lang!
  "Property.

  The lang property of the `speech.SpeechSynthesisUtterance` interface
  and sets the language of the utterance.

  `var myLang = speechSynthesisUtteranceInstance.lang;
  speechSynthesisUtteranceInstance.lang = 'en-US';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang`"
  [this val]
  (aset this "lang" val))

(defn onboundary
  "Property.

  The onboundary property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the spoken utterance
  a word or sentence boundary (when the boundary event fires.)

  `speechSynthesisUtteranceInstance.onboundary = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary`"
  [this]
  (-> this (.onboundary)))

(defn set-onboundary!
  "Property.

  The onboundary property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the spoken utterance
  a word or sentence boundary (when the boundary event fires.)

  `speechSynthesisUtteranceInstance.onboundary = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary`"
  [this val]
  (aset this "onboundary" val))

(defn onend
  "Property.

  The onend property of the `speech.SpeechSynthesisUtterance` interface
  an event handler that will run when the utterance has finished
  spoken (when the end event fires.)

  `speechSynthesisUtteranceInstance.onend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onend`"
  [this]
  (-> this (.onend)))

(defn set-onend!
  "Property.

  The onend property of the `speech.SpeechSynthesisUtterance` interface
  an event handler that will run when the utterance has finished
  spoken (when the end event fires.)

  `speechSynthesisUtteranceInstance.onend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onend`"
  [this val]
  (aset this "onend" val))

(defn onerror
  "Property.

  The onerror property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when an error occurs
  prevents the utterance from being succesfully spoken (when the
  event fires.)

  `speechSynthesisUtteranceInstance.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when an error occurs
  prevents the utterance from being succesfully spoken (when the
  event fires.)

  `speechSynthesisUtteranceInstance.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmark
  "Property.

  The onmark property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the spoken utterance
  a named SSML mark tag (when the mark event fires.)

  `speechSynthesisUtteranceInstance.onmark = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark`"
  [this]
  (-> this (.onmark)))

(defn set-onmark!
  "Property.

  The onmark property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the spoken utterance
  a named SSML mark tag (when the mark event fires.)

  `speechSynthesisUtteranceInstance.onmark = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark`"
  [this val]
  (aset this "onmark" val))

(defn onpause
  "Property.

  The onpause property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the utterance
  paused part way through (when the pause event fires.)

  `speechSynthesisUtteranceInstance.onpause = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause`"
  [this]
  (-> this (.onpause)))

(defn set-onpause!
  "Property.

  The onpause property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the utterance
  paused part way through (when the pause event fires.)

  `speechSynthesisUtteranceInstance.onpause = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause`"
  [this val]
  (aset this "onpause" val))

(defn onresume
  "Property.

  The onresume property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when a paused utterance
  resumed (when the resume event fires.)

  `speechSynthesisUtteranceInstance.onresume = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume`"
  [this]
  (-> this (.onresume)))

(defn set-onresume!
  "Property.

  The onresume property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when a paused utterance
  resumed (when the resume event fires.)

  `speechSynthesisUtteranceInstance.onresume = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume`"
  [this val]
  (aset this "onresume" val))

(defn onstart
  "Property.

  The onstart property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the utterance
  begun to be spoken (when the start event fires.)

  `speechSynthesisUtteranceInstance.onstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart`"
  [this]
  (-> this (.onstart)))

(defn set-onstart!
  "Property.

  The onstart property of the `speech.SpeechSynthesisUtterance`
  represents an event handler that will run when the utterance
  begun to be spoken (when the start event fires.)

  `speechSynthesisUtteranceInstance.onstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart`"
  [this val]
  (aset this "onstart" val))

(defn pitch
  "Property.

  The pitch property of the `speech.SpeechSynthesisUtterance` interface
  and sets the pitch at which the utterance will be spoken at.

  `// default 1
  speechSynthesisUtteranceInstance.pitch = 1.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch`"
  [this]
  (-> this (.pitch)))

(defn set-pitch!
  "Property.

  The pitch property of the `speech.SpeechSynthesisUtterance` interface
  and sets the pitch at which the utterance will be spoken at.

  `// default 1
  speechSynthesisUtteranceInstance.pitch = 1.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch`"
  [this val]
  (aset this "pitch" val))

(defn rate
  "Property.

  The rate property of the `speech.SpeechSynthesisUtterance` interface
  and sets the speed at which the utterance will be spoken at.

  `var myRate = speechSynthesisUtteranceInstance.rate;
  speechSynthesisUtteranceInstance.rate = 1.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate`"
  [this]
  (-> this (.rate)))

(defn set-rate!
  "Property.

  The rate property of the `speech.SpeechSynthesisUtterance` interface
  and sets the speed at which the utterance will be spoken at.

  `var myRate = speechSynthesisUtteranceInstance.rate;
  speechSynthesisUtteranceInstance.rate = 1.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate`"
  [this val]
  (aset this "rate" val))

(defn text
  "Property.

  The text property of the `speech.SpeechSynthesisUtterance` interface
  and sets the text that will be synthesised when the utterance
  spoken.

  `var myText = speechSynthesisUtteranceInstance.text;
  speechSynthesisUtteranceInstance.text = 'Hello I am speaking';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text`"
  [this]
  (-> this (.text)))

(defn set-text!
  "Property.

  The text property of the `speech.SpeechSynthesisUtterance` interface
  and sets the text that will be synthesised when the utterance
  spoken.

  `var myText = speechSynthesisUtteranceInstance.text;
  speechSynthesisUtteranceInstance.text = 'Hello I am speaking';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text`"
  [this val]
  (aset this "text" val))

(defn voice
  "Property.

  The voice property of the `speech.SpeechSynthesisUtterance` interface
  and sets the voice that will be used to speak the utterance.

  `var myVoice = speechSynthesisUtteranceInstance.voice;
  speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice`"
  [this]
  (-> this (.voice)))

(defn set-voice!
  "Property.

  The voice property of the `speech.SpeechSynthesisUtterance` interface
  and sets the voice that will be used to speak the utterance.

  `var myVoice = speechSynthesisUtteranceInstance.voice;
  speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice`"
  [this val]
  (aset this "voice" val))

(defn volume
  "Property.

  The volume property of the `speech.SpeechSynthesisUtterance`
  gets and sets the volume that the utterance will be spoken at.

  `var myVolume = speechSynthesisUtteranceInstance.volume;
  speechSynthesisUtteranceInstance.volume = 0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/volume`"
  [this]
  (-> this (.volume)))

(defn set-volume!
  "Property.

  The volume property of the `speech.SpeechSynthesisUtterance`
  gets and sets the volume that the utterance will be spoken at.

  `var myVolume = speechSynthesisUtteranceInstance.volume;
  speechSynthesisUtteranceInstance.volume = 0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/volume`"
  [this val]
  (aset this "volume" val))

