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

  Fired when the utterance has finished being spoken.
  Also available via the onend property."

  "end")

(def error
  "Event.

  Fired when an error occurs that prevents the utterance from being
  spoken.
  Also available via the onerror property"

  "error")

(def mark
  "Event.

  Fired when the spoken utterance reaches a named SSML \"mark\" tag.
  Also available via the onmark property."

  "mark")

(def pause
  "Event.

  Fired when the utterance is paused part way through.
  Also available via the onpause property."

  "pause")

(def resume
  "Event.

  Fired when a paused utterance is resumed.
  Also available via the onresume property."

  "resume")

(def start
  "Event.

  Fired when the utterance has begun to be spoken.
  Also available via the onstart property."

  "start")

