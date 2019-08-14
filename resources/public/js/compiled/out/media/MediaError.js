// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaError');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The read-only property MediaError.code returns a numeric value
 *   represents the kind of error that occurred on a media element.
 *   get a text string with specific diagnostic information, see `media.MediaError.message`.
 * 
 *   `var myError = mediaError.code;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/code`
 */
media.MediaError.code = (function media$MediaError$code(this$){
return this$.code();
});
/**
 * Property.
 * 
 *   The read-only property MediaError.message returns a `dom.DOMString`
 *   contains a human-readable string offering specific diagnostic
 *   related to the error described by the MediaError object, or an
 *   string (\"\") if no diagnostic information can be determined
 *   provided.
 * 
 *   `var errorMessage = mediaError.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/message`
 */
media.MediaError.message = (function media$MediaError$message(this$){
return this$.message();
});
/**
 * Property.
 * 
 *   The read-only property MediaError.message returns a `dom.DOMString`
 *   contains a human-readable string offering specific diagnostic
 *   related to the error described by the MediaError object, or an
 *   string (\"\") if no diagnostic information can be determined
 *   provided.
 * 
 *   `var errorMessage = mediaError.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/message`
 */
media.MediaError.set_message_BANG_ = (function media$MediaError$set_message_BANG_(this$,val){
return (this$["message"] = val);
});

//# sourceMappingURL=MediaError.js.map?rel=1565798810389
