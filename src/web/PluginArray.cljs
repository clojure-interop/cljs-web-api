(ns web.PluginArray
  "The PluginArray interface is used to store a list of `web.Plugin`
  describing the available plugins; it's returned by the `window.navigator.plugins`
  The PluginArray is not a JavaScript array, but has the length
  and supports accessing individual items using bracket notation
  as well as via item(index) and namedItem(\\\"name\\\") methods."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  Returns the Plugin at the specified index into the array."
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

(defn named-item
  "Method.

  Returns the Plugin with the specified name."
  [this & args]
  (-> this .-namedItem (.apply this (clj->js args))))

(defn refresh
  "Method.

  Refreshes all plugins on the current page, optionally reloading"
  [this & args]
  (-> this .-refresh (.apply this (clj->js args))))

(defn length
  "Property.

  The number of plugins in the array."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The number of plugins in the array."
  [this val]
  (aset this "length" val))

