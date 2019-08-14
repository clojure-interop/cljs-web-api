// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaTrackSettings');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's aspectRatio property
 *   a double-precision floating-point number indicating the aspect
 *   of the `media.MediaStreamTrack` as currently configured. This
 *   you determine what value was selected to comply with your specified
 *   for this property's value as described in the `media.MediaTrackConstraints.aspectRatio`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var aspectRatio = MediaTrackSettings.aspectRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`
 */
media.MediaTrackSettings.aspect_ratio = (function media$MediaTrackSettings$aspect_ratio(this$){
return this$.aspectRatio();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's aspectRatio property
 *   a double-precision floating-point number indicating the aspect
 *   of the `media.MediaStreamTrack` as currently configured. This
 *   you determine what value was selected to comply with your specified
 *   for this property's value as described in the `media.MediaTrackConstraints.aspectRatio`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var aspectRatio = MediaTrackSettings.aspectRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/aspectRatio`
 */
media.MediaTrackSettings.set_aspect_ratio_BANG_ = (function media$MediaTrackSettings$set_aspect_ratio_BANG_(this$,val){
return (this$["aspectRatio"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's autoGainControl property
 *   a Boolean value whose value indicates whether or not automatic
 *   control (AGC) is enabled on an audio track. This lets you determine
 *   value was selected to comply with your specified constraints
 *   this property's value as described in the `media.MediaTrackConstraints.autoGainControl`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var autoGainControl = MediaTrackSettings.autoGainControl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`
 */
media.MediaTrackSettings.auto_gain_control = (function media$MediaTrackSettings$auto_gain_control(this$){
return this$.autoGainControl();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's autoGainControl property
 *   a Boolean value whose value indicates whether or not automatic
 *   control (AGC) is enabled on an audio track. This lets you determine
 *   value was selected to comply with your specified constraints
 *   this property's value as described in the `media.MediaTrackConstraints.autoGainControl`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var autoGainControl = MediaTrackSettings.autoGainControl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/autoGainControl`
 */
media.MediaTrackSettings.set_auto_gain_control_BANG_ = (function media$MediaTrackSettings$set_auto_gain_control_BANG_(this$,val){
return (this$["autoGainControl"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's channelCount property
 *   an integer indicating how many audio channel the `media.MediaStreamTrack`
 *   currently configured to have. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.channelCount`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var channelCount = MediaTrackSettings.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`
 */
media.MediaTrackSettings.channel_count = (function media$MediaTrackSettings$channel_count(this$){
return this$.channelCount();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's channelCount property
 *   an integer indicating how many audio channel the `media.MediaStreamTrack`
 *   currently configured to have. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.channelCount`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var channelCount = MediaTrackSettings.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/channelCount`
 */
media.MediaTrackSettings.set_channel_count_BANG_ = (function media$MediaTrackSettings$set_channel_count_BANG_(this$,val){
return (this$["channelCount"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's cursor property indicates
 *   or not the cursor should be captured as part of the video track
 *   in the `media.MediaStream` returned by `web.getDisplayMedia()`.
 * 
 *   `cursorSetting = mediaTrackSettings.cursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`
 */
media.MediaTrackSettings.cursor = (function media$MediaTrackSettings$cursor(this$){
return this$.cursor();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's cursor property indicates
 *   or not the cursor should be captured as part of the video track
 *   in the `media.MediaStream` returned by `web.getDisplayMedia()`.
 * 
 *   `cursorSetting = mediaTrackSettings.cursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/cursor`
 */
media.MediaTrackSettings.set_cursor_BANG_ = (function media$MediaTrackSettings$set_cursor_BANG_(this$,val){
return (this$["cursor"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's deviceId property
 *   a `dom.DOMString` which uniquely identifies the source for the
 *   `media.MediaStreamTrack` for the origin corresponding to the
 *   session. This lets you determine what value was selected to comply
 *   your specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.deviceId` property you provided
 *   calling either `web.getUserMedia()`.
 * 
 *   `var deviceId = MediaTrackSettings.deviceId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`
 */
media.MediaTrackSettings.device_id = (function media$MediaTrackSettings$device_id(this$){
return this$.deviceId();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's deviceId property
 *   a `dom.DOMString` which uniquely identifies the source for the
 *   `media.MediaStreamTrack` for the origin corresponding to the
 *   session. This lets you determine what value was selected to comply
 *   your specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.deviceId` property you provided
 *   calling either `web.getUserMedia()`.
 * 
 *   `var deviceId = MediaTrackSettings.deviceId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/deviceId`
 */
media.MediaTrackSettings.set_device_id_BANG_ = (function media$MediaTrackSettings$set_device_id_BANG_(this$,val){
return (this$["deviceId"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's displaySurface property
 *   the type of display surface being captured.
 * 
 *   `displaySurface = mediaTrackSettings.displaySurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`
 */
media.MediaTrackSettings.display_surface = (function media$MediaTrackSettings$display_surface(this$){
return this$.displaySurface();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's displaySurface property
 *   the type of display surface being captured.
 * 
 *   `displaySurface = mediaTrackSettings.displaySurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/displaySurface`
 */
media.MediaTrackSettings.set_display_surface_BANG_ = (function media$MediaTrackSettings$set_display_surface_BANG_(this$,val){
return (this$["displaySurface"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's echoCancellation
 *   is a Boolean value whose value indicates whether or not echo
 *   is enabled on an audio track. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.echoCancellation`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var echoCancellation = MediaTrackSettings.echoCancellation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`
 */
media.MediaTrackSettings.echo_cancellation = (function media$MediaTrackSettings$echo_cancellation(this$){
return this$.echoCancellation();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's echoCancellation
 *   is a Boolean value whose value indicates whether or not echo
 *   is enabled on an audio track. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.echoCancellation`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var echoCancellation = MediaTrackSettings.echoCancellation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/echoCancellation`
 */
media.MediaTrackSettings.set_echo_cancellation_BANG_ = (function media$MediaTrackSettings$set_echo_cancellation_BANG_(this$,val){
return (this$["echoCancellation"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's facingMode property
 *   a `dom.DOMString` indicating the direction in which the camera
 *   the video track represented by the `media.MediaStreamTrack` is
 *   facing. This lets you determine what value was selected to comply
 *   your specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.facingMode` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var facingMode = MediaTrackSettings.facingMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`
 */
media.MediaTrackSettings.facing_mode = (function media$MediaTrackSettings$facing_mode(this$){
return this$.facingMode();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's facingMode property
 *   a `dom.DOMString` indicating the direction in which the camera
 *   the video track represented by the `media.MediaStreamTrack` is
 *   facing. This lets you determine what value was selected to comply
 *   your specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.facingMode` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var facingMode = MediaTrackSettings.facingMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/facingMode`
 */
media.MediaTrackSettings.set_facing_mode_BANG_ = (function media$MediaTrackSettings$set_facing_mode_BANG_(this$,val){
return (this$["facingMode"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's frameRate property
 *   a double-precision floating-point number indicating the frame
 *   in frames per second, of the `media.MediaStreamTrack` as currently
 *   This lets you determine what value was selected to comply with
 *   specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.frameRate` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var frameRate = MediaTrackSettings.frameRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`
 */
media.MediaTrackSettings.frame_rate = (function media$MediaTrackSettings$frame_rate(this$){
return this$.frameRate();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's frameRate property
 *   a double-precision floating-point number indicating the frame
 *   in frames per second, of the `media.MediaStreamTrack` as currently
 *   This lets you determine what value was selected to comply with
 *   specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.frameRate` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var frameRate = MediaTrackSettings.frameRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/frameRate`
 */
media.MediaTrackSettings.set_frame_rate_BANG_ = (function media$MediaTrackSettings$set_frame_rate_BANG_(this$,val){
return (this$["frameRate"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's groupId property
 *   a browsing-session unique `dom.DOMString` which identifies the
 *   of devices which includes the source for the `media.MediaStreamTrack`.
 *   lets you determine what value was selected to comply with your
 *   constraints for this property's value as described in the `media.MediaTrackConstraints.groupId`
 *   you provided when calling either `web.getUserMedia()`.
 * 
 *   `var groupId = MediaTrackSettings.groupId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`
 */
media.MediaTrackSettings.group_id = (function media$MediaTrackSettings$group_id(this$){
return this$.groupId();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's groupId property
 *   a browsing-session unique `dom.DOMString` which identifies the
 *   of devices which includes the source for the `media.MediaStreamTrack`.
 *   lets you determine what value was selected to comply with your
 *   constraints for this property's value as described in the `media.MediaTrackConstraints.groupId`
 *   you provided when calling either `web.getUserMedia()`.
 * 
 *   `var groupId = MediaTrackSettings.groupId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/groupId`
 */
media.MediaTrackSettings.set_group_id_BANG_ = (function media$MediaTrackSettings$set_group_id_BANG_(this$,val){
return (this$["groupId"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's height property is
 *   integer indicating the number of pixels tall `media.MediaStreamTrack`
 *   currently configured to be. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.height` property
 *   provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var height = MediaTrackSettings.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`
 */
media.MediaTrackSettings.height = (function media$MediaTrackSettings$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's height property is
 *   integer indicating the number of pixels tall `media.MediaStreamTrack`
 *   currently configured to be. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.height` property
 *   provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var height = MediaTrackSettings.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/height`
 */
media.MediaTrackSettings.set_height_BANG_ = (function media$MediaTrackSettings$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's latency property
 *   a double-precision floating-point number indicating the estimated
 *   (specified in seconds) of the `media.MediaStreamTrack` as currently
 *   This lets you determine what value was selected to comply with
 *   specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.latency` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var latency = MediaTrackSettings.latency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`
 */
media.MediaTrackSettings.latency = (function media$MediaTrackSettings$latency(this$){
return this$.latency();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's latency property
 *   a double-precision floating-point number indicating the estimated
 *   (specified in seconds) of the `media.MediaStreamTrack` as currently
 *   This lets you determine what value was selected to comply with
 *   specified constraints for this property's value as described
 *   the `media.MediaTrackConstraints.latency` property you provided
 *   calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var latency = MediaTrackSettings.latency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/latency`
 */
media.MediaTrackSettings.set_latency_BANG_ = (function media$MediaTrackSettings$set_latency_BANG_(this$,val){
return (this$["latency"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's noiseSuppression
 *   is a Boolean value whose value indicates whether or not noise
 *   technology is enabled on an audio track. This lets you determine
 *   value was selected to comply with your specified constraints
 *   this property's value as described in the `media.MediaTrackConstraints.noiseSuppression`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var noiseSuppression = MediaTrackSettings.noiseSuppression;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`
 */
media.MediaTrackSettings.noise_suppression = (function media$MediaTrackSettings$noise_suppression(this$){
return this$.noiseSuppression();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's noiseSuppression
 *   is a Boolean value whose value indicates whether or not noise
 *   technology is enabled on an audio track. This lets you determine
 *   value was selected to comply with your specified constraints
 *   this property's value as described in the `media.MediaTrackConstraints.noiseSuppression`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var noiseSuppression = MediaTrackSettings.noiseSuppression;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/noiseSuppression`
 */
media.MediaTrackSettings.set_noise_suppression_BANG_ = (function media$MediaTrackSettings$set_noise_suppression_BANG_(this$,val){
return (this$["noiseSuppression"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's sampleRate property
 *   an integer indicating how many audio samples per second the `media.MediaStreamTrack`
 *   currently configured for. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.sampleRate`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var sampleRate = MediaTrackSettings.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`
 */
media.MediaTrackSettings.sample_rate = (function media$MediaTrackSettings$sample_rate(this$){
return this$.sampleRate();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's sampleRate property
 *   an integer indicating how many audio samples per second the `media.MediaStreamTrack`
 *   currently configured for. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.sampleRate`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var sampleRate = MediaTrackSettings.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleRate`
 */
media.MediaTrackSettings.set_sample_rate_BANG_ = (function media$MediaTrackSettings$set_sample_rate_BANG_(this$,val){
return (this$["sampleRate"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's sampleSize property
 *   an integer indicating the linear sample size (in bits per sample)
 *   `media.MediaStreamTrack` is currently configured for. This lets
 *   determine what value was selected to comply with your specified
 *   for this property's value as described in the `media.MediaTrackConstraints.sampleSize`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var sampleSize = MediaTrackSettings.sampleSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`
 */
media.MediaTrackSettings.sample_size = (function media$MediaTrackSettings$sample_size(this$){
return this$.sampleSize();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's sampleSize property
 *   an integer indicating the linear sample size (in bits per sample)
 *   `media.MediaStreamTrack` is currently configured for. This lets
 *   determine what value was selected to comply with your specified
 *   for this property's value as described in the `media.MediaTrackConstraints.sampleSize`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var sampleSize = MediaTrackSettings.sampleSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/sampleSize`
 */
media.MediaTrackSettings.set_sample_size_BANG_ = (function media$MediaTrackSettings$set_sample_size_BANG_(this$,val){
return (this$["sampleSize"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's volume property is
 *   double-precision floating-point number indicating the volume
 *   the `media.MediaStreamTrack` as currently configured, as a value
 *   0.0 (silence) to 1.0 (maximum supported volume for the device).
 *   lets you determine what value was selected to comply with your
 *   constraints for this property's value as described in the `media.MediaTrackConstraints.volume`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var volume = MediaTrackSettings.volume;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`
 */
media.MediaTrackSettings.volume = (function media$MediaTrackSettings$volume(this$){
return this$.volume();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's volume property is
 *   double-precision floating-point number indicating the volume
 *   the `media.MediaStreamTrack` as currently configured, as a value
 *   0.0 (silence) to 1.0 (maximum supported volume for the device).
 *   lets you determine what value was selected to comply with your
 *   constraints for this property's value as described in the `media.MediaTrackConstraints.volume`
 *   you provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var volume = MediaTrackSettings.volume;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/volume`
 */
media.MediaTrackSettings.set_volume_BANG_ = (function media$MediaTrackSettings$set_volume_BANG_(this$,val){
return (this$["volume"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's width property is
 *   integer indicating the number of pixels wide `media.MediaStreamTrack`
 *   currently configured to be. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.width` property
 *   provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var width = MediaTrackSettings.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`
 */
media.MediaTrackSettings.width = (function media$MediaTrackSettings$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's width property is
 *   integer indicating the number of pixels wide `media.MediaStreamTrack`
 *   currently configured to be. This lets you determine what value
 *   selected to comply with your specified constraints for this property's
 *   as described in the `media.MediaTrackConstraints.width` property
 *   provided when calling either `web.getUserMedia()` or `media.MediaStreamTrack.applyConstraints()`.
 * 
 *   `var width = MediaTrackSettings.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/width`
 */
media.MediaTrackSettings.set_width_BANG_ = (function media$MediaTrackSettings$set_width_BANG_(this$,val){
return (this$["width"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's logicalSurface property
 *   whether or not the display area being captured is a logical surface.
 *   surfaces are those which are not necessarily entirely onscreen,
 *   may even be off-screen, such as windows' backing buffers (where
 *   part of the buffer is visible without scrolling the containing
 *   and offscreen rendering contexts.
 * 
 *   `isLogicalSurface = mediaTrackSettings.logicalSurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/logicalSurface`
 */
media.MediaTrackSettings.logical_surface = (function media$MediaTrackSettings$logical_surface(this$){
return this$.logicalSurface();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSettings` dictionary's logicalSurface property
 *   whether or not the display area being captured is a logical surface.
 *   surfaces are those which are not necessarily entirely onscreen,
 *   may even be off-screen, such as windows' backing buffers (where
 *   part of the buffer is visible without scrolling the containing
 *   and offscreen rendering contexts.
 * 
 *   `isLogicalSurface = mediaTrackSettings.logicalSurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings/logicalSurface`
 */
media.MediaTrackSettings.set_logical_surface_BANG_ = (function media$MediaTrackSettings$set_logical_surface_BANG_(this$,val){
return (this$["logicalSurface"] = val);
});

//# sourceMappingURL=MediaTrackSettings.js.map?rel=1565798812506
