(ns web.audio.AudioBuffer
  "The AudioBuffer interface represents a short audio asset residing
  memory, created from an audio file using the `AudioContext.decodeAudioData()`
  or from raw data using `AudioContext.createBuffer()`. Once put
  an AudioBuffer, the audio can then be played by being passed
  an `web.audio.AudioBufferSourceNode`."
  (:refer-clojure :exclude []))

(defn get-channel-data
  "Method.

  The getChannelData() method of the `web.audio.AudioBuffer` Interface
  a `js.Float32Array` containing the PCM data associated with the
  defined by the channel parameter (with 0 representing the first

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  var nowBuffering = myArrayBuffer.getChannelData(channel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData`"
  [this & args]
  (-> this .-getChannelData (.apply this (clj->js args))))

(defn copy-from-channel
  "Method.

  The copyFromChannel() method of the `web.audio.AudioBuffer` interface
  the audio sample data from the specified channel of the AudioBuffer
  a specified `js.Float32Array`.

  `myArrayBuffer.copyFromChannel(destination, channelNumber, startInChannel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyFromChannel`"
  [this destination channel-number start-in-channel]
  (-> this (.copyFromChannel destination channel-number start-in-channel)))

(defn copy-to-channel
  "Method.

  The copyToChannel() method of the `web.audio.AudioBuffer` interface
  the samples to the specified channel of the AudioBuffer, from
  source array.

  `myArrayBuffer.copyToChannel(source, channelNumber, startInChannel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyToChannel`"
  [this source channel-number start-in-channel]
  (-> this (.copyToChannel source channel-number start-in-channel)))

(defn sample-rate
  "Property.

  [Read Only]

  A floating-point value indicating the current sample rate of
  buffers data, in samples per second.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/sampleRate`"
  [this]
  (-> this (.-sampleRate)))

(defn length
  "Property.

  [Read Only]

  The length property of the `web.audio.AudioBuffer` interface
  an integer representing the length, in sample-frames, of the
  data stored in the buffer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/length`"
  [this]
  (-> this (.-length)))

(defn duration
  "Property.

  [Read Only]

  A double.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/duration`"
  [this]
  (-> this (.-duration)))

(defn number-of-channels
  "Property.

  [Read Only]

  An integer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.numberOfChannels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/numberOfChannels`"
  [this]
  (-> this (.-numberOfChannels)))

