(ns web.locks.LockManager
  "The LockManager interface of the the Web Locks API provides methods
  requesting a new `web.locks.Lock` object and querying for an
  Lock object. To get an instance of LockManager, call `navigator.locks`."
  (:refer-clojure :exclude []))

(defn request
  "Method.

  The request() method of the `web.locks.LockManager` interface
  a `web.locks.Lock` object with parameters specifying its name
  characteristics. The requested Lock is passed to a callback,
  the function itself returns a `js.Promise` that resolves with

  `LockManager.request(var promise = name[, {options}], callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request`"
  [this & args]
  (apply (-> this .-request) (concat [this] args)))

(defn query
  "Method.

  The query() method of the `web.locks.LockManager` interface returns
  `js.Promise` which resolves with an object containing information
  held and pending locks.

  `var promise<LockManagerSnapshot> = LockManager.query()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/LockManager/query`"
  [this ]
  (-> this (.query)))

