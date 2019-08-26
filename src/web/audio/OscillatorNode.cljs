(ns web.audio.OscillatorNode
  "The OscillatorNode interface represents a periodic waveform,
  as a sine wave. It is an `web.audio.AudioScheduledSourceNode`
  module that causes a specified frequency of a given wave to be
  effect, a constant tone."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The OscillatorNode() constructor of the Web Audio API creates a new `web.audio.OscillatorNode` object which is an `web.audio.AudioNode` that represents a periodic waveform, like a sine wave, optionally setting the node's properties' values to match values in a specified object.

  Inherits parameters from the `web.audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA reference to an `web.audio.AudioContext`.
  \\toptions Optional
  \\tAn object whose properties specify the initial values for the oscillator node's properties. Any properties omitted from the object will take on the default value as documented.

  \\t\\ttype
  \\t\\tThe shape of the wave produced by the node. Valid values are 'sine', 'square', 'sawtooth', 'triangle' and 'custom'. The default is 'sine'.
  \\t\\tdetune
  \\t\\tA detuning value (in cents) which will offset the frequency by the given amount. Its default is 0.
  \\t\\tfrequency
  \\t\\tThe frequency (in hertz) of the periodic waveform. Its default is 440.
  \\t\\tperiodicWave
  \\t\\tAn arbitrary period waveform described by a `web.audio.PeriodicWave` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/OscillatorNode`"
  js/OscillatorNode)

(defn set-periodic-wave
  "Method.

  The setPeriodicWave() method of the `web.audio.OscillatorNode`
  is used to point to a `web.audio.PeriodicWave` defining a periodic
  that can be used to shape the oscillator's output, when `type`
  custom.

  `OscillatorNode.setPeriodicWave(wave);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/setPeriodicWave`"
  [this wave]
  (-> this (.setPeriodicWave wave)))

(defn start
  "Method.

  The following example shows basic usage of an `web.audio.AudioContext`
  create an oscillator node. For an applied example, check out
  Violent Theremin demo (see app.js for relevant code).

  `oscillator.start(when); // start playing oscillator at the point in time specified by when`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/start`"
  [this when]
  (-> this (.start when)))

(defn stop
  "Method.

  The following example shows basic usage of an `web.audio.AudioContext`
  create an oscillator node. For an applied example, check out
  Violent Theremin demo (see app.js for relevant code).

  `oscillator.stop(when); // stop playing oscillator at when`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/stop`"
  [this when]
  (-> this (.stop when)))

(defn frequency
  "Property.

  An a-rate `web.audio.AudioParam`.

  `var oscillator = audioCtx.createOscillator();
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz


  Note: though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/frequency`"
  [this]
  (-> this (.frequency)))

(defn set-frequency!
  "Property.

  An a-rate `web.audio.AudioParam`.

  `var oscillator = audioCtx.createOscillator();
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz


  Note: though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/frequency`"
  [this val]
  (aset this "frequency" val))

(defn detune
  "Property.

  An a-rate `web.audio.AudioParam`.

  `var oscillator = audioCtx.createOscillator();
  oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents


  Note: though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune`"
  [this]
  (-> this (.detune)))

(defn set-detune!
  "Property.

  An a-rate `web.audio.AudioParam`.

  `var oscillator = audioCtx.createOscillator();
  oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents


  Note: though the AudioParam returned is read-only, the value it represents is not.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune`"
  [this val]
  (aset this "detune" val))

(defn type
  "Property.

  A `web.dom.DOMString` specifying the shape of oscillator wave.
  different available values are:

  `OscillatorNode.type = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  A `web.dom.DOMString` specifying the shape of oscillator wave.
  different available values are:

  `OscillatorNode.type = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type`"
  [this val]
  (aset this "type" val))

(defn onended
  "Property.

  The onended property of the `web.audio.OscillatorNode` interface
  used to set the event handler for the ended event, which fires
  the tone has stopped playing.

  `var oscillator = audioCtx.createOscillator();
  oscillator.onended = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended`"
  [this]
  (-> this (.onended)))

(defn set-onended!
  "Property.

  The onended property of the `web.audio.OscillatorNode` interface
  used to set the event handler for the ended event, which fires
  the tone has stopped playing.

  `var oscillator = audioCtx.createOscillator();
  oscillator.onended = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended`"
  [this val]
  (aset this "onended" val))

