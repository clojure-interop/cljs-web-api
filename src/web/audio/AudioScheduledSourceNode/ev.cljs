(ns web.audio.AudioScheduledSourceNode.ev
  "AudioScheduledSourceNode Events."
  (:refer-clojure :exclude []))

(def ended
  "Event.

  Fired when the source node has stopped playing, either because
  reached a predetermined stop time, the full duration of the audio
  been performed, or because the entire buffer has been played.
  Also available using the onended event handler property."

  "ended")

