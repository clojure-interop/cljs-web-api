(ns web.MouseEvent
  "The MouseEvent interface represents events that occur due to
  user interacting with a pointing device (such as a mouse). Common
  using this interface include click, dblclick, mouseup, mousedown."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MouseEvent() constructor creates a new `web.MouseEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent`"
  js/MouseEvent)

(defn get-modifier-state
  "Method.

  The MouseEvent.getModifierState() method returns the current
  of the specified modifier key: true if the modifier is active
  the modifier key is pressed or locked), otherwise, false.

  `var active =​ event.getModifierState(keyArg);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/getModifierState`"
  [this key-arg]
  (-> this (.getModifierState key-arg)))

(defn init-mouse-event
  "Method.

  The MouseEvent.initMouseEvent() method initializes the value
  a mouse event once it's been created (normally using the `Document.createEvent()`

  `event.initMouseEvent(type, canBubble, cancelable, view,
  detail, screenX, screenY, clientX, clientY,
  ctrlKey, altKey, shiftKey, metaKey,
  button, relatedTarget);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent`"
  [this & args]
  (-> this .-initMouseEvent (.apply this (clj->js args))))

(defn alt-key
  "Property.

  The MouseEvent.altKey read-only property is a `js.Boolean` that
  whether the alt key was pressed or not when a given mouse event

  `var altKeyPressed = instanceOfMouseEvent.altKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey`"
  [this]
  (-> this (.-altKey)))

(defn button
  "Property.

  The MouseEvent.button read-only property indicates which button
  pressed on the mouse to trigger the event.

  `var buttonPressed = instanceOfMouseEvent.button`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button`"
  [this]
  (-> this (.-button)))

(defn buttons
  "Property.

  The MouseEvent.buttons read-only property indicates which buttons
  pressed on the mouse (or other input device) when a mouse event
  triggered.

  `var buttonsPressed = instanceOfMouseEvent.buttons`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons`"
  [this]
  (-> this (.-buttons)))

(defn client-x
  "Property.

  The clientX read-only property of the `web.MouseEvent` interface
  the horizontal coordinate within the application's client area
  which the event occurred (as opposed to the coordinate within
  page).

  `var x = instanceOfMouseEvent.clientX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX`"
  [this]
  (-> this (.-clientX)))

(defn client-y
  "Property.

  The clientY read-only property of the `web.MouseEvent` interface
  the vertical coordinate within the application's client area
  which the event occurred (as opposed to the coordinate within
  page).

  `var y = instanceOfMouseEvent.clientY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY`"
  [this]
  (-> this (.-clientY)))

(defn ctrl-key
  "Property.

  The MouseEvent.ctrlKey read-only property is a `js.Boolean` that
  whether the ctrl key was pressed or not when a given mouse event

  `var ctrlKeyPressed = instanceOfMouseEvent.ctrlKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/ctrlKey`"
  [this]
  (-> this (.-ctrlKey)))

(defn meta-key
  "Property.

  The MouseEvent.metaKey read-only property is a `js.Boolean` that
  whether the meta key was pressed or not when a given mouse event

  `var metaKeyPressed = instanceOfMouseEvent.metaKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey`"
  [this]
  (-> this (.-metaKey)))

(defn movement-x
  "Property.

  The movementX read-only property of the `web.MouseEvent` interface
  the difference in the X coordinate of the mouse pointer between
  given event and the previous mousemove event. In other words,
  value of the property is computed like this: currentEvent.movementX
  currentEvent.screenX - previousEvent.screenX.

  `var xShift = instanceOfMouseEvent.movementX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX`"
  [this]
  (-> this (.-movementX)))

(defn movement-y
  "Property.

  The movementY read-only property of the `web.MouseEvent` interface
  the difference in the Y coordinate of the mouse pointer between
  given event and the previous mousemove event. In other words,
  value of the property is computed like this: currentEvent.movementY
  currentEvent.screenY - previousEvent.screenY.

  `var yShift = instanceOfMouseEvent.movementY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementY`"
  [this]
  (-> this (.-movementY)))

(defn offset-x
  "Property.

  The offsetX read-only property of the `web.MouseEvent` interface
  the offset in the X coordinate of the mouse pointer between that
  and the padding edge of the target node.

  `var xOffset = instanceOfMouseEvent.offsetX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX`"
  [this]
  (-> this (.-offsetX)))

(defn offset-y
  "Property.

  The offsetY read-only property of the `web.MouseEvent` interface
  the offset in the Y coordinate of the mouse pointer between that
  and the padding edge of the target node.

  `var yOffset = instanceOfMouseEvent.offsetY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY`"
  [this]
  (-> this (.-offsetY)))

(defn page-x
  "Property.

  The pageX read-only property of the `web.MouseEvent` interface
  the X (horizontal) coordinate (in pixels) at which the mouse
  clicked, relative to the left edge of the entire document.

  `var pageX = MouseEvent.pageX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX`"
  [this]
  (-> this (.-pageX)))

