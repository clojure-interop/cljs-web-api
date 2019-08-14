// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCDataChannelEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCDataChannelEvent() constructor creates a new `rtc.RTCDataChannelEvent`.
 * 
 *   type
 *   A `dom.DOMString` which specifies the name of the event. There is only one type of RTCDataChannelEvent, so this will always be \"datachannel\".
 *   rtcDataChannelEventInit
 *   A RTCDataChannelEventInit dictionary, which has following fields:
 * 
 *   \"channel\" of type `rtc.RTCDataChannel`, representing the data channel being concerned by the event.
 *   \"bubbles\", optional, inherited from EventInit. Indicates if the event must bubble or not. Default is false.
 *   \"cancelable\", optional, inherited from EventInit. Indicates if the event can be canceled or not. Default is false.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent/RTCDataChannelEvent`
 */
rtc.RTCDataChannelEvent.constructor$ = RTCDataChannelEvent;
/**
 * Property.
 * 
 *   The read-only property RTCDataChannelEvent.channel returns the
 *   associated with the event.
 * 
 *   `var channel = RTCDataChannelEvent.channel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannelEvent/channel`
 */
rtc.RTCDataChannelEvent.channel = (function rtc$RTCDataChannelEvent$channel(this$){
return this$.channel();
});

//# sourceMappingURL=RTCDataChannelEvent.js.map?rel=1565798814364
