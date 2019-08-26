(ns web.audio.MediaTrackSettings
  "The MediaTrackSettings dictionary is used to return the current
  configured for each of a `web.audio.MediaStreamTrack`'s settings.
  values will adhere as closely as possible to any constraints
  described using a `web.streams.MediaTrackConstraints` object
  set using `applyConstraints()`, and will adhere to the default
  for any properties whose constraints haven't been changed, or
  customized constraints couldn't be matched."
  (:refer-clojure :exclude []))

(defn device-id
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's deviceId property
  a `web.dom.DOMString` which uniquely identifies the source for
  corresponding `web.audio.MediaStreamTrack` for the origin corresponding
  the browsing session. This lets you determine what value was
  to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.deviceId` property
  provided when calling either `getUserMedia()`.

  `var deviceId = MediaTrackSettings.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`"
  [this]
  (-> this (.deviceId)))

(defn set-device-id!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's deviceId property
  a `web.dom.DOMString` which uniquely identifies the source for
  corresponding `web.audio.MediaStreamTrack` for the origin corresponding
  the browsing session. This lets you determine what value was
  to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.deviceId` property
  provided when calling either `getUserMedia()`.

  `var deviceId = MediaTrackSettings.deviceId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`"
  [this val]
  (aset this "deviceId" val))

(defn auto-gain-control
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's autoGainControl
  is a Boolean value whose value indicates whether or not automatic
  control (AGC) is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `MediaTrackConstraints.autoGainControl`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var autoGainControl = MediaTrackSettings.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`"
  [this]
  (-> this (.autoGainControl)))

(defn set-auto-gain-control!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's autoGainControl
  is a Boolean value whose value indicates whether or not automatic
  control (AGC) is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `MediaTrackConstraints.autoGainControl`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var autoGainControl = MediaTrackSettings.autoGainControl;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`"
  [this val]
  (aset this "autoGainControl" val))

(defn sample-rate
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's sampleRate property
  an integer indicating how many audio samples per second the `web.audio.MediaStreamTrack`
  currently configured for. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.sampleRate` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var sampleRate = MediaTrackSettings.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`"
  [this]
  (-> this (.sampleRate)))

(defn set-sample-rate!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's sampleRate property
  an integer indicating how many audio samples per second the `web.audio.MediaStreamTrack`
  currently configured for. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.sampleRate` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var sampleRate = MediaTrackSettings.sampleRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`"
  [this val]
  (aset this "sampleRate" val))

(defn aspect-ratio
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's aspectRatio property
  a double-precision floating-point number indicating the aspect
  of the `web.audio.MediaStreamTrack` as currently configured.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `MediaTrackConstraints.aspectRatio`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var aspectRatio = MediaTrackSettings.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`"
  [this]
  (-> this (.aspectRatio)))

(defn set-aspect-ratio!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's aspectRatio property
  a double-precision floating-point number indicating the aspect
  of the `web.audio.MediaStreamTrack` as currently configured.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `MediaTrackConstraints.aspectRatio`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var aspectRatio = MediaTrackSettings.aspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`"
  [this val]
  (aset this "aspectRatio" val))

(defn cursor
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's cursor property
  whether or not the cursor should be captured as part of the video
  included in the `web.streams.MediaStream` returned by `getDisplayMedia()`.

  `cursorSetting = mediaTrackSettings.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`"
  [this]
  (-> this (.cursor)))

(defn set-cursor!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's cursor property
  whether or not the cursor should be captured as part of the video
  included in the `web.streams.MediaStream` returned by `getDisplayMedia()`.

  `cursorSetting = mediaTrackSettings.cursor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`"
  [this val]
  (aset this "cursor" val))

(defn channel-count
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's channelCount
  is an integer indicating how many audio channel the `web.audio.MediaStreamTrack`
  currently configured to have. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.channelCount` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var channelCount = MediaTrackSettings.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`"
  [this]
  (-> this (.channelCount)))

