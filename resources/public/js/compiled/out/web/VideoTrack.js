// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.VideoTrack');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The id property contains a string which uniquely identifies the
 *   represented by the `web.VideoTrack`.
 * 
 *   `var trackID = VideoTrack.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/id`
 */
web.VideoTrack.id = (function web$VideoTrack$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The kind property contains a string indicating the category of
 *   contained in the `web.VideoTrack`.
 * 
 *   `var trackKind = VideoTrack.kind;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/kind`
 */
web.VideoTrack.kind = (function web$VideoTrack$kind(this$){
return this$.kind();
});
/**
 * Property.
 * 
 *   The read-only `web.VideoTrack` property label returns a string
 *   the video track's human-readable label, if one is available;
 *   it returns an empty string.
 * 
 *   `var videoTrackLabel = VideoTrack.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/label`
 */
web.VideoTrack.label = (function web$VideoTrack$label(this$){
return this$.label();
});
/**
 * Property.
 * 
 *   The read-only `web.VideoTrack` property language returns a string
 *   the language used in the video track.
 * 
 *   `var videoTrackLanguage = VideoTrack.language;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/language`
 */
web.VideoTrack.language = (function web$VideoTrack$language(this$){
return this$.language();
});
/**
 * Property.
 * 
 *   The `web.VideoTrack` property selected controls whether or not
 *   particular video track is active.
 * 
 *   `isVideoSelected = VideoTrack.selected;
 * 
 *   VideoTrack.selected = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`
 */
web.VideoTrack.selected = (function web$VideoTrack$selected(this$){
return this$.selected();
});
/**
 * Property.
 * 
 *   The `web.VideoTrack` property selected controls whether or not
 *   particular video track is active.
 * 
 *   `isVideoSelected = VideoTrack.selected;
 * 
 *   VideoTrack.selected = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`
 */
web.VideoTrack.set_selected_BANG_ = (function web$VideoTrack$set_selected_BANG_(this$,val){
return (this$["selected"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.VideoTrack` property sourceBuffer returns
 *   `web.SourceBuffer` that created the track, or null if the track
 *   not created by a `web.SourceBuffer` or the `web.SourceBuffer`
 *   been removed from the `media.MediaSource.sourceBuffers` attribute
 *   its parent media source.
 * 
 *   `var sourceBuffer = VideoTrack.sourceBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/sourceBuffer`
 */
web.VideoTrack.source_buffer = (function web$VideoTrack$source_buffer(this$){
return this$.sourceBuffer();
});

//# sourceMappingURL=VideoTrack.js.map?rel=1565798842172
