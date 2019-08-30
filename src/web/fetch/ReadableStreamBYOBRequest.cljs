(ns web.fetch.ReadableStreamBYOBRequest
  "The ReadableStreamBYOBRequest interface of the Streams API represents
  pull request into a `web.fetch.ReadableByteStreamController`"
  (:refer-clojure :exclude []))

(defn respond
  "Method.

  [Draft]
  [Experimental]

  The error() method of the `web.fetch.ReadableStreamBYOBRequest`
  xxx

  `readableStreamBYOBRequestInstance.respond(bytesWritten);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respond`"
  [this bytes-written]
  (-> this (.respond bytes-written)))

(defn respond-with-new-view
  "Method.

  [Draft]
  [Experimental]

  The respondWithNewView() method of the `web.fetch.ReadableStreamBYOBRequest`
  xxx

  `readableStreamBYOBRequestInstance.respondWithNewView(view);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView`"
  [this view]
  (-> this (.respondWithNewView view)))

(defn view
  "Property.

  [Draft]
  [Experimental]

  The view getter property of the `web.fetch.ReadableStreamBYOBRequest`
  returns the current view.

  `var view = readableStreamBYOBRequestInstance.view;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/view`"
  [this]
  (-> this (.-view)))

(defn set-view!
  "Property.

  [Draft]
  [Experimental]

  The view getter property of the `web.fetch.ReadableStreamBYOBRequest`
  returns the current view.

  `var view = readableStreamBYOBRequestInstance.view;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBRequest/view`"
  [this val]
  (aset this "view" val))

