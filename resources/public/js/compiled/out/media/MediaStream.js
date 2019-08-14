// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaStream');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaStream() constructor returns a newly-created `media.MediaStream`, which serves as a collection of media tracks, each represented by a `media.MediaStreamTrack` object.
 * 
 *   stream
 *   A different `media.MediaStream` object whose tracks are added to the newly-created stream automatically. The tracks are not removed from the original stream, so they're shared by the two streams.
 *   tracks
 *   An `web.Array` of `media.MediaStreamTrack` objects, one for each track to add to the stream.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream`
 */
media.MediaStream.constructor$ = MediaStream;
/**
 * Method.
 * 
 *   The MediaStream.addTrack() method adds a new track to the stream.
 *   track is specified as a parameter of type `media.MediaStreamTrack`.
 * 
 *   `stream.addTrack(track);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/addTrack`
 */
media.MediaStream.add_track = (function media$MediaStream$add_track(this$,track){
return this$.addTrack(track);
});
/**
 * Method.
 * 
 *   The clone() method of the `media.MediaStream` interface creates
 *   duplicate of the MediaStream. This new MediaStream object has
 *   new unique `web.id` and contains clones of every `media.MediaStreamTrack`
 *   by the MediaStream on which clone() was called.
 * 
 *   `var stream = MediaStream.clone();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/clone`
 */
media.MediaStream.clone = (function media$MediaStream$clone(this$){
return this$.clone();
});
/**
 * Method.
 * 
 *   The getAudioTracks() method of the `media.MediaStream` interface
 *   a sequence that represents all the `media.MediaStreamTrack` objects
 *   this stream's track set where `media.MediaStreamTrack.kind` is
 * 
 *   `var mediaStreamTracks = mediaStream.getAudioTracks()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getAudioTracks`
 */
media.MediaStream.get_audio_tracks = (function media$MediaStream$get_audio_tracks(this$){
return this$.getAudioTracks();
});
/**
 * Method.
 * 
 *   The MediaStream.getTrackById() method returns a `media.MediaStreamTrack`
 *   representing the track with the specified ID string. If there
 *   no track with the specified ID, this method returns null.
 * 
 *   `var track = MediaStream.getTrackById(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTrackById`
 */
media.MediaStream.get_track_by_id = (function media$MediaStream$get_track_by_id(this$,id){
return this$.getTrackById(id);
});
/**
 * Method.
 * 
 *   The getTracks() method of the `media.MediaStream` interface returns
 *   sequence that represents all the `media.MediaStreamTrack` objects
 *   this stream's track set, regardless of `media.MediaStreamTrack.kind`.
 * 
 *   `var mediaStreamTracks = mediaStream.getTracks()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getTracks`
 */
media.MediaStream.get_tracks = (function media$MediaStream$get_tracks(this$){
return this$.getTracks();
});
/**
 * Method.
 * 
 *   The getVideoTracks() method of the `media.MediaStream` interface
 *   a sequence of `media.MediaStreamTrack` objects representing the
 *   tracks in this stream.
 * 
 *   `var mediaStreamTracks[] = mediaStream.getVideoTracks();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks`
 */
media.MediaStream.get_video_tracks = (function media$MediaStream$get_video_tracks(this$){
return this$.getVideoTracks();
});
/**
 * Property.
 * 
 *   The active read-only property of the `media.MediaStream` interface
 *   a Boolean value which is true if the stream is currently active;
 *   it returns false. A stream is considered active if at least one
 *   its `media.MediaStreamTrack`s is not in the `media.MediaStreamTrack.ended`
 *   Once every track has ended, the stream's active property becomes
 * 
 *   `var isActive = MediaStream.active;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active`
 */
media.MediaStream.active = (function media$MediaStream$active(this$){
return this$.active();
});
/**
 * Property.
 * 
 *   The active read-only property of the `media.MediaStream` interface
 *   a Boolean value which is true if the stream is currently active;
 *   it returns false. A stream is considered active if at least one
 *   its `media.MediaStreamTrack`s is not in the `media.MediaStreamTrack.ended`
 *   Once every track has ended, the stream's active property becomes
 * 
 *   `var isActive = MediaStream.active;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/active`
 */
media.MediaStream.set_active_BANG_ = (function media$MediaStream$set_active_BANG_(this$,val){
return (this$["active"] = val);
});
/**
 * Property.
 * 
 *   The ended read-only property of the `media.MediaStream` interface
 *   a Boolean value which is true if the stream has been completely
 *   or false if the end of the stream has not been reached. This
 *   once the ended event has been fired.
 * 
 *   `var hasEnded = MediaStream.ended;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/ended`
 */
media.MediaStream.ended = (function media$MediaStream$ended(this$){
return this$.ended();
});
/**
 * Property.
 * 
 *   The ended read-only property of the `media.MediaStream` interface
 *   a Boolean value which is true if the stream has been completely
 *   or false if the end of the stream has not been reached. This
 *   once the ended event has been fired.
 * 
 *   `var hasEnded = MediaStream.ended;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/ended`
 */
media.MediaStream.set_ended_BANG_ = (function media$MediaStream$set_ended_BANG_(this$,val){
return (this$["ended"] = val);
});
/**
 * Property.
 * 
 *   The MediaStream.id() read-only property is a `dom.DOMString`
 *   36 characters denoting a unique identifier (GUID) for the object.
 * 
 *   `var id = mediaStream.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/id`
 */
media.MediaStream.id = (function media$MediaStream$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The MediaStream.onaddtrack property is an `web.EventHandler`
 *   specifies a function to be called when the addtrack event occurs
 *   a `media.MediaStream` instance. This happens when a new track
 *   any kind is added to the media stream.
 * 
 *   `MediaStream.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`
 */
media.MediaStream.onaddtrack = (function media$MediaStream$onaddtrack(this$){
return this$.onaddtrack();
});
/**
 * Property.
 * 
 *   The MediaStream.onaddtrack property is an `web.EventHandler`
 *   specifies a function to be called when the addtrack event occurs
 *   a `media.MediaStream` instance. This happens when a new track
 *   any kind is added to the media stream.
 * 
 *   `MediaStream.onaddtrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onaddtrack`
 */
media.MediaStream.set_onaddtrack_BANG_ = (function media$MediaStream$set_onaddtrack_BANG_(this$,val){
return (this$["onaddtrack"] = val);
});
/**
 * Property.
 * 
 *   The MediaStream.onremovetrack property is an `web.EventHandler`
 *   specifies a function to be called when the removetrack event
 *   on a `media.MediaStream` instance. This happens when a track
 *   any kind is removed from the media stream.
 * 
 *   `MediaStream.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`
 */
media.MediaStream.onremovetrack = (function media$MediaStream$onremovetrack(this$){
return this$.onremovetrack();
});
/**
 * Property.
 * 
 *   The MediaStream.onremovetrack property is an `web.EventHandler`
 *   specifies a function to be called when the removetrack event
 *   on a `media.MediaStream` instance. This happens when a track
 *   any kind is removed from the media stream.
 * 
 *   `MediaStream.onremovetrack = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/onremovetrack`
 */
media.MediaStream.set_onremovetrack_BANG_ = (function media$MediaStream$set_onremovetrack_BANG_(this$,val){
return (this$["onremovetrack"] = val);
});

//# sourceMappingURL=MediaStream.js.map?rel=1565798836442
