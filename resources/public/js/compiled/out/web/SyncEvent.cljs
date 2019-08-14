(ns web.SyncEvent
  "The SyncEvent interface represents a sync action that is dispatched
  the `web.ServiceWorkerGlobalScope` of a ServiceWorker."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SyncEvent() constructor creates a new `web.SyncEvent` object.

  type
  The type of the Event.
  init Optional
  An options object containing any custom settings that you want to apply to the event object. Options are as follows:

  tag: A developer-defined unique identifier for this SyncEvent.
  lastChance: A `web.Boolean` indicating that the user agent will not make further synchronization attempts after the current attempt.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/SyncEvent`"
  js/SyncEvent)

(defn last-chance
  "Property.

  The SyncEvent.lastChance read-only property of the `web.SyncEvent`
  returns true if the user agent will not make further synchronization
  after the current attempt. This is the value passed in the lastChance
  of the `web.SyncEvent()` constructor.

  `var lastChance = SyncEvent.lastChance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/lastChance`"
  [this]
  (-> this (.lastChance)))

(defn set-last-chance!
  "Property.

  The SyncEvent.lastChance read-only property of the `web.SyncEvent`
  returns true if the user agent will not make further synchronization
  after the current attempt. This is the value passed in the lastChance
  of the `web.SyncEvent()` constructor.

  `var lastChance = SyncEvent.lastChance`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/lastChance`"
  [this val]
  (aset this "lastChance" val))

(defn registration
  "Property.

  The registration read-only property of the `web.SyncEvent` interface
  a reference to a `web.SyncRegistration` object.

  `var syncReg = SyncEvent.registration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/registration`"
  [this]
  (-> this (.registration)))

(defn set-registration!
  "Property.

  The registration read-only property of the `web.SyncEvent` interface
  a reference to a `web.SyncRegistration` object.

  `var syncReg = SyncEvent.registration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/registration`"
  [this val]
  (aset this "registration" val))

(defn tag
  "Property.

  The SyncEvent.tag read-only property of the `web.SyncEvent` interface
  the developer-defined identifier for this SyncEvent. This is
  value passed in the tag parameter of the `web.SyncEvent()` constructor.

  `var tag = SyncEvent.tag`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/tag`"
  [this]
  (-> this (.tag)))

(defn set-tag!
  "Property.

  The SyncEvent.tag read-only property of the `web.SyncEvent` interface
  the developer-defined identifier for this SyncEvent. This is
  value passed in the tag parameter of the `web.SyncEvent()` constructor.

  `var tag = SyncEvent.tag`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncEvent/tag`"
  [this val]
  (aset this "tag" val))

