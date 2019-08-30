(ns web.fetch.Response
  "The Response interface of the Fetch API represents the response
  a request."
  (:refer-clojure :exclude [type clone]))

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
  (-> this .-arrayBuffer (.apply this (clj->js args))))

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
  (-> this .-blob (.apply this (clj->js args))))

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
  (-> this .-formData (.apply this (clj->js args))))

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
  (-> this .-json (.apply this (clj->js args))))

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
  (-> this .-text (.apply this (clj->js args))))

(defn headers
  "Property.

  [Read Only]

  The headers read-only property of the `web.fetch.Response` interface
  the `web.fetch.Headers` object associated with the response.

  `var myHeaders = response.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/headers`"
  [this]
  (-> this (.-headers)))

(defn ok
  "Property.

  [Read Only]

  The ok read-only property of the `web.fetch.Response` interface
  a Boolean stating whether the response was successful (status
  the range 200-299) or not.

  `var myOK = response.ok;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/ok`"
  [this]
  (-> this (.-ok)))

(defn redirected
  "Property.

  [Read Only]

  The read-only redirected property of the `web.fetch.Response`
  indicates whether or not the response is the result of a request
  made which was redirected.

  `var isRedirected = Response.redirected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/redirected`"
  [this]
  (-> this (.-redirected)))

(defn status
  "Property.

  [Read Only]

  The status read-only property of the `web.fetch.Response` interface
  the status code of the response (e.g., 200 for a success).

  `var myStatus = response.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/status`"
  [this]
  (-> this (.-status)))

(defn status-text
  "Property.

  [Read Only]

  The statusText read-only property of the `web.fetch.Response`
  contains the status message corresponding to the status code
  OK for 200).

  `var myStatusText = response.statusText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText`"
  [this]
  (-> this (.-statusText)))

(defn type
  "Property.

  [Read Only]

  The type read-only property of the `web.fetch.Response` interface
  the type of the response. It can be one of the following:

  `var myType = response.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/type`"
  [this]
  (-> this (.-type)))

(defn url
  "Property.

  [Read Only]

  The url read-only property of the `web.fetch.Response` interface
  the URL of the response. The value of the url property will be
  final URL obtained after any redirects.

  `var myURL = response.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/url`"
  [this]
  (-> this (.-url)))

(defn use-final-url
  "Property.

  [Obsolute]

  The useFinalURL property of the `web.fetch.Response` interface
  a boolean stating whether this is the final URL of the response.

  `var isfinalURL = Response.useFinalURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`"
  [this]
  (-> this (.-useFinalURL)))

(defn set-use-final-url!
  "Property.

  [Obsolute]

  The useFinalURL property of the `web.fetch.Response` interface
  a boolean stating whether this is the final URL of the response.

  `var isfinalURL = Response.useFinalURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`"
  [this val]
  (aset this "useFinalURL" val))

(defn body
  "Property.

  [Read Only]
  [Experimental]

  The body read-only property of the `web.fetch.Body` mixin is
  simple getter used to expose a `web.files.ReadableStream` of
  body contents.

  `var stream = responseInstance.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`"
  [this]
  (-> this (.-body)))

(defn body-used
  "Property.

  [Read Only]

  The bodyUsed read-only property of the `web.fetch.Body` mixin
  a `js.Boolean` that indicates whether the body has been read

  `var myBodyUsed = response.bodyUsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`"
  [this]
  (-> this (.-bodyUsed)))

