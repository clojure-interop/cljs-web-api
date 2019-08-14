(ns web.UserProximityEvent
  "The UserProximityEvent indicates whether a nearby physical object
  present by using the proximity sensor of a device."
  (:refer-clojure :exclude []))

(defn near
  "Property.

  The near property tell if there is an object close to the device
  or not (false).

  `var near = userProximityEvent.near;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UserProximityEvent/near`"
  [this]
  (-> this (.near)))

(defn set-near!
  "Property.

  The near property tell if there is an object close to the device
  or not (false).

  `var near = userProximityEvent.near;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UserProximityEvent/near`"
  [this val]
  (aset this "near" val))

