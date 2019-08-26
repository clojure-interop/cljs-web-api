(ns web.streams.MediaTrackConstraints
  "The MediaTrackConstraints dictionary is used to describe a set
  capabilities and the value or values each can take on. A constraints
  is passed into `applyConstraints()` to allow a script to establish
  set of exact (required) values or ranges and/or preferred values
  ranges of values for the track, and the most recently-requested
  of custom constraints can be retrieved by calling `getConstraints()`."
  (:refer-clojure :exclude []))

(defn device-id
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's deviceId
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `deviceId`
  property.

  `var constraintsObject = { deviceId: constraint };

  constraintsObject.deviceId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/deviceId`"
  [this]
  (-> this (.-deviceId)))

(defn set-device-id!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's deviceId
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `deviceId`
  property.

  `var constraintsObject = { deviceId: constraint };

  constraintsObject.deviceId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn group-id
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's groupId
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `groupId`
  property.

  `var constraintsObject = { groupId: constraint };

  constraintsObject.groupId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/groupId`"
  [this]
  (-> this (.-groupId)))

(defn set-group-id!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's groupId
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `groupId`
  property.

  `var constraintsObject = { groupId: constraint };

  constraintsObject.groupId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/groupId`"
  [this val]
  (aset this "groupId" val))

(defn auto-gain-control
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's autoGainControl
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `autoGainControl`
  property.

  `var constraintsObject = { autoGainControl: constraint };

  constraintsObject.autoGainControl = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/autoGainControl`"
  [this]
  (-> this (.-autoGainControl)))

(defn set-auto-gain-control!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's autoGainControl
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `autoGainControl`
  property.

  `var constraintsObject = { autoGainControl: constraint };

  constraintsObject.autoGainControl = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/autoGainControl`"
  [this val]
  (aset this "autoGainControl" val))

(defn channel-count
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's channelCount
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `channelCount` constrainable

  `var constraintsObject = { channelCount: constraint };

  constraintsObject.channelCount = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/channelCount`"
  [this]
  (-> this (.-channelCount)))

(defn set-channel-count!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's channelCount
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `channelCount` constrainable

  `var constraintsObject = { channelCount: constraint };

  constraintsObject.channelCount = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn echo-cancellation
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's echoCancellation
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `echoCancellation`
  property.

  `var constraintsObject = { echoCancellation: constraint };

  constraintsObject.echoCancellation = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/echoCancellation`"
  [this]
  (-> this (.-echoCancellation)))

(defn set-echo-cancellation!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's echoCancellation
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `echoCancellation`
  property.

  `var constraintsObject = { echoCancellation: constraint };

  constraintsObject.echoCancellation = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/echoCancellation`"
  [this val]
  (aset this "echoCancellation" val))

(defn latency
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's latency
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `latency` constrainable property.

  `var constraintsObject = { latency: constraint };

  constraintsObject.latency = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/latency`"
  [this]
  (-> this (.-latency)))

(defn set-latency!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's latency
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `latency` constrainable property.

  `var constraintsObject = { latency: constraint };

  constraintsObject.latency = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/latency`"
  [this val]
  (aset this "latency" val))

(defn noise-suppression
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's noiseSuppression
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `noiseSuppression`
  property.

  `var constraintsObject = { noiseSuppression: constraint };

  constraintsObject.noiseSuppression = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/noiseSuppression`"
  [this]
  (-> this (.-noiseSuppression)))

(defn set-noise-suppression!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's noiseSuppression
  is a `web.streams.ConstrainBoolean` describing the requested
  mandatory constraints placed upon the value of the `noiseSuppression`
  property.

  `var constraintsObject = { noiseSuppression: constraint };

  constraintsObject.noiseSuppression = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/noiseSuppression`"
  [this val]
  (aset this "noiseSuppression" val))

(defn sample-rate
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's sampleRate
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `sampleRate` constrainable

  `var constraintsObject = { sampleRate: constraint };

  constraintsObject.sampleRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleRate`"
  [this]
  (-> this (.-sampleRate)))

