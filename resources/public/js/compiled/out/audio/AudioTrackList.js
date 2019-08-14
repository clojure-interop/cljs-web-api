// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioTrackList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `audio.AudioTrackList` method getTrackById() returns the
 *   `audio.AudioTrack` object from the track list whose `web.id`
 *   the specified string.
 * 
 *   `var theTrack = AudioTrackList.getTrackById(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/getTrackById`
 */
audio.AudioTrackList.get_track_by_id = (function audio$AudioTrackList$get_track_by_id(this$,id){
return this$.getTrackById(id);
});
/**
 * Property.
 * 
 *   The read-only `audio.AudioTrackList` property length returns
 *   number of entries in the AudioTrackList, each of which is an
 *   representing one audio track in the media element.
 * 
 *   `var trackCount = AudioTrackList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/length`
 */
audio.AudioTrackList.length = (function audio$AudioTrackList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose audio tracks
 *   AudioTrackList represents.
 * 
 *   `AudioTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`
 */
audio.AudioTrackList.onaddtrack = (function audio$AudioTrackList$onaddtrack(this$){
return this$.onaddtrack();
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose audio tracks
 *   AudioTrackList represents.
 * 
 *   `AudioTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onaddtrack`
 */
audio.AudioTrackList.set_onaddtrack_BANG_ = (function audio$AudioTrackList$set_onaddtrack_BANG_(this$,val){
return (this$["onaddtrack"] = val);
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that one or
 *   of the `audio.AudioTrack`s in the AudioTrackList have been enabled
 *   disabled.
 * 
 *   `AudioTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`
 */
audio.AudioTrackList.onchange = (function audio$AudioTrackList$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that one or
 *   of the `audio.AudioTrack`s in the AudioTrackList have been enabled
 *   disabled.
 * 
 *   `AudioTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onchange`
 */
audio.AudioTrackList.set_onchange_BANG_ = (function audio$AudioTrackList$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that an audio track
 *   been removed from the media element, and therefore also from
 *   AudioTrackList.
 * 
 *   `AudioTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`
 */
audio.AudioTrackList.onremovetrack = (function audio$AudioTrackList$onremovetrack(this$){
return this$.onremovetrack();
});
/**
 * Property.
 * 
 *   The `audio.AudioTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that an audio track
 *   been removed from the media element, and therefore also from
 *   AudioTrackList.
 * 
 *   `AudioTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList/onremovetrack`
 */
audio.AudioTrackList.set_onremovetrack_BANG_ = (function audio$AudioTrackList$set_onremovetrack_BANG_(this$,val){
return (this$["onremovetrack"] = val);
});

//# sourceMappingURL=AudioTrackList.js.map?rel=1565798861482
