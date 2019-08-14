// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaTrackSupportedConstraints');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's aspectRatio
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the aspectRatio constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `aspectConstraintSupported = supportedConstraintsDictionary.aspectRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio`
 */
media.MediaTrackSupportedConstraints.aspect_ratio = (function media$MediaTrackSupportedConstraints$aspect_ratio(this$){
return this$.aspectRatio();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's aspectRatio
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the aspectRatio constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `aspectConstraintSupported = supportedConstraintsDictionary.aspectRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/aspectRatio`
 */
media.MediaTrackSupportedConstraints.set_aspect_ratio_BANG_ = (function media$MediaTrackSupportedConstraints$set_aspect_ratio_BANG_(this$,val){
return (this$["aspectRatio"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's autoGainControl
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the autoGainControl constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `autoGainSupported = supportedConstraintsDictionary.autoGainControl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl`
 */
media.MediaTrackSupportedConstraints.auto_gain_control = (function media$MediaTrackSupportedConstraints$auto_gain_control(this$){
return this$.autoGainControl();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's autoGainControl
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the autoGainControl constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `autoGainSupported = supportedConstraintsDictionary.autoGainControl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/autoGainControl`
 */
media.MediaTrackSupportedConstraints.set_auto_gain_control_BANG_ = (function media$MediaTrackSupportedConstraints$set_auto_gain_control_BANG_(this$,val){
return (this$["autoGainControl"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's channelCount
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the channelCount constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `channelCountConstraintSupported = supportedConstraintsDictionary.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/channelCount`
 */
media.MediaTrackSupportedConstraints.channel_count = (function media$MediaTrackSupportedConstraints$channel_count(this$){
return this$.channelCount();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's channelCount
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the channelCount constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `channelCountConstraintSupported = supportedConstraintsDictionary.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/channelCount`
 */
media.MediaTrackSupportedConstraints.set_channel_count_BANG_ = (function media$MediaTrackSupportedConstraints$set_channel_count_BANG_(this$,val){
return (this$["channelCount"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's cursor
 *   indicates whether or not the `web.cursor` constraint is supported
 *   the user agent and the device on which the content is being used.
 * 
 *   `isCursorSupported = supportedConstraints.cursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/cursor`
 */
media.MediaTrackSupportedConstraints.cursor = (function media$MediaTrackSupportedConstraints$cursor(this$){
return this$.cursor();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's cursor
 *   indicates whether or not the `web.cursor` constraint is supported
 *   the user agent and the device on which the content is being used.
 * 
 *   `isCursorSupported = supportedConstraints.cursor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/cursor`
 */
media.MediaTrackSupportedConstraints.set_cursor_BANG_ = (function media$MediaTrackSupportedConstraints$set_cursor_BANG_(this$,val){
return (this$["cursor"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's deviceId
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the deviceId constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `deviceIdConstraintSupported = supportedConstraintsDictionary.deviceId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/deviceId`
 */
media.MediaTrackSupportedConstraints.device_id = (function media$MediaTrackSupportedConstraints$device_id(this$){
return this$.deviceId();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's deviceId
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the deviceId constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `deviceIdConstraintSupported = supportedConstraintsDictionary.deviceId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/deviceId`
 */
media.MediaTrackSupportedConstraints.set_device_id_BANG_ = (function media$MediaTrackSupportedConstraints$set_device_id_BANG_(this$,val){
return (this$["deviceId"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's displaySurface
 *   indicates whether or not the `web.displaySurface` constraint
 *   supported by the user agent and the device on which the content
 *   being used.
 * 
 *   `isDisplaySurfaceSupported = supportedConstraints.displaySurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/displaySurface`
 */
media.MediaTrackSupportedConstraints.display_surface = (function media$MediaTrackSupportedConstraints$display_surface(this$){
return this$.displaySurface();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's displaySurface
 *   indicates whether or not the `web.displaySurface` constraint
 *   supported by the user agent and the device on which the content
 *   being used.
 * 
 *   `isDisplaySurfaceSupported = supportedConstraints.displaySurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/displaySurface`
 */
media.MediaTrackSupportedConstraints.set_display_surface_BANG_ = (function media$MediaTrackSupportedConstraints$set_display_surface_BANG_(this$,val){
return (this$["displaySurface"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's echoCancellation
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the echoCancellation constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `echoCancellationConstraintSupported = supportedConstraintsDictionary.echoCancellation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation`
 */
media.MediaTrackSupportedConstraints.echo_cancellation = (function media$MediaTrackSupportedConstraints$echo_cancellation(this$){
return this$.echoCancellation();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's echoCancellation
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the echoCancellation constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `echoCancellationConstraintSupported = supportedConstraintsDictionary.echoCancellation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/echoCancellation`
 */
media.MediaTrackSupportedConstraints.set_echo_cancellation_BANG_ = (function media$MediaTrackSupportedConstraints$set_echo_cancellation_BANG_(this$,val){
return (this$["echoCancellation"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's facingMode
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the facingMode constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `facingModeConstraintSupported = supportedConstraintsDictionary.facingMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/facingMode`
 */
media.MediaTrackSupportedConstraints.facing_mode = (function media$MediaTrackSupportedConstraints$facing_mode(this$){
return this$.facingMode();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's facingMode
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the facingMode constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `facingModeConstraintSupported = supportedConstraintsDictionary.facingMode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/facingMode`
 */
media.MediaTrackSupportedConstraints.set_facing_mode_BANG_ = (function media$MediaTrackSupportedConstraints$set_facing_mode_BANG_(this$,val){
return (this$["facingMode"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's frameRate
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the `web.frameRate` constraint.
 * 
 *   `frameRateConstraintSupported = supportedConstraintsDictionary.frameRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/frameRate`
 */
media.MediaTrackSupportedConstraints.frame_rate = (function media$MediaTrackSupportedConstraints$frame_rate(this$){
return this$.frameRate();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's frameRate
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the `web.frameRate` constraint.
 * 
 *   `frameRateConstraintSupported = supportedConstraintsDictionary.frameRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/frameRate`
 */
media.MediaTrackSupportedConstraints.set_frame_rate_BANG_ = (function media$MediaTrackSupportedConstraints$set_frame_rate_BANG_(this$,val){
return (this$["frameRate"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's groupId
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the groupId constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `groupIdConstraintSupported = supportedConstraintsDictionary.groupId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/groupId`
 */
media.MediaTrackSupportedConstraints.group_id = (function media$MediaTrackSupportedConstraints$group_id(this$){
return this$.groupId();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's groupId
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the groupId constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `groupIdConstraintSupported = supportedConstraintsDictionary.groupId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/groupId`
 */
media.MediaTrackSupportedConstraints.set_group_id_BANG_ = (function media$MediaTrackSupportedConstraints$set_group_id_BANG_(this$,val){
return (this$["groupId"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's height
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the height constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `heightConstraintSupported = supportedConstraintsDictionary.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/height`
 */
media.MediaTrackSupportedConstraints.height = (function media$MediaTrackSupportedConstraints$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's height
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the height constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `heightConstraintSupported = supportedConstraintsDictionary.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/height`
 */
media.MediaTrackSupportedConstraints.set_height_BANG_ = (function media$MediaTrackSupportedConstraints$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's latency
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the latency constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `latencyConstraintSupported = supportedConstraintsDictionary.latency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/latency`
 */
media.MediaTrackSupportedConstraints.latency = (function media$MediaTrackSupportedConstraints$latency(this$){
return this$.latency();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's latency
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the latency constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `latencyConstraintSupported = supportedConstraintsDictionary.latency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/latency`
 */
media.MediaTrackSupportedConstraints.set_latency_BANG_ = (function media$MediaTrackSupportedConstraints$set_latency_BANG_(this$,val){
return (this$["latency"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's noiseSuppression
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the noiseSuppression constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `noiseSuppressionSupported = supportedConstraintsDictionary.noiseSuppression;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression`
 */
media.MediaTrackSupportedConstraints.noise_suppression = (function media$MediaTrackSupportedConstraints$noise_suppression(this$){
return this$.noiseSuppression();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's noiseSuppression
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the noiseSuppression constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `noiseSuppressionSupported = supportedConstraintsDictionary.noiseSuppression;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/noiseSuppression`
 */
media.MediaTrackSupportedConstraints.set_noise_suppression_BANG_ = (function media$MediaTrackSupportedConstraints$set_noise_suppression_BANG_(this$,val){
return (this$["noiseSuppression"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's sampleRate
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the sampleRate constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `sampleRateConstraintSupported = supportedConstraintsDictionary.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleRate`
 */
media.MediaTrackSupportedConstraints.sample_rate = (function media$MediaTrackSupportedConstraints$sample_rate(this$){
return this$.sampleRate();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's sampleRate
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the sampleRate constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `sampleRateConstraintSupported = supportedConstraintsDictionary.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleRate`
 */
media.MediaTrackSupportedConstraints.set_sample_rate_BANG_ = (function media$MediaTrackSupportedConstraints$set_sample_rate_BANG_(this$,val){
return (this$["sampleRate"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's sampleSize
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the sampleSize constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `sampleSizeConstraintSupported = supportedConstraintsDictionary.sampleSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleSize`
 */
media.MediaTrackSupportedConstraints.sample_size = (function media$MediaTrackSupportedConstraints$sample_size(this$){
return this$.sampleSize();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's sampleSize
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the sampleSize constraint.
 *   the constraint isn't supported, it's not included in the list,
 *   this value will never be false.
 * 
 *   `sampleSizeConstraintSupported = supportedConstraintsDictionary.sampleSize;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/sampleSize`
 */
media.MediaTrackSupportedConstraints.set_sample_size_BANG_ = (function media$MediaTrackSupportedConstraints$set_sample_size_BANG_(this$,val){
return (this$["sampleSize"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's volume
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the volume constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `volumeConstraintSupported = supportedConstraintsDictionary.volume;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/volume`
 */
media.MediaTrackSupportedConstraints.volume = (function media$MediaTrackSupportedConstraints$volume(this$){
return this$.volume();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's volume
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the volume constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `volumeConstraintSupported = supportedConstraintsDictionary.volume;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/volume`
 */
media.MediaTrackSupportedConstraints.set_volume_BANG_ = (function media$MediaTrackSupportedConstraints$set_volume_BANG_(this$,val){
return (this$["volume"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's width
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the width constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `widthConstraintSupported = supportedConstraintsDictionary.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/width`
 */
media.MediaTrackSupportedConstraints.width = (function media$MediaTrackSupportedConstraints$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's width
 *   is a read-only Boolean value which is present (and set to true)
 *   the object returned by `media.MediaDevices.getSupportedConstraints()`
 *   and only if the user agent supports the width constraint. If
 *   constraint isn't supported, it's not included in the list, so
 *   value will never be false.
 * 
 *   `widthConstraintSupported = supportedConstraintsDictionary.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/width`
 */
media.MediaTrackSupportedConstraints.set_width_BANG_ = (function media$MediaTrackSupportedConstraints$set_width_BANG_(this$,val){
return (this$["width"] = val);
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's logicalSurface
 *   indicates whether or not the `web.logicalSurface` constraint
 *   supported by the user agent and the device on which the content
 *   being used.
 * 
 *   `isLogicalSurfaceSupported = supportedConstraints.logicalSurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface`
 */
media.MediaTrackSupportedConstraints.logical_surface = (function media$MediaTrackSupportedConstraints$logical_surface(this$){
return this$.logicalSurface();
});
/**
 * Property.
 * 
 *   The `media.MediaTrackSupportedConstraints` dictionary's logicalSurface
 *   indicates whether or not the `web.logicalSurface` constraint
 *   supported by the user agent and the device on which the content
 *   being used.
 * 
 *   `isLogicalSurfaceSupported = supportedConstraints.logicalSurface;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSupportedConstraints/logicalSurface`
 */
media.MediaTrackSupportedConstraints.set_logical_surface_BANG_ = (function media$MediaTrackSupportedConstraints$set_logical_surface_BANG_(this$,val){
return (this$["logicalSurface"] = val);
});

//# sourceMappingURL=MediaTrackSupportedConstraints.js.map?rel=1565798858049
