// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaStreamAudioDestinationNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaStreamAudioDestinationNode() constructor of the Web Audio API creates a new `media.MediaStreamAudioDestinationNode` object instance.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   An `audio.AudioContext` representing the audio context you want the node to be associated with.
 *   options Optional
 *   An AudioNodeOptions dictionary object defining the properties you want the MediaStreamAudioDestinationNode to have.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode`
 */
media.MediaStreamAudioDestinationNode.constructor$ = MediaStreamAudioDestinationNode;
/**
 * Property.
 * 
 *   A `media.MediaStream`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var destination = audioCtx.createMediaStreamDestination();
 *   var myStream = destination.stream;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/stream`
 */
media.MediaStreamAudioDestinationNode.stream = (function media$MediaStreamAudioDestinationNode$stream(this$){
return this$.stream();
});
/**
 * Property.
 * 
 *   A `media.MediaStream`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var destination = audioCtx.createMediaStreamDestination();
 *   var myStream = destination.stream;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/stream`
 */
media.MediaStreamAudioDestinationNode.set_stream_BANG_ = (function media$MediaStreamAudioDestinationNode$set_stream_BANG_(this$,val){
return (this$["stream"] = val);
});

//# sourceMappingURL=MediaStreamAudioDestinationNode.js.map?rel=1565798818091
