(ns audio.AudioParam
  "The Web Audio API's AudioParam interface represents an audio-related
  usually a parameter of an `audio.AudioNode` (such as `web.GainNode.gain`)."
  (:refer-clojure :exclude []))

(defn cancel-and-hold-at-time
  "Method.

  The cancelAndHoldAtTime() property of the `audio.AudioParam`
  cancels all scheduled future changes to the AudioParam but holds
  value at a given time until further changes are made using other

  `var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelAndHoldAtTime`"
  [this cancel-time]
  (-> this (.cancelAndHoldAtTime cancel-time)))

(defn cancel-scheduled-values
  "Method.

  A reference to this AudioParam object. In some older implementations
  method returns void.

  `var AudioParam = AudioParam.cancelScheduledValues(startTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/cancelScheduledValues`"
  [this start-time]
  (-> this (.cancelScheduledValues start-time)))

(defn exponential-ramp-to-value-at-time
  "Method.

  A reference to this AudioParam object. In some browsers older
  of this interface return void.

  `var AudioParam = AudioParam.exponentialRampToValueAtTime(value, endTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/exponentialRampToValueAtTime`"
  [this value end-time]
  (-> this (.exponentialRampToValueAtTime value end-time)))

(defn linear-ramp-to-value-at-time
  "Method.

  A reference to this AudioParam object. In some browsers older
  of this interface return void.

  `var AudioParam = AudioParam.linearRampToValueAtTime(value, endTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime`"
  [this value end-time]
  (-> this (.linearRampToValueAtTime value end-time)))

(defn set-target-at-time
  "Method.

  The setTargetAtTime() method of the `audio.AudioParam` interface
  the start of a gradual change to the AudioParam value. This is
  for decay or release portions of ADSR envelopes.

  `var paramRef = param.setTargetAtTime(target, startTime, timeConstant);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setTargetAtTime`"
  [this target start-time time-constant]
  (-> this (.setTargetAtTime target start-time time-constant)))

(defn set-value-at-time
  "Method.

  The setValueAtTime() method of the `audio.AudioParam` interface
  an instant change to the AudioParam value at a precise time,
  measured against `audio.AudioContext.currentTime`. The new value
  given in the value parameter.

  `var AudioParam = AudioParam.setValueAtTime(value, startTime)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueAtTime`"
  [this value start-time]
  (-> this (.setValueAtTime value start-time)))

(defn set-value-curve-at-time
  "Method.

  The setValueCurveAtTime() method of the `audio.AudioParam` interface
  the parameter's value to change following a curve defined by
  list of values.

  `var paramRef = param.setValueCurveAtTime(values, startTime, duration);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/setValueCurveAtTime`"
  [this values start-time duration]
  (-> this (.setValueCurveAtTime values start-time duration)))

(defn default-value
  "Property.

  The defaultValue read-only property of the `audio.AudioParam`
  represents the initial value of the attributes as defined by
  specific `audio.AudioNode` creating the AudioParam.

  `var defaultVal = audioParam.defaultValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/defaultValue`"
  [this]
  (-> this (.defaultValue)))

(defn set-default-value!
  "Property.

  The defaultValue read-only property of the `audio.AudioParam`
  represents the initial value of the attributes as defined by
  specific `audio.AudioNode` creating the AudioParam.

  `var defaultVal = audioParam.defaultValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/defaultValue`"
  [this val]
  (aset this "defaultValue" val))

(defn max-value
  "Property.

  The maxValue read-only property of the `audio.AudioParam` interface
  the maximum possible value for the parameter's nominal (effective)

  `var maxVal = audioParam.maxValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/maxValue`"
  [this]
  (-> this (.maxValue)))

(defn set-max-value!
  "Property.

  The maxValue read-only property of the `audio.AudioParam` interface
  the maximum possible value for the parameter's nominal (effective)

  `var maxVal = audioParam.maxValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/maxValue`"
  [this val]
  (aset this "maxValue" val))

(defn min-value
  "Property.

  The minValue read-only property of the `audio.AudioParam` interface
  the minimum possible value for the parameter's nominal (effective)

  `var minVal = audioParam.minValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/minValue`"
  [this]
  (-> this (.minValue)))

(defn set-min-value!
  "Property.

  The minValue read-only property of the `audio.AudioParam` interface
  the minimum possible value for the parameter's nominal (effective)

  `var minVal = audioParam.minValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/minValue`"
  [this val]
  (aset this "minValue" val))

(defn value
  "Property.

  The Web Audio API's `audio.AudioParam` interface property value
  or sets the value of this `audio.AudioParam` at the current time.

  `var curValue = audioParam.value;
  audioParam.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`"
  [this]
  (-> this (.value)))

(defn set-value!
  "Property.

  The Web Audio API's `audio.AudioParam` interface property value
  or sets the value of this `audio.AudioParam` at the current time.

  `var curValue = audioParam.value;
  audioParam.value = newValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/value`"
  [this val]
  (aset this "value" val))

