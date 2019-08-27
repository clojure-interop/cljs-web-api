(ns web.credential.CredentialsContainer
  "The CredentialsContainer interface of the the Credential Management
  exposes methods to request credentials and notify the user agent
  events such as successful sign in or sign out happen. This interface
  accessible from `Navigator.credentials`."
  (:refer-clojure :exclude [create get]))

(defn create
  "Method.

  The create() method of the `web.credential.CredentialsContainer`
  returns a `js.Promise` that resolves with a new `web.credential.Credential`
  based on the provided options, or null if no Credential object
  be created.

  `var promise = CredentialsContainer.create([options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create`"
  [this & args]
  (-> this .-create (.apply this (clj->js args))))

(defn get
  "Method.

  The get() method of the `web.credential.CredentialsContainer`
  returns a `js.Promise` to a single `web.credential.Credential`
  that matches the provided parameters. If no match is found the
  will resolve to null.

  `var promise = CredentialsContainer.get([options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get`"
  [this & args]
  (-> this .-get (.apply this (clj->js args))))

(defn prevent-silent-access
  "Method.

  The preventSilentAccess() method of the `web.credential.CredentialsContainer`
  sets a flag that specifies whether automatic log in is allowed
  future visits to the current origin, then returns an empty Promise.

  `var Promise = CredentialsContainer.preventSilentAccess()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/preventSilentAccess`"
  [this ]
  (-> this (.preventSilentAccess)))

(defn store
  "Method.

  The store() method of the `web.credential.CredentialsContainer`
  a set of credentials for the user inside a `web.credential.Credential`
  returning this in a `js.Promise`.

  `CredentialsContainer.store(Credential).then(function(Credential) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/store`"
  [this credential]
  (-> this (.store credential)))

