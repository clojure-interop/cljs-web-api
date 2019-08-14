// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Crypto');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Crypto.getRandomValues() method lets you get cryptographically
 *   random values. The array given as the parameter is filled with
 *   numbers (random in its cryptographic meaning).
 * 
 *   `cryptoObj.getRandomValues(typedArray);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues`
 */
web.Crypto.get_random_values = (function web$Crypto$get_random_values(this$,typed_array){
return this$.getRandomValues(typed_array);
});
/**
 * Property.
 * 
 *   The Crypto.subtle read-only property returns a `web.SubtleCrypto`
 *   allowing to perform cryptographical operations.
 * 
 *   `var crypto = crypto.subtle;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle`
 */
web.Crypto.subtle = (function web$Crypto$subtle(this$){
return this$.subtle();
});

//# sourceMappingURL=Crypto.js.map?rel=1565798825174
