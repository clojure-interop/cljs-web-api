// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioListener');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   Void.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.setOrientation(0,0,-1,0,1,0);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/setOrientation`
 */
audio.AudioListener.set_orientation = (function audio$AudioListener$set_orientation(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50639 = arguments.length;
var i__42557__auto___50640 = (0);
while(true){
if((i__42557__auto___50640 < len__42556__auto___50639)){
args__42563__auto__.push((arguments[i__42557__auto___50640]));

var G__50641 = (i__42557__auto___50640 + (1));
i__42557__auto___50640 = G__50641;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioListener.set_orientation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioListener.set_orientation.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setOrientation,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioListener.set_orientation.cljs$lang$maxFixedArity = (1);

audio.AudioListener.set_orientation.cljs$lang$applyTo = (function (seq50637){
var G__50638 = cljs.core.first.call(null,seq50637);
var seq50637__$1 = cljs.core.next.call(null,seq50637);
return audio.AudioListener.set_orientation.cljs$core$IFn$_invoke$arity$variadic(G__50638,seq50637__$1);
});

/**
 * Method.
 * 
 *   Void.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.setPosition(1,1,1);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/setPosition`
 */
audio.AudioListener.set_position = (function audio$AudioListener$set_position(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50644 = arguments.length;
var i__42557__auto___50645 = (0);
while(true){
if((i__42557__auto___50645 < len__42556__auto___50644)){
args__42563__auto__.push((arguments[i__42557__auto___50645]));

var G__50646 = (i__42557__auto___50645 + (1));
i__42557__auto___50645 = G__50646;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioListener.set_position.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioListener.set_position.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setPosition,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioListener.set_position.cljs$lang$maxFixedArity = (1);

audio.AudioListener.set_position.cljs$lang$applyTo = (function (seq50642){
var G__50643 = cljs.core.first.call(null,seq50642);
var seq50642__$1 = cljs.core.next.call(null,seq50642);
return audio.AudioListener.set_position.cljs$core$IFn$_invoke$arity$variadic(G__50643,seq50642__$1);
});

/**
 * Property.
 * 
 *   The deprecated dopplerFactor property of the `audio.AudioListener`
 *   is a double value representing the amount of pitch shift to use
 *   rendering a doppler effect.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.dopplerFactor = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/dopplerFactor`
 */
audio.AudioListener.doppler_factor = (function audio$AudioListener$doppler_factor(this$){
return this$.dopplerFactor();
});
/**
 * Property.
 * 
 *   The deprecated dopplerFactor property of the `audio.AudioListener`
 *   is a double value representing the amount of pitch shift to use
 *   rendering a doppler effect.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.dopplerFactor = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/dopplerFactor`
 */
audio.AudioListener.set_doppler_factor_BANG_ = (function audio$AudioListener$set_doppler_factor_BANG_(this$,val){
return (this$["dopplerFactor"] = val);
});
/**
 * Property.
 * 
 *   The forwardX read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the x value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardX.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardX`
 */
audio.AudioListener.forward_x = (function audio$AudioListener$forward_x(this$){
return this$.forwardX();
});
/**
 * Property.
 * 
 *   The forwardX read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the x value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardX.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardX`
 */
audio.AudioListener.set_forward_x_BANG_ = (function audio$AudioListener$set_forward_x_BANG_(this$,val){
return (this$["forwardX"] = val);
});
/**
 * Property.
 * 
 *   The forwardY read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the y value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardY.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardY`
 */
audio.AudioListener.forward_y = (function audio$AudioListener$forward_y(this$){
return this$.forwardY();
});
/**
 * Property.
 * 
 *   The forwardY read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the y value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardY.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardY`
 */
audio.AudioListener.set_forward_y_BANG_ = (function audio$AudioListener$set_forward_y_BANG_(this$,val){
return (this$["forwardY"] = val);
});
/**
 * Property.
 * 
 *   The forwardZ read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the z value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardZ.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardZ`
 */
audio.AudioListener.forward_z = (function audio$AudioListener$forward_z(this$){
return this$.forwardZ();
});
/**
 * Property.
 * 
 *   The forwardZ read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the z value of the direction
 *   defining the forward direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.forwardZ.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardZ`
 */
audio.AudioListener.set_forward_z_BANG_ = (function audio$AudioListener$set_forward_z_BANG_(this$,val){
return (this$["forwardZ"] = val);
});
/**
 * Property.
 * 
 *   The positionX read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the x position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionX.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionX`
 */
audio.AudioListener.position_x = (function audio$AudioListener$position_x(this$){
return this$.positionX();
});
/**
 * Property.
 * 
 *   The positionX read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the x position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionX.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionX`
 */
audio.AudioListener.set_position_x_BANG_ = (function audio$AudioListener$set_position_x_BANG_(this$,val){
return (this$["positionX"] = val);
});
/**
 * Property.
 * 
 *   The positionY read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the y position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionY.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionY`
 */
audio.AudioListener.position_y = (function audio$AudioListener$position_y(this$){
return this$.positionY();
});
/**
 * Property.
 * 
 *   The positionY read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the y position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionY.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionY`
 */
audio.AudioListener.set_position_y_BANG_ = (function audio$AudioListener$set_position_y_BANG_(this$,val){
return (this$["positionY"] = val);
});
/**
 * Property.
 * 
 *   The positionZ read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the z position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionZ.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionZ`
 */
audio.AudioListener.position_z = (function audio$AudioListener$position_z(this$){
return this$.positionZ();
});
/**
 * Property.
 * 
 *   The positionZ read-only property of the `audio.AudioListener`
 *   is an `audio.AudioParam` representing the z position of the listener
 *   3D cartesian space.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.positionZ.value = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionZ`
 */
audio.AudioListener.set_position_z_BANG_ = (function audio$AudioListener$set_position_z_BANG_(this$,val){
return (this$["positionZ"] = val);
});
/**
 * Property.
 * 
 *   The speedOfSound property of the `audio.AudioListener` interface
 *   a double value representing the speed of sound, in meters per
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.speedOfSound = 343.3;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/speedOfSound`
 */
audio.AudioListener.speed_of_sound = (function audio$AudioListener$speed_of_sound(this$){
return this$.speedOfSound();
});
/**
 * Property.
 * 
 *   The speedOfSound property of the `audio.AudioListener` interface
 *   a double value representing the speed of sound, in meters per
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.speedOfSound = 343.3;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/speedOfSound`
 */
audio.AudioListener.set_speed_of_sound_BANG_ = (function audio$AudioListener$set_speed_of_sound_BANG_(this$,val){
return (this$["speedOfSound"] = val);
});
/**
 * Property.
 * 
 *   The upX read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the x value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upX.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upX`
 */
audio.AudioListener.up_x = (function audio$AudioListener$up_x(this$){
return this$.upX();
});
/**
 * Property.
 * 
 *   The upX read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the x value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upX.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upX`
 */
audio.AudioListener.set_up_x_BANG_ = (function audio$AudioListener$set_up_x_BANG_(this$,val){
return (this$["upX"] = val);
});
/**
 * Property.
 * 
 *   The upY read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the y value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upY.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upY`
 */
audio.AudioListener.up_y = (function audio$AudioListener$up_y(this$){
return this$.upY();
});
/**
 * Property.
 * 
 *   The upY read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the y value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upY.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upY`
 */
audio.AudioListener.set_up_y_BANG_ = (function audio$AudioListener$set_up_y_BANG_(this$,val){
return (this$["upY"] = val);
});
/**
 * Property.
 * 
 *   The upZ read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the z value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upZ.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upZ`
 */
audio.AudioListener.up_z = (function audio$AudioListener$up_z(this$){
return this$.upZ();
});
/**
 * Property.
 * 
 *   The upZ read-only property of the `audio.AudioListener` interface
 *   an `audio.AudioParam` representing the z value of the direction
 *   defining the up direction the listener is pointing in.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myListener = audioCtx.listener;
 *   myListener.upZ.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upZ`
 */
audio.AudioListener.set_up_z_BANG_ = (function audio$AudioListener$set_up_z_BANG_(this$,val){
return (this$["upZ"] = val);
});

//# sourceMappingURL=AudioListener.js.map?rel=1565798841949
