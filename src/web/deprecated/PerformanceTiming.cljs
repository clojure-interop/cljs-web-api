(ns web.deprecated.PerformanceTiming
  "The PerformanceTiming interface is a legacy interface kept for
  compatibility and contains properties that offer performance
  information for various events which occur during the loading
  use of the current page. You get a PerformanceTiming object describing
  page using the `window.performance.timing` property."
  (:refer-clojure :exclude []))

(defn to-json
  "Method.

  Returns a JSON object representing this PerformanceTiming object."
  [this & args]
  (apply (-> this .-toJSON) (concat [this] args)))

(defn navigation-start
  "Property.

  When the prompt for unload terminates on the previous document
  the same browsing context. If there is no previous document,
  value will be the same as PerformanceTiming.fetchStart."
  [this]
  (-> this (.-navigationStart)))

(defn set-navigation-start!
  "Property.

  When the prompt for unload terminates on the previous document
  the same browsing context. If there is no previous document,
  value will be the same as PerformanceTiming.fetchStart."
  [this val]
  (aset this "navigationStart" val))

(defn unload-event-start
  "Property.

  When the unload event has been thrown, indicating the time at
  the previous document in the window began to unload. If there
  no previous document, or if the previous document or one of the
  redirects is not of the same origin, the value returned is 0."
  [this]
  (-> this (.-unloadEventStart)))

(defn set-unload-event-start!
  "Property.

  When the unload event has been thrown, indicating the time at
  the previous document in the window began to unload. If there
  no previous document, or if the previous document or one of the
  redirects is not of the same origin, the value returned is 0."
  [this val]
  (aset this "unloadEventStart" val))

(defn unload-event-end
  "Property.

  When the unload event handler finishes. If there is no previous
  or if the previous document, or one of the needed redirects,
  not of the same origin, the value returned is 0."
  [this]
  (-> this (.-unloadEventEnd)))

(defn set-unload-event-end!
  "Property.

  When the unload event handler finishes. If there is no previous
  or if the previous document, or one of the needed redirects,
  not of the same origin, the value returned is 0."
  [this val]
  (aset this "unloadEventEnd" val))

(defn redirect-start
  "Property.

  When the first HTTP redirect starts. If there is no redirect,
  if one of the redirects is not of the same origin, the value
  is 0."
  [this]
  (-> this (.-redirectStart)))

(defn set-redirect-start!
  "Property.

  When the first HTTP redirect starts. If there is no redirect,
  if one of the redirects is not of the same origin, the value
  is 0."
  [this val]
  (aset this "redirectStart" val))

(defn redirect-end
  "Property.

  When the last HTTP redirect is completed, that is when the last
  of the HTTP response has been received. If there is no redirect,
  if one of the redirects is not of the same origin, the value
  is 0."
  [this]
  (-> this (.-redirectEnd)))

(defn set-redirect-end!
  "Property.

  When the last HTTP redirect is completed, that is when the last
  of the HTTP response has been received. If there is no redirect,
  if one of the redirects is not of the same origin, the value
  is 0."
  [this val]
  (aset this "redirectEnd" val))

(defn fetch-start
  "Property.

  When the browser is ready to fetch the document using an HTTP
  This moment is before the check to any application cache."
  [this]
  (-> this (.-fetchStart)))

(defn set-fetch-start!
  "Property.

  When the browser is ready to fetch the document using an HTTP
  This moment is before the check to any application cache."
  [this val]
  (aset this "fetchStart" val))

(defn domain-lookup-start
  "Property.

  When the domain lookup starts. If a persistent connection is
  or the information is stored in a cache or a local resource,
  value will be the same as PerformanceTiming.fetchStart."
  [this]
  (-> this (.-domainLookupStart)))

(defn set-domain-lookup-start!
  "Property.

  When the domain lookup starts. If a persistent connection is
  or the information is stored in a cache or a local resource,
  value will be the same as PerformanceTiming.fetchStart."
  [this val]
  (aset this "domainLookupStart" val))

(defn domain-lookup-end
  "Property.

  When the domain lookup is finished. If a persistent connection
  used, or the information is stored in a cache or a local resource,
  value will be the same as PerformanceTiming.fetchStart."
  [this]
  (-> this (.-domainLookupEnd)))

(defn set-domain-lookup-end!
  "Property.

  When the domain lookup is finished. If a persistent connection
  used, or the information is stored in a cache or a local resource,
  value will be the same as PerformanceTiming.fetchStart."
  [this val]
  (aset this "domainLookupEnd" val))

(defn connect-start
  "Property.

  When the request to open a connection is sent to the network.
  the transport layer reports an error and the connection establishment
  started again, the last connection establishment start time is
  If a persistent connection is used, the value will be the same
  PerformanceTiming.fetchStart."
  [this]
  (-> this (.-connectStart)))

(defn set-connect-start!
  "Property.

  When the request to open a connection is sent to the network.
  the transport layer reports an error and the connection establishment
  started again, the last connection establishment start time is
  If a persistent connection is used, the value will be the same
  PerformanceTiming.fetchStart."
  [this val]
  (aset this "connectStart" val))

