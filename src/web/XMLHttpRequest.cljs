(ns web.XMLHttpRequest
  "Use XMLHttpRequest (XHR) objects to interact with servers. You
  retrieve data from a URL without having to do a full page refresh.
  enables a Web page to update just part of a page without disrupting
  the user is doing."
  (:refer-clojure :exclude [load]))

(def constructor
  "Constructor.

  The XMLHttpRequest() constructor creates a new `web.XMLHttpRequest`.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/XMLHttpRequest`"
  js/XMLHttpRequest)

(defn abort
  "Method.

  The XMLHttpRequest.abort() method aborts the request if it has
  been sent. When a request is aborted, its `readyState` is changed
  `XMLHttpRequest.UNSENT` (0) and the request's `status` code is
  to 0.

  `XMLHttpRequest.abort()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort`"
  [this ]
  (-> this (.abort)))

(defn get-all-response-headers
  "Method.

  The `web.XMLHttpRequest` method getAllResponseHeaders() returns
  the response headers, separated by CRLF, as a string, or returns
  if no response has been received.

  `var headers = XMLHttpRequest.getAllResponseHeaders();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders`"
  [this ]
  (-> this (.getAllResponseHeaders)))

(defn get-response-header
  "Method.

  The `web.XMLHttpRequest` method getResponseHeader() returns the
  containing the text of a particular header's value.

  `var myHeader = XMLHttpRequest.getResponseHeader(headerName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getResponseHeader`"
  [this header-name]
  (-> this (.getResponseHeader header-name)))

(defn open
  "Method.

  The `web.XMLHttpRequest` method open() initializes a newly-created
  or re-initializes an existing one.

  `XMLHttpRequest.open(method, url[, async[, user[, password]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open`"
  [this & args]
  (-> this .-open (.apply this (clj->js args))))

(defn override-mime-type
  "Method.

  The `web.XMLHttpRequest` method overrideMimeType() specifies
  MIME type other than the one provided by the server to be used
  when interpreting the data being transferred in a request.

  `XMLHttpRequest.overrideMimeType(mimeType)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/overrideMimeType`"
  [this mime-type]
  (-> this (.overrideMimeType mime-type)))

(defn send
  "Method.

  The `web.XMLHttpRequest` method send() sends the request to the

  `XMLHttpRequest.send(body)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send`"
  [this body]
  (-> this (.send body)))

(defn set-request-header
  "Method.

  The `web.XMLHttpRequest` method setRequestHeader() sets the value
  an HTTP request header. When using setRequestHeader(), you must
  it after calling `open()`, but before calling `send()`. If this
  is called several times with the same header, the values are
  into one single request header.

  `XMLHttpRequest.setRequestHeader(header, value)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader`"
  [this header value]
  (-> this (.setRequestHeader header value)))

(defn init
  "Method.

  Initializes the object for use from C++ code."
  [this & args]
  (-> this .-init (.apply this (clj->js args))))

(defn open-request
  "Method.

  This Mozilla-specific method is available only from within privileged
  and is only called from a C++ context in order to initialize
  XMLHttpRequest.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/openRequest`"
  [this & args]
  (-> this .-openRequest (.apply this (clj->js args))))

(defn send-as-binary
  "Method.

  The obsolete `web.XMLHttpRequest` method sendAsBinary() is a
  of the `send()` method that sends binary data. The send() method
  supports binary data and should now be used instead.

  `XMLHttpRequest.sendAsBinary(binaryString);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/sendAsBinary`"
  [this binary-string]
  (-> this (.sendAsBinary binary-string)))

(defn onreadystatechange
  "Property.

  An `EventHandler` that is called whenever the readyState attribute
  The callback is called from the user interface thread. The XMLHttpRequest.onreadystatechange
  contains the event handler to be called when the readystatechange
  is fired, that is every time the `readyState` property of the
  changes.

  `XMLHttpRequest.onreadystatechange = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`"
  [this]
  (-> this (.-onreadystatechange)))

(defn set-onreadystatechange!
  "Property.

  An `EventHandler` that is called whenever the readyState attribute
  The callback is called from the user interface thread. The XMLHttpRequest.onreadystatechange
  contains the event handler to be called when the readystatechange
  is fired, that is every time the `readyState` property of the
  changes.

  `XMLHttpRequest.onreadystatechange = callback;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange`"
  [this val]
  (aset this "onreadystatechange" val))

(defn ready-state
  "Property.

  The XMLHttpRequest.readyState property returns the state an XMLHttpRequest
  is in. An XHR client exists in one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState`"
  [this]
  (-> this (.-readyState)))

(defn set-ready-state!
  "Property.

  The XMLHttpRequest.readyState property returns the state an XMLHttpRequest
  is in. An XHR client exists in one of the following states:

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState`"
  [this val]
  (aset this "readyState" val))

(defn response
  "Property.

  The `web.XMLHttpRequest` response property returns the response's
  content as an `js.ArrayBuffer`, `web.files.Blob`, `web.Document`,
  `js.Object`, or `web.dom.DOMString`, depending on the value of
  request's `responseType` property.

  `var body = XMLHttpRequest.response;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response`"
  [this]
  (-> this (.-response)))

(defn response-text
  "Property.

  The read-only `web.XMLHttpRequest` property responseText returns
  text received from a server following a request being sent.

  `var resultText = XMLHttpRequest.responseText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText`"
  [this]
  (-> this (.-responseText)))

(defn response-type
  "Property.

  The `web.XMLHttpRequest` property responseType is an enumerated
  value specifying the type of data contained in the response.

  `var type = XMLHttpRequest.responseType;

  XMLHttpRequest.responseType = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType`"
  [this]
  (-> this (.-responseType)))

(defn set-response-type!
  "Property.

  The `web.XMLHttpRequest` property responseType is an enumerated
  value specifying the type of data contained in the response.

  `var type = XMLHttpRequest.responseType;

  XMLHttpRequest.responseType = type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType`"
  [this val]
  (aset this "responseType" val))

(defn response-url
  "Property.

  The read-only XMLHttpRequest.responseURL property returns the
  URL of the response or the empty string if the URL is null. If
  URL is returned, any URL fragment present in the URL will be
  away. The value of responseURL will be the final URL obtained
  any redirects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseURL`"
  [this]
  (-> this (.-responseURL)))

(defn response-xml
  "Property.

  The XMLHttpRequest.responseXML read-only property returns a `web.Document`
  the HTML or XML retrieved by the request; or null if the request
  unsuccessful, has not yet been sent, or if the data can't be
  as XML or HTML.

  `var data = XMLHttpRequest.responseXML;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML`"
  [this]
  (-> this (.-responseXML)))

(defn status
  "Property.

  The read-only XMLHttpRequest.status property returns the numerical
  status code of the XMLHttpRequest's response.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status`"
  [this]
  (-> this (.-status)))

(defn set-status!
  "Property.

  The read-only XMLHttpRequest.status property returns the numerical
  status code of the XMLHttpRequest's response.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status`"
  [this val]
  (aset this "status" val))

(defn status-text
  "Property.

  The read-only XMLHttpRequest.statusText property returns a DOMString
  the response's status message as returned by the HTTP server.
  XMLHTTPRequest.status which indicates a numerical status code,
  property contains the text of the response status, such as \\\"OK\\\"
  \\\"Not Found\\\". If the request's readyState is in UNSENT or OPENED
  the value of statusText will be an empty string.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/statusText`"
  [this]
  (-> this (.-statusText)))

(defn timeout
  "Property.

  The XMLHttpRequest.timeout property is an unsigned long representing
  number of milliseconds a request can take before automatically
  terminated. The default value is 0, which means there is no timeout.
  shouldn't be used for synchronous XMLHttpRequests requests used
  a document environment or it will throw an InvalidAccessError
  When a timeout happens, a timeout event is fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`"
  [this]
  (-> this (.-timeout)))

(defn set-timeout!
  "Property.

  The XMLHttpRequest.timeout property is an unsigned long representing
  number of milliseconds a request can take before automatically
  terminated. The default value is 0, which means there is no timeout.
  shouldn't be used for synchronous XMLHttpRequests requests used
  a document environment or it will throw an InvalidAccessError
  When a timeout happens, a timeout event is fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout`"
  [this val]
  (aset this "timeout" val))

(defn ontimeout
  "Property.

  Is an EventHandler that is called whenever the request times"
  [this]
  (-> this (.-ontimeout)))

(defn set-ontimeout!
  "Property.

  Is an EventHandler that is called whenever the request times"
  [this val]
  (aset this "ontimeout" val))

(defn upload
  "Property.

  The `web.XMLHttpRequest` upload property returns an `XMLHttpRequestUpload`
  that can be observed to monitor an upload's progress.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload`"
  [this]
  (-> this (.-upload)))

(defn with-credentials
  "Property.

  The XMLHttpRequest.withCredentials property is a `js.Boolean`
  indicates whether or not cross-site Access-Control requests should
  made using credentials such as cookies, authorization headers
  TLS client certificates. Setting withCredentials has no effect
  same-site requests.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials`"
  [this]
  (-> this (.-withCredentials)))

(defn set-with-credentials!
  "Property.

  The XMLHttpRequest.withCredentials property is a `js.Boolean`
  indicates whether or not cross-site Access-Control requests should
  made using credentials such as cookies, authorization headers
  TLS client certificates. Setting withCredentials has no effect
  same-site requests.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials`"
  [this val]
  (aset this "withCredentials" val))

(defn channel
  "Property.

  XMLHttpRequest.channel is an nsIChannel that used by the object
  performing the request. This is null if the channel hasn't been
  yet. In the case of a multi-part request, this is the initial
  not the different parts in the multi-part request. Requires elevated
  to access.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`"
  [this]
  (-> this (.-channel)))

(defn set-channel!
  "Property.

  XMLHttpRequest.channel is an nsIChannel that used by the object
  performing the request. This is null if the channel hasn't been
  yet. In the case of a multi-part request, this is the initial
  not the different parts in the multi-part request. Requires elevated
  to access.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/channel`"
  [this val]
  (aset this "channel" val))

(defn moz-anon
  "Property.

  XMLHttpRequest.mozAnon is a boolean. If true, the request will
  sent without cookies or authentication headers.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozAnon`"
  [this]
  (-> this (.-mozAnon)))

(defn set-moz-anon!
  "Property.

  XMLHttpRequest.mozAnon is a boolean. If true, the request will
  sent without cookies or authentication headers.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozAnon`"
  [this val]
  (aset this "mozAnon" val))

(defn moz-system
  "Property.

  mozSystem is a boolean. If true, the same origin policy is not
  on the request.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozSystem`"
  [this]
  (-> this (.-mozSystem)))

(defn set-moz-system!
  "Property.

  mozSystem is a boolean. If true, the same origin policy is not
  on the request.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozSystem`"
  [this val]
  (aset this "mozSystem" val))

(defn moz-background-request
  "Property.

  XMLHttpRequest.mozBackgroundRequest is a Boolean, indicating
  the object represents a background service request.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozBackgroundRequest`"
  [this]
  (-> this (.-mozBackgroundRequest)))

(defn set-moz-background-request!
  "Property.

  XMLHttpRequest.mozBackgroundRequest is a Boolean, indicating
  the object represents a background service request.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozBackgroundRequest`"
  [this val]
  (aset this "mozBackgroundRequest" val))

(defn moz-response-array-buffer
  "Property.

  Is an ArrayBuffer response to the request, written as a JavaScript
  array.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozResponseArrayBuffer`"
  [this]
  (-> this (.-mozResponseArrayBuffer)))

(defn set-moz-response-array-buffer!
  "Property.

  Is an ArrayBuffer response to the request, written as a JavaScript
  array.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/mozResponseArrayBuffer`"
  [this val]
  (aset this "mozResponseArrayBuffer" val))

(defn multipart
  "Property.

  This boolean indicates if the response is expected to be a stream
  possibly multiple XML documents.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/multipart`"
  [this]
  (-> this (.-multipart)))

(defn set-multipart!
  "Property.

  This boolean indicates if the response is expected to be a stream
  possibly multiple XML documents.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/multipart`"
  [this val]
  (aset this "multipart" val))

