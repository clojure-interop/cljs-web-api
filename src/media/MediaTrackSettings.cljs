(ns media.MediaTrackSettings
  "The MediaTrackSettings dictionary is used to return the current
  configured for each of a `media.MediaStreamTrack`'s settings.
  values will adhere as closely as possible to any constraints
  described using a `media.MediaTrackConstraints` object and set
  `web.applyConstraints()`, and will adhere to the default constraints
  any properties whose constraints haven't been changed, or whose
  constraints couldn't be matched."
  (:refer-clojure :exclude []))

(defn aspect-ratio
  "Property.

  The `media.MediaTrackSettings` dictionary's aspectRatio property
  a double-precision floating-point number indicating the aspect
  of the `media.MediaStreamTrack` as currently configured. This
  you determine what value was selected to comply with your specified
  for this property's value as described in the `media.MediaTrackConstraints.aspectRatio`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var aspectRatio = MediaTrackSettings.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`"
  [this]
  (-> this (.aspectRatio)))

(defn set-aspect-ratio!
  "Property.

  The `media.MediaTrackSettings` dictionary's aspectRatio property
  a double-precision floating-point number indicating the aspect
  of the `media.MediaStreamTrack` as currently configured. This
  you determine what value was selected to comply with your specified
  for this property's value as described in the `media.MediaTrackConstraints.aspectRatio`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var aspectRatio = MediaTrackSettings.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`"
  [this val]
  (aset this "aspectRatio" val))

(defn auto-gain-control
  "Property.

  The `media.MediaTrackSettings` dictionary's autoGainControl property
  a Boolean value whose value indicates whether or not automatic
  control (AGC) is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `media.MediaTrackConstraints.autoGainControl`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var autoGainControl = MediaTrackSettings.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`"
  [this]
  (-> this (.autoGainControl)))

(defn set-auto-gain-control!
  "Property.

  The `media.MediaTrackSettings` dictionary's autoGainControl property
  a Boolean value whose value indicates whether or not automatic
  control (AGC) is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `media.MediaTrackConstraints.autoGainControl`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var autoGainControl = MediaTrackSettings.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`"
  [this val]
  (aset this "autoGainControl" val))

(defn channel-count
  "Property.

  The `media.MediaTrackSettings` dictionary's channelCount property
  an integer indicating how many audio channel the `media.MediaStreamTrack`
  currently configured to have. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.channelCount`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var channelCount = MediaTrackSettings.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`"
  [this]
  (-> this (.channelCount)))

(defn set-channel-count!
  "Property.

  The `media.MediaTrackSettings` dictionary's channelCount property
  an integer indicating how many audio channel the `media.MediaStreamTrack`
  currently configured to have. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.channelCount`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var channelCount = MediaTrackSettings.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn cursor
  "Property.

  The `media.MediaTrackSettings` dictionary's cursor property indicates
  or not the cursor should be captured as part of the video track
  in the `media.MediaStream` returned by `web.getDisplayMedia()`.

  `cursorSetting = mediaTrackSettings.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`"
  [this]
  (-> this (.cursor)))

(defn set-cursor!
  "Property.

  The `media.MediaTrackSettings` dictionary's cursor property indicates
  or not the cursor should be captured as part of the video track
  in the `media.MediaStream` returned by `web.getDisplayMedia()`.

  `cursorSetting = mediaTrackSettings.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`"
  [this val]
  (aset this "cursor" val))

(defn device-id
  "Property.

  The `media.MediaTrackSettings` dictionary's deviceId property
  a `dom.DOMString` which uniquely identifies the source for the
  `media.MediaStreamTrack` for the origin corresponding to the
  session. This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `media.MediaTrackConstraints.deviceId` property you provided
  calling either `web.getUserMedia()`.

  `var deviceId = MediaTrackSettings.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`"
  [this]
  (-> this (.deviceId)))

(defn set-device-id!
  "Property.

  The `media.MediaTrackSettings` dictionary's deviceId property
  a `dom.DOMString` which uniquely identifies the source for the
  `media.MediaStreamTrack` for the origin corresponding to the
  session. This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `media.MediaTrackConstraints.deviceId` property you provided
  calling either `web.getUserMedia()`.

  `var deviceId = MediaTrackSettings.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn display-surface
  "Property.

  The `media.MediaTrackSettings` dictionary's displaySurface property
  the type of display surface being captured.

  `displaySurface = mediaTrackSettings.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`"
  [this]
  (-> this (.displaySurface)))

