(ns web.orientation.ScreenOrientation
  "The ScreenOrientation interface of the the Screen Orientation
  provides information about the current orientation of the document."
  (:refer-clojure :exclude [type]))

(defn lock
  "Method.

  [Experimental]

  The lock() property of the `web.orientation.ScreenOrientation`
  locks the orientation of the containing document to its default

  `ScreenOrientation.lock(orientation)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock`"
  [this orientation]
  (-> this (.lock orientation)))

(defn unlock
  "Method.

  [Experimental]

  The unlock() property of the `web.orientation.ScreenOrientation`
  unlocks the orientation of the containing document from its default

  `ScreenOrientation.unlock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/unlock`"
  [this ]
  (-> this (.unlock)))

(defn type
  "Property.

  [Read Only]
  [Experimental]

  The type read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation type, one of \\\"portrait-primary\\\",
  \\\"landscape-primary\\\", or \\\"landscape-secondary\\\".

  `type = ScreenOrientation.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/type`"
  [this]
  (-> this (.-type)))

(defn angle
  "Property.

  [Read Only]
  [Experimental]

  The angle read-only property of the `web.orientation.ScreenOrientation`
  returns the document's current orientation angle.

  `angle = ScreenOrientation.angle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/angle`"
  [this]
  (-> this (.-angle)))

(defn onchange
  "Property.

  [Experimental]

  The onchange property of the `web.orientation.ScreenOrientation`
  an event handler fired whenever is the `EventHandler` called
  the screen changes orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  [Experimental]

  The onchange property of the `web.orientation.ScreenOrientation`
  an event handler fired whenever is the `EventHandler` called
  the screen changes orientation.

  `ScreenOrientation.addEventListener('change', function(e) { ... })
  ScreenOrientation.onchange = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/onchange`"
  [this val]
  (aset this "onchange" val))

