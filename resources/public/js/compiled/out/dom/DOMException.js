// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMException');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOMException() constructor returns a DOMException object with a specified message and name.
 * 
 *   message Optional
 *   A description of the exception. If not present, the empty string '' is used.
 *   name Optional
 *   Returns a `dom.DOMString` that contains one of the strings associated with an error constant.
 * 
 *   Return value
 * 
 *   `dom.DOMException`
 *   A newly created `dom.DOMException` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/DOMException`
 */
dom.DOMException.constructor$ = DOMException;
/**
 * Property.
 * 
 *   The code read-only property of the `dom.DOMException` interface
 *   a short that contains one of the error code constants, or 0 if
 *   match. This field is used for historical reasons. New DOM exceptions
 *   use this anymore: they put this info in the `dom.DOMException.name`
 * 
 *   `var domExceptionCode = domExceptionInstance.code;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code`
 */
dom.DOMException.code = (function dom$DOMException$code(this$){
return this$.code();
});
/**
 * Property.
 * 
 *   The code read-only property of the `dom.DOMException` interface
 *   a short that contains one of the error code constants, or 0 if
 *   match. This field is used for historical reasons. New DOM exceptions
 *   use this anymore: they put this info in the `dom.DOMException.name`
 * 
 *   `var domExceptionCode = domExceptionInstance.code;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code`
 */
dom.DOMException.set_code_BANG_ = (function dom$DOMException$set_code_BANG_(this$,val){
return (this$["code"] = val);
});
/**
 * Property.
 * 
 *   The message read-only property of the `dom.DOMException` interface
 *   a `dom.DOMString` representing a message or description associated
 *   the given error name.
 * 
 *   `var domExceptionMessage = domExceptionInstance.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/message`
 */
dom.DOMException.message = (function dom$DOMException$message(this$){
return this$.message();
});
/**
 * Property.
 * 
 *   The message read-only property of the `dom.DOMException` interface
 *   a `dom.DOMString` representing a message or description associated
 *   the given error name.
 * 
 *   `var domExceptionMessage = domExceptionInstance.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/message`
 */
dom.DOMException.set_message_BANG_ = (function dom$DOMException$set_message_BANG_(this$,val){
return (this$["message"] = val);
});
/**
 * Property.
 * 
 *   The name read-only property of the `dom.DOMException` interface
 *   a `dom.DOMString` that contains one of the strings associated
 *   an error name.
 * 
 *   `var domExceptionName = domExceptionInstance.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name`
 */
dom.DOMException.name = (function dom$DOMException$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `dom.DOMException` interface
 *   a `dom.DOMString` that contains one of the strings associated
 *   an error name.
 * 
 *   `var domExceptionName = domExceptionInstance.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name`
 */
dom.DOMException.set_name_BANG_ = (function dom$DOMException$set_name_BANG_(this$,val){
return (this$["name"] = val);
});

//# sourceMappingURL=DOMException.js.map?rel=1565798862492
