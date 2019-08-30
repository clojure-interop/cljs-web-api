(ns web.audio.AudioWorkletProcessor
  "The AudioWorkletProcessor interface of the Web Audio API represents
  audio processing code behind a custom `web.audio.AudioWorkletNode`.
  lives in the `web.audio.AudioWorkletGlobalScope` and runs on
  Web Audio rendering thread. In turn, an `web.audio.AudioWorkletNode`
  on it runs on the main thread."
  (:refer-clojure :exclude []))

(defn process
  "Method.

  [Experimental]

  The process() method of an `web.audio.AudioWorkletProcessor`-derived
  implements the audio processing algorithm of the processor. Although
  method is not a part of the `web.audio.AudioWorkletProcessor`
  each class that derives from it must have it implemented.

  `var isActivelyProcessing = AudioWorkletProcessor.process(inputs, outputs, parameters);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process`"
  [this inputs outputs parameters]
  (-> this (.process inputs outputs parameters)))

(defn port
  "Property.

  [Read Only]
  [Experimental]

  The read-only port property of the `web.audio.AudioWorkletProcessor`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the processor and the `web.audio.AudioWorkletNode`
  which it belongs.

  `AudioWorkletProcessorInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`"
  [this]
  (-> this (.-port)))

(defn parameter-descriptors
  "Property.

  [Read Only]
  [Experimental]

  The read-only parameterDescriptors property of an `web.audio.AudioWorkletProcessor`-derived
  is a static getter, which returns an iterable of `web.audio.AudioParamDescriptor`-based

  `AudioWorkletProcessorSubclass.parameterDescriptors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`"
  [this]
  (-> this (.-parameterDescriptors)))

