(ns web.dom.MutationObserver
  "The `web.dom.MutationObserver` interface provides the ability
  watch for changes being made to the DOM tree. It is designed
  a replacement for the older Mutation Events feature which was
  of the DOM3 Events specification."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOM MutationObserver() constructor — part of the `web.dom.MutationObserver` interface — creates and returns a new observer which invokes a specified callback when DOM events occur.

  callback
  A function which will be called on each DOM change that qualifies given the targeted node or subtree and options. The callback function takes as input two parameters: an array of `web.dom.MutationRecord` objects describing each change that occurred and the MutationObserver which invoked the callback. See the example below for more details.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver`"
  js/MutationObserver)

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

