(ns web.GainNode
  "The GainNode interface represents a change in volume. It is an
  audio-processing module that causes a given gain to be applied
  the input data before its propagation to the output. A GainNode
  has exactly one input and one output, both with the same number
  channels."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The GainNode() constructor of the Web Audio API creates a new `web.GainNode` object which an `audio.AudioNode` that represents a change in volume.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA reference to an `audio.AudioContext`.
  \\toptions Optional
  \\tOptions are as follows:

  \\t\\tgain: The amount of gain to apply. This parameter is a-rate and it's nominal range is (-∞,+∞). The default is 1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/GainNode`"
  js/GainNode)

(defn gain
  "Property.

  An `audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain`"
  [this]
  (-> this (.gain)))

(defn set-gain!
  "Property.

  An `audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain`"
  [this val]
  (aset this "gain" val))