(defn set-channel-count!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's channelCount
  is an integer indicating how many audio channel the `web.audio.MediaStreamTrack`
  currently configured to have. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.channelCount` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var channelCount = MediaTrackSettings.channelCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`"
  [this val]
  (aset this "channelCount" val))

(defn display-surface
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's displaySurface
  indicates the type of display surface being captured.

  `displaySurface = mediaTrackSettings.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`"
  [this]
  (-> this (.displaySurface)))

(defn set-display-surface!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's displaySurface
  indicates the type of display surface being captured.

  `displaySurface = mediaTrackSettings.displaySurface;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`"
  [this val]
  (aset this "displaySurface" val))

(defn echo-cancellation
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's echoCancellation
  is a Boolean value whose value indicates whether or not echo
  is enabled on an audio track. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.echoCancellation`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var echoCancellation = MediaTrackSettings.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`"
  [this]
  (-> this (.echoCancellation)))

(defn set-echo-cancellation!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's echoCancellation
  is a Boolean value whose value indicates whether or not echo
  is enabled on an audio track. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.echoCancellation`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var echoCancellation = MediaTrackSettings.echoCancellation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`"
  [this val]
  (aset this "echoCancellation" val))

(defn facing-mode
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's facingMode property
  a `web.dom.DOMString` indicating the direction in which the camera
  the video track represented by the `web.audio.MediaStreamTrack`
  currently facing. This lets you determine what value was selected
  comply with your specified constraints for this property's value
  described in the `MediaTrackConstraints.facingMode` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var facingMode = MediaTrackSettings.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`"
  [this]
  (-> this (.facingMode)))

(defn set-facing-mode!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's facingMode property
  a `web.dom.DOMString` indicating the direction in which the camera
  the video track represented by the `web.audio.MediaStreamTrack`
  currently facing. This lets you determine what value was selected
  comply with your specified constraints for this property's value
  described in the `MediaTrackConstraints.facingMode` property
  provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var facingMode = MediaTrackSettings.facingMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`"
  [this val]
  (aset this "facingMode" val))

(defn frame-rate
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's frameRate property
  a double-precision floating-point number indicating the frame
  in frames per second, of the `web.audio.MediaStreamTrack` as
  configured. This lets you determine what value was selected to
  with your specified constraints for this property's value as
  in the `MediaTrackConstraints.frameRate` property you provided
  calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var frameRate = MediaTrackSettings.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`"
  [this]
  (-> this (.frameRate)))

(defn set-frame-rate!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's frameRate property
  a double-precision floating-point number indicating the frame
  in frames per second, of the `web.audio.MediaStreamTrack` as
  configured. This lets you determine what value was selected to
  with your specified constraints for this property's value as
  in the `MediaTrackConstraints.frameRate` property you provided
  calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var frameRate = MediaTrackSettings.frameRate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`"
  [this val]
  (aset this "frameRate" val))

(defn group-id
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's groupId property
  a browsing-session unique `web.dom.DOMString` which identifies
  group of devices which includes the source for the `web.audio.MediaStreamTrack`.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `MediaTrackConstraints.groupId`
  you provided when calling either `getUserMedia()`.

  `var groupId = MediaTrackSettings.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`"
  [this]
  (-> this (.groupId)))

(defn set-group-id!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's groupId property
  a browsing-session unique `web.dom.DOMString` which identifies
  group of devices which includes the source for the `web.audio.MediaStreamTrack`.
  lets you determine what value was selected to comply with your
  constraints for this property's value as described in the `MediaTrackConstraints.groupId`
  you provided when calling either `getUserMedia()`.

  `var groupId = MediaTrackSettings.groupId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`"
  [this val]
  (aset this "groupId" val))

