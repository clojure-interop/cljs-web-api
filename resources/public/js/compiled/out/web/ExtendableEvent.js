// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ExtendableEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ExtendableEvent() constructor creates a new `web.ExtendableEvent` object.
 * 
 *   type
 *   The type of the ExtendableEvent, for example install, activate.
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the event object. Currently no possible options exist inside the spec, but this has been defined for forward compatibility across the different derived events.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/ExtendableEvent`
 */
web.ExtendableEvent.constructor$ = ExtendableEvent;
/**
 * Method.
 * 
 *   The extendableEvent.waitUntil() method tells the event dispatcher
 *   work is ongoing. It can also be used to detect whether that work
 *   successful. In service workers, waitUntil() tells the browser
 *   work is ongoing until the promise settles, and it shouldn't terminate
 *   service worker if it wants that work to complete.
 * 
 *   `event.waitUntil(promise)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil`
 */
web.ExtendableEvent.wait_until = (function web$ExtendableEvent$wait_until(this$,promise){
return this$.waitUntil(promise);
});

//# sourceMappingURL=ExtendableEvent.js.map?rel=1565798858157
