// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaDevices');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `media.MediaDevices` method enumerateDevices() requests a
 *   of the available media input and output devices, such as microphones,
 *   headsets, and so forth.
 * 
 *   `var enumeratorPromise = navigator.mediaDevices.enumerateDevices();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices`
 */
media.MediaDevices.enumerate_devices = (function media$MediaDevices$enumerate_devices(this$){
return this$.enumerateDevices();
});
/**
 * Method.
 * 
 *   The `media.MediaDevices` interface's getDisplayMedia() method
 *   the user to select and grant permission to capture the contents
 *   a display or portion thereof (such as a window) as a `media.MediaStream`.
 * 
 *   `var promise = navigator.mediaDevices.getDisplayMedia(constraints);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia`
 */
media.MediaDevices.get_display_media = (function media$MediaDevices$get_display_media(this$,constraints){
return this$.getDisplayMedia(constraints);
});
/**
 * Method.
 * 
 *   The getSupportedConstraints() method of the `media.MediaDevices`
 *   returns an object based on the `media.MediaTrackSupportedConstraints`
 *   whose member fields each specify one of the constrainable properties
 *   user agent understands.
 * 
 *   `var supportedConstraints = navigator.mediaDevices.getSupportedConstraints();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getSupportedConstraints`
 */
media.MediaDevices.get_supported_constraints = (function media$MediaDevices$get_supported_constraints(this$){
return this$.getSupportedConstraints();
});
/**
 * Method.
 * 
 *   The `media.MediaDevices`.getUserMedia() method prompts the user
 *   permission to use a media input which produces a `media.MediaStream`
 *   tracks containing the requested types of media.
 * 
 *   `var promise = navigator.mediaDevices.getUserMedia(constraints);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia`
 */
media.MediaDevices.get_user_media = (function media$MediaDevices$get_user_media(this$,constraints){
return this$.getUserMedia(constraints);
});
/**
 * Property.
 * 
 *   The MediaDevices.ondevicechange property is an `web.EventHandler`
 *   specifies a function to be called when the devicechange event
 *   on a `media.MediaDevices` instance. This happens whenever the
 *   of media devices available to the user agent and, by extension,
 *   the web site or app has changed. You can at any time use `web.enumerateDevices()`
 *   get the updated list of available devices.
 * 
 *   `MediaDevices.ondevicechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`
 */
media.MediaDevices.ondevicechange = (function media$MediaDevices$ondevicechange(this$){
return this$.ondevicechange();
});
/**
 * Property.
 * 
 *   The MediaDevices.ondevicechange property is an `web.EventHandler`
 *   specifies a function to be called when the devicechange event
 *   on a `media.MediaDevices` instance. This happens whenever the
 *   of media devices available to the user agent and, by extension,
 *   the web site or app has changed. You can at any time use `web.enumerateDevices()`
 *   get the updated list of available devices.
 * 
 *   `MediaDevices.ondevicechange = eventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/ondevicechange`
 */
media.MediaDevices.set_ondevicechange_BANG_ = (function media$MediaDevices$set_ondevicechange_BANG_(this$,val){
return (this$["ondevicechange"] = val);
});

//# sourceMappingURL=MediaDevices.js.map?rel=1565798812690
