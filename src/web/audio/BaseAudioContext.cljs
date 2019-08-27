(ns web.audio.BaseAudioContext
  "The BaseAudioContext interface of the Web Audio API acts as a
  definition for online and offline audio-processing graphs, as
  by `web.audio.AudioContext` and `web.audio.OfflineAudioContext`"
  (:refer-clojure :exclude []))

(defn create-analyser
  "Method.

  The createAnalyser() method of the `web.audio.BaseAudioContext`
  creates an `web.audio.AnalyserNode`, which can be used to expose
  time and frequency data and create data visualisations.

  `var analyserNode = baseAudioContext.createAnalyser();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser`"
  [this ]
  (-> this (.createAnalyser)))

(defn create-biquad-filter
  "Method.

  A `web.audio.BiquadFilterNode`.

  `baseAudioContext.createBiquadFilter();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBiquadFilter`"
  [this ]
  (-> this (.createBiquadFilter)))

(defn create-buffer
  "Method.

  An `web.audio.AudioBuffer` configured based on the specified

  `var buffer = baseAudioContext.createBuffer(numOfchannels, length, sampleRate);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBuffer`"
  [this num-ofchannels length sample-rate]
  (-> this (.createBuffer num-ofchannels length sample-rate)))

(defn create-buffer-source
  "Method.

  An `web.audio.AudioBufferSourceNode`.

  `var source = baseAudioContext.createBufferSource();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBufferSource`"
  [this ]
  (-> this (.createBufferSource)))

(defn create-constant-source
  "Method.

  The createConstantSource() property of the `web.audio.BaseAudioContext`
  creates a `web.audio.ConstantSourceNode` object, which is an
  source that continuously outputs a monaural (one-channel) sound
  whose samples all have the same value.

  `var constantSourceNode = AudioContext.createConstantSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createConstantSource`"
  [this ]
  (-> this (.createConstantSource)))

(defn create-channel-merger
  "Method.

  A `web.audio.ChannelMergerNode`.

  `baseAudioContext.createChannelMerger(numberOfInputs);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createChannelMerger`"
  [this number-of-inputs]
  (-> this (.createChannelMerger number-of-inputs)))

(defn create-channel-splitter
  "Method.

  A `web.audio.ChannelSplitterNode`.

  `baseAudioContext.createChannelSplitter(numberOfOutputs);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createChannelSplitter`"
  [this number-of-outputs]
  (-> this (.createChannelSplitter number-of-outputs)))

(defn create-convolver
  "Method.

  A `web.audio.ConvolverNode`.

  `baseAudioContext.createConvolver();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createConvolver`"
  [this ]
  (-> this (.createConvolver)))

(defn create-delay
  "Method.

  The createDelay() method of the `web.audio.BaseAudioContext`
  is used to create a `web.audio.DelayNode`, which is used to delay
  incoming audio signal by a certain amount of time.

  `var delayNode = audioCtx.createDelay(maxDelayTime);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createDelay`"
  [this max-delay-time]
  (-> this (.createDelay max-delay-time)))

(defn create-dynamics-compressor
  "Method.

  Compression lowers the volume of the loudest parts of the signal
  raises the volume of the softest parts. Overall, a louder, richer,
  fuller sound can be achieved. It is especially important in games
  musical applications where large numbers of individual sounds
  played simultaneously, where you want to control the overall
  level and help avoid clipping (distorting) of the audio output.

  `baseAudioCtx.createDynamicsCompressor();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor`"
  [this ]
  (-> this (.createDynamicsCompressor)))

(defn create-gain
  "Method.

  A `web.audio.GainNode` which takes as input one or more audio
  and outputs audio whose volume has been adjusted in gain (volume)
  a level specified by the node's `GainNode.gain` a-rate parameter.

  `var gainNode = AudioContext.createGain();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain`"
  [this ]
  (-> this (.createGain)))

(defn create-iir-filter
  "Method.

  The createIIRFilter() method of the `web.audio.BaseAudioContext`
  creates an `web.audio.IIRFilterNode`, which represents a general
  impulse response (IIR) filter which can be configured to serve
  various types of filter.

  `var iirFilter = AudioContext.createIIRFilter(feedforward, feedback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createIIRFilter`"
  [this feedforward feedback]
  (-> this (.createIIRFilter feedforward feedback)))

(defn create-oscillator
  "Method.

  The createOscillator() method of the `web.audio.BaseAudioContext`
  creates an `web.audio.OscillatorNode`, a source representing
  periodic waveform. It basically generates a constant tone.

  `var oscillatorNode = audioCtx.createOscillator();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createOscillator`"
  [this ]
  (-> this (.createOscillator)))

(defn create-panner
  "Method.

  The panner node is spatialized in relation to the AudioContext's
  (defined by the `AudioContext.listener` attribute), which represents
  position and orientation of the person listening to the audio.

  `baseAudioCtx.createPanner();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPanner`"
  [this ]
  (-> this (.createPanner)))

