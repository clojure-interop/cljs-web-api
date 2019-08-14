// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioParam');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The cancelAndHoldAtTime() property of the `audio.AudioParam`
 *   cancels all scheduled future changes to the AudioParam but holds
 *   value at a given time until further changes are made using other
 * 
 *   `var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelAndHoldAtTime`
 */
audio.AudioParam.cancel_and_hold_at_time = (function audio$AudioParam$cancel_and_hold_at_time(this$,cancel_time){
return this$.cancelAndHoldAtTime(cancel_time);
});
/**
 * Method.
 * 
 *   A reference to this AudioParam object. In some older implementations
 *   method returns void.
 * 
 *   `var AudioParam = AudioParam.cancelScheduledValues(startTime)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelScheduledValues`
 */
audio.AudioParam.cancel_scheduled_values = (function audio$AudioParam$cancel_scheduled_values(this$,start_time){
return this$.cancelScheduledValues(start_time);
});
/**
 * Method.
 * 
 *   A reference to this AudioParam object. In some browsers older
 *   of this interface return void.
 * 
 *   `var AudioParam = AudioParam.exponentialRampToValueAtTime(value, endTime)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/exponentialRampToValueAtTime`
 */
audio.AudioParam.exponential_ramp_to_value_at_time = (function audio$AudioParam$exponential_ramp_to_value_at_time(this$,value,end_time){
return this$.exponentialRampToValueAtTime(value,end_time);
});
/**
 * Method.
 * 
 *   A reference to this AudioParam object. In some browsers older
 *   of this interface return void.
 * 
 *   `var AudioParam = AudioParam.linearRampToValueAtTime(value, endTime)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime`
 */
audio.AudioParam.linear_ramp_to_value_at_time = (function audio$AudioParam$linear_ramp_to_value_at_time(this$,value,end_time){
return this$.linearRampToValueAtTime(value,end_time);
});
/**
 * Method.
 * 
 *   The setTargetAtTime() method of the `audio.AudioParam` interface
 *   the start of a gradual change to the AudioParam value. This is
 *   for decay or release portions of ADSR envelopes.
 * 
 *   `var paramRef = param.setTargetAtTime(target, startTime, timeConstant);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setTargetAtTime`
 */
audio.AudioParam.set_target_at_time = (function audio$AudioParam$set_target_at_time(this$,target,start_time,time_constant){
return this$.setTargetAtTime(target,start_time,time_constant);
});
/**
 * Method.
 * 
 *   The setValueAtTime() method of the `audio.AudioParam` interface
 *   an instant change to the AudioParam value at a precise time,
 *   measured against `audio.AudioContext.currentTime`. The new value
 *   given in the value parameter.
 * 
 *   `var AudioParam = AudioParam.setValueAtTime(value, startTime)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueAtTime`
 */
audio.AudioParam.set_value_at_time = (function audio$AudioParam$set_value_at_time(this$,value,start_time){
return this$.setValueAtTime(value,start_time);
});
/**
 * Method.
 * 
 *   The setValueCurveAtTime() method of the `audio.AudioParam` interface
 *   the parameter's value to change following a curve defined by
 *   list of values.
 * 
 *   `var paramRef = param.setValueCurveAtTime(values, startTime, duration);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueCurveAtTime`
 */
audio.AudioParam.set_value_curve_at_time = (function audio$AudioParam$set_value_curve_at_time(this$,values,start_time,duration){
return this$.setValueCurveAtTime(values,start_time,duration);
});
/**
 * Property.
 * 
 *   The defaultValue read-only property of the `audio.AudioParam`
 *   represents the initial value of the attributes as defined by
 *   specific `audio.AudioNode` creating the AudioParam.
 * 
 *   `var defaultVal = audioParam.defaultValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/defaultValue`
 */
audio.AudioParam.default_value = (function audio$AudioParam$default_value(this$){
return this$.defaultValue();
});
/**
 * Property.
 * 
 *   The defaultValue read-only property of the `audio.AudioParam`
 *   represents the initial value of the attributes as defined by
 *   specific `audio.AudioNode` creating the AudioParam.
 * 
 *   `var defaultVal = audioParam.defaultValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/defaultValue`
 */
audio.AudioParam.set_default_value_BANG_ = (function audio$AudioParam$set_default_value_BANG_(this$,val){
return (this$["defaultValue"] = val);
});
/**
 * Property.
 * 
 *   The maxValue read-only property of the `audio.AudioParam` interface
 *   the maximum possible value for the parameter's nominal (effective)
 * 
 *   `var maxVal = audioParam.maxValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/maxValue`
 */
audio.AudioParam.max_value = (function audio$AudioParam$max_value(this$){
return this$.maxValue();
});
/**
 * Property.
 * 
 *   The maxValue read-only property of the `audio.AudioParam` interface
 *   the maximum possible value for the parameter's nominal (effective)
 * 
 *   `var maxVal = audioParam.maxValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/maxValue`
 */
audio.AudioParam.set_max_value_BANG_ = (function audio$AudioParam$set_max_value_BANG_(this$,val){
return (this$["maxValue"] = val);
});
/**
 * Property.
 * 
 *   The minValue read-only property of the `audio.AudioParam` interface
 *   the minimum possible value for the parameter's nominal (effective)
 * 
 *   `var minVal = audioParam.minValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/minValue`
 */
audio.AudioParam.min_value = (function audio$AudioParam$min_value(this$){
return this$.minValue();
});
/**
 * Property.
 * 
 *   The minValue read-only property of the `audio.AudioParam` interface
 *   the minimum possible value for the parameter's nominal (effective)
 * 
 *   `var minVal = audioParam.minValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/minValue`
 */
audio.AudioParam.set_min_value_BANG_ = (function audio$AudioParam$set_min_value_BANG_(this$,val){
return (this$["minValue"] = val);
});
/**
 * Property.
 * 
 *   The Web Audio API's `audio.AudioParam` interface property value
 *   or sets the value of this `audio.AudioParam` at the current time.
 * 
 *   `var curValue = audioParam.value;
 *   audioParam.value = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`
 */
audio.AudioParam.value = (function audio$AudioParam$value(this$){
return this$.value();
});
/**
 * Property.
 * 
 *   The Web Audio API's `audio.AudioParam` interface property value
 *   or sets the value of this `audio.AudioParam` at the current time.
 * 
 *   `var curValue = audioParam.value;
 *   audioParam.value = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`
 */
audio.AudioParam.set_value_BANG_ = (function audio$AudioParam$set_value_BANG_(this$,val){
return (this$["value"] = val);
});

//# sourceMappingURL=AudioParam.js.map?rel=1565798811481