(defn set-sample-rate!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's sampleRate
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `sampleRate` constrainable

  `var constraintsObject = { sampleRate: constraint };

  constraintsObject.sampleRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn sample-size
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's sampleSize
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `sampleSize` constrainable

  `var constraintsObject = { sampleSize: constraint };

  constraintsObject.sampleSize = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleSize`"
  [this]
  (-> this (.-sampleSize)))

(defn set-sample-size!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's sampleSize
  is a `web.streams.ConstrainLong` describing the requested or
  constraints placed upon the value of the `sampleSize` constrainable

  `var constraintsObject = { sampleSize: constraint };

  constraintsObject.sampleSize = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleSize`"
  [this val]
  (aset this "sampleSize" val))

(defn volume
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's volume property
  a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `volume` constrainable property.

  `var constraintsObject = { volume: constraint };

  constraintsObject.volume = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/volume`"
  [this]
  (-> this (.-volume)))

(defn set-volume!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's volume property
  a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `volume` constrainable property.

  `var constraintsObject = { volume: constraint };

  constraintsObject.volume = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/volume`"
  [this val]
  (aset this "volume" val))

(defn white-balance-mode
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this]
  (-> this (.-whiteBalanceMode)))

(defn set-white-balance-mode!
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this val]
  (aset this "whiteBalanceMode" val))

(defn exposure-mode
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this]
  (-> this (.-exposureMode)))

(defn set-exposure-mode!
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this val]
  (aset this "exposureMode" val))

(defn focus-mode
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this]
  (-> this (.-focusMode)))

(defn set-focus-mode!
  "Property.

  A String specifying one of \"none\", \"manual\", \"single-shot\", or"
  [this val]
  (aset this "focusMode" val))

(defn points-of-interest
  "Property.

  The pixel coordinates on the sensor of one or more points of
  This is either an object in the form { x:value, y:value } or
  array of such objects, where value is a double-precision integer."
  [this]
  (-> this (.-pointsOfInterest)))

(defn set-points-of-interest!
  "Property.

  The pixel coordinates on the sensor of one or more points of
  This is either an object in the form { x:value, y:value } or
  array of such objects, where value is a double-precision integer."
  [this val]
  (aset this "pointsOfInterest" val))

(defn exposure-compensation
  "Property.

  A ConstrainDouble (a double-precision integer) specifying f-stop
  by up to ±3."
  [this]
  (-> this (.-exposureCompensation)))

(defn set-exposure-compensation!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying f-stop
  by up to ±3."
  [this val]
  (aset this "exposureCompensation" val))

(defn color-temperature
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  temperature in degrees kelvin."
  [this]
  (-> this (.-colorTemperature)))

(defn set-color-temperature!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  temperature in degrees kelvin."
  [this val]
  (aset this "colorTemperature" val))

(defn iso
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  setting."
  [this]
  (-> this (.-iso)))

(defn set-iso!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  setting."
  [this val]
  (aset this "iso" val))

(defn brightness
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  setting."
  [this]
  (-> this (.-brightness)))

(defn set-brightness!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying a desired
  setting."
  [this val]
  (aset this "brightness" val))

(defn contrast
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of difference between light and dark."
  [this]
  (-> this (.-contrast)))

(defn set-contrast!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of difference between light and dark."
  [this val]
  (aset this "contrast" val))

(defn saturation
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of color intensity."
  [this]
  (-> this (.-saturation)))

(defn set-saturation!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of color intensity."
  [this val]
  (aset this "saturation" val))

(defn sharpness
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of edges."
  [this]
  (-> this (.-sharpness)))

(defn set-sharpness!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  of edges."
  [this val]
  (aset this "sharpness" val))

(defn focus-distance
  "Property.

  A ConstrainDouble (a double-precision integer) specifying distance
  a focused object."
  [this]
  (-> this (.-focusDistance)))

(defn set-focus-distance!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying distance
  a focused object."
  [this val]
  (aset this "focusDistance" val))

(defn zoom
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  focal length."
  [this]
  (-> this (.-zoom)))

(defn set-zoom!
  "Property.

  A ConstrainDouble (a double-precision integer) specifying the
  focal length."
  [this val]
  (aset this "zoom" val))

(defn torch
  "Property.

  A Boolean defining whether the fill light is continuously connected,
  it stays on as long as the track is active."
  [this]
  (-> this (.-torch)))

(defn set-torch!
  "Property.

  A Boolean defining whether the fill light is continuously connected,
  it stays on as long as the track is active."
  [this val]
  (aset this "torch" val))

(defn aspect-ratio
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's aspectRatio
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `aspectRatio` constrainable property.

  `var constraintsObject = { aspectRatio: constraint };

  constraintsObject.aspectRatio = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio`"
  [this]
  (-> this (.-aspectRatio)))

(defn set-aspect-ratio!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's aspectRatio
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `aspectRatio` constrainable property.

  `var constraintsObject = { aspectRatio: constraint };

  constraintsObject.aspectRatio = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio`"
  [this val]
  (aset this "aspectRatio" val))

(defn facing-mode
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's facingMode
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `facingMode`
  property.

  `var constraintsObject = { facingMode: constraint };

  constraintsObject.facingMode = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode`"
  [this]
  (-> this (.-facingMode)))

(defn set-facing-mode!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's facingMode
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `facingMode`
  property.

  `var constraintsObject = { facingMode: constraint };

  constraintsObject.facingMode = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode`"
  [this val]
  (aset this "facingMode" val))

(defn frame-rate
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's frameRate
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `frameRate` constrainable property.

  `var constraintsObject = { frameRate: constraint };

  constraintsObject.frameRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate`"
  [this]
  (-> this (.-frameRate)))

(defn set-frame-rate!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's frameRate
  is a `web.rtc.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `frameRate` constrainable property.

  `var constraintsObject = { frameRate: constraint };

  constraintsObject.frameRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate`"
  [this val]
  (aset this "frameRate" val))

