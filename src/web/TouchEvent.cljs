(ns web.TouchEvent
  "The TouchEvent interface represents an `web.event.UIEvent` which
  sent when the state of contacts with a touch-sensitive surface
  This surface can be a touch screen or trackpad, for example.
  event can describe one or more points of contact with the screen
  includes support for detecting movement, addition and removal
  contact points, and so forth."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The TouchEvent() constructor creates a new `web.TouchEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/TouchEvent`"
  js/TouchEvent)

(defn alt-key
  "Property.

  A `js.Boolean` value indicating whether or not the alt (Alternate)
  is enabled when the touch event is created. If the alt key is
  the attribute's value is true. Otherwise, it is false.

  `var altEnabled = touchEvent.altKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/altKey`"
  [this]
  (-> this (.altKey)))

(defn set-alt-key!
  "Property.

  A `js.Boolean` value indicating whether or not the alt (Alternate)
  is enabled when the touch event is created. If the alt key is
  the attribute's value is true. Otherwise, it is false.

  `var altEnabled = touchEvent.altKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/altKey`"
  [this val]
  (aset this "altKey" val))

(defn changed-touches
  "Property.

  The changedTouches read-only property is a `web.mobile.TouchList`
  touch points (`web.other.Touch` objects) varies depending on
  event type, as follows:

  `var changes = touchEvent.changedTouches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/changedTouches`"
  [this]
  (-> this (.changedTouches)))

(defn ctrl-key
  "Property.

  A `js.Boolean` value indicating whether the control (Control)
  is enabled when the touch event is created. If this key is enabled,
  attribute's value is true. Otherwise, it is false.

  `var ctrlEnabled = touchEvent.ctrlKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/ctrlKey`"
  [this]
  (-> this (.ctrlKey)))

(defn set-ctrl-key!
  "Property.

  A `js.Boolean` value indicating whether the control (Control)
  is enabled when the touch event is created. If this key is enabled,
  attribute's value is true. Otherwise, it is false.

  `var ctrlEnabled = touchEvent.ctrlKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/ctrlKey`"
  [this val]
  (aset this "ctrlKey" val))

(defn meta-key
  "Property.

  A `js.Boolean` value indicating whether or not the Meta key is
  when the touch event is created. If this key is enabled, the
  value is true. Otherwise, it is false.

  `var metaEnabled = touchEvent.metaKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/metaKey`"
  [this]
  (-> this (.metaKey)))

(defn set-meta-key!
  "Property.

  A `js.Boolean` value indicating whether or not the Meta key is
  when the touch event is created. If this key is enabled, the
  value is true. Otherwise, it is false.

  `var metaEnabled = touchEvent.metaKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/metaKey`"
  [this val]
  (aset this "metaKey" val))

(defn shift-key
  "Property.

  A `js.Boolean` value indicating whether or not the shift key
  enabled when the touch event is created. If this key is enabled,
  attribute's value is true. Otherwise, it is false.

  `var shiftEnabled = touchEvent.shiftKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/shiftKey`"
  [this]
  (-> this (.shiftKey)))

(defn set-shift-key!
  "Property.

  A `js.Boolean` value indicating whether or not the shift key
  enabled when the touch event is created. If this key is enabled,
  attribute's value is true. Otherwise, it is false.

  `var shiftEnabled = touchEvent.shiftKey;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/shiftKey`"
  [this val]
  (aset this "shiftKey" val))

(defn target-touches
  "Property.

  The targetTouches read-only property is a `web.mobile.TouchList`
  all the `web.other.Touch` objects for touch points that are still
  contact with the touch surface and whose touchstart event occurred
  the same target `element` as the current target element.

  `var touches = touchEvent.targetTouches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/targetTouches`"
  [this]
  (-> this (.targetTouches)))

(defn touches
  "Property.

  touches is a read-only `web.mobile.TouchList` listing all the
  objects for touch points that are currently in contact with the
  surface, regardless of whether or not they've changed or what
  target element was at touchstart time.

  `var touches = touchEvent.touches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches`"
  [this]
  (-> this (.touches)))

