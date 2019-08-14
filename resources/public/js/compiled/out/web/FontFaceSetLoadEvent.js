// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FontFaceSetLoadEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FontFaceSetLoadEvent constructor creates a new `web.FontFaceLoadEvent` object which is fired whenever a `web.FontFaceSet` loads.
 * 
 *   type
 *   The literal value 'Type' (quotation marks included).
 *   options Optional
 *   Options are as follows:
 * 
 *   fontfaces: An array of `web.FontFace` instances.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent`
 */
web.FontFaceSetLoadEvent.constructor$ = FontFaceSetLoadEvent;
/**
 * Property.
 * 
 *   The fontfaces read-only property of the `web.FontFaceLoadEventInit`
 *   returns an array of `web.FontFace` instances, each of which represents
 *   single usable font.
 * 
 *   `var fontFace[] = FontFaceSetLoadEvent.fontfaces`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`
 */
web.FontFaceSetLoadEvent.fontfaces = (function web$FontFaceSetLoadEvent$fontfaces(this$){
return this$.fontfaces();
});
/**
 * Property.
 * 
 *   The fontfaces read-only property of the `web.FontFaceLoadEventInit`
 *   returns an array of `web.FontFace` instances, each of which represents
 *   single usable font.
 * 
 *   `var fontFace[] = FontFaceSetLoadEvent.fontfaces`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSetLoadEvent/fontfaces`
 */
web.FontFaceSetLoadEvent.set_fontfaces_BANG_ = (function web$FontFaceSetLoadEvent$set_fontfaces_BANG_(this$,val){
return (this$["fontfaces"] = val);
});

//# sourceMappingURL=FontFaceSetLoadEvent.js.map?rel=1565798856153
