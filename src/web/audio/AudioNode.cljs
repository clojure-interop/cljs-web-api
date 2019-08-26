(ns web.audio.AudioNode
  "The AudioNode interface is a generic interface for representing
  audio processing module. Examples include:"
  (:refer-clojure :exclude []))

(defn connect
  "Method.

  If the destination is a node, connect() returns a reference to
  destination `web.audio.AudioNode` object, allowing you to chain
  connect() calls. In some browsers, older implementations of this
  return `js.undefined`.

  `var destinationNode = AudioNode.connect(destination, outputIndex, inputIndex);

  AudioNode.connect(destination, outputIndex);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/connect`"
  [this & args]
  (apply (-> this .-connect) (concat [this] args)))

(defn disconnect
  "Method.

  `js.undefined`

  `AudioNode.disconnect();

  AudioNode.disconnect(output);

  AudioNode.disconnect(destination);

  AudioNode.disconnect(destination, output);

  AudioNode.disconnect(destination, output, input);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/disconnect`"
  [this & args]
  (apply (-> this .-disconnect) (concat [this] args)))

(defn context
  "Property.

  The read-only context property of the `web.audio.AudioNode` interface
  the associated `web.audio.BaseAudioContext`, that is the object
  the processing graph the node is participating in.

  `var aContext = anAudioNode.context;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/context`"
  [this]
  (-> this (.context)))

(defn set-context!
  "Property.

  The read-only context property of the `web.audio.AudioNode` interface
  the associated `web.audio.BaseAudioContext`, that is the object
  the processing graph the node is participating in.

  `var aContext = anAudioNode.context;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/context`"
  [this val]
  (aset this "context" val))

(defn number-of-inputs
  "Property.

  The numberOfInputs property of the `web.audio.AudioNode` interface
  the number of inputs feeding the node.

  `var numInputs = audioNode.numberOfInputs;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfInputs`"
  [this]
  (-> this (.numberOfInputs)))

(defn set-number-of-inputs!
  "Property.

  The numberOfInputs property of the `web.audio.AudioNode` interface
  the number of inputs feeding the node.

  `var numInputs = audioNode.numberOfInputs;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfInputs`"
  [this val]
  (aset this "numberOfInputs" val))

(defn number-of-outputs
  "Property.

  The numberOfOutputs property of the `web.audio.AudioNode` interface
  the number of outputs coming out of the node.

  `var numOutputs = audioNode.numberOfOutputs;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfOutputs`"
  [this]
  (-> this (.numberOfOutputs)))

(defn set-number-of-outputs!
  "Property.

  The numberOfOutputs property of the `web.audio.AudioNode` interface
  the number of outputs coming out of the node.

  `var numOutputs = audioNode.numberOfOutputs;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfOutputs`"
  [this val]
  (aset this "numberOfOutputs" val))

(defn channel-count
  "Property.

  The channelCount property of the `web.audio.AudioNode` interface
  an integer used to determine how many channels are used when
  and down-mixing connections to any inputs to the node.

  `var oscillator = audioCtx.createOscillator();
  var channels = oscillator.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCount`"
  [this]
  (-> this (.channelCount)))

(defn set-channel-count!
  "Property.

  The channelCount property of the `web.audio.AudioNode` interface
  an integer used to determine how many channels are used when
  and down-mixing connections to any inputs to the node.

  `var oscillator = audioCtx.createOscillator();
  var channels = oscillator.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn channel-count-mode
  "Property.

  The possible values of channelCountMode and their meanings are:

  `var oscillator = audioCtx.createOscillator();
  oscillator.channelCountMode = 'explicit';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCountMode`"
  [this]
  (-> this (.channelCountMode)))

(defn set-channel-count-mode!
  "Property.

  The possible values of channelCountMode and their meanings are:

  `var oscillator = audioCtx.createOscillator();
  oscillator.channelCountMode = 'explicit';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCountMode`"
  [this val]
  (aset this "channelCountMode" val))

(defn channel-interpretation
  "Property.

  When the number of channels doesn't match between an input and
  output, up- or down-mixing happens according the following rules.
  can be somewhat controlled by setting the `AudioNode.channelInterpretation`
  to speakers or discrete:

  `var oscillator = audioCtx.createOscillator();
  oscillator.channelInterpretation = 'discrete';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelInterpretation`"
  [this]
  (-> this (.channelInterpretation)))

(defn set-channel-interpretation!
  "Property.

  When the number of channels doesn't match between an input and
  output, up- or down-mixing happens according the following rules.
  can be somewhat controlled by setting the `AudioNode.channelInterpretation`
  to speakers or discrete:

  `var oscillator = audioCtx.createOscillator();
  oscillator.channelInterpretation = 'discrete';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelInterpretation`"
  [this val]
  (aset this "channelInterpretation" val))

