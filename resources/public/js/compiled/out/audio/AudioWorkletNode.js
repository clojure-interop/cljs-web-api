// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioWorkletNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AudioWorkletNode() constructor creates a new `audio.AudioWorkletNode` object, which represents an `audio.AudioNode` with custom audio processing capabilities.
 * 
 *   context
 *   The `web.BaseAudioContext` instance this node will be associated with.
 *   name
 *   A string, which represents the name of the `audio.AudioWorkletProcessor` this node will be based on. A processor with the provided name must first be registered using the `audio.AudioWorkletGlobalScope.registerProcessor` method.
 *   options Optional
 *   An object based on the `audio.AudioWorkletNodeOptions` dictionary, which contains zero or more optional properties to configure the new node. The result of the structured clone algorithm applied to the object is also internally passed into the associated `audio.AudioWorkletProcessor's constructor` — this allows custom initialization of an underlying user-defined `audio.AudioWorkletProcessor`. Available properties are as follows:
 *   numberOfInputs Optional
 *   The value to initialize the `web.numberOfInputs` property to. Defaults to 1.
 *   numberOfOutputs Optional
 *   The value to initialize the `web.numberOfOutputs` property to. Defaults to 1.
 *   outputChannelCount Optional
 *   An array defining the number of channels for each output. For example, outputChannelCount: [n, m] specifies the number of channels in the first output to be n and the second output to be m. The array length must match numberOfOutputs.
 *   parameterData Optional
 *   An object containing the initial values of custom `audio.AudioParam` objects on this node (in its `web.parameters` property), with key being the name of a custom parameter and value being its initial value.
 *   processorOptions Optional
 *   Any additional data that can be used for custom initialization of the underlying `audio.AudioWorkletProcessor`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/AudioWorkletNode`
 */
audio.AudioWorkletNode.constructor$ = AudioWorkletNode;
/**
 * Property.
 * 
 *   The onprocessorerror property of the `audio.AudioWorkletNode`
 *   defines an event handler function to be called when the `web.processorerror`
 *   fires. This occurs when the underlying `audio.AudioWorkletProcessor`
 *   the node throws an exception in its constructor, the `web.process`
 *   or any user-defined class method.
 * 
 *   `audioWorkletNode.onprocessorerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`
 */
audio.AudioWorkletNode.onprocessorerror = (function audio$AudioWorkletNode$onprocessorerror(this$){
return this$.onprocessorerror();
});
/**
 * Property.
 * 
 *   The onprocessorerror property of the `audio.AudioWorkletNode`
 *   defines an event handler function to be called when the `web.processorerror`
 *   fires. This occurs when the underlying `audio.AudioWorkletProcessor`
 *   the node throws an exception in its constructor, the `web.process`
 *   or any user-defined class method.
 * 
 *   `audioWorkletNode.onprocessorerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/onprocessorerror`
 */
audio.AudioWorkletNode.set_onprocessorerror_BANG_ = (function audio$AudioWorkletNode$set_onprocessorerror_BANG_(this$,val){
return (this$["onprocessorerror"] = val);
});
/**
 * Property.
 * 
 *   The read-only parameters property of the `audio.AudioWorkletNode`
 *   returns the associated `audio.AudioParamMap` — that is, a Map-like
 *   of `audio.AudioParam` objects. They are instantiated during creation
 *   the underlying `audio.AudioWorkletProcessor` according to its
 *   static getter.
 * 
 *   `audioWorkletNodeInstance.parameters`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/parameters`
 */
audio.AudioWorkletNode.parameters = (function audio$AudioWorkletNode$parameters(this$){
return this$.parameters();
});
/**
 * Property.
 * 
 *   The read-only parameters property of the `audio.AudioWorkletNode`
 *   returns the associated `audio.AudioParamMap` — that is, a Map-like
 *   of `audio.AudioParam` objects. They are instantiated during creation
 *   the underlying `audio.AudioWorkletProcessor` according to its
 *   static getter.
 * 
 *   `audioWorkletNodeInstance.parameters`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/parameters`
 */
audio.AudioWorkletNode.set_parameters_BANG_ = (function audio$AudioWorkletNode$set_parameters_BANG_(this$,val){
return (this$["parameters"] = val);
});
/**
 * Property.
 * 
 *   The read-only port property of the `audio.AudioWorkletNode` interface
 *   the associated `web.MessagePort`. It can be used to communicate
 *   the node and its associated `audio.AudioWorkletProcessor`.
 * 
 *   `audioWorkletNodeInstance.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/port`
 */
audio.AudioWorkletNode.port = (function audio$AudioWorkletNode$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The read-only port property of the `audio.AudioWorkletNode` interface
 *   the associated `web.MessagePort`. It can be used to communicate
 *   the node and its associated `audio.AudioWorkletProcessor`.
 * 
 *   `audioWorkletNodeInstance.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/port`
 */
audio.AudioWorkletNode.set_port_BANG_ = (function audio$AudioWorkletNode$set_port_BANG_(this$,val){
return (this$["port"] = val);
});

//# sourceMappingURL=AudioWorkletNode.js.map?rel=1565798861968
