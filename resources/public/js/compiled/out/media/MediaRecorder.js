// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaRecorder');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaRecorder() constructor creates a new `media.MediaRecorder` object that will record a specified `media.MediaStream`.
 * 
 *   stream
 *   The `media.MediaStream` that will be recorded. This source media can come from a stream created using `web.navigator.mediaDevices.getUserMedia()` or from an `web.<audio>`, `web.<video>` or `web.<canvas>` element.
 * 
 *   options Optional
 * 
 * 
 *   A dictionary object that can contain the following properties:
 * 
 * 
 *   mimeType: The MIME type you want to use as the recording container for the new MediaRecorder. This field may simply specify the container format (allowing the browser to choose its preferred codecs) or may include the codec and/or profile options to use. Applications can check in advance if this mimeType is supported by the user agent by calling `media.MediaRecorder.isTypeSupported()`.
 *   audioBitsPerSecond: The chosen bitrate for the audio component of the media.
 *   videoBitsPerSecond: The chosen bitrate for the video component of the media.
 *   bitsPerSecond: The chosen bitrate for the audio and video components of the media. This can be specified instead of the above two properties. If this is specified along with one or the other of the above properties, this will be used for the one that isn't specified.
 * 
 * 
 * 
 *   If bits per second values are not specified for video and/or audio, the default adopted for video is 2.5Mbps, while the audio default is adaptive, depending upon the sample rate and the number of channels.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/MediaRecorder`
 */
media.MediaRecorder.constructor$ = MediaRecorder;
/**
 * Method.
 * 
 *   The MediaRecorder.isTypeSupported() method returns a Boolean
 *   is true if the MIME type specified is one the user agent can
 * 
 *   `var canRecord = MediaRecorder.isTypeSupported(mimeType)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/isTypeSupported`
 */
media.MediaRecorder.is_type_supported = (function media$MediaRecorder$is_type_supported(this$,mime_type){
return this$.isTypeSupported(mime_type);
});
/**
 * Method.
 * 
 *   The Media.pause() method (part of the MediaRecorder API) is used
 *   pause recording of media streams.
 * 
 *   `MediaRecorder.pause()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/pause`
 */
media.MediaRecorder.pause = (function media$MediaRecorder$pause(this$){
return this$.pause();
});
/**
 * Method.
 * 
 *   The MediaRecorder.requestData() method (part of the MediaRecorder
 *   is used to raise a `web.dataavailable` event containing a `web.Blob`
 *   of the captured media as it was when the method was called.
 * 
 *   `MediaRecorder.requestData()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/requestData`
 */
media.MediaRecorder.request_data = (function media$MediaRecorder$request_data(this$){
return this$.requestData();
});
/**
 * Method.
 * 
 *   The MediaRecorder.resume() method (part of the MediaRecorder
 *   is used to resume media recording when it has been previously
 * 
 *   `MediaRecorder.resume()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/resume`
 */
media.MediaRecorder.resume = (function media$MediaRecorder$resume(this$){
return this$.resume();
});
/**
 * Method.
 * 
 *   The `media.MediaRecorder` method start(), which is part of the
 *   Recording API, begins recording media into one or more `web.Blob`
 * 
 *   `MediaRecorder.start(timeslice)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start`
 */
media.MediaRecorder.start = (function media$MediaRecorder$start(this$,timeslice){
return this$.start(timeslice);
});
/**
 * Method.
 * 
 *   The MediaRecorder.stop() method (part of the MediaRecorder API)
 *   used to stop media capture.
 * 
 *   `MediaRecorder.stop()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop`
 */
media.MediaRecorder.stop = (function media$MediaRecorder$stop(this$){
return this$.stop();
});
/**
 * Property.
 * 
 *   The audioBitsPerSecond read-only property of the `media.MediaRecorder`
 *   returns the audio encoding bit rate in use.
 * 
 *   `var audioBitsPerSecond = MediaRecorder.audioBitsPerSecond`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/audioBitsPerSecond`
 */
