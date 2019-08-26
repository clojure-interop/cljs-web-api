(ns web.streams.MediaTrackSupportedConstraints
  "The MediaTrackSupportedConstraints dictionary establishes the
  of constrainable properties recognized by the user agent or browser
  its implementation of the `web.audio.MediaStreamTrack` object.
  object conforming to MediaTrackSupportedConstraints is returned
  `MediaDevices.getSupportedConstraints()`."
  (:refer-clojure :exclude []))

(defn auto-gain-control
  "Property.

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

(defn set-auto-gain-control!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the autoGainControl constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `autoGainSupported = supportedConstraintsDictionary.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl`"
  [this val]
  (aset this "autoGainControl" val))

(defn width
  "Property.

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

(defn set-width!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the width constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `widthConstraintSupported = supportedConstraintsDictionary.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/width`"
  [this val]
  (aset this "width" val))

(defn height
  "Property.

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

(defn set-height!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the height constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `heightConstraintSupported = supportedConstraintsDictionary.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/height`"
  [this val]
  (aset this "height" val))

(defn aspect-ratio
  "Property.

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

(defn set-aspect-ratio!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the aspectRatio constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `aspectConstraintSupported = supportedConstraintsDictionary.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio`"
  [this val]
  (aset this "aspectRatio" val))

(defn frame-rate
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the `frameRate` constraint.

  `frameRateConstraintSupported = supportedConstraintsDictionary.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/frameRate`"
  [this]
  (-> this (.-frameRate)))

(defn set-frame-rate!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the `frameRate` constraint.

  `frameRateConstraintSupported = supportedConstraintsDictionary.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/frameRate`"
  [this val]
  (aset this "frameRate" val))

(defn facing-mode
  "Property.

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

(defn set-facing-mode!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the facingMode constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `facingModeConstraintSupported = supportedConstraintsDictionary.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/facingMode`"
  [this val]
  (aset this "facingMode" val))

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

(defn set-volume!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the volume constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `volumeConstraintSupported = supportedConstraintsDictionary.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/volume`"
  [this val]
  (aset this "volume" val))

(defn sample-rate
  "Property.

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

(defn set-sample-rate!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the sampleRate constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `sampleRateConstraintSupported = supportedConstraintsDictionary.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn sample-size
  "Property.

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

(defn set-sample-size!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the sampleSize constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `sampleSizeConstraintSupported = supportedConstraintsDictionary.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleSize`"
  [this val]
  (aset this "sampleSize" val))

(defn echo-cancellation
  "Property.

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

(defn set-echo-cancellation!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the echoCancellation constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `echoCancellationConstraintSupported = supportedConstraintsDictionary.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation`"
  [this val]
  (aset this "echoCancellation" val))

(defn latency
  "Property.

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

(defn set-latency!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the latency constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `latencyConstraintSupported = supportedConstraintsDictionary.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/latency`"
  [this val]
  (aset this "latency" val))

(defn noise-suppression
  "Property.

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

(defn set-noise-suppression!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the noiseSuppression constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `noiseSuppressionSupported = supportedConstraintsDictionary.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression`"
  [this val]
  (aset this "noiseSuppression" val))

(defn channel-count
  "Property.

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

(defn set-channel-count!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the channelCount constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `channelCountConstraintSupported = supportedConstraintsDictionary.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn device-id
  "Property.

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

(defn set-device-id!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the deviceId constraint.
  the constraint isn't supported, it's not included in the list,
  this value will never be false.

  `deviceIdConstraintSupported = supportedConstraintsDictionary.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn group-id
  "Property.

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

(defn set-group-id!
  "Property.

  The `web.streams.MediaTrackSupportedConstraints` dictionary's
  property is a read-only Boolean value which is present (and set
  true) in the object returned by `MediaDevices.getSupportedConstraints()`
  and only if the user agent supports the groupId constraint. If
  constraint isn't supported, it's not included in the list, so
  value will never be false.

  `groupIdConstraintSupported = supportedConstraintsDictionary.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/groupId`"
  [this val]
  (aset this "groupId" val))

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

