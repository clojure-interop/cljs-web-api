// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCDataChannel');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The RTCDataChannel.close() method closes the `rtc.RTCDataChannel`.
 *   peer is permitted to call this method to initiate closure of
 *   channel.
 * 
 *   `RTCDataChannel.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/close`
 */
rtc.RTCDataChannel.close = (function rtc$RTCDataChannel$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The send() method of the `rtc.RTCDataChannel` interface sends
 *   across the data channel to the remote peer.
 * 
 *   `RTCDataChannel.send(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/send`
 */
rtc.RTCDataChannel.send = (function rtc$RTCDataChannel$send(this$,data){
return this$.send(data);
});
/**
 * Property.
 * 
 *   The property binaryType on the `rtc.RTCDataChannel` interface
 *   a `dom.DOMString` which specifies the type of JavaScript object
 *   should be used to represent binary data received on the `rtc.RTCDataChannel`.
 *   allowed by the `web.WebSocket.binaryType` property are also permitted
 *   \"blob\" if `web.Blob` objects are being used or \"arraybuffer\"
 *   `web.ArrayBuffer` objects are being used. The default is \"blob\".
 * 
 *   `var type = aDataChannel.binaryType;
 * 
 *   aDataChannel.binaryType = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/binaryType`
 */
rtc.RTCDataChannel.binary_type = (function rtc$RTCDataChannel$binary_type(this$){
return this$.binaryType();
});
/**
 * Property.
 * 
 *   The property binaryType on the `rtc.RTCDataChannel` interface
 *   a `dom.DOMString` which specifies the type of JavaScript object
 *   should be used to represent binary data received on the `rtc.RTCDataChannel`.
 *   allowed by the `web.WebSocket.binaryType` property are also permitted
 *   \"blob\" if `web.Blob` objects are being used or \"arraybuffer\"
 *   `web.ArrayBuffer` objects are being used. The default is \"blob\".
 * 
 *   `var type = aDataChannel.binaryType;
 * 
 *   aDataChannel.binaryType = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/binaryType`
 */
rtc.RTCDataChannel.set_binary_type_BANG_ = (function rtc$RTCDataChannel$set_binary_type_BANG_(this$,val){
return (this$["binaryType"] = val);
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property bufferedAmount returns
 *   number of bytes of data currently queued to be sent over the
 *   channel.
 * 
 *   `var amount = aDataChannel.bufferedAmount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmount`
 */
rtc.RTCDataChannel.buffered_amount = (function rtc$RTCDataChannel$buffered_amount(this$){
return this$.bufferedAmount();
});
/**
 * Property.
 * 
 *   The RTCDataChannel property bufferedAmountLowThreshold is used
 *   specify the number of bytes of buffered outgoing data that is
 *   \"low.\" The default value is 0.
 * 
 *   `var threshold = aDataChannel.bufferedAmountLowThreshold;
 * 
 *   aDataChannel.bufferedAmountLowThreshold = threshold;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold`
 */
rtc.RTCDataChannel.buffered_amount_low_threshold = (function rtc$RTCDataChannel$buffered_amount_low_threshold(this$){
return this$.bufferedAmountLowThreshold();
});
/**
 * Property.
 * 
 *   The RTCDataChannel property bufferedAmountLowThreshold is used
 *   specify the number of bytes of buffered outgoing data that is
 *   \"low.\" The default value is 0.
 * 
 *   `var threshold = aDataChannel.bufferedAmountLowThreshold;
 * 
 *   aDataChannel.bufferedAmountLowThreshold = threshold;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold`
 */
rtc.RTCDataChannel.set_buffered_amount_low_threshold_BANG_ = (function rtc$RTCDataChannel$set_buffered_amount_low_threshold_BANG_(this$,val){
return (this$["bufferedAmountLowThreshold"] = val);
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property id returns an ID number
 *   0 and 65,534) which uniquely identifies the `rtc.RTCDataChannel`.
 * 
 *   `var id = aDataChannel.id;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/id`
 */
rtc.RTCDataChannel.id = (function rtc$RTCDataChannel$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property label returns a `dom.DOMString`
 *   a name describing the data channel. These labels are not required
 *   be unique.
 * 
 *   `var name = aDataChannel.label;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/label`
 */
rtc.RTCDataChannel.label = (function rtc$RTCDataChannel$label(this$){
return this$.label();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property maxPacketLifeTime returns
 *   amount of time, in milliseconds, the browser is allowed to take
 *   attempt to transmit a message, as set when the data channel was
 *   or null.
 * 
 *   `var lifetime = aDataChannel.maxPacketLifeTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/maxPacketLifeTime`
 */
rtc.RTCDataChannel.max_packet_life_time = (function rtc$RTCDataChannel$max_packet_life_time(this$){
return this$.maxPacketLifeTime();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property maxRetransmits returns
 *   maximum number of times the browser should try to retransmit
 *   message before giving up, as set when the data channel was created,
 *   null, which indicates that there is no maximum.
 * 
 *   `var tries = aDataChannel.maxRetransmits;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/maxRetransmits`
 */
rtc.RTCDataChannel.max_retransmits = (function rtc$RTCDataChannel$max_retransmits(this$){
return this$.maxRetransmits();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property negotiated indicates whether
 *   `rtc.RTCDataChannel`'s connection was negotiated by the Web app
 *   or by the WebRTC layer (false).
 * 
 *   `var negotiated = aDataChannel.negotiated;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/negotiated`
 */
rtc.RTCDataChannel.negotiated = (function rtc$RTCDataChannel$negotiated(this$){
return this$.negotiated();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onbufferedamountlow property is an `web.EventHandler`
 *   specifies a function the browser calls when the bufferedamountlow
 *   is sent to the `rtc.RTCDataChannel`. This event, which is represented
 *   a simple `web.Event` object, is sent when the amount of data
 *   to be sent falls to or below the threshold specified by the channel's
 * 
 *   `RTCDataChannel.onbufferedamountlow = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onbufferedamountlow`
 */
rtc.RTCDataChannel.onbufferedamountlow = (function rtc$RTCDataChannel$onbufferedamountlow(this$){
return this$.onbufferedamountlow();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onbufferedamountlow property is an `web.EventHandler`
 *   specifies a function the browser calls when the bufferedamountlow
 *   is sent to the `rtc.RTCDataChannel`. This event, which is represented
 *   a simple `web.Event` object, is sent when the amount of data
 *   to be sent falls to or below the threshold specified by the channel's
 * 
 *   `RTCDataChannel.onbufferedamountlow = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onbufferedamountlow`
 */
rtc.RTCDataChannel.set_onbufferedamountlow_BANG_ = (function rtc$RTCDataChannel$set_onbufferedamountlow_BANG_(this$,val){
return (this$["onbufferedamountlow"] = val);
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onclose property is an `web.EventHandler`
 *   specifies a function to be called by the browser when the close
 *   is received by the `rtc.RTCDataChannel`. This is a simple `web.Event`
 *   indicates that the data channel has closed down.
 * 
 *   `RTCDataChannel.onclose = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onclose`
 */
rtc.RTCDataChannel.onclose = (function rtc$RTCDataChannel$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onclose property is an `web.EventHandler`
 *   specifies a function to be called by the browser when the close
 *   is received by the `rtc.RTCDataChannel`. This is a simple `web.Event`
 *   indicates that the data channel has closed down.
 * 
 *   `RTCDataChannel.onclose = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onclose`
 */
rtc.RTCDataChannel.set_onclose_BANG_ = (function rtc$RTCDataChannel$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onerror property is an `web.EventHandler`
 *   specifies a function to be called when the error event is received.
 *   an error occurs on the data channel, the function receives as
 *   an `web.ErrorEvent` object describing the error which occurred.
 * 
 *   `RTCDataChannel.onerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onerror`
 */
rtc.RTCDataChannel.onerror = (function rtc$RTCDataChannel$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onerror property is an `web.EventHandler`
 *   specifies a function to be called when the error event is received.
 *   an error occurs on the data channel, the function receives as
 *   an `web.ErrorEvent` object describing the error which occurred.
 * 
 *   `RTCDataChannel.onerror = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onerror`
 */
rtc.RTCDataChannel.set_onerror_BANG_ = (function rtc$RTCDataChannel$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onmessage property stores an `web.EventHandler`
 *   specifies a function to be called when the message event is fired
 *   the channel. This event is represented by the `web.MessageEvent`
 *   This event is sent to the channel when a message is received
 *   the other peer.
 * 
 *   `RTCDataChannel.onmessage = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onmessage`
 */
rtc.RTCDataChannel.onmessage = (function rtc$RTCDataChannel$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onmessage property stores an `web.EventHandler`
 *   specifies a function to be called when the message event is fired
 *   the channel. This event is represented by the `web.MessageEvent`
 *   This event is sent to the channel when a message is received
 *   the other peer.
 * 
 *   `RTCDataChannel.onmessage = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onmessage`
 */
rtc.RTCDataChannel.set_onmessage_BANG_ = (function rtc$RTCDataChannel$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onopen property is an `web.EventHandler` which
 *   a function to be called when the open event is fired; this is
 *   simple `web.Event` which is sent when the data channel's underlying
 *   transport—the link over which the `rtc.RTCDataChannel`'s messages
 *   established or re-established.
 * 
 *   `RTCDataChannel.onopen = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onopen`
 */
rtc.RTCDataChannel.onopen = (function rtc$RTCDataChannel$onopen(this$){
return this$.onopen();
});
/**
 * Property.
 * 
 *   The RTCDataChannel.onopen property is an `web.EventHandler` which
 *   a function to be called when the open event is fired; this is
 *   simple `web.Event` which is sent when the data channel's underlying
 *   transport—the link over which the `rtc.RTCDataChannel`'s messages
 *   established or re-established.
 * 
 *   `RTCDataChannel.onopen = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/onopen`
 */
rtc.RTCDataChannel.set_onopen_BANG_ = (function rtc$RTCDataChannel$set_onopen_BANG_(this$,val){
return (this$["onopen"] = val);
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property ordered indicates whether
 *   not the data channel guarantees in-order delivery of messages;
 *   default is true, which indicates that the data channel is indeed
 * 
 *   `var ordered = aDataChannel.ordered;
 * 
 *   A `web.Boolean` value which is true if in-order delivery is guaranteed and is otherwise false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/ordered`
 */
rtc.RTCDataChannel.ordered = (function rtc$RTCDataChannel$ordered(this$){
return this$.ordered();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property protocol returns a `dom.DOMString`
 *   the name of the subprotocol in use. If no protocol was specified
 *   the data channel was created, then this property's value is \"\"
 *   empty string).
 * 
 *   `var subProtocol = aDataChannel.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/protocol`
 */
rtc.RTCDataChannel.protocol = (function rtc$RTCDataChannel$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property readyState returns an enum
 *   type RTCDataChannelState which indicates the state of the data
 *   underlying data connection.
 * 
 *   `var state = aDataChannel.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/readyState`
 */
rtc.RTCDataChannel.ready_state = (function rtc$RTCDataChannel$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The read-only RTCDataChannel property reliable indicates whether
 *   not the data channel is reliable.
 * 
 *   `var reliable = aDataChannel.reliable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/reliable`
 */
rtc.RTCDataChannel.reliable = (function rtc$RTCDataChannel$reliable(this$){
return this$.reliable();
});
/**
 * Property.
 * 
 *   The deprecated (and never part of the official specification)
 *   RTCDataChannel property stream returns an ID number (between
 *   and 65,535) which uniquely identifies the `rtc.RTCDataChannel`.
 * 
 *   `var stream = aDataChannel.stream;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/stream`
 */
rtc.RTCDataChannel.stream = (function rtc$RTCDataChannel$stream(this$){
return this$.stream();
});
/**
 * Property.
 * 
 *   A bufferedamountlow event is sent to an `rtc.RTCDataChannel`
 *   the number of bytes currently in the outbound data transfer buffer
 *   below the threshold specified in `web.bufferedAmountLowThreshold`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedamountlow_event`
 */
rtc.RTCDataChannel.bufferedamountlow = (function rtc$RTCDataChannel$bufferedamountlow(this$){
return this$.bufferedamountlow();
});
/**
 * Property.
 * 
 *   A bufferedamountlow event is sent to an `rtc.RTCDataChannel`
 *   the number of bytes currently in the outbound data transfer buffer
 *   below the threshold specified in `web.bufferedAmountLowThreshold`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/bufferedamountlow_event`
 */
rtc.RTCDataChannel.set_bufferedamountlow_BANG_ = (function rtc$RTCDataChannel$set_bufferedamountlow_BANG_(this$,val){
return (this$["bufferedamountlow"] = val);
});
/**
 * Property.
 * 
 *   A WebRTC `web.error` event is sent to an `rtc.RTCDataChannel`
 *   `web.onerror` error handler when an error occurs on the data
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/error_event`
 */
rtc.RTCDataChannel.error = (function rtc$RTCDataChannel$error(this$){
return this$.error();
});
/**
 * Property.
 * 
 *   A WebRTC `web.error` event is sent to an `rtc.RTCDataChannel`
 *   `web.onerror` error handler when an error occurs on the data
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/error_event`
 */
rtc.RTCDataChannel.set_error_BANG_ = (function rtc$RTCDataChannel$set_error_BANG_(this$,val){
return (this$["error"] = val);
});
/**
 * Property.
 * 
 *   The WebRTC message event is sent to the `web.onmessage` event
 *   on an `rtc.RTCDataChannel` object when a message has been received
 *   the remote peer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/message_event`
 */
rtc.RTCDataChannel.message = (function rtc$RTCDataChannel$message(this$){
return this$.message();
});
/**
 * Property.
 * 
 *   The WebRTC message event is sent to the `web.onmessage` event
 *   on an `rtc.RTCDataChannel` object when a message has been received
 *   the remote peer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/message_event`
 */
rtc.RTCDataChannel.set_message_BANG_ = (function rtc$RTCDataChannel$set_message_BANG_(this$,val){
return (this$["message"] = val);
});
/**
 * Property.
 * 
 *   The WebRTC open event is sent to an `rtc.RTCDataChannel` object's
 *   event handler when the underlying transport used to send and
 *   the data channel's messages is opened or re-opened.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/open_event`
 */
rtc.RTCDataChannel.open = (function rtc$RTCDataChannel$open(this$){
return this$.open();
});
/**
 * Property.
 * 
 *   The WebRTC open event is sent to an `rtc.RTCDataChannel` object's
 *   event handler when the underlying transport used to send and
 *   the data channel's messages is opened or re-opened.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel/open_event`
 */
rtc.RTCDataChannel.set_open_BANG_ = (function rtc$RTCDataChannel$set_open_BANG_(this$,val){
return (this$["open"] = val);
});

//# sourceMappingURL=RTCDataChannel.js.map?rel=1565798855871