(defn create-periodic-wave
  "Method.

  The createPeriodicWave() method of the `web.audio.BaseAudioContext`
  is used to create a `web.audio.PeriodicWave`, which is used to
  a periodic waveform that can be used to shape the output of an

  `var wave = AudioContext.createPeriodicWave(real, imag[, constraints]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPeriodicWave`"
  [this & args]
  (-> this .-createPeriodicWave (.apply this (clj->js args))))

(defn create-script-processor
  "Method.

  A `web.deprecated.ScriptProcessorNode`.

  `var scriptProcessor = audioCtx.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor`"
  [this buffer-size number-of-input-channels number-of-output-channels]
  (-> this (.createScriptProcessor buffer-size number-of-input-channels number-of-output-channels)))

(defn create-stereo-panner
  "Method.

  A `web.audio.StereoPannerNode`.

  `baseAudioContext.createStereoPanner();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createStereoPanner`"
  [this ]
  (-> this (.createStereoPanner)))

(defn create-wave-shaper
  "Method.

  A `web.audio.WaveShaperNode`.

  `baseAudioCtx.createWaveShaper();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createWaveShaper`"
  [this ]
  (-> this (.createWaveShaper)))

(defn decode-audio-data
  "Method.

  This is the preferred method of creating an audio source for
  Audio API from an audio track. This method only works on complete
  data, not fragments of audio file data.

  `Older callback syntax:



  baseAudioContext.decodeAudioData(ArrayBuffer, successCallback, errorCallback);

  Newer promise-based syntax:



  Promise<decodedData> baseAudioContext.decodeAudioData(ArrayBuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData`"
  [this & args]
  (-> this .-decodeAudioData (.apply this (clj->js args))))

(defn audio-worklet
  "Property.

  The audioWorklet read-only property of the `web.audio.BaseAudioContext`
  returns an instance of `web.audio.AudioWorklet` that can be used
  adding `web.audio.AudioWorkletProcessor`-derived classes which
  custom audio processing.

  `baseAudioContextInstance.audioWorklet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/audioWorklet`"
  [this]
  (-> this (.-audioWorklet)))

(defn set-audio-worklet!
  "Property.

  The audioWorklet read-only property of the `web.audio.BaseAudioContext`
  returns an instance of `web.audio.AudioWorklet` that can be used
  adding `web.audio.AudioWorkletProcessor`-derived classes which
  custom audio processing.

  `baseAudioContextInstance.audioWorklet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/audioWorklet`"
  [this val]
  (aset this "audioWorklet" val))

(defn current-time
  "Property.

  The currentTime read-only property of the `web.audio.BaseAudioContext`
  returns a double representing an ever-increasing hardware timestamp
  seconds that can be used for scheduling audio playback, visualizing
  etc. It starts at 0.

  `var curTime = baseAudioContext.currentTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime`"
  [this]
  (-> this (.-currentTime)))

(defn set-current-time!
  "Property.

  The currentTime read-only property of the `web.audio.BaseAudioContext`
  returns a double representing an ever-increasing hardware timestamp
  seconds that can be used for scheduling audio playback, visualizing
  etc. It starts at 0.

  `var curTime = baseAudioContext.currentTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime`"
  [this val]
  (aset this "currentTime" val))

(defn destination
  "Property.

  An `web.audio.AudioDestinationNode`.

  `baseAudioContext.destination;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/destination`"
  [this]
  (-> this (.-destination)))

(defn set-destination!
  "Property.

  An `web.audio.AudioDestinationNode`.

  `baseAudioContext.destination;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/destination`"
  [this val]
  (aset this "destination" val))

(defn listener
  "Property.

  An `web.audio.AudioListener` object.

  `baseAudioContext.listener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/listener`"
  [this]
  (-> this (.-listener)))

(defn set-listener!
  "Property.

  An `web.audio.AudioListener` object.

  `baseAudioContext.listener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/listener`"
  [this val]
  (aset this "listener" val))

(defn sample-rate
  "Property.

  The sampleRate property of the `web.audio.BaseAudioContext` interface
  a floating point number representing the sample rate, in samples
  second, used by all nodes in this audio context.

  `baseAudioContext.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate`"
  [this]
  (-> this (.-sampleRate)))

(defn set-sample-rate!
  "Property.

  The sampleRate property of the `web.audio.BaseAudioContext` interface
  a floating point number representing the sample rate, in samples
  second, used by all nodes in this audio context.

  `baseAudioContext.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn state
  "Property.

  A `web.dom.DOMString`. Possible values are:

  `baseAudioContext.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state`"
  [this]
  (-> this (.-state)))

(defn set-state!
  "Property.

  A `web.dom.DOMString`. Possible values are:

  `baseAudioContext.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state`"
  [this val]
  (aset this "state" val))

(defn onstatechange
  "Property.

  The following snippet is taken from our AudioContext states demo
  it running live.) The onstatechange hander is used to log the
  `state` to the console every time it changes.

  `baseAudioContext.onstatechange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/onstatechange`"
  [this]
  (-> this (.-onstatechange)))

(defn set-onstatechange!
  "Property.

  The following snippet is taken from our AudioContext states demo
  it running live.) The onstatechange hander is used to log the
  `state` to the console every time it changes.

  `baseAudioContext.onstatechange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/onstatechange`"
  [this val]
  (aset this "onstatechange" val))

