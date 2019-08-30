(ns web.speech.SpeechRecognition.ev
  "SpeechRecognition Events."
  (:refer-clojure :exclude []))

(def audiostart
  "Event.

  [Experimental]

  You can use the audiostart event in an `onaudiostart` method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audiostart_event`"

  "audiostart")

(def audioend
  "Event.

  [Experimental]

  You can use the audioend event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/audioend_event`"

  "audioend")

(def end
  "Event.

  Fired when the speech recognition service has disconnected.
  Also available via the onend property."

  "end")

(def error
  "Event.

  Fired when a speech recognition error occurs.
  Also available via the onerror property."

  "error")

(def nomatch
  "Event.

  Fired when the speech recognition service returns a final result
  no significant recognition. This may involve some degree of recognition,
  doesn't meet or exceed the confidence threshold.
  Also available via the onnomatch property."

  "nomatch")

(def result
  "Event.

  Fired when the speech recognition service returns a result —
  word or phrase has been positively recognized and this has been
  back to the app.
  Also available via the onresult property."

  "result")

(def soundstart
  "Event.

  Fired when any sound — recognisable speech or not — has been
  Also available via the onsoundstart property."

  "soundstart")

(def soundend
  "Event.

  Fired when any sound — recognisable speech or not — has stopped
  detected.
  Also available via the onsoundend property."

  "soundend")

(def speechstart
  "Event.

  Fired when sound that is recognised by the speech recognition
  as speech has been detected.
  Also available via the onspeechstart property."

  "speechstart")

(def speechend
  "Event.

  Fired when speech recognised by the speech recognition service
  stopped being detected.
  Also available via the onspeechend property."

  "speechend")

(def start
  "Event.

  Fired when the speech recognition service has begun listening
  incoming audio with intent to recognize grammars associated with
  current SpeechRecognition.
  Also available via the onstart property."

  "start")

