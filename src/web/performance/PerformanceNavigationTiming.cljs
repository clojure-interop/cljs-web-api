(ns web.performance.PerformanceNavigationTiming
  "The PerformanceNavigationTiming interface provides methods and
  to store and retrieve metrics regarding the browser's document
  events. For example, this interface can be used to determine
  much time it takes to load or unload a document."
  (:refer-clojure :exclude [type]))

(defn to-json
  "Method.

  The toJSON() method is a serializer - it returns a JSON representation
  the `web.performance.PerformanceNavigationTiming` object.

  `json = resourcePerfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn entry-type
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this]
  (-> this (.entryType)))

(defn set-entry-type!
  "Property.

  The entryType property returns a `web.dom.DOMString` representing
  type of performance metric such as, for example, \\\"mark\\\". This
  is read only.

  `var type = entry.entryType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`"
  [this val]
  (aset this "entryType" val))

(defn initiator-type
  "Property.

  The initiatorType read-only property is a `string` that represents
  type of resource that initiated the performance event.

  `resource.initiatorType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`"
  [this]
  (-> this (.initiatorType)))

(defn set-initiator-type!
  "Property.

  The initiatorType read-only property is a `string` that represents
  type of resource that initiated the performance event.

  `resource.initiatorType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`"
  [this val]
  (aset this "initiatorType" val))

(defn dom-complete
  "Property.

  The domComplete read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to complete.

  `perfEntry.domComplete;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domComplete`"
  [this]
  (-> this (.domComplete)))

(defn set-dom-complete!
  "Property.

  The domComplete read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to complete.

  `perfEntry.domComplete;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domComplete`"
  [this val]
  (aset this "domComplete" val))

(defn request-start
  "Property.

  A DOMHighResTimeStamp representing the time immediately before
  user agent starts requesting the resource from the server, or
  relevant application caches or from local resources."
  [this]
  (-> this (.requestStart)))

(defn set-request-start!
  "Property.

  A DOMHighResTimeStamp representing the time immediately before
  user agent starts requesting the resource from the server, or
  relevant application caches or from local resources."
  [this val]
  (aset this "requestStart" val))

(defn type
  "Property.

  The type read-only property returns a `string` representing the
  of navigation. The value must be one of the following:

  `perfEntry.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property returns a `string` representing the
  of navigation. The value must be one of the following:

  `perfEntry.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type`"
  [this val]
  (aset this "type" val))

(defn dom-content-loaded-event-end
  "Property.

  The domContentLoadedEventEnd read-only property returns a `timestamp`
  the time value equal to the time immediately after the current
  DOMContentLoaded event completes.

  `perfEntry.domContentLoadedEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd`"
  [this]
  (-> this (.domContentLoadedEventEnd)))

(defn set-dom-content-loaded-event-end!
  "Property.

  The domContentLoadedEventEnd read-only property returns a `timestamp`
  the time value equal to the time immediately after the current
  DOMContentLoaded event completes.

  `perfEntry.domContentLoadedEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd`"
  [this val]
  (aset this "domContentLoadedEventEnd" val))

(defn dom-content-loaded-event-start
  "Property.

  The domContentLoadedEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  fires the DOMContentLoaded event at the current document.

  `perfEntry.domContentLoadedEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart`"
  [this]
  (-> this (.domContentLoadedEventStart)))

(defn set-dom-content-loaded-event-start!
  "Property.

  The domContentLoadedEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  fires the DOMContentLoaded event at the current document.

  `perfEntry.domContentLoadedEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart`"
  [this val]
  (aset this "domContentLoadedEventStart" val))

(defn dom-interactive
  "Property.

  The domInteractive read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to interactive.

  `perfEntry.domInteractive;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive`"
  [this]
  (-> this (.domInteractive)))

(defn set-dom-interactive!
  "Property.

  The domInteractive read-only property returns a `timestamp` representing
  time value equal to the time immediately before the user agent
  the current document readiness of the current document to interactive.

  `perfEntry.domInteractive;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive`"
  [this val]
  (aset this "domInteractive" val))

(defn load-event-end
  "Property.

  The loadEventEnd read-only property returns a `timestamp` which
  equal to the time when the load event of the current document
  completed.

  `perfEntry.loadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd`"
  [this]
  (-> this (.loadEventEnd)))

(defn set-load-event-end!
  "Property.

  The loadEventEnd read-only property returns a `timestamp` which
  equal to the time when the load event of the current document
  completed.

  `perfEntry.loadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd`"
  [this val]
  (aset this "loadEventEnd" val))

(defn load-event-start
  "Property.

  The loadEventStart read-only property returns a `timestamp` representing
  time value equal to the time immediately before the load event
  the current document is fired.

  `perfEntry.loadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart`"
  [this]
  (-> this (.loadEventStart)))

(defn set-load-event-start!
  "Property.

  The loadEventStart read-only property returns a `timestamp` representing
  time value equal to the time immediately before the load event
  the current document is fired.

  `perfEntry.loadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart`"
  [this val]
  (aset this "loadEventStart" val))

(defn redirect-count
  "Property.

  The redirectCount property returns a `timestamp` representing
  number of redirects since the last non-redirect navigation under
  current browsing context.

  `perfEntry.redirectCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/redirectCount`"
  [this]
  (-> this (.redirectCount)))

(defn set-redirect-count!
  "Property.

  The redirectCount property returns a `timestamp` representing
  number of redirects since the last non-redirect navigation under
  current browsing context.

  `perfEntry.redirectCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/redirectCount`"
  [this val]
  (aset this "redirectCount" val))

(defn unload-event-end
  "Property.

  The unloadEventEnd read-only property returns a `timestamp` representing
  time value equal to the time immediately after the user agent
  the unload event of the previous document. If there is no previous
  this property value is 0.

  `perfEntry.unloadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd`"
  [this]
  (-> this (.unloadEventEnd)))

(defn set-unload-event-end!
  "Property.

  The unloadEventEnd read-only property returns a `timestamp` representing
  time value equal to the time immediately after the user agent
  the unload event of the previous document. If there is no previous
  this property value is 0.

  `perfEntry.unloadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd`"
  [this val]
  (aset this "unloadEventEnd" val))

(defn unload-event-start
  "Property.

  The unloadEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  starts the unload event of the previous document. If there is
  previous document, this property returns 0.

  `perfEntry.unloadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventStart`"
  [this]
  (-> this (.unloadEventStart)))

(defn set-unload-event-start!
  "Property.

  The unloadEventStart read-only property returns a `timestamp`
  the time value equal to the time immediately before the user
  starts the unload event of the previous document. If there is
  previous document, this property returns 0.

  `perfEntry.unloadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventStart`"
  [this val]
  (aset this "unloadEventStart" val))

