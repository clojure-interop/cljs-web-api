// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaQueryListEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The MediaQueryListEvent constructor creates a new MediaQueryListEvent instance.
 * 
 *   init
 * 
 * 
 *   An init object that defines features of the new object instance. The available properties are:
 * 
 * 
 *   media: A `dom.DOMString` representing a serialized media query.
 *   matches: A `web.Boolean` representing the media query status — true if it matches, false if not.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/MediaQueryListEvent`
 */
media.MediaQueryListEvent.constructor$ = MediaQueryListEvent;
/**
 * Property.
 * 
 *   The matches read-only property of the `media.MediaQueryListEvent`
 *   is a `web.Boolean` that returns true if the `web.document` currently
 *   the media query list, or false if not.
 * 
 *   `var matches = MediaQueryListEvent.matches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/matches`
 */
media.MediaQueryListEvent.matches = (function media$MediaQueryListEvent$matches(this$){
return this$.matches();
});
/**
 * Property.
 * 
 *   The matches read-only property of the `media.MediaQueryListEvent`
 *   is a `web.Boolean` that returns true if the `web.document` currently
 *   the media query list, or false if not.
 * 
 *   `var matches = MediaQueryListEvent.matches;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/matches`
 */
media.MediaQueryListEvent.set_matches_BANG_ = (function media$MediaQueryListEvent$set_matches_BANG_(this$,val){
return (this$["matches"] = val);
});
/**
 * Property.
 * 
 *   The media read-only property of the `media.MediaQueryListEvent`
 *   is a `dom.DOMString` representing a serialized media query.
 * 
 *   `var media = MediaQueryListEvent.media;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/media`
 */
media.MediaQueryListEvent.media = (function media$MediaQueryListEvent$media(this$){
return this$.media();
});
/**
 * Property.
 * 
 *   The media read-only property of the `media.MediaQueryListEvent`
 *   is a `dom.DOMString` representing a serialized media query.
 * 
 *   `var media = MediaQueryListEvent.media;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/media`
 */
media.MediaQueryListEvent.set_media_BANG_ = (function media$MediaQueryListEvent$set_media_BANG_(this$,val){
return (this$["media"] = val);
});

//# sourceMappingURL=MediaQueryListEvent.js.map?rel=1565798817767
