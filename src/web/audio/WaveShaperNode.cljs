(ns web.audio.WaveShaperNode
  "A WaveShaperNode always has exactly one input and one output."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The WaveShaperNode() constructor of the Web Audio API creates a new `web.audio.WaveShaperNode` object which is an `web.audio.AudioNode` that represents a non-linear distorter.

  Inherits parameters from the `web.audio.AudioNodeOptions` dictionary.


  context
  A reference to an `web.audio.AudioContext`.
  options Optional
  Options are as follows:

  curve: The shaping curve used for the waveshaping effect. The input signal is nominally within the range [-1;1].
  oversample: Specifies what type of oversampling (if any) should be used when applying the shaping curve. Valid values are 'none', '2x', or '4x'. The default is 'none'.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/WaveShaperNode`"
  js/WaveShaperNode)

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

