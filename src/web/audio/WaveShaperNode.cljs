(ns web.audio.WaveShaperNode
  "A WaveShaperNode always has exactly one input and one output."
  (:refer-clojure :exclude []))

(defn curve
  "Property.

  The curve property of the `web.audio.WaveShaperNode` interface
  a `js.Float32Array` of numbers describing the distortion to apply.

  `var audioCtx = new AudioContext();
  var distortion = audioCtx.createWaveShaper();
  distortion.curve = myCurveDataArray; // myCurveDataArray is a Float32Array`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/curve`"
  [this]
  (-> this (.-curve)))

(defn set-curve!
  "Property.

  The curve property of the `web.audio.WaveShaperNode` interface
  a `js.Float32Array` of numbers describing the distortion to apply.

  `var audioCtx = new AudioContext();
  var distortion = audioCtx.createWaveShaper();
  distortion.curve = myCurveDataArray; // myCurveDataArray is a Float32Array`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/curve`"
  [this val]
  (aset this "curve" val))

(defn oversample
  "Property.

  The oversample property of the `web.audio.WaveShaperNode` interface
  an enumerated value indicating if oversampling must be used.
  is a technique for creating more samples (up-sampling) before
  a distortion effect to the audio signal.

  `distortion.oversample = enumeratedValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/oversample`"
  [this]
  (-> this (.-oversample)))

(defn set-oversample!
  "Property.

  The oversample property of the `web.audio.WaveShaperNode` interface
  an enumerated value indicating if oversampling must be used.
  is a technique for creating more samples (up-sampling) before
  a distortion effect to the audio signal.

  `distortion.oversample = enumeratedValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/oversample`"
  [this val]
  (aset this "oversample" val))

