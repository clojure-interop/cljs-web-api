(ns web.audio.OfflineAudioContext
  "The OfflineAudioContext interface is an `web.audio.AudioContext`
  representing an audio-processing graph built from linked together
  In contrast with a standard `web.audio.AudioContext`, an OfflineAudioContext
  render the audio to the device hardware; instead, it generates
  as fast as it can, and outputs the result to an `web.audio.AudioBuffer`."
  (:refer-clojure :exclude []))

(defn suspend
  "Method.

  The suspend() method of the `web.audio.OfflineAudioContext` interface
  a suspension of the time progression in the audio context at
  specified time and returns a promise. This is generally useful
  the time of manipulating the audio graph synchronously on OfflineAudioContext.

  `OfflineAudioContext.suspend(suspendTime).then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/suspend`"
  [this suspend-time]
  (-> this (.suspend suspend-time)))

(defn start-rendering
  "Method.

  The startRendering() method of the `web.audio.OfflineAudioContext`
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
  (-> this .-startRendering (.apply this (clj->js args))))

(defn resume
  "Method.

  The resume() method of the `web.audio.OfflineAudioContext` interface
  the progression of time in an audio context that has been suspended.
  promise resolves immediately because the OfflineAudioContext
  not require the audio hardware. If the context is not currently
  or the rendering has not started, the promise is rejected with

  `OfflineAudioContext.resume().then(function() { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/resume`"
  [this & args]
  (-> this .-resume (.apply this (clj->js args))))

(defn length
  "Property.

  [Read Only]

  The length property of the `web.audio.OfflineAudioContext` interface
  an integer representing the size of the buffer in sample-frames.

  `var length = OfflineAudioContext.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/length`"
  [this]
  (-> this (.-length)))

(defn oncomplete
  "Property.

  When processing is complete, you might want to use the oncomplete
  the prompt the user that the audio can now be played, and enable
  play button.

  `var offlineAudioCtx = new OfflineAudioContext();
  offlineAudioCtx.oncomplete = function() { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/oncomplete`"
  [this]
  (-> this (.-oncomplete)))

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

