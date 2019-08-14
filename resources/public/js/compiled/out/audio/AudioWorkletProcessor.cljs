(ns audio.AudioWorkletProcessor
  "The AudioWorkletProcessor interface of the Web Audio API represents
  audio processing code behind a custom `audio.AudioWorkletNode`.
  lives in the `audio.AudioWorkletGlobalScope` and runs on the
  Audio rendering thread. In turn, an `audio.AudioWorkletNode`
  on it runs on the main thread."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AudioWorkletProcessor() constructor creates a new `audio.AudioWorkletProcessor` object, which represents an underlying audio processing mechanism of an `audio.AudioWorkletNode`.

  options
  An object that is passed as options parameter to `audio.AudioWorkletNode constructor` and passed through the structured clone algorithm. The object is based on `audio.AudioWorkletNodeOptions` dictionary. Available properties are as follows:
  numberOfInputs Optional
  The value to initialize the `web.numberOfInputs` property to. Defaults to 1.
  numberOfOutputs Optional
  The value to initialize the `web.numberOfOutputs` property to. Defaults to 1.
  outputChannelCount Optional
  An array defining the number of channels for each output. For example, outputChannelCount: [n, m] specifies the number of channels in the first output to be n and the second output to be m. The array length must match numberOfOutputs.
  parameterData Optional
  An object containing the initial values of custom `audio.AudioParam` objects on this node (in its `web.parameters` property), with key being the name of a custom parameter and value being its initial value.
  processorOptions Optional
  Any additional data that can be used for custom initialization of the underlying `audio.AudioWorkletProcessor`.
  Note that there are default values for the first two properties, so even if there are no options object passed to the `audio.AudioWorkletNode constructor`, the options object passed by the node to the AudioWorkletProcessor constructor will exist and at minimum have numberOfInputs and numberOfOutputs.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor`"
  js/AudioWorkletProcessor)

(defn process
  "Method.

  The process() method of an `audio.AudioWorkletProcessor`-derived
  implements the audio processing algorithm of the processor. Although
  method is not a part of the `audio.AudioWorkletProcessor` interface,
  class that derives from it must have it implemented.

  `var isActivelyProcessing = AudioWorkletProcessor.process(inputs, outputs, parameters);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process`"
  [this inputs outputs parameters]
  (-> this (.process inputs outputs parameters)))

(defn parameter-descriptors
  "Property.

  The read-only parameterDescriptors property of an `audio.AudioWorkletProcessor`-derived
  is a static getter, which returns an iterable of `audio.AudioParamDescriptor`-based

  `AudioWorkletProcessorSubclass.parameterDescriptors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`"
  [this]
  (-> this (.parameterDescriptors)))

(defn set-parameter-descriptors!
  "Property.

  The read-only parameterDescriptors property of an `audio.AudioWorkletProcessor`-derived
  is a static getter, which returns an iterable of `audio.AudioParamDescriptor`-based

  `AudioWorkletProcessorSubclass.parameterDescriptors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`"
  [this val]
  (aset this "parameterDescriptors" val))

(defn port
  "Property.

  The read-only port property of the `audio.AudioWorkletProcessor`
  returns the associated `web.MessagePort`. It can be used to communicate
  the processor and the `audio.AudioWorkletNode` to which it belongs.

  `AudioWorkletProcessorInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`"
  [this]
  (-> this (.port)))

(defn set-port!
  "Property.

  The read-only port property of the `audio.AudioWorkletProcessor`
  returns the associated `web.MessagePort`. It can be used to communicate
  the processor and the `audio.AudioWorkletNode` to which it belongs.

  `AudioWorkletProcessorInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`"
  [this val]
  (aset this "port" val))

