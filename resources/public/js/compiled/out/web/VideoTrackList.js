// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.VideoTrackList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `web.VideoTrackList` method getTrackById() returns the first
 *   object from the track list whose `web.id` matches the specified
 * 
 *   `var theTrack = VideoTrackList.getTrackById(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/getTrackById`
 */
web.VideoTrackList.get_track_by_id = (function web$VideoTrackList$get_track_by_id(this$,id){
return this$.getTrackById(id);
});
/**
 * Property.
 * 
 *   The read-only `web.VideoTrackList` property length returns the
 *   of entries in the VideoTrackList, each of which is a `web.VideoTrack`
 *   one video track in the media element.
 * 
 *   `var trackCount = VideoTrackList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/length`
 */
web.VideoTrackList.length = (function web$VideoTrackList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose video tracks
 *   VideoTrackList represents.
 * 
 *   `VideoTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`
 */
web.VideoTrackList.onaddtrack = (function web$VideoTrackList$onaddtrack(this$){
return this$.onaddtrack();
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose video tracks
 *   VideoTrackList represents.
 * 
 *   `VideoTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onaddtrack`
 */
web.VideoTrackList.set_onaddtrack_BANG_ = (function web$VideoTrackList$set_onaddtrack_BANG_(this$,val){
return (this$["onaddtrack"] = val);
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that a `web.VideoTrack`
 *   the VideoTrackList has been made active.
 * 
 *   `VideoTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`
 */
web.VideoTrackList.onchange = (function web$VideoTrackList$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that a `web.VideoTrack`
 *   the VideoTrackList has been made active.
 * 
 *   `VideoTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onchange`
 */
web.VideoTrackList.set_onchange_BANG_ = (function web$VideoTrackList$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that a video track has
 *   removed from the media element, and therefore also from the VideoTrackList.
 * 
 *   `VideoTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`
 */
web.VideoTrackList.onremovetrack = (function web$VideoTrackList$onremovetrack(this$){
return this$.onremovetrack();
});
/**
 * Property.
 * 
 *   The `web.VideoTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that a video track has
 *   removed from the media element, and therefore also from the VideoTrackList.
 * 
 *   `VideoTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/onremovetrack`
 */
web.VideoTrackList.set_onremovetrack_BANG_ = (function web$VideoTrackList$set_onremovetrack_BANG_(this$,val){
return (this$["onremovetrack"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.VideoTrackList` property selectedIndex returns
 *   index of the currently selected track, if any, or -1 otherwise.
 * 
 *   `var index = VideoTrackList.selectedIndex;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList/selectedIndex`
 */
web.VideoTrackList.selected_index = (function web$VideoTrackList$selected_index(this$){
return this$.selectedIndex();
});

//# sourceMappingURL=VideoTrackList.js.map?rel=1565798840668
