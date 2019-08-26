(ns web.service-workers.NotificationEvent
  "The parameter passed into the `onnotificationclick` handler,
  NotificationEvent interface represents a notification click event
  is dispatched on the `web.workers.ServiceWorkerGlobalScope` of
  `web.workers.ServiceWorker`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The NotificationEvent() constructor creates a new `web.service-workers.NotificationEvent` object.

  type
  TBD
  NotificationEventInit Optional
  A dictionary object containing a `web.other.Notification` object to be used as the notification the event is dispatched on. In later drafts of the specification, this parameter is not optional.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent/NotificationEvent`"
  js/NotificationEvent)

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

(defn notification
  "Property.

  The notification read-only property of the `web.service-workers.NotificationEvent`
  returns the instance of the `web.other.Notification` that was
  to fire the event. The `web.other.Notification` provides read-only
  to many properties that were set at the instantiation time of
  Notification such as tag and data attributes that allow you to
  information for defered use in the notificationclick event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent/notification`"
  [this]
  (-> this (.-notification)))

(defn set-notification!
  "Property.

  The notification read-only property of the `web.service-workers.NotificationEvent`
  returns the instance of the `web.other.Notification` that was
  to fire the event. The `web.other.Notification` provides read-only
  to many properties that were set at the instantiation time of
  Notification such as tag and data attributes that allow you to
  information for defered use in the notificationclick event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent/notification`"
  [this val]
  (aset this "notification" val))

(defn action
  "Property.

  Returns the string ID of the notification button the user clicked.
  value returns an empty string if the user clicked the notification
  other than an action button, or the notification does not have
  button. The notification id is set during the creation of the
  via the actions array attribute and can't be modified unless
  notification is replaced.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent/action`"
  [this]
  (-> this (.-action)))

(defn set-action!
  "Property.

  Returns the string ID of the notification button the user clicked.
  value returns an empty string if the user clicked the notification
  other than an action button, or the notification does not have
  button. The notification id is set during the creation of the
  via the actions array attribute and can't be modified unless
  notification is replaced.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NotificationEvent/action`"
  [this val]
  (aset this "action" val))

