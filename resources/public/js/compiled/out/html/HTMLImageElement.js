// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLImageElement');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Image() constructor creates a new `html.HTMLImageElement` instance. It is functionally equivalent to `web.document.createElement('img')`.
 * 
 *   Note: The entire bitmap is loaded regardless of the sizes specified in the constructor. The size specified in the constructor is reflected through the properties `html.HTMLImageElement.width` and `html.HTMLImageElement.height` of the resulting instance. The intrinsic width and height of the image in CSS pixels is reflected through the properties `html.HTMLImageElement.naturalWidth` and `html.HTMLImageElement.naturalHeight`. If no size is specified in the constructor both pairs of properties have the same values.
 * 
 * 
 * 
 *   width
 *   The width of the image (i.e., the value for the width attribute).
 *   height
 *   The height of the image (i.e., the value for the height attribute).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image`
 */
html.HTMLImageElement.constructor$ = Image;
/**
 * Method.
 * 
 *   The decode() method of the `html.HTMLImageElement` interface
 *   a `web.Promise` that resolves when the image is decoded and it
 *   safe to append the image to the DOM.
 * 
 *   `var promise = HTMLImageElement.decode();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode`
 */
html.HTMLImageElement.decode = (function html$HTMLImageElement$decode(this$){
return this$.decode();
});
/**
 * Property.
 * 
 *   The decoding property of the `html.HTMLImageElement` interface
 *   a hint given to the browser on how it should decode the image.
 * 
 *   `refStr = imgElem.decoding;
 *   imgElem.decoding = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`
 */
html.HTMLImageElement.decoding = (function html$HTMLImageElement$decoding(this$){
return this$.decoding();
});
/**
 * Property.
 * 
 *   The decoding property of the `html.HTMLImageElement` interface
 *   a hint given to the browser on how it should decode the image.
 * 
 *   `refStr = imgElem.decoding;
 *   imgElem.decoding = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`
 */
html.HTMLImageElement.set_decoding_BANG_ = (function html$HTMLImageElement$set_decoding_BANG_(this$,val){
return (this$["decoding"] = val);
});
/**
 * Property.
 * 
 *   The HTMLImageElement.referrerPolicy property reflects the HTML
 *   attribute of the `web.<img>` element defining which referrer
 *   sent when fetching the resource.
 * 
 *   `refStr = imgElt.referrerPolicy;
 *   imgElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`
 */
html.HTMLImageElement.referrer_policy = (function html$HTMLImageElement$referrer_policy(this$){
return this$.referrerPolicy();
});
/**
 * Property.
 * 
 *   The HTMLImageElement.referrerPolicy property reflects the HTML
 *   attribute of the `web.<img>` element defining which referrer
 *   sent when fetching the resource.
 * 
 *   `refStr = imgElt.referrerPolicy;
 *   imgElt.referrerPolicy = refStr;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`
 */
html.HTMLImageElement.set_referrer_policy_BANG_ = (function html$HTMLImageElement$set_referrer_policy_BANG_(this$,val){
return (this$["referrerPolicy"] = val);
});

//# sourceMappingURL=HTMLImageElement.js.map?rel=1565798836514
