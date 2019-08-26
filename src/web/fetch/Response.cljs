(ns web.fetch.Response
  "The Response interface of the Fetch API represents the response
  a request."
  (:refer-clojure :exclude [type clone]))

(def constructor
  "Constructor.

  The Response() constructor creates a new `web.fetch.Response` object.

  body Optional
  An object defining a body for the response. This can be null, or one of:

  `web.files.Blob`
  `web.typed.BufferSource`
  `web.FormData`
  `web.files.ReadableStream`
  `web.url.URLSearchParams`
  `web.USVString`


  init Optional
  An options object containing any custom settings that you want to apply to the response. The possible options are:

  status: The status code for the reponse, e.g., 200.
  statusText: The status message associated with the status code, e.g., OK.
  headers: Any headers you want to add to your response, contained within a `web.fetch.Headers` object or object literal of `web.ByteString` key/value pairs (see HTTP headers for a reference).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/Response`"
  js/Response)

(defn clone
  "Method.

  The clone() method of the `web.fetch.Response` interface creates
  clone of a response object, identical in every way, but stored
  a different variable.

  `var response2 = response1.clone();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/clone`"
  [this ]
  (-> this (.clone)))

(defn error
  "Method.

  The error() method of the `web.fetch.Response` interface returns
  new Response object associated with a network error.

  `var errorResponse = Response.error();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/error`"
  [this ]
  (-> this (.error)))

(defn redirect
  "Method.

  The redirect() method of the `web.fetch.Response` interface returns
  Response resulting in a redirect to the specified URL.

  `var response = Response.redirect(url, status);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect`"
  [this url status]
  (-> this (.redirect url status)))

(defn array-buffer
  "Method.

  The arrayBuffer() method of the `web.fetch.Body` mixin takes
  `web.fetch.Response` stream and reads it to completion. It returns
  promise that resolves with an `js.ArrayBuffer`.

  `response.arrayBuffer().then(function(buffer) {
  // do something with buffer
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/arrayBuffer`"
  [this & args]
  (apply (-> this .-arrayBuffer) (concat [this] args)))

(defn blob
  "Method.

  The blob() method of the `web.fetch.Body` mixin takes a `web.fetch.Response`
  and reads it to completion. It returns a promise that resolves
  a `web.files.Blob`.

  `response.blob().then(function(myBlob) {
  // do something with myBlob
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/blob`"
  [this & args]
  (apply (-> this .-blob) (concat [this] args)))

(defn form-data
  "Method.

  The formData() method of the `web.fetch.Body` mixin takes a `web.fetch.Response`
  and reads it to completion. It returns a promise that resolves
  a `web.FormData` object.

  `response.formData()
  .then(function(formdata) {
  // do something with your formdata
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/formData`"
  [this & args]
  (apply (-> this .-formData) (concat [this] args)))

(defn json
  "Method.

  The json() method of the `web.fetch.Body` mixin takes a `web.fetch.Response`
  and reads it to completion. It returns a promise that resolves
  the result of parsing the body text as `js.JSON`.

  `response.json().then(data => {
  // do something with your data
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/json`"
  [this & args]
  (apply (-> this .-json) (concat [this] args)))

(defn text
  "Method.

  The text() method of the `web.fetch.Body` mixin takes a `web.fetch.Response`
  and reads it to completion. It returns a promise that resolves
  a `web.USVString` object (text). The response is always decoded
  UTF-8.

  `response.text().then(function (text) {
  // do something with the text response
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/text`"
  [this & args]
  (apply (-> this .-text) (concat [this] args)))

(defn headers
  "Property.

  The headers read-only property of the `web.fetch.Response` interface
  the `web.fetch.Headers` object associated with the response.

  `var myHeaders = response.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/headers`"
  [this]
  (-> this (.-headers)))

(defn set-headers!
  "Property.

  The headers read-only property of the `web.fetch.Response` interface
  the `web.fetch.Headers` object associated with the response.

  `var myHeaders = response.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/headers`"
  [this val]
  (aset this "headers" val))

(defn ok
  "Property.

  The ok read-only property of the `web.fetch.Response` interface
  a Boolean stating whether the response was successful (status
  the range 200-299) or not.

  `var myOK = response.ok;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/ok`"
  [this]
  (-> this (.-ok)))

(defn set-ok!
  "Property.

  The ok read-only property of the `web.fetch.Response` interface
  a Boolean stating whether the response was successful (status
  the range 200-299) or not.

  `var myOK = response.ok;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/ok`"
  [this val]
  (aset this "ok" val))

(defn redirected
  "Property.

  The read-only redirected property of the `web.fetch.Response`
  indicates whether or not the response is the result of a request
  made which was redirected.

  `var isRedirected = Response.redirected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/redirected`"
  [this]
  (-> this (.-redirected)))

(defn status
  "Property.

  The status read-only property of the `web.fetch.Response` interface
  the status code of the response (e.g., 200 for a success).

  `var myStatus = response.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/status`"
  [this]
  (-> this (.-status)))

(defn set-status!
  "Property.

  The status read-only property of the `web.fetch.Response` interface
  the status code of the response (e.g., 200 for a success).

  `var myStatus = response.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/status`"
  [this val]
  (aset this "status" val))

(defn status-text
  "Property.

  The statusText read-only property of the `web.fetch.Response`
  contains the status message corresponding to the status code
  OK for 200).

  `var myStatusText = response.statusText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText`"
  [this]
  (-> this (.-statusText)))

(defn set-status-text!
  "Property.

  The statusText read-only property of the `web.fetch.Response`
  contains the status message corresponding to the status code
  OK for 200).

  `var myStatusText = response.statusText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText`"
  [this val]
  (aset this "statusText" val))

(defn type
  "Property.

  The type read-only property of the `web.fetch.Response` interface
  the type of the response. It can be one of the following:

  `var myType = response.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.fetch.Response` interface
  the type of the response. It can be one of the following:

  `var myType = response.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/type`"
  [this val]
  (aset this "type" val))

(defn url
  "Property.

  The url read-only property of the `web.fetch.Response` interface
  the URL of the response. The value of the url property will be
  final URL obtained after any redirects.

  `var myURL = response.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/url`"
  [this]
  (-> this (.-url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.fetch.Response` interface
  the URL of the response. The value of the url property will be
  final URL obtained after any redirects.

  `var myURL = response.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/url`"
  [this val]
  (aset this "url" val))

(defn use-final-url
  "Property.

  The useFinalURL property of the `web.fetch.Response` interface
  a boolean stating whether this is the final URL of the response.

  `var isfinalURL = Response.useFinalURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`"
  [this]
  (-> this (.-useFinalURL)))

(defn set-use-final-url!
  "Property.

  The useFinalURL property of the `web.fetch.Response` interface
  a boolean stating whether this is the final URL of the response.

  `var isfinalURL = Response.useFinalURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`"
  [this val]
  (aset this "useFinalURL" val))

(defn body
  "Property.

  The body read-only property of the `web.fetch.Body` mixin is
  simple getter used to expose a `web.files.ReadableStream` of
  body contents.

  `var stream = responseInstance.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`"
  [this]
  (-> this (.-body)))

(defn set-body!
  "Property.

  The body read-only property of the `web.fetch.Body` mixin is
  simple getter used to expose a `web.files.ReadableStream` of
  body contents.

  `var stream = responseInstance.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`"
  [this val]
  (aset this "body" val))

(defn body-used
  "Property.

  The bodyUsed read-only property of the `web.fetch.Body` mixin
  a `js.Boolean` that indicates whether the body has been read

  `var myBodyUsed = response.bodyUsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`"
  [this]
  (-> this (.-bodyUsed)))

(defn set-body-used!
  "Property.

  The bodyUsed read-only property of the `web.fetch.Body` mixin
  a `js.Boolean` that indicates whether the body has been read

  `var myBodyUsed = response.bodyUsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`"
  [this val]
  (aset this "bodyUsed" val))

