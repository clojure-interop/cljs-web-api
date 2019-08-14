(ns web.Notification
  "The Notification interface of the Notifications API is used to
  and display desktop notifications to the user."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Notification() constructor creates a new `web.Notification` object instance, which represents a user notification.

  title
  Defines a title for the notification, which is shown at the top of the notification window.
  options Optional
  An options object containing any custom settings that you want to apply to the notification. The possible options are:

  dir: The direction in which to display the notification. It defaults to auto, which just adopts the browser's language setting behavior, but you can override that behaviour by setting values of ltr and rtl (although most browsers seem to ignore these settings.)
  lang: The notification's language, as specified using a `dom.DOMString` representing a BCP 47 language tag. See the Sitepoint ISO 2 letter language codes page for a simple reference.
  badge: A `web.USVString` containing the URL of the image used to represent the notification when there isn't enough space to display the notification itself.
  body: A `dom.DOMString` representing the body text of the notification, which is displayed below the title.
  tag: A `dom.DOMString` representing an identifying tag for the notification.
  icon: A `web.USVString` containing the URL of an icon to be displayed in the notification.
  image: a `web.USVString` containing the URL of an image to be displayed in the notification.
  data: Arbitrary data that you want associated with the notification. This can be of any data type.
  vibrate: A vibration pattern for the device's vibration hardware to emit with the notification.
  renotify: A `web.Boolean` specifying whether the user should be notified after a new notification replaces an old one. The default is false, which means they won't be notified.
  requireInteraction: Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. The default value is false.
  actions: An array of `web.NotificationAction`s representing the actions available to the user when the notification is presented. These are options the user can choose among in order to act on the action within the context of the notification itself. The action's name is sent to the service worker notification handler to let it know the action was selected by the user.


  The following options are listed in the most up-to-date specification, but aren 't supported in any browsers yet. It's advisable to keep checking back regularly to see if the status of these has updated, and let us know if you find any out-of-date information.


  silent: A `web.Boolean` specifying whether the notification is silent  (no sounds or vibrations  issued), regardless of the device settings. The default is false, which means it won't be silent.
  noscreen: A `web.Boolean` specifying whether the notification firing enable the device's screen or not. The default is false, which means it enables the screen.
  sticky: A `web.Boolean` specifying whether the notification is \\\"sticky\\\", i.e. not easily clearable by the user. The default is false, which means it won't be sticky.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification`"
  js/Notification)

(defn close
  "Method.

  The close() method of the `web.Notification` interface is used
  close a previously displayed notification.

  `Notification.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/close`"
  [this ]
  (-> this (.close)))

(defn request-permission
  "Method.

  The requestPermission() method of the `web.Notification` interface
  permission from the user for the current origin to display notifications.

  `The latest spec has updated this method to a promise-based syntax that works like this:



  Notification.requestPermission().then(function(permission) { ... });

  Previously, the syntax was based on a simple callback; this version is now deprecated:



  Notification.requestPermission(callback);

  Safari Version 12.0.3 still uses callback to get the permission.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission`"
  [this & args]
  (apply (-> this .-requestPermission) (concat [this] args)))

(defn actions
  "Property.

  The actions read-only property of the `web.Notification` interface
  the list of `web.NotificationAction` objects set using the actions
  when creating the notification using the `web.Notification()`

  `var actions[] = Notification.actions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/actions`"
  [this]
  (-> this (.actions)))

(defn set-actions!
  "Property.

  The actions read-only property of the `web.Notification` interface
  the list of `web.NotificationAction` objects set using the actions
  when creating the notification using the `web.Notification()`

  `var actions[] = Notification.actions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/actions`"
  [this val]
  (aset this "actions" val))

(defn badge
  "Property.

  The badge property of the `web.Notification` interface returns
  URL of the image used to represent the notification when there
  not enough space to display the notification itself.

  `var url = Notification.badge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/badge`"
  [this]
  (-> this (.badge)))

(defn set-badge!
  "Property.

  The badge property of the `web.Notification` interface returns
  URL of the image used to represent the notification when there
  not enough space to display the notification itself.

  `var url = Notification.badge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/badge`"
  [this val]
  (aset this "badge" val))

(defn body
  "Property.

  The body read-only property of the `web.Notification` interface
  the body string of the notification, as specified in the body
  of the `web.Notification()` constructor.

  `var body = Notification.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/body`"
  [this]
  (-> this (.body)))

(defn set-body!
  "Property.

  The body read-only property of the `web.Notification` interface
  the body string of the notification, as specified in the body
  of the `web.Notification()` constructor.

  `var body = Notification.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/body`"
  [this val]
  (aset this "body" val))

