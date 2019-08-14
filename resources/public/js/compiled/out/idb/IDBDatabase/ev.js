// Compiled by ClojureScript 1.9.946 {}
goog.provide('idb.IDBDatabase.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   The versionchange event is fired when a database structure change
 *   event or IDBFactory.deleteDatabase) was requested.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/versionchange_event`
 */
idb.IDBDatabase.ev.versionchange = "versionchange";
/**
 * Event.
 * 
 *   The abort event is fired on IDBDatabase when a transaction is
 *   and bubbles up to the connection object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/abort_event`
 */
idb.IDBDatabase.ev.abort = "abort";
/**
 * Event.
 * 
 *   The close event is fired on IDBDatabase when the database connection
 *   unexpectedly closed. This could happen, for example, if the underlying
 *   is removed or if the user clears the database in the browser's
 *   preferences.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/close_event`
 */
idb.IDBDatabase.ev.close = "close";
/**
 * Event.
 * 
 *   The error event is fired on IDBDatabase when a request returns
 *   error and the event bubbles up to the connection object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/error_event`
 */
idb.IDBDatabase.ev.error = "error";

//# sourceMappingURL=ev.js.map?rel=1565798854944
