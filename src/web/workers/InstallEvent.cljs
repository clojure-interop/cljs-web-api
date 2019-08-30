(ns web.workers.InstallEvent
  "The parameter passed into the `oninstall` handler, the InstallEvent
  represents an install action that is dispatched on the `web.workers.ServiceWorkerGlobalScope`
  a `web.workers.ServiceWorker`. As a child of `web.workers.ExtendableEvent`,
  ensures that functional events such as `web.workers.FetchEvent`
  not dispatched during installation."
  (:refer-clojure :exclude []))

(defn active-worker
  "Property.

  [Read Only]

  The activeWorker read-only property of the `web.workers.InstallEvent`
  returns the `web.workers.ServiceWorker` that is currently actively
  the page.

  `var myActiveWorker = event.activeWorker`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/activeWorker`"
  [this]
  (-> this (.-activeWorker)))

