// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ClipboardEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ClipboardEvent() constructor returns a newly created `web.ClipboardEvent`, representing an event providing information related to modification of the clipboard, that is cut, copy, and paste events.
 * 
 *   The ClipboardEvent() constructor also inherits arguments from `web.Event()`.
 * 
 * 
 *   type
 *   Is a `dom.DOMString` representing the name of the type of the ClipboardEvent. It is case-sensitive and can be: 'copy', 'cut', or 'paste'.
 *   options Optional
 *   Options are as follows:
 * 
 *   clipboardData: A `web.DataTransfer` containing the data concerned by the clipboard event.
 *   dataType : A `dom.DOMString` containing the MIME-type of the data contained in the data argument.
 *   data : A `dom.DOMString` containing the data concerned by the clipboard event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/ClipboardEvent`
 */
web.ClipboardEvent.constructor$ = ClipboardEvent;
/**
 * Method.
 * 
 *   The ClipboardEvent.clipboardData property holds a `web.DataTransfer`
 *   which can be used:
 * 
 *   `data = ClipboardEvent.clipboardData`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData`
 */
web.ClipboardEvent.clipboard_data = (function web$ClipboardEvent$clipboard_data(this$){
return this$.clipboardData();
});

//# sourceMappingURL=ClipboardEvent.js.map?rel=1565798852382
