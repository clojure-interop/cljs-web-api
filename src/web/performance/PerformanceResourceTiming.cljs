(ns web.performance.PerformanceResourceTiming
  "The PerformanceResourceTiming interface enables retrieval and
  of detailed network timing data regarding the loading of an application's
  An application can use the timing metrics to determine, for example,
  length of time it takes to fetch a specific resource, such as
  `web.XMLHttpRequest`, `<SVG>`, image, or script."
  (:refer-clojure :exclude []))

(defn to-json
  "Method.

  The toJSON() method is a serializer that returns a JSON representation
  the `web.performance.PerformanceResourceTiming` object.

  `json = resourcePerfEntry.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/toJSON`"
  [this ]
  (-> this (.toJSON)))

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

(defn connect-end
  "Property.

  The connectEnd read-only property returns the `timestamp` immediately
  the browser finishes establishing the connection to the server
  retrieve the resource. The timestamp value includes the time
  to establish the transport connection, as well as other time
  such as SSL handshake and SOCKS authentication.

  `resource.connectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectEnd`"
  [this]
  (-> this (.connectEnd)))

(defn set-connect-end!
  "Property.

  The connectEnd read-only property returns the `timestamp` immediately
  the browser finishes establishing the connection to the server
  retrieve the resource. The timestamp value includes the time
  to establish the transport connection, as well as other time
  such as SSL handshake and SOCKS authentication.

  `resource.connectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectEnd`"
  [this val]
  (aset this "connectEnd" val))

(defn connect-start
  "Property.

  The connectStart read-only property returns the `timestamp` immediately
  the user agent starts establishing the connection to the server
  retrieve the resource.

  `resource.connectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectStart`"
  [this]
  (-> this (.connectStart)))

(defn set-connect-start!
  "Property.

  The connectStart read-only property returns the `timestamp` immediately
  the user agent starts establishing the connection to the server
  retrieve the resource.

  `resource.connectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/connectStart`"
  [this val]
  (aset this "connectStart" val))

(defn decoded-body-size
  "Property.

  The decodedBodySize read-only property returns the size (in octets)
  from the fetch (HTTP or cache) of the message body, after removing
  applied content-codings. If the resource is retrieved from an
  cache or local resources, it returns the size of the payload
  removing any applied content-codings.

  `resource.decodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/decodedBodySize`"
  [this]
  (-> this (.decodedBodySize)))

(defn set-decoded-body-size!
  "Property.

  The decodedBodySize read-only property returns the size (in octets)
  from the fetch (HTTP or cache) of the message body, after removing
  applied content-codings. If the resource is retrieved from an
  cache or local resources, it returns the size of the payload
  removing any applied content-codings.

  `resource.decodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/decodedBodySize`"
  [this val]
  (aset this "decodedBodySize" val))

(defn domain-lookup-end
  "Property.

  The domainLookupEnd read-only property returns the `timestamp`
  after the browser finishes the domain name lookup for the resource.

  `resource.domainLookupEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupEnd`"
  [this]
  (-> this (.domainLookupEnd)))

(defn set-domain-lookup-end!
  "Property.

  The domainLookupEnd read-only property returns the `timestamp`
  after the browser finishes the domain name lookup for the resource.

  `resource.domainLookupEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupEnd`"
  [this val]
  (aset this "domainLookupEnd" val))

(defn domain-lookup-start
  "Property.

  The domainLookupStart read-only property returns the `timestamp`
  before the browser starts the domain name lookup for the resource.

  `resource.domainLookupStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupStart`"
  [this]
  (-> this (.domainLookupStart)))

(defn set-domain-lookup-start!
  "Property.

  The domainLookupStart read-only property returns the `timestamp`
  before the browser starts the domain name lookup for the resource.

  `resource.domainLookupStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/domainLookupStart`"
  [this val]
  (aset this "domainLookupStart" val))

