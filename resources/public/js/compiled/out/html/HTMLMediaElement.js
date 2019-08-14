// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLMediaElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `html.HTMLMediaElement` method canPlayType() reports how
 *   it is that the current browser will be able to play media of
 *   given MIME type.
 * 
 *   `canPlayResponse = audioOrVideo.canPlayType(mediaType);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType`
 */
html.HTMLMediaElement.can_play_type = (function html$HTMLMediaElement$can_play_type(this$,media_type){
return this$.canPlayType(media_type);
});
/**
 * Method.
 * 
 *   The captureStream() property of the `html.HTMLMediaElement` interface
 *   a `media.MediaStream` object which is streaming a real-time capture
 *   the content being rendered in the media element.
 * 
 *   `var mediaStream = mediaElement.captureStream()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream`
 */
html.HTMLMediaElement.capture_stream = (function html$HTMLMediaElement$capture_stream(this$){
return this$.captureStream();
});
/**
 * Method.
 * 
 *   The HTMLMediaElement.fastSeek() method quickly seeks the media
 *   the new time with precision tradeoff.
 * 
 *   `HTMLMediaElement.fastSeek(time);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/fastSeek`
 */
html.HTMLMediaElement.fast_seek = (function html$HTMLMediaElement$fast_seek(this$,time){
return this$.fastSeek(time);
});
/**
 * Method.
 * 
 *   The `html.HTMLMediaElement` method load() resets the media element
 *   its initial state and begins the process of selecting a media
 *   and loading the media in preparation for playback to begin at
 *   beginning.
 * 
 *   `mediaElement.load();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/load`
 */
html.HTMLMediaElement.load = (function html$HTMLMediaElement$load(this$){
return this$.load();
});
/**
 * Method.
 * 
 *   The HTMLMediaElement.msInsertAudioEffect() method inserts the
 *   audio effect into the media pipeline.
 * 
 *   `HTMLMediaElement.msInsertAudioEffect(activatableClassId: DOMString, effectRequired: boolean, config);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/msInsertAudioEffect`
 */
