// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SyncEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SyncEvent() constructor creates a new `web.SyncEvent` object.
 * 
 *   type
 *   The type of the Event.
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the event object. Options are as follows:
 * 
 *   tag: A developer-defined unique identifier for this SyncEvent.
 *   lastChance: A `web.Boolean` indicating that the user agent will not make further synchronization attempts after the current attempt.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/SyncEvent`
 */
web.SyncEvent.constructor$ = SyncEvent;
/**
 * Property.
 * 
 *   The SyncEvent.lastChance read-only property of the `web.SyncEvent`
 *   returns true if the user agent will not make further synchronization
 *   after the current attempt. This is the value passed in the lastChance
 *   of the `web.SyncEvent()` constructor.
 * 
 *   `var lastChance = SyncEvent.lastChance`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/lastChance`
 */
web.SyncEvent.last_chance = (function web$SyncEvent$last_chance(this$){
return this$.lastChance();
});
/**
 * Property.
 * 
 *   The SyncEvent.lastChance read-only property of the `web.SyncEvent`
 *   returns true if the user agent will not make further synchronization
 *   after the current attempt. This is the value passed in the lastChance
 *   of the `web.SyncEvent()` constructor.
 * 
 *   `var lastChance = SyncEvent.lastChance`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/lastChance`
 */
web.SyncEvent.set_last_chance_BANG_ = (function web$SyncEvent$set_last_chance_BANG_(this$,val){
return (this$["lastChance"] = val);
});
/**
 * Property.
 * 
 *   The registration read-only property of the `web.SyncEvent` interface
 *   a reference to a `web.SyncRegistration` object.
 * 
 *   `var syncReg = SyncEvent.registration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/registration`
 */
web.SyncEvent.registration = (function web$SyncEvent$registration(this$){
return this$.registration();
});
/**
 * Property.
 * 
 *   The registration read-only property of the `web.SyncEvent` interface
 *   a reference to a `web.SyncRegistration` object.
 * 
 *   `var syncReg = SyncEvent.registration`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/registration`
 */
web.SyncEvent.set_registration_BANG_ = (function web$SyncEvent$set_registration_BANG_(this$,val){
return (this$["registration"] = val);
});
/**
 * Property.
 * 
 *   The SyncEvent.tag read-only property of the `web.SyncEvent` interface
 *   the developer-defined identifier for this SyncEvent. This is
 *   value passed in the tag parameter of the `web.SyncEvent()` constructor.
 * 
 *   `var tag = SyncEvent.tag`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/tag`
 */
web.SyncEvent.tag = (function web$SyncEvent$tag(this$){
return this$.tag();
});
/**
 * Property.
 * 
 *   The SyncEvent.tag read-only property of the `web.SyncEvent` interface
 *   the developer-defined identifier for this SyncEvent. This is
 *   value passed in the tag parameter of the `web.SyncEvent()` constructor.
 * 
 *   `var tag = SyncEvent.tag`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/tag`
 */
web.SyncEvent.set_tag_BANG_ = (function web$SyncEvent$set_tag_BANG_(this$,val){
return (this$["tag"] = val);
});

//# sourceMappingURL=SyncEvent.js.map?rel=1565798850964
