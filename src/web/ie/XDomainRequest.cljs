(ns web.ie.XDomainRequest
  "XDomainRequest is an implementation of HTTP access control (CORS)
  worked in Internet Explorer 8 and 9. It was removed in Internet
  10 in favor of using XMLHttpRequest with proper CORS; if you
  targeting Internet Explorer 10 or later, or wish to support any
  browser, you need to use standard HTTP access control."
  (:refer-clojure :exclude []))

(defn open
  "Method.

  Opens an `web.ie.XDomainRequest` which is configured to use a
  method (GET/POST) and URL.

  `xdr.open(method, url);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/open`"
  [this method url]
  (-> this (.open method url)))

(defn abort
  "Method.

  Aborts an `web.ie.XDomainRequest`.

  `xdr.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/abort`"
  [this ]
  (-> this (.abort)))

(defn send
  "Method.

  Sends an `web.ie.XDomainRequest` which has previously been opened
  `XDomainRequest.open()`.

  `xdr.send(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/send`"
  [this data]
  (-> this (.send data)))

(defn timeout
  "Property.

  Gets or sets the amount of time in milliseconds until an `web.ie.XDomainRequest`
  out.

  `xdr.timeout = milliseconds;

  The default value is 0.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/timeout`"
  [this]
  (-> this (.timeout)))

(defn set-timeout!
  "Property.

  Gets or sets the amount of time in milliseconds until an `web.ie.XDomainRequest`
  out.

  `xdr.timeout = milliseconds;

  The default value is 0.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/timeout`"
  [this val]
  (aset this "timeout" val))

(defn onerror
  "Property.

  An event handler which is called when an `web.ie.XDomainRequest`
  an error.

  `xdr.onerror = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  An event handler which is called when an `web.ie.XDomainRequest`
  an error.

  `xdr.onerror = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onload
  "Property.

  An event handler for when an `web.ie.XDomainRequest` has finished
  the response from the server. You can find the entire server
  in the `XDomainRequest.responseText` property.

  `xdr.onload = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onload`"
  [this]
  (-> this (.onload)))

(defn set-onload!
  "Property.

  An event handler for when an `web.ie.XDomainRequest` has finished
  the response from the server. You can find the entire server
  in the `XDomainRequest.responseText` property.

  `xdr.onload = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onload`"
  [this val]
  (aset this "onload" val))

(defn onprogress
  "Property.

  This method is called periodically as an event handler for progress
  on `web.ie.XDomainRequest`s, so that code can monitor progress
  loading content.

  `xdr.onprogress = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onprogress`"
  [this]
  (-> this (.onprogress)))

(defn set-onprogress!
  "Property.

  This method is called periodically as an event handler for progress
  on `web.ie.XDomainRequest`s, so that code can monitor progress
  loading content.

  `xdr.onprogress = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onprogress`"
  [this val]
  (aset this "onprogress" val))

(defn ontimeout
  "Property.

  An event handler which is called when a pending `web.ie.XDomainRequest`
  out.

  `xdr.ontimeout = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/ontimeout`"
  [this]
  (-> this (.ontimeout)))

(defn set-ontimeout!
  "Property.

  An event handler which is called when a pending `web.ie.XDomainRequest`
  out.

  `xdr.ontimeout = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/ontimeout`"
  [this val]
  (aset this "ontimeout" val))

(defn response-text
  "Property.

  Returns the response body of an `web.ie.XDomainRequest` as a

  `var response = xdr.responseText;

  This sets response to contain the response body of the request, as a string.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/responseText`"
  [this]
  (-> this (.responseText)))

(defn set-response-text!
  "Property.

  Returns the response body of an `web.ie.XDomainRequest` as a

  `var response = xdr.responseText;

  This sets response to contain the response body of the request, as a string.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/responseText`"
  [this val]
  (aset this "responseText" val))