html.HTMLMediaElement.ms_insert_audio_effect = (function html$HTMLMediaElement$ms_insert_audio_effect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52783 = arguments.length;
var i__42557__auto___52784 = (0);
while(true){
if((i__42557__auto___52784 < len__42556__auto___52783)){
args__42563__auto__.push((arguments[i__42557__auto___52784]));

var G__52785 = (i__42557__auto___52784 + (1));
i__42557__auto___52784 = G__52785;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLMediaElement.ms_insert_audio_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLMediaElement.ms_insert_audio_effect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.msInsertAudioEffect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLMediaElement.ms_insert_audio_effect.cljs$lang$maxFixedArity = (1);

html.HTMLMediaElement.ms_insert_audio_effect.cljs$lang$applyTo = (function (seq52781){
var G__52782 = cljs.core.first.call(null,seq52781);
var seq52781__$1 = cljs.core.next.call(null,seq52781);
return html.HTMLMediaElement.ms_insert_audio_effect.cljs$core$IFn$_invoke$arity$variadic(G__52782,seq52781__$1);
});

/**
 * Method.
 * 
 *   The HTMLMediaElement.pause() method will pause playback of the
 *   if the media is already in a paused state this method will have
 *   effect.
 * 
 *   `HTMLMediaElement.pause()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause`
 */
html.HTMLMediaElement.pause = (function html$HTMLMediaElement$pause(this$){
return this$.pause();
});
/**
 * Method.
 * 
 *   The `html.HTMLMediaElement` method play() attempts to begin playback
 *   the media. It returns a `web.Promise` which is resolved when
 *   has been successfully started.
 * 
 *   `var promise = HTMLMediaElement.play();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play`
 */
html.HTMLMediaElement.play = (function html$HTMLMediaElement$play(this$){
return this$.play();
});
/**
 * Method.
 * 
 *   The HTMLMediaElement.seekToNextFrame() method asynchronously
 *   the the current play position to the next frame in the media.
 * 
 *   `var seekCompletePromise = HTMLMediaElement.seekToNextFrame();
 * 
 *   HTMLMediaElement.seekToNextFrame();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekToNextFrame`
 */
html.HTMLMediaElement.seek_to_next_frame = (function html$HTMLMediaElement$seek_to_next_frame(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52788 = arguments.length;
var i__42557__auto___52789 = (0);
while(true){
if((i__42557__auto___52789 < len__42556__auto___52788)){
args__42563__auto__.push((arguments[i__42557__auto___52789]));

var G__52790 = (i__42557__auto___52789 + (1));
i__42557__auto___52789 = G__52790;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLMediaElement.seek_to_next_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLMediaElement.seek_to_next_frame.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.seekToNextFrame,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLMediaElement.seek_to_next_frame.cljs$lang$maxFixedArity = (1);

html.HTMLMediaElement.seek_to_next_frame.cljs$lang$applyTo = (function (seq52786){
var G__52787 = cljs.core.first.call(null,seq52786);
var seq52786__$1 = cljs.core.next.call(null,seq52786);
return html.HTMLMediaElement.seek_to_next_frame.cljs$core$IFn$_invoke$arity$variadic(G__52787,seq52786__$1);
});

/**
 * Method.
 * 
 *   The setMediaKeys() property of the `html.HTMLMediaElement` interface
 *   a `web.Promise` that resolves to the passed `media.MediaKeys`,
 *   are those used to decrypt media during playback.
 * 
 *   `var Promise = HTMLMediaElement.setMediaKeys(mediaKeys);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setMediaKeys`
 */
html.HTMLMediaElement.set_media_keys = (function html$HTMLMediaElement$set_media_keys(this$,media_keys){
return this$.setMediaKeys(media_keys);
});
/**
 * Method.
 * 
 *   The HTMLMediaElement.setSinkId() method sets the ID of the audio
 *   to use for output and returns a Promise. This only works when
 *   application is authorized to use the specified device.
 * 
 *   `HTMLMediaElement.setSinkId(sinkId).then(function() { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/setSinkId`
 */
html.HTMLMediaElement.set_sink_id = (function html$HTMLMediaElement$set_sink_id(this$,sink_id){
return this$.setSinkId(sink_id);
});
/**
 * Property.
 * 
 *   The read-only audioTracks property on `html.HTMLMediaElement`
 *   returns an `audio.AudioTrackList` object listing all of the `audio.AudioTrack`
 *   representing the media element's audio tracks.
 * 
 *   `var audioTracks = mediaElement.audioTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks`
 */
html.HTMLMediaElement.audio_tracks = (function html$HTMLMediaElement$audio_tracks(this$){
return this$.audioTracks();
});
/**
 * Property.
 * 
 *   The read-only audioTracks property on `html.HTMLMediaElement`
 *   returns an `audio.AudioTrackList` object listing all of the `audio.AudioTrack`
 *   representing the media element's audio tracks.
 * 
 *   `var audioTracks = mediaElement.audioTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks`
 */
html.HTMLMediaElement.set_audio_tracks_BANG_ = (function html$HTMLMediaElement$set_audio_tracks_BANG_(this$,val){
return (this$["audioTracks"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.autoplay property reflects the autoplay
 *   attribute, indicating whether playback should automatically begin
 *   soon as enough media is available to do so without interruption.
 * 
 *   `HTMLMediaElement.autoplay = true | false;
 * 
 *   var autoplay = HTMLMediaElement.autoplay;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay`
 */
html.HTMLMediaElement.autoplay = (function html$HTMLMediaElement$autoplay(this$){
return this$.autoplay();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.autoplay property reflects the autoplay
 *   attribute, indicating whether playback should automatically begin
 *   soon as enough media is available to do so without interruption.
 * 
 *   `HTMLMediaElement.autoplay = true | false;
 * 
 *   var autoplay = HTMLMediaElement.autoplay;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/autoplay`
 */
html.HTMLMediaElement.set_autoplay_BANG_ = (function html$HTMLMediaElement$set_autoplay_BANG_(this$,val){
return (this$["autoplay"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.buffered read-only property returns a new
 *   object that indicates the ranges of the media source that the
 *   has buffered (if any) at the moment the buffered property is
 * 
 *   `var timeRange = audioObject.buffered`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered`
 */
html.HTMLMediaElement.buffered = (function html$HTMLMediaElement$buffered(this$){
return this$.buffered();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.controller property represents the media
 *   assigned to the element.
 * 
 *   `...`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controller`
 */
html.HTMLMediaElement.controller = (function html$HTMLMediaElement$controller(this$){
return this$.controller();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.controller property represents the media
 *   assigned to the element.
 * 
 *   `...`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controller`
 */
html.HTMLMediaElement.set_controller_BANG_ = (function html$HTMLMediaElement$set_controller_BANG_(this$,val){
return (this$["controller"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.controls property reflects the controls
 *   attribute, which controls whether user interface controls for
 *   the media item will be displayed.
 * 
 *   `var ctrls = video.controls;
 *   audio.controls = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controls`
 */
html.HTMLMediaElement.controls = (function html$HTMLMediaElement$controls(this$){
return this$.controls();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.controls property reflects the controls
 *   attribute, which controls whether user interface controls for
 *   the media item will be displayed.
 * 
 *   `var ctrls = video.controls;
 *   audio.controls = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controls`
 */
html.HTMLMediaElement.set_controls_BANG_ = (function html$HTMLMediaElement$set_controls_BANG_(this$,val){
return (this$["controls"] = val);
});
/**
 * Property.
 * 
 *   The controlsList property of the `html.HTMLMediaElement` interface
 *   a DOMTokenList that helps the user agent select what controls
 *   show on the media element whenever the user agent shows its own
 *   of controls. The DOMTokenList takes one or more of three possible
 *   nodownload, nofullscreen, and noremoteplayback.
 * 
 *   `var domTokenList = HTMLMediaElement.controlsList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList`
 */
html.HTMLMediaElement.controls_list = (function html$HTMLMediaElement$controls_list(this$){
return this$.controlsList();
});
/**
 * Property.
 * 
 *   The controlsList property of the `html.HTMLMediaElement` interface
 *   a DOMTokenList that helps the user agent select what controls
 *   show on the media element whenever the user agent shows its own
 *   of controls. The DOMTokenList takes one or more of three possible
 *   nodownload, nofullscreen, and noremoteplayback.
 * 
 *   `var domTokenList = HTMLMediaElement.controlsList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList`
 */
html.HTMLMediaElement.set_controls_list_BANG_ = (function html$HTMLMediaElement$set_controls_list_BANG_(this$,val){
return (this$["controlsList"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.crossOrigin property is the CORS setting
 *   this image element. See CORS settings attributes for details.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/crossOrigin`
 */
html.HTMLMediaElement.cross_origin = (function html$HTMLMediaElement$cross_origin(this$){
return this$.crossOrigin();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.crossOrigin property is the CORS setting
 *   this image element. See CORS settings attributes for details.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/crossOrigin`
 */
html.HTMLMediaElement.set_cross_origin_BANG_ = (function html$HTMLMediaElement$set_cross_origin_BANG_(this$,val){
return (this$["crossOrigin"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.currentSrc property contains the absolute
 *   of the chosen media resource. This could happen, for example,
 *   the web server selects a media file based on the resolution of
 *   user's display. The value is an empty string if the networkState
 *   is EMPTY.
 * 
 *   `var mediaUrl = audioObject.currentSrc;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentSrc`
 */
html.HTMLMediaElement.current_src = (function html$HTMLMediaElement$current_src(this$){
return this$.currentSrc();
});
/**
 * Property.
 * 
 *   The `html.HTMLMediaElement` interface's currentTime property
 *   the current playback time in seconds.
 * 
 *   `var currentTime = htmlMediaElement.currentTime;
 *   htmlMediaElement.currentTime = 35;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime`
 */
html.HTMLMediaElement.current_time = (function html$HTMLMediaElement$current_time(this$){
return this$.currentTime();
});
/**
 * Property.
 * 
 *   The `html.HTMLMediaElement` interface's currentTime property
 *   the current playback time in seconds.
 * 
 *   `var currentTime = htmlMediaElement.currentTime;
 *   htmlMediaElement.currentTime = 35;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime`
 */
html.HTMLMediaElement.set_current_time_BANG_ = (function html$HTMLMediaElement$set_current_time_BANG_(this$,val){
return (this$["currentTime"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.defaultMuted property reflects the muted
 *   attribute, which indicates whether the media element's audio
 *   should be muted by default. This property has no dynamic effect.
 *   mute and unmute the audio output, use the `web.muted` property.
 * 
 *   `var dMuted = video.defaultMuted;
 *   audio.defaultMuted = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultMuted`
 */
html.HTMLMediaElement.default_muted = (function html$HTMLMediaElement$default_muted(this$){
return this$.defaultMuted();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.defaultMuted property reflects the muted
 *   attribute, which indicates whether the media element's audio
 *   should be muted by default. This property has no dynamic effect.
 *   mute and unmute the audio output, use the `web.muted` property.
 * 
 *   `var dMuted = video.defaultMuted;
 *   audio.defaultMuted = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultMuted`
 */
html.HTMLMediaElement.set_default_muted_BANG_ = (function html$HTMLMediaElement$set_default_muted_BANG_(this$,val){
return (this$["defaultMuted"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.defaultPlaybackRate property indicates the
 *   playback rate for the media.
 * 
 *   `var dSpeed = video.defaultPlaybackRate;
 *   audio.defaultPlaybackRate = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultPlaybackRate`
 */
html.HTMLMediaElement.default_playback_rate = (function html$HTMLMediaElement$default_playback_rate(this$){
return this$.defaultPlaybackRate();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.defaultPlaybackRate property indicates the
 *   playback rate for the media.
 * 
 *   `var dSpeed = video.defaultPlaybackRate;
 *   audio.defaultPlaybackRate = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/defaultPlaybackRate`
 */
html.HTMLMediaElement.set_default_playback_rate_BANG_ = (function html$HTMLMediaElement$set_default_playback_rate_BANG_(this$,val){
return (this$["defaultPlaybackRate"] = val);
});
/**
 * Property.
 * 
 *   The read-only `html.HTMLMediaElement` property duration indicates
 *   length of the element's media in seconds.
 * 
 *   `myDuration = htmlMediaElement.duration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration`
 */
html.HTMLMediaElement.duration = (function html$HTMLMediaElement$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.ended indicates whether the media element
 *   ended playback.
 * 
 *   `var isEnded = HTMLMediaElement.ended`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended`
 */
html.HTMLMediaElement.ended = (function html$HTMLMediaElement$ended(this$){
return this$.ended();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.error is the `media.MediaError` object for
 *   most recent error, or null if there has not been an error. When
 *   error event is received by the element, you can determine details
 *   what happened by examining this object.
 * 
 *   `var myError = HTMLMediaElement.error;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/error`
 */
html.HTMLMediaElement.error = (function html$HTMLMediaElement$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.initialTime is the initial playback position
 *   seconds. This property is obsolete, you can use a Media Fragments
 *   in the `html.HTMLMediaElement.src` attribute instead.
 * 
 *   `...`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/initialTime`
 */
html.HTMLMediaElement.initial_time = (function html$HTMLMediaElement$initial_time(this$){
return this$.initialTime();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.loop property reflects the loop HTML attribute,
 *   controls whether the media element should start over when it
 *   the end.
 * 
 *   `var loop = video.loop;
 *   audio.loop = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop`
 */
html.HTMLMediaElement.loop = (function html$HTMLMediaElement$loop(this$){
return this$.loop();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.loop property reflects the loop HTML attribute,
 *   controls whether the media element should start over when it
 *   the end.
 * 
 *   `var loop = video.loop;
 *   audio.loop = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loop`
 */
html.HTMLMediaElement.set_loop_BANG_ = (function html$HTMLMediaElement$set_loop_BANG_(this$,val){
return (this$["loop"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.mediaGroup property reflects the mediagroup
 *   attribute, which indicates the name of the group of elements
 *   belongs to. A group of media elements shares a common controller.
 * 
 *   `...`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup`
 */
html.HTMLMediaElement.media_group = (function html$HTMLMediaElement$media_group(this$){
return this$.mediaGroup();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.mediaGroup property reflects the mediagroup
 *   attribute, which indicates the name of the group of elements
 *   belongs to. A group of media elements shares a common controller.
 * 
 *   `...`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/mediaGroup`
 */
html.HTMLMediaElement.set_media_group_BANG_ = (function html$HTMLMediaElement$set_media_group_BANG_(this$,val){
return (this$["mediaGroup"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.muted indicates whether the media element
 * 
 *   `var isMuted = audioOrVideo.muted
 *   audio.muted = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted`
 */
html.HTMLMediaElement.muted = (function html$HTMLMediaElement$muted(this$){
return this$.muted();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.muted indicates whether the media element
 * 
 *   `var isMuted = audioOrVideo.muted
 *   audio.muted = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/muted`
 */
html.HTMLMediaElement.set_muted_BANG_ = (function html$HTMLMediaElement$set_muted_BANG_(this$,val){
return (this$["muted"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.networkState property indicates the current
 *   of the fetching of media over the network.
 * 
 *   `var networkState = audioOrVideo.networkState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/networkState`
 */
html.HTMLMediaElement.network_state = (function html$HTMLMediaElement$network_state(this$){
return this$.networkState();
});
/**
 * Property.
 * 
 *   The onerror property of the `html.HTMLMediaElement` interface
 *   the `web.EventHandler` for processing error events.
 * 
 *   `HTMLMediaElement.onerror = EventListener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onerror`
 */
html.HTMLMediaElement.onerror = (function html$HTMLMediaElement$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `html.HTMLMediaElement` interface
 *   the `web.EventHandler` for processing error events.
 * 
 *   `HTMLMediaElement.onerror = EventListener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onerror`
 */
html.HTMLMediaElement.set_onerror_BANG_ = (function html$HTMLMediaElement$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The read-only HTMLMediaElement.paused property tells whether
 *   media element is paused.
 * 
 *   `var isPaused = audioOrVideo.paused`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused`
 */
html.HTMLMediaElement.paused = (function html$HTMLMediaElement$paused(this$){
return this$.paused();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.playbackRate property sets the rate at which
 *   media is being played back. This is used to implement user controls
 *   fast forward, slow motion, and so forth. The normal playback
 *   is multiplied by this value to obtain the current rate, so a
 *   of 1.0 indicates normal speed.
 * 
 *   `// video
 *   video.playbackRate = 1.5;
 *   // audio
 *   audio.playbackRate = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate`
 */
html.HTMLMediaElement.playback_rate = (function html$HTMLMediaElement$playback_rate(this$){
return this$.playbackRate();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.playbackRate property sets the rate at which
 *   media is being played back. This is used to implement user controls
 *   fast forward, slow motion, and so forth. The normal playback
 *   is multiplied by this value to obtain the current rate, so a
 *   of 1.0 indicates normal speed.
 * 
 *   `// video
 *   video.playbackRate = 1.5;
 *   // audio
 *   audio.playbackRate = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate`
 */
html.HTMLMediaElement.set_playback_rate_BANG_ = (function html$HTMLMediaElement$set_playback_rate_BANG_(this$,val){
return (this$["playbackRate"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.readyState property indicates the readiness
 *   of the media.
 * 
 *   `var readyState = audioOrVideo.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState`
 */
html.HTMLMediaElement.ready_state = (function html$HTMLMediaElement$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The seekable read-only property of the `html.HTMLMediaElement`
 *   a `web.TimeRanges` object that contains the time ranges that
 *   user is able to seek to, if any.
 * 
 *   `var seekable = audioOrVideo.seekable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekable`
 */
html.HTMLMediaElement.seekable = (function html$HTMLMediaElement$seekable(this$){
return this$.seekable();
});
/**
 * Property.
 * 
 *   The seekable read-only property of the `html.HTMLMediaElement`
 *   a `web.TimeRanges` object that contains the time ranges that
 *   user is able to seek to, if any.
 * 
 *   `var seekable = audioOrVideo.seekable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seekable`
 */
html.HTMLMediaElement.set_seekable_BANG_ = (function html$HTMLMediaElement$set_seekable_BANG_(this$,val){
return (this$["seekable"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.sinkId read-only property returns a `dom.DOMString`
 *   is the unique ID of the audio device delivering output. If it
 *   using the user agent default, it returns an empty string. This
 *   should be one of the `media.MediaDeviceInfo.deviceId` values
 *   from `media.MediaDevices.enumerateDevices()`, id-multimedia,
 *   id-communications.
 * 
 *   `var sinkId = HTMLMediaElement.sinkId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/sinkId`
 */
html.HTMLMediaElement.sink_id = (function html$HTMLMediaElement$sink_id(this$){
return this$.sinkId();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.sinkId read-only property returns a `dom.DOMString`
 *   is the unique ID of the audio device delivering output. If it
 *   using the user agent default, it returns an empty string. This
 *   should be one of the `media.MediaDeviceInfo.deviceId` values
 *   from `media.MediaDevices.enumerateDevices()`, id-multimedia,
 *   id-communications.
 * 
 *   `var sinkId = HTMLMediaElement.sinkId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/sinkId`
 */
html.HTMLMediaElement.set_sink_id_BANG_ = (function html$HTMLMediaElement$set_sink_id_BANG_(this$,val){
return (this$["sinkId"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.src property reflects the value of the HTML
 *   element's src attribute, which indicates the URL of a media resource
 *   use in the element.
 * 
 *   `var mediaUrl = HTMLMediaElement.src;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`
 */
html.HTMLMediaElement.src = (function html$HTMLMediaElement$src(this$){
return this$.src();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.src property reflects the value of the HTML
 *   element's src attribute, which indicates the URL of a media resource
 *   use in the element.
 * 
 *   `var mediaUrl = HTMLMediaElement.src;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src`
 */
html.HTMLMediaElement.set_src_BANG_ = (function html$HTMLMediaElement$set_src_BANG_(this$,val){
return (this$["src"] = val);
});
/**
 * Property.
 * 
 *   The srcObject property of the `html.HTMLMediaElement` interface
 *   or returns the object which serves as the source of the media
 *   with the `html.HTMLMediaElement`.
 * 
 *   `var sourceObject = HTMLMediaElement.srcObject;
 * 
 *   HTMLMediaElement.srcObject = sourceObject;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject`
 */
html.HTMLMediaElement.src_object = (function html$HTMLMediaElement$src_object(this$){
return this$.srcObject();
});
/**
 * Property.
 * 
 *   The srcObject property of the `html.HTMLMediaElement` interface
 *   or returns the object which serves as the source of the media
 *   with the `html.HTMLMediaElement`.
 * 
 *   `var sourceObject = HTMLMediaElement.srcObject;
 * 
 *   HTMLMediaElement.srcObject = sourceObject;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject`
 */
html.HTMLMediaElement.set_src_object_BANG_ = (function html$HTMLMediaElement$set_src_object_BANG_(this$,val){
return (this$["srcObject"] = val);
});
/**
 * Property.
 * 
 *   The read-only textTracks property on `html.HTMLMediaElement`
 *   returns a `web.TextTrackList` object listing all of the `web.TextTrack`
 *   representing the media element's text tracks
 * 
 *   `var textTracks = mediaElement.textTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/textTracks`
 */
html.HTMLMediaElement.text_tracks = (function html$HTMLMediaElement$text_tracks(this$){
return this$.textTracks();
});
/**
 * Property.
 * 
 *   The read-only textTracks property on `html.HTMLMediaElement`
 *   returns a `web.TextTrackList` object listing all of the `web.TextTrack`
 *   representing the media element's text tracks
 * 
 *   `var textTracks = mediaElement.textTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/textTracks`
 */
html.HTMLMediaElement.set_text_tracks_BANG_ = (function html$HTMLMediaElement$set_text_tracks_BANG_(this$,val){
return (this$["textTracks"] = val);
});
/**
 * Property.
 * 
 *   The read-only videoTracks property on `html.HTMLMediaElement`
 *   returns a `web.VideoTrackList` object listing all of the `web.VideoTrack`
 *   representing the media element's video tracks.
 * 
 *   `var videoTracks = mediaElement.videoTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/videoTracks`
 */
html.HTMLMediaElement.video_tracks = (function html$HTMLMediaElement$video_tracks(this$){
return this$.videoTracks();
});
/**
 * Property.
 * 
 *   The read-only videoTracks property on `html.HTMLMediaElement`
 *   returns a `web.VideoTrackList` object listing all of the `web.VideoTrack`
 *   representing the media element's video tracks.
 * 
 *   `var videoTracks = mediaElement.videoTracks;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/videoTracks`
 */
html.HTMLMediaElement.set_video_tracks_BANG_ = (function html$HTMLMediaElement$set_video_tracks_BANG_(this$,val){
return (this$["videoTracks"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.volume property sets the volume at which
 *   media will be played.
 * 
 *   `var volume ​= video.volume; //1`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume`
 */
html.HTMLMediaElement.volume = (function html$HTMLMediaElement$volume(this$){
return this$.volume();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.volume property sets the volume at which
 *   media will be played.
 * 
 *   `var volume ​= video.volume; //1`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume`
 */
html.HTMLMediaElement.set_volume_BANG_ = (function html$HTMLMediaElement$set_volume_BANG_(this$,val){
return (this$["volume"] = val);
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.disableRemotePlayback property determines
 *   the media element is allowed to have a remote playback UI.
 * 
 *   `var remotePlaybackState ​= element.disableRemotePlayback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/disableRemotePlayback`
 */
html.HTMLMediaElement.disable_remote_playback = (function html$HTMLMediaElement$disable_remote_playback(this$){
return this$.disableRemotePlayback();
});
/**
 * Property.
 * 
 *   The HTMLMediaElement.disableRemotePlayback property determines
 *   the media element is allowed to have a remote playback UI.
 * 
 *   `var remotePlaybackState ​= element.disableRemotePlayback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/disableRemotePlayback`
 */
html.HTMLMediaElement.set_disable_remote_playback_BANG_ = (function html$HTMLMediaElement$set_disable_remote_playback_BANG_(this$,val){
return (this$["disableRemotePlayback"] = val);
});
/**
 * Property.
 * 
 *   The onencrypted property of the `html.HTMLMediaElement` is an
 *   handler, fired whenever an encrypted event occurs, denoting the
 *   is encrypted.
 * 
 *   `HTMLMediaElement.onencrypted = function(encrypted) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onencrypted`
 */
html.HTMLMediaElement.onencrypted = (function html$HTMLMediaElement$onencrypted(this$){
return this$.onencrypted();
});
/**
 * Property.
 * 
 *   The onencrypted property of the `html.HTMLMediaElement` is an
 *   handler, fired whenever an encrypted event occurs, denoting the
 *   is encrypted.
 * 
 *   `HTMLMediaElement.onencrypted = function(encrypted) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onencrypted`
 */
html.HTMLMediaElement.set_onencrypted_BANG_ = (function html$HTMLMediaElement$set_onencrypted_BANG_(this$,val){
return (this$["onencrypted"] = val);
});
/**
 * Property.
 * 
 *   The onwaitingforkey property of the `html.HTMLMediaElement` is
 *   event handler, fired when a waitingforkey event occurs, when
 *   is blocked while waiting for an encryption key.
 * 
 *   `HTMLMediaElement.onwaitingforkey = function(waitingforkey) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onwaitingforkey`
 */
html.HTMLMediaElement.onwaitingforkey = (function html$HTMLMediaElement$onwaitingforkey(this$){
return this$.onwaitingforkey();
});
/**
 * Property.
 * 
 *   The onwaitingforkey property of the `html.HTMLMediaElement` is
 *   event handler, fired when a waitingforkey event occurs, when
 *   is blocked while waiting for an encryption key.
 * 
 *   `HTMLMediaElement.onwaitingforkey = function(waitingforkey) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/onwaitingforkey`
 */
html.HTMLMediaElement.set_onwaitingforkey_BANG_ = (function html$HTMLMediaElement$set_onwaitingforkey_BANG_(this$,val){
return (this$["onwaitingforkey"] = val);
});

//# sourceMappingURL=HTMLMediaElement.js.map?rel=1565798859261