(defn encoded-body-size
  "Property.

  The encodedBodySize read-only property represents the size (in
  received from the fetch (HTTP or cache), of the payload body,
  removing any applied content-codings.

  `resource.encodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize`"
  [this]
  (-> this (.encodedBodySize)))

(defn set-encoded-body-size!
  "Property.

  The encodedBodySize read-only property represents the size (in
  received from the fetch (HTTP or cache), of the payload body,
  removing any applied content-codings.

  `resource.encodedBodySize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/encodedBodySize`"
  [this val]
  (aset this "encodedBodySize" val))

(defn fetch-start
  "Property.

  The fetchStart read-only property represents a `timestamp` immediately
  the browser starts to fetch the resource.

  `resource.fetchStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/fetchStart`"
  [this]
  (-> this (.fetchStart)))

(defn set-fetch-start!
  "Property.

  The fetchStart read-only property represents a `timestamp` immediately
  the browser starts to fetch the resource.

  `resource.fetchStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/fetchStart`"
  [this val]
  (aset this "fetchStart" val))

(defn next-hop-protocol
  "Property.

  The nextHopProtocol read-only property is a `string` representing
  network protocol used to fetch the resource, as identified by
  ALPN Protocol ID (RFC7301).

  `resource.nextHopProtocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol`"
  [this]
  (-> this (.nextHopProtocol)))

(defn set-next-hop-protocol!
  "Property.

  The nextHopProtocol read-only property is a `string` representing
  network protocol used to fetch the resource, as identified by
  ALPN Protocol ID (RFC7301).

  `resource.nextHopProtocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol`"
  [this val]
  (aset this "nextHopProtocol" val))

(defn redirect-end
  "Property.

  The redirectEnd read-only property returns a `timestamp` immediately
  receiving the last byte of the response of the last redirect.

  `resource.redirectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd`"
  [this]
  (-> this (.redirectEnd)))

(defn set-redirect-end!
  "Property.

  The redirectEnd read-only property returns a `timestamp` immediately
  receiving the last byte of the response of the last redirect.

  `resource.redirectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectEnd`"
  [this val]
  (aset this "redirectEnd" val))

(defn redirect-start
  "Property.

  The redirectStart read-only property returns a `timestamp` representing
  start time of the fetch which that initiates the redirect.

  `resource.redirectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart`"
  [this]
  (-> this (.redirectStart)))

(defn set-redirect-start!
  "Property.

  The redirectStart read-only property returns a `timestamp` representing
  start time of the fetch which that initiates the redirect.

  `resource.redirectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/redirectStart`"
  [this val]
  (aset this "redirectStart" val))

(defn request-start
  "Property.

  The requestStart read-only property returns a `timestamp` of
  time immediately before the browser starts requesting the resource
  the server, cache, or local resource. If the transport connection
  and the browser retires the request, the value returned will
  the start of the retry request.

  `resource.requestStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/requestStart`"
  [this]
  (-> this (.requestStart)))

(defn set-request-start!
  "Property.

  The requestStart read-only property returns a `timestamp` of
  time immediately before the browser starts requesting the resource
  the server, cache, or local resource. If the transport connection
  and the browser retires the request, the value returned will
  the start of the retry request.

  `resource.requestStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/requestStart`"
  [this val]
  (aset this "requestStart" val))

(defn response-end
  "Property.

  The responseEnd read-only property returns a `timestamp` immediately
  the browser receives the last byte of the resource or immediately
  the transport connection is closed, whichever comes first.

  `resource.responseEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseEnd`"
  [this]
  (-> this (.responseEnd)))

(defn set-response-end!
  "Property.

  The responseEnd read-only property returns a `timestamp` immediately
  the browser receives the last byte of the resource or immediately
  the transport connection is closed, whichever comes first.

  `resource.responseEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseEnd`"
  [this val]
  (aset this "responseEnd" val))

(defn response-start
  "Property.

  The responseStart read-only property returns a `timestamp` immediately
  the browser receives the first byte of the response from the
  cache, or local resource.

  `resource.responseStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStart`"
  [this]
  (-> this (.responseStart)))

(defn set-response-start!
  "Property.

  The responseStart read-only property returns a `timestamp` immediately
  the browser receives the first byte of the response from the
  cache, or local resource.

  `resource.responseStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStart`"
  [this val]
  (aset this "responseStart" val))

(defn secure-connection-start
  "Property.

  The secureConnectionStart read-only property returns a `timestamp`
  before the browser starts the handshake process to secure the
  connection. If a secure connection is not used, the property
  zero.

  `resource.secureConnectionStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/secureConnectionStart`"
  [this]
  (-> this (.secureConnectionStart)))

(defn set-secure-connection-start!
  "Property.

  The secureConnectionStart read-only property returns a `timestamp`
  before the browser starts the handshake process to secure the
  connection. If a secure connection is not used, the property
  zero.

  `resource.secureConnectionStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/secureConnectionStart`"
  [this val]
  (aset this "secureConnectionStart" val))

(defn server-timing
  "Property.

  The serverTiming read-only property returns an array of `web.performance.PerformanceServerTiming`
  containing server timing metrics.

  `resource.serverTiming;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/serverTiming`"
  [this]
  (-> this (.serverTiming)))

(defn set-server-timing!
  "Property.

  The serverTiming read-only property returns an array of `web.performance.PerformanceServerTiming`
  containing server timing metrics.

  `resource.serverTiming;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/serverTiming`"
  [this val]
  (aset this "serverTiming" val))

(defn transfer-size
  "Property.

  The transferSize read-only property represents the size (in octets)
  the fetched resource. The size includes the response header fields
  the response payload body (as defined by RFC7230).

  `resource.transferSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize`"
  [this]
  (-> this (.transferSize)))

(defn set-transfer-size!
  "Property.

  The transferSize read-only property represents the size (in octets)
  the fetched resource. The size includes the response header fields
  the response payload body (as defined by RFC7230).

  `resource.transferSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/transferSize`"
  [this val]
  (aset this "transferSize" val))

(defn worker-start
  "Property.

  The workerStart read-only property of the `web.performance.PerformanceResourceTiming`
  returns a `web.dom.DOMHighResTimeStamp` immediately before dispatching
  `web.workers.FetchEvent` if a Service Worker thread is already
  or immediately before starting the Service Worker thread if it
  not already running. If the resource is not intercepted by a
  Worker the property will always return 0.

  `resource.workerStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/workerStart`"
  [this]
  (-> this (.workerStart)))

(defn set-worker-start!
  "Property.

  The workerStart read-only property of the `web.performance.PerformanceResourceTiming`
  returns a `web.dom.DOMHighResTimeStamp` immediately before dispatching
  `web.workers.FetchEvent` if a Service Worker thread is already
  or immediately before starting the Service Worker thread if it
  not already running. If the resource is not intercepted by a
  Worker the property will always return 0.

  `resource.workerStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/workerStart`"
  [this val]
  (aset this "workerStart" val))

