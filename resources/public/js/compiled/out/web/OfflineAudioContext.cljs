(ns web.OfflineAudioContext
  "The OfflineAudioContext interface is an `audio.AudioContext`
  representing an audio-processing graph built from linked together
  In contrast with a standard `audio.AudioContext`, an OfflineAudioContext
  render the audio to the device hardware; instead, it generates
  as fast as it can, and outputs the result to an `audio.AudioBuffer`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The OfflineAudioContext() constructor—part of the Web Audio API—creates and returns a new `web.OfflineAudioContext` object instance, which can then be used to render audio to an `audio.AudioBuffer` rather than to an audio output device.

  You can specify the parameters for the OfflineAudioContext() constructor as either the same set of parameters as are inputs into the `audio.AudioContext.createBuffer()` method, or by passing those parameters in an options object. Either way, the individual parameters are the same.


  numberOfChannels
  An integer specifying the number of channels the resulting `audio.AudioBuffer` should have.
  length
  An integer specifying the size of the buffer to create for the audio context, in sample-frames, where one sample-frame is a unit that can contain a single sample of audio data for every channel in the audio data. For example, a 5-second buffer with a sampleRate of 48000Hz would have a length of 5 * 48000 = 240000 sample-frames.
  sampleRate
  The sample-rate of the linear audio data in sample-frames per second. All user agents are required to support a range of 22050Hz to 96000Hz, and may support a wider range than that. The most commonly-used rate is 44100Hz, which is the sample rate used by CD audio.


  It is important to note that, whereas you can create a new `audio.AudioContext` using the `web.new AudioContext()` constructor with no arguments, the OfflineAudioContext() constructor requires three arguments, since it needs to create an AudioBuffer. This works in exactly the same way as when you create a new `audio.AudioBuffer` with the `audio.AudioContext.createBuffer()` method. For more detail, read Audio buffers: frames, samples and channels from our Basic concepts guide.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/OfflineAudioContext`"
  js/OfflineAudioContext)

(defn resume
  "Method.

  The resume() method of the `web.OfflineAudioContext` interface
  the progression of time in an audio context that has been suspended.
  promise resolves immediately because the OfflineAudioContext
  not require the audio hardware. If the context is not currently
  or the rendering has not started, the promise is rejected with

  `OfflineAudioContext.resume().then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/resume`"
  [this & args]
  (apply (-> this .-resume) (concat [this] args)))

(defn start-rendering
  "Method.

  The startRendering() method of the `web.OfflineAudioContext`
  starts rendering the audio graph, taking into account the current
  and the current scheduled changes.

  `Event-based version:



  offlineAudioCtx.startRendering();
  offlineAudioCtx.oncomplete = function(e) {
  // e.renderedBuffer contains the output buffer
  }

  Promise-based version:



  offlineAudioCtx.startRendering().then(function(buffer) {
  // buffer contains the output buffer
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/startRendering`"
  [this & args]
  (apply (-> this .-startRendering) (concat [this] args)))

(defn suspend
  "Method.

  The suspend() method of the `web.OfflineAudioContext` interface
  a suspension of the time progression in the audio context at
  specified time and returns a promise. This is generally useful
  the time of manipulating the audio graph synchronously on OfflineAudioContext.

  `OfflineAudioContext.suspend(suspendTime).then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/suspend`"
  [this suspend-time]
  (-> this (.suspend suspend-time)))

(defn length
  "Property.

  The length property of the `web.OfflineAudioContext` interface
  an integer representing the size of the buffer in sample-frames.

  `var length = OfflineAudioContext.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/length`"
  [this]
  (-> this (.length)))

(defn set-length!
  "Property.

  The length property of the `web.OfflineAudioContext` interface
  an integer representing the size of the buffer in sample-frames.

  `var length = OfflineAudioContext.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/length`"
  [this val]
  (aset this "length" val))

(defn oncomplete
  "Property.

  When processing is complete, you might want to use the oncomplete
  the prompt the user that the audio can now be played, and enable
  play button.

  `var offlineAudioCtx = new OfflineAudioContext();
  offlineAudioCtx.oncomplete = function() { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/oncomplete`"
  [this]
  (-> this (.oncomplete)))

(defn set-oncomplete!
  "Property.

  When processing is complete, you might want to use the oncomplete
  the prompt the user that the audio can now be played, and enable
  play button.

  `var offlineAudioCtx = new OfflineAudioContext();
  offlineAudioCtx.oncomplete = function() { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/oncomplete`"
  [this val]
  (aset this "oncomplete" val))

