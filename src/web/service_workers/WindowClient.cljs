(ns web.service-workers.WindowClient
  "The WindowClient interface of the ServiceWorker API represents
  scope of a service worker client that is a document in a browser
  controlled by an active worker. The service worker client independently
  and uses a service worker for its own loading and sub-resources."
  (:refer-clojure :exclude []))

(defn focus
  "Method.

  The focus() method of the `web.service-workers.WindowClient`
  gives user input focus to the current client and returns a `js.Promise`
  resolves to the existing `web.service-workers.WindowClient`.

  `Client.focus().then(function(WindowClient) {
  // do something with your WindowClient once it has been focused
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focus`"
  [this & args]
  (apply (-> this .-focus) (concat [this] args)))

(defn navigate
  "Method.

  The navigate() method of the `web.service-workers.WindowClient`
  loads a specified URL into a controlled client page then returns
  `js.Promise` that resolves to the existing `web.service-workers.WindowClient`.

  `WindowClient.navigate(url).then(function(WindowClient) {
  // do something with your WindowClient after navigation
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/navigate`"
  [this & args]
  (apply (-> this .-navigate) (concat [this] args)))

(defn focused
  "Property.

  The focused read-only property of the `web.service-workers.WindowClient`
  is a `js.Boolean` that indicates whether the current client has

  `myFocused = WindowClient.focused;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focused`"
  [this]
  (-> this (.focused)))

(defn set-focused!
  "Property.

  The focused read-only property of the `web.service-workers.WindowClient`
  is a `js.Boolean` that indicates whether the current client has

  `myFocused = WindowClient.focused;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focused`"
  [this val]
  (aset this "focused" val))

(defn visibility-state
  "Property.

  The visibilityState read-only property of the `web.service-workers.WindowClient`
  indicates the visibility of the current client. This value can
  one of hidden, visible, prerender, or unloaded.

  `myVisState = WindowClient.visibilityState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/visibilityState`"
  [this]
  (-> this (.visibilityState)))

(defn set-visibility-state!
  "Property.

  The visibilityState read-only property of the `web.service-workers.WindowClient`
  indicates the visibility of the current client. This value can
  one of hidden, visible, prerender, or unloaded.

  `myVisState = WindowClient.visibilityState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/visibilityState`"
  [this val]
  (aset this "visibilityState" val))

