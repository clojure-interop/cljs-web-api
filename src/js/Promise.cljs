(ns js.Promise
  "The Promise object represents the eventual completion (or failure)
  an asynchronous operation, and its resulting value."
  (:refer-clojure :exclude [catch finally resolve]))

(defn all
  "Method.

  The Promise.all() method returns a single `js.Promise` that resolves
  all of the promises passed as an iterable have resolved or when
  iterable contains no promises. It rejects with the reason of
  first promise that rejects.

  `Promise.all(iterable);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all`"
  [this iterable]
  (-> this (.all iterable)))

(defn race
  "Method.

  The Promise.race() method returns a promise that fulfills or
  as soon as one of the promises in an iterable fulfills or rejects,
  the value or reason from that promise.

  `Promise.race(iterable);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race`"
  [this iterable]
  (-> this (.race iterable)))

(defn promise
  "Method.

  Promise.resolve(value)"
  [this & args]
  (-> this .-Promise (.apply this (clj->js args))))

(defn all-settled
  "Method.

  The Promise.allSettled() method returns a promise that resolves
  all of the given promises have either resolved or rejected, with
  array of objects that each describe the outcome of each promise.

  `promise.allSettled(iterable);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled`"
  [this iterable]
  (-> this (.allSettled iterable)))

(defn catch
  "Method.

  The catch() method returns a `js.Promise` and deals with rejected
  only. It behaves the same as calling `Promise.prototype.then(undefined,
  (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined,
  This means that you have to provide an onRejected function even
  you want to fall back to an undefined result value - for example
  => {}).

  `p.catch(onRejected);

  p.catch(function(reason) {
  // rejection
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch`"
  [this & args]
  (-> this .-catch (.apply this (clj->js args))))

(defn finally
  "Method.

  The finally() method returns a `js.Promise`. When the promise
  settled, i.e either fulfilled or rejected, the specified callback
  is executed. This provides a way for code to be run whether the
  was fulfilled successfully or rejected once the Promise has been
  with.

  `p.finally(onFinally);

  p.finally(function() {
  // settled (fulfilled or rejected)
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally`"
  [this & args]
  (-> this .-finally (.apply this (clj->js args))))

(defn then
  "Method.

  The then() method returns a `js.Promise`. It takes up to two
  callback functions for the success and failure cases of the Promise.

  `p.then(onFulfilled[, onRejected]);

  p.then(value => {
  // fulfillment
  }, reason => {
  // rejection
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then`"
  [this & args]
  (-> this .-then (.apply this (clj->js args))))

(defn reject
  "Method.

  The Promise.reject() method returns a Promise object that is
  with a given reason.

  `Promise.reject(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject`"
  [this reason]
  (-> this (.reject reason)))

(defn resolve
  "Method.

  The Promise.resolve() method returns a `js.Promise` object that
  resolved with a given value. If the value is a promise, that
  is returned; if the value is a thenable (i.e. has a `\\\"then\\\"
  the returned promise will \\\"follow\\\" that thenable, adopting
  eventual state; otherwise the returned promise will be fulfilled
  the value. This function flattens nested layers of promise-like
  (e.g. a promise that resolves to a promise that resolves to something)
  a single layer.

  `Promise.resolve(value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve`"
  [this value]
  (-> this (.resolve value)))

(defn length
  "Property.

  Length property whose value is always 1 (number of constructor"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  Length property whose value is always 1 (number of constructor"
  [this val]
  (aset this "length" val))

(defn prototype
  "Property.

  The Promise.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Promise.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype`"
  [this val]
  (aset this "prototype" val))

