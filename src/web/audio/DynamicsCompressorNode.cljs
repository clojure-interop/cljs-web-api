(ns web.audio.DynamicsCompressorNode
  "Inherits properties from its parent, `web.audio.AudioNode`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DynamicsCompressorNode() constructor creates a new `web.audio.DynamicsCompressorNode` object which provides a compression effect, which lowers the volume of the loudest parts of the signal

  context
  A reference to an `web.audio.AudioContext`.
  options Optional
  Options are as follows:

  attack: The amount of time (in seconds) to reduce the gain by 10dB. Its default value is 0.003. This parameter is k-rate. Its nominal range is [0, 1].
  knee: A decibel value representing the range above the threshold where the curve smoothly transitions to the \\\"ratio\\\" portion. Its default value is 30. This parameter is k-rate. Its nominal range is [0, 40].
  ratio: The amount of dB change in input for a 1 dB change in output. Its default value is 12. This parameter is k-rate. Its nominal range is [1, 20].
  release: The amount of time (in seconds) to increase the gain by 10dB. Its default value is 0.250. This parameter is k-rate. Its nominal range is [0, 1].
  threshold: The decibel value above which the compression will start taking effect. Its default value is -24. This parameter is k-rate. Its nominal range is [-100, 0].

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode`"
  js/DynamicsCompressorNode)

(defn threshold
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.threshold.value = -50;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/threshold`"
  [this]
  (-> this (.threshold)))

(defn set-threshold!
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.threshold.value = -50;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/threshold`"
  [this val]
  (aset this "threshold" val))

(defn attack
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.attack.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/attack`"
  [this]
  (-> this (.attack)))

(defn set-attack!
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.attack.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/attack`"
  [this val]
  (aset this "attack" val))

(defn knee
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.knee.value = 40;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/knee`"
  [this]
  (-> this (.knee)))

(defn set-knee!
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.knee.value = 40;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/knee`"
  [this val]
  (aset this "knee" val))

(defn ratio
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.ratio.value = 12;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/ratio`"
  [this]
  (-> this (.ratio)))

(defn set-ratio!
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.ratio.value = 12;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/ratio`"
  [this val]
  (aset this "ratio" val))

(defn reduction
  "Property.

  The reduction read-only property of the `web.audio.DynamicsCompressorNode`
  is a float representing the amount of gain reduction currently
  by the compressor to the signal.

  `var myReduction = compressorNodeInstance.reduction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/reduction`"
  [this]
  (-> this (.reduction)))

(defn set-reduction!
  "Property.

  The reduction read-only property of the `web.audio.DynamicsCompressorNode`
  is a float representing the amount of gain reduction currently
  by the compressor to the signal.

  `var myReduction = compressorNodeInstance.reduction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/reduction`"
  [this val]
  (aset this "reduction" val))

(defn release
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.release.value = 0.25;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/release`"
  [this]
  (-> this (.release)))

(defn set-release!
  "Property.

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.release.value = 0.25;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/release`"
  [this val]
  (aset this "release" val))

