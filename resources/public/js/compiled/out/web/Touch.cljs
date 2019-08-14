(ns web.Touch
  "The Touch interface represents a single contact point on a touch-sensitive
  The contact point is commonly a finger or stylus and the device
  be a touchscreen or trackpad."
  (:refer-clojure :exclude [force]))

(def constructor
  "Constructor.

  The Touch() constructor creates a new `web.Touch` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/Touch`"
  js/Touch)

(defn client-x
  "Property.

  The Touch.clientX read-only property returns the X coordinate
  the touch point relative to the viewport, not including any scroll

  `touchItem.clientX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientX`"
  [this]
  (-> this (.clientX)))

(defn client-y
  "Property.

  The Touch.clientY read-only property returns the Y coordinate
  the touch point relative to the browser's viewport, not including
  scroll offset.

  `touchItem.clientY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientY`"
  [this]
  (-> this (.clientY)))

(defn force
  "Property.

  The Touch.force read-only property returns the amount of pressure
  user is applying to the touch surface for a `web.Touch` point.

  `touchItem.force;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/force`"
  [this]
  (-> this (.force)))

(defn identifier
  "Property.

  The Touch.identifier returns a value uniquely identifying this
  of contact with the touch surface. This value remains consistent
  every event involving this finger's (or stylus's) movement on
  surface until it is lifted off the surface.

  `touchItem.identifier;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/identifier`"
  [this]
  (-> this (.identifier)))

(defn page-x
  "Property.

  The Touch.pageX read-only property returns the X coordinate of
  touch point relative to the viewport, including any scroll offset.

  `touchItem.pageX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageX`"
  [this]
  (-> this (.pageX)))

(defn page-y
  "Property.

  The Touch.pageY read-only property returns the Y coordinate of
  touch point relative to the viewport, including any scroll offset.

  `touchItem.pageY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/pageY`"
  [this]
  (-> this (.pageY)))

(defn radius-x
  "Property.

  Returns the X radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `web.Touch.screenX`.

  `var xRadius = touchItem.radiusX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusX`"
  [this]
  (-> this (.radiusX)))

(defn set-radius-x!
  "Property.

  Returns the X radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `web.Touch.screenX`.

  `var xRadius = touchItem.radiusX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusX`"
  [this val]
  (aset this "radiusX" val))

(defn radius-y
  "Property.

  Returns the Y radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `web.Touch.screenX`.

  `var yRadius = touchItem.radiusY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusY`"
  [this]
  (-> this (.radiusY)))

(defn set-radius-y!
  "Property.

  Returns the Y radius of the ellipse that most closely circumscribes
  area of contact with the touch surface. The value is in CSS pixels
  the same scale as `web.Touch.screenX`.

  `var yRadius = touchItem.radiusY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/radiusY`"
  [this val]
  (aset this "radiusY" val))

(defn rotation-angle
  "Property.

  Returns the rotation angle, in degrees, of the contact area ellipse
  by `web.Touch.radiusX` and `web.Touch.radiusY`. The value may
  between 0 and 90. Together, these three values describe an ellipse
  approximates the size and shape of the area of contact between
  user and the screen. This may be a relatively large ellipse representing
  contact between a fingertip and the screen or a small area representing
  tip of a stylus, for example.

  `var angle = touchItem.rotationAngle;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle`"
  [this]
  (-> this (.rotationAngle)))

(defn set-rotation-angle!
  "Property.

  Returns the rotation angle, in degrees, of the contact area ellipse
  by `web.Touch.radiusX` and `web.Touch.radiusY`. The value may
  between 0 and 90. Together, these three values describe an ellipse
  approximates the size and shape of the area of contact between
  user and the screen. This may be a relatively large ellipse representing
  contact between a fingertip and the screen or a small area representing
  tip of a stylus, for example.

  `var angle = touchItem.rotationAngle;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle`"
  [this val]
  (aset this "rotationAngle" val))

(defn screen-x
  "Property.

  Returns the X coordinate of the touch point relative to the screen,
  including any scroll offset.

  `var x = touchItem.screenX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenX`"
  [this]
  (-> this (.screenX)))

(defn set-screen-x!
  "Property.

  Returns the X coordinate of the touch point relative to the screen,
  including any scroll offset.

  `var x = touchItem.screenX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenX`"
  [this val]
  (aset this "screenX" val))

(defn screen-y
  "Property.

  Returns the Y coordinate of the touch point relative to the screen,
  including any scroll offset.

  `var y = touchItem.screenY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenY`"
  [this]
  (-> this (.screenY)))

(defn set-screen-y!
  "Property.

  Returns the Y coordinate of the touch point relative to the screen,
  including any scroll offset.

  `var y = touchItem.screenY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Touch/screenY`"
  [this val]
  (aset this "screenY" val))

(defn target
  "Property.

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
  (-> this (.target)))

(defn set-target!
  "Property.

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
  [this val]
  (aset this "target" val))

