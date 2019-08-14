(ns performance.PerformanceTiming
  "The PerformanceTiming interface is a legacy interface kept for
  compatibility and contains properties that offer performance
  information for various events which occur during the loading
  use of the current page. You get a PerformanceTiming object describing
  page using the `web.window.performance.timing` property."
  (:refer-clojure :exclude []))

(defn connect-end
  "Property.

  The legacy PerformanceTiming.connectEnd read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, where the connection is opened network. If the transport
  reports an error and the connection establishment is started
  the last connection establisment end time is given. If a persistent
  is used, the value will be the same as `performance.PerformanceTiming.fetchStart`.
  connection is considered as opened when all secure connection
  or SOCKS authentication, is terminated.

  `time = performanceTiming.connectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/connectEnd`"
  [this]
  (-> this (.connectEnd)))

(defn connect-start
  "Property.

  The legacy PerformanceTiming.connectStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, where the request to open a connection is sent
  the network. If the transport layer reports an error and the
  establishment is started again, the last connection establisment
  time is given. If a persistent connection is used, the value
  be the same as `performance.PerformanceTiming.fetchStart`.

  `time = performanceTiming.connectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/connectStart`"
  [this]
  (-> this (.connectStart)))

(defn domain-lookup-end
  "Property.

  The legacy PerformanceTiming.domainLookupEnd read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, where the domain lookup is finished. If a persistent
  is used, or the information is stored in a cache or a local resource,
  value will be the same as `performance.PerformanceTiming.fetchStart`.

  `time = performanceTiming.domainLookupEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupEnd`"
  [this]
  (-> this (.domainLookupEnd)))

(defn set-domain-lookup-end!
  "Property.

  The legacy PerformanceTiming.domainLookupEnd read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, where the domain lookup is finished. If a persistent
  is used, or the information is stored in a cache or a local resource,
  value will be the same as `performance.PerformanceTiming.fetchStart`.

  `time = performanceTiming.domainLookupEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupEnd`"
  [this val]
  (aset this "domainLookupEnd" val))

(defn domain-lookup-start
  "Property.

  The legacy PerformanceTiming.domainLookupStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, where the domain lookup starts. If a persistent
  is used, or the information is stored in a cache or a local resource,
  value will be the same as `performance.PerformanceTiming.fetchStart`.

  `time = performanceTiming.domainLookupStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupStart`"
  [this]
  (-> this (.domainLookupStart)))

(defn dom-complete
  "Property.

  The legacy PerformanceTiming.domComplete read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, when the parser finished its work on the main document,
  is when its `web.Document.readyState` changes to 'complete' and
  corresponding readystatechange event is thrown.

  `time = performanceTiming.domComplete;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domComplete`"
  [this]
  (-> this (.domComplete)))

(defn dom-content-loaded-event-end
  "Property.

  The legacy PerformanceTiming.domContentLoadedEventEnd read-only
  returns an unsigned long long representing the moment, in milliseconds
  the UNIX epoch, right after all the scripts that need to be executed
  soon as possible, in order or not, has been executed.

  `time = performanceTiming.domContentLoadedEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd`"
  [this]
  (-> this (.domContentLoadedEventEnd)))

(defn dom-content-loaded-event-start
  "Property.

  The legacy PerformanceTiming.domContentLoadedEventStart read-only
  returns an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, right before the parser sent the DOMContentLoaded
  that is right after all the scripts that need to be executed
  after parsing has been executed.

  `time = performanceTiming.domContentLoadedEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domContentLoadedEventStart`"
  [this]
  (-> this (.domContentLoadedEventStart)))

(defn dom-interactive
  "Property.

  The legacy PerformanceTiming.domInteractive read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, when the parser finished its work on the main
  that is when its `web.Document.readyState` changes to 'interactive'
  the corresponding readystatechange event is thrown.

  `time = performanceTiming.domInteractive;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domInteractive`"
  [this]
  (-> this (.domInteractive)))

(defn dom-loading
  "Property.

  The legacy PerformanceTiming.domLoading read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, when the parser started its work, that is when its
  changes to 'loading' and the corresponding readystatechange event
  thrown.

  `time = performanceTiming.domLoading;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domLoading`"
  [this]
  (-> this (.domLoading)))