media.MediaRecorder.audio_bits_per_second = (function media$MediaRecorder$audio_bits_per_second(this$){
return this$.audioBitsPerSecond();
});
/**
 * Property.
 * 
 *   The audioBitsPerSecond read-only property of the `media.MediaRecorder`
 *   returns the audio encoding bit rate in use.
 * 
 *   `var audioBitsPerSecond = MediaRecorder.audioBitsPerSecond`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/audioBitsPerSecond`
 */
media.MediaRecorder.set_audio_bits_per_second_BANG_ = (function media$MediaRecorder$set_audio_bits_per_second_BANG_(this$,val){
return (this$["audioBitsPerSecond"] = val);
});
/**
 * Property.
 * 
 *   The ignoreMutedMedia property of the `media.MediaRecorder` interface
 *   whether the MediaRecorder instance will record input, when the
 *   MediaStreamTrack is muted.
 * 
 *   `var boolean = MediaRecorder.ignoreMutedMedia
 *   MediaRecorder.ignoreMutedMedia = boolean`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ignoreMutedMedia`
 */
media.MediaRecorder.ignore_muted_media = (function media$MediaRecorder$ignore_muted_media(this$){
return this$.ignoreMutedMedia();
});
/**
 * Property.
 * 
 *   The ignoreMutedMedia property of the `media.MediaRecorder` interface
 *   whether the MediaRecorder instance will record input, when the
 *   MediaStreamTrack is muted.
 * 
 *   `var boolean = MediaRecorder.ignoreMutedMedia
 *   MediaRecorder.ignoreMutedMedia = boolean`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ignoreMutedMedia`
 */
