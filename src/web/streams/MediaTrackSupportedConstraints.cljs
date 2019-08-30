(ns web.streams.MediaTrackSupportedConstraints
  "The MediaTrackSupportedConstraints dictionary establishes the
  of constrainable properties recognized by the user agent or browser
  its implementation of the `web.audio.MediaStreamTrack` object.
  object conforming to MediaTrackSupportedConstraints is returned
  `MediaDevices.getSupportedConstraints()`."
  (:refer-clojure :exclude []))

(defn auto-gain-control
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the autoGainControl constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `autoGainSupported = supportedConstraintsDictionary.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl`"
  [this]
  (-> this (.-autoGainControl)))

(defn width
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the width constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `widthConstraintSupported = supportedConstraintsDictionary.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/width`"
  [this]
  (-> this (.-width)))

(defn height
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the height constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `heightConstraintSupported = supportedConstraintsDictionary.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/height`"
  [this]
  (-> this (.-height)))

(defn aspect-ratio
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the aspectRatio constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `aspectConstraintSupported = supportedConstraintsDictionary.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio`"
  [this]
  (-> this (.-aspectRatio)))

(defn frame-rate
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the `frameRate` constraint.

  `frameRateConstraintSupported = supportedConstraintsDictionary.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/frameRate`"
  [this]
  (-> this (.-frameRate)))

(defn facing-mode
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the facingMode constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `facingModeConstraintSupported = supportedConstraintsDictionary.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/facingMode`"
  [this]
  (-> this (.-facingMode)))

(defn resize-mode
  "Property.

  A Boolean value whose value is true if the resizeMode constraint
  supported in the current environment."
  [this]
  (-> this (.-resizeMode)))

(defn set-resize-mode!
  "Property.

  A Boolean value whose value is true if the resizeMode constraint
  supported in the current environment."
  [this val]
  (aset this "resizeMode" val))

(defn volume
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the volume constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `volumeConstraintSupported = supportedConstraintsDictionary.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/volume`"
  [this]
  (-> this (.-volume)))

(defn sample-rate
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the sampleRate constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `sampleRateConstraintSupported = supportedConstraintsDictionary.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleRate`"
  [this]
  (-> this (.-sampleRate)))

(defn sample-size
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the sampleSize constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `sampleSizeConstraintSupported = supportedConstraintsDictionary.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleSize`"
  [this]
  (-> this (.-sampleSize)))

(defn echo-cancellation
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the echoCancellation constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `echoCancellationConstraintSupported = supportedConstraintsDictionary.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation`"
  [this]
  (-> this (.-echoCancellation)))

(defn latency
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the latency constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `latencyConstraintSupported = supportedConstraintsDictionary.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/latency`"
  [this]
  (-> this (.-latency)))

(defn noise-suppression
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the noiseSuppression constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `noiseSuppressionSupported = supportedConstraintsDictionary.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression`"
  [this]
  (-> this (.-noiseSuppression)))

(defn channel-count
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the channelCount constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `channelCountConstraintSupported = supportedConstraintsDictionary.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/channelCount`"
  [this]
  (-> this (.-channelCount)))

(defn device-id
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the deviceId constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `deviceIdConstraintSupported = supportedConstraintsDictionary.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/deviceId`"
  [this]
  (-> this (.-deviceId)))

(defn group-id
  "Property.

  [Read Only]

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the groupId constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `groupIdConstraintSupported = supportedConstraintsDictionary.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/groupId`"
  [this]
  (-> this (.-groupId)))

(defn cursor
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `cursor` constraint is
  by the user agent and the device on which the content is being

  `isCursorSupported = supportedConstraints.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/cursor`"
  [this]
  (-> this (.-cursor)))

(defn set-cursor!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `cursor` constraint is
  by the user agent and the device on which the content is being

  `isCursorSupported = supportedConstraints.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/cursor`"
  [this val]
  (aset this "cursor" val))

(defn display-surface
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `displaySurface` constraint
  supported by the user agent and the device on which the content
  being used.

  `isDisplaySurfaceSupported = supportedConstraints.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/displaySurface`"
  [this]
  (-> this (.-displaySurface)))

(defn set-display-surface!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `displaySurface` constraint
  supported by the user agent and the device on which the content
  being used.

  `isDisplaySurfaceSupported = supportedConstraints.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/displaySurface`"
  [this val]
  (aset this "displaySurface" val))

(defn logical-surface
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `logicalSurface` constraint
  supported by the user agent and the device on which the content
  being used.

  `isLogicalSurfaceSupported = supportedConstraints.logicalSurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface`"
  [this]
  (-> this (.-logicalSurface)))

(defn set-logical-surface!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property indicates whether or not the `logicalSurface` constraint
  supported by the user agent and the device on which the content
  being used.

  `isLogicalSurfaceSupported = supportedConstraints.logicalSurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface`"
  [this val]
  (aset this "logicalSurface" val))

