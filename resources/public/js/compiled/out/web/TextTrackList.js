// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TextTrackList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `web.TextTrackList` method getTrackById() returns the first
 *   object from the track list whose id matches the specified string.
 * 
 *   `var theTrack = TextTrackList.getTrackById(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/getTrackById`
 */
web.TextTrackList.get_track_by_id = (function web$TextTrackList$get_track_by_id(this$,id){
return this$.getTrackById(id);
});
/**
 * Property.
 * 
 *   The read-only `web.TextTrackList` property length returns the
 *   of entries in the TextTrackList, each of which is a `web.TextTrack`
 *   one track in the media element.
 * 
 *   `var trackCount = TextTrackList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/length`
 */
web.TextTrackList.length = (function web$TextTrackList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose text tracks the
 *   represents.
 * 
 *   `TextTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onaddtrack`
 */
web.TextTrackList.onaddtrack = (function web$TextTrackList$onaddtrack(this$){
return this$.onaddtrack();
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` property onaddtrack is an event handler
 *   is called when the addtrack event occurs, indicating that a new
 *   track has been added to the media element whose text tracks the
 *   represents.
 * 
 *   `TextTrackList.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onaddtrack`
 */
web.TextTrackList.set_onaddtrack_BANG_ = (function web$TextTrackList$set_onaddtrack_BANG_(this$,val){
return (this$["onaddtrack"] = val);
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that a change
 *   occurred on a `web.TextTrack` in the VideoTrackList.
 * 
 *   `TextTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onchange`
 */
web.TextTrackList.onchange = (function web$TextTrackList$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` property onchange is an event handler
 *   is called when the change event occurs, indicating that a change
 *   occurred on a `web.TextTrack` in the VideoTrackList.
 * 
 *   `TextTrackList.onchange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onchange`
 */
web.TextTrackList.set_onchange_BANG_ = (function web$TextTrackList$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that a text track has
 *   removed from the media element, and therefore also from the TextTrackList.
 * 
 *   `TextTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onremovetrack`
 */
web.TextTrackList.onremovetrack = (function web$TextTrackList$onremovetrack(this$){
return this$.onremovetrack();
});
/**
 * Property.
 * 
 *   The `web.TextTrackList` onremovetrack event handler is called
 *   the removetrack event occurs, indicating that a text track has
 *   removed from the media element, and therefore also from the TextTrackList.
 * 
 *   `TextTrackList.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList/onremovetrack`
 */
web.TextTrackList.set_onremovetrack_BANG_ = (function web$TextTrackList$set_onremovetrack_BANG_(this$,val){
return (this$["onremovetrack"] = val);
});

//# sourceMappingURL=TextTrackList.js.map?rel=1565798811212