(defn connect-end
  "Property.

  When the connection is opened network. If the transport layer
  an error and the connection establishment is started again, the
  connection establishment end time is given. If a persistent connection
  used, the value will be the same as PerformanceTiming.fetchStart.
  connection is considered as opened when all secure connection
  or SOCKS authentication, is terminated."
  [this]
  (-> this (.-connectEnd)))

(defn set-connect-end!
  "Property.

  When the connection is opened network. If the transport layer
  an error and the connection establishment is started again, the
  connection establishment end time is given. If a persistent connection
  used, the value will be the same as PerformanceTiming.fetchStart.
  connection is considered as opened when all secure connection
  or SOCKS authentication, is terminated."
  [this val]
  (aset this "connectEnd" val))

(defn secure-connection-start
  "Property.

  When the secure connection handshake starts. If no such connection
  requested, it returns 0."
  [this]
  (-> this (.-secureConnectionStart)))

(defn set-secure-connection-start!
  "Property.

  When the secure connection handshake starts. If no such connection
  requested, it returns 0."
  [this val]
  (aset this "secureConnectionStart" val))

(defn request-start
  "Property.

  When the browser sent the request to obtain the actual document,
  the server or from a cache. If the transport layer fails after
  start of the request and the connection is reopened, this property
  be set to the time corresponding to the new request."
  [this]
  (-> this (.-requestStart)))

(defn set-request-start!
  "Property.

  When the browser sent the request to obtain the actual document,
  the server or from a cache. If the transport layer fails after
  start of the request and the connection is reopened, this property
  be set to the time corresponding to the new request."
  [this val]
  (aset this "requestStart" val))

(defn response-start
  "Property.

  When the browser received the first byte of the response, from
  server from a cache, or from a local resource."
  [this]
  (-> this (.-responseStart)))

(defn set-response-start!
  "Property.

  When the browser received the first byte of the response, from
  server from a cache, or from a local resource."
  [this val]
  (aset this "responseStart" val))

(defn response-end
  "Property.

  When the browser received the last byte of the response, or when
  connection is closed if this happened first, from the server,
  cache, or from a local resource."
  [this]
  (-> this (.-responseEnd)))

(defn set-response-end!
  "Property.

  When the browser received the last byte of the response, or when
  connection is closed if this happened first, from the server,
  cache, or from a local resource."
  [this val]
  (aset this "responseEnd" val))

(defn dom-loading
  "Property.

  When the parser started its work, that is when its Document.readyState
  to 'loading' and the corresponding readystatechange event is"
  [this]
  (-> this (.-domLoading)))

(defn set-dom-loading!
  "Property.

  When the parser started its work, that is when its Document.readyState
  to 'loading' and the corresponding readystatechange event is"
  [this val]
  (aset this "domLoading" val))

(defn dom-interactive
  "Property.

  When the parser finished its work on the main document, that
  when its Document.readyState changes to 'interactive' and the
  readystatechange event is thrown."
  [this]
  (-> this (.-domInteractive)))

(defn set-dom-interactive!
  "Property.

  When the parser finished its work on the main document, that
  when its Document.readyState changes to 'interactive' and the
  readystatechange event is thrown."
  [this val]
  (aset this "domInteractive" val))

(defn dom-content-loaded-event-start
  "Property.

  Right before the parser sent the DOMContentLoaded event, that
  right after all the scripts that need to be executed right after
  have been executed."
  [this]
  (-> this (.-domContentLoadedEventStart)))

(defn set-dom-content-loaded-event-start!
  "Property.

  Right before the parser sent the DOMContentLoaded event, that
  right after all the scripts that need to be executed right after
  have been executed."
  [this val]
  (aset this "domContentLoadedEventStart" val))

(defn dom-content-loaded-event-end
  "Property.

  Right after all the scripts that need to be executed as soon
  possible, in order or not, have been executed."
  [this]
  (-> this (.-domContentLoadedEventEnd)))

(defn set-dom-content-loaded-event-end!
  "Property.

  Right after all the scripts that need to be executed as soon
  possible, in order or not, have been executed."
  [this val]
  (aset this "domContentLoadedEventEnd" val))

(defn dom-complete
  "Property.

  When the parser finished its work on the main document, that
  when its Document.readyState changes to 'complete' and the corresponding
  event is thrown."
  [this]
  (-> this (.-domComplete)))

(defn set-dom-complete!
  "Property.

  When the parser finished its work on the main document, that
  when its Document.readyState changes to 'complete' and the corresponding
  event is thrown."
  [this val]
  (aset this "domComplete" val))

(defn load-event-start
  "Property.

  When the load event was sent for the current document. If this
  has not yet been sent, it returns 0."
  [this]
  (-> this (.-loadEventStart)))

(defn set-load-event-start!
  "Property.

  When the load event was sent for the current document. If this
  has not yet been sent, it returns 0."
  [this val]
  (aset this "loadEventStart" val))

(defn load-event-end
  "Property.

  When the load event handler terminated, that is when the load
  is completed. If this event has not yet been sent, or is not
  completed, it returns 0."
  [this]
  (-> this (.-loadEventEnd)))

(defn set-load-event-end!
  "Property.

  When the load event handler terminated, that is when the load
  is completed. If this event has not yet been sent, or is not
  completed, it returns 0."
  [this val]
  (aset this "loadEventEnd" val))

