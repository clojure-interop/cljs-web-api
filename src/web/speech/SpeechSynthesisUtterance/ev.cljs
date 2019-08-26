(ns web.speech.SpeechSynthesisUtterance.ev
  "SpeechSynthesisUtterance Events."
  (:refer-clojure :exclude []))

(def boundary
  "Event.

  Fired when the spoken utterance reaches a word or sentence boundary.
  Also available via the onboundary property."

  "boundary")

(def end
  "Event.

  You can use the end event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event`"

  "end")

(def error
  "Event.

  You can use the error event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/error_event`"

  "error")

(def mark
  "Event.

  You can use the mark event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/mark_event`"

  "mark")

(def pause
  "Event.

  You can use the pause event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pause_event`"

  "pause")

(def resume
  "Event.

  The resume event of the Web Speech API `web.speech.SpeechSynthesisUtterance`
  is fired when a paused utterance is resumed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/resume_event`"

  "resume")

(def start
  "Event.

  You can use the start event in an addEventListener method:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event`"

  "start")

