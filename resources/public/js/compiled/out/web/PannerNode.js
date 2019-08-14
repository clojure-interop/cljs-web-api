// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PannerNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The PannerNode() constructor of the Web Audio API creates a new `web.PannerNode` object instance.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA `web.BaseAudioContext` representing the audio context you want the node to be associated with.
 *   \toptions Optional
 *   \tA PannerOptions dictionary object defining the properties you want the PannerNode to have (It also inherits the options defined in the AudioNodeOptions dictionary.):
 * 
 *   \t\tpanningModel: The `web.PannerNode.panningModel` you want the `web.PannerNode` to have (the default is equalpower.)
 *   \t\tdistanceModel: The `web.PannerNode.distanceModel` you want the `web.PannerNode` to have (the default is inverse.)
 *   \t\tpositionX: The `web.PannerNode.positionX` you want the `web.PannerNode` to have (the default is 0.)
 *   \t\tpositionY: The `web.PannerNode.positionY` you want the `web.PannerNode` to have (the default is 0.)
 *   \t\tpositionZ: The `web.PannerNode.positionZ` you want the `web.PannerNode` to have (the default is 0.)
 *   \t\torientationX: The `web.PannerNode.orientationX` you want the `web.PannerNode` to have (the default is 1.)
 *   \t\torientationY: The `web.PannerNode.orientationY` you want the `web.PannerNode` to have (the default is 0.)
 *   \t\torientationZ: The `web.PannerNode.orientationZ` you want the `web.PannerNode` to have (the default is 0.)
 *   \t\trefDistance: The `web.PannerNode.refDistance` you want the `web.PannerNode` to have. The default is 1, and negative values are not allowed.
 *   \t\tmaxDistance: The `web.PannerNode.maxDistance` you want the `web.PannerNode` to have. The default is 10000, and non-positive values are not allowed.
 *   \t\trollOffFactor: The `web.PannerNode.rollOffFactor` you want the `web.PannerNode` to have. The default is 1, and negative values are not allowed.
 *   \t\tconeInnerAngle: The `web.PannerNode.coneInnerAngle` you want the `web.PannerNode` to have (the default is 360.)
 *   \t\tconeOuterAngle: The `web.PannerNode.coneOuterAngle` you want the `web.PannerNode` to have (the default is 360.)
 *   \t\tconeOuterGain: The `web.PannerNode.coneOuterGain` you want the `web.PannerNode` to have. The default is 0, and its value can be in the range 0–1.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/PannerNode`
 */
web.PannerNode.constructor$ = PannerNode;
/**
 * Method.
 * 
 *   Void.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.setOrientation(1,0,0);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setOrientation`
 */