(defn page-y
  "Property.

  The pageY read-only property of the `web.MouseEvent` interface
  the Y (vertical) coordinate in pixels of the event relative to
  whole document. This property takes into account any vertical
  of the page.

  `var pos = event.pageY;

  Originally, this property was defined as a long integer. The CSSOM View Module redefined it as a double float. See the Browser compatibility section for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY`"
  [this]
  (-> this (.-pageY)))

(defn region
  "Property.

  The MouseEvent.region read-only property returns the id of the
  hit region affected by the event. If no hit region is affected,
  is returned.

  `var hitRegion = instanceOfMouseEvent.region`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/region`"
  [this]
  (-> this (.-region)))

(defn related-target
  "Property.

  The MouseEvent.relatedTarget read-only property is the secondary
  for the mouse event, if there is one. That is:

  `var target = instanceOfMouseEvent.relatedTarget`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget`"
  [this]
  (-> this (.-relatedTarget)))

(defn screen-x
  "Property.

  The screenX read-only property of the `web.MouseEvent` interface
  the horizontal coordinate (offset) of the mouse pointer in global
  coordinates.

  `var x = instanceOfMouseEvent.screenX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX`"
  [this]
  (-> this (.-screenX)))

(defn screen-y
  "Property.

  The screenY read-only property of the `web.MouseEvent` interface
  the vertical coordinate (offset) of the mouse pointer in global
  coordinates.

  `var y = instanceOfMouseEvent.screenY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenY`"
  [this]
  (-> this (.-screenY)))

(defn shift-key
  "Property.

  The MouseEvent.shiftKey read-only property is a `js.Boolean`
  indicates whether the shift key was pressed or not when a given
  event occurs.

  `var shiftKeyPressed = instanceOfMouseEvent.shiftKey`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey`"
  [this]
  (-> this (.-shiftKey)))

(defn which
  "Property.

  The MouseEvent.which read-only property indicates which button
  pressed on the mouse to trigger the event. The standard alternatives
  this property are `MouseEvent.button` and `MouseEvent.buttons`.

  `var buttonPressed = instanceOfMouseEvent.which`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which`"
  [this]
  (-> this (.-which)))

(defn moz-pressure
  "Property.

  The amount of pressure applied to a touch or tablet device when
  the event; this value ranges between 0.0 (minimum pressure) and
  (maximum pressure). Instead of using this deprecated (and non-standard)
  you should instead use PointerEvent and look at its pressure"
  [this]
  (-> this (.-mozPressure)))

(defn set-moz-pressure!
  "Property.

  The amount of pressure applied to a touch or tablet device when
  the event; this value ranges between 0.0 (minimum pressure) and
  (maximum pressure). Instead of using this deprecated (and non-standard)
  you should instead use PointerEvent and look at its pressure"
  [this val]
  (aset this "mozPressure" val))

(defn moz-input-source
  "Property.

  The MouseEvent.mozInputSource read-only property on `web.MouseEvent`
  information indicating the type of device that generated the
  This lets you, for example, determine whether a mouse event was
  by an actual mouse or by a touch event (which might affect the
  of accuracy with which you interpret the coordinates associated
  the event).

  `var source = instanceOfMouseEvent.mozInputSource;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/mozInputSource`"
  [this]
  (-> this (.-mozInputSource)))

(defn webkit-force
  "Property.

  MouseEvent.webkitForce is a proprietary, WebKit-specific numeric
  whose value represents the amount of pressure that is being applied
  the touchpad or touchscreen.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/webkitForce`"
  [this]
  (-> this (.-webkitForce)))

(defn set-webkit-force!
  "Property.

  MouseEvent.webkitForce is a proprietary, WebKit-specific numeric
  whose value represents the amount of pressure that is being applied
  the touchpad or touchscreen.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/webkitForce`"
  [this val]
  (aset this "webkitForce" val))

(defn x
  "Property.

  The MouseEvent.x property is an alias for the `MouseEvent.clientX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/x`"
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  The MouseEvent.x property is an alias for the `MouseEvent.clientX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The MouseEvent.y property is an alias for the `MouseEvent.clientY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/y`"
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  The MouseEvent.y property is an alias for the `MouseEvent.clientY`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/y`"
  [this val]
  (aset this "y" val))

(defn webkit-force-at-force-mouse-down
  "Property.

  MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN is a proprietary,
  static numeric property whose value is the minimum force necessary
  a force click.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`"
  [this]
  (-> this (.-WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)))

(defn set-webkit-force-at-force-mouse-down!
  "Property.

  MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN is a proprietary,
  static numeric property whose value is the minimum force necessary
  a force click.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`"
  [this val]
  (aset this "WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN" val))

(defn webkit-force-at-mouse-down
  "Property.

  MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN is a proprietary, WebKit-specific,
  numeric property whose value is the minimum force necessary for
  normal click.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN`"
  [this]
  (-> this (.-WEBKIT_FORCE_AT_MOUSE_DOWN)))

(defn set-webkit-force-at-mouse-down!
  "Property.

  MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN is a proprietary, WebKit-specific,
  numeric property whose value is the minimum force necessary for
  normal click.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN`"
  [this val]
  (aset this "WEBKIT_FORCE_AT_MOUSE_DOWN" val))

