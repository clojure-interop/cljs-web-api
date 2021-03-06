(ns web.PointerEvent
  "The PointerEvent interface represents the state of a DOM event
  by a pointer such as the geometry of the contact point, the device
  that generated the event, the amount of pressure that was applied
  the contact surface, etc."
  (:refer-clojure :exclude []))

(defn get-coalesced-events
  "Method.

  [Experimental]

  The getCoalescedEvents() method of the `web.PointerEvent` interface
  a sequence of all PointerEvent instances that were coalesced
  the dispatched pointermove event.

  `var pointerEvents[] = PointerEvent.getCoalescedEvents()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/getCoalescedEvents`"
  [this ]
  (-> this (.getCoalescedEvents)))

(defn pointer-id
  "Property.

  [Read Only]

  The pointerId read-only property of the `web.PointerEvent` interface
  an identifier assigned to a given pointer event. The identifier
  unique, being different from the identifiers of all other active
  events. Since the value may be randomly generated, it is not
  to convey any particular meaning.

  `var id = pointerEvent.pointerId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId`"
  [this]
  (-> this (.-pointerId)))

(defn width
  "Property.

  [Read Only]

  The width read-only property of the `web.PointerEvent` interface
  the width of the pointer's contact geometry along the x-axis,
  in CSS pixels. Depending on the source of the pointer device
  as a finger), for a given pointer, each event may produce a different

  `var contactWidth = pointerEvent.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width`"
  [this]
  (-> this (.-width)))

(defn height
  "Property.

  [Read Only]

  The height read-only property of the `web.PointerEvent` interface
  the height of the pointer's contact geometry, along the y-axis
  CSS pixels). Depending on the source of the pointer device (for
  a finger), for a given pointer, each event may produce a different

  `var contactHeight = pointerEvent.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height`"
  [this]
  (-> this (.-height)))

(defn pressure
  "Property.

  [Read Only]

  The pressure read-only property of the `web.PointerEvent` interface
  the normalized pressure of the pointer input.

  `var pressure = pointerEvent.pressure;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure`"
  [this]
  (-> this (.-pressure)))

(defn tangential-pressure
  "Property.

  [Read Only]

  The tangentialPressure read-only property of the `web.PointerEvent`
  represents the normalized tangential pressure of the pointer
  (also known as barrel pressure or cylinder stress).

  `var tanPressure = pointerEvent.tangentialPressure;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tangentialPressure`"
  [this]
  (-> this (.-tangentialPressure)))

(defn tilt-x
  "Property.

  [Read Only]

  The tiltX read-only property of the `web.PointerEvent` interface
  the angle (in degrees) between the Y-Z plane of the pointer and
  screen. This property is typically only useful for a pen/stylus
  type.

  `var tiltX = pointerEvent.tiltX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX`"
  [this]
  (-> this (.-tiltX)))

(defn tilt-y
  "Property.

  [Read Only]

  The tiltY read-only property of the `web.PointerEvent` interface
  the angle (in degrees) between the X-Z plane of the pointer and
  screen. This property is typically only useful for a pen/stylus
  type.

  `var tiltY = pointerEvent.tiltY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY`"
  [this]
  (-> this (.-tiltY)))

(defn twist
  "Property.

  [Read Only]

  The twist read-only property of the `web.PointerEvent` interface
  the clockwise rotation of the pointer (e.g., pen stylus) around
  major axis, in degrees.

  `var twist = pointerEvent.twist;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/twist`"
  [this]
  (-> this (.-twist)))

(defn pointer-type
  "Property.

  [Read Only]

  The pointerType read-only property of the `web.PointerEvent`
  indicates the device type (mouse, pen, or touch) that caused
  given pointer event.

  `var pType = pointerEvent.pointerType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType`"
  [this]
  (-> this (.-pointerType)))

(defn is-primary
  "Property.

  [Read Only]

  The isPrimary read-only property of the `web.PointerEvent` interface
  whether or not the pointer device that created the event is the
  pointer. It returns true if the pointer that caused the event
  be fired is the primary device and returns false otherwise.

  `var isPrimary = pointerEvent.isPrimary;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary`"
  [this]
  (-> this (.-isPrimary)))

