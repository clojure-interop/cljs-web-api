// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.URLSearchParams');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The URLSearchParams() constructor creates and returns a new `web.URLSearchParams` object. Leading '?' characters are ignored.
 * 
 *   init Optional
 *   A `web.USVString` instance, a `web.URLSearchParams` instance, a sequence of `web.USVString`s, or a record containing `web.USVString`s. Note that using a URLSearchParams instance is deprecated; soon browsers will just use a USVString for the init.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams`
 */
web.URLSearchParams.constructor$ = URLSearchParams;
/**
 * Method.
 * 
 *   The append() method of the `web.URLSearchParams` interface appends
 *   specified key/value pair as a new search parameter.
 * 
 *   `URLSearchParams.append(name, value)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/append`
 */
web.URLSearchParams.append = (function web$URLSearchParams$append(this$,name,value){
return this$.append(name,value);
});
/**
 * Method.
 * 
 *   The delete() method of the `web.URLSearchParams` interface deletes
 *   given search parameter and all its associated values, from the
 *   of all search parameters.
 * 
 *   `URLSearchParams.delete(name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/delete`
 */
web.URLSearchParams.delete$ = (function web$URLSearchParams$delete(this$,name){
return this$.delete(name);
});
/**
 * Method.
 * 
 *   The entries() method of the `web.URLSearchParams` interface returns
 *   `web.iterator` allowing iteration through all key/value pairs
 *   in this object. The key and value of each pair are `web.USVString`
 * 
 *   `searchParams.entries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/entries`
 */
web.URLSearchParams.entries = (function web$URLSearchParams$entries(this$){
return this$.entries();
});
/**
 * Method.
 * 
 *   The forEach() method of the `web.URLSearchParams` interface allows
 *   through all values contained in this object via a callback function.
 * 
 *   `searchParams.forEach(callback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach`
 */
web.URLSearchParams.for_each = (function web$URLSearchParams$for_each(this$,callback){
return this$.forEach(callback);
});
/**
 * Method.
 * 
 *   The get() method of the `web.URLSearchParams` interface returns
 *   first value associated to the given search parameter.
 * 
 *   `URLSearchParams.get(name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get`
 */
web.URLSearchParams.get = (function web$URLSearchParams$get(this$,name){
return this$.get(name);
});
/**
 * Method.
 * 
 *   The getAll() method of the `web.URLSearchParams` interface returns
 *   the values associated with a given search parameter as an array.
 * 
 *   `URLSearchParams.getAll(name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/getAll`
 */
web.URLSearchParams.get_all = (function web$URLSearchParams$get_all(this$,name){
return this$.getAll(name);
});
/**
 * Method.
 * 
 *   The has() method of the `web.URLSearchParams` interface returns
 *   `web.Boolean` that indicates whether a parameter with the specified
 *   exists.
 * 
 *   `var hasName = URLSearchParams.has(name)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/has`
 */
web.URLSearchParams.has = (function web$URLSearchParams$has(this$,name){
return this$.has(name);
});
/**
 * Method.
 * 
 *   The keys() method of the `web.URLSearchParams` interface returns
 *   `web.iterator` allowing iteration through all keys contained
 *   this object. The keys are `web.USVString` objects.
 * 
 *   `searchParams.keys();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/keys`
 */
web.URLSearchParams.keys = (function web$URLSearchParams$keys(this$){
return this$.keys();
});
/**
 * Method.
 * 
 *   The set() method of the `web.URLSearchParams` interface sets
 *   value associated with a given search parameter to the given value.
 *   there were several matching values, this method deletes the others.
 *   the search parameter doesn't exist, this method creates it.
 * 
 *   `URLSearchParams.set(name, value)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set`
 */
web.URLSearchParams.set = (function web$URLSearchParams$set(this$,name,value){
return this$.set(name,value);
});
/**
 * Method.
 * 
 *   The URLSearchParams.sort() method sorts all key/value pairs contained
 *   this object in place and returns undefined. The sort order is
 *   to unicode code points of the keys. This method uses a stable
 *   algorithm (i.e. the relative order between key/value pairs with
 *   keys will be preserved).
 * 
 *   `searchParams.sort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/sort`
 */
web.URLSearchParams.sort = (function web$URLSearchParams$sort(this$){
return this$.sort();
});
/**
 * Method.
 * 
 *   The toString() method of the `web.URLSearchParams` interface
 *   a query string suitable for use in a URL.
 * 
 *   `URLSearchParams.toString()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/toString`
 */
web.URLSearchParams.to_string = (function web$URLSearchParams$to_string(this$){
return this$.toString();
});
/**
 * Method.
 * 
 *   The values() method of the `web.URLsearchParams` interface returns
 *   `web.iterator` allowing iteration through all values contained
 *   this object. The values are `web.USVString` objects.
 * 
 *   `searchParams.values();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/values`
 */
web.URLSearchParams.values = (function web$URLSearchParams$values(this$){
return this$.values();
});

//# sourceMappingURL=URLSearchParams.js.map?rel=1565798851758
