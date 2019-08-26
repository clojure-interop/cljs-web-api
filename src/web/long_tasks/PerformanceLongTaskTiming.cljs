(ns web.long-tasks.PerformanceLongTaskTiming
  "The PerformanceLongTaskTiming interface of the the Long Tasks
  reports instances of long tasks."
  (:refer-clojure :exclude []))

(defn attribution
  "Property.

  The attribution readonly property of the `web.long-tasks.PerformanceLongTaskTiming`
  returns a sequence of `web.long-tasks.TaskAttributionTiming`

  `var taskAttributeTiming = PerformanceLongTaskTiming.attribution;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming/attribution`"
  [this]
  (-> this (.-attribution)))

(defn set-attribution!
  "Property.

  The attribution readonly property of the `web.long-tasks.PerformanceLongTaskTiming`
  returns a sequence of `web.long-tasks.TaskAttributionTiming`

  `var taskAttributeTiming = PerformanceLongTaskTiming.attribution;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming/attribution`"
  [this val]
  (aset this "attribution" val))

