(ns web.orientation.ScreenOrientation
  "The ScreenOrientation interface of the the Screen Orientation
  provides information about the current orientation of the document."
  (:refer-clojure :exclude [type]))

(defn lock
  "Method.

  The lock() property of the `web.orientation.ScreenOrientation`
  locks the orientation of the containing document to its default

  `ScreenOrientation.lock(orientation)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock`"
  [this orientation]
  (-> this (.lock orientation)))

(defn type
  "Property.

  The type read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation type, one of \\\"portrait-primary\\\",
  \\\"landscape-primary\\\", or \\\"landscape-secondary\\\".

  `type = ScreenOrientation.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation type, one of \\\"portrait-primary\\\",
  \\\"landscape-primary\\\", or \\\"landscape-secondary\\\".

  `type = ScreenOrientation.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`"
  [this val]
  (aset this "type" val))

(defn onchange
  "Property.

  The onchange property of the `web.orientation.ScreenOrientation`
  an event handler fired whenever is the `EventHandler` called
  the screen changes orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.orientation.ScreenOrientation`
  an event handler fired whenever is the `EventHandler` called
  the screen changes orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this val]
  (aset this "onchange" val))

(defn angle
  "Property.

  The angle read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation angle.

  `angle = ScreenOrientation.angle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`"
  [this]
  (-> this (.angle)))

(defn set-angle!
  "Property.

  The angle read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation angle.

  `angle = ScreenOrientation.angle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`"
  [this val]
  (aset this "angle" val))

(defn unlock
  "Property.

  The unlock() property of the `web.orientation.ScreenOrientation`
  unlocks the orientation of the containing document from its default

  `ScreenOrientation.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/unlock`"
  [this]
  (-> this (.unlock)))

(defn set-unlock!
  "Property.

  The unlock() property of the `web.orientation.ScreenOrientation`
  unlocks the orientation of the containing document from its default

  `ScreenOrientation.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/unlock`"
  [this val]
  (aset this "unlock" val))

