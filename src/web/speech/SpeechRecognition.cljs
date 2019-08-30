(ns web.speech.SpeechRecognition
  "The SpeechRecognition interface of the Web Speech API is the
  interface for the recognition service; this also handles the
  sent from the recognition service."
  (:refer-clojure :exclude []))

(defn abort
  "Method.

  [Experimental]

  The abort() method of the Web Speech API stops the speech recognition
  from listening to incoming audio, and doesn't attempt to return
  `web.speech.SpeechRecognitionResult`.

  `mySpeechRecognition.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/abort`"
  [this ]
  (-> this (.abort)))

(defn start
  "Method.

  [Experimental]

  The start() method of the Web Speech API starts the speech recognition
  listening to incoming audio with intent to recognize grammars
  with the current `web.speech.SpeechRecognition`.

  `mySpeechRecognition.start();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start`"
  [this ]
  (-> this (.start)))

(defn stop
  "Method.

  [Experimental]

  The stop() method of the Web Speech API stops the speech recognition
  from listening to incoming audio, and attempts to return a `web.speech.SpeechRecognitionResult`
  the audio captured so far.

  `mySpeechRecognition.stop();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/stop`"
  [this ]
  (-> this (.stop)))

(defn grammars
  "Property.

  [Experimental]

  The grammars property of the `web.speech.SpeechRecognition` interface
  and sets a collection of `web.speech.SpeechGrammar` objects that
  the grammars that will be understood by the current SpeechRecognition.

  `var myGrammars = mySpeechRecognition.grammars;
  mySpeechRecognition.grammars = mySpeechGrammarList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars`"
  [this]
  (-> this (.-grammars)))

(defn set-grammars!
  "Property.

  [Experimental]

  The grammars property of the `web.speech.SpeechRecognition` interface
  and sets a collection of `web.speech.SpeechGrammar` objects that
  the grammars that will be understood by the current SpeechRecognition.

  `var myGrammars = mySpeechRecognition.grammars;
  mySpeechRecognition.grammars = mySpeechGrammarList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars`"
  [this val]
  (aset this "grammars" val))

(defn lang
  "Property.

  [Experimental]

  The lang property of the `web.speech.SpeechRecognition` interface
  and sets the language of the current SpeechRecognition. If not
  this defaults to the HTML lang attribute value, or the user agent's
  setting if that isn't set either.

  `var myLang = mySpeechRecognition.lang;
  mySpeechRecognition.lang = 'en-US';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang`"
  [this]
  (-> this (.-lang)))

(defn set-lang!
  "Property.

  [Experimental]

  The lang property of the `web.speech.SpeechRecognition` interface
  and sets the language of the current SpeechRecognition. If not
  this defaults to the HTML lang attribute value, or the user agent's
  setting if that isn't set either.

  `var myLang = mySpeechRecognition.lang;
  mySpeechRecognition.lang = 'en-US';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang`"
  [this val]
  (aset this "lang" val))

(defn continuous
  "Property.

  [Experimental]

  The continuous property of the `web.speech.SpeechRecognition`
  controls whether continuous results are returned for each recognition,
  only a single result.

  `var myContinuous = mySpeechRecognition.continuous;
  mySpeechRecognition.continuous = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous`"
  [this]
  (-> this (.-continuous)))

(defn set-continuous!
  "Property.

  [Experimental]

  The continuous property of the `web.speech.SpeechRecognition`
  controls whether continuous results are returned for each recognition,
  only a single result.

  `var myContinuous = mySpeechRecognition.continuous;
  mySpeechRecognition.continuous = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous`"
  [this val]
  (aset this "continuous" val))

(defn interim-results
  "Property.

  [Experimental]

  The interimResults property of the `web.speech.SpeechRecognition`
  controls whether interim results should be returned (true) or
  (false.) Interim results are results that are not yet final (e.g.
  `SpeechRecognitionResult.isFinal` property is false.)

  `var myInterimResult = mySpeechRecognition.interimResults;
  mySpeechRecognition.interimResults = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults`"
  [this]
  (-> this (.-interimResults)))

