(ns web.audio.ConvolverNode
  "The ConvolverNode interface is an `web.audio.AudioNode` that
  a Linear Convolution on a given `web.audio.AudioBuffer`, often
  to achieve a reverb effect. A ConvolverNode always has exactly
  input and one output."
  (:refer-clojure :exclude []))

(defn buffer
  "Property.

  An `web.audio.AudioBuffer`.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.buffer = myAudioBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`"
  [this]
  (-> this (.-buffer)))

(defn set-buffer!
  "Property.

  An `web.audio.AudioBuffer`.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.buffer = myAudioBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`"
  [this val]
  (aset this "buffer" val))

(defn normalize
  "Property.

  The normalize property of the `web.audio.ConvolverNode` interface
  a boolean that controls whether the impulse response from the
  will be scaled by an equal-power normalization when the buffer
  is set, or not.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.normalize = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`"
  [this]
  (-> this (.-normalize)))

(defn set-normalize!
  "Property.

  The normalize property of the `web.audio.ConvolverNode` interface
  a boolean that controls whether the impulse response from the
  will be scaled by an equal-power normalization when the buffer
  is set, or not.

  `var audioCtx = new AudioContext();
  var convolver = audioCtx.createConvolver();
  convolver.normalize = false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`"
  [this val]
  (aset this "normalize" val))

