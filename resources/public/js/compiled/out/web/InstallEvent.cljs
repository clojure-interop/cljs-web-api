(ns web.InstallEvent
  "The parameter passed into the `web.oninstall` handler, the InstallEvent
  represents an install action that is dispatched on the `web.ServiceWorkerGlobalScope`
  a `web.ServiceWorker`. As a child of `web.ExtendableEvent`, it
  that functional events such as `web.FetchEvent` are not dispatched
  installation."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The InstallEvent() constructor creates a new `web.InstallEvent` object.

  type
  The type of the event.
  init Optional
  An options object containing any custom settings that you want to apply to the event object. Available options are as follows:

  activeWorker: The `web.ServiceWorker` that is currently actively controlling the page.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/InstallEvent`"
  js/InstallEvent)

(defn active-worker
  "Property.

  The activeWorker read-only property of the `web.InstallEvent`
  returns the `web.ServiceWorker` that is currently actively controlling
  page.

  `var myActiveWorker = event.activeWorker`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/activeWorker`"
  [this]
  (-> this (.activeWorker)))

(defn set-active-worker!
  "Property.

  The activeWorker read-only property of the `web.InstallEvent`
  returns the `web.ServiceWorker` that is currently actively controlling
  page.

  `var myActiveWorker = event.activeWorker`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent/activeWorker`"
  [this val]
  (aset this "activeWorker" val))

