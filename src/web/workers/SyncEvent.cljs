(ns web.workers.SyncEvent
  "The SyncEvent interface represents a sync action that is dispatched
  the `web.workers.ServiceWorkerGlobalScope` of a ServiceWorker."
  (:refer-clojure :exclude []))

(defn tag
  "Property.

  [Read Only]
  [Experimental]

  The SyncEvent.tag read-only property of the `web.workers.SyncEvent`
  returns the developer-defined identifier for this SyncEvent.
  is the value passed in the tag parameter of the `SyncEvent()`

  `var tag = SyncEvent.tag`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/tag`"
  [this]
  (-> this (.-tag)))

(defn last-chance
  "Property.

  [Read Only]
  [Experimental]

  The SyncEvent.lastChance read-only property of the `web.workers.SyncEvent`
  returns true if the user agent will not make further synchronization
  after the current attempt. This is the value passed in the lastChance
  of the `SyncEvent()` constructor.

  `var lastChance = SyncEvent.lastChance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/lastChance`"
  [this]
  (-> this (.-lastChance)))

(defn registration
  "Property.

  [Read Only]
  [Non Standard]

  The registration read-only property of the `web.workers.SyncEvent`
  returns a reference to a `SyncRegistration` object.

  `var syncReg = SyncEvent.registration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/registration`"
  [this]
  (-> this (.-registration)))

