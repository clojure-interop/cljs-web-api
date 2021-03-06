(ns web.audio.AudioParam
  "The Web Audio API's AudioParam interface represents an audio-related
  usually a parameter of an `web.audio.AudioNode` (such as `GainNode.gain`)."
  (:refer-clojure :exclude []))

(defn set-value-at-time
  "Method.

  The setValueAtTime() method of the `web.audio.AudioParam` interface
  an instant change to the AudioParam value at a precise time,
  measured against `AudioContext.currentTime`. The new value is
  in the value parameter.

  `var AudioParam = AudioParam.setValueAtTime(value, startTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueAtTime`"
  [this value start-time]
  (-> this (.setValueAtTime value start-time)))

(defn linear-ramp-to-value-at-time
  "Method.

  A reference to this AudioParam object. In some browsers older
  of this interface return void.

  `var AudioParam = AudioParam.linearRampToValueAtTime(value, endTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime`"
  [this value end-time]
  (-> this (.linearRampToValueAtTime value end-time)))

(defn exponential-ramp-to-value-at-time
  "Method.

  A reference to this AudioParam object. In some browsers older
  of this interface return void.

  `var AudioParam = AudioParam.exponentialRampToValueAtTime(value, endTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/exponentialRampToValueAtTime`"
  [this value end-time]
  (-> this (.exponentialRampToValueAtTime value end-time)))

(defn set-target-at-time
  "Method.

  The setTargetAtTime() method of the `web.audio.AudioParam` interface
  the start of a gradual change to the AudioParam value. This is
  for decay or release portions of ADSR envelopes.

  `var paramRef = param.setTargetAtTime(target, startTime, timeConstant);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setTargetAtTime`"
  [this target start-time time-constant]
  (-> this (.setTargetAtTime target start-time time-constant)))

(defn set-value-curve-at-time
  "Method.

  The setValueCurveAtTime() method of the `web.audio.AudioParam`
  schedules the parameter's value to change following a curve defined
  a list of values.

  `var paramRef = param.setValueCurveAtTime(values, startTime, duration);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueCurveAtTime`"
  [this values start-time duration]
  (-> this (.setValueCurveAtTime values start-time duration)))

(defn cancel-scheduled-values
  "Method.

  A reference to this AudioParam object. In some older implementations
  method returns void.

  `var AudioParam = AudioParam.cancelScheduledValues(startTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelScheduledValues`"
  [this start-time]
  (-> this (.cancelScheduledValues start-time)))

(defn cancel-and-hold-at-time
  "Method.

  The cancelAndHoldAtTime() property of the `web.audio.AudioParam`
  cancels all scheduled future changes to the AudioParam but holds
  value at a given time until further changes are made using other

  `var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelAndHoldAtTime`"
  [this cancel-time]
  (-> this (.cancelAndHoldAtTime cancel-time)))

(defn default-value
  "Property.

  [Read Only]

  The defaultValue read-only property of the `web.audio.AudioParam`
  represents the initial value of the attributes as defined by
  specific `web.audio.AudioNode` creating the AudioParam.

  `var defaultVal = audioParam.defaultValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/defaultValue`"
  [this]
  (-> this (.-defaultValue)))

(defn max-value
  "Property.

  [Read Only]

  The maxValue read-only property of the `web.audio.AudioParam`
  represents the maximum possible value for the parameter's nominal
  range.

  `var maxVal = audioParam.maxValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/maxValue`"
  [this]
  (-> this (.-maxValue)))

(defn min-value
  "Property.

  [Read Only]

  The minValue read-only property of the `web.audio.AudioParam`
  represents the minimum possible value for the parameter's nominal
  range.

  `var minVal = audioParam.minValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/minValue`"
  [this]
  (-> this (.-minValue)))

(defn value
  "Property.

  The Web Audio API's `web.audio.AudioParam` interface property
  gets or sets the value of this `web.audio.AudioParam` at the
  time.

  `var curValue = audioParam.value;
  audioParam.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  The Web Audio API's `web.audio.AudioParam` interface property
  gets or sets the value of this `web.audio.AudioParam` at the
  time.

  `var curValue = audioParam.value;
  audioParam.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`"
  [this val]
  (aset this "value" val))

