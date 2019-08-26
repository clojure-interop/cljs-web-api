(ns web.fetch.Request
  "The Request interface of the Fetch API represents a resource"
  (:refer-clojure :exclude [clone]))

(def constructor
  "Constructor.

  The Request() constructor creates a new `web.fetch.Request` object.

  input
  Defines the resource that you wish to fetch. This can either be:

  A `web.USVString` containing the direct URL of the resource you want to fetch.
  A `web.fetch.Request` object, effectively creating a copy. Note the following behavioural updates to retain security while making the constructor less likely to throw exceptions:

  If this object exists on another origin to the constructor call, the `Request.referrer` is stripped out.
  If this object has a `Request.mode` of navigate, the mode value is converted to same-origin.




  init Optional
  An options object containing any custom settings that you want to apply to the request. The possible options are:

  method: The request method, e.g., GET, POST.
  headers: Any headers you want to add to your request, contained within a `web.fetch.Headers` object or an object literal with `web.ByteString` values.
  body: Any body that you want to add to your request: this can be a `web.files.Blob`, `web.typed.BufferSource`, `web.FormData`, `web.url.URLSearchParams`, `web.USVString`, or `web.files.ReadableStream` object. Note that a request using the GET or HEAD method cannot have a body.
  mode: The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors. In Chrome the default is no-cors before Chrome 47 and same-origin starting with Chrome 47.
  credentials: The request credentials you want to use for the request: omit, same-origin, or include. The default is omit. In Chrome the default is same-origin before Chrome 47 and include starting with Chrome 47.
  cache: The cache mode you want to use for the request.
  redirect: The redirect mode to use: follow, error, or manual. In Chrome the default is follow (before Chrome 47 it defaulted to manual).
  referrer: A `web.USVString` specifying no-referrer, client, or a URL. The default is client.
  integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/Request`"
  js/Request)

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

(defn cache
  "Property.

  The cache read-only property of the `web.fetch.Request` interface
  the cache mode of the request. It controls how the request will
  with the browser's HTTP cache.

  `var currentCacheMode = request.cache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/cache`"
  [this]
  (-> this (.-cache)))

(defn set-cache!
  "Property.

  The cache read-only property of the `web.fetch.Request` interface
  the cache mode of the request. It controls how the request will
  with the browser's HTTP cache.

  `var currentCacheMode = request.cache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/cache`"
  [this val]
  (aset this "cache" val))

(defn context
  "Property.

  The deprecated context read-only property of the `web.fetch.Request`
  contains the context of the Request (e.g., audio, image, iframe).

  `var myContext = request.context;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/context`"
  [this]
  (-> this (.-context)))

(defn set-context!
  "Property.

  The deprecated context read-only property of the `web.fetch.Request`
  contains the context of the Request (e.g., audio, image, iframe).

  `var myContext = request.context;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/context`"
  [this val]
  (aset this "context" val))

(defn credentials
  "Property.

  The credentials read-only property of the `web.fetch.Request`
  indicates whether the user agent should send cookies from the
  domain in the case of cross-origin requests.

  `var myCred = request.credentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials`"
  [this]
  (-> this (.-credentials)))

(defn set-credentials!
  "Property.

  The credentials read-only property of the `web.fetch.Request`
  indicates whether the user agent should send cookies from the
  domain in the case of cross-origin requests.

  `var myCred = request.credentials;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials`"
  [this val]
  (aset this "credentials" val))

(defn destination
  "Property.

  The destination read-only property of the `web.fetch.Request`
  returns a string describing the type of content being requested.

  `var destination = request.destination;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/destination`"
  [this]
  (-> this (.-destination)))

(defn headers
  "Property.

  The headers read-only property of the `web.fetch.Request` interface
  the `web.fetch.Headers` object associated with the request.

  `var myHeaders = request.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/headers`"
  [this]
  (-> this (.-headers)))

(defn set-headers!
  "Property.

  The headers read-only property of the `web.fetch.Request` interface
  the `web.fetch.Headers` object associated with the request.

  `var myHeaders = request.headers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/headers`"
  [this val]
  (aset this "headers" val))

(defn integrity
  "Property.

  The integrity read-only property of the `web.fetch.Request` interface
  the subresource integrity value of the request.

  `var myIntegrity = request.integrity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/integrity`"
  [this]
  (-> this (.-integrity)))

(defn set-integrity!
  "Property.

  The integrity read-only property of the `web.fetch.Request` interface
  the subresource integrity value of the request.

  `var myIntegrity = request.integrity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/integrity`"
  [this val]
  (aset this "integrity" val))

(defn method
  "Property.

  The method read-only property of the `web.fetch.Request` interface
  the request's method (GET, POST, etc.)

  `var myMethod = request.method;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/method`"
  [this]
  (-> this (.-method)))

(defn set-method!
  "Property.

  The method read-only property of the `web.fetch.Request` interface
  the request's method (GET, POST, etc.)

  `var myMethod = request.method;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/method`"
  [this val]
  (aset this "method" val))

(defn mode
  "Property.

  The mode read-only property of the `web.fetch.Request` interface
  the mode of the request (e.g., cors, no-cors, same-origin, or
  This is used to determine if cross-origin requests lead to valid
  and which properties of the response are readable.

  `var myMode = request.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/mode`"
  [this]
  (-> this (.-mode)))

(defn set-mode!
  "Property.

  The mode read-only property of the `web.fetch.Request` interface
  the mode of the request (e.g., cors, no-cors, same-origin, or
  This is used to determine if cross-origin requests lead to valid
  and which properties of the response are readable.

  `var myMode = request.mode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/mode`"
  [this val]
  (aset this "mode" val))

(defn redirect
  "Property.

  The redirect read-only property of the `web.fetch.Request` interface
  the mode for how redirects are handled.

  `var myRedirect = request.redirect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect`"
  [this]
  (-> this (.-redirect)))

(defn set-redirect!
  "Property.

  The redirect read-only property of the `web.fetch.Request` interface
  the mode for how redirects are handled.

  `var myRedirect = request.redirect;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect`"
  [this val]
  (aset this "redirect" val))

(defn referrer
  "Property.

  The referrer read-only property of the `web.fetch.Request` interface
  set by the user agent to be the referrer of the Request. (e.g.,
  no-referrer, or a URL.)

  `var myReferrer = request.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrer`"
  [this]
  (-> this (.-referrer)))

(defn set-referrer!
  "Property.

  The referrer read-only property of the `web.fetch.Request` interface
  set by the user agent to be the referrer of the Request. (e.g.,
  no-referrer, or a URL.)

  `var myReferrer = request.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrer`"
  [this val]
  (aset this "referrer" val))

(defn referrer-policy
  "Property.

  The referrerPolicy read-only property of the `web.fetch.Request`
  returns the referrer policy, which governs what referrer information,
  in the `Referer` header, should be included with the request.

  `var myReferrerPolicy = request.referrerPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The referrerPolicy read-only property of the `web.fetch.Request`
  returns the referrer policy, which governs what referrer information,
  in the `Referer` header, should be included with the request.

  `var myReferrerPolicy = request.referrerPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn url
  "Property.

  The url read-only property of the `web.fetch.Request` interface
  the URL of the request.

  `var myURL = request.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/url`"
  [this]
  (-> this (.-url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.fetch.Request` interface
  the URL of the request.

  `var myURL = request.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/url`"
  [this val]
  (aset this "url" val))

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

