(ns web.LockManager
  "The LockManager interface of the the Web Locks API provides methods
  requesting a new `web.Lock` object and querying for an existing
  object. To get an instance of LockManager, call `web.navigator.locks`."
  (:refer-clojure :exclude []))

(defn query
  "Method.

  The query() method of the `web.LockManager` interface returns
  `web.Promise` which resolves with an object containing information
  held and pending locks.

  `var promise<LockManagerSnapshot> = LockManager.query()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/query`"
  [this ]
  (-> this (.query)))

(defn request
  "Method.

  The request() method of the `web.LockManager` interface requests
  `web.Lock` object with parameters specifying its name and characteristics.
  requested Lock is passed to a callback, while the function itself
  a `web.Promise` that resolves with `web.undefined`.

  `LockManager.request(var promise = name[, {options}], callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`"
  [this & args]
  (apply (-> this .-request) (concat [this] args)))

