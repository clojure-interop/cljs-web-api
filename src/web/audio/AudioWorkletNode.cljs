(ns web.audio.AudioWorkletNode
  "The AudioWorkletNode interface of the Web Audio API represents
  base class for a user-defined `web.audio.AudioNode`, which can
  connected to an audio routing graph along with other nodes. It
  an associated `web.audio.AudioWorkletProcessor`, which does the
  audio processing in a Web Audio rendering thread."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The AudioWorkletNode() constructor creates a new `web.audio.AudioWorkletNode` object, which represents an `web.audio.AudioNode` with custom audio processing capabilities.

  context
  The `web.audio.BaseAudioContext` instance this node will be associated with.
  name
  A string, which represents the name of the `web.audio.AudioWorkletProcessor` this node will be based on. A processor with the provided name must first be registered using the `AudioWorkletGlobalScope.registerProcessor` method.
  options Optional
  An object based on the `web.audio.AudioWorkletNodeOptions` dictionary, which contains zero or more optional properties to configure the new node. The result of the structured clone algorithm applied to the object is also internally passed into the associated `AudioWorkletProcessor's constructor` — this allows custom initialization of an underlying user-defined `web.audio.AudioWorkletProcessor`. Available properties are as follows:
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

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/AudioWorkletNode`"
  js/AudioWorkletNode)

(defn port
  "Property.

  The read-only port property of the `web.audio.AudioWorkletNode`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the node and its associated `web.audio.AudioWorkletProcessor`.

  `audioWorkletNodeInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/port`"
  [this]
  (-> this (.port)))

(defn set-port!
  "Property.

  The read-only port property of the `web.audio.AudioWorkletNode`
  returns the associated `web.other.MessagePort`. It can be used
  communicate between the node and its associated `web.audio.AudioWorkletProcessor`.

  `audioWorkletNodeInstance.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/port`"
  [this val]
  (aset this "port" val))

(defn onprocessorerror
  "Property.

  The onprocessorerror property of the `web.audio.AudioWorkletNode`
  defines an event handler function to be called when the `processorerror`
  fires. This occurs when the underlying `web.audio.AudioWorkletProcessor`
  the node throws an exception in its constructor, the `process`
  or any user-defined class method.

  `audioWorkletNode.onprocessorerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`"
  [this]
  (-> this (.onprocessorerror)))

(defn set-onprocessorerror!
  "Property.

  The onprocessorerror property of the `web.audio.AudioWorkletNode`
  defines an event handler function to be called when the `processorerror`
  fires. This occurs when the underlying `web.audio.AudioWorkletProcessor`
  the node throws an exception in its constructor, the `process`
  or any user-defined class method.

  `audioWorkletNode.onprocessorerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`"
  [this val]
  (aset this "onprocessorerror" val))

(defn parameters
  "Property.

  The read-only parameters property of the `web.audio.AudioWorkletNode`
  returns the associated `web.audio.AudioParamMap` — that is, a
  collection of `web.audio.AudioParam` objects. They are instantiated
  creation of the underlying `web.audio.AudioWorkletProcessor`
  to its `parameterDescriptors` static getter.

  `audioWorkletNodeInstance.parameters`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/parameters`"
  [this]
  (-> this (.parameters)))

(defn set-parameters!
  "Property.

  The read-only parameters property of the `web.audio.AudioWorkletNode`
  returns the associated `web.audio.AudioParamMap` — that is, a
  collection of `web.audio.AudioParam` objects. They are instantiated
  creation of the underlying `web.audio.AudioWorkletProcessor`
  to its `parameterDescriptors` static getter.

  `audioWorkletNodeInstance.parameters`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/parameters`"
  [this val]
  (aset this "parameters" val))

