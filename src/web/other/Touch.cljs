(ns web.other.Touch
  "The Touch interface represents a single contact point on a touch-sensitive
  The contact point is commonly a finger or stylus and the device
  be a touchscreen or trackpad."
  (:refer-clojure :exclude [force]))

(defn identifier
  "Property.

  [Read Only]
  [Experimental]

  The Touch.identifier returns a value uniquely identifying this
  of contact with the touch surface. This value remains consistent
  every event involving this finger's (or stylus's) movement on
  surface until it is lifted off the surface.

  `touchItem.identifier;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier`"
  [this]
  (-> this (.-identifier)))

(defn screen-x
  "Property.

  Returns the X coordinate of the touch point relative to the left
  of the screen."
  [this]
  (-> this (.-screenX)))

(defn set-screen-x!
  "Property.

  Returns the X coordinate of the touch point relative to the left
  of the screen."
  [this val]
  (aset this "screenX" val))

(defn screen-y
  "Property.

  Returns the Y coordinate of the touch point relative to the top
  of the screen."
  [this]
  (-> this (.-screenY)))

(defn set-screen-y!
  "Property.

  Returns the Y coordinate of the touch point relative to the top
  of the screen."
  [this val]
  (aset this "screenY" val))

(defn client-x
  "Property.

  Returns the X coordinate of the touch point relative to the left
  of the browser viewport, not including any scroll offset."
  [this]
  (-> this (.-clientX)))

(defn set-client-x!
  "Property.

  Returns the X coordinate of the touch point relative to the left
  of the browser viewport, not including any scroll offset."
  [this val]
  (aset this "clientX" val))

(defn client-y
  "Property.

  Returns the Y coordinate of the touch point relative to the top
  of the browser viewport, not including any scroll offset."
  [this]
  (-> this (.-clientY)))

(defn set-client-y!
  "Property.

  Returns the Y coordinate of the touch point relative to the top
  of the browser viewport, not including any scroll offset."
  [this val]
  (aset this "clientY" val))

(defn page-x
  "Property.

  [Read Only]

  The Touch.pageX read-only property returns the X coordinate of
  touch point relative to the viewport, including any scroll offset.

  `touchItem.pageX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageX`"
  [this]
  (-> this (.-pageX)))

(defn page-y
  "Property.

  [Read Only]

  The Touch.pageY read-only property returns the Y coordinate of
  touch point relative to the viewport, including any scroll offset.

  `touchItem.pageY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageY`"
  [this]
  (-> this (.-pageY)))

(defn target
  "Property.

  [Read Only]

  Returns the `web.Element` (`web.EventTarget`) on which the touch
  started when it was first placed on the surface, even if the
  point has since moved outside the interactive area of that element
  even been removed from the document. Note that if the target
  is removed from the document, events will still be targeted at
  and hence won't necessarily bubble up to the window or document
  If there is any risk of an element being removed while it is
  touched, the best practice is to attach the touch listeners directly
  the target.

  `var el = touchPoint.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/target`"
  [this]
  (-> this (.-target)))

(defn radius-x
  "Property.

  [Read Only]

  Returns the X radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `Touch.screenX`.

  `var xRadius = touchItem.radiusX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusX`"
  [this]
  (-> this (.-radiusX)))

(defn radius-y
  "Property.

  [Read Only]

  Returns the Y radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `Touch.screenX`.

  `var yRadius = touchItem.radiusY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusY`"
  [this]
  (-> this (.-radiusY)))

(defn rotation-angle
  "Property.

  [Read Only]

  Returns the rotation angle, in degrees, of the contact area ellipse
  by `Touch.radiusX` and `Touch.radiusY`. The value may be between
  and 90. Together, these three values describe an ellipse that
  the size and shape of the area of contact between the user and
  screen. This may be a relatively large ellipse representing the
  between a fingertip and the screen or a small area representing
  tip of a stylus, for example.

  `var angle = touchItem.rotationAngle;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle`"
  [this]
  (-> this (.-rotationAngle)))

(defn force
  "Property.

  [Read Only]
  [Experimental]

  The Touch.force read-only property returns the amount of pressure
  user is applying to the touch surface for a `web.other.Touch`

  `touchItem.force;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/force`"
  [this]
  (-> this (.-force)))

