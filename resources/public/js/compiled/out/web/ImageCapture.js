// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ImageCapture');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ImageCapture() constructor creates a new `web.ImageCapture` object which creates a new `web.ImageCapture` object.
 * 
 *   videoTrack
 *   A `media.MediaStreamTrack` from which the still images will be taken. This can be any source, such as an incoming stream of a video conference, a playing movie, or the stream from a webcam.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/ImageCapture`
 */
web.ImageCapture.constructor$ = ImageCapture;
/**
 * Method.
 * 
 *   The getPhotoCapabilities() method of the `web.ImageCapture` interface
 *   a `web.Promise` that resolves with a `web.PhotoCapabilities`
 *   containing the ranges of available configuration options.
 * 
 *   `var promise = ImageCapture.getPhotoCapabilities()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoCapabilities`
 */
web.ImageCapture.get_photo_capabilities = (function web$ImageCapture$get_photo_capabilities(this$){
return this$.getPhotoCapabilities();
});
/**
 * Method.
 * 
 *   The getPhotoSettings() property of the `web.ImageCapture` interface
 *   a `web.Promise` that resolves with a `web.PhotoSettings` object
 *   the current photo configuration settings.
 * 
 *   `var promise = ImageCapture.getPhotoSettings()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoSettings`
 */
web.ImageCapture.get_photo_settings = (function web$ImageCapture$get_photo_settings(this$){
return this$.getPhotoSettings();
});
/**
 * Method.
 * 
 *   The grabFrame() property of the `web.ImageCapture` interface
 *   a snapshot of the live video in a `media.MediaStreamTrack`, returning
 *   ImageBitmap, if successful.
 * 
 *   `ImageCapture.grabFrame().then(function(imageBitmap) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/grabFrame`
 */
web.ImageCapture.grab_frame = (function web$ImageCapture$grab_frame(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50520 = arguments.length;
var i__42557__auto___50521 = (0);
while(true){
if((i__42557__auto___50521 < len__42556__auto___50520)){
args__42563__auto__.push((arguments[i__42557__auto___50521]));

var G__50522 = (i__42557__auto___50521 + (1));
i__42557__auto___50521 = G__50522;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ImageCapture.grab_frame.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ImageCapture.grab_frame.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.grabFrame,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ImageCapture.grab_frame.cljs$lang$maxFixedArity = (1);

web.ImageCapture.grab_frame.cljs$lang$applyTo = (function (seq50518){
var G__50519 = cljs.core.first.call(null,seq50518);
var seq50518__$1 = cljs.core.next.call(null,seq50518);
return web.ImageCapture.grab_frame.cljs$core$IFn$_invoke$arity$variadic(G__50519,seq50518__$1);
});

/**
 * Method.
 * 
 *   The takePhoto() method of the `web.ImageCapture` interface takes
 *   single exposure using the video capture device sourcing a `media.MediaStreamTrack`
 *   returns a `web.Promise` that resolves with a `web.Blob` containing
 *   data.
 * 
 *   `var promise = ImageCapture.takePhoto(photoSettings)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/takePhoto`
 */
web.ImageCapture.take_photo = (function web$ImageCapture$take_photo(this$,photo_settings){
return this$.takePhoto(photo_settings);
});
/**
 * Property.
 * 
 *   The track read-only property of the `web.ImageCapture` interface
 *   a reference to the `media.MediaStreamTrack` passed to the `web.ImageCapture()`
 * 
 *   `var mediaStreamTrack = ImageCapture.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`
 */
web.ImageCapture.track = (function web$ImageCapture$track(this$){
return this$.track();
});
/**
 * Property.
 * 
 *   The track read-only property of the `web.ImageCapture` interface
 *   a reference to the `media.MediaStreamTrack` passed to the `web.ImageCapture()`
 * 
 *   `var mediaStreamTrack = ImageCapture.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`
 */
web.ImageCapture.set_track_BANG_ = (function web$ImageCapture$set_track_BANG_(this$,val){
return (this$["track"] = val);
});

//# sourceMappingURL=ImageCapture.js.map?rel=1565798840102
