(ns web.audio.AudioWorkletGlobalScope
  "The AudioWorkletGlobalScope interface of the Web Audio API represents
  global execution context for user-supplied code, which defines
  `web.audio.AudioWorkletProcessor`-derived classes. Each `web.audio.BaseAudioContext`
  a single `web.audio.AudioWorklet` available under the `audioWorklet`
  which runs its code in a single AudioWorkletGlobalScope."
  (:refer-clojure :exclude []))

(defn register-processor
  "Method.

  The registerProcessor method of the `web.audio.AudioWorkletGlobalScope`
  registers a class constructor derived from `web.audio.AudioWorkletProcessor`
  under a specified name.

  `AudioWorkletGlobalScope.registerProcessor(name, processorCtor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope/registerProcessor`"
  [this name processor-ctor]
  (-> this (.registerProcessor name processor-ctor)))

(defn current-frame
  "Property.

  Returns an integer that represents the ever-increasing current
  of the audio block being processed. It is incremented by 128
  size of a render quantum) after the processing of each audio"
  [this]
  (-> this (.currentFrame)))

(defn set-current-frame!
  "Property.

  Returns an integer that represents the ever-increasing current
  of the audio block being processed. It is incremented by 128
  size of a render quantum) after the processing of each audio"
  [this val]
  (aset this "currentFrame" val))