(defn data
  "Property.

  The data read-only property of the `web.Notification` interface
  a structured clone of the notification's data, as specified in
  data option of the `web.Notification()` constructor.

  `var data = Notification.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.Notification` interface
  a structured clone of the notification's data, as specified in
  data option of the `web.Notification()` constructor.

  `var data = Notification.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/data`"
  [this val]
  (aset this "data" val))

(defn dir
  "Property.

  The dir read-only property of the `web.Notification` interface
  the text direction of the notification, as specified in the dir
  of the `web.Notification()` constructor.

  `var direction = Notification.dir;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/dir`"
  [this]
  (-> this (.dir)))

(defn set-dir!
  "Property.

  The dir read-only property of the `web.Notification` interface
  the text direction of the notification, as specified in the dir
  of the `web.Notification()` constructor.

  `var direction = Notification.dir;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/dir`"
  [this val]
  (aset this "dir" val))

(defn icon
  "Property.

  The icon read-only property of the `web.Notification` interface
  the URL of an icon to be displayed as part of the notification,
  specified in the icon option of the `web.Notification()` constructor.

  `var icon = Notification.icon;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon`"
  [this]
  (-> this (.icon)))

(defn set-icon!
  "Property.

  The icon read-only property of the `web.Notification` interface
  the URL of an icon to be displayed as part of the notification,
  specified in the icon option of the `web.Notification()` constructor.

  `var icon = Notification.icon;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/icon`"
  [this val]
  (aset this "icon" val))

(defn image
  "Property.

  The image read-only property of the `web.Notification` interface
  the URL of an image to be displayed as part of the notification

  `var image = Notification.image;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/image`"
  [this]
  (-> this (.image)))

(defn set-image!
  "Property.

  The image read-only property of the `web.Notification` interface
  the URL of an image to be displayed as part of the notification

  `var image = Notification.image;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/image`"
  [this val]
  (aset this "image" val))

(defn lang
  "Property.

  The lang read-only property of the `web.Notification` interface
  the text direction of the notification, as specified in the lang
  of the `web.Notification()` constructor.

  `var language = Notification.lang;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/lang`"
  [this]
  (-> this (.lang)))

(defn set-lang!
  "Property.

  The lang read-only property of the `web.Notification` interface
  the text direction of the notification, as specified in the lang
  of the `web.Notification()` constructor.

  `var language = Notification.lang;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/lang`"
  [this val]
  (aset this "lang" val))

(defn onclick
  "Property.

  The onclick property of the `web.Notification` interface specifies
  event listener to receive click events. These events occur when
  user clicks on a displayed `web.Notification`.

  `Notification.onclick = function(event) { ... };

  The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`"
  [this]
  (-> this (.onclick)))

(defn set-onclick!
  "Property.

  The onclick property of the `web.Notification` interface specifies
  event listener to receive click events. These events occur when
  user clicks on a displayed `web.Notification`.

  `Notification.onclick = function(event) { ... };

  The default behavior is to move the focus to the viewport of the notification's related browsing context. If you don't want that behaviour, call preventDefault() on the event object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclick`"
  [this val]
  (aset this "onclick" val))

(defn onclose
  "Property.

  The onclose property of the `web.Notification` interface specifies
  event listener to receive close events. These events occur when
  `web.Notification` is closed.

  `Notification.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`"
  [this]
  (-> this (.onclose)))

(defn set-onclose!
  "Property.

  The onclose property of the `web.Notification` interface specifies
  event listener to receive close events. These events occur when
  `web.Notification` is closed.

  `Notification.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The onerror property of the `web.Notification` interface specifies
  event listener to receive error events. These events occur when
  goes wrong with a `web.Notification` (in many cases an error
  the notification from being displayed.)

  `Notification.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.Notification` interface specifies
  event listener to receive error events. These events occur when
  goes wrong with a `web.Notification` (in many cases an error
  the notification from being displayed.)

  `Notification.onerror = EventListener;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onshow
  "Property.

  The onshow property of the `web.Notification` interface specifies
  event listener to receive show events. These events occur when
  `web.Notification` is displayed.

  `Notification.onshow = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`"
  [this]
  (-> this (.onshow)))

(defn set-onshow!
  "Property.

  The onshow property of the `web.Notification` interface specifies
  event listener to receive show events. These events occur when
  `web.Notification` is displayed.

  `Notification.onshow = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/onshow`"
  [this val]
  (aset this "onshow" val))

