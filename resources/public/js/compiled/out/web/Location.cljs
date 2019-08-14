(ns web.Location
  "The Location interface represents the location (URL) of the object
  is linked to. Changes done on it are reflected on the object
  relates to. Both the `web.Document` and `web.Window` interface
  such a linked Location, accessible via `web.Document.location`
  `web.Window.location` respectively."
  (:refer-clojure :exclude [replace]))

(defn assign
  "Method.

  The Location.assign() method causes the window to load and display
  document at the URL specified.

  `location.assign(url);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/assign`"
  [this url]
  (-> this (.assign url)))

(defn reload
  "Method.

  The Location.reload() method reloads the current URL, like the
  button.

  `location.reload(forcedReload);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/reload`"
  [this forced-reload]
  (-> this (.reload forced-reload)))

(defn replace
  "Method.

  The Location.replace() method replaces the current resource with
  one at the provided URL. The difference from the `web.assign()`
  is that after using replace() the current page will not be saved
  session `web.History`, meaning the user won't be able to use
  back button to navigate to it.

  `object.replace(url);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`"
  [this url]
  (-> this (.replace url)))

