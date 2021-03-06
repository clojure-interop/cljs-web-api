(ns web.audio.AudioContext
  "The AudioContext interface represents an audio-processing graph
  from audio modules linked together, each represented by an `web.audio.AudioNode`."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The close() method of the `web.audio.AudioContext` Interface
  the audio context, releasing any system audio resources that
  uses.

  `var audioCtx = new AudioContext();
  audioCtx.close().then(function() { ... });
  await audioCtx.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close`"
  [this & args]
  (-> this .-close (.apply this (clj->js args))))

(defn create-media-element-source
  "Method.

  For more details about media element audio source nodes, check
  the `web.audio.MediaElementAudioSourceNode` reference page.

  `var audioCtx = new AudioContext();
  var source = audioCtx.createMediaElementSource(myMediaElement);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource`"
  [this & args]
  (-> this .-createMediaElementSource (.apply this (clj->js args))))

(defn create-media-stream-source
  "Method.

  For more details about media stream audio source nodes, check
  the `web.audio.MediaStreamAudioSourceNode` reference page.

  `audioSourceNode = audioContext.createMediaStreamSource(stream);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource`"
  [this stream]
  (-> this (.createMediaStreamSource stream)))

(defn create-media-stream-destination
  "Method.

  The `web.streams.MediaStream` is created when the node is created
  is accessible via the `web.audio.MediaStreamAudioDestinationNode`'s
  attribute. This stream can be used in a similar way as a MediaStream
  via `navigator.getUserMedia` — it can, for example, be sent to
  remote peer using the RTCPeerConnection addStream() method.

  `var audioCtx = new AudioContext();
  var destination = audioCtx.createMediaStreamDestination();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamDestination`"
  [this & args]
  (-> this .-createMediaStreamDestination (.apply this (clj->js args))))

(defn create-media-stream-track-source
  "Method.

  [Draft]

  A `web.media.MediaStreamTrackAudioSourceNode` object which acts
  a source for audio data found in the specified audio track.

  `var audioCtx = new AudioContext();
  var track = audioCtx.createMediaStreamTrackSource(track);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamTrackSource`"
  [this & args]
  (-> this .-createMediaStreamTrackSource (.apply this (clj->js args))))

(defn get-output-timestamp
  "Method.

  [Experimental]

  The getOutputTimestamp() property of the `web.audio.AudioContext`
  returns a new AudioTimestamp object containing two correlated
  audio stream position values.

  `var timestamp = AudioContext.getOutputTimestamp()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/getOutputTimestamp`"
  [this ]
  (-> this (.getOutputTimestamp)))

(defn resume
  "Method.

  The resume() method of the `web.audio.AudioContext` interface
  the progression of time in an audio context that has previously
  suspended.

  `completePromise = audioContext.resume();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume`"
  [this ]
  (-> this (.resume)))

(defn suspend
  "Method.

  The suspend() method of the `web.audio.AudioContext` Interface
  the progression of time in the audio context, temporarily halting
  hardware access and reducing CPU/battery usage in the process
  this is useful if you want an application to power down the audio
  when it will not be using an audio context for a while.

  `var audioCtx = new AudioContext();
  audioCtx.suspend().then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/suspend`"
  [this & args]
  (-> this .-suspend (.apply this (clj->js args))))

(defn create-java-script-node
  "Method.

  [Obsolute]

  The following script illustrates the use of createJavaScriptNode():

  `var jsNode = audioCtx.createJavaScriptNode(bufferSize, numInputChannels, numOutputChannels);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createJavaScriptNode`"
  [this buffer-size num-input-channels num-output-channels]
  (-> this (.createJavaScriptNode buffer-size num-input-channels num-output-channels)))

(defn create-wave-table
  "Method.

  [Obsolute]

  The `web.audio.AudioContext` method createWaveTable() is now
  you should instead use the method `createPeriodicWave()`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createWaveTable`"
  [this & args]
  (-> this .-createWaveTable (.apply this (clj->js args))))

(defn base-latency
  "Property.

  [Read Only]
  [Experimental]

  The baseLatency read-only property of the `web.audio.AudioContext`
  returns a double that represents the number of seconds of processing
  incurred by the AudioContext passing the audio from the `web.audio.AudioDestinationNode`
  the audio subsystem.

  `var baseLatency = audioCtx.baseLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency`"
  [this]
  (-> this (.-baseLatency)))

(defn output-latency
  "Property.

  [Read Only]
  [Experimental]

  The outputLatency read-only property of the `web.audio.AudioContext`
  provides an estimation of the output latency of the current audio

  `var latency = audioCtx.outputLatency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency`"
  [this]
  (-> this (.-outputLatency)))

