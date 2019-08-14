// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AnimationPlaybackEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AnimationPlaybackEvent() constructor of the Web Animations API returns a new `web.AnimationPlaybackEvent` object instance.
 * 
 *   `web.type`
 *   A DOMString representing the name of the event.
 *   eventInitDict Optional
 *   An optional EventInit dictionary object containing the following fields:
 * 
 *   bubbles Optional
 *   Defaults to false, of type Boolean, indicating if the event bubbles or not.
 *   cancelable Optional
 *   Defaults to false, of type Boolean, indicating if the event can be canceled or not.
 *   detail Optional
 *   Defaults to null, of type any — an event-dependent value associated with the event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent`
 */
web.AnimationPlaybackEvent.constructor$ = AnimationPlaybackEvent;
/**
 * Property.
 * 
 *   The currentTime read-only property of the `web.AnimationPlaybackEvent`
 *   represents the current time of the animation that generated the
 *   at the moment the event is queued. This will be unresolved if
 *   animation was idle at the time the event was generated.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/currentTime`
 */
web.AnimationPlaybackEvent.current_time = (function web$AnimationPlaybackEvent$current_time(this$){
return this$.currentTime();
});
/**
 * Property.
 * 
 *   The currentTime read-only property of the `web.AnimationPlaybackEvent`
 *   represents the current time of the animation that generated the
 *   at the moment the event is queued. This will be unresolved if
 *   animation was idle at the time the event was generated.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/currentTime`
 */
web.AnimationPlaybackEvent.set_current_time_BANG_ = (function web$AnimationPlaybackEvent$set_current_time_BANG_(this$,val){
return (this$["currentTime"] = val);
});
/**
 * Property.
 * 
 *   The timelineTime read-only property of the `web.AnimationPlaybackEvent`
 *   represents the time value of the animation's `web.timeline` at
 *   moment the event is queued. This will be unresolved if the animation
 *   not associated with a timeline at the time the event was generated
 *   if the associated timeline was inactive.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/timelineTime`
 */
web.AnimationPlaybackEvent.timeline_time = (function web$AnimationPlaybackEvent$timeline_time(this$){
return this$.timelineTime();
});
/**
 * Property.
 * 
 *   The timelineTime read-only property of the `web.AnimationPlaybackEvent`
 *   represents the time value of the animation's `web.timeline` at
 *   moment the event is queued. This will be unresolved if the animation
 *   not associated with a timeline at the time the event was generated
 *   if the associated timeline was inactive.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationPlaybackEvent/timelineTime`
 */
web.AnimationPlaybackEvent.set_timeline_time_BANG_ = (function web$AnimationPlaybackEvent$set_timeline_time_BANG_(this$,val){
return (this$["timelineTime"] = val);
});

//# sourceMappingURL=AnimationPlaybackEvent.js.map?rel=1565798852698
