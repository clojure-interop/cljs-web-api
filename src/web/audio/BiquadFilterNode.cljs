(ns web.audio.BiquadFilterNode
  "The BiquadFilterNode interface represents a simple low-order
  and is created using the `AudioContext.createBiquadFilter()`
  It is an `web.audio.AudioNode` that can represent different kinds
  filters, tone control devices, and graphic equalizers."
  (:refer-clojure :exclude [type]))

(defn get-frequency-response
  "Method.

  `js.undefined`

  `BiquadFilterNode.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/getFrequencyResponse`"
  [this frequency-array mag-response-output phase-response-output]
  (-> this (.getFrequencyResponse frequency-array mag-response-output phase-response-output)))

(defn frequency
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadFilter.frequency.value = 3000;


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/frequency`"
  [this]
  (-> this (.-frequency)))

(defn detune
  "Property.

  [Read Only]

  An a-rate `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadFilter.detune.value = 100;


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/detune`"
  [this]
  (-> this (.-detune)))

(defn q
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadfilter.Q.value = 100;


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/Q`"
  [this]
  (-> this (.-Q)))

(defn gain
  "Property.

  [Read Only]

  An `web.audio.AudioParam`.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadfilter.gain.value = 25;


  Note: Though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/gain`"
  [this]
  (-> this (.-gain)))

(defn type
  "Property.

  A string (enum) representing a BiquadFilterType.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadfilter.type = 'lowpass';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  A string (enum) representing a BiquadFilterType.

  `var audioCtx = new AudioContext();
  var biquadFilter = audioCtx.createBiquadFilter();
  biquadfilter.type = 'lowpass';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/type`"
  [this val]
  (aset this "type" val))