(defn set-display-surface!
  "Property.

  The `media.MediaTrackSettings` dictionary's displaySurface property
  the type of display surface being captured.

  `displaySurface = mediaTrackSettings.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`"
  [this val]
  (aset this "displaySurface" val))

(defn echo-cancellation
  "Property.

  The `media.MediaTrackSettings` dictionary's echoCancellation
  is a Boolean value whose value indicates whether or not echo
  is enabled on an audio track. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.echoCancellation`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var echoCancellation = MediaTrackSettings.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`"
  [this]
  (-> this (.echoCancellation)))

(defn set-echo-cancellation!
  "Property.

  The `media.MediaTrackSettings` dictionary's echoCancellation
  is a Boolean value whose value indicates whether or not echo
  is enabled on an audio track. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.echoCancellation`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var echoCancellation = MediaTrackSettings.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`"
  [this val]
  (aset this "echoCancellation" val))

(defn facing-mode
  "Property.

  The `media.MediaTrackSettings` dictionary's facingMode property
  a `dom.DOMString` indicating the direction in which the camera
  the video track represented by the `media.MediaStreamTrack` is
  facing. This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `media.MediaTrackConstraints.facingMode` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var facingMode = MediaTrackSettings.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`"
  [this]
  (-> this (.facingMode)))

(defn set-facing-mode!
  "Property.

  The `media.MediaTrackSettings` dictionary's facingMode property
  a `dom.DOMString` indicating the direction in which the camera
  the video track represented by the `media.MediaStreamTrack` is
  facing. This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `media.MediaTrackConstraints.facingMode` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var facingMode = MediaTrackSettings.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`"
  [this val]
  (aset this "facingMode" val))

(defn frame-rate
  "Property.

  The `media.MediaTrackSettings` dictionary's frameRate property
  a double-precision floating-point number indicating the frame
  in frames per second, of the `media.MediaStreamTrack` as currently
  This lets you determine what value was selected to comply with
  specified constraints for this property's value as described
  the `media.MediaTrackConstraints.frameRate` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var frameRate = MediaTrackSettings.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`"
  [this]
  (-> this (.frameRate)))

(defn set-frame-rate!
  "Property.

  The `media.MediaTrackSettings` dictionary's frameRate property
  a double-precision floating-point number indicating the frame
  in frames per second, of the `media.MediaStreamTrack` as currently
  This lets you determine what value was selected to comply with
  specified constraints for this property's value as described
  the `media.MediaTrackConstraints.frameRate` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var frameRate = MediaTrackSettings.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`"
  [this val]
  (aset this "frameRate" val))

(defn group-id
  "Property.

  The `media.MediaTrackSettings` dictionary's groupId property
  a browsing-session unique `dom.DOMString` which identifies the
  of devices which includes the source for the `media.MediaStreamTrack`.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `media.MediaTrackConstraints.groupId`
  you provided when calling either `web.getUserMedia()`.

  `var groupId = MediaTrackSettings.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`"
  [this]
  (-> this (.groupId)))

(defn set-group-id!
  "Property.

  The `media.MediaTrackSettings` dictionary's groupId property
  a browsing-session unique `dom.DOMString` which identifies the
  of devices which includes the source for the `media.MediaStreamTrack`.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `media.MediaTrackConstraints.groupId`
  you provided when calling either `web.getUserMedia()`.

  `var groupId = MediaTrackSettings.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`"
  [this val]
  (aset this "groupId" val))

(defn height
  "Property.

  The `media.MediaTrackSettings` dictionary's height property is
  integer indicating the number of pixels tall `media.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.height` property
  provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var height = MediaTrackSettings.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The `media.MediaTrackSettings` dictionary's height property is
  integer indicating the number of pixels tall `media.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.height` property
  provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var height = MediaTrackSettings.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`"
  [this val]
  (aset this "height" val))

(defn latency
  "Property.

  The `media.MediaTrackSettings` dictionary's latency property
  a double-precision floating-point number indicating the estimated
  (specified in seconds) of the `media.MediaStreamTrack` as currently
  This lets you determine what value was selected to comply with
  specified constraints for this property's value as described
  the `media.MediaTrackConstraints.latency` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var latency = MediaTrackSettings.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`"
  [this]
  (-> this (.latency)))