(defn set-interim-results!
  "Property.

  [Experimental]

  The interimResults property of the `web.speech.SpeechRecognition`
  controls whether interim results should be returned (true) or
  (false.) Interim results are results that are not yet final (e.g.
  `SpeechRecognitionResult.isFinal` property is false.)

  `var myInterimResult = mySpeechRecognition.interimResults;
  mySpeechRecognition.interimResults = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults`"
  [this val]
  (aset this "interimResults" val))

(defn max-alternatives
  "Property.

  [Experimental]

  The maxAlternatives property of the `web.speech.SpeechRecognition`
  sets the maximum number of `web.speech.SpeechRecognitionAlternative`s
  per `web.speech.SpeechRecognitionResult`.

  `var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
  mySpeechRecognition.maxAlternatives = 2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives`"
  [this]
  (-> this (.-maxAlternatives)))

(defn set-max-alternatives!
  "Property.

  [Experimental]

  The maxAlternatives property of the `web.speech.SpeechRecognition`
  sets the maximum number of `web.speech.SpeechRecognitionAlternative`s
  per `web.speech.SpeechRecognitionResult`.

  `var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
  mySpeechRecognition.maxAlternatives = 2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives`"
  [this val]
  (aset this "maxAlternatives" val))

(defn service-uri
  "Property.

  [Experimental]

  The serviceURI property of the `web.speech.SpeechRecognition`
  specifies the location of the speech recognition service used
  the current SpeechRecognition to handle the actual recognition.
  default is the user agent's default speech service.

  `var myServiceURI = mySpeechRecognition.serviceURI;
  mySpeechRecognition.serviceURI = 'path/to/my/service/';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/serviceURI`"
  [this]
  (-> this (.-serviceURI)))

(defn set-service-uri!
  "Property.

  [Experimental]

  The serviceURI property of the `web.speech.SpeechRecognition`
  specifies the location of the speech recognition service used
  the current SpeechRecognition to handle the actual recognition.
  default is the user agent's default speech service.

  `var myServiceURI = mySpeechRecognition.serviceURI;
  mySpeechRecognition.serviceURI = 'path/to/my/service/';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/serviceURI`"
  [this val]
  (aset this "serviceURI" val))

(defn onaudioend
  "Property.

  [Experimental]

  The onaudioend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the user agent
  finished capturing audio (when the audioend event fires.)

  `mySpeechRecognition.onaudioend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudioend`"
  [this]
  (-> this (.-onaudioend)))

(defn set-onaudioend!
  "Property.

  [Experimental]

  The onaudioend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the user agent
  finished capturing audio (when the audioend event fires.)

  `mySpeechRecognition.onaudioend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudioend`"
  [this val]
  (aset this "onaudioend" val))

(defn onaudiostart
  "Property.

  [Experimental]

  The onaudiostart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the user agent
  started to capture audio (when the audiostart event fires.)

  `mySpeechRecognition.onaudiostart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudiostart`"
  [this]
  (-> this (.-onaudiostart)))

(defn set-onaudiostart!
  "Property.

  [Experimental]

  The onaudiostart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the user agent
  started to capture audio (when the audiostart event fires.)

  `mySpeechRecognition.onaudiostart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudiostart`"
  [this val]
  (aset this "onaudiostart" val))

(defn onend
  "Property.

  [Experimental]

  The onend property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  disconnected (when the end event fires.)

  `mySpeechRecognition.onend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onend`"
  [this]
  (-> this (.-onend)))

(defn set-onend!
  "Property.

  [Experimental]

  The onend property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  disconnected (when the end event fires.)

  `mySpeechRecognition.onend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onend`"
  [this val]
  (aset this "onend" val))

(defn onerror
  "Property.

  [Experimental]

  The onerror property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when a speech recognition error
  (when the error event fires.)

  `mySpeechRecognition.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  [Experimental]

  The onerror property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when a speech recognition error
  (when the error event fires.)

  `mySpeechRecognition.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onnomatch
  "Property.

  [Experimental]

  The onnomatch property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the speech recognition
  returns a final result with no significant recognition (when
  nomatch event fires.)

  `mySpeechRecognition.onnomatch = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onnomatch`"
  [this]
  (-> this (.-onnomatch)))

