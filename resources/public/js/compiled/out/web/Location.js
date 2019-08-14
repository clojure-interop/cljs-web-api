// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Location');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Location.assign() method causes the window to load and display
 *   document at the URL specified.
 * 
 *   `location.assign(url);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/assign`
 */
web.Location.assign = (function web$Location$assign(this$,url){
return this$.assign(url);
});
/**
 * Method.
 * 
 *   The Location.reload() method reloads the current URL, like the
 *   button.
 * 
 *   `location.reload(forcedReload);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/reload`
 */
web.Location.reload = (function web$Location$reload(this$,forced_reload){
return this$.reload(forced_reload);
});
/**
 * Method.
 * 
 *   The Location.replace() method replaces the current resource with
 *   one at the provided URL. The difference from the `web.assign()`
 *   is that after using replace() the current page will not be saved
 *   session `web.History`, meaning the user won't be able to use
 *   back button to navigate to it.
 * 
 *   `object.replace(url);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`
 */
web.Location.replace = (function web$Location$replace(this$,url){
return this$.replace(url);
});

//# sourceMappingURL=Location.js.map?rel=1565798811871
