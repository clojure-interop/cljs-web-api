// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBCursor');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The advance() method of the `idb.IDBCursor` interface sets the
 *   of times a cursor should move its position forward.
 * 
 *   `cursor.advance(count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/advance`
 */
idb.IDBCursor.advance = (function idb$IDBCursor$advance(this$,count){
return this$.advance(count);
});
/**
 * Method.
 * 
 *   The continue() method of the `idb.IDBCursor` interface advances
 *   cursor to the next position along its direction, to the item
 *   key matches the optional key parameter. If no key is specified,
 *   cursor advances to the immediate next position, based on its
 * 
 *   `cursor.continue(key);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continue`
 */
idb.IDBCursor.continue$ = (function idb$IDBCursor$continue(this$,key){
return this$.continue(key);
});
/**
 * Method.
 * 
 *   The continuePrimaryKey() method of the `idb.IDBCursor` interface
 *   the cursor to the to the item whose key matches the key parameter
 *   well as whose primary key matches the primary key parameter.
 * 
 *   `cursor.continuePrimaryKey(key, primaryKey);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/continuePrimaryKey`
 */
idb.IDBCursor.continue_primary_key = (function idb$IDBCursor$continue_primary_key(this$,key,primary_key){
return this$.continuePrimaryKey(key,primary_key);
});
/**
 * Method.
 * 
 *   The delete() method of the `idb.IDBCursor` interface returns
 *   `idb.IDBRequest` object, and, in a separate thread, deletes the
 *   at the cursor's position, without changing the cursor's position.
 *   the record is deleted, the cursor's value is set to null.
 * 
 *   `myIDBCursor.delete();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/delete`
 */
idb.IDBCursor.delete$ = (function idb$IDBCursor$delete(this$){
return this$.delete();
});
/**
 * Method.
 * 
 *   The update() method of the `idb.IDBCursor` interface returns
 *   `idb.IDBRequest` object, and, in a separate thread, updates the
 *   at the current position of the cursor in the object store. If
 *   cursor points to a record that has just been deleted, a new record
 *   created.
 * 
 *   `var anIDBRequest = myIDBCursor.update(value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/update`
 */
idb.IDBCursor.update = (function idb$IDBCursor$update(this$,value){
return this$.update(value);
});
/**
 * Property.
 * 
 *   A string (defined by the IDBCursorDirection enum) indicating
 *   direction in which the cursor is traversing the data. Possible
 *   are:
 * 
 *   `var direction = cursor.direction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/direction`
 */
idb.IDBCursor.direction = (function idb$IDBCursor$direction(this$){
return this$.direction();
});
/**
 * Property.
 * 
 *   A string (defined by the IDBCursorDirection enum) indicating
 *   direction in which the cursor is traversing the data. Possible
 *   are:
 * 
 *   `var direction = cursor.direction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/direction`
 */
idb.IDBCursor.set_direction_BANG_ = (function idb$IDBCursor$set_direction_BANG_(this$,val){
return (this$["direction"] = val);
});
/**
 * Property.
 * 
 *   A value of any type.
 * 
 *   `var key = cursor.key;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/key`
 */
idb.IDBCursor.key = (function idb$IDBCursor$key(this$){
return this$.key();
});
/**
 * Property.
 * 
 *   A value of any type.
 * 
 *   `var key = cursor.key;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/key`
 */
idb.IDBCursor.set_key_BANG_ = (function idb$IDBCursor$set_key_BANG_(this$,val){
return (this$["key"] = val);
});
/**
 * Property.
 * 
 *   A value of any data type.
 * 
 *   `var value = cursor.primaryKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/primaryKey`
 */
idb.IDBCursor.primary_key = (function idb$IDBCursor$primary_key(this$){
return this$.primaryKey();
});
/**
 * Property.
 * 
 *   A value of any data type.
 * 
 *   `var value = cursor.primaryKey;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/primaryKey`
 */
idb.IDBCursor.set_primary_key_BANG_ = (function idb$IDBCursor$set_primary_key_BANG_(this$,val){
return (this$["primaryKey"] = val);
});
/**
 * Property.
 * 
 *   The request read-only property of the `idb.IDBCursor` interface
 *   the request if the cursor.
 * 
 *   `var request = cursor.request;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/request`
 */
idb.IDBCursor.request = (function idb$IDBCursor$request(this$){
return this$.request();
});
/**
 * Property.
 * 
 *   The request read-only property of the `idb.IDBCursor` interface
 *   the request if the cursor.
 * 
 *   `var request = cursor.request;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/request`
 */
idb.IDBCursor.set_request_BANG_ = (function idb$IDBCursor$set_request_BANG_(this$,val){
return (this$["request"] = val);
});
/**
 * Property.
 * 
 *   The `idb.IDBObjectStore` or `idb.IDBIndex` that the cursor is
 *   over.
 * 
 *   `var source = cursor.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/source`
 */
idb.IDBCursor.source = (function idb$IDBCursor$source(this$){
return this$.source();
});
/**
 * Property.
 * 
 *   The `idb.IDBObjectStore` or `idb.IDBIndex` that the cursor is
 *   over.
 * 
 *   `var source = cursor.source;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/source`
 */
idb.IDBCursor.set_source_BANG_ = (function idb$IDBCursor$set_source_BANG_(this$,val){
return (this$["source"] = val);
});

//# sourceMappingURL=IDBCursor.js.map?rel=1565798806190
