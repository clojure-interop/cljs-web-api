(ns web.WheelEvent
  "The WheelEvent interface represents events that occur due to
  user moving a mouse wheel or similar input device."
  (:refer-clojure :exclude []))

(defn delta-x
  "Property.

  [Read Only]

  The WheelEvent.deltaX read-only property is a double representing
  horizontal scroll amount in the `WheelEvent.deltaMode` unit.

  `var dX = event.deltaX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaX`"
  [this]
  (-> this (.-deltaX)))

(defn delta-y
  "Property.

  [Read Only]

  The WheelEvent.deltaY read-only property is a double representing
  vertical scroll amount in the `WheelEvent.deltaMode` unit.

  `var dY = event.deltaY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaY`"
  [this]
  (-> this (.-deltaY)))

(defn delta-z
  "Property.

  [Read Only]

  The WheelEvent.deltaZ read-only property is a double representing
  scroll amount along the z-axis, in the `WheelEvent.deltaMode`

  `var dZ = event.deltaZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaZ`"
  [this]
  (-> this (.-deltaZ)))

(defn delta-mode
  "Property.

  [Read Only]

  The WheelEvent.deltaMode read-only property returns an unsigned
  representing the unit of the delta values scroll amount. Permitted
  are:

  `var unit = event.deltaMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode`"
  [this]
  (-> this (.-deltaMode)))

