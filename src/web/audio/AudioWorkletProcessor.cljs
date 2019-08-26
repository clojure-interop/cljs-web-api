(ns web.audio.AudioWorkletProcessor
  "The AudioWorkletProcessor interface of the Web Audio API represents
  audio processing code behind a custom `web.audio.AudioWorkletNode`.
  lives in the `web.audio.AudioWorkletGlobalScope` and runs on
  Web Audio rendering thread. In turn, an `web.audio.AudioWorkletNode`
  on it runs on the main thread."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AudioWorkletProcessor() constructor creates a new `web.audio.AudioWorkletProcessor` object, which represents an underlying audio processing mechanism of an `web.audio.AudioWorkletNode`.

  options
  An object that is passed as options parameter to `AudioWorkletNode constructor` and passed through the structured clone algorithm. The object is based on `web.audio.AudioWorkletNodeOptions` dictionary. Available properties are as follows:
  numberOfInputs Optional
  The value to initialize the `numberOfInputs` property to. Defaults to 1.
  numberOfOutputs Optional
  The value to initialize the `numberOfOutputs` property to. Defaults to 1.
  outputChannelCount Optional
  An array defining the number of channels for each output. For example, outputChannelCount: [n, m] specifies the number of channels in the first output to be n and the second output to be m. The array length must match numberOfOutputs.
  parameterData Optional
  An object containing the initial values of custom `web.audio.AudioParam` objects on this node (in its `parameters` property), with key being the name of a custom parameter and value being its initial value.
  processorOptions Optional
  Any additional data that can be used for custom initialization of the underlying `web.audio.AudioWorkletProcessor`.
  Note that there are default values for the first two properties, so even if there are no options object passed to the `AudioWorkletNode constructor`, the options object passed by the node to the AudioWorkletProcessor constructor will exist and at minimum have numberOfInputs and numberOfOutputs.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor`"
  js/AudioWorkletProcessor)

(defn process
  "Method.

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

  The read-only port property of the `web.audio.AudioWorkletProcessor`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the processor and the `web.audio.AudioWorkletNode`
  which it belongs.

  `AudioWorkletProcessorInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`"
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  The read-only port property of the `web.audio.AudioWorkletProcessor`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the processor and the `web.audio.AudioWorkletNode`
  which it belongs.

  `AudioWorkletProcessorInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`"
  [this val]
  (aset this "port" val))

(defn parameter-descriptors
  "Property.

  The read-only parameterDescriptors property of an `web.audio.AudioWorkletProcessor`-derived
  is a static getter, which returns an iterable of `web.audio.AudioParamDescriptor`-based

  `AudioWorkletProcessorSubclass.parameterDescriptors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`"
  [this]
  (-> this (.-parameterDescriptors)))

(defn set-parameter-descriptors!
  "Property.

  The read-only parameterDescriptors property of an `web.audio.AudioWorkletProcessor`-derived
  is a static getter, which returns an iterable of `web.audio.AudioParamDescriptor`-based

  `AudioWorkletProcessorSubclass.parameterDescriptors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`"
  [this val]
  (aset this "parameterDescriptors" val))

