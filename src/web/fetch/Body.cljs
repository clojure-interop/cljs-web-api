(ns web.fetch.Body
  "The Body mixin of the Fetch API represents the body of the response/request,
  you to declare what its content type is and how it should be"
  (:refer-clojure :exclude []))

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

(defn body
  "Property.

  The body read-only property of the `web.fetch.Body` mixin is
  simple getter used to expose a `web.files.ReadableStream` of
  body contents.

  `var stream = responseInstance.body;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`"
  [this]
  (-> this (.body)))

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
  (-> this (.bodyUsed)))

(defn set-body-used!
  "Property.

  The bodyUsed read-only property of the `web.fetch.Body` mixin
  a `js.Boolean` that indicates whether the body has been read

  `var myBodyUsed = response.bodyUsed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`"
  [this val]
  (aset this "bodyUsed" val))

