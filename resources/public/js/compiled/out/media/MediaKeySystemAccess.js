// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaKeySystemAccess');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The MediaKeySystemAccess.createMediaKeys() method returns a `web.Promise`
 *   resolves to a new `media.MediaKeys` object.
 * 
 *   `var mediaKeys = mediaKeySystemAccess.createMediaKeys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/createMediaKeys`
 */
media.MediaKeySystemAccess.create_media_keys = (function media$MediaKeySystemAccess$create_media_keys(this$){
return this$.createMediaKeys();
});
/**
 * Method.
 * 
 *   The MediaKeySystemAccess.getConfiguration() method returns a
 *   object with the supported combination of configuration options.
 * 
 *   `var mediaKeySystemConfiguration = mediaKeySystemAccess.getConfiguration();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/getConfiguration`
 */
media.MediaKeySystemAccess.get_configuration = (function media$MediaKeySystemAccess$get_configuration(this$){
return this$.getConfiguration();
});
/**
 * Property.
 * 
 *   The MediaKeySystemAccess.keySystem read-only property returns
 *   `dom.DOMString` identifying the key system being used.
 * 
 *   `var keySystem = mediaKeySystemAccess.keySystem;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/keySystem`
 */
media.MediaKeySystemAccess.key_system = (function media$MediaKeySystemAccess$key_system(this$){
return this$.keySystem();
});
/**
 * Property.
 * 
 *   The MediaKeySystemAccess.keySystem read-only property returns
 *   `dom.DOMString` identifying the key system being used.
 * 
 *   `var keySystem = mediaKeySystemAccess.keySystem;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySystemAccess/keySystem`
 */
media.MediaKeySystemAccess.set_key_system_BANG_ = (function media$MediaKeySystemAccess$set_key_system_BANG_(this$,val){
return (this$["keySystem"] = val);
});

//# sourceMappingURL=MediaKeySystemAccess.js.map?rel=1565798808294
