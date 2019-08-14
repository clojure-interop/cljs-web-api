// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Headers');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Headers() constructor creates a new `web.Headers` object.
 * 
 *   init Optional
 *   An object containing any HTTP headers that you want to pre-populate your Headers object with. This can be a simple object literal with `web.ByteString` values; or an existing Headers object. In the last case, the new Headers object inherits its data from the existing Headers object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers`
 */
web.Headers.constructor$ = Headers;
/**
 * Method.
 * 
 *   The append() method of the `web.Headers` interface appends a
 *   value onto an existing header inside a Headers object, or adds
 *   header if it does not already exist.
 * 
 *   `myHeaders.append(name, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/append`
 */
web.Headers.append = (function web$Headers$append(this$,name,value){
return this$.append(name,value);
});
/**
 * Method.
 * 
 *   The delete() method of the `web.Headers` interface deletes a
 *   from the current Headers object.
 * 
 *   `myHeaders.delete(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete`
 */
web.Headers.delete$ = (function web$Headers$delete(this$,name){
return this$.delete(name);
});
/**
 * Method.
 * 
 *   The Headers.entries() method returns an `web.iterator` allowing
 *   go through all key/value pairs contained in this object. The
 *   the key and value of each pairs are `web.ByteString` objects.
 * 
 *   `headers.entries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries`
 */
web.Headers.entries = (function web$Headers$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The get() method of the `web.Headers` interface returns a byte
 *   of all the values of a header within a Headers object with a
 *   name. If the requested header doesn't exist in the Headers object,
 *   returns null.
 * 
 *   `myHeaders.get(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/get`
 */
web.Headers.get = (function web$Headers$get(this$,name){
return this$.get(name);
});
/**
 * Method.
 * 
 *   The getAll() method of the `web.Headers` interface used to return
 *   array of all the values of a header within a Headers object with
 *   given name; in newer versions of the Fetch spec, it has been
 *   and `web.Headers.get()` has been updated to fetch all header
 *   instead of only the first one.
 * 
 *   `myHeaders.getAll(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/getAll`
 */
web.Headers.get_all = (function web$Headers$get_all(this$,name){
return this$.getAll(name);
});
/**
 * Method.
 * 
 *   The has() method of the `web.Headers` interface returns a boolean
 *   whether a Headers object contains a certain header.
 * 
 *   `myHeaders.has(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/has`
 */
web.Headers.has = (function web$Headers$has(this$,name){
return this$.has(name);
});
/**
 * Method.
 * 
 *   The Headers.keys() method returns an `web.iterator` allowing
 *   go through all keys contained in this object. The keys are `web.ByteString`
 * 
 *   `headers.keys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys`
 */
web.Headers.keys = (function web$Headers$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The set() method of the `web.Headers` interface sets a new value
 *   an existing header inside a Headers object, or adds the header
 *   it does not already exist.
 * 
 *   `myHeaders.set(name, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/set`
 */
web.Headers.set = (function web$Headers$set(this$,name,value){
return this$.set(name,value);
});
/**
 * Method.
 * 
 *   The Headers.values() method returns an `web.iterator` allowing
 *   go through all values contained in this object. The values are
 *   objects.
 * 
 *   `headers.values();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Headers/values`
 */
web.Headers.values = (function web$Headers$values(this$){
return this$.values();
});

//# sourceMappingURL=Headers.js.map?rel=1565798852070
