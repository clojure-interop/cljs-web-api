(ns performance.Performance
  "The Performance interface provides access to performance-related
  for the current page. It's part of the High Resolution Time API,
  is enhanced by the Performance Timeline API, the Navigation Timing
  the User Timing API, and the Resource Timing API."
  (:refer-clojure :exclude []))

(defn clear-marks
  "Method.

  The clearMarks() method removes the named mark from the browser's
  entry buffer. If the method is called with no arguments, all
  entries` with an `web.entry type` of \\\"mark\\\" will be removed
  the performance entry buffer.

  `performance.clearMarks();
  performance.clearMarks(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMarks`"
  [this & args]
  (apply (-> this .-clearMarks) (concat [this] args)))

(defn clear-measures
  "Method.

  The clearMeasures() method removes the named measure from the
  performance entry buffer. If the method is called with no arguments,
  `web.performance entries` with an `web.entry type` of \\\"measure\\\"
  be removed from the performance entry buffer.

  `performance.clearMeasures();
  performance.clearMeasures(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures`"
  [this & args]
  (apply (-> this .-clearMeasures) (concat [this] args)))

(defn clear-resource-timings
  "Method.

  The clearResourceTimings() method removes all `web.performance
  with an `web.entryType` of \\\"resource\\\" from the browser's performance
  buffer and sets the size of the performance data buffer to zero.
  set the size of the browser's performance data buffer, use the
  method.

  `performance.clearResourceTimings();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearResourceTimings`"
  [this ]
  (-> this (.clearResourceTimings)))

(defn get-entries
  "Method.

  The getEntries() method returns a list of all `performance.PerformanceEntry`
  for the page. The list's members (entries) can be created by
  performance marks or measures (for example by calling the `web.mark()`
  at explicit points in time. If you are only interested in performance
  of certain types or that have certain names, see `web.getEntriesByType()`
  `web.getEntriesByName()`.

  `General syntax:



  entries = window.performance.getEntries();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntries`"
  [this & args]
  (apply (-> this .-getEntries) (concat [this] args)))

(defn get-entries-by-name
  "Method.

  The getEntriesByName() method returns a list of `performance.PerformanceEntry`
  for the given name and type. The list's members (entries) can
  created by making performance marks or measures (for example
  calling the `web.mark()` method) at explicit points in time.

  `entries = window.performance.getEntriesByName(name, type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName`"
  [this name type]
  (-> this (.getEntriesByName name type)))

(defn get-entries-by-type
  "Method.

  The getEntriesByType() method returns a list of `performance.PerformanceEntry`
  for a given type. The list's members (entries) can be created
  making performance marks or measures (for example by calling
  `web.mark()` method) at explicit points in time.

  `entries = window.performance.getEntriesByType(type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType`"
  [this type]
  (-> this (.getEntriesByType type)))

(defn mark
  "Method.

  The mark() method creates a `web.timestamp` in the browser's
  entry buffer with the given name. The application defined timestamp
  be retrieved by one of the `performance.Performance` interface's
  methods (`web.getEntries()`, `web.getEntriesByName()` or `web.getEntriesByType()`).

  `performance.mark(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark`"
  [this name]
  (-> this (.mark name)))

(defn measure
  "Method.

  The measure() method creates a named `web.timestamp` in the browser's
  entry buffer between marks, the navigation start time, or the
  time. When measuring between two marks, there is a start mark
  end mark, respectively. The named timestamp is referred to as
  measure.

  `performance.measure(name);
  performance.measure(name, startMark);
  performance.measure(name, startMark, endMark);
  performance.measure(name, undefined, endMark);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure`"
  [this & args]
  (apply (-> this .-measure) (concat [this] args)))

(defn now
  "Method.

  The performance.now() method returns a `dom.DOMHighResTimeStamp`,
  in milliseconds.

  `t = performance.now();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/now`"
  [this ]
  (-> this (.now)))

(defn set-resource-timing-buffer-size
  "Method.

  The setResourceTimingBufferSize() method sets the browser's resource
  buffer size to the specified number of \\\"resource\\\" `web.performance
  type` objects.

  `performance.setResourceTimingBufferSize(maxSize);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/setResourceTimingBufferSize`"
  [this max-size]
  (-> this (.setResourceTimingBufferSize max-size)))

(defn to-json
  "Method.

  The toJSON() method of the `performance.Performance` interface
  a standard serializer: it returns a JSON representation of the
  object's properties.

  `myPerf = performance.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn navigation
  "Property.

  The legacy Performance.navigation read-only property returns
  `performance.PerformanceNavigation` object representing the type
  navigation that occurs in the given browsing context, such as
  number of redirections needed to fetch the resource.

  `navObject = performance.navigation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/navigation`"
  [this]
  (-> this (.navigation)))

(defn onresourcetimingbufferfull
  "Property.

  The onresourcetimingbufferfull property is an event handler that
  be called when the resourcetimingbufferfull event is fired. This
  is fired when the browser's resource timing performance buffer
  full.

  `callback = performance.onresourcetimingbufferfull = buffer_full_cb;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/onresourcetimingbufferfull`"
  [this]
  (-> this (.onresourcetimingbufferfull)))

(defn set-onresourcetimingbufferfull!
  "Property.

  The onresourcetimingbufferfull property is an event handler that
  be called when the resourcetimingbufferfull event is fired. This
  is fired when the browser's resource timing performance buffer
  full.

  `callback = performance.onresourcetimingbufferfull = buffer_full_cb;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/onresourcetimingbufferfull`"
  [this val]
  (aset this "onresourcetimingbufferfull" val))

(defn time-origin
  "Property.

  The timeOrigin read-only property of the `performance.Performance`
  returns the high resolution timestamp of the start time of the
  measurement.

  `var timeOrigin = performance.timeOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin`"
  [this]
  (-> this (.timeOrigin)))

(defn set-time-origin!
  "Property.

  The timeOrigin read-only property of the `performance.Performance`
  returns the high resolution timestamp of the start time of the
  measurement.

  `var timeOrigin = performance.timeOrigin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin`"
  [this val]
  (aset this "timeOrigin" val))

(defn timing
  "Property.

  The legacy Performance.timing read-only property returns a `performance.PerformanceTiming`
  containing latency-related performance information.

  `timingInfo = performance.timing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing`"
  [this]
  (-> this (.timing)))

(defn memory
  "Property.

  None.

  `timingInfo = performance.memory`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory`"
  [this]
  (-> this (.memory)))

(defn set-memory!
  "Property.

  None.

  `timingInfo = performance.memory`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory`"
  [this val]
  (aset this "memory" val))

