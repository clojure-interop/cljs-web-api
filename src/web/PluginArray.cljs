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
  (apply (-> this .-item) (concat [this] args)))

(defn length-read
  "Property.

  The number of plugins in the array."
  [this]
  (-> this (.lengthRead)))

(defn set-length-read!
  "Property.

  The number of plugins in the array."
  [this val]
  (aset this "lengthRead" val))

