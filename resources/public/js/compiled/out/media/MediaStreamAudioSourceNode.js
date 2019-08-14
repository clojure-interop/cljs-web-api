// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaStreamAudioSourceNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Web Audio API's MediaStreamAudioSourceNode() constructor creates and returns a new `media.MediaStreamAudioSourceNode` object which uses the first audio track of a given `media.MediaStream` as its source.
 * 
 *   context
 *   An `audio.AudioContext` representing the audio context you want the node to be associated with.
 *   options
 * 
 *   A `media.MediaStreamAudioSourceOptions` object defining the properties you want the MediaStreamAudioSourceNode to have:
 * 
 * 
 *   `web.mediaStream`
 *   A required property which specifies the `media.MediaStream` from which to obtain audio for the node.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode`
 */
media.MediaStreamAudioSourceNode.constructor$ = MediaStreamAudioSourceNode;
/**
 * Property.
 * 
 *   The `media.MediaStreamAudioSourceNode` interface's read-only
 *   property indicates the `media.MediaStream` that contains the
 *   track from which the node is receiving audio.
 * 
 *   `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`
 */
media.MediaStreamAudioSourceNode.media_stream = (function media$MediaStreamAudioSourceNode$media_stream(this$){
return this$.mediaStream();
});
/**
 * Property.
 * 
 *   The `media.MediaStreamAudioSourceNode` interface's read-only
 *   property indicates the `media.MediaStream` that contains the
 *   track from which the node is receiving audio.
 * 
 *   `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`
 */
media.MediaStreamAudioSourceNode.set_media_stream_BANG_ = (function media$MediaStreamAudioSourceNode$set_media_stream_BANG_(this$,val){
return (this$["mediaStream"] = val);
});

//# sourceMappingURL=MediaStreamAudioSourceNode.js.map?rel=1565798808315
