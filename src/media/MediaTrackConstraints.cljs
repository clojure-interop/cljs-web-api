(ns media.MediaTrackConstraints
  "The MediaTrackConstraints dictionary is used to describe a set
  capabilities and the value or values each can take on. A constraints
  is passed into `web.applyConstraints()` to allow a script to
  a set of exact (required) values or ranges and/or preferred values
  ranges of values for the track, and the most recently-requested
  of custom constraints can be retrieved by calling `web.getConstraints()`."
  (:refer-clojure :exclude []))

(defn aspect-ratio
  "Property.

  The `media.MediaTrackConstraints` dictionary's aspectRatio property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.aspectRatio` constrainable

  `var constraintsObject = { aspectRatio: constraint };

  constraintsObject.aspectRatio = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio`"
  [this]
  (-> this (.aspectRatio)))

(defn set-aspect-ratio!
  "Property.

  The `media.MediaTrackConstraints` dictionary's aspectRatio property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.aspectRatio` constrainable

  `var constraintsObject = { aspectRatio: constraint };

  constraintsObject.aspectRatio = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio`"
  [this val]
  (aset this "aspectRatio" val))

(defn auto-gain-control
  "Property.

  The `media.MediaTrackConstraints` dictionary's autoGainControl
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.autoGainControl` constrainable

  `var constraintsObject = { autoGainControl: constraint };

  constraintsObject.autoGainControl = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/autoGainControl`"
  [this]
  (-> this (.autoGainControl)))

(defn set-auto-gain-control!
  "Property.

  The `media.MediaTrackConstraints` dictionary's autoGainControl
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.autoGainControl` constrainable

  `var constraintsObject = { autoGainControl: constraint };

  constraintsObject.autoGainControl = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/autoGainControl`"
  [this val]
  (aset this "autoGainControl" val))

(defn channel-count
  "Property.

  The `media.MediaTrackConstraints` dictionary's channelCount property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.channelCount` constrainable property.

  `var constraintsObject = { channelCount: constraint };

  constraintsObject.channelCount = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/channelCount`"
  [this]
  (-> this (.channelCount)))

(defn set-channel-count!
  "Property.

  The `media.MediaTrackConstraints` dictionary's channelCount property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.channelCount` constrainable property.

  `var constraintsObject = { channelCount: constraint };

  constraintsObject.channelCount = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn cursor
  "Property.

  The `media.MediaTrackConstraints` dictionary's cursor property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.cursor` constrainable property,
  is used to specify whether or not the cursor should be included
  the captured video.

  `var constraintsObject = { cursor: constraint };

  constraintsObject.cursor = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/cursor`"
  [this]
  (-> this (.cursor)))

(defn set-cursor!
  "Property.

  The `media.MediaTrackConstraints` dictionary's cursor property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.cursor` constrainable property,
  is used to specify whether or not the cursor should be included
  the captured video.

  `var constraintsObject = { cursor: constraint };

  constraintsObject.cursor = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/cursor`"
  [this val]
  (aset this "cursor" val))

(defn device-id
  "Property.

  The `media.MediaTrackConstraints` dictionary's deviceId property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.deviceId` constrainable property.

  `var constraintsObject = { deviceId: constraint };

  constraintsObject.deviceId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/deviceId`"
  [this]
  (-> this (.deviceId)))

(defn set-device-id!
  "Property.

  The `media.MediaTrackConstraints` dictionary's deviceId property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.deviceId` constrainable property.

  `var constraintsObject = { deviceId: constraint };

  constraintsObject.deviceId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn display-surface
  "Property.

  The `media.MediaTrackConstraints` dictionary's displaySurface
  is a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.displaySurface` constrainable

  `var constraintsObject = { displaySurface: constraint };

  constraintsObject.displaySurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/displaySurface`"
  [this]
  (-> this (.displaySurface)))

(defn set-display-surface!
  "Property.

  The `media.MediaTrackConstraints` dictionary's displaySurface
  is a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.displaySurface` constrainable

  `var constraintsObject = { displaySurface: constraint };

  constraintsObject.displaySurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/displaySurface`"
  [this val]
  (aset this "displaySurface" val))

(defn echo-cancellation
  "Property.

  The `media.MediaTrackConstraints` dictionary's echoCancellation
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.echoCancellation` constrainable

  `var constraintsObject = { echoCancellation: constraint };

  constraintsObject.echoCancellation = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/echoCancellation`"
  [this]
  (-> this (.echoCancellation)))

(defn set-echo-cancellation!
  "Property.

  The `media.MediaTrackConstraints` dictionary's echoCancellation
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.echoCancellation` constrainable

  `var constraintsObject = { echoCancellation: constraint };

  constraintsObject.echoCancellation = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/echoCancellation`"
  [this val]
  (aset this "echoCancellation" val))

(defn facing-mode
  "Property.

  The `media.MediaTrackConstraints` dictionary's facingMode property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.facingMode` constrainable property.

  `var constraintsObject = { facingMode: constraint };

  constraintsObject.facingMode = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode`"
  [this]
  (-> this (.facingMode)))

(defn set-facing-mode!
  "Property.

  The `media.MediaTrackConstraints` dictionary's facingMode property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.facingMode` constrainable property.

  `var constraintsObject = { facingMode: constraint };

  constraintsObject.facingMode = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode`"
  [this val]
  (aset this "facingMode" val))

(defn frame-rate
  "Property.

  The `media.MediaTrackConstraints` dictionary's frameRate property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.frameRate` constrainable property.

  `var constraintsObject = { frameRate: constraint };

  constraintsObject.frameRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate`"
  [this]
  (-> this (.frameRate)))