(defn set-onnomatch!
  "Property.

  [Experimental]

  The onnomatch property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when the speech recognition
  returns a final result with no significant recognition (when
  nomatch event fires.)

  `mySpeechRecognition.onnomatch = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onnomatch`"
  [this val]
  (aset this "onnomatch" val))

(defn onresult
  "Property.

  [Experimental]

  The onresult property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  a result — a word or phrase has been positively recognized and
  has been communicated back to the app (when the `result` fires.)

  `mySpeechRecognition.onresult = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult`"
  [this]
  (-> this (.-onresult)))

(defn set-onresult!
  "Property.

  [Experimental]

  The onresult property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  a result — a word or phrase has been positively recognized and
  has been communicated back to the app (when the `result` fires.)

  `mySpeechRecognition.onresult = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult`"
  [this val]
  (aset this "onresult" val))

(defn onsoundend
  "Property.

  [Experimental]

  The onsoundend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when any sound — recognisable
  or not — has stopped being detected (when the soundend event

  `mySpeechRecognition.onsoundend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundend`"
  [this]
  (-> this (.-onsoundend)))

(defn set-onsoundend!
  "Property.

  [Experimental]

  The onsoundend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when any sound — recognisable
  or not — has stopped being detected (when the soundend event

  `mySpeechRecognition.onsoundend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundend`"
  [this val]
  (aset this "onsoundend" val))

(defn onsoundstart
  "Property.

  [Experimental]

  The onsoundstart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when any sound — recognisable
  or not — has been detected (when the soundstart event fires.)

  `mySpeechRecognition.onsoundstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundstart`"
  [this]
  (-> this (.-onsoundstart)))

(defn set-onsoundstart!
  "Property.

  [Experimental]

  The onsoundstart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when any sound — recognisable
  or not — has been detected (when the soundstart event fires.)

  `mySpeechRecognition.onsoundstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundstart`"
  [this val]
  (aset this "onsoundstart" val))

(defn onspeechend
  "Property.

  [Experimental]

  The onspeechend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when speech recognised
  the speech recognition service has stopped being detected (when
  speechend event fires.)

  `mySpeechRecognition.onspeechend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechend`"
  [this]
  (-> this (.-onspeechend)))

(defn set-onspeechend!
  "Property.

  [Experimental]

  The onspeechend property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when speech recognised
  the speech recognition service has stopped being detected (when
  speechend event fires.)

  `mySpeechRecognition.onspeechend = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechend`"
  [this val]
  (aset this "onspeechend" val))

(defn onspeechstart
  "Property.

  [Experimental]

  The onspeechstart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when sound recognised
  the speech recognition service as speech has been detected (when
  speechstart event fires.)

  `mySpeechRecognition.onspeechstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechstart`"
  [this]
  (-> this (.-onspeechstart)))

(defn set-onspeechstart!
  "Property.

  [Experimental]

  The onspeechstart property of the `web.speech.SpeechRecognition`
  represents an event handler that will run when sound recognised
  the speech recognition service as speech has been detected (when
  speechstart event fires.)

  `mySpeechRecognition.onspeechstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechstart`"
  [this val]
  (aset this "onspeechstart" val))

(defn onstart
  "Property.

  [Experimental]

  The onstart property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  begun listening to incoming audio with intent to recognize grammars
  with the current SpeechRecognition (when the start event fires.)

  `mySpeechRecognition.onstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onstart`"
  [this]
  (-> this (.-onstart)))

(defn set-onstart!
  "Property.

  [Experimental]

  The onstart property of the `web.speech.SpeechRecognition` interface
  an event handler that will run when the speech recognition service
  begun listening to incoming audio with intent to recognize grammars
  with the current SpeechRecognition (when the start event fires.)

  `mySpeechRecognition.onstart = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onstart`"
  [this val]
  (aset this "onstart" val))

