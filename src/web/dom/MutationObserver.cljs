(ns web.dom.MutationObserver
  "The `web.dom.MutationObserver` interface provides the ability
  watch for changes being made to the DOM tree. It is designed
  a replacement for the older Mutation Events feature which was
  of the DOM3 Events specification."
  (:refer-clojure :exclude []))

(defn disconnect
  "Method.

  The `web.dom.MutationObserver` method disconnect() tells the
  to stop watching for mutations.

  `mutationObserver.disconnect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

(defn observe
  "Method.

  The `web.dom.MutationObserver` method observe() configures the
  callback to begin receiving notifications of changes to the DOM
  match the given options.

  `mutationObserver.observe(target, options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe`"
  [this target options]
  (-> this (.observe target options)))

(defn take-records
  "Method.

  The `web.dom.MutationObserver` method takeRecords() returns a
  of all matching DOM changes that have been detected but not yet
  by the observer's callback function, leaving the mutation queue

  `mutationRecords = mutationObserver.takeRecords()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

