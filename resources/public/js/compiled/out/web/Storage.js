// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Storage');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The clear() method of the `web.Storage` interface clears all
 *   stored in a given Storage object.
 * 
 *   `storage.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear`
 */
web.Storage.clear = (function web$Storage$clear(this$){
return this$.clear();
});
/**
 * Method.
 * 
 *   The getItem() method of the `web.Storage` interface, when passed
 *   key name, will return that key's value, or null if the key does
 *   exist, in the given Storage object.
 * 
 *   `var aValue = storage.getItem(keyName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem`
 */
web.Storage.get_item = (function web$Storage$get_item(this$,key_name){
return this$.getItem(key_name);
});
/**
 * Method.
 * 
 *   The key() method of the `web.Storage` interface, when passed
 *   number n, returns the name of the nth key in a given Storage
 *   The order of keys is user-agent defined, so you should not rely
 *   it.
 * 
 *   `var aKeyName = storage.key(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/key`
 */
web.Storage.key = (function web$Storage$key(this$,index){
return this$.key(index);
});
/**
 * Method.
 * 
 *   The removeItem() method of the `web.Storage` interface, when
 *   a key name, will remove that key from the given Storage object
 *   it exists. If there is no item associated with the given key,
 *   method will do nothing.
 * 
 *   `storage.removeItem(keyName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem`
 */
web.Storage.remove_item = (function web$Storage$remove_item(this$,key_name){
return this$.removeItem(key_name);
});
/**
 * Method.
 * 
 *   The setItem() method of the `web.Storage` interface, when passed
 *   key name and value, will add that key to the given Storage object,
 *   update that key's value if it already exists.
 * 
 *   `storage.setItem(keyName, keyValue);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem`
 */
web.Storage.set_item = (function web$Storage$set_item(this$,key_name,key_value){
return this$.setItem(key_name,key_value);
});
/**
 * Property.
 * 
 *   The length read-only property of the `web.Storage` interface
 *   the number of data items stored in a given Storage object.
 * 
 *   `var aLength = storage.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Storage/length`
 */
web.Storage.length = (function web$Storage$length(this$){
return this$.length();
});

//# sourceMappingURL=Storage.js.map?rel=1565798802942
