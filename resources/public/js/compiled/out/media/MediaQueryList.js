// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaQueryList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The addListener() method of the `media.MediaQueryList` interface
 *   a listener to the MediaQueryListener that will run a custom callback
 *   in response to the media query status changing.
 * 
 *   `MediaQueryList.addListener(func)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener`
 */
media.MediaQueryList.add_listener = (function media$MediaQueryList$add_listener(this$,func){
return this$.addListener(func);
});
/**
 * Method.
 * 
 *   The removeListener() method of the `media.MediaQueryList` interface
 *   a listener from the MediaQueryListener.
 * 
 *   `MediaQueryList.removeListener(func)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/removeListener`
 */
media.MediaQueryList.remove_listener = (function media$MediaQueryList$remove_listener(this$,func){
return this$.removeListener(func);
});
/**
 * Property.
 * 
 *   The matches read-only property of the `media.MediaQueryList`
 *   is a `web.Boolean` that returns true if the `web.document` currently
 *   the media query list, or false if not.
 * 
 *   `var matches = MediaQueryList.matches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches`
 */
media.MediaQueryList.matches = (function media$MediaQueryList$matches(this$){
return this$.matches();
});
/**
 * Property.
 * 
 *   The matches read-only property of the `media.MediaQueryList`
 *   is a `web.Boolean` that returns true if the `web.document` currently
 *   the media query list, or false if not.
 * 
 *   `var matches = MediaQueryList.matches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches`
 */
media.MediaQueryList.set_matches_BANG_ = (function media$MediaQueryList$set_matches_BANG_(this$,val){
return (this$["matches"] = val);
});
/**
 * Property.
 * 
 *   The media read-only property of the `media.MediaQueryList` interface
 *   a `dom.DOMString` representing a serialized media query.
 * 
 *   `var media = MediaQueryList.media;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media`
 */
media.MediaQueryList.media = (function media$MediaQueryList$media(this$){
return this$.media();
});
/**
 * Property.
 * 
 *   The media read-only property of the `media.MediaQueryList` interface
 *   a `dom.DOMString` representing a serialized media query.
 * 
 *   `var media = MediaQueryList.media;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media`
 */
media.MediaQueryList.set_media_BANG_ = (function media$MediaQueryList$set_media_BANG_(this$,val){
return (this$["media"] = val);
});
/**
 * Property.
 * 
 *   The onchange property of the `media.MediaQueryList` interface
 *   an event handler property representing a function that is invoked
 *   the change event fires, i.e when the status of media query support
 *   The event object is a `media.MediaQueryListEvent` instance, which
 *   recognised as a MediaListQuery instance in older browsers, for
 *   compatibility purposes.
 * 
 *   `MediaQueryList.onchange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange`
 */
media.MediaQueryList.onchange = (function media$MediaQueryList$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The onchange property of the `media.MediaQueryList` interface
 *   an event handler property representing a function that is invoked
 *   the change event fires, i.e when the status of media query support
 *   The event object is a `media.MediaQueryListEvent` instance, which
 *   recognised as a MediaListQuery instance in older browsers, for
 *   compatibility purposes.
 * 
 *   `MediaQueryList.onchange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange`
 */
media.MediaQueryList.set_onchange_BANG_ = (function media$MediaQueryList$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});

//# sourceMappingURL=MediaQueryList.js.map?rel=1565798814166
