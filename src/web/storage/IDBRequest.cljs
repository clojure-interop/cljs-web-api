(ns web.storage.IDBRequest
  "The request object does not initially contain any information
  the result of the operation, but once information becomes available,
  event is fired on the request, and the information becomes available
  the properties of the IDBRequest instance."
  (:refer-clojure :exclude []))

(defn error
  "Property.

  A `web.deprecated.DOMError` containing the relevant error. In
  48+/Firefox 58+ this property returns a `web.dom.DOMException`
  DOMError has been removed from the DOM standard. The following
  codes are returned under certain conditions:

  `var myError = request.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error`"
  [this]
  (-> this (.error)))

(defn set-error!
  "Property.

  A `web.deprecated.DOMError` containing the relevant error. In
  48+/Firefox 58+ this property returns a `web.dom.DOMException`
  DOMError has been removed from the DOM standard. The following
  codes are returned under certain conditions:

  `var myError = request.error;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error`"
  [this val]
  (aset this "error" val))

(defn onerror
  "Property.

  The following example requests a given record title, onsuccess
  the associated record from the `web.idb.IDBObjectStore` (made
  as objectStoreTitleRequest.result), updates one property of the
  and then puts the updated record back into the object store.
  included at the bottom is an onerror function that reports what
  error was if the request fails. For a full working example, see
  To-do Notifications app (view example live.)

  `request.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The following example requests a given record title, onsuccess
  the associated record from the `web.idb.IDBObjectStore` (made
  as objectStoreTitleRequest.result), updates one property of the
  and then puts the updated record back into the object store.
  included at the bottom is an onerror function that reports what
  error was if the request fails. For a full working example, see
  To-do Notifications app (view example live.)

  `request.onerror = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onsuccess
  "Property.

  The following example requests a given record title, onsuccess
  the associated record from the `web.idb.IDBObjectStore` (made
  as objectStoreTitleRequest.result), updates one property of the
  and then puts the updated record back into the object store.
  a full working example, see our To-do Notifications app (view
  live.)

  `request.onsuccess = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess`"
  [this]
  (-> this (.onsuccess)))

(defn set-onsuccess!
  "Property.

  The following example requests a given record title, onsuccess
  the associated record from the `web.idb.IDBObjectStore` (made
  as objectStoreTitleRequest.result), updates one property of the
  and then puts the updated record back into the object store.
  a full working example, see our To-do Notifications app (view
  live.)

  `request.onsuccess = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/onsuccess`"
  [this val]
  (aset this "onsuccess" val))

(defn ready-state
  "Property.

  The `IDBRequestReadyState` of the request, which takes one of
  following two values:

  `var currentReadyState = request.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/readyState`"
  [this]
  (-> this (.readyState)))

(defn set-ready-state!
  "Property.

  The `IDBRequestReadyState` of the request, which takes one of
  following two values:

  `var currentReadyState = request.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/readyState`"
  [this val]
  (aset this "readyState" val))

(defn result
  "Property.

  any

  `var myResult = request.result;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result`"
  [this]
  (-> this (.result)))

(defn set-result!
  "Property.

  any

  `var myResult = request.result;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result`"
  [this val]
  (aset this "result" val))

(defn source
  "Property.

  An object representing the source of the request, such as an
  `web.idb.IDBObjectStore` or `web.storage.IDBCursor`.

  `var IDBIndex = request.source;
  var IDBCursor = request.source;
  var IDBObjectStore = request.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/source`"
  [this]
  (-> this (.source)))

(defn set-source!
  "Property.

  An object representing the source of the request, such as an
  `web.idb.IDBObjectStore` or `web.storage.IDBCursor`.

  `var IDBIndex = request.source;
  var IDBCursor = request.source;
  var IDBObjectStore = request.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/source`"
  [this val]
  (aset this "source" val))

(defn transaction
  "Property.

  An `web.storage.IDBTransaction`.

  `var myTransaction = request.transaction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/transaction`"
  [this]
  (-> this (.transaction)))

(defn set-transaction!
  "Property.

  An `web.storage.IDBTransaction`.

  `var myTransaction = request.transaction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/transaction`"
  [this val]
  (aset this "transaction" val))