(defn set-frame-rate!
  "Property.

  The `media.MediaTrackConstraints` dictionary's frameRate property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.frameRate` constrainable property.

  `var constraintsObject = { frameRate: constraint };

  constraintsObject.frameRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/frameRate`"
  [this val]
  (aset this "frameRate" val))

(defn group-id
  "Property.

  The `media.MediaTrackConstraints` dictionary's groupId property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.groupId` constrainable property.

  `var constraintsObject = { groupId: constraint };

  constraintsObject.groupId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/groupId`"
  [this]
  (-> this (.groupId)))

(defn set-group-id!
  "Property.

  The `media.MediaTrackConstraints` dictionary's groupId property
  a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.groupId` constrainable property.

  `var constraintsObject = { groupId: constraint };

  constraintsObject.groupId = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/groupId`"
  [this val]
  (aset this "groupId" val))

(defn height
  "Property.

  The `media.MediaTrackConstraints` dictionary's height property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.height` constrainable property.

  `var constraintsObject = { height: constraint };

  constraintsObject.height = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The `media.MediaTrackConstraints` dictionary's height property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.height` constrainable property.

  `var constraintsObject = { height: constraint };

  constraintsObject.height = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height`"
  [this val]
  (aset this "height" val))

(defn latency
  "Property.

  The `media.MediaTrackConstraints` dictionary's latency property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.latency` constrainable property.

  `var constraintsObject = { latency: constraint };

  constraintsObject.latency = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/latency`"
  [this]
  (-> this (.latency)))

(defn set-latency!
  "Property.

  The `media.MediaTrackConstraints` dictionary's latency property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.latency` constrainable property.

  `var constraintsObject = { latency: constraint };

  constraintsObject.latency = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/latency`"
  [this val]
  (aset this "latency" val))

(defn logical-surface
  "Property.

  The `media.MediaTrackConstraints` dictionary's logicalSurface
  is a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.logicalSurface` constrainable

  `var constraintsObject = { logicalSurface: constraint };

  constraintsObject.logicalSurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/logicalSurface`"
  [this]
  (-> this (.logicalSurface)))

(defn set-logical-surface!
  "Property.

  The `media.MediaTrackConstraints` dictionary's logicalSurface
  is a `web.ConstrainDOMString` describing the requested or mandatory
  placed upon the value of the `web.logicalSurface` constrainable

  `var constraintsObject = { logicalSurface: constraint };

  constraintsObject.logicalSurface = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/logicalSurface`"
  [this val]
  (aset this "logicalSurface" val))

(defn noise-suppression
  "Property.

  The `media.MediaTrackConstraints` dictionary's noiseSuppression
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.noiseSuppression` constrainable

  `var constraintsObject = { noiseSuppression: constraint };

  constraintsObject.noiseSuppression = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/noiseSuppression`"
  [this]
  (-> this (.noiseSuppression)))

(defn set-noise-suppression!
  "Property.

  The `media.MediaTrackConstraints` dictionary's noiseSuppression
  is a `web.ConstrainBoolean` describing the requested or mandatory
  placed upon the value of the `web.noiseSuppression` constrainable

  `var constraintsObject = { noiseSuppression: constraint };

  constraintsObject.noiseSuppression = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/noiseSuppression`"
  [this val]
  (aset this "noiseSuppression" val))

(defn sample-rate
  "Property.

  The `media.MediaTrackConstraints` dictionary's sampleRate property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.sampleRate` constrainable property.

  `var constraintsObject = { sampleRate: constraint };

  constraintsObject.sampleRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleRate`"
  [this]
  (-> this (.sampleRate)))

(defn set-sample-rate!
  "Property.

  The `media.MediaTrackConstraints` dictionary's sampleRate property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.sampleRate` constrainable property.

  `var constraintsObject = { sampleRate: constraint };

  constraintsObject.sampleRate = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn sample-size
  "Property.

  The `media.MediaTrackConstraints` dictionary's sampleSize property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.sampleSize` constrainable property.

  `var constraintsObject = { sampleSize: constraint };

  constraintsObject.sampleSize = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleSize`"
  [this]
  (-> this (.sampleSize)))

(defn set-sample-size!
  "Property.

  The `media.MediaTrackConstraints` dictionary's sampleSize property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.sampleSize` constrainable property.

  `var constraintsObject = { sampleSize: constraint };

  constraintsObject.sampleSize = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/sampleSize`"
  [this val]
  (aset this "sampleSize" val))

(defn volume
  "Property.

  The `media.MediaTrackConstraints` dictionary's volume property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.volume` constrainable property.

  `var constraintsObject = { volume: constraint };

  constraintsObject.volume = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/volume`"
  [this]
  (-> this (.volume)))

(defn set-volume!
  "Property.

  The `media.MediaTrackConstraints` dictionary's volume property
  a `web.ConstrainDouble` describing the requested or mandatory
  placed upon the value of the `web.volume` constrainable property.

  `var constraintsObject = { volume: constraint };

  constraintsObject.volume = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/volume`"
  [this val]
  (aset this "volume" val))

(defn width
  "Property.

  The `media.MediaTrackConstraints` dictionary's width property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.width` constrainable property.

  `var constraintsObject = { width: constraint };

  constraintsObject.width = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The `media.MediaTrackConstraints` dictionary's width property
  a `web.ConstrainLong` describing the requested or mandatory constraints
  upon the value of the `web.width` constrainable property.

  `var constraintsObject = { width: constraint };

  constraintsObject.width = constraint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width`"
  [this val]
  (aset this "width" val))

