(ns web.device.BatteryManager
  "The BatteryManager interface provides ways to get information
  the system's battery charge level."
  (:refer-clojure :exclude []))

(defn add-event-listener
  "Method.

  The `web.EventTarget` method addEventListener() sets up a function
  will be called whenever the specified event is delivered to the

  `target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`"
  [this & args]
  (-> this .-addEventListener (.apply this (clj->js args))))

(defn remove-event-listener
  "Method.

  The EventTarget.removeEventListener() method removes from the
  an event listener previously registered with `EventTarget.addEventListener()`.
  event listener to be removed is identified using a combination
  the event type, the event listener function itself, and various
  options that may affect the matching process; see Matching event
  for removal

  `target.removeEventListener(type, listener[, options]);
  target.removeEventListener(type, listener[, useCapture]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`"
  [this & args]
  (-> this .-removeEventListener (.apply this (clj->js args))))

(defn dispatch-event
  "Method.

  Dispatches an `web.event.Event` at the specified `web.EventTarget`,
  invoking the affected `web.EventListener`s in the appropriate
  The normal event processing rules (including the capturing and
  bubbling phase) also apply to events dispatched manually with

  `cancelled = !target.dispatchEvent(event)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`"
  [this event]
  (-> this (.dispatchEvent event)))

(defn charging
  "Property.

  [Read Only]
  [Obsolute]

  A Boolean value indicating whether or not the device's battery
  currently being charged.

  `var charging = battery.charging

  On return, charging indicates whether or not the battery, which is a `web.device.BatteryManager` object, is currently being charged; if the battery is charging, this value is true. Otherwise, the value is false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/charging`"
  [this]
  (-> this (.-charging)))

(defn charging-time
  "Property.

  [Read Only]
  [Obsolute]

  Indicates the amount of time, in seconds, that remain until the
  is fully charged.

  `var time = battery.chargingTime

  On return, time is the remaining time in seconds until the battery, which is a `web.device.BatteryManager` object, is fully charged, or 0 if the battery is already fully charged. If the battery is currently discharging, this value is Infinity.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/chargingTime`"
  [this]
  (-> this (.-chargingTime)))

(defn discharging-time
  "Property.

  [Read Only]
  [Obsolute]

  Indicates the amount of time, in seconds, that remains until
  battery is fully discharged.

  `var time = battery.dischargingTime

  On return, time is the remaining time in seconds until the battery, which is a `web.device.BatteryManager` object, is fully discharged and the system will suspend. This value is Infinity if the battery is currently charging rather than discharging, or if the system is unable to report the remaining discharging time.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/dischargingTime`"
  [this]
  (-> this (.-dischargingTime)))

(defn level
  "Property.

  [Read Only]
  [Obsolute]

  Indicates the current battery charge level as a value between
  and 1.0.

  `var level = battery.level

  On return, level is a number representing the system's battery charge level scaled to a value between 0.0 and 1.0. A value of 0 means the battery, which is a `web.device.BatteryManager` object, is empty and the system is about to be suspended. A value of 1.0 means the battery is full. A value of 1.0 is also returned if the implementation isn't able to determine the battery charge level or if the system is not battery-powered.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/level`"
  [this]
  (-> this (.-level)))

(defn onchargingchange
  "Property.

  [Obsolute]

  Specifies an event listener to receive chargingchange events.
  events occur when the battery `charging` state is updated.

  `battery.onchargingchange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the chargingchange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingchange`"
  [this]
  (-> this (.-onchargingchange)))

(defn set-onchargingchange!
  "Property.

  [Obsolute]

  Specifies an event listener to receive chargingchange events.
  events occur when the battery `charging` state is updated.

  `battery.onchargingchange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the chargingchange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingchange`"
  [this val]
  (aset this "onchargingchange" val))

(defn onchargingtimechange
  "Property.

  [Obsolute]

  Specifies an event listener to receive chargingtimechange events.
  events occur when the battery `chargingTime` is updated.

  `battery.onchargingtimechange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the chargingtimechange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingtimechange`"
  [this]
  (-> this (.-onchargingtimechange)))

(defn set-onchargingtimechange!
  "Property.

  [Obsolute]

  Specifies an event listener to receive chargingtimechange events.
  events occur when the battery `chargingTime` is updated.

  `battery.onchargingtimechange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the chargingtimechange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onchargingtimechange`"
  [this val]
  (aset this "onchargingtimechange" val))

(defn ondischargingtimechange
  "Property.

  [Obsolute]

  Specifies an event listener to receive dischargingtimechange
  These events occur when the battery `dischargingTime` is updated.

  `battery.ondischargingtimechange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the dischargingtimechange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/ondischargingtimechange`"
  [this]
  (-> this (.-ondischargingtimechange)))

(defn set-ondischargingtimechange!
  "Property.

  [Obsolute]

  Specifies an event listener to receive dischargingtimechange
  These events occur when the battery `dischargingTime` is updated.

  `battery.ondischargingtimechange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the dischargingtimechange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/ondischargingtimechange`"
  [this val]
  (aset this "ondischargingtimechange" val))

(defn onlevelchange
  "Property.

  [Obsolute]

  The BatteryManager.onlevelchange property specifies an event
  to receive levelchange events. These events occur when the battery
  is updated.

  `navigator.battery.onlevelchange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the levelchange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onlevelchange`"
  [this]
  (-> this (.-onlevelchange)))

(defn set-onlevelchange!
  "Property.

  [Obsolute]

  The BatteryManager.onlevelchange property specifies an event
  to receive levelchange events. These events occur when the battery
  is updated.

  `navigator.battery.onlevelchange = funcRef

  Where battery is a `web.device.BatteryManager` object, and funcRef is a function to be called when the levelchange event occurs.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/onlevelchange`"
  [this val]
  (aset this "onlevelchange" val))

