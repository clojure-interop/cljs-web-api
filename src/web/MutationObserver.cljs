(ns web.MutationObserver
  "The `web.MutationObserver` interface provides the ability to
  for changes being made to the DOM tree. It is designed as a replacement
  the older Mutation Events feature which was part of the DOM3
  specification."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOM MutationObserver() constructor — part of the `web.MutationObserver` interface — creates and returns a new observer which invokes a specified callback when DOM events occur.

  callback
  A function which will be called on each DOM change that qualifies given the targeted node or subtree and options. The callback function takes as input two parameters: an array of `web.MutationRecord` objects describing each change that occurred and the MutationObserver which invoked the callback. See the example below for more details.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver`"
  js/MutationObserver)

(defn observe
  "Method.

  The `web.MutationObserver` method observe() configures the MutationObserver
  to begin receiving notifications of changes to the DOM that match
  given options.

  `mutationObserver.observe(target, options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe`"
  [this target options]
  (-> this (.observe target options)))

(defn take-records
  "Method.

  The `web.MutationObserver` method takeRecords() returns a list
  all matching DOM changes that have been detected but not yet
  by the observer's callback function, leaving the mutation queue

  `mutationRecords = mutationObserver.takeRecords()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/takeRecords`"
  [this ]
  (-> this (.takeRecords)))

(defn disconnect
  "Method.

  The `web.MutationObserver` method disconnect() tells the observer
  stop watching for mutations.

  `mutationObserver.disconnect()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect`"
  [this ]
  (-> this (.disconnect)))

