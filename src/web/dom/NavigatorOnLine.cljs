(ns web.dom.NavigatorOnLine
  "The NavigatorOnLine interface contains methods and properties
  to the connectivity status of the browser."
  (:refer-clojure :exclude []))

(defn on-line
  "Property.

  Returns the online status of the browser. The property returns
  boolean value, with true meaning online and false meaning offline.
  property sends updates whenever the browser's ability to connect
  the network changes. The update occurs when the user follows
  or when a script requests a remote page. For example, the property
  return false when users click links soon after they lose internet

  `online = window.navigator.onLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`"
  [this]
  (-> this (.-onLine)))

(defn set-on-line!
  "Property.

  Returns the online status of the browser. The property returns
  boolean value, with true meaning online and false meaning offline.
  property sends updates whenever the browser's ability to connect
  the network changes. The update occurs when the user follows
  or when a script requests a remote page. For example, the property
  return false when users click links soon after they lose internet

  `online = window.navigator.onLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`"
  [this val]
  (aset this "onLine" val))

