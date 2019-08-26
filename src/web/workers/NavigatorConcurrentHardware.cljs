(ns web.workers.NavigatorConcurrentHardware
  "The NavigatorConcurrentHardware mixin adds to the `web.performance.Navigator`
  features which allow Web content to determine how many logical
  the user has available, in order to let content and Web apps
  their operations to best take advantage of the user's CPU."
  (:refer-clojure :exclude []))

(defn hardware-concurrency
  "Property.

  The navigator.hardwareConcurrency read-only property returns
  number of logical processors available to run threads on the
  computer.

  `logicalProcessors = window.navigator.hardwareConcurrency`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency`"
  [this]
  (-> this (.hardwareConcurrency)))

(defn set-hardware-concurrency!
  "Property.

  The navigator.hardwareConcurrency read-only property returns
  number of logical processors available to run threads on the
  computer.

  `logicalProcessors = window.navigator.hardwareConcurrency`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency`"
  [this val]
  (aset this "hardwareConcurrency" val))

