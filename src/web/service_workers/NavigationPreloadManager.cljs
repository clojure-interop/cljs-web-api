(ns web.service-workers.NavigationPreloadManager
  "The NavigationPreloadManager interface of the the Service Worker
  provides methods for managing the preloading of resources with
  service worker."
  (:refer-clojure :exclude []))

(defn enable
  "Method.

  Returns a Promise that resolves when navigation preloading is"
  [this & args]
  (-> this .-enable (.apply this (clj->js args))))

(defn disable
  "Method.

  Returns a Promise that resolves when navigation preloading is"
  [this & args]
  (-> this .-disable (.apply this (clj->js args))))

(defn set-header-value
  "Method.

  Sets the value of the Service-Worker-Navigation-Preload header
  returns an empty Promise."
  [this & args]
  (-> this .-setHeaderValue (.apply this (clj->js args))))

(defn get-state
  "Method.

  Returns a Promise that resolves to an object with properties
  whether preload is enabled and the contents of the Service-Worker-Navigation-Preload."
  [this & args]
  (-> this .-getState (.apply this (clj->js args))))

