(ns web.audio.GainNode
  "The GainNode interface represents a change in volume. It is an
  audio-processing module that causes a given gain to be applied
  the input data before its propagation to the output. A GainNode
  has exactly one input and one output, both with the same number
  channels."
  (:refer-clojure :exclude []))

(defn gain
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain`"
  [this]
  (-> this (.-gain)))

