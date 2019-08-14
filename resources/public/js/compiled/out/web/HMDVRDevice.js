// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.HMDVRDevice');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getEyeParameters() method of the `web.HMDVRDevice` interface
 *   current parameters for the eye specified as its argument (\"left\"
 *   \"right\") — stored in a `vr.VREyeParameters` object.
 * 
 *   `var myLeftEye = HMDVRDevice.getEyeParameters('left');`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/getEyeParameters`
 */
web.HMDVRDevice.get_eye_parameters = (function web$HMDVRDevice$get_eye_parameters(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52758 = arguments.length;
var i__42557__auto___52759 = (0);
while(true){
if((i__42557__auto___52759 < len__42556__auto___52758)){
args__42563__auto__.push((arguments[i__42557__auto___52759]));

var G__52760 = (i__42557__auto___52759 + (1));
i__42557__auto___52759 = G__52760;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.HMDVRDevice.get_eye_parameters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.HMDVRDevice.get_eye_parameters.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getEyeParameters,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.HMDVRDevice.get_eye_parameters.cljs$lang$maxFixedArity = (1);

web.HMDVRDevice.get_eye_parameters.cljs$lang$applyTo = (function (seq52756){
var G__52757 = cljs.core.first.call(null,seq52756);
var seq52756__$1 = cljs.core.next.call(null,seq52756);
return web.HMDVRDevice.get_eye_parameters.cljs$core$IFn$_invoke$arity$variadic(G__52757,seq52756__$1);
});

/**
 * Method.
 * 
 *   The setFieldOfView() method of the `web.HMDVRDevice` interface
 *   be used to set the field of view for one eye, or both eyes simultaneously.
 * 
 *   `HMDVRDevice.setFieldOfView(leftFOV,rightFOV,zNear,zFar);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/setFieldOfView`
 */
web.HMDVRDevice.set_field_of_view = (function web$HMDVRDevice$set_field_of_view(this$,left_fov,right_fov,z_near,z_far){
return this$.setFieldOfView(left_fov,right_fov,z_near,z_far);
});

//# sourceMappingURL=HMDVRDevice.js.map?rel=1565798858403
