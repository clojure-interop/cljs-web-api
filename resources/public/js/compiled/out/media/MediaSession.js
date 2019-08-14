// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaSession');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The setActionHandler() property of the `media.MediaSession` interface
 *   an event handler for a media session action.
 * 
 *   `navigator.mediaSession.setActionHandler(type, callback)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setActionHandler`
 */
media.MediaSession.set_action_handler = (function media$MediaSession$set_action_handler(this$,type,callback){
return this$.setActionHandler(type,callback);
});
/**
 * Property.
 * 
 *   The metadata property of the `media.MediaSession` interface,
 *   an instance of `media.MediaMetadata` which contains rich media
 *   for display in a platform UI.
 * 
 *   `var mediaMetadata = MediaSession.metadata
 *   MediaSession.metadata = mediaMetadata`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/metadata`
 */
media.MediaSession.metadata = (function media$MediaSession$metadata(this$){
return this$.metadata();
});
/**
 * Property.
 * 
 *   The metadata property of the `media.MediaSession` interface,
 *   an instance of `media.MediaMetadata` which contains rich media
 *   for display in a platform UI.
 * 
 *   `var mediaMetadata = MediaSession.metadata
 *   MediaSession.metadata = mediaMetadata`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/metadata`
 */
media.MediaSession.set_metadata_BANG_ = (function media$MediaSession$set_metadata_BANG_(this$,val){
return (this$["metadata"] = val);
});
/**
 * Property.
 * 
 *   The playbackState property of the `media.MediaSession` interface
 *   whether the current media session is playing.
 * 
 *   `var playbackState = MediaSession.playbackState
 *   MediaSession.playbackState = playbackState`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/playbackState`
 */
media.MediaSession.playback_state = (function media$MediaSession$playback_state(this$){
return this$.playbackState();
});
/**
 * Property.
 * 
 *   The playbackState property of the `media.MediaSession` interface
 *   whether the current media session is playing.
 * 
 *   `var playbackState = MediaSession.playbackState
 *   MediaSession.playbackState = playbackState`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/playbackState`
 */
media.MediaSession.set_playback_state_BANG_ = (function media$MediaSession$set_playback_state_BANG_(this$,val){
return (this$["playbackState"] = val);
});

//# sourceMappingURL=MediaSession.js.map?rel=1565798814437