web.PannerNode.set_orientation = (function web$PannerNode$set_orientation(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43243 = arguments.length;
var i__42557__auto___43244 = (0);
while(true){
if((i__42557__auto___43244 < len__42556__auto___43243)){
args__42563__auto__.push((arguments[i__42557__auto___43244]));

var G__43245 = (i__42557__auto___43244 + (1));
i__42557__auto___43244 = G__43245;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PannerNode.set_orientation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PannerNode.set_orientation.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setOrientation,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PannerNode.set_orientation.cljs$lang$maxFixedArity = (1);

web.PannerNode.set_orientation.cljs$lang$applyTo = (function (seq43241){
var G__43242 = cljs.core.first.call(null,seq43241);
var seq43241__$1 = cljs.core.next.call(null,seq43241);
return web.PannerNode.set_orientation.cljs$core$IFn$_invoke$arity$variadic(G__43242,seq43241__$1);
});

/**
 * Method.
 * 
 *   Void.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.setPosition(0,0,0);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setPosition`
 */
web.PannerNode.set_position = (function web$PannerNode$set_position(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43248 = arguments.length;
var i__42557__auto___43249 = (0);
while(true){
if((i__42557__auto___43249 < len__42556__auto___43248)){
args__42563__auto__.push((arguments[i__42557__auto___43249]));

var G__43250 = (i__42557__auto___43249 + (1));
i__42557__auto___43249 = G__43250;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PannerNode.set_position.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PannerNode.set_position.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setPosition,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PannerNode.set_position.cljs$lang$maxFixedArity = (1);

web.PannerNode.set_position.cljs$lang$applyTo = (function (seq43246){
var G__43247 = cljs.core.first.call(null,seq43246);
var seq43246__$1 = cljs.core.next.call(null,seq43246);
return web.PannerNode.set_position.cljs$core$IFn$_invoke$arity$variadic(G__43247,seq43246__$1);
});

/**
 * Method.
 * 
 *   The setVelocity() method of the `web.PannerNode` Interface defines
 *   velocity vector of the audio source — how fast it is moving and
 *   what direction.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.setVelocity(0,0,17);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setVelocity`
 */
web.PannerNode.set_velocity = (function web$PannerNode$set_velocity(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43253 = arguments.length;
var i__42557__auto___43254 = (0);
while(true){
if((i__42557__auto___43254 < len__42556__auto___43253)){
args__42563__auto__.push((arguments[i__42557__auto___43254]));

var G__43255 = (i__42557__auto___43254 + (1));
i__42557__auto___43254 = G__43255;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PannerNode.set_velocity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PannerNode.set_velocity.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setVelocity,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PannerNode.set_velocity.cljs$lang$maxFixedArity = (1);

web.PannerNode.set_velocity.cljs$lang$applyTo = (function (seq43251){
var G__43252 = cljs.core.first.call(null,seq43251);
var seq43251__$1 = cljs.core.next.call(null,seq43251);
return web.PannerNode.set_velocity.cljs$core$IFn$_invoke$arity$variadic(G__43252,seq43251__$1);
});

/**
 * Property.
 * 
 *   A double.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneInnerAngle = 360;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneInnerAngle`
 */
web.PannerNode.cone_inner_angle = (function web$PannerNode$cone_inner_angle(this$){
return this$.coneInnerAngle();
});
/**
 * Property.
 * 
 *   A double.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneInnerAngle = 360;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneInnerAngle`
 */
web.PannerNode.set_cone_inner_angle_BANG_ = (function web$PannerNode$set_cone_inner_angle_BANG_(this$,val){
return (this$["coneInnerAngle"] = val);
});
/**
 * Property.
 * 
 *   A double.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneOuterAngle = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterAngle`
 */
web.PannerNode.cone_outer_angle = (function web$PannerNode$cone_outer_angle(this$){
return this$.coneOuterAngle();
});
/**
 * Property.
 * 
 *   A double.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneOuterAngle = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterAngle`
 */
web.PannerNode.set_cone_outer_angle_BANG_ = (function web$PannerNode$set_cone_outer_angle_BANG_(this$,val){
return (this$["coneOuterAngle"] = val);
});
/**
 * Property.
 * 
 *   The coneOuterGain property of the `web.PannerNode` interface
 *   a double value, describing the amount of volume reduction outside
 *   cone, defined by the `web.coneOuterAngle` attribute.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneOuterGain = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterGain`
 */
web.PannerNode.cone_outer_gain = (function web$PannerNode$cone_outer_gain(this$){
return this$.coneOuterGain();
});
/**
 * Property.
 * 
 *   The coneOuterGain property of the `web.PannerNode` interface
 *   a double value, describing the amount of volume reduction outside
 *   cone, defined by the `web.coneOuterAngle` attribute.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.coneOuterGain = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterGain`
 */
web.PannerNode.set_cone_outer_gain_BANG_ = (function web$PannerNode$set_cone_outer_gain_BANG_(this$,val){
return (this$["coneOuterGain"] = val);
});
/**
 * Property.
 * 
 *   A enum — see DistanceModelType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.distanceModel = 'inverse';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel`
 */
web.PannerNode.distance_model = (function web$PannerNode$distance_model(this$){
return this$.distanceModel();
});
/**
 * Property.
 * 
 *   A enum — see DistanceModelType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.distanceModel = 'inverse';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel`
 */
web.PannerNode.set_distance_model_BANG_ = (function web$PannerNode$set_distance_model_BANG_(this$,val){
return (this$["distanceModel"] = val);
});
/**
 * Property.
 * 
 *   A double. The default is 10000, and non-positive values are not
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.maxDistance = 10000;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance`
 */
web.PannerNode.max_distance = (function web$PannerNode$max_distance(this$){
return this$.maxDistance();
});
/**
 * Property.
 * 
 *   A double. The default is 10000, and non-positive values are not
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.maxDistance = 10000;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance`
 */
web.PannerNode.set_max_distance_BANG_ = (function web$PannerNode$set_max_distance_BANG_(this$,val){
return (this$["maxDistance"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the X component of the direction
 *   which the audio source is facing, in 3D Cartesian coordinate
 * 
 *   `var orientationX = PannerNode.orientationX;
 * 
 *   PannerNode.orientationX.value = newOrientationX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`
 */
web.PannerNode.orientation_x = (function web$PannerNode$orientation_x(this$){
return this$.orientationX();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the X component of the direction
 *   which the audio source is facing, in 3D Cartesian coordinate
 * 
 *   `var orientationX = PannerNode.orientationX;
 * 
 *   PannerNode.orientationX.value = newOrientationX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`
 */
web.PannerNode.set_orientation_x_BANG_ = (function web$PannerNode$set_orientation_x_BANG_(this$,val){
return (this$["orientationX"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Y component of the direction
 *   audio source is facing, in 3D Cartesian coordinate space.
 * 
 *   `var orientationY = PannerNode.orientationY;
 * 
 *   PannerNode.orientationY.value = newOrientationY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`
 */
web.PannerNode.orientation_y = (function web$PannerNode$orientation_y(this$){
return this$.orientationY();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Y component of the direction
 *   audio source is facing, in 3D Cartesian coordinate space.
 * 
 *   `var orientationY = PannerNode.orientationY;
 * 
 *   PannerNode.orientationY.value = newOrientationY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`
 */
web.PannerNode.set_orientation_y_BANG_ = (function web$PannerNode$set_orientation_y_BANG_(this$,val){
return (this$["orientationY"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Z component of the direction
 *   audio source is facing, in 3D Cartesian coordinate space.
 * 
 *   `var orientationZ = PannerNode.orientationZ;
 * 
 *   PannerNode.orientationZ.value = newOrientationZ;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationZ`
 */
web.PannerNode.orientation_z = (function web$PannerNode$orientation_z(this$){
return this$.orientationZ();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Z component of the direction
 *   audio source is facing, in 3D Cartesian coordinate space.
 * 
 *   `var orientationZ = PannerNode.orientationZ;
 * 
 *   PannerNode.orientationZ.value = newOrientationZ;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationZ`
 */
web.PannerNode.set_orientation_z_BANG_ = (function web$PannerNode$set_orientation_z_BANG_(this$,val){
return (this$["orientationZ"] = val);
});
/**
 * Property.
 * 
 *   A enum — see PanningModelType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.panningModel = 'HRTF';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/panningModel`
 */
web.PannerNode.panning_model = (function web$PannerNode$panning_model(this$){
return this$.panningModel();
});
/**
 * Property.
 * 
 *   A enum — see PanningModelType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.panningModel = 'HRTF';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/panningModel`
 */
web.PannerNode.set_panning_model_BANG_ = (function web$PannerNode$set_panning_model_BANG_(this$,val){
return (this$["panningModel"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the X coordinate of the
 *   source's position, in 3D Cartesian coordinates. The default value
 *   0.
 * 
 *   `var positionX = PannerNode.positionX;
 * 
 *   PannerNode.positionX.value = newPositionX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`
 */
web.PannerNode.position_x = (function web$PannerNode$position_x(this$){
return this$.positionX();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the X coordinate of the
 *   source's position, in 3D Cartesian coordinates. The default value
 *   0.
 * 
 *   `var positionX = PannerNode.positionX;
 * 
 *   PannerNode.positionX.value = newPositionX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`
 */
web.PannerNode.set_position_x_BANG_ = (function web$PannerNode$set_position_x_BANG_(this$,val){
return (this$["positionX"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Y coordinate of the
 *   source's position, in 3D Cartesian coordinates.
 * 
 *   `var positionY = PannerNode.positionY;
 * 
 *   PannerNode.positionY.value = newPositionY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`
 */
web.PannerNode.position_y = (function web$PannerNode$position_y(this$){
return this$.positionY();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Y coordinate of the
 *   source's position, in 3D Cartesian coordinates.
 * 
 *   `var positionY = PannerNode.positionY;
 * 
 *   PannerNode.positionY.value = newPositionY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`
 */
web.PannerNode.set_position_y_BANG_ = (function web$PannerNode$set_position_y_BANG_(this$,val){
return (this$["positionY"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Z coordinate of the
 *   source's position, in 3D Cartesian coordinates.
 * 
 *   `var positionZ = PannerNode.positionZ;
 * 
 *   PannerNode.positionZ.value = newPositionZ;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionZ`
 */
web.PannerNode.position_z = (function web$PannerNode$position_z(this$){
return this$.positionZ();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam` whose value is the Z coordinate of the
 *   source's position, in 3D Cartesian coordinates.
 * 
 *   `var positionZ = PannerNode.positionZ;
 * 
 *   PannerNode.positionZ.value = newPositionZ;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionZ`
 */
web.PannerNode.set_position_z_BANG_ = (function web$PannerNode$set_position_z_BANG_(this$,val){
return (this$["positionZ"] = val);
});
/**
 * Property.
 * 
 *   A non-negative number. If the value is set to less than 0, a
 *   is thrown.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.refDistance = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance`
 */
web.PannerNode.ref_distance = (function web$PannerNode$ref_distance(this$){
return this$.refDistance();
});
/**
 * Property.
 * 
 *   A non-negative number. If the value is set to less than 0, a
 *   is thrown.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.refDistance = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance`
 */
web.PannerNode.set_ref_distance_BANG_ = (function web$PannerNode$set_ref_distance_BANG_(this$,val){
return (this$["refDistance"] = val);
});
/**
 * Property.
 * 
 *   A number whose range depends on the `web.distanceModel` of the
 *   as follows (negative values are not allowed):
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.rolloffFactor = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`
 */
web.PannerNode.rolloff_factor = (function web$PannerNode$rolloff_factor(this$){
return this$.rolloffFactor();
});
/**
 * Property.
 * 
 *   A number whose range depends on the `web.distanceModel` of the
 *   as follows (negative values are not allowed):
 * 
 *   `var audioCtx = new AudioContext();
 *   var panner = audioCtx.createPanner();
 *   panner.rolloffFactor = 1;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`
 */
web.PannerNode.set_rolloff_factor_BANG_ = (function web$PannerNode$set_rolloff_factor_BANG_(this$,val){
return (this$["rolloffFactor"] = val);
});

//# sourceMappingURL=PannerNode.js.map?rel=1565798805074
