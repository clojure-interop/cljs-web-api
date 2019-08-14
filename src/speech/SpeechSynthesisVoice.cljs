(ns speech.SpeechSynthesisVoice
  "The SpeechSynthesisVoice interface of the Web Speech API represents
  voice that the system supports. Every SpeechSynthesisVoice has
  own relative speech service including information about language,
  and URI."
  (:refer-clojure :exclude [name]))

(defn default
  "Property.

  The default read-only property of the `speech.SpeechSynthesisVoice`
  returns a `web.Boolean` indicating whether the voice is the default
  for the current app (true), or not (false.)

  `var amIDefault = speechSynthesisVoiceInstance.default;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/default`"
  [this]
  (-> this (.default)))

(defn set-default!
  "Property.

  The default read-only property of the `speech.SpeechSynthesisVoice`
  returns a `web.Boolean` indicating whether the voice is the default
  for the current app (true), or not (false.)

  `var amIDefault = speechSynthesisVoiceInstance.default;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/default`"
  [this val]
  (aset this "default" val))

(defn lang
  "Property.

  The lang read-only property of the `speech.SpeechSynthesisVoice`
  returns a BCP 47 language tag indicating the language of the

  `var myLang = speechSynthesisVoiceInstance.lang;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/lang`"
  [this]
  (-> this (.lang)))

(defn set-lang!
  "Property.

  The lang read-only property of the `speech.SpeechSynthesisVoice`
  returns a BCP 47 language tag indicating the language of the

  `var myLang = speechSynthesisVoiceInstance.lang;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/lang`"
  [this val]
  (aset this "lang" val))

(defn local-service
  "Property.

  The localService read-only property of the `speech.SpeechSynthesisVoice`
  returns a `web.Boolean` indicating whether the voice is supplied
  a local speech synthesizer service (true), or a remote speech
  service (false.)

  `var amILocal = speechSynthesisVoiceInstance.localService;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/localService`"
  [this]
  (-> this (.localService)))

(defn set-local-service!
  "Property.

  The localService read-only property of the `speech.SpeechSynthesisVoice`
  returns a `web.Boolean` indicating whether the voice is supplied
  a local speech synthesizer service (true), or a remote speech
  service (false.)

  `var amILocal = speechSynthesisVoiceInstance.localService;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/localService`"
  [this val]
  (aset this "localService" val))

(defn name
  "Property.

  The name read-only property of the `speech.SpeechSynthesisVoice`
  returns a human-readable name that represents the voice.

  `var voiceName = speechSynthesisVoiceInstance.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `speech.SpeechSynthesisVoice`
  returns a human-readable name that represents the voice.

  `var voiceName = speechSynthesisVoiceInstance.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/name`"
  [this val]
  (aset this "name" val))

(defn voice-uri
  "Property.

  The voiceURI read-only property of the `speech.SpeechSynthesisVoice`
  returns the type of URI and location of the speech synthesis
  for this voice.

  `var myVoiceURI = speechSynthesisVoiceInstance.voiceURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI`"
  [this]
  (-> this (.voiceURI)))

(defn set-voice-uri!
  "Property.

  The voiceURI read-only property of the `speech.SpeechSynthesisVoice`
  returns the type of URI and location of the speech synthesis
  for this voice.

  `var myVoiceURI = speechSynthesisVoiceInstance.voiceURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI`"
  [this val]
  (aset this "voiceURI" val))

