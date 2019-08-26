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
  (apply (-> this .-register) (concat [this] args)))

