// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BlobEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The BlobEvent() constructor returns a newly created `web.BlobEvent` object with an associated `web.Blob`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/BlobEvent`
 */
web.BlobEvent.constructor$ = BlobEvent;
/**
 * Property.
 * 
 *   The BlobEvent.data read-only property represents a `web.Blob`
 *   with the event.
 * 
 *   `associatedBlob = BlobEvent.data`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/data`
 */
web.BlobEvent.data = (function web$BlobEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The BlobEvent.data read-only property represents a `web.Blob`
 *   with the event.
 * 
 *   `associatedBlob = BlobEvent.data`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/data`
 */
web.BlobEvent.set_data_BANG_ = (function web$BlobEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The timecode readonlyinline property of the `web.BlobEvent` interface
 *   `dom.DOMHighResTimeStamp` indicating the difference between the
 *   of the first chunk in data, and the timestamp of the first chunk
 *   the first BlobEvent produced by this recorder.
 * 
 *   `var timecode = BlobEvent.timecode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/timecode`
 */
web.BlobEvent.timecode = (function web$BlobEvent$timecode(this$){
return this$.timecode();
});
/**
 * Property.
 * 
 *   The timecode readonlyinline property of the `web.BlobEvent` interface
 *   `dom.DOMHighResTimeStamp` indicating the difference between the
 *   of the first chunk in data, and the timestamp of the first chunk
 *   the first BlobEvent produced by this recorder.
 * 
 *   `var timecode = BlobEvent.timecode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BlobEvent/timecode`
 */
web.BlobEvent.set_timecode_BANG_ = (function web$BlobEvent$set_timecode_BANG_(this$,val){
return (this$["timecode"] = val);
});

//# sourceMappingURL=BlobEvent.js.map?rel=1565798861987
