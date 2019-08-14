(ns audio.AudioContext
  "The AudioContext interface represents an audio-processing graph
  from audio modules linked together, each represented by an `audio.AudioNode`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AudioContext() constructor creates a new `audio.AudioContext` object which represents an audio-processing graph, built from audio modules linked together, each represented by an `audio.AudioNode`.

  options Optional
  An object based on the `audio.AudioContextOptions` dictionary that contains zero or more optional properties to configure the new context. Available properties are as follows:
  `web.latencyHint` Optional
  The type of playback that the context will be used for, as a value from the `audio.AudioContextLatencyCategory` enum or a double-precision floating-point value indicating the preferred maximum latency of the context in seconds. The user agent may or may not choose to meet this request; check the value of `audio.AudioContext.baseLatency` to determine the true latency after creating the context.
  `web.sampleRate` Optional
  The `web.sampleRate` to be used by the AudioContext, specified in samples per second. The value may be any value supported by `audio.AudioBuffer`. If not specified, the preferred sample rate for the context's output device is used by default.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext`"
  js/AudioContext)

(defn close
  "Method.

  The close() method of the `audio.AudioContext` Interface closes
  audio context, releasing any system audio resources that it uses.

  `var audioCtx = new AudioContext();
  audioCtx.close().then(function() { ... });
  await audioCtx.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close`"
  [this & args]
  (apply (-> this .-close) (concat [this] args)))

(defn create-java-script-node
  "Method.

  The following script illustrates the use of createJavaScriptNode():

  `var jsNode = audioCtx.createJavaScriptNode(bufferSize, numInputChannels, numOutputChannels);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createJavaScriptNode`"
  [this buffer-size num-input-channels num-output-channels]
  (-> this (.createJavaScriptNode buffer-size num-input-channels num-output-channels)))

(defn create-media-element-source
  "Method.

  For more details about media element audio source nodes, check
  the `media.MediaElementAudioSourceNode` reference page.

  `var audioCtx = new AudioContext();
  var source = audioCtx.createMediaElementSource(myMediaElement);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource`"
  [this & args]
  (apply (-> this .-createMediaElementSource) (concat [this] args)))

(defn create-media-stream-destination
  "Method.

  The `media.MediaStream` is created when the node is created and
  accessible via the `media.MediaStreamAudioDestinationNode`'s
  attribute. This stream can be used in a similar way as a MediaStream
  via `web.navigator.getUserMedia` — it can, for example, be sent
  a remote peer using the RTCPeerConnection addStream() method.

  `var audioCtx = new AudioContext();
  var destination = audioCtx.createMediaStreamDestination();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamDestination`"
  [this & args]
  (apply (-> this .-createMediaStreamDestination) (concat [this] args)))

(defn create-media-stream-source
  "Method.

  For more details about media stream audio source nodes, check
  the `media.MediaStreamAudioSourceNode` reference page.

  `audioSourceNode = audioContext.createMediaStreamSource(stream);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource`"
  [this stream]
  (-> this (.createMediaStreamSource stream)))

(defn create-media-stream-track-source
  "Method.

  A `media.MediaStreamTrackAudioSourceNode` object which acts as
  source for audio data found in the specified audio track.

  `var audioCtx = new AudioContext();
  var track = audioCtx.createMediaStreamTrackSource(track);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamTrackSource`"
  [this & args]
  (apply (-> this .-createMediaStreamTrackSource) (concat [this] args)))

(defn create-wave-table
  "Method.

  The `audio.AudioContext` method createWaveTable() is now obsolete;
  should instead use the method `web.createPeriodicWave()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createWaveTable`"
  [this & args]
  (apply (-> this .-createWaveTable) (concat [this] args)))

(defn get-output-timestamp
  "Method.

  The getOutputTimestamp() property of the `audio.AudioContext`
  returns a new AudioTimestamp object containing two correlated
  audio stream position values.

  `var timestamp = AudioContext.getOutputTimestamp()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/getOutputTimestamp`"
  [this ]
  (-> this (.getOutputTimestamp)))

(defn resume
  "Method.

  The resume() method of the `audio.AudioContext` interface resumes
  progression of time in an audio context that has previously been

  `completePromise = audioContext.resume();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume`"
  [this ]
  (-> this (.resume)))

(defn suspend
  "Method.

  The suspend() method of the `audio.AudioContext` Interface suspends
  progression of time in the audio context, temporarily halting
  hardware access and reducing CPU/battery usage in the process
  this is useful if you want an application to power down the audio
  when it will not be using an audio context for a while.

  `var audioCtx = new AudioContext();
  audioCtx.suspend().then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/suspend`"
  [this & args]
  (apply (-> this .-suspend) (concat [this] args)))

(defn base-latency
  "Property.

  The baseLatency read-only property of the `audio.AudioContext`
  returns a double that represents the number of seconds of processing
  incurred by the AudioContext passing the audio from the `audio.AudioDestinationNode`
  the audio subsystem.

  `var baseLatency = audioCtx.baseLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency`"
  [this]
  (-> this (.baseLatency)))

(defn set-base-latency!
  "Property.

  The baseLatency read-only property of the `audio.AudioContext`
  returns a double that represents the number of seconds of processing
  incurred by the AudioContext passing the audio from the `audio.AudioDestinationNode`
  the audio subsystem.

  `var baseLatency = audioCtx.baseLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency`"
  [this val]
  (aset this "baseLatency" val))

(defn output-latency
  "Property.

  The outputLatency read-only property of the `audio.AudioContext`
  provides an estimation of the output latency of the current audio

  `var latency = audioCtx.outputLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency`"
  [this]
  (-> this (.outputLatency)))

(defn set-output-latency!
  "Property.

  The outputLatency read-only property of the `audio.AudioContext`
  provides an estimation of the output latency of the current audio

  `var latency = audioCtx.outputLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency`"
  [this val]
  (aset this "outputLatency" val))

