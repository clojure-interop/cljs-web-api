// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioWorkletProcessor');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AudioWorkletProcessor() constructor creates a new `audio.AudioWorkletProcessor` object, which represents an underlying audio processing mechanism of an `audio.AudioWorkletNode`.
 * 
 *   options
 *   An object that is passed as options parameter to `audio.AudioWorkletNode constructor` and passed through the structured clone algorithm. The object is based on `audio.AudioWorkletNodeOptions` dictionary. Available properties are as follows:
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
 *   Note that there are default values for the first two properties, so even if there are no options object passed to the `audio.AudioWorkletNode constructor`, the options object passed by the node to the AudioWorkletProcessor constructor will exist and at minimum have numberOfInputs and numberOfOutputs.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor`
 */
audio.AudioWorkletProcessor.constructor$ = AudioWorkletProcessor;
/**
 * Method.
 * 
 *   The process() method of an `audio.AudioWorkletProcessor`-derived
 *   implements the audio processing algorithm of the processor. Although
 *   method is not a part of the `audio.AudioWorkletProcessor` interface,
 *   class that derives from it must have it implemented.
 * 
 *   `var isActivelyProcessing = AudioWorkletProcessor.process(inputs, outputs, parameters);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/process`
 */
audio.AudioWorkletProcessor.process = (function audio$AudioWorkletProcessor$process(this$,inputs,outputs,parameters){
return this$.process(inputs,outputs,parameters);
});
/**
 * Property.
 * 
 *   The read-only parameterDescriptors property of an `audio.AudioWorkletProcessor`-derived
 *   is a static getter, which returns an iterable of `audio.AudioParamDescriptor`-based
 * 
 *   `AudioWorkletProcessorSubclass.parameterDescriptors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`
 */
audio.AudioWorkletProcessor.parameter_descriptors = (function audio$AudioWorkletProcessor$parameter_descriptors(this$){
return this$.parameterDescriptors();
});
/**
 * Property.
 * 
 *   The read-only parameterDescriptors property of an `audio.AudioWorkletProcessor`-derived
 *   is a static getter, which returns an iterable of `audio.AudioParamDescriptor`-based
 * 
 *   `AudioWorkletProcessorSubclass.parameterDescriptors;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors`
 */
audio.AudioWorkletProcessor.set_parameter_descriptors_BANG_ = (function audio$AudioWorkletProcessor$set_parameter_descriptors_BANG_(this$,val){
return (this$["parameterDescriptors"] = val);
});
/**
 * Property.
 * 
 *   The read-only port property of the `audio.AudioWorkletProcessor`
 *   returns the associated `web.MessagePort`. It can be used to communicate
 *   the processor and the `audio.AudioWorkletNode` to which it belongs.
 * 
 *   `AudioWorkletProcessorInstance.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`
 */
audio.AudioWorkletProcessor.port = (function audio$AudioWorkletProcessor$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The read-only port property of the `audio.AudioWorkletProcessor`
 *   returns the associated `web.MessagePort`. It can be used to communicate
 *   the processor and the `audio.AudioWorkletNode` to which it belongs.
 * 
 *   `AudioWorkletProcessorInstance.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/port`
 */
audio.AudioWorkletProcessor.set_port_BANG_ = (function audio$AudioWorkletProcessor$set_port_BANG_(this$,val){
return (this$["port"] = val);
});

//# sourceMappingURL=AudioWorkletProcessor.js.map?rel=1565798811625
