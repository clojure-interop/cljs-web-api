(ns web.PermissionStatus
  "The PermissionStatus interface of the Permissions API provides
  state of an object and an event handler for monitoring changes
  said state."
  (:refer-clojure :exclude []))

(defn onchange
  "Property.

  The onchange event handler of the `web.PermissionStatus` interface
  called whenever the `web.PermissionStatus.state` property changes.

  `PermissionStatus.onchange = function() { ... }
  PermissionStatus.addEventListener('change', function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The onchange event handler of the `web.PermissionStatus` interface
  called whenever the `web.PermissionStatus.state` property changes.

  `PermissionStatus.onchange = function() { ... }
  PermissionStatus.addEventListener('change', function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus/onchange`"
  [this val]
  (aset this "onchange" val))

(defn state
  "Property.

  The state read-only property of the `web.PermissionStatus` interface
  the state of a requested permission. This property returns one
  'granted', 'denied', or 'prompt'.

  `var permission = PermissionStatus.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus/state`"
  [this]
  (-> this (.state)))

(defn set-state!
  "Property.

  The state read-only property of the `web.PermissionStatus` interface
  the state of a requested permission. This property returns one
  'granted', 'denied', or 'prompt'.

  `var permission = PermissionStatus.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PermissionStatus/state`"
  [this val]
  (aset this "state" val))

