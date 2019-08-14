// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TextEncoder');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The TextEncoder() constructor returns a newly created utf-8 `web.TextEncoder` object.
 * 
 *   TextEncoder() takes no parameters since Firefox 48 and Chrome 53
 * 
 * 
 * 
 *   Note: Prior to Firefox 48 and Chrome 53, an encoding type label was accepted as a paramer to the TextEncoder object, since then both browers have removed support for any encoder type other than utf-8, to match the spec. Any type label passed into the TextEncoder constructor will now be ignored and a utf-8 TextEncoder will be created.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder`
 */
web.TextEncoder.constructor$ = TextEncoder;
/**
 * Method.
 * 
 *   The TextEncoder.prototype.encode() method takes a `web.USVString`
 *   input, and returns a `web.Uint8Array` containing the text given
 *   parameters encoded with the specific method for that TextEncoder
 * 
 *   `b1 = encoder.encode(string);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode`
 */
web.TextEncoder.encode = (function web$TextEncoder$encode(this$,string){
return this$.encode(string);
});
/**
 * Method.
 * 
 *   The TextEncoder.prototype.encodeInto() method takes a `web.USVString`
 *   encode and a destination `web.Uint8Array` to put resulting UTF-8
 *   text into, and returns a dictionary object indicating the progress
 *   the encoding. This is potentially more performant than the older
 *   method especially when the target buffer is a view into a Wasm
 * 
 *   `b1 = encoder.encodeInto(string, uint8Array);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encodeInto`
 */
web.TextEncoder.encode_into = (function web$TextEncoder$encode_into(this$,string,uint_8_array){
return this$.encodeInto(string,uint_8_array);
});
/**
 * Property.
 * 
 *   The TextEncoder.encoding read-only property returns a `dom.DOMString`
 *   the name of the encoding algorithm used by the specific encoder.
 * 
 *   `b = encoder.encoding;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encoding`
 */
web.TextEncoder.encoding = (function web$TextEncoder$encoding(this$){
return this$.encoding();
});

//# sourceMappingURL=TextEncoder.js.map?rel=1565798853697
