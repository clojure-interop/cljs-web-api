(ns web.Lock
  "The Lock interface of the the Web Locks API provides the name
  mode of a previously requested lock, which is received in the
  to `web.LockManager.request()`."
  (:refer-clojure :exclude [name]))

(defn mode
  "Property.

  The mode read-only property of the `web.Lock` interface returns
  access mode passed to `web.LockManager.request()` when the lock
  requested. The mode is either \\\"exclusive\\\" (the default) or

  `var mode = Lock.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The mode read-only property of the `web.Lock` interface returns
  access mode passed to `web.LockManager.request()` when the lock
  requested. The mode is either \\\"exclusive\\\" (the default) or

  `var mode = Lock.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/mode`"
  [this val]
  (aset this "mode" val))

(defn name
  "Property.

  The name read-only property of the `web.Lock` interface returns
  name passed to `web.LockManager.request` selected when the lock
  requested.

  `var name = Lock.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.Lock` interface returns
  name passed to `web.LockManager.request` selected when the lock
  requested.

  `var name = Lock.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Lock/name`"
  [this val]
  (aset this "name" val))

