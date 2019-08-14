// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DocumentTimeline');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DocumentTimeline() constructor of the Web Animations API creates a new instance of the `web.DocumentTimeline` object associated with the active document of the current browsing context.
 * 
 *   options
 *   An object specifying options for the new timeline. Currently the only supported option is the originTime member which specifies the zero time for the documentTimeline as a real number of milliseconds relative to the `web.navigationStart` moment of the active document for the current browsing context.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentTimeline/DocumentTimeline`
 */
web.DocumentTimeline.constructor$ = DocumentTimeline;
/**
 * Property.
 * 
 *   The currentTime read-only property of the Web Animations API's
 *   interface returns the timeline's current time in milliseconds,
 *   null if the timeline is inactive.
 * 
 *   `var currentTime = AnimationTimeline.currentTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnimationTimeline/currentTime`
 */
web.DocumentTimeline.current_time = (function web$DocumentTimeline$current_time(this$){
return this$.currentTime();
});

//# sourceMappingURL=DocumentTimeline.js.map?rel=1565798812608