(defn height
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's height property
  a `web.streams.ConstrainLong` describing the requested or mandatory
  placed upon the value of the `height` constrainable property.

  `var constraintsObject = { height: constraint };

  constraintsObject.height = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height`"
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's height property
  a `web.streams.ConstrainLong` describing the requested or mandatory
  placed upon the value of the `height` constrainable property.

  `var constraintsObject = { height: constraint };

  constraintsObject.height = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height`"
  [this val]
  (aset this "height" val))

(defn width
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's width property
  a `web.streams.ConstrainLong` describing the requested or mandatory
  placed upon the value of the `width` constrainable property.

  `var constraintsObject = { width: constraint };

  constraintsObject.width = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width`"
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's width property
  a `web.streams.ConstrainLong` describing the requested or mandatory
  placed upon the value of the `width` constrainable property.

  `var constraintsObject = { width: constraint };

  constraintsObject.width = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width`"
  [this val]
  (aset this "width" val))

(defn resize-mode
  "Property.

  A ConstrainDOMString object specifying a mode or an array of
  the UA can use to derive the resolution of a video track. Allowed
  are none and crop-and-scale. none means that the user agent uses
  resolution provided by the camera, its driver or the OS. crop-and-scale
  that the user agent can use cropping and downscaling on the camera
  in order to satisfy other constraints that affect the resolution."
  [this]
  (-> this (.-resizeMode)))

(defn set-resize-mode!
  "Property.

  A ConstrainDOMString object specifying a mode or an array of
  the UA can use to derive the resolution of a video track. Allowed
  are none and crop-and-scale. none means that the user agent uses
  resolution provided by the camera, its driver or the OS. crop-and-scale
  that the user agent can use cropping and downscaling on the camera
  in order to satisfy other constraints that affect the resolution."
  [this val]
  (aset this "resizeMode" val))

(defn cursor
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's cursor property
  a `web.streams.ConstrainDOMString` describing the requested or
  constraints placed upon the value of the `cursor` constrainable
  which is used to specify whether or not the cursor should be
  in the captured video.

  `var constraintsObject = { cursor: constraint };

  constraintsObject.cursor = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/cursor`"
  [this]
  (-> this (.-cursor)))

(defn set-cursor!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's cursor property
  a `web.streams.ConstrainDOMString` describing the requested or
  constraints placed upon the value of the `cursor` constrainable
  which is used to specify whether or not the cursor should be
  in the captured video.

  `var constraintsObject = { cursor: constraint };

  constraintsObject.cursor = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/cursor`"
  [this val]
  (aset this "cursor" val))

(defn display-surface
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's displaySurface
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `displaySurface`
  property.

  `var constraintsObject = { displaySurface: constraint };

  constraintsObject.displaySurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/displaySurface`"
  [this]
  (-> this (.-displaySurface)))

(defn set-display-surface!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's displaySurface
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `displaySurface`
  property.

  `var constraintsObject = { displaySurface: constraint };

  constraintsObject.displaySurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/displaySurface`"
  [this val]
  (aset this "displaySurface" val))

(defn logical-surface
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's logicalSurface
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `logicalSurface`
  property.

  `var constraintsObject = { logicalSurface: constraint };

  constraintsObject.logicalSurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/logicalSurface`"
  [this]
  (-> this (.-logicalSurface)))

(defn set-logical-surface!
  "Property.

  The `web.streams.MediaTrackConstraints` dictionary's logicalSurface
  is a `web.streams.ConstrainDOMString` describing the requested
  mandatory constraints placed upon the value of the `logicalSurface`
  property.

  `var constraintsObject = { logicalSurface: constraint };

  constraintsObject.logicalSurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/logicalSurface`"
  [this val]
  (aset this "logicalSurface" val))