(defn set-latency!
  "Property.

  The `media.MediaTrackSettings` dictionary's latency property
  a double-precision floating-point number indicating the estimated
  (specified in seconds) of the `media.MediaStreamTrack` as currently
  This lets you determine what value was selected to comply with
  specified constraints for this property's value as described
  the `media.MediaTrackConstraints.latency` property you provided
  calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var latency = MediaTrackSettings.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`"
  [this val]
  (aset this "latency" val))

(defn noise-suppression
  "Property.

  The `media.MediaTrackSettings` dictionary's noiseSuppression
  is a Boolean value whose value indicates whether or not noise
  technology is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `media.MediaTrackConstraints.noiseSuppression`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var noiseSuppression = MediaTrackSettings.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`"
  [this]
  (-> this (.noiseSuppression)))

(defn set-noise-suppression!
  "Property.

  The `media.MediaTrackSettings` dictionary's noiseSuppression
  is a Boolean value whose value indicates whether or not noise
  technology is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `media.MediaTrackConstraints.noiseSuppression`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var noiseSuppression = MediaTrackSettings.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`"
  [this val]
  (aset this "noiseSuppression" val))

(defn sample-rate
  "Property.

  The `media.MediaTrackSettings` dictionary's sampleRate property
  an integer indicating how many audio samples per second the `media.MediaStreamTrack`
  currently configured for. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.sampleRate`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var sampleRate = MediaTrackSettings.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`"
  [this]
  (-> this (.sampleRate)))

(defn set-sample-rate!
  "Property.

  The `media.MediaTrackSettings` dictionary's sampleRate property
  an integer indicating how many audio samples per second the `media.MediaStreamTrack`
  currently configured for. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.sampleRate`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var sampleRate = MediaTrackSettings.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn sample-size
  "Property.

  The `media.MediaTrackSettings` dictionary's sampleSize property
  an integer indicating the linear sample size (in bits per sample)
  `media.MediaStreamTrack` is currently configured for. This lets
  determine what value was selected to comply with your specified
  for this property's value as described in the `media.MediaTrackConstraints.sampleSize`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var sampleSize = MediaTrackSettings.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`"
  [this]
  (-> this (.sampleSize)))

(defn set-sample-size!
  "Property.

  The `media.MediaTrackSettings` dictionary's sampleSize property
  an integer indicating the linear sample size (in bits per sample)
  `media.MediaStreamTrack` is currently configured for. This lets
  determine what value was selected to comply with your specified
  for this property's value as described in the `media.MediaTrackConstraints.sampleSize`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var sampleSize = MediaTrackSettings.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`"
  [this val]
  (aset this "sampleSize" val))

(defn volume
  "Property.

  The `media.MediaTrackSettings` dictionary's volume property is
  double-precision floating-point number indicating the volume
  the `media.MediaStreamTrack` as currently configured, as a value
  0.0 (silence) to 1.0 (maximum supported volume for the device).
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `media.MediaTrackConstraints.volume`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var volume = MediaTrackSettings.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`"
  [this]
  (-> this (.volume)))

(defn set-volume!
  "Property.

  The `media.MediaTrackSettings` dictionary's volume property is
  double-precision floating-point number indicating the volume
  the `media.MediaStreamTrack` as currently configured, as a value
  0.0 (silence) to 1.0 (maximum supported volume for the device).
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `media.MediaTrackConstraints.volume`
  you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var volume = MediaTrackSettings.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`"
  [this val]
  (aset this "volume" val))

(defn width
  "Property.

  The `media.MediaTrackSettings` dictionary's width property is
  integer indicating the number of pixels wide `media.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.width` property
  provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var width = MediaTrackSettings.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The `media.MediaTrackSettings` dictionary's width property is
  integer indicating the number of pixels wide `media.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `media.MediaTrackConstraints.width` property
  provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.

  `var width = MediaTrackSettings.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`"
  [this val]
  (aset this "width" val))

(defn logical-surface
  "Property.

  The `media.MediaTrackSettings` dictionary's logicalSurface property
  whether or not the display area being captured is a logical surface.
  surfaces are those which are not necessarily entirely onscreen,
  may even be off-screen, such as windows' backing buffers (where
  part of the buffer is visible without scrolling the containing
  and offscreen rendering contexts.

  `isLogicalSurface = mediaTrackSettings.logicalSurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/logicalSurface`"
  [this]
  (-> this (.logicalSurface)))

(defn set-logical-surface!
  "Property.

  The `media.MediaTrackSettings` dictionary's logicalSurface property
  whether or not the display area being captured is a logical surface.
  surfaces are those which are not necessarily entirely onscreen,
  may even be off-screen, such as windows' backing buffers (where
  part of the buffer is visible without scrolling the containing
  and offscreen rendering contexts.

  `isLogicalSurface = mediaTrackSettings.logicalSurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/logicalSurface`"
  [this val]
  (aset this "logicalSurface" val))

