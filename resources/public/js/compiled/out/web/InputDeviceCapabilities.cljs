(ns web.InputDeviceCapabilities
  "The InputDeviceCapabilities interface of the Input Device Capabilities
  provides information about the physical device or a group of
  devices responsible for generating input events. Events caused
  the same physical input device get the same instance of this
  but the converse isn't true. For example, two mice with the same
  in a system may appear as a single InputDeviceCapabilities instance."
  (:refer-clojure :exclude []))

(defn fires-touch-events
  "Property.

  The InputDeviceCapabilities.firesTouchEvents read-only property
  a `web.Boolean` that indicates whether the device dispatches
  events.

  `var boolean = InputDeviceCapabilities.firesTouchEvents`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceCapabilities/firesTouchEvents`"
  [this]
  (-> this (.firesTouchEvents)))

(defn set-fires-touch-events!
  "Property.

  The InputDeviceCapabilities.firesTouchEvents read-only property
  a `web.Boolean` that indicates whether the device dispatches
  events.

  `var boolean = InputDeviceCapabilities.firesTouchEvents`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceCapabilities/firesTouchEvents`"
  [this val]
  (aset this "firesTouchEvents" val))

