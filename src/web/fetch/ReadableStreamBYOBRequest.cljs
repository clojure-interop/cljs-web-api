(ns web.fetch.ReadableStreamBYOBRequest
  "The ReadableStreamBYOBRequest interface of the Streams API represents
  pull request into a `web.fetch.ReadableByteStreamController`"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableStreamBYOBRequest() constructor creates and returns a ReadableStreamBYOBRequest() object instance.

  controller
  The associated `web.fetch.ReadableByteStreamController`.
  view
  The current view.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/ReadableStreamBYOBRequest`"
  js/ReadableStreamBYOBRequest)

(defn respond
  "Method.

  The error() method of the `web.fetch.ReadableStreamBYOBRequest`
  xxx

  `readableStreamBYOBRequestInstance.respond(bytesWritten);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respond`"
  [this bytes-written]
  (-> this (.respond bytes-written)))

(defn respond-with-new-view
  "Method.

  The respondWithNewView() method of the `web.fetch.ReadableStreamBYOBRequest`
  xxx

  `readableStreamBYOBRequestInstance.respondWithNewView(view);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView`"
  [this view]
  (-> this (.respondWithNewView view)))

(defn view
  "Property.

  The view getter property of the `web.fetch.ReadableStreamBYOBRequest`
  returns the current view.

  `var view = readableStreamBYOBRequestInstance.view;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/view`"
  [this]
  (-> this (.view)))

(defn set-view!
  "Property.

  The view getter property of the `web.fetch.ReadableStreamBYOBRequest`
  returns the current view.

  `var view = readableStreamBYOBRequestInstance.view;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/view`"
  [this val]
  (aset this "view" val))

