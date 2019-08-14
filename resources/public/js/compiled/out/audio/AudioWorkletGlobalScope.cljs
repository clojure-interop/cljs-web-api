(ns audio.AudioWorkletGlobalScope
  "The AudioWorkletGlobalScope interface of the Web Audio API represents
  global execution context for user-supplied code, which defines
  `audio.AudioWorkletProcessor`-derived classes. Each `web.BaseAudioContext`
  a single `audio.AudioWorklet` available under the `web.audioWorklet`
  which runs its code in a single AudioWorkletGlobalScope."
  (:refer-clojure :exclude []))

(defn register-processor
  "Method.

  The registerProcessor method of the `audio.AudioWorkletGlobalScope`
  registers a class constructor derived from `audio.AudioWorkletProcessor`
  under a specified name.

  `AudioWorkletGlobalScope.registerProcessor(name, processorCtor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope/registerProcessor`"
  [this name processor-ctor]
  (-> this (.registerProcessor name processor-ctor)))

