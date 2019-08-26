(ns web.storage.IDBOpenDBRequest
  "Also inherits methods from its parents `web.storage.IDBRequest`
  `web.EventTarget`."
  (:refer-clojure :exclude []))

(defn onblocked
  "Property.

  The onblocked event handler of the `web.storage.IDBOpenDBRequest`
  is the event handler for the blocked event. This event is triggered
  the upgradeneeded should be triggered because of a version change
  the database is still in use (that is, not closed) somewhere,
  after the versionchange event was sent.

  `IDBOpenDBRequest.onblocked = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onblocked`"
  [this]
  (-> this (.-onblocked)))

(defn set-onblocked!
  "Property.

  The onblocked event handler of the `web.storage.IDBOpenDBRequest`
  is the event handler for the blocked event. This event is triggered
  the upgradeneeded should be triggered because of a version change
  the database is still in use (that is, not closed) somewhere,
  after the versionchange event was sent.

  `IDBOpenDBRequest.onblocked = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onblocked`"
  [this val]
  (aset this "onblocked" val))

(defn onupgradeneeded
  "Property.

  In the following example you can see the onupgradeneeded handler
  used to update the database structure if a database with a higher
  number is loaded. For a full working example, see our To-do Notifications
  (view example live.)

  `IDBOpenDBRequest.onupgradeneeded = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded`"
  [this]
  (-> this (.-onupgradeneeded)))

(defn set-onupgradeneeded!
  "Property.

  In the following example you can see the onupgradeneeded handler
  used to update the database structure if a database with a higher
  number is loaded. For a full working example, see our To-do Notifications
  (view example live.)

  `IDBOpenDBRequest.onupgradeneeded = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded`"
  [this val]
  (aset this "onupgradeneeded" val))

