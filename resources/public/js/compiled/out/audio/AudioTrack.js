// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioTrack');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `audio.AudioTrack` property enabled specifies whether or
 *   the described audio track is currently enabled for use. If the
 *   is disabled by setting enabled to false, the track is muted and
 *   not produce audio.
 * 
 *   `isAudioEnabled = AudioTrack.enabled;
 * 
 *   AudioTrack.enabled = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled`
 */
audio.AudioTrack.enabled = (function audio$AudioTrack$enabled(this$){
return this$.enabled();
});
/**
 * Property.
 * 
 *   The `audio.AudioTrack` property enabled specifies whether or
 *   the described audio track is currently enabled for use. If the
 *   is disabled by setting enabled to false, the track is muted and
 *   not produce audio.
 * 
 *   `isAudioEnabled = AudioTrack.enabled;
 * 
 *   AudioTrack.enabled = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled`
 */
audio.AudioTrack.set_enabled_BANG_ = (function audio$AudioTrack$set_enabled_BANG_(this$,val){
return (this$["enabled"] = val);
});
/**
 * Property.
 * 
 *   The id property contains a string which uniquely identifies the
 *   represented by the `audio.AudioTrack`.
 * 
 *   `var trackID = AudioTrack.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/id`
 */
audio.AudioTrack.id = (function audio$AudioTrack$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The kind property contains a string indicating the category of
 *   contained in the `audio.AudioTrack`.
 * 
 *   `var trackKind = AudioTrack.kind;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/kind`
 */
audio.AudioTrack.kind = (function audio$AudioTrack$kind(this$){
return this$.kind();
});
/**
 * Property.
 * 
 *   The read-only `audio.AudioTrack` property label returns a string
 *   the audio track's human-readable label, if one is available;
 *   it returns an empty string.
 * 
 *   `var audioTrackLabel = AudioTrack.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/label`
 */
audio.AudioTrack.label = (function audio$AudioTrack$label(this$){
return this$.label();
});
/**
 * Property.
 * 
 *   The read-only `audio.AudioTrack` property language returns a
 *   identifying the language used in the audio track.
 * 
 *   `var audioTrackLanguage = AudioTrack.language;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/language`
 */
audio.AudioTrack.language = (function audio$AudioTrack$language(this$){
return this$.language();
});
/**
 * Property.
 * 
 *   The read-only `audio.AudioTrack` property sourceBuffer returns
 *   `web.SourceBuffer` that created the track, or null if the track
 *   not created by a `web.SourceBuffer` or the `web.SourceBuffer`
 *   been removed from the `media.MediaSource.sourceBuffers` attribute
 *   its parent media source.
 * 
 *   `var sourceBuffer = AudioTrack.sourceBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/sourceBuffer`
 */
audio.AudioTrack.source_buffer = (function audio$AudioTrack$source_buffer(this$){
return this$.sourceBuffer();
});

//# sourceMappingURL=AudioTrack.js.map?rel=1565798856954
