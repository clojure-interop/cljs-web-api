// Compiled by ClojureScript 1.9.946 {}
goog.provide('vr.VREyeParameters');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The fieldOfView read-only property of the `vr.VREyeParameters`
 *   returns a `vr.VRFieldOfView` object describing the current field
 *   view for the eye, which can vary as the user adjusts their interpupillary
 *   (IPD).
 * 
 *   `var myFOV = eyeParametersInstance.fieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/fieldOfView`
 */
vr.VREyeParameters.field_of_view = (function vr$VREyeParameters$field_of_view(this$){
return this$.fieldOfView();
});
/**
 * Property.
 * 
 *   The fieldOfView read-only property of the `vr.VREyeParameters`
 *   returns a `vr.VRFieldOfView` object describing the current field
 *   view for the eye, which can vary as the user adjusts their interpupillary
 *   (IPD).
 * 
 *   `var myFOV = eyeParametersInstance.fieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/fieldOfView`
 */
vr.VREyeParameters.set_field_of_view_BANG_ = (function vr$VREyeParameters$set_field_of_view_BANG_(this$,val){
return (this$["fieldOfView"] = val);
});
/**
 * Property.
 * 
 *   The maximumFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the maximum supported field of view for the current
 * 
 *   `var maxFOV = myEyeParameters.maximumFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/maximumFieldOfView`
 */
vr.VREyeParameters.maximum_field_of_view = (function vr$VREyeParameters$maximum_field_of_view(this$){
return this$.maximumFieldOfView();
});
/**
 * Property.
 * 
 *   The maximumFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the maximum supported field of view for the current
 * 
 *   `var maxFOV = myEyeParameters.maximumFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/maximumFieldOfView`
 */
vr.VREyeParameters.set_maximum_field_of_view_BANG_ = (function vr$VREyeParameters$set_maximum_field_of_view_BANG_(this$,val){
return (this$["maximumFieldOfView"] = val);
});
/**
 * Property.
 * 
 *   The minimumFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the minimum supported field of view for the current
 * 
 *   `var minFOV = myEyeParameters.minimumFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/minimumFieldOfView`
 */
vr.VREyeParameters.minimum_field_of_view = (function vr$VREyeParameters$minimum_field_of_view(this$){
return this$.minimumFieldOfView();
});
/**
 * Property.
 * 
 *   The minimumFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the minimum supported field of view for the current
 * 
 *   `var minFOV = myEyeParameters.minimumFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/minimumFieldOfView`
 */
vr.VREyeParameters.set_minimum_field_of_view_BANG_ = (function vr$VREyeParameters$set_minimum_field_of_view_BANG_(this$,val){
return (this$["minimumFieldOfView"] = val);
});
/**
 * Property.
 * 
 *   The offset read-only property of the `vr.VREyeParameters` interface
 *   the offset from the center point between the user's eyes to the
 *   of the eye, measured in meters.
 * 
 *   `var myOffset = eyeParametersInstance.offset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/offset`
 */
vr.VREyeParameters.offset = (function vr$VREyeParameters$offset(this$){
return this$.offset();
});
/**
 * Property.
 * 
 *   The offset read-only property of the `vr.VREyeParameters` interface
 *   the offset from the center point between the user's eyes to the
 *   of the eye, measured in meters.
 * 
 *   `var myOffset = eyeParametersInstance.offset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/offset`
 */
vr.VREyeParameters.set_offset_BANG_ = (function vr$VREyeParameters$set_offset_BANG_(this$,val){
return (this$["offset"] = val);
});
/**
 * Property.
 * 
 *   The recommendedFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the recommended field of view for the current eye —
 *   based on user calibration.
 * 
 *   `var recFOV = myEyeParameters.recommendedFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/recommendedFieldOfView`
 */
vr.VREyeParameters.recommended_field_of_view = (function vr$VREyeParameters$recommended_field_of_view(this$){
return this$.recommendedFieldOfView();
});
/**
 * Property.
 * 
 *   The recommendedFieldOfView read-only property of the `vr.VREyeParameters`
 *   describes the recommended field of view for the current eye —
 *   based on user calibration.
 * 
 *   `var recFOV = myEyeParameters.recommendedFieldOfView;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/recommendedFieldOfView`
 */
vr.VREyeParameters.set_recommended_field_of_view_BANG_ = (function vr$VREyeParameters$set_recommended_field_of_view_BANG_(this$,val){
return (this$["recommendedFieldOfView"] = val);
});
/**
 * Property.
 * 
 *   The renderHeight read-only property of the `vr.VREyeParameters`
 *   describes the recommended render target height of each eye viewport,
 *   pixels.
 * 
 *   `var myRenderHeight = eyeParametersInstance.renderHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderHeight`
 */
vr.VREyeParameters.render_height = (function vr$VREyeParameters$render_height(this$){
return this$.renderHeight();
});
/**
 * Property.
 * 
 *   The renderHeight read-only property of the `vr.VREyeParameters`
 *   describes the recommended render target height of each eye viewport,
 *   pixels.
 * 
 *   `var myRenderHeight = eyeParametersInstance.renderHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderHeight`
 */
vr.VREyeParameters.set_render_height_BANG_ = (function vr$VREyeParameters$set_render_height_BANG_(this$,val){
return (this$["renderHeight"] = val);
});
/**
 * Property.
 * 
 *   The renderRect read-only property of the `vr.VREyeParameters`
 *   specifies the viewport of a canvas into which visuals for the
 *   eye should be rendered.
 * 
 *   `var myRenderRect = MyEyeParameters.renderRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderRect`
 */
vr.VREyeParameters.render_rect = (function vr$VREyeParameters$render_rect(this$){
return this$.renderRect();
});
/**
 * Property.
 * 
 *   The renderRect read-only property of the `vr.VREyeParameters`
 *   specifies the viewport of a canvas into which visuals for the
 *   eye should be rendered.
 * 
 *   `var myRenderRect = MyEyeParameters.renderRect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderRect`
 */
vr.VREyeParameters.set_render_rect_BANG_ = (function vr$VREyeParameters$set_render_rect_BANG_(this$,val){
return (this$["renderRect"] = val);
});
/**
 * Property.
 * 
 *   The renderWidth read-only property of the `vr.VREyeParameters`
 *   describes the recommended render target width of each eye viewport,
 *   pixels.
 * 
 *   `var myRenderWidth = eyeParametersInstance.renderWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderWidth`
 */
vr.VREyeParameters.render_width = (function vr$VREyeParameters$render_width(this$){
return this$.renderWidth();
});
/**
 * Property.
 * 
 *   The renderWidth read-only property of the `vr.VREyeParameters`
 *   describes the recommended render target width of each eye viewport,
 *   pixels.
 * 
 *   `var myRenderWidth = eyeParametersInstance.renderWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/VREyeParameters/renderWidth`
 */
vr.VREyeParameters.set_render_width_BANG_ = (function vr$VREyeParameters$set_render_width_BANG_(this$,val){
return (this$["renderWidth"] = val);
});

//# sourceMappingURL=VREyeParameters.js.map?rel=1565798842743
