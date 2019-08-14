(ns web.ScreenOrientation
  "The ScreenOrientation interface of the the Screen Orientation
  provides information about the current orientation of the document."
  (:refer-clojure :exclude [type]))

(defn lock
  "Method.

  The lock() property of the `web.ScreenOrientation` interface
  the orientation of the containing document to its default orientation.

  `ScreenOrientation.lock(orientation)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock`"
  [this orientation]
  (-> this (.lock orientation)))

(defn unlock
  "Method.

  The unlock() property of the `web.ScreenOrientation` interface
  the orientation of the containing document from its default orientation.

  `ScreenOrientation.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/unlock`"
  [this ]
  (-> this (.unlock)))

(defn angle
  "Property.

  The angle read-only property of the `web.ScreenOrientation` interface
  the document's current orientation angle.

  `angle = ScreenOrientation.angle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`"
  [this]
  (-> this (.angle)))

(defn set-angle!
  "Property.

  The angle read-only property of the `web.ScreenOrientation` interface
  the document's current orientation angle.

  `angle = ScreenOrientation.angle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`"
  [this val]
  (aset this "angle" val))

(defn onchange
  "Property.

  The onchange property of the `web.ScreenOrientation` is an event
  fired whenever is the `web.EventHandler` called when the screen
  orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.ScreenOrientation` is an event
  fired whenever is the `web.EventHandler` called when the screen
  orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this val]
  (aset this "onchange" val))

(defn type
  "Property.

  The type read-only property of the `web.ScreenOrientation` interface
  the document's current orientation type, one of \\\"portrait-primary\\\",
  \\\"landscape-primary\\\", or \\\"landscape-secondary\\\".

  `type = ScreenOrientation.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.ScreenOrientation` interface
  the document's current orientation type, one of \\\"portrait-primary\\\",
  \\\"landscape-primary\\\", or \\\"landscape-secondary\\\".

  `type = ScreenOrientation.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`"
  [this val]
  (aset this "type" val))