(defn set-dom-loading!
  "Property.

  The legacy PerformanceTiming.domLoading read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, when the parser started its work, that is when its
  changes to 'loading' and the corresponding readystatechange event
  thrown.

  `time = performanceTiming.domLoading;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domLoading`"
  [this val]
  (aset this "domLoading" val))

(defn fetch-start
  "Property.

  The legacy PerformanceTiming.fetchStart read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, the browser is ready to fetch the document using
  HTTP request. This moment is before the check to any application

  `time = performance.timing.fetchStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/fetchStart`"
  [this]
  (-> this (.fetchStart)))

(defn load-event-end
  "Property.

  The legacy PerformanceTiming.loadEventEnd read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, when the load event handler terminated, that
  when the load event is completed. If this event has not yet been
  or is not yet completed, it returns 0.

  `time = performanceTiming.loadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/loadEventEnd`"
  [this]
  (-> this (.loadEventEnd)))

(defn load-event-start
  "Property.

  The legacy PerformanceTiming.loadEventStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, when the load event was sent for the current
  If this event has not yet been sent, it returns 0.

  `time = performanceTiming.loadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/loadEventStart`"
  [this]
  (-> this (.loadEventStart)))

(defn navigation-start
  "Property.

  The legacy PerformanceTiming.navigationStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, right after the prompt for unload terminates
  the previous document in the same browsing context. If there
  no previous document, this value will be the same as `performance.PerformanceTiming.fetchStart`.

  `time = performanceTiming.navigationStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/navigationStart`"
  [this]
  (-> this (.navigationStart)))

(defn redirect-end
  "Property.

  The legacy PerformanceTiming.redirectEnd read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, the last HTTP redirect is completed, that is when
  last byte of the HTTP response has been received. If there is
  redirect, or if one of the redirect is not of the same origin,
  value returned is 0.

  `time = performanceTiming.redirectEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/redirectEnd`"
  [this]
  (-> this (.redirectEnd)))

(defn redirect-start
  "Property.

  The legacy PerformanceTiming.redirectStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, the first HTTP redirect starts. If there is no
  or if one of the redirect is not of the same origin, the value
  is 0.

  `time = performanceTiming.redirectStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/redirectStart`"
  [this]
  (-> this (.redirectStart)))

(defn request-start
  "Property.

  The legacy PerformanceTiming.requestStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, when the browser sent the request to obtain the
  document, from the server or from a cache. If the transport layer
  after the start of the request and the connection is reopened,
  property will be set to the time corresponding to the new request.

  `time = performanceTiming.requestStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/requestStart`"
  [this]
  (-> this (.requestStart)))

(defn response-end
  "Property.

  The legacy PerformanceTiming.responseEnd read-only property returns
  unsigned long long representing the moment, in miliseconds since
  UNIX epoch, when the browser received the last byte of the response,
  when the connection is closed if this happened first, from the
  from a cache or from a local resource.

  `time = performanceTiming.responseEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseEnd`"
  [this]
  (-> this (.responseEnd)))

(defn response-start
  "Property.

  The legacy PerformanceTiming.responseStart read-only property
  an unsigned long long representing the moment in time (in milliseconds
  the UNIX epoch) when the browser received the first byte of the
  from the server, cache, or local resource.

  `time = performanceTiming.responseStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseStart`"
  [this]
  (-> this (.responseStart)))

(defn secure-connection-start
  "Property.

  The legacy PerformanceTiming.secureConnectionStart read-only
  returns an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, where the secure connection handshake starts.
  no such connection is requested, it returns 0.

  `time = performanceTiming.secureConnectionStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/secureConnectionStart`"
  [this]
  (-> this (.secureConnectionStart)))

(defn unload-event-end
  "Property.

  The legacy PerformanceTiming.unloadEventEnd read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, the unload event handler finishes. If there is
  previous document, or if the previous document, or one of the
  redirects, is not of the same origin, the value returned is 0.

  `time = performanceTiming.unloadEventEnd;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/unloadEventEnd`"
  [this]
  (-> this (.unloadEventEnd)))

(defn unload-event-start
  "Property.

  The legacy PerformanceTiming.unloadEventStart read-only property
  an unsigned long long representing the moment, in miliseconds
  the UNIX epoch, the unload event has been thrown. If there is
  previous document, or if the previous document, or one of the
  redirects, is not of the same origin, the value returned is 0.

  `time = performanceTiming.unloadEventStart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/unloadEventStart`"
  [this]
  (-> this (.unloadEventStart)))

