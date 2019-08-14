// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SourceBuffer');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The abort() method of the `web.SourceBuffer` interface aborts
 *   current segment and resets the segment parser.
 * 
 *   `sourceBuffer.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/abort`
 */
web.SourceBuffer.abort = (function web$SourceBuffer$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The appendBuffer() method of the `web.SourceBuffer` interface
 *   media segment data from an `web.ArrayBuffer` or ArrayBufferView
 *   to the SourceBuffer.
 * 
 *   `sourceBuffer.appendBuffer(source);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBuffer`
 */
web.SourceBuffer.append_buffer = (function web$SourceBuffer$append_buffer(this$,source){
return this$.appendBuffer(source);
});
/**
 * Method.
 * 
 *   The `web.SourceBuffer` method appendBufferAsync() begins the
 *   of asynchronously appending media segment data from an `web.ArrayBuffer`
 *   `web.ArrayBufferView` object to the SourceBuffer.
 * 
 *   `appendPromise = sourceBuffer.appendBufferAsync(source);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBufferAsync`
 */
web.SourceBuffer.append_buffer_async = (function web$SourceBuffer$append_buffer_async(this$,source){
return this$.appendBufferAsync(source);
});
/**
 * Method.
 * 
 *   The appendStream() method of the `web.SourceBuffer` interface
 *   media segment data from a ReadableStream object to the SourceBuffer.
 * 
 *   `sourceBuffer.appendStream(stream, maxSize);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendStream`
 */
web.SourceBuffer.append_stream = (function web$SourceBuffer$append_stream(this$,stream,max_size){
return this$.appendStream(stream,max_size);
});
/**
 * Method.
 * 
 *   The `web.SourceBuffer` method changeType() sets the MIME type
 *   future calls to `web.appendBuffer()` should expect the new media
 *   to conform to.
 * 
 *   `sourceBuffer.changeType(type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/changeType`
 */
web.SourceBuffer.change_type = (function web$SourceBuffer$change_type(this$,type){
return this$.changeType(type);
});
/**
 * Method.
 * 
 *   The remove() method of the `web.SourceBuffer` interface removes
 *   segments within a specific time range from the SourceBuffer.
 *   method can only be called when `web.SourceBuffer.updating` equals
 *   If SourceBuffer.updating is not equal to false, call `web.SourceBuffer.abort()`.
 * 
 *   `sourceBuffer.remove(start, end);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/remove`
 */
web.SourceBuffer.remove = (function web$SourceBuffer$remove(this$,start,end){
return this$.remove(start,end);
});
/**
 * Method.
 * 
 *   The removeAsync() method of the `web.SourceBuffer` interface
 *   the process of asynchronously removing from the SourceBuffer
 *   segments found within a specific time range.
 * 
 *   `removePromise = sourceBuffer.removeAsync(start, end);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/removeAsync`
 */
web.SourceBuffer.remove_async = (function web$SourceBuffer$remove_async(this$,start,end){
return this$.removeAsync(start,end);
});
/**
 * Property.
 * 
 *   The appendWindowEnd property of the `web.SourceBuffer` interface
 *   the timestamp for the end of the append window, a timestamp range
 *   can be used to filter what media data is appended to the SourceBuffer.
 *   media frames with timestamps wthin this range will be appended,
 *   those outside the range will be filtered out.
 * 
 *   `var myAppendWindowEnd = sourceBuffer.appendWindowEnd;
 * 
 *   sourceBuffer.appendWindowEnd = 120.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd`
 */
web.SourceBuffer.append_window_end = (function web$SourceBuffer$append_window_end(this$){
return this$.appendWindowEnd();
});
/**
 * Property.
 * 
 *   The appendWindowEnd property of the `web.SourceBuffer` interface
 *   the timestamp for the end of the append window, a timestamp range
 *   can be used to filter what media data is appended to the SourceBuffer.
 *   media frames with timestamps wthin this range will be appended,
 *   those outside the range will be filtered out.
 * 
 *   `var myAppendWindowEnd = sourceBuffer.appendWindowEnd;
 * 
 *   sourceBuffer.appendWindowEnd = 120.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd`
 */
web.SourceBuffer.set_append_window_end_BANG_ = (function web$SourceBuffer$set_append_window_end_BANG_(this$,val){
return (this$["appendWindowEnd"] = val);
});
/**
 * Property.
 * 
 *   The appendWindowStart property of the `web.SourceBuffer` interface
 *   the timestamp for the start of the append window, a timestamp
 *   that can be used to filter what media data is appended to the
 *   Coded media frames with timestamps wthin this range will be appended,
 *   those outside the range will be filtered out.
 * 
 *   `var myAppendWindowStart = sourceBuffer.appendWindowStart;
 * 
 *   sourceBuffer.appendWindowStart = 2.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart`
 */
web.SourceBuffer.append_window_start = (function web$SourceBuffer$append_window_start(this$){
return this$.appendWindowStart();
});
/**
 * Property.
 * 
 *   The appendWindowStart property of the `web.SourceBuffer` interface
 *   the timestamp for the start of the append window, a timestamp
 *   that can be used to filter what media data is appended to the
 *   Coded media frames with timestamps wthin this range will be appended,
 *   those outside the range will be filtered out.
 * 
 *   `var myAppendWindowStart = sourceBuffer.appendWindowStart;
 * 
 *   sourceBuffer.appendWindowStart = 2.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart`
 */
web.SourceBuffer.set_append_window_start_BANG_ = (function web$SourceBuffer$set_append_window_start_BANG_(this$,val){
return (this$["appendWindowStart"] = val);
});
/**
 * Property.
 * 
 *   The audioTracks read-only property of the `web.SourceBuffer`
 *   returns a list of the audio tracks currently contained inside
 *   SourceBuffer.
 * 
 *   `var myAudioTracks = sourceBuffer.audioTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/audioTracks`
 */
web.SourceBuffer.audio_tracks = (function web$SourceBuffer$audio_tracks(this$){
return this$.audioTracks();
});
/**
 * Property.
 * 
 *   The audioTracks read-only property of the `web.SourceBuffer`
 *   returns a list of the audio tracks currently contained inside
 *   SourceBuffer.
 * 
 *   `var myAudioTracks = sourceBuffer.audioTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/audioTracks`
 */
web.SourceBuffer.set_audio_tracks_BANG_ = (function web$SourceBuffer$set_audio_tracks_BANG_(this$,val){
return (this$["audioTracks"] = val);
});
/**
 * Property.
 * 
 *   The buffered read-only property of the `web.SourceBuffer` interface
 *   the time ranges that are currently buffered in the SourceBuffer
 *   a normalized `web.TimeRanges` object.
 * 
 *   `var myBufferedRange = sourceBuffer.buffered;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/buffered`
 */
web.SourceBuffer.buffered = (function web$SourceBuffer$buffered(this$){
return this$.buffered();
});
/**
 * Property.
 * 
 *   The buffered read-only property of the `web.SourceBuffer` interface
 *   the time ranges that are currently buffered in the SourceBuffer
 *   a normalized `web.TimeRanges` object.
 * 
 *   `var myBufferedRange = sourceBuffer.buffered;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/buffered`
 */
web.SourceBuffer.set_buffered_BANG_ = (function web$SourceBuffer$set_buffered_BANG_(this$,val){
return (this$["buffered"] = val);
});
/**
 * Property.
 * 
 *   The mode property of the `web.SourceBuffer` interface controls
 *   media segments can be appended to the SourceBuffer in any order,
 *   in a strict sequence.
 * 
 *   `var myMode = sourceBuffer.mode;
 * 
 *   sourceBuffer.mode = 'sequence';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode`
 */
web.SourceBuffer.mode = (function web$SourceBuffer$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   The mode property of the `web.SourceBuffer` interface controls
 *   media segments can be appended to the SourceBuffer in any order,
 *   in a strict sequence.
 * 
 *   `var myMode = sourceBuffer.mode;
 * 
 *   sourceBuffer.mode = 'sequence';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode`
 */
web.SourceBuffer.set_mode_BANG_ = (function web$SourceBuffer$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
});
/**
 * Property.
 * 
 *   The textTracks read-only property of the `web.SourceBuffer` interface
 *   a list of the text tracks currently contained inside the SourceBuffer.
 * 
 *   `var myTextTracks = sourceBuffer.textTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/textTracks`
 */
web.SourceBuffer.text_tracks = (function web$SourceBuffer$text_tracks(this$){
return this$.textTracks();
});
/**
 * Property.
 * 
 *   The textTracks read-only property of the `web.SourceBuffer` interface
 *   a list of the text tracks currently contained inside the SourceBuffer.
 * 
 *   `var myTextTracks = sourceBuffer.textTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/textTracks`
 */
web.SourceBuffer.set_text_tracks_BANG_ = (function web$SourceBuffer$set_text_tracks_BANG_(this$,val){
return (this$["textTracks"] = val);
});
/**
 * Property.
 * 
 *   The timestampOffset property of the `web.SourceBuffer` interface
 *   the offset applied to timestamps inside media segments that are
 *   to the SourceBuffer.
 * 
 *   `var myOffset = sourceBuffer.timestampOffset;
 * 
 *   sourceBuffer.timestampOffset = 2.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset`
 */
web.SourceBuffer.timestamp_offset = (function web$SourceBuffer$timestamp_offset(this$){
return this$.timestampOffset();
});
/**
 * Property.
 * 
 *   The timestampOffset property of the `web.SourceBuffer` interface
 *   the offset applied to timestamps inside media segments that are
 *   to the SourceBuffer.
 * 
 *   `var myOffset = sourceBuffer.timestampOffset;
 * 
 *   sourceBuffer.timestampOffset = 2.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset`
 */
web.SourceBuffer.set_timestamp_offset_BANG_ = (function web$SourceBuffer$set_timestamp_offset_BANG_(this$,val){
return (this$["timestampOffset"] = val);
});
/**
 * Property.
 * 
 *   The trackDefaults property of the `web.SourceBuffer` interface
 *   the default values to use if kind, label, and/or language information
 *   not available in the initialization segment of the media to be
 *   to the SourceBuffer.
 * 
 *   `var myTrackDefaults = sourceBuffer.trackDefaults;
 * 
 *   sourceBuffer.trackDefaults = myTrackDefaultList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/trackDefaults`
 */
web.SourceBuffer.track_defaults = (function web$SourceBuffer$track_defaults(this$){
return this$.trackDefaults();
});
/**
 * Property.
 * 
 *   The trackDefaults property of the `web.SourceBuffer` interface
 *   the default values to use if kind, label, and/or language information
 *   not available in the initialization segment of the media to be
 *   to the SourceBuffer.
 * 
 *   `var myTrackDefaults = sourceBuffer.trackDefaults;
 * 
 *   sourceBuffer.trackDefaults = myTrackDefaultList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/trackDefaults`
 */
web.SourceBuffer.set_track_defaults_BANG_ = (function web$SourceBuffer$set_track_defaults_BANG_(this$,val){
return (this$["trackDefaults"] = val);
});
/**
 * Property.
 * 
 *   The updating read-only property of the `web.SourceBuffer` interface
 *   whether the SourceBuffer is currently being updated — i.e. whether
 *   `web.SourceBuffer.appendBuffer()`, `web.SourceBuffer.appendStream()`,
 *   `web.SourceBuffer.remove()` operation is currently in progress.
 * 
 *   `var isUpdating = sourceBuffer.updating;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating`
 */
web.SourceBuffer.updating = (function web$SourceBuffer$updating(this$){
return this$.updating();
});
/**
 * Property.
 * 
 *   The updating read-only property of the `web.SourceBuffer` interface
 *   whether the SourceBuffer is currently being updated — i.e. whether
 *   `web.SourceBuffer.appendBuffer()`, `web.SourceBuffer.appendStream()`,
 *   `web.SourceBuffer.remove()` operation is currently in progress.
 * 
 *   `var isUpdating = sourceBuffer.updating;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating`
 */
web.SourceBuffer.set_updating_BANG_ = (function web$SourceBuffer$set_updating_BANG_(this$,val){
return (this$["updating"] = val);
});
/**
 * Property.
 * 
 *   The videoTracks read-only property of the `web.SourceBuffer`
 *   returns a list of the video tracks currently contained inside
 *   SourceBuffer.
 * 
 *   `var myVideoTracks = sourceBuffer.videoTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/videoTracks`
 */
web.SourceBuffer.video_tracks = (function web$SourceBuffer$video_tracks(this$){
return this$.videoTracks();
});
/**
 * Property.
 * 
 *   The videoTracks read-only property of the `web.SourceBuffer`
 *   returns a list of the video tracks currently contained inside
 *   SourceBuffer.
 * 
 *   `var myVideoTracks = sourceBuffer.videoTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/videoTracks`
 */
web.SourceBuffer.set_video_tracks_BANG_ = (function web$SourceBuffer$set_video_tracks_BANG_(this$,val){
return (this$["videoTracks"] = val);
});

//# sourceMappingURL=SourceBuffer.js.map?rel=1565798801482