(defn height
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's height property
  an integer indicating the number of pixels tall `web.audio.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.height` property you
  when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var height = MediaTrackSettings.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's height property
  an integer indicating the number of pixels tall `web.audio.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.height` property you
  when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var height = MediaTrackSettings.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`"
  [this val]
  (aset this "height" val))

(defn latency
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's latency property
  a double-precision floating-point number indicating the estimated
  (specified in seconds) of the `web.audio.MediaStreamTrack` as
  configured. This lets you determine what value was selected to
  with your specified constraints for this property's value as
  in the `MediaTrackConstraints.latency` property you provided
  calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var latency = MediaTrackSettings.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`"
  [this]
  (-> this (.latency)))

(defn set-latency!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's latency property
  a double-precision floating-point number indicating the estimated
  (specified in seconds) of the `web.audio.MediaStreamTrack` as
  configured. This lets you determine what value was selected to
  with your specified constraints for this property's value as
  in the `MediaTrackConstraints.latency` property you provided
  calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var latency = MediaTrackSettings.latency;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`"
  [this val]
  (aset this "latency" val))

(defn noise-suppression
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's noiseSuppression
  is a Boolean value whose value indicates whether or not noise
  technology is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `MediaTrackConstraints.noiseSuppression`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var noiseSuppression = MediaTrackSettings.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`"
  [this]
  (-> this (.noiseSuppression)))

(defn set-noise-suppression!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's noiseSuppression
  is a Boolean value whose value indicates whether or not noise
  technology is enabled on an audio track. This lets you determine
  value was selected to comply with your specified constraints
  this property's value as described in the `MediaTrackConstraints.noiseSuppression`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var noiseSuppression = MediaTrackSettings.noiseSuppression;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`"
  [this val]
  (aset this "noiseSuppression" val))

(defn sample-size
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's sampleSize property
  an integer indicating the linear sample size (in bits per sample)
  `web.audio.MediaStreamTrack` is currently configured for. This
  you determine what value was selected to comply with your specified
  for this property's value as described in the `MediaTrackConstraints.sampleSize`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var sampleSize = MediaTrackSettings.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`"
  [this]
  (-> this (.sampleSize)))

(defn set-sample-size!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's sampleSize property
  an integer indicating the linear sample size (in bits per sample)
  `web.audio.MediaStreamTrack` is currently configured for. This
  you determine what value was selected to comply with your specified
  for this property's value as described in the `MediaTrackConstraints.sampleSize`
  you provided when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var sampleSize = MediaTrackSettings.sampleSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`"
  [this val]
  (aset this "sampleSize" val))

(defn volume
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's volume property
  a double-precision floating-point number indicating the volume
  the `web.audio.MediaStreamTrack` as currently configured, as
  value from 0.0 (silence) to 1.0 (maximum supported volume for
  device). This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `MediaTrackConstraints.volume` property you provided when
  either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var volume = MediaTrackSettings.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`"
  [this]
  (-> this (.volume)))

(defn set-volume!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's volume property
  a double-precision floating-point number indicating the volume
  the `web.audio.MediaStreamTrack` as currently configured, as
  value from 0.0 (silence) to 1.0 (maximum supported volume for
  device). This lets you determine what value was selected to comply
  your specified constraints for this property's value as described
  the `MediaTrackConstraints.volume` property you provided when
  either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var volume = MediaTrackSettings.volume;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`"
  [this val]
  (aset this "volume" val))

(defn width
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's width property
  an integer indicating the number of pixels wide `web.audio.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.width` property you
  when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var width = MediaTrackSettings.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The `web.audio.MediaTrackSettings` dictionary's width property
  an integer indicating the number of pixels wide `web.audio.MediaStreamTrack`
  currently configured to be. This lets you determine what value
  selected to comply with your specified constraints for this property's
  as described in the `MediaTrackConstraints.width` property you
  when calling either `getUserMedia()` or `MediaStreamTrack.applyConstraints()`.

  `var width = MediaTrackSettings.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`"
  [this val]
  (aset this "width" val))

