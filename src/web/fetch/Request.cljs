(ns web.fetch.Request
  "The Request interface of the Fetch API represents a resource"
  (:refer-clojure :exclude [clone]))

(defn clone
  "Method.

  The clone() method of the `web.fetch.Request` interface creates
  copy of the current Request object.

  `var newRequest = request.clone();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/clone`"
  [this ]
  (-> this (.clone)))

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

(defn cache
  "Property.

  [Read Only]

  The cache read-only property of the `web.fetch.Request` interface
  the cache mode of the request. It controls how the request will
  with the browser's HTTP cache.

  `var currentCacheMode = request.cache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/cache`"
  [this]
  (-> this (.-cache)))

(defn context
  "Property.

  [Read Only]
  [Deprecated]

  The deprecated context read-only property of the `web.fetch.Request`
  contains the context of the Request (e.g., audio, image, iframe).

  `var myContext = request.context;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/context`"
  [this]
  (-> this (.-context)))

(defn credentials
  "Property.

  [Read Only]

  The credentials read-only property of the `web.fetch.Request`
  indicates whether the user agent should send cookies from the
  domain in the case of cross-origin requests.

  `var myCred = request.credentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials`"
  [this]
  (-> this (.-credentials)))

(defn destination
  "Property.

  [Read Only]

  The destination read-only property of the `web.fetch.Request`
  returns a string describing the type of content being requested.

  `var destination = request.destination;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/destination`"
  [this]
  (-> this (.-destination)))

(defn headers
  "Property.

  [Read Only]

  The headers read-only property of the `web.fetch.Request` interface
  the `web.fetch.Headers` object associated with the request.

  `var myHeaders = request.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/headers`"
  [this]
  (-> this (.-headers)))

(defn integrity
  "Property.

  [Read Only]

  The integrity read-only property of the `web.fetch.Request` interface
  the subresource integrity value of the request.

  `var myIntegrity = request.integrity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/integrity`"
  [this]
  (-> this (.-integrity)))

(defn method
  "Property.

  [Read Only]

  The method read-only property of the `web.fetch.Request` interface
  the request's method (GET, POST, etc.)

  `var myMethod = request.method;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/method`"
  [this]
  (-> this (.-method)))

(defn mode
  "Property.

  [Read Only]

  The mode read-only property of the `web.fetch.Request` interface
  the mode of the request (e.g., cors, no-cors, same-origin, or
  This is used to determine if cross-origin requests lead to valid
  and which properties of the response are readable.

  `var myMode = request.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/mode`"
  [this]
  (-> this (.-mode)))

(defn redirect
  "Property.

  [Read Only]

  The redirect read-only property of the `web.fetch.Request` interface
  the mode for how redirects are handled.

  `var myRedirect = request.redirect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect`"
  [this]
  (-> this (.-redirect)))

(defn referrer
  "Property.

  [Read Only]

  The referrer read-only property of the `web.fetch.Request` interface
  set by the user agent to be the referrer of the Request. (e.g.,
  no-referrer, or a URL.)

  `var myReferrer = request.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrer`"
  [this]
  (-> this (.-referrer)))

(defn referrer-policy
  "Property.

  [Read Only]

  The referrerPolicy read-only property of the `web.fetch.Request`
  returns the referrer policy, which governs what referrer information,
  in the `Referer` header, should be included with the request.

  `var myReferrerPolicy = request.referrerPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn url
  "Property.

  [Read Only]

  The url read-only property of the `web.fetch.Request` interface
  the URL of the request.

  `var myURL = request.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/url`"
  [this]
  (-> this (.-url)))

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

