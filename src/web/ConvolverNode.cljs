(ns web.ConvolverNode
  "The ConvolverNode interface is an `audio.AudioNode` that performs
  Linear Convolution on a given `audio.AudioBuffer`, often used
  achieve a reverb effect. A ConvolverNode always has exactly one
  and one output."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ConvolverNode() constructor of the Web Audio API creates a new `web.ConvolverNode` object instance.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  context
  A reference to an `audio.AudioContext`.
  options Optional
  Options are as follows:

  audioBuffer: A mono, stereo, or 4-channel `audio.AudioBuffer` containing the (possibly multichannel) impulse response used by the ConvolverNode to create the reverb effect.
  disableNormalization: A `web.Boolean` controlling whether the impulse response from the buffer will be scaled by an equal-power normalization, or not. The default is 'false'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/ConvolverNode`"
  js/ConvolverNode)

(defn buffer
  "Property.

  An `audio.AudioBuffer`.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.buffer = myAudioBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`"
  [this]
  (-> this (.buffer)))

(defn set-buffer!
  "Property.

  An `audio.AudioBuffer`.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.buffer = myAudioBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`"
  [this val]
  (aset this "buffer" val))

(defn normalize
  "Property.

  The normalize property of the `web.ConvolverNode` interface is
  boolean that controls whether the impulse response from the buffer
  be scaled by an equal-power normalization when the buffer attribute
  set, or not.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.normalize = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`"
  [this]
  (-> this (.normalize)))

(defn set-normalize!
  "Property.

  The normalize property of the `web.ConvolverNode` interface is
  boolean that controls whether the impulse response from the buffer
  be scaled by an equal-power normalization when the buffer attribute
  set, or not.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.normalize = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`"
  [this val]
  (aset this "normalize" val))

