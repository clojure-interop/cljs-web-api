// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaSource');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaSource() constructor of the `media.MediaSource` interface constructs and returns a new MediaSource object with no associated source buffers.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource`
 */
media.MediaSource.constructor$ = MediaSource;
/**
 * Method.
 * 
 *   The addSourceBuffer() method of the `media.MediaSource` interface
 *   a new `web.SourceBuffer` of the given MIME type and adds it to
 *   MediaSource's `web.sourceBuffers` list. The new SourceBuffer
 *   also returned.
 * 
 *   `var sourceBuffer = mediaSource.addSourceBuffer(mimeType);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/addSourceBuffer`
 */
media.MediaSource.add_source_buffer = (function media$MediaSource$add_source_buffer(this$,mime_type){
return this$.addSourceBuffer(mime_type);
});
/**
 * Method.
 * 
 *   The clearLiveSeekableRange() method of the `media.MediaSource`
 *   clears a seekable range privious set with a call to `web.setLiveSeekableRange()`.
 * 
 *   `mediaSource.clearLiveSeekableRange()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/clearLiveSeekableRange`
 */
media.MediaSource.clear_live_seekable_range = (function media$MediaSource$clear_live_seekable_range(this$){
return this$.clearLiveSeekableRange();
});
/**
 * Method.
 * 
 *   The endOfStream() method of the `media.MediaSource` interface
 *   the end of the stream.
 * 
 *   `mediaSource.endOfStream(endOfStreamError);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/endOfStream`
 */
media.MediaSource.end_of_stream = (function media$MediaSource$end_of_stream(this$,end_of_stream_error){
return this$.endOfStream(end_of_stream_error);
});
/**
 * Method.
 * 
 *   The isTypeSupported() method of the `media.MediaSource` interface
 *   a `web.Boolean` value indicating if the given MIME type is supported
 *   the current user agent — this is, if it can successfully create
 *   objects for that MIME type.
 * 
 *   `var isItSupported = mediaSource.isTypeSupported(mimeType);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported`
 */
media.MediaSource.is_type_supported = (function media$MediaSource$is_type_supported(this$,mime_type){
return this$.isTypeSupported(mime_type);
});
/**
 * Method.
 * 
 *   The removeSourceBuffer() method of the `media.MediaSource` interface
 *   the given `web.SourceBuffer` from the `web.SourceBuffers` list
 *   with this MediaSource object.
 * 
 *   `mediaSource.removeSourceBuffer(sourceBuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/removeSourceBuffer`
 */
media.MediaSource.remove_source_buffer = (function media$MediaSource$remove_source_buffer(this$,source_buffer){
return this$.removeSourceBuffer(source_buffer);
});
/**
 * Method.
 * 
 *   The setLiveSeekableRange() method of the `media.MediaSource`
 *   sets the range that the user can seek to in the media element.
 * 
 *   `mediaSource.setLiveSeekableRange(start, end)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/setLiveSeekableRange`
 */
media.MediaSource.set_live_seekable_range = (function media$MediaSource$set_live_seekable_range(this$,start,end){
return this$.setLiveSeekableRange(start,end);
});
/**
 * Property.
 * 
 *   The activeSourceBuffers read-only property of the `media.MediaSource`
 *   returns a `web.SourceBufferList` object containing a subset of
 *   `web.SourceBuffer` objects contained within `web.sourceBuffers`
 *   the list of objects providing the selected video track, enabled
 *   tracks, and shown/hidden text tracks.
 * 
 *   `var myActiveSourceBuffers = mediaSource.activeSourceBuffers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers`
 */
media.MediaSource.active_source_buffers = (function media$MediaSource$active_source_buffers(this$){
return this$.activeSourceBuffers();
});
/**
 * Property.
 * 
 *   The activeSourceBuffers read-only property of the `media.MediaSource`
 *   returns a `web.SourceBufferList` object containing a subset of
 *   `web.SourceBuffer` objects contained within `web.sourceBuffers`
 *   the list of objects providing the selected video track, enabled
 *   tracks, and shown/hidden text tracks.
 * 
 *   `var myActiveSourceBuffers = mediaSource.activeSourceBuffers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers`
 */
media.MediaSource.set_active_source_buffers_BANG_ = (function media$MediaSource$set_active_source_buffers_BANG_(this$,val){
return (this$["activeSourceBuffers"] = val);
});
/**
 * Property.
 * 
 *   The duration property of the `media.MediaSource` interface gets
 *   sets the duration of the current media being presented.
 * 
 *   `mediaSource.duration = 5.5; // 5.5 seconds
 * 
 *   var myDuration = mediaSource.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`
 */
media.MediaSource.duration = (function media$MediaSource$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   The duration property of the `media.MediaSource` interface gets
 *   sets the duration of the current media being presented.
 * 
 *   `mediaSource.duration = 5.5; // 5.5 seconds
 * 
 *   var myDuration = mediaSource.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`
 */
media.MediaSource.set_duration_BANG_ = (function media$MediaSource$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});
/**
 * Property.
 * 
 *   The readyState read-only property of the `media.MediaSource`
 *   returns an enum representing the state of the current MediaSource.
 *   three possible values are:
 * 
 *   `var myReadyState = mediaSource.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState`
 */
media.MediaSource.ready_state = (function media$MediaSource$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The readyState read-only property of the `media.MediaSource`
 *   returns an enum representing the state of the current MediaSource.
 *   three possible values are:
 * 
 *   `var myReadyState = mediaSource.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState`
 */
media.MediaSource.set_ready_state_BANG_ = (function media$MediaSource$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The sourceBuffers read-only property of the `media.MediaSource`
 *   returns a `web.SourceBufferList` object containing the list of
 *   objects associated with this MediaSource.
 * 
 *   `var mySourceBuffers = mediaSource.sourceBuffers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers`
 */
media.MediaSource.source_buffers = (function media$MediaSource$source_buffers(this$){
return this$.sourceBuffers();
});
/**
 * Property.
 * 
 *   The sourceBuffers read-only property of the `media.MediaSource`
 *   returns a `web.SourceBufferList` object containing the list of
 *   objects associated with this MediaSource.
 * 
 *   `var mySourceBuffers = mediaSource.sourceBuffers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers`
 */
media.MediaSource.set_source_buffers_BANG_ = (function media$MediaSource$set_source_buffers_BANG_(this$,val){
return (this$["sourceBuffers"] = val);
});

//# sourceMappingURL=MediaSource.js.map?rel=1565798837221
