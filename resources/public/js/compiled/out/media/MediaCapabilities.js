// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaCapabilities');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The MediaCapabilities.decodingInfo() method, part of the Media
 *   API, returns a promise with the tested media configuration's
 *   this contains the three Boolean properties supported, smooth,
 *   powerefficient, which describe whether decoding the media described
 *   be supported, smooth, and powerefficient.
 * 
 *   `mediaCapabilities.decodingInfo(MediaDecodingConfiguration)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/decodingInfo`
 */
media.MediaCapabilities.decoding_info = (function media$MediaCapabilities$decoding_info(this$,media_decoding_configuration){
return this$.decodingInfo(media_decoding_configuration);
});
/**
 * Method.
 * 
 *   The MediaCapabilities.encodingInfo() method, part of the `media.MediaCapabilities`
 *   of the Media Capabilities API, returns a promise with the tested
 *   configuration's `media.MediaCapabilitiesInfo`; this contains
 *   three Boolean properties supported, smooth, and powerefficient,
 *   describe how compatible the device is with the type of media.
 * 
 *   `mediaCapabilities.encodingInfo(mediaEncodingConfiguration)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaCapabilities/encodingInfo`
 */
media.MediaCapabilities.encoding_info = (function media$MediaCapabilities$encoding_info(this$,media_encoding_configuration){
return this$.encodingInfo(media_encoding_configuration);
});

//# sourceMappingURL=MediaCapabilities.js.map?rel=1565798836151
