(ns web.service-workers.NavigationPreloadManager
  "The NavigationPreloadManager interface of the the Service Worker
  provides methods for managing the preloading of resources with
  service worker."
  (:refer-clojure :exclude []))

(defn enable
  "Method.

  Returns a Promise that resolves when navigation preloading is"
  [this & args]
  (apply (-> this .-enable) (concat [this] args)))

