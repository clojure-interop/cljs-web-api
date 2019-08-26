(ns web.audio.AnalyserNode
  "The AnalyserNode interface represents a node able to provide
  frequency and time-domain analysis information. It is an `web.audio.AudioNode`
  passes the audio stream unchanged from the input to the output,
  allows you to take the generated data, process it, and create
  visualizations."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AnalyserNode constructor of the Web Audio API creates a new `web.audio.AnalyserNode` object instance.

  Inherits parameters from the `web.audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA reference to an `web.audio.AudioContext` or `web.audio.OfflineAudioContext`.
  \\toptions Optional


  \\t\\tfftSize: The desired initial size of the FFT for frequency-domain analysis.
  \\t\\tThe default is 2048.
  \\t\\tmaxDecibels: The desired initial maximum power in dB for FFT analysis.
  \\t\\tThe default is -30.
  \\t\\tminDecibels: The desired initial minimum power in dB for FFT analysis.
  \\t\\tThe default is -100.
  \\t\\tsmoothingTimeConstant: The desired initial smoothing constant for the FFT analysis. The default is 0.8.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/AnalyserNode`"
  js/AnalyserNode)

(defn get-float-frequency-data
  "Method.

  The getFloatFrequencyData() method of the `web.audio.AnalyserNode`
  copies the current frequency data into a `js.Float32Array` array
  into it.

  `var audioCtx = new AudioContext();
  var analyser = audioCtx.createAnalyser();
  var dataArray = new Float32Array(analyser.frequencyBinCount); // Float32Array should be the same length as the frequencyBinCount

  void analyser.getFloatFrequencyData(dataArray); // fill the Float32Array with data returned from getFloatFrequencyData()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getFloatFrequencyData`"
  [this & args]
  (apply (-> this .-getFloatFrequencyData) (concat [this] args)))

(defn get-byte-frequency-data
  "Method.

  The getByteFrequencyData() method of the `web.audio.AnalyserNode`
  copies the current frequency data into a `js.Uint8Array` (unsigned
  array) passed into it.

  `var audioCtx = new AudioContext();
  var analyser = audioCtx.createAnalyser();
  var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array should be the same length as the frequencyBinCount

  void analyser.getByteFrequencyData(dataArray); // fill the Uint8Array with data returned from getByteFrequencyData()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData`"
  [this & args]
  (apply (-> this .-getByteFrequencyData) (concat [this] args)))

(defn get-float-time-domain-data
  "Method.

  The getFloatTimeDomainData() method of the `web.audio.AnalyserNode`
  copies the current waveform, or time-domain, data into a `js.Float32Array`
  passed into it.

  `var audioCtx = new AudioContext();
  var analyser = audioCtx.createAnalyser();
  var dataArray = new Float32Array(analyser.fftSize); // Float32Array needs to be the same length as the fftSize
  analyser.getFloatTimeDomainData(dataArray); // fill the Float32Array with data returned from getFloatTimeDomainData()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getFloatTimeDomainData`"
  [this & args]
  (apply (-> this .-getFloatTimeDomainData) (concat [this] args)))

(defn get-byte-time-domain-data
  "Method.

  The getByteTimeDomainData() method of the `web.audio.AnalyserNode`
  copies the current waveform, or time-domain, data into a `js.Uint8Array`
  byte array) passed into it.

  `const audioCtx = new AudioContext();
  const analyser = audioCtx.createAnalyser();
  const dataArray = new Uint8Array(analyser.fftSize); // Uint8Array should be the same length as the fftSize
  analyser.getByteTimeDomainData(dataArray); // fill the Uint8Array with data returned from getByteTimeDomainData()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData`"
  [this & args]
  (apply (-> this .-getByteTimeDomainData) (concat [this] args)))

(defn fft-size
  "Property.

  The fftSize property of the `web.audio.AnalyserNode` interface
  an unsigned long value and represents the window size in samples
  is used when performing a Fast Fourier Transform (FFT) to get
  domain data.

  `var curValue = analyserNode.fftSize;
  analyserNode.fftSize = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize`"
  [this]
  (-> this (.fftSize)))

