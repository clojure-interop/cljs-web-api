(ns web.other.Notification
  "The Notification interface of the Notifications API is used to
  and display desktop notifications to the user."
  (:refer-clojure :exclude []))

(defn request-permission
  "Method.

  The requestPermission() method of the `web.other.Notification`
  requests permission from the user for the current origin to display

  `The latest spec has updated this method to a promise-based syntax that works like this:



  Notification.requestPermission().then(function(permission) { ... });

  Previously, the syntax was based on a simple callback; this version is now deprecated:



  Notification.requestPermission(callback);

  Safari Version 12.0.3 still uses callback to get the permission.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission`"
  [this & args]
  (-> this .-requestPermission (.apply this (clj->js args))))

(defn close
  "Method.

  The close() method of the `web.other.Notification` interface
  used to close a previously displayed notification.

  `Notification.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/close`"
  [this ]
  (-> this (.close)))

(defn permission
  "Property.

  [Read Only]

  The permission read-only property of the `web.other.Notification`
  indicates the current permission granted by the user for the
  origin to display web notifications.

  `var permission = Notification.permission;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission`"
  [this]
  (-> this (.-permission)))

(defn actions
  "Property.

  [Read Only]

  The actions read-only property of the `web.other.Notification`
  returns the list of `web.other.NotificationAction` objects set
  the actions option when creating the notification using the `Notification()`

  `var actions[] = Notification.actions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/actions`"
  [this]
  (-> this (.-actions)))

(defn badge
  "Property.

  [Read Only]

  The badge property of the `web.other.Notification` interface
  the URL of the image used to represent the notification when
  is not enough space to display the notification itself.

  `var url = Notification.badge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/badge`"
  [this]
  (-> this (.-badge)))

(defn body
  "Property.

  [Read Only]

  The body read-only property of the `web.other.Notification` interface
  the body string of the notification, as specified in the body
  of the `Notification()` constructor.

  `var body = Notification.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/body`"
  [this]
  (-> this (.-body)))

(defn data
  "Property.

  [Read Only]

  The data read-only property of the `web.other.Notification` interface
  a structured clone of the notification's data, as specified in
  data option of the `Notification()` constructor.

  `var data = Notification.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/data`"
  [this]
  (-> this (.-data)))

(defn dir
  "Property.

  [Read Only]

  The dir read-only property of the `web.other.Notification` interface
  the text direction of the notification, as specified in the dir
  of the `Notification()` constructor.

  `var direction = Notification.dir;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/dir`"
  [this]
  (-> this (.-dir)))

(defn lang
  "Property.

  [Read Only]

  The lang read-only property of the `web.other.Notification` interface
  the text direction of the notification, as specified in the lang
  of the `Notification()` constructor.

  `var language = Notification.lang;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/lang`"
  [this]
  (-> this (.-lang)))

(defn tag
  "Property.

  [Read Only]

  The tag read-only property of the `web.other.Notification` interface
  an identifying tag for the notification, as specified in the
  option of the `Notification()` constructor.

  `var tag = Notification.tag;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/tag`"
  [this]
  (-> this (.-tag)))

(defn icon
  "Property.

  [Read Only]

  The icon read-only property of the `web.other.Notification` interface
  the URL of an icon to be displayed as part of the notification,
  specified in the icon option of the `Notification()` constructor.

  `var icon = Notification.icon;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon`"
  [this]
  (-> this (.-icon)))

(defn image
  "Property.

  [Read Only]

  The image read-only property of the `web.other.Notification`
  contains the URL of an image to be displayed as part of the notification

  `var image = Notification.image;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/image`"
  [this]
  (-> this (.-image)))

(defn renotify
  "Property.

  [Read Only]

  The renotify read-only property of the `web.other.Notification`
  specifies whether the user should be notified after a new notification
  an old one, as specified in the renotify option of the `Notification()`

  `var renotify = Notification.renotify;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify`"
  [this]
  (-> this (.-renotify)))

(defn require-interaction
  "Property.

  [Read Only]

  The requireInteraction read-only property of the `web.other.Notification`
  returns a `js.Boolean` indicating that a notification should
  active until the user clicks or dismisses it, rather than closing

  `function spawnNotification(theTitle,theBody,shouldRequireInteraction) {
  var options = {
  body: theBody,
  requireInteraction: shouldRequireInteraction
  }
  var n = new Notification(theTitle,options);
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/requireInteraction`"
  [this]
  (-> this (.-requireInteraction)))

(defn silent
  "Property.

  [Read Only]

  The silent read-only property of the `web.other.Notification`
  specifies whether the notification should be silent, i.e., no
  or vibrations should be issued, regardless of the device settings.
  is specified in the renotify option of the `Notification()` constructor.

  `var silent = Notification.silent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/silent`"
  [this]
  (-> this (.-silent)))

(defn timestamp
  "Property.

  [Read Only]

  The timestamp read-only property of the `web.other.Notification`
  returns a DOMTimeStamp, as specified in the timestamp option
  the `Notification()` constructor.

  `var timestamp = Notification.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp`"
  [this]
  (-> this (.-timestamp)))

(defn title
  "Property.

  [Read Only]

  The title read-only property of the `web.other.Notification`
  indicates the title of the notification, as specified in the
  parameter of the `Notification()` constructor.

  `var title = Notification.title;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/title`"
  [this]
  (-> this (.-title)))

(defn vibrate
  "Property.

  [Read Only]

  The vibrate read-only property of the `web.other.Notification`
  specifies a a vibration pattern for the device's vibration hardware
  emit when the notification fires. This is specified in the vibrate
  of the `Notification()` constructor.

  `var vibrate = Notification.vibrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/vibrate`"
  [this]
  (-> this (.-vibrate)))

(defn onclick
  "Property.

  The onclick property of the `web.other.Notification` interface
  an event listener to receive click events. These events occur
  the user clicks on a displayed `web.other.Notification`.

  `Notification.onclick = function(event) { ... };

  The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`"
  [this]
  (-> this (.-onclick)))

(defn set-onclick!
  "Property.

  The onclick property of the `web.other.Notification` interface
  an event listener to receive click events. These events occur
  the user clicks on a displayed `web.other.Notification`.

  `Notification.onclick = function(event) { ... };

  The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`"
  [this val]
  (aset this "onclick" val))

(defn onclose
  "Property.

  The onclose property of the `web.other.Notification` interface
  an event listener to receive close events. These events occur
  a `web.other.Notification` is closed.

  `Notification.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

  The onclose property of the `web.other.Notification` interface
  an event listener to receive close events. These events occur
  a `web.other.Notification` is closed.

  `Notification.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The onerror property of the `web.other.Notification` interface
  an event listener to receive error events. These events occur
  something goes wrong with a `web.other.Notification` (in many
  an error preventing the notification from being displayed.)

  `Notification.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.other.Notification` interface
  an event listener to receive error events. These events occur
  something goes wrong with a `web.other.Notification` (in many
  an error preventing the notification from being displayed.)

  `Notification.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onshow
  "Property.

  The onshow property of the `web.other.Notification` interface
  an event listener to receive show events. These events occur
  a `web.other.Notification` is displayed.

  `Notification.onshow = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`"
  [this]
  (-> this (.-onshow)))

(defn set-onshow!
  "Property.

  The onshow property of the `web.other.Notification` interface
  an event listener to receive show events. These events occur
  a `web.other.Notification` is displayed.

  `Notification.onshow = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`"
  [this val]
  (aset this "onshow" val))

