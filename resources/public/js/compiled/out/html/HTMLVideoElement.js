// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLVideoElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `html.HTMLVideoElement` method getVideoPlaybackQuality()
 *   and returns a `web.VideoPlaybackQuality` object containing metrics
 *   how many frames have been lost.
 * 
 *   `videoPQ = videoElement.getVideoPlaybackQuality();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality`
 */
html.HTMLVideoElement.get_video_playback_quality = (function html$HTMLVideoElement$get_video_playback_quality(this$){
return this$.getVideoPlaybackQuality();
});
/**
 * Method.
 * 
 *   The HTMLVideoElement.msFrameStep() method steps the video by
 *   frame forward or one frame backward.
 * 
 *   `HTMLVideoElement.msFrameStep(forward);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msFrameStep`
 */
html.HTMLVideoElement.ms_frame_step = (function html$HTMLVideoElement$ms_frame_step(this$,forward){
return this$.msFrameStep(forward);
});
/**
 * Method.
 * 
 *   The HTMLMediaElement.msInsertVideoEffect() method inserts the
 *   video effect into the media pipeline.
 * 
 *   `str = HTMLMediaElement.msInsertVideoEffect(activatableClassId: DOMString, effectRequired: boolean, config);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msInsertVideoEffect`
 */
html.HTMLVideoElement.ms_insert_video_effect = (function html$HTMLVideoElement$ms_insert_video_effect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___47819 = arguments.length;
var i__42557__auto___47820 = (0);
while(true){
if((i__42557__auto___47820 < len__42556__auto___47819)){
args__42563__auto__.push((arguments[i__42557__auto___47820]));

var G__47821 = (i__42557__auto___47820 + (1));
i__42557__auto___47820 = G__47821;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLVideoElement.ms_insert_video_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLVideoElement.ms_insert_video_effect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.msInsertVideoEffect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLVideoElement.ms_insert_video_effect.cljs$lang$maxFixedArity = (1);

html.HTMLVideoElement.ms_insert_video_effect.cljs$lang$applyTo = (function (seq47817){
var G__47818 = cljs.core.first.call(null,seq47817);
var seq47817__$1 = cljs.core.next.call(null,seq47817);
return html.HTMLVideoElement.ms_insert_video_effect.cljs$core$IFn$_invoke$arity$variadic(G__47818,seq47817__$1);
});

/**
 * Property.
 * 
 *   msHorizontalMirror is a read/write property which gets or sets
 *   a video element is flipped horizontally in the display.
 * 
 *   `HTMLVideoElement.msHorizontalMirror: boolean;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msHorizontalMirror`
 */
html.HTMLVideoElement.ms_horizontal_mirror = (function html$HTMLVideoElement$ms_horizontal_mirror(this$){
return this$.msHorizontalMirror();
});
/**
 * Property.
 * 
 *   msHorizontalMirror is a read/write property which gets or sets
 *   a video element is flipped horizontally in the display.
 * 
 *   `HTMLVideoElement.msHorizontalMirror: boolean;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msHorizontalMirror`
 */
html.HTMLVideoElement.set_ms_horizontal_mirror_BANG_ = (function html$HTMLVideoElement$set_ms_horizontal_mirror_BANG_(this$,val){
return (this$["msHorizontalMirror"] = val);
});
/**
 * Property.
 * 
 *   msIsLayoutOptimalForPlayback is a read-only property which indicates
 *   the video can be rendered more efficiently.
 * 
 *   `HTMLVideoElement.msIsLayoutOptimalForPlayback: DOMString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback`
 */
html.HTMLVideoElement.ms_is_layout_optimal_for_playback = (function html$HTMLVideoElement$ms_is_layout_optimal_for_playback(this$){
return this$.msIsLayoutOptimalForPlayback();
});
/**
 * Property.
 * 
 *   msIsLayoutOptimalForPlayback is a read-only property which indicates
 *   the video can be rendered more efficiently.
 * 
 *   `HTMLVideoElement.msIsLayoutOptimalForPlayback: DOMString;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback`
 */
html.HTMLVideoElement.set_ms_is_layout_optimal_for_playback_BANG_ = (function html$HTMLVideoElement$set_ms_is_layout_optimal_for_playback_BANG_(this$,val){
return (this$["msIsLayoutOptimalForPlayback"] = val);
});
/**
 * Property.
 * 
 *   msIsStereo3D is a read-only property which determines whether
 *   system considers the loaded video source to be stereo 3-D or
 * 
 *   `HTMLVideoElement.msIsStereo3D: boolean;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsStereo3D`
 */
html.HTMLVideoElement.ms_is_stereo_3d = (function html$HTMLVideoElement$ms_is_stereo_3d(this$){
return this$.msIsStereo3D();
});
/**
 * Property.
 * 
 *   msIsStereo3D is a read-only property which determines whether
 *   system considers the loaded video source to be stereo 3-D or
 * 
 *   `HTMLVideoElement.msIsStereo3D: boolean;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msIsStereo3D`
 */
html.HTMLVideoElement.set_ms_is_stereo_3d_BANG_ = (function html$HTMLVideoElement$set_ms_is_stereo_3d_BANG_(this$,val){
return (this$["msIsStereo3D"] = val);
});
/**
 * Property.
 * 
 *   msZoom is a read/write property which gets or sets whether the
 *   frame is trimmed, on the top and bottom or left and right, to
 *   the video display.
 * 
 *   `HTMLVideoElement.msZoom;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msZoom`
 */
html.HTMLVideoElement.ms_zoom = (function html$HTMLVideoElement$ms_zoom(this$){
return this$.msZoom();
});
/**
 * Property.
 * 
 *   msZoom is a read/write property which gets or sets whether the
 *   frame is trimmed, on the top and bottom or left and right, to
 *   the video display.
 * 
 *   `HTMLVideoElement.msZoom;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/msZoom`
 */
html.HTMLVideoElement.set_ms_zoom_BANG_ = (function html$HTMLVideoElement$set_ms_zoom_BANG_(this$,val){
return (this$["msZoom"] = val);
});
/**
 * Property.
 * 
 *   The `html.HTMLVideoElement` interface's read-only videoHeight
 *   indicates the intrinsic height of the video, expressed in CSS
 *   In simple terms, this is the height of the media in its natural
 * 
 *   `height = htmlVideoElement.videoHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight`
 */
html.HTMLVideoElement.video_height = (function html$HTMLVideoElement$video_height(this$){
return this$.videoHeight();
});
/**
 * Property.
 * 
 *   The `html.HTMLVideoElement` interface's read-only videoWidth
 *   indicates the intrinsic width of the video, expressed in CSS
 *   In simple terms, this is the width of the media in its natural
 * 
 *   `width = htmlVideoElement.videoWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth`
 */
html.HTMLVideoElement.video_width = (function html$HTMLVideoElement$video_width(this$){
return this$.videoWidth();
});

//# sourceMappingURL=HTMLVideoElement.js.map?rel=1565798823286
