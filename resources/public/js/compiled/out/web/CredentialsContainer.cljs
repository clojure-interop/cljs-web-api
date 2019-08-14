(ns web.CredentialsContainer
  "The CredentialsContainer interface of the the Credential Management
  exposes methods to request credentials and notify the user agent
  events such as successful sign in or sign out happen. This interface
  accessible from `web.Navigator.credentials`."
  (:refer-clojure :exclude [create get]))

(defn create
  "Method.

  The create() method of the `web.CredentialsContainer` interface
  a `web.Promise` that resolves with a new `web.Credential` instance
  on the provided options, or null if no Credential object can
  created.

  `var promise = CredentialsContainer.create([options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create`"
  [this & args]
  (apply (-> this .-create) (concat [this] args)))

(defn get
  "Method.

  The get() method of the `web.CredentialsContainer` interface
  a `web.Promise` to a single `web.Credential` instance that matches
  provided parameters. If no match is found the Promise will resolve
  null.

  `var promise = CredentialsContainer.get([options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get`"
  [this & args]
  (apply (-> this .-get) (concat [this] args)))

(defn prevent-silent-access
  "Method.

  The preventSilentAccess() method of the `web.CredentialsContainer`
  sets a flag that specifies whether automatic log in is allowed
  future visits to the current origin, then returns an empty Promise.

  `var Promise = CredentialsContainer.preventSilentAccess()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/preventSilentAccess`"
  [this ]
  (-> this (.preventSilentAccess)))

(defn store
  "Method.

  The store() method of the `web.CredentialsContainer` stores a
  of credentials for the user inside a `web.Credential` instance,
  this in a `web.Promise`.

  `CredentialsContainer.store(Credential).then(function(Credential) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/store`"
  [this credential]
  (-> this (.store credential)))

