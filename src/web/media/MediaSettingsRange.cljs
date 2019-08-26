(ns web.media.MediaSettingsRange
  "The MediaSettingsRange interface of the the MediaStream Image
  API provides the possible range and value size of `PhotoCapabilities.imageHeight`
  `PhotoCapabilities.imageWidth`. A `web.media.PhotoCapabilities`
  can be retrieved by calling `ImageCapture.PhotoCapabilities()`."
  (:refer-clojure :exclude [max min]))

(defn max
  "Property.

  The max read-only property of the `web.media.MediaSettingsRange`
  returns the maximum value of the settings range.

  `var max = mediaSettingsRange.max`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/max`"
  [this]
  (-> this (.max)))

(defn set-max!
  "Property.

  The max read-only property of the `web.media.MediaSettingsRange`
  returns the maximum value of the settings range.

  `var max = mediaSettingsRange.max`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/max`"
  [this val]
  (aset this "max" val))

(defn min
  "Property.

  The min read-only property of the `web.media.MediaSettingsRange`
  returns the minimum value of the settings range.

  `var min = mediaSettingsRange.min`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/min`"
  [this]
  (-> this (.min)))

(defn set-min!
  "Property.

  The min read-only property of the `web.media.MediaSettingsRange`
  returns the minimum value of the settings range.

  `var min = mediaSettingsRange.min`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/min`"
  [this val]
  (aset this "min" val))

(defn step
  "Property.

  The step read-only property of the `web.media.MediaSettingsRange`
  returns the minimum difference between consecutive values of
  settings range.

  `var step = mediaSettingsRange.step`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/step`"
  [this]
  (-> this (.step)))

(defn set-step!
  "Property.

  The step read-only property of the `web.media.MediaSettingsRange`
  returns the minimum difference between consecutive values of
  settings range.

  `var step = mediaSettingsRange.step`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSettingsRange/step`"
  [this val]
  (aset this "step" val))

