// Compiled by ClojureScript 1.9.946 {}
goog.provide('vr.VRFrameData');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The `vr.VRFrameData` constructor creates a VRFrameData object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/VRFrameData`
 */
vr.VRFrameData.constructor$ = VRFrameData;
/**
 * Property.
 * 
 *   The leftProjectionMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   projection to be used for the left eye’s rendering.
 * 
 *   `var myLPM = vrFrameDataInstance.leftProjectionMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftProjectionMatrix`
 */
vr.VRFrameData.left_projection_matrix = (function vr$VRFrameData$left_projection_matrix(this$){
return this$.leftProjectionMatrix();
});
/**
 * Property.
 * 
 *   The leftProjectionMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   projection to be used for the left eye’s rendering.
 * 
 *   `var myLPM = vrFrameDataInstance.leftProjectionMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftProjectionMatrix`
 */
vr.VRFrameData.set_left_projection_matrix_BANG_ = (function vr$VRFrameData$set_left_projection_matrix_BANG_(this$,val){
return (this$["leftProjectionMatrix"] = val);
});
/**
 * Property.
 * 
 *   The leftViewMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   view transform to be used for the left eye’s rendering.
 * 
 *   `var myLVM = vrFrameDataInstance.leftViewMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftViewMatrix`
 */
vr.VRFrameData.left_view_matrix = (function vr$VRFrameData$left_view_matrix(this$){
return this$.leftViewMatrix();
});
/**
 * Property.
 * 
 *   The leftViewMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   view transform to be used for the left eye’s rendering.
 * 
 *   `var myLVM = vrFrameDataInstance.leftViewMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/leftViewMatrix`
 */
vr.VRFrameData.set_left_view_matrix_BANG_ = (function vr$VRFrameData$set_left_view_matrix_BANG_(this$,val){
return (this$["leftViewMatrix"] = val);
});
/**
 * Property.
 * 
 *   The pose read-only property of the `vr.VRFrameData` interface
 *   the `vr.VRPose` of the `vr.VRDisplay` at the current `vr.VRFrameData.timestamp`.
 * 
 *   `var myPose = vrFrameDataInstance.pose;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/pose`
 */
vr.VRFrameData.pose = (function vr$VRFrameData$pose(this$){
return this$.pose();
});
/**
 * Property.
 * 
 *   The pose read-only property of the `vr.VRFrameData` interface
 *   the `vr.VRPose` of the `vr.VRDisplay` at the current `vr.VRFrameData.timestamp`.
 * 
 *   `var myPose = vrFrameDataInstance.pose;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/pose`
 */
vr.VRFrameData.set_pose_BANG_ = (function vr$VRFrameData$set_pose_BANG_(this$,val){
return (this$["pose"] = val);
});
/**
 * Property.
 * 
 *   The rightProjectionMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   projection to be used for the right eye’s rendering.
 * 
 *   `var myRPM = vrFrameDataInstance.rightProjectionMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightProjectionMatrix`
 */
vr.VRFrameData.right_projection_matrix = (function vr$VRFrameData$right_projection_matrix(this$){
return this$.rightProjectionMatrix();
});
/**
 * Property.
 * 
 *   The rightProjectionMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   projection to be used for the right eye’s rendering.
 * 
 *   `var myRPM = vrFrameDataInstance.rightProjectionMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightProjectionMatrix`
 */
vr.VRFrameData.set_right_projection_matrix_BANG_ = (function vr$VRFrameData$set_right_projection_matrix_BANG_(this$,val){
return (this$["rightProjectionMatrix"] = val);
});
/**
 * Property.
 * 
 *   The rightViewMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   view transform to be used for the right eye’s rendering.
 * 
 *   `var myRVM = vrFrameDataInstance.rightViewMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightViewMatrix`
 */
vr.VRFrameData.right_view_matrix = (function vr$VRFrameData$right_view_matrix(this$){
return this$.rightViewMatrix();
});
/**
 * Property.
 * 
 *   The rightViewMatrix read-only property of the `vr.VRFrameData`
 *   returns a `web.Float32Array` representing a 4x4 matrix that describes
 *   view transform to be used for the right eye’s rendering.
 * 
 *   `var myRVM = vrFrameDataInstance.rightViewMatrix;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/rightViewMatrix`
 */
vr.VRFrameData.set_right_view_matrix_BANG_ = (function vr$VRFrameData$set_right_view_matrix_BANG_(this$,val){
return (this$["rightViewMatrix"] = val);
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `vr.VRFrameData` interface
 *   a constantly increasing timestamp value representing the time
 *   frame update occurred.
 * 
 *   `var myTimestamp = vrFrameDataInstance.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/timestamp`
 */
vr.VRFrameData.timestamp = (function vr$VRFrameData$timestamp(this$){
return this$.timestamp();
});
/**
 * Property.
 * 
 *   The timestamp read-only property of the `vr.VRFrameData` interface
 *   a constantly increasing timestamp value representing the time
 *   frame update occurred.
 * 
 *   `var myTimestamp = vrFrameDataInstance.timestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRFrameData/timestamp`
 */
vr.VRFrameData.set_timestamp_BANG_ = (function vr$VRFrameData$set_timestamp_BANG_(this$,val){
return (this$["timestamp"] = val);
});

//# sourceMappingURL=VRFrameData.js.map?rel=1565798856890
