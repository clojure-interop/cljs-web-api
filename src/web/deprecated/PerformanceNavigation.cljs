(ns web.deprecated.PerformanceNavigation
  "The legacy PerformanceNavigation interface represents information
  how the navigation to the current document was done."
  (:refer-clojure :exclude [type]))

(defn to-json
  "Method.

  Is a jsonizer returning a json object representing the PerformanceNavigation"
  [this & args]
  (apply (-> this .-toJSON) (concat [this] args)))

(defn type
  "Property.

  An unsigned short which indicates how the navigation to this
  was done. Possible values are:
  TYPE_NAVIGATE (0)
  The page was accessed by following a link, a bookmark, a form
  or a script, or by typing the URL in the address bar.
  TYPE_RELOAD (1)
  The page was accessed by clicking the Reload button or via the
  method.
  TYPE_BACK_FORWARD (2)
  The page was accessed by navigating into the history.
  TYPE_RESERVED (255)
  Any other way."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  An unsigned short which indicates how the navigation to this
  was done. Possible values are:
  TYPE_NAVIGATE (0)
  The page was accessed by following a link, a bookmark, a form
  or a script, or by typing the URL in the address bar.
  TYPE_RELOAD (1)
  The page was accessed by clicking the Reload button or via the
  method.
  TYPE_BACK_FORWARD (2)
  The page was accessed by navigating into the history.
  TYPE_RESERVED (255)
  Any other way."
  [this val]
  (aset this "type" val))

(defn redirect-count
  "Property.

  An unsigned short representing the number of REDIRECTs done before
  the page."
  [this]
  (-> this (.-redirectCount)))

(defn set-redirect-count!
  "Property.

  An unsigned short representing the number of REDIRECTs done before
  the page."
  [this val]
  (aset this "redirectCount" val))