media.MediaRecorder.set_ignore_muted_media_BANG_ = (function media$MediaRecorder$set_ignore_muted_media_BANG_(this$,val){
return (this$["ignoreMutedMedia"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.mimeType read-only property returns the MIME
 *   that is being used as the recording container when it was created.
 *   is the file format of the file that would result from writing
 *   of the recorded data to disk. Keep in mind, of course, that the
 *   format and the codecs associated with the individual tracks are
 *   things entirely; writing tracks that work just fine in a WebM
 *   into an MP4 wrapper may not result in a file that plays everywhere
 *   want it to.
 * 
 *   `var mimeType = MediaRecorder.mimeType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/mimeType`
 */
media.MediaRecorder.mime_type = (function media$MediaRecorder$mime_type(this$){
return this$.mimeType();
});
/**
 * Property.
 * 
 *   The MediaRecorder.mimeType read-only property returns the MIME
 *   that is being used as the recording container when it was created.
 *   is the file format of the file that would result from writing
 *   of the recorded data to disk. Keep in mind, of course, that the
 *   format and the codecs associated with the individual tracks are
 *   things entirely; writing tracks that work just fine in a WebM
 *   into an MP4 wrapper may not result in a file that plays everywhere
 *   want it to.
 * 
 *   `var mimeType = MediaRecorder.mimeType`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/mimeType`
 */
media.MediaRecorder.set_mime_type_BANG_ = (function media$MediaRecorder$set_mime_type_BANG_(this$,val){
return (this$["mimeType"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.ondataavailable event handler (part of the
 *   Recording API) handles the dataavailable event, letting you run
 *   in response to `web.Blob` data being made available for use.
 * 
 *   `MediaRecorder.ondataavailable = function(event) { ... }
 *   MediaRecorder.addEventListener('dataavailable', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable`
 */
media.MediaRecorder.ondataavailable = (function media$MediaRecorder$ondataavailable(this$){
return this$.ondataavailable();
});
/**
 * Property.
 * 
 *   The MediaRecorder.ondataavailable event handler (part of the
 *   Recording API) handles the dataavailable event, letting you run
 *   in response to `web.Blob` data being made available for use.
 * 
 *   `MediaRecorder.ondataavailable = function(event) { ... }
 *   MediaRecorder.addEventListener('dataavailable', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable`
 */
media.MediaRecorder.set_ondataavailable_BANG_ = (function media$MediaRecorder$set_ondataavailable_BANG_(this$,val){
return (this$["ondataavailable"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaRecorder` interface's onerror event handler is
 *   by the MediaStream Recording API when an error occurs. You can
 *   an event handler to deal with errors that occur while creating
 *   using a media recorder
 * 
 *   `MediaRecorder.onerror = errorHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onerror`
 */
media.MediaRecorder.onerror = (function media$MediaRecorder$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The `media.MediaRecorder` interface's onerror event handler is
 *   by the MediaStream Recording API when an error occurs. You can
 *   an event handler to deal with errors that occur while creating
 *   using a media recorder
 * 
 *   `MediaRecorder.onerror = errorHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onerror`
 */
media.MediaRecorder.set_onerror_BANG_ = (function media$MediaRecorder$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.onpause event handler (part of the MediaRecorder
 *   handles the pause event, allowing you to run code in response
 *   the media recording being paused.
 * 
 *   `MediaRecorder.onpause = function(event) { ... }
 *   MediaRecorder.addEventListener('pause', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onpause`
 */
media.MediaRecorder.onpause = (function media$MediaRecorder$onpause(this$){
return this$.onpause();
});
/**
 * Property.
 * 
 *   The MediaRecorder.onpause event handler (part of the MediaRecorder
 *   handles the pause event, allowing you to run code in response
 *   the media recording being paused.
 * 
 *   `MediaRecorder.onpause = function(event) { ... }
 *   MediaRecorder.addEventListener('pause', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onpause`
 */
media.MediaRecorder.set_onpause_BANG_ = (function media$MediaRecorder$set_onpause_BANG_(this$,val){
return (this$["onpause"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.onresume event handler (part of the MediaRecorder
 *   handles the resume event, allowing you to run code in response
 *   the media recording being resumed after pausing.
 * 
 *   `MediaRecorder.onresume = function(event) { ... }
 *   MediaRecorder.addEventListener('resume', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onresume`
 */
media.MediaRecorder.onresume = (function media$MediaRecorder$onresume(this$){
return this$.onresume();
});
/**
 * Property.
 * 
 *   The MediaRecorder.onresume event handler (part of the MediaRecorder
 *   handles the resume event, allowing you to run code in response
 *   the media recording being resumed after pausing.
 * 
 *   `MediaRecorder.onresume = function(event) { ... }
 *   MediaRecorder.addEventListener('resume', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onresume`
 */
media.MediaRecorder.set_onresume_BANG_ = (function media$MediaRecorder$set_onresume_BANG_(this$,val){
return (this$["onresume"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.onstartevent handler (part of the MediaRecorder
 *   handles the start event, allowing you to run code in response
 *   media recording being started by a MediaRecorder.
 * 
 *   `MediaRecorder.onstart = function(event) { ... }
 *   MediaRecorder.addEventListener('start', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstart`
 */
media.MediaRecorder.onstart = (function media$MediaRecorder$onstart(this$){
return this$.onstart();
});
/**
 * Property.
 * 
 *   The MediaRecorder.onstartevent handler (part of the MediaRecorder
 *   handles the start event, allowing you to run code in response
 *   media recording being started by a MediaRecorder.
 * 
 *   `MediaRecorder.onstart = function(event) { ... }
 *   MediaRecorder.addEventListener('start', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstart`
 */
media.MediaRecorder.set_onstart_BANG_ = (function media$MediaRecorder$set_onstart_BANG_(this$,val){
return (this$["onstart"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.onstop event handler (part of the MediaRecorder
 *   handles the stop event, allowing you to run code in response
 *   media recording via a MediaRecorder being stopped.
 * 
 *   `MediaRecorder.onstop = function(event) { ... }
 *   MediaRecorder.addEventListener('stop', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstop`
 */
media.MediaRecorder.onstop = (function media$MediaRecorder$onstop(this$){
return this$.onstop();
});
/**
 * Property.
 * 
 *   The MediaRecorder.onstop event handler (part of the MediaRecorder
 *   handles the stop event, allowing you to run code in response
 *   media recording via a MediaRecorder being stopped.
 * 
 *   `MediaRecorder.onstop = function(event) { ... }
 *   MediaRecorder.addEventListener('stop', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstop`
 */
media.MediaRecorder.set_onstop_BANG_ = (function media$MediaRecorder$set_onstop_BANG_(this$,val){
return (this$["onstop"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.onwarning event handler (part of the MediaRecorder
 *   handles the recordingwarning event, allowing you to run code
 *   response to non-fatal errors being thrown during media recording
 *   a MediaRecorder, which don't halt recording.
 * 
 *   `MediaRecorder.onwarning = function(event) { ... }
 *   MediaRecorder.addEventListener('warning', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onwarning`
 */
media.MediaRecorder.onwarning = (function media$MediaRecorder$onwarning(this$){
return this$.onwarning();
});
/**
 * Property.
 * 
 *   The MediaRecorder.onwarning event handler (part of the MediaRecorder
 *   handles the recordingwarning event, allowing you to run code
 *   response to non-fatal errors being thrown during media recording
 *   a MediaRecorder, which don't halt recording.
 * 
 *   `MediaRecorder.onwarning = function(event) { ... }
 *   MediaRecorder.addEventListener('warning', function(event) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onwarning`
 */
media.MediaRecorder.set_onwarning_BANG_ = (function media$MediaRecorder$set_onwarning_BANG_(this$,val){
return (this$["onwarning"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.state read-only property returns the current
 *   of the current MediaRecorder object.
 * 
 *   `var state = MediaRecorder.state`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/state`
 */
media.MediaRecorder.state = (function media$MediaRecorder$state(this$){
return this$.state();
});
/**
 * Property.
 * 
 *   The MediaRecorder.state read-only property returns the current
 *   of the current MediaRecorder object.
 * 
 *   `var state = MediaRecorder.state`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/state`
 */
media.MediaRecorder.set_state_BANG_ = (function media$MediaRecorder$set_state_BANG_(this$,val){
return (this$["state"] = val);
});
/**
 * Property.
 * 
 *   The MediaRecorder.stream read-only property returns the stream
 *   was passed into the MediaRecorder() constructor when the MediaRecorder
 *   created.
 * 
 *   `var stream = MediaRecorder.stream`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stream`
 */
media.MediaRecorder.stream = (function media$MediaRecorder$stream(this$){
return this$.stream();
});
/**
 * Property.
 * 
 *   The MediaRecorder.stream read-only property returns the stream
 *   was passed into the MediaRecorder() constructor when the MediaRecorder
 *   created.
 * 
 *   `var stream = MediaRecorder.stream`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stream`
 */
media.MediaRecorder.set_stream_BANG_ = (function media$MediaRecorder$set_stream_BANG_(this$,val){
return (this$["stream"] = val);
});
/**
 * Property.
 * 
 *   The videoBitsPerSecond read-only property of the `media.MediaRecorder`
 *   returns the video encoding bit rate in use.
 * 
 *   `var videoBitsPerSecond = MediaRecorder.videoBitsPerSecond`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/videoBitsPerSecond`
 */
media.MediaRecorder.video_bits_per_second = (function media$MediaRecorder$video_bits_per_second(this$){
return this$.videoBitsPerSecond();
});
/**
 * Property.
 * 
 *   The videoBitsPerSecond read-only property of the `media.MediaRecorder`
 *   returns the video encoding bit rate in use.
 * 
 *   `var videoBitsPerSecond = MediaRecorder.videoBitsPerSecond`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/videoBitsPerSecond`
 */
media.MediaRecorder.set_video_bits_per_second_BANG_ = (function media$MediaRecorder$set_video_bits_per_second_BANG_(this$,val){
return (this$["videoBitsPerSecond"] = val);
});

//# sourceMappingURL=MediaRecorder.js.map?rel=1565798851683