(defn permission
  "Property.

  The permission read-only property of the `web.Notification` interface
  the current permission granted by the user for the current origin
  display web notifications.

  `var permission = Notification.permission;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission`"
  [this]
  (-> this (.permission)))

(defn set-permission!
  "Property.

  The permission read-only property of the `web.Notification` interface
  the current permission granted by the user for the current origin
  display web notifications.

  `var permission = Notification.permission;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission`"
  [this val]
  (aset this "permission" val))

(defn renotify
  "Property.

  The renotify read-only property of the `web.Notification` interface
  whether the user should be notified after a new notification
  an old one, as specified in the renotify option of the `web.Notification()`

  `var renotify = Notification.renotify;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify`"
  [this]
  (-> this (.renotify)))

(defn set-renotify!
  "Property.

  The renotify read-only property of the `web.Notification` interface
  whether the user should be notified after a new notification
  an old one, as specified in the renotify option of the `web.Notification()`

  `var renotify = Notification.renotify;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/renotify`"
  [this val]
  (aset this "renotify" val))

(defn require-interaction
  "Property.

  The requireInteraction read-only property of the `web.Notification`
  returns a `web.Boolean` indicating that a notification should
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
  (-> this (.requireInteraction)))

(defn set-require-interaction!
  "Property.

  The requireInteraction read-only property of the `web.Notification`
  returns a `web.Boolean` indicating that a notification should
  active until the user clicks or dismisses it, rather than closing

  `function spawnNotification(theTitle,theBody,shouldRequireInteraction) {
  var options = {
  body: theBody,
  requireInteraction: shouldRequireInteraction
  }
  var n = new Notification(theTitle,options);
  }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/requireInteraction`"
  [this val]
  (aset this "requireInteraction" val))

(defn silent
  "Property.

  The silent read-only property of the `web.Notification` interface
  whether the notification should be silent, i.e., no sounds or
  should be issued, regardless of the device settings. This is
  in the renotify option of the `web.Notification()` constructor.

  `var silent = Notification.silent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/silent`"
  [this]
  (-> this (.silent)))

(defn set-silent!
  "Property.

  The silent read-only property of the `web.Notification` interface
  whether the notification should be silent, i.e., no sounds or
  should be issued, regardless of the device settings. This is
  in the renotify option of the `web.Notification()` constructor.

  `var silent = Notification.silent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/silent`"
  [this val]
  (aset this "silent" val))

(defn tag
  "Property.

  The tag read-only property of the `web.Notification` interface
  an identifying tag for the notification, as specified in the
  option of the `web.Notification()` constructor.

  `var tag = Notification.tag;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/tag`"
  [this]
  (-> this (.tag)))

(defn set-tag!
  "Property.

  The tag read-only property of the `web.Notification` interface
  an identifying tag for the notification, as specified in the
  option of the `web.Notification()` constructor.

  `var tag = Notification.tag;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Notification/tag`"
  [this val]
  (aset this "tag" val))

(defn timestamp
  "Property.

  The timestamp read-only property of the `web.Notification` interface
  a DOMTimeStamp, as specified in the timestamp option of the `web.Notification()`

  `var timestamp = Notification.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp`"
  [this]
  (-> this (.timestamp)))

(defn set-timestamp!
  "Property.

  The timestamp read-only property of the `web.Notification` interface
  a DOMTimeStamp, as specified in the timestamp option of the `web.Notification()`

  `var timestamp = Notification.timestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp`"
  [this val]
  (aset this "timestamp" val))

(defn title
  "Property.

  The title read-only property of the `web.Notification` interface
  the title of the notification, as specified in the title parameter
  the `web.Notification()` constructor.

  `var title = Notification.title;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/title`"
  [this]
  (-> this (.title)))

(defn set-title!
  "Property.

  The title read-only property of the `web.Notification` interface
  the title of the notification, as specified in the title parameter
  the `web.Notification()` constructor.

  `var title = Notification.title;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/title`"
  [this val]
  (aset this "title" val))

(defn vibrate
  "Property.

  The vibrate read-only property of the `web.Notification` interface
  a a vibration pattern for the device's vibration hardware to
  when the notification fires. This is specified in the vibrate
  of the `web.Notification()` constructor.

  `var vibrate = Notification.vibrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/vibrate`"
  [this]
  (-> this (.vibrate)))

(defn set-vibrate!
  "Property.

  The vibrate read-only property of the `web.Notification` interface
  a a vibration pattern for the device's vibration hardware to
  when the notification fires. This is specified in the vibrate
  of the `web.Notification()` constructor.

  `var vibrate = Notification.vibrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/notification/vibrate`"
  [this val]
  (aset this "vibrate" val))

