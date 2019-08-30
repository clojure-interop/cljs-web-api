(ns web.long-tasks.TaskAttributionTiming
  "The TaskAttributionTiming interface of the Long Tasks API returns
  about the work involved in a long task and its associate frame
  The frame context, also called the container, is the iframe,
  or object that is being implicated, on the whole, for a long"
  (:refer-clojure :exclude []))

(defn container-type
  "Property.

  [Read Only]
  [Experimental]

  The containerType readonly property of the `web.long-tasks.TaskAttributionTiming`
  returns the type of frame container, one of iframe, embed, or

  `var containerType = TaskAttributionTiming.containerType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming/containerType`"
  [this]
  (-> this (.-containerType)))

(defn container-src
  "Property.

  [Read Only]
  [Experimental]

  The containerSrc readonly property of the `web.long-tasks.TaskAttributionTiming`
  returns the container's src attribute. A container is the iframe,
  or object etc. that is being implicated, on the whole, for a
  task.

  `var containerSrc = TaskAttributionTiming.containerSrc;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming/containerSrc`"
  [this]
  (-> this (.-containerSrc)))

(defn container-id
  "Property.

  [Read Only]
  [Experimental]

  The containerId readonly property of the `web.long-tasks.TaskAttributionTiming`
  returns the container's id attribute. A container is the iframe,
  or object etc. that is being implicated, on the whole, for a
  task.

  `var containerId = TaskAttributionTiming.containerId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming/containerId`"
  [this]
  (-> this (.-containerId)))

(defn container-name
  "Property.

  [Read Only]
  [Experimental]

  The containerName readonly property of the `web.long-tasks.TaskAttributionTiming`
  returns the container's name attribute. A container is the iframe,
  or object etc. that is being implicated, on the whole, for a
  task.

  `var containerName = TaskAttributionTiming.containerName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TaskAttributionTiming/containerName`"
  [this]
  (-> this (.-containerName)))

