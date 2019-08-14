// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaKeyMessageEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaKeyMessageEvent constructor creates a new `media.MediaKeyMessageEvent` object which creates a new instance of MediaKeyMessageEvent.
 * 
 *   typeArg
 *   A `dom.DOMString` containing one of May be one of license-request, license-renewal, license-renewal, or individualization-request.
 *   options
 *   Options are as follows:
 * 
 *   messageType: A developer-defined message type that allows applications to differentiate messages without parsing them.
 *   message: An array containing the message generated by the content decryption module.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/MediaKeyMessageEvent`
 */
media.MediaKeyMessageEvent.constructor$ = MediaKeyMessageEvent;
/**
 * Property.
 * 
 *   The MediaKeyMessageEvent.message read-only property returns an
 *   with a message from the content decryption module. Messages vary
 *   key system.
 * 
 *   `var messageType = mediaKeyMessageEvent.messageType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/message`
 */
media.MediaKeyMessageEvent.message = (function media$MediaKeyMessageEvent$message(this$){
return this$.message();
});
/**
 * Property.
 * 
 *   The MediaKeyMessageEvent.message read-only property returns an
 *   with a message from the content decryption module. Messages vary
 *   key system.
 * 
 *   `var messageType = mediaKeyMessageEvent.messageType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/message`
 */
media.MediaKeyMessageEvent.set_message_BANG_ = (function media$MediaKeyMessageEvent$set_message_BANG_(this$,val){
return (this$["message"] = val);
});
/**
 * Property.
 * 
 *   The MediaKeyMessageEvent.messageType read-only property indicates
 *   type of message. It may be one of license-request, license-renewal,
 *   or individualization-request.
 * 
 *   `var messageType = mediaKeyMessageEvent.messageType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/messageType`
 */
media.MediaKeyMessageEvent.message_type = (function media$MediaKeyMessageEvent$message_type(this$){
return this$.messageType();
});
/**
 * Property.
 * 
 *   The MediaKeyMessageEvent.messageType read-only property indicates
 *   type of message. It may be one of license-request, license-renewal,
 *   or individualization-request.
 * 
 *   `var messageType = mediaKeyMessageEvent.messageType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeyMessageEvent/messageType`
 */
media.MediaKeyMessageEvent.set_message_type_BANG_ = (function media$MediaKeyMessageEvent$set_message_type_BANG_(this$,val){
return (this$["messageType"] = val);
});

//# sourceMappingURL=MediaKeyMessageEvent.js.map?rel=1565798808144
