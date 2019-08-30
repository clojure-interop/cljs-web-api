(ns web.workers.ExtendableEvent
  "The ExtendableEvent interface extends the lifetime of the install
  activate events dispatched on the global scope as part of the
  worker lifecycle. This ensures that any functional events (like
  are not dispatched until it upgrades database schemas and deletes
  outdated cache entries."
  (:refer-clojure :exclude []))

(defn wait-until
  "Method.

  The extendableEvent.waitUntil() method tells the event dispatcher
  work is ongoing. It can also be used to detect whether that work
  successful. In service workers, waitUntil() tells the browser
  work is ongoing until the promise settles, and it shouldn't terminate
  service worker if it wants that work to complete.

  `event.waitUntil(promise)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil`"
  [this promise]
  (-> this (.waitUntil promise)))

