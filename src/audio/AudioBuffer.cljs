(ns audio.AudioBuffer
  "The AudioBuffer interface represents a short audio asset residing
  memory, created from an audio file using the `audio.AudioContext.decodeAudioData()`
  or from raw data using `audio.AudioContext.createBuffer()`. Once
  into an AudioBuffer, the audio can then be played by being passed
  an `audio.AudioBufferSourceNode`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AudioBuffer constructor of the Web Audio API creates a new `audio.AudioBuffer` object.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  options
  Options are as follows:

  length: The size of the audio buffer in sample-frames. To determine the length to use for a specific number of seconds of audio, use numSeconds * (sampleRate * numberOfChannels).
  numberOfChannels: The number of channels for the buffer. The default is 1, and all user agents are required to support at least 32 channels.
  sampleRate: The sample rate in Hz for the buffer. The default is the sample rate of the context used in constructing this object. User agents are required to support sample rates from 8,000 Hz to 96,000 Hz (but are allowed to go farther outside this range).




  Deprecated parameters


  context
  A reference to an `audio.AudioContext`. This parameter was removed from the spec.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/AudioBuffer`"
  js/AudioBuffer)

(defn copy-from-channel
  "Method.

  The copyFromChannel() method of the `audio.AudioBuffer` interface
  the audio sample data from the specified channel of the AudioBuffer
  a specified `web.Float32Array`.

  `myArrayBuffer.copyFromChannel(destination, channelNumber, startInChannel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyFromChannel`"
  [this destination channel-number start-in-channel]
  (-> this (.copyFromChannel destination channel-number start-in-channel)))

(defn copy-to-channel
  "Method.

  The copyToChannel() method of the `audio.AudioBuffer` interface
  the samples to the specified channel of the AudioBuffer, from
  source array.

  `myArrayBuffer.copyToChannel(source, channelNumber, startInChannel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyToChannel`"
  [this source channel-number start-in-channel]
  (-> this (.copyToChannel source channel-number start-in-channel)))

(defn get-channel-data
  "Method.

  The getChannelData() method of the `audio.AudioBuffer` Interface
  a `web.Float32Array` containing the PCM data associated with
  channel, defined by the channel parameter (with 0 representing
  first channel).

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  var nowBuffering = myArrayBuffer.getChannelData(channel);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData`"
  [this & args]
  (apply (-> this .-getChannelData) (concat [this] args)))

(defn duration
  "Property.

  A double.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/duration`"
  [this]
  (-> this (.duration)))

(defn set-duration!
  "Property.

  A double.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/duration`"
  [this val]
  (aset this "duration" val))

(defn length
  "Property.

  The length property of the `audio.AudioBuffer` interface returns
  integer representing the length, in sample-frames, of the PCM
  stored in the buffer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length property of the `audio.AudioBuffer` interface returns
  integer representing the length, in sample-frames, of the PCM
  stored in the buffer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/length`"
  [this val]
  (aset this "length" val))

(defn number-of-channels
  "Property.

  An integer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.numberOfChannels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/numberOfChannels`"
  [this]
  (-> this (.numberOfChannels)))

(defn set-number-of-channels!
  "Property.

  An integer.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.numberOfChannels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/numberOfChannels`"
  [this val]
  (aset this "numberOfChannels" val))

(defn sample-rate
  "Property.

  A floating-point value indicating the current sample rate of
  buffers data, in samples per second.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/sampleRate`"
  [this]
  (-> this (.sampleRate)))

(defn set-sample-rate!
  "Property.

  A floating-point value indicating the current sample rate of
  buffers data, in samples per second.

  `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
  myArrayBuffer.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

