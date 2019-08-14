(ns speech.SpeechRecognition.ev
  "SpeechRecognition Events."
  (:refer-clojure :exclude []))

(def audioend
  "Event.

  You can use the audioend event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audioend_event`"

  "audioend")

(def audiostart
  "Event.

  You can use the audiostart event in an `web.onaudiostart` method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audiostart_event`"

  "audiostart")

(def end
  "Event.

  You can use the end event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/end_event`"

  "end")

(def error
  "Event.

  You can use the error event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/error_event`"

  "error")

(def nomatch
  "Event.

  The nomatch event of the Web Speech API is fired when the speech
  service returns a final result with no significant recognition.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/nomatch_event`"

  "nomatch")

(def result
  "Event.

  The result event of the Web Speech API is fired when the speech
  service returns a result — a word or phrase has been positively
  and this has been communicated back to the app

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/result_event`"

  "result")

(def soundend
  "Event.

  You can use the soundend event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundend_event`"

  "soundend")

(def soundstart
  "Event.

  The soundstart event of the Web Speech API is fired when any
  — recognisable speech or not — has been detected.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/soundstart_event`"

  "soundstart")

(def speechend
  "Event.

  The speechend event of the Web Speech API is fired when speech
  by the speech recognition service has stopped being detected.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechend_event`"

  "speechend")

(def speechstart
  "Event.

  You can use the speechstart event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/speechstart_event`"

  "speechstart")

(def start
  "Event.

  The start event of the Web Speech API `speech.SpeechRecognition`
  is fired when the speech recognition service has begun listening
  incoming audio with intent to recognize grammars associated with
  current SpeechRecognition.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start_event`"

  "start")

