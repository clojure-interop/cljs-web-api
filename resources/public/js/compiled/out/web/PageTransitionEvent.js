// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PageTransitionEvent');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The persisted read-only property indicates if a webpage is loading
 *   a cache.
 * 
 *   `window.addEventListener('pageshow', function(event) {
 *   if (event.persisted) {
 *   console.log('Page was loaded from cache.');
 *   }
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent/persisted`
 */
web.PageTransitionEvent.persisted = (function web$PageTransitionEvent$persisted(this$){
return this$.persisted();
});
/**
 * Property.
 * 
 *   The persisted read-only property indicates if a webpage is loading
 *   a cache.
 * 
 *   `window.addEventListener('pageshow', function(event) {
 *   if (event.persisted) {
 *   console.log('Page was loaded from cache.');
 *   }
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PageTransitionEvent/persisted`
 */
web.PageTransitionEvent.set_persisted_BANG_ = (function web$PageTransitionEvent$set_persisted_BANG_(this$,val){
return (this$["persisted"] = val);
});

//# sourceMappingURL=PageTransitionEvent.js.map?rel=1565798825250
