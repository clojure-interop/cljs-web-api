(ns web.audio.DynamicsCompressorNode
  "Inherits properties from its parent, `web.audio.AudioNode`."
  (:refer-clojure :exclude []))

(defn threshold
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.threshold.value = -50;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/threshold`"
  [this]
  (-> this (.-threshold)))

(defn knee
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.knee.value = 40;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/knee`"
  [this]
  (-> this (.-knee)))

(defn ratio
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.ratio.value = 12;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/ratio`"
  [this]
  (-> this (.-ratio)))

(defn reduction
  "Property.

  [Read Only]

  The reduction read-only property of the `web.audio.DynamicsCompressorNode`
  is a float representing the amount of gain reduction currently
  by the compressor to the signal.

  `var myReduction = compressorNodeInstance.reduction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/reduction`"
  [this]
  (-> this (.-reduction)))

(defn attack
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.attack.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/attack`"
  [this]
  (-> this (.-attack)))

(defn release
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var compressor = audioCtx.createDynamicsCompressor();
  compressor.release.value = 0.25;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/release`"
  [this]
  (-> this (.-release)))

