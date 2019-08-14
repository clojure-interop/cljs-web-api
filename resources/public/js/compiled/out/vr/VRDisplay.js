// Compiled by ClojureScript 1.9.946 {}
goog.provide('vr.VRDisplay');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The cancelAnimationFrame() method of the `vr.VRDisplay` interface
 *   a special implementation of `web.Window.cancelAnimationFrame`
 *   unregisters callbacks registered with `vr.VRDisplay.requestAnimationFrame()`.
 * 
 *   `vrDisplayInstance.cancelAnimationFrame(handle);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/cancelAnimationFrame`
 */
vr.VRDisplay.cancel_animation_frame = (function vr$VRDisplay$cancel_animation_frame(this$,handle){
return this$.cancelAnimationFrame(handle);
});
/**
 * Method.
 * 
 *   The exitPresent() method of the `vr.VRDisplay` interface stops
 *   VRDisplay presenting a scene.
 * 
 *   `vrDisplayInstance.exitPresent().then(function() {
 *   // Do something after the presentation has ended
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/exitPresent`
 */
vr.VRDisplay.exit_present = (function vr$VRDisplay$exit_present(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44666 = arguments.length;
var i__42557__auto___44667 = (0);
while(true){
if((i__42557__auto___44667 < len__42556__auto___44666)){
args__42563__auto__.push((arguments[i__42557__auto___44667]));

var G__44668 = (i__42557__auto___44667 + (1));
i__42557__auto___44667 = G__44668;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return vr.VRDisplay.exit_present.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

vr.VRDisplay.exit_present.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.exitPresent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

vr.VRDisplay.exit_present.cljs$lang$maxFixedArity = (1);

vr.VRDisplay.exit_present.cljs$lang$applyTo = (function (seq44664){
var G__44665 = cljs.core.first.call(null,seq44664);
var seq44664__$1 = cljs.core.next.call(null,seq44664);
return vr.VRDisplay.exit_present.cljs$core$IFn$_invoke$arity$variadic(G__44665,seq44664__$1);
});

/**
 * Method.
 * 
 *   The getEyeParameters() method of the `vr.VRDisplay` interface
 *   the `vr.VREyeParameters` object containing the eye parameters
 *   the specified eye.
 * 
 *   `var myEyeParameters = vrDisplayInstance.getEyeParameters(whichEye);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getEyeParameters`
 */
vr.VRDisplay.get_eye_parameters = (function vr$VRDisplay$get_eye_parameters(this$,which_eye){
return this$.getEyeParameters(which_eye);
});
/**
 * Method.
 * 
 *   The getFrameData() method of the `vr.VRDisplay` interface accepts
 *   `vr.VRFrameData` object and populates it with the information
 *   to render the current frame.
 * 
 *   `vrDisplayInstance.getFrameData(frameData);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getFrameData`
 */
vr.VRDisplay.get_frame_data = (function vr$VRDisplay$get_frame_data(this$,frame_data){
return this$.getFrameData(frame_data);
});
/**
 * Method.
 * 
 *   The getImmediatePose() method of the `vr.VRDisplay` interface
 *   a `vr.VRPose` object defining the current pose of the VRDisplay,
 *   no prediction applied.
 * 
 *   `var myImmediatePose = vrDisplayInstance.getImmediatePose();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getImmediatePose`
 */
vr.VRDisplay.get_immediate_pose = (function vr$VRDisplay$get_immediate_pose(this$){
return this$.getImmediatePose();
});
/**
 * Method.
 * 
 *   The getLayers() method of the `vr.VRDisplay` interface returns
 *   layers currently being presented by the VRDisplay.
 * 
 *   `var myLayers = vrDisplayInstance.getLayers();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getLayers`
 */
vr.VRDisplay.get_layers = (function vr$VRDisplay$get_layers(this$){
return this$.getLayers();
});
/**
 * Method.
 * 
 *   The getPose() method of the `vr.VRDisplay` interface returns
 *   `vr.VRPose` object defining the future predicted pose of the
 *   as it will be when the current frame is actually presented.
 * 
 *   `var myPose = vrDisplayInstance.getPose();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getPose`
 */
vr.VRDisplay.get_pose = (function vr$VRDisplay$get_pose(this$){
return this$.getPose();
});
/**
 * Method.
 * 
 *   The requestAnimationFrame() method of the `vr.VRDisplay` interface
 *   a special implementation of `web.Window.requestAnimationFrame`
 *   a callback function that will be called every time a new frame
 *   the VRDisplay presentation is rendered:
 * 
 *   `var handle = vrDisplayInstance.requestAnimationFrame(callback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/requestAnimationFrame`
 */
vr.VRDisplay.request_animation_frame = (function vr$VRDisplay$request_animation_frame(this$,callback){
return this$.requestAnimationFrame(callback);
});
/**
 * Method.
 * 
 *   The requestPresent() method of the `vr.VRDisplay` interface starts
 *   VRDisplay presenting a scene.
 * 
 *   `vrDisplayInstance.requestPresent(layers).then(function() {
 *   // Do something after the presentation has begun
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/requestPresent`
 */
vr.VRDisplay.request_present = (function vr$VRDisplay$request_present(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44671 = arguments.length;
var i__42557__auto___44672 = (0);
while(true){
if((i__42557__auto___44672 < len__42556__auto___44671)){
args__42563__auto__.push((arguments[i__42557__auto___44672]));

var G__44673 = (i__42557__auto___44672 + (1));
i__42557__auto___44672 = G__44673;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return vr.VRDisplay.request_present.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

vr.VRDisplay.request_present.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestPresent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

vr.VRDisplay.request_present.cljs$lang$maxFixedArity = (1);

vr.VRDisplay.request_present.cljs$lang$applyTo = (function (seq44669){
var G__44670 = cljs.core.first.call(null,seq44669);
var seq44669__$1 = cljs.core.next.call(null,seq44669);
return vr.VRDisplay.request_present.cljs$core$IFn$_invoke$arity$variadic(G__44670,seq44669__$1);
});

/**
 * Method.
 * 
 *   The resetPose() method of the `vr.VRDisplay` interface resets
 *   pose for the VRDisplay, treating its current `vr.VRPose.position`
 *   `vr.VRPose.orientation` as the \"origin/zero\" values.
 * 
 *   `vrDisplayInstance.resetPose();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/resetPose`
 */
vr.VRDisplay.reset_pose = (function vr$VRDisplay$reset_pose(this$){
return this$.resetPose();
});
/**
 * Method.
 * 
 *   The submitFrame() method of the `vr.VRDisplay` interface captures
 *   current state of the `vr.VRLayerInit` currently being presented
 *   displays it on the VRDisplay.
 * 
 *   `vrDisplayInstance.submitFrame();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/submitFrame`
 */
vr.VRDisplay.submit_frame = (function vr$VRDisplay$submit_frame(this$){
return this$.submitFrame();
});
/**
 * Method.
 * 
 *   The hardwareUnitId read-only property of the `vr.VRDevice` interface
 *   the distinct hardware ID for the overall hardware unit that this
 *   is a part of. All devices that are part of the same physical
 *   of hardware will have the same hardwareUnitId.
 * 
 *   `var hardwareID = VRDevice.hardwareUnitId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/hardwareUnitId`
 */
vr.VRDisplay.hardware_unit_id = (function vr$VRDisplay$hardware_unit_id(this$){
return this$.hardwareUnitId();
});
/**
 * Property.
 * 
 *   The capabilities read-only property of the `vr.VRDisplay` interface
 *   a `vr.VRDisplayCapabilities` object that indicates the various
 *   of the VRDisplay.
 * 
 *   `var myCapabilities = vrDisplayInstance.capabilities;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/capabilities`
 */
vr.VRDisplay.capabilities = (function vr$VRDisplay$capabilities(this$){
return this$.capabilities();
});
/**
 * Property.
 * 
 *   The capabilities read-only property of the `vr.VRDisplay` interface
 *   a `vr.VRDisplayCapabilities` object that indicates the various
 *   of the VRDisplay.
 * 
 *   `var myCapabilities = vrDisplayInstance.capabilities;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/capabilities`
 */
vr.VRDisplay.set_capabilities_BANG_ = (function vr$VRDisplay$set_capabilities_BANG_(this$,val){
return (this$["capabilities"] = val);
});
/**
 * Property.
 * 
 *   The depthFar property of the `vr.VRDisplay` interface gets and
 *   the z-depth defining the far plane of the eye view frustum, i.e.
 *   furthest viewable boundary of the scene.
 * 
 *   `var mydepthFar = vrDisplayInstance.depthFar;
 * 
 *   vrDisplayInstance.depthFar = 7500.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthFar`
 */
vr.VRDisplay.depth_far = (function vr$VRDisplay$depth_far(this$){
return this$.depthFar();
});
/**
 * Property.
 * 
 *   The depthFar property of the `vr.VRDisplay` interface gets and
 *   the z-depth defining the far plane of the eye view frustum, i.e.
 *   furthest viewable boundary of the scene.
 * 
 *   `var mydepthFar = vrDisplayInstance.depthFar;
 * 
 *   vrDisplayInstance.depthFar = 7500.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthFar`
 */
vr.VRDisplay.set_depth_far_BANG_ = (function vr$VRDisplay$set_depth_far_BANG_(this$,val){
return (this$["depthFar"] = val);
});
/**
 * Property.
 * 
 *   The depthNear property of the `vr.VRDisplay` interface gets and
 *   the z-depth defining the near plane of the eye view frustum,
 *   the nearest viewable boundary of the scene.
 * 
 *   `var mydepthNear = vrDisplayInstance.depthNear;
 * 
 *   vrDisplayInstance.depthNear = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthNear`
 */
vr.VRDisplay.depth_near = (function vr$VRDisplay$depth_near(this$){
return this$.depthNear();
});
/**
 * Property.
 * 
 *   The depthNear property of the `vr.VRDisplay` interface gets and
 *   the z-depth defining the near plane of the eye view frustum,
 *   the nearest viewable boundary of the scene.
 * 
 *   `var mydepthNear = vrDisplayInstance.depthNear;
 * 
 *   vrDisplayInstance.depthNear = 1.0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthNear`
 */
vr.VRDisplay.set_depth_near_BANG_ = (function vr$VRDisplay$set_depth_near_BANG_(this$,val){
return (this$["depthNear"] = val);
});
/**
 * Property.
 * 
 *   The displayId read-only property of the `vr.VRDisplay` interface
 *   an identifier for this particular VRDisplay, which is also used
 *   an association point in the Gamepad API (see `web.Gamepad.displayId`).
 * 
 *   `var myDisplayID = vrDisplayInstance.displayId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayId`
 */
vr.VRDisplay.display_id = (function vr$VRDisplay$display_id(this$){
return this$.displayId();
});
/**
 * Property.
 * 
 *   The displayId read-only property of the `vr.VRDisplay` interface
 *   an identifier for this particular VRDisplay, which is also used
 *   an association point in the Gamepad API (see `web.Gamepad.displayId`).
 * 
 *   `var myDisplayID = vrDisplayInstance.displayId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayId`
 */
vr.VRDisplay.set_display_id_BANG_ = (function vr$VRDisplay$set_display_id_BANG_(this$,val){
return (this$["displayId"] = val);
});
/**
 * Property.
 * 
 *   The displayName read-only property of the `vr.VRDisplay` interface
 *   a human-readable name to identify the VRDisplay.
 * 
 *   `var myDisplayName = vrDisplayInstance.displayName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayName`
 */
vr.VRDisplay.display_name = (function vr$VRDisplay$display_name(this$){
return this$.displayName();
});
/**
 * Property.
 * 
 *   The displayName read-only property of the `vr.VRDisplay` interface
 *   a human-readable name to identify the VRDisplay.
 * 
 *   `var myDisplayName = vrDisplayInstance.displayName;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayName`
 */
vr.VRDisplay.set_display_name_BANG_ = (function vr$VRDisplay$set_display_name_BANG_(this$,val){
return (this$["displayName"] = val);
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `vr.VRDisplay` interface
 *   a `web.Boolean` indicating whether the VRDisplay is connected
 *   the computer.
 * 
 *   `var isItConnected = vrDisplayInstance.isConnected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isConnected`
 */
vr.VRDisplay.is_connected = (function vr$VRDisplay$is_connected(this$){
return this$.isConnected();
});
/**
 * Property.
 * 
 *   The isConnected read-only property of the `vr.VRDisplay` interface
 *   a `web.Boolean` indicating whether the VRDisplay is connected
 *   the computer.
 * 
 *   `var isItConnected = vrDisplayInstance.isConnected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isConnected`
 */
vr.VRDisplay.set_is_connected_BANG_ = (function vr$VRDisplay$set_is_connected_BANG_(this$,val){
return (this$["isConnected"] = val);
});
/**
 * Property.
 * 
 *   The isPresenting read-only property of the `vr.VRDisplay` interface
 *   a `web.Boolean` indicating whether the VRDisplay is currently
 *   content presented through it.
 * 
 *   `var isItPresenting = vrDisplayInstance.isPresenting;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isPresenting`
 */
vr.VRDisplay.is_presenting = (function vr$VRDisplay$is_presenting(this$){
return this$.isPresenting();
});
/**
 * Property.
 * 
 *   The isPresenting read-only property of the `vr.VRDisplay` interface
 *   a `web.Boolean` indicating whether the VRDisplay is currently
 *   content presented through it.
 * 
 *   `var isItPresenting = vrDisplayInstance.isPresenting;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isPresenting`
 */
vr.VRDisplay.set_is_presenting_BANG_ = (function vr$VRDisplay$set_is_presenting_BANG_(this$,val){
return (this$["isPresenting"] = val);
});
/**
 * Property.
 * 
 *   The stageParameters read-only property of the `vr.VRDisplay`
 *   returns a `vr.VRStageParameters` object containing room-scale
 *   if the VRDisplay is capable of supporting room-scale experiences.
 * 
 *   `var myStageParameters = vrDisplayInstance.stageParameters;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/stageParameters`
 */
vr.VRDisplay.stage_parameters = (function vr$VRDisplay$stage_parameters(this$){
return this$.stageParameters();
});
/**
 * Property.
 * 
 *   The stageParameters read-only property of the `vr.VRDisplay`
 *   returns a `vr.VRStageParameters` object containing room-scale
 *   if the VRDisplay is capable of supporting room-scale experiences.
 * 
 *   `var myStageParameters = vrDisplayInstance.stageParameters;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/stageParameters`
 */
vr.VRDisplay.set_stage_parameters_BANG_ = (function vr$VRDisplay$set_stage_parameters_BANG_(this$,val){
return (this$["stageParameters"] = val);
});

//# sourceMappingURL=VRDisplay.js.map?rel=1565798815631
