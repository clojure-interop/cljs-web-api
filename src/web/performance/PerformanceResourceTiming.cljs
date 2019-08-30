(ns web.performance.PerformanceResourceTiming
  "The PerformanceResourceTiming interface enables retrieval and
  of detailed network timing data regarding the loading of an application's
  An application can use the timing metrics to determine, for example,
  length of time it takes to fetch a specific resource, such as
  `web.XMLHttpRequest`, `<SVG>`, image, or script."
  (:refer-clojure :exclude [name]))

(defn to-json
  "Method.

  The toJSON() method is a serializer that returns a JSON representation
  the `web.performance.PerformanceResourceTiming` object.

  `json = resourcePerfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn entry-type
  "Property.

  Returns \"resource\"."
  [this]
  (-> this (.-entryType)))

(defn set-entry-type!
  "Property.

  Returns \"resource\"."
  [this val]
  (aset this "entryType" val))

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

(defn next-hop-protocol
  "Property.

  [Read Only]

  The nextHopProtocol read-only property is a `string` representing
  network protocol used to fetch the resource, as identified by
  ALPN Protocol ID (RFC7301).

  `resource.nextHopProtocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol`"
  [this]
  (-> this (.-nextHopProtocol)))

(defn worker-start
  "Property.

  [Read Only]

  The workerStart read-only property of the `web.performance.PerformanceResourceTiming`
  returns a `web.dom.DOMHighResTimeStamp` immediately before dispatching
  `web.workers.FetchEvent` if a Service Worker thread is already
  or immediately before starting the Service Worker thread if it
  not already running. If the resource is not intercepted by a
  Worker the property will always return 0.

  `resource.workerStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/workerStart`"
  [this]
  (-> this (.-workerStart)))

(defn redirect-start
  "Property.

  [Read Only]

  The redirectStart read-only property returns a `timestamp` representing
  start time of the fetch which that initiates the redirect.

  `resource.redirectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart`"
  [this]
  (-> this (.-redirectStart)))

(defn redirect-end
  "Property.

  [Read Only]

  The redirectEnd read-only property returns a `timestamp` immediately
  receiving the last byte of the response of the last redirect.

  `resource.redirectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd`"
  [this]
  (-> this (.-redirectEnd)))

(defn fetch-start
  "Property.

  [Read Only]

  The fetchStart read-only property represents a `timestamp` immediately
  the browser starts to fetch the resource.

  `resource.fetchStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/fetchStart`"
  [this]
  (-> this (.-fetchStart)))

(defn domain-lookup-start
  "Property.

  [Read Only]

  The domainLookupStart read-only property returns the `timestamp`
  before the browser starts the domain name lookup for the resource.

  `resource.domainLookupStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupStart`"
  [this]
  (-> this (.-domainLookupStart)))

(defn domain-lookup-end
  "Property.

  [Read Only]

  The domainLookupEnd read-only property returns the `timestamp`
  after the browser finishes the domain name lookup for the resource.

  `resource.domainLookupEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupEnd`"
  [this]
  (-> this (.-domainLookupEnd)))

(defn connect-start
  "Property.

  [Read Only]

  The connectStart read-only property returns the `timestamp` immediately
  the user agent starts establishing the connection to the server
  retrieve the resource.

  `resource.connectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectStart`"
  [this]
  (-> this (.-connectStart)))

(defn connect-end
  "Property.

  [Read Only]

  The connectEnd read-only property returns the `timestamp` immediately
  the browser finishes establishing the connection to the server
  retrieve the resource. The timestamp value includes the time
  to establish the transport connection, as well as other time
  such as SSL handshake and SOCKS authentication.

  `resource.connectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectEnd`"
  [this]
  (-> this (.-connectEnd)))

(defn secure-connection-start
  "Property.

  [Read Only]

  The secureConnectionStart read-only property returns a `timestamp`
  before the browser starts the handshake process to secure the
  connection. If a secure connection is not used, the property
  zero.

  `resource.secureConnectionStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/secureConnectionStart`"
  [this]
  (-> this (.-secureConnectionStart)))

(defn request-start
  "Property.

  [Read Only]

  The requestStart read-only property returns a `timestamp` of
  time immediately before the browser starts requesting the resource
  the server, cache, or local resource. If the transport connection
  and the browser retires the request, the value returned will
  the start of the retry request.

  `resource.requestStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/requestStart`"
  [this]
  (-> this (.-requestStart)))

(defn response-start
  "Property.

  [Read Only]

  The responseStart read-only property returns a `timestamp` immediately
  the browser receives the first byte of the response from the
  cache, or local resource.

  `resource.responseStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStart`"
  [this]
  (-> this (.-responseStart)))

(defn response-end
  "Property.

  [Read Only]

  The responseEnd read-only property returns a `timestamp` immediately
  the browser receives the last byte of the resource or immediately
  the transport connection is closed, whichever comes first.

  `resource.responseEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseEnd`"
  [this]
  (-> this (.-responseEnd)))

(defn transfer-size
  "Property.

  [Read Only]

  The transferSize read-only property represents the size (in octets)
  the fetched resource. The size includes the response header fields
  the response payload body (as defined by RFC7230).

  `resource.transferSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize`"
  [this]
  (-> this (.-transferSize)))

(defn encoded-body-size
  "Property.

  [Read Only]

  The encodedBodySize read-only property represents the size (in
  received from the fetch (HTTP or cache), of the payload body,
  removing any applied content-codings.

  `resource.encodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize`"
  [this]
  (-> this (.-encodedBodySize)))

(defn decoded-body-size
  "Property.

  [Read Only]

  The decodedBodySize read-only property returns the size (in octets)
  from the fetch (HTTP or cache) of the message body, after removing
  applied content-codings. If the resource is retrieved from an
  cache or local resources, it returns the size of the payload
  removing any applied content-codings.

  `resource.decodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/decodedBodySize`"
  [this]
  (-> this (.-decodedBodySize)))

(defn server-timing
  "Property.

  [Read Only]

  The serverTiming read-only property returns an array of `web.performance.PerformanceServerTiming`
  containing server timing metrics.

  `resource.serverTiming;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/serverTiming`"
  [this]
  (-> this (.-serverTiming)))

