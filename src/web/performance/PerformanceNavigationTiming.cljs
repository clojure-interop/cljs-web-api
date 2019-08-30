(ns web.performance.PerformanceNavigationTiming
  "The PerformanceNavigationTiming interface provides methods and
  to store and retrieve metrics regarding the browser's document
  events. For example, this interface can be used to determine
  much time it takes to load or unload a document."
  (:refer-clojure :exclude [name type]))

(defn to-json
  "Method.

  [Experimental]

  The toJSON() method is a serializer - it returns a JSON representation
  the `web.performance.PerformanceNavigationTiming` object.

  `json = resourcePerfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn entry-type
  "Property.

  [Read Only]

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.-entryType)))

(defn name
  "Property.

  [Read Only]

  The name property of the `web.performance.PerformanceEntry` interface
  a value that further specifies the value returned by the `PerformanceEntry.entryType`
  This property is read only.

  `var name = entry.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`"
  [this]
  (-> this (.-name)))

(defn start-time
  "Property.

  [Read Only]

  The startTime property returns the first recorded `timestamp`
  the `performance entry`.

  `entry.startTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`"
  [this]
  (-> this (.-startTime)))

(defn duration
  "Property.

  [Read Only]

  The duration property returns a `timestamp` that is the duration
  the `performance entry`.

  `entry.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`"
  [this]
  (-> this (.-duration)))

(defn initiator-type
  "Property.

  [Read Only]

  The initiatorType read-only property is a `string` that represents
  type of resource that initiated the performance event.

  `resource.initiatorType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`"
  [this]
  (-> this (.-initiatorType)))

(defn dom-complete
  "Property.

  [Read Only]
  [Experimental]

  The domComplete read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to complete.

  `perfEntry.domComplete;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domComplete`"
  [this]
  (-> this (.-domComplete)))

(defn dom-content-loaded-event-end
  "Property.

  [Read Only]
  [Experimental]

  The domContentLoadedEventEnd read-only property returns a `timestamp`
  the time value equal to the time immediately after the current
  DOMContentLoaded event completes.

  `perfEntry.domContentLoadedEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd`"
  [this]
  (-> this (.-domContentLoadedEventEnd)))

(defn dom-content-loaded-event-start
  "Property.

  [Read Only]
  [Experimental]

  The domContentLoadedEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  fires the DOMContentLoaded event at the current document.

  `perfEntry.domContentLoadedEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart`"
  [this]
  (-> this (.-domContentLoadedEventStart)))

(defn dom-interactive
  "Property.

  [Read Only]
  [Experimental]

  The domInteractive read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to interactive.

  `perfEntry.domInteractive;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive`"
  [this]
  (-> this (.-domInteractive)))

(defn load-event-end
  "Property.

  [Read Only]
  [Experimental]

  The loadEventEnd read-only property returns a `timestamp` which
  equal to the time when the load event of the current document
  completed.

  `perfEntry.loadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd`"
  [this]
  (-> this (.-loadEventEnd)))

(defn load-event-start
  "Property.

  [Read Only]
  [Experimental]

  The loadEventStart read-only property returns a `timestamp` representing
  time value equal to the time immediately before the load event
  the current document is fired.

  `perfEntry.loadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart`"
  [this]
  (-> this (.-loadEventStart)))

(defn redirect-count
  "Property.

  [Read Only]
  [Experimental]

  The redirectCount property returns a `timestamp` representing
  number of redirects since the last non-redirect navigation under
  current browsing context.

  `perfEntry.redirectCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/redirectCount`"
  [this]
  (-> this (.-redirectCount)))

(defn request-start
  "Property.

  A DOMHighResTimeStamp representing the time immediately before
  user agent starts requesting the resource from the server, or
  relevant application caches or from local resources."
  [this]
  (-> this (.-requestStart)))

(defn set-request-start!
  "Property.

  A DOMHighResTimeStamp representing the time immediately before
  user agent starts requesting the resource from the server, or
  relevant application caches or from local resources."
  [this val]
  (aset this "requestStart" val))

(defn response-start
  "Property.

  A DOMHighResTimeStamp representing the time immediately after
  user agent's HTTP parser receives the first byte of the response
  relevant applicaiton caches, or from local resources or from
  server."
  [this]
  (-> this (.-responseStart)))

(defn set-response-start!
  "Property.

  A DOMHighResTimeStamp representing the time immediately after
  user agent's HTTP parser receives the first byte of the response
  relevant applicaiton caches, or from local resources or from
  server."
  [this val]
  (aset this "responseStart" val))

(defn type
  "Property.

  [Read Only]
  [Experimental]

  The type read-only property returns a `string` representing the
  of navigation. The value must be one of the following:

  `perfEntry.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type`"
  [this]
  (-> this (.-type)))

(defn unload-event-end
  "Property.

  [Read Only]
  [Experimental]

  The unloadEventEnd read-only property returns a `timestamp` representing
  time value equal to the time immediately after the user agent
  the unload event of the previous document. If there is no previous
  this property value is 0.

  `perfEntry.unloadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd`"
  [this]
  (-> this (.-unloadEventEnd)))

(defn unload-event-start
  "Property.

  [Read Only]
  [Experimental]

  The unloadEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  starts the unload event of the previous document. If there is
  previous document, this property returns 0.

  `perfEntry.unloadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventStart`"
  [this]
  (-> this (.-unloadEventStart)))

