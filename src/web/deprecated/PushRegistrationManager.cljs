(ns web.deprecated.PushRegistrationManager
  "Returns an interface to register or unregister a push registration,
  an active registration, or check the permission status of the
  This interface has been superceded by `web.service-workers.PushManager`."
  (:refer-clojure :exclude []))

(defn register
  "Method.

  Returns a promise that resolves to a PushRegistration with details
  a new registration."
  [this & args]
  (-> this .-register (.apply this (clj->js args))))

(defn unregister
  "Method.

  Returns a promise that resolves to a PushRegistration with details
  the unregistered registration."
  [this & args]
  (-> this .-unregister (.apply this (clj->js args))))

(defn get-registration
  "Method.

  Returns a promise that resolves the PushRegistration associated
  the current webapp."
  [this & args]
  (-> this .-getRegistration (.apply this (clj->js args))))

(defn has-permission
  "Method.

  Returns a promise that resolves to the PushPermissionStatus of
  requesting webapp."
  [this & args]
  (-> this .-hasPermission (.apply this (clj->js args))))