(defn set-fft-size!
  "Property.

  The fftSize property of the `web.audio.AnalyserNode` interface
  an unsigned long value and represents the window size in samples
  is used when performing a Fast Fourier Transform (FFT) to get
  domain data.

  `var curValue = analyserNode.fftSize;
  analyserNode.fftSize = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize`"
  [this val]
  (aset this "fftSize" val))

(defn frequency-bin-count
  "Property.

  The frequencyBinCount read-only property of the `web.audio.AnalyserNode`
  is an unsigned integer half that of the `AnalyserNode.fftSize`.
  generally equates to the number of data values you will have
  play with for the visualization.

  `var arrayLength = analyserNode.frequencyBinCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount`"
  [this]
  (-> this (.frequencyBinCount)))

(defn set-frequency-bin-count!
  "Property.

  The frequencyBinCount read-only property of the `web.audio.AnalyserNode`
  is an unsigned integer half that of the `AnalyserNode.fftSize`.
  generally equates to the number of data values you will have
  play with for the visualization.

  `var arrayLength = analyserNode.frequencyBinCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount`"
  [this val]
  (aset this "frequencyBinCount" val))

(defn max-decibels
  "Property.

  The maxDecibels property of the `web.audio.AnalyserNode` interface
  a double value representing the maximum power value in the scaling
  for the FFT analysis data, for conversion to unsigned byte/float
  — basically, this specifies the maximum value for the range of
  when using getFloatFrequencyData() or getByteFrequencyData().

  `var curValue = analyserNode.maxDecibels;
  analyserNode.maxDecibels = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/maxDecibels`"
  [this]
  (-> this (.maxDecibels)))

(defn set-max-decibels!
  "Property.

  The maxDecibels property of the `web.audio.AnalyserNode` interface
  a double value representing the maximum power value in the scaling
  for the FFT analysis data, for conversion to unsigned byte/float
  — basically, this specifies the maximum value for the range of
  when using getFloatFrequencyData() or getByteFrequencyData().

  `var curValue = analyserNode.maxDecibels;
  analyserNode.maxDecibels = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/maxDecibels`"
  [this val]
  (aset this "maxDecibels" val))

(defn min-decibels
  "Property.

  The minDecibels property of the `web.audio.AnalyserNode` interface
  a double value representing the minimum power value in the scaling
  for the FFT analysis data, for conversion to unsigned byte/float
  — basically, this specifies the minimum value for the range of
  when using getFloatFrequencyData() or getByteFrequencyData().

  `var curValue = analyserNode.minDecibels;
  analyserNode.minDecibels = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/minDecibels`"
  [this]
  (-> this (.minDecibels)))

(defn set-min-decibels!
  "Property.

  The minDecibels property of the `web.audio.AnalyserNode` interface
  a double value representing the minimum power value in the scaling
  for the FFT analysis data, for conversion to unsigned byte/float
  — basically, this specifies the minimum value for the range of
  when using getFloatFrequencyData() or getByteFrequencyData().

  `var curValue = analyserNode.minDecibels;
  analyserNode.minDecibels = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/minDecibels`"
  [this val]
  (aset this "minDecibels" val))

(defn smoothing-time-constant
  "Property.

  The smoothingTimeConstant property of the `web.audio.AnalyserNode`
  is a double value representing the averaging constant with the
  analysis frame. It's basically an average between the current
  and the last buffer the AnalyserNode processed, and results in
  much smoother set of value changes over time.

  `var smoothValue = analyserNode.smoothingTimeConstant;
  analyserNode.smoothingTimeConstant = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant`"
  [this]
  (-> this (.smoothingTimeConstant)))

(defn set-smoothing-time-constant!
  "Property.

  The smoothingTimeConstant property of the `web.audio.AnalyserNode`
  is a double value representing the averaging constant with the
  analysis frame. It's basically an average between the current
  and the last buffer the AnalyserNode processed, and results in
  much smoother set of value changes over time.

  `var smoothValue = analyserNode.smoothingTimeConstant;
  analyserNode.smoothingTimeConstant = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant`"
  [this val]
  (aset this "smoothingTimeConstant" val))

