(ns web.dom.Location
  "The Location interface represents the location (URL) of the object
  is linked to. Changes done on it are reflected on the object
  relates to. Both the `web.Document` and `web.Window` interface
  such a linked Location, accessible via `Document.location` and
  respectively."
  (:refer-clojure :exclude [hash replace]))

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
  one at the provided URL. The difference from the `assign()` method
  that after using replace() the current page will not be saved
  session `web.dom.History`, meaning the user won't be able to
  the back button to navigate to it.

  `object.replace(url);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Location/replace`"
  [this url]
  (-> this (.replace url)))

(defn to-string
  "Method.

  Returns a DOMString containing the whole URL. It is a synonym
  URLUtils.href, though it can't be used to modify the value."
  [this & args]
  (apply (-> this .-toString) (concat [this] args)))

(defn href
  "Property.

  Is a DOMString containing the entire URL. If changed, the associated
  navigates to the new page. It can be set from a different origin
  the associated document."
  [this]
  (-> this (.-href)))

(defn set-href!
  "Property.

  Is a DOMString containing the entire URL. If changed, the associated
  navigates to the new page. It can be set from a different origin
  the associated document."
  [this val]
  (aset this "href" val))

(defn protocol
  "Property.

  Is a DOMString containing the protocol scheme of the URL, including
  final ':'."
  [this]
  (-> this (.-protocol)))

(defn set-protocol!
  "Property.

  Is a DOMString containing the protocol scheme of the URL, including
  final ':'."
  [this val]
  (aset this "protocol" val))

(defn host
  "Property.

  Is a DOMString containing the host, that is the hostname, a ':',
  the port of the URL."
  [this]
  (-> this (.-host)))

(defn set-host!
  "Property.

  Is a DOMString containing the host, that is the hostname, a ':',
  the port of the URL."
  [this val]
  (aset this "host" val))

(defn hostname
  "Property.

  Is a DOMString containing the domain of the URL."
  [this]
  (-> this (.-hostname)))

(defn set-hostname!
  "Property.

  Is a DOMString containing the domain of the URL."
  [this val]
  (aset this "hostname" val))

(defn port
  "Property.

  Is a DOMString containing the port number of the URL."
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  Is a DOMString containing the port number of the URL."
  [this val]
  (aset this "port" val))

(defn pathname
  "Property.

  Is a DOMString containing an initial '/' followed by the path
  the URL."
  [this]
  (-> this (.-pathname)))

(defn set-pathname!
  "Property.

  Is a DOMString containing an initial '/' followed by the path
  the URL."
  [this val]
  (aset this "pathname" val))

(defn search
  "Property.

  Is a DOMString containing a '?' followed by the parameters or
  of the URL. Modern browsers provide URLSearchParams and URL.searchParams
  make it easy to parse out the parameters from the querystring."
  [this]
  (-> this (.-search)))

(defn set-search!
  "Property.

  Is a DOMString containing a '?' followed by the parameters or
  of the URL. Modern browsers provide URLSearchParams and URL.searchParams
  make it easy to parse out the parameters from the querystring."
  [this val]
  (aset this "search" val))

(defn hash
  "Property.

  Is a DOMString containing a '#' followed by the fragment identifier
  the URL."
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  Is a DOMString containing a '#' followed by the fragment identifier
  the URL."
  [this val]
  (aset this "hash" val))

(defn username
  "Property.

  Is a DOMString containing the username specified before the domain"
  [this]
  (-> this (.-username)))

(defn set-username!
  "Property.

  Is a DOMString containing the username specified before the domain"
  [this val]
  (aset this "username" val))

(defn password
  "Property.

  Is a DOMString containing the password specified before the domain"
  [this]
  (-> this (.-password)))

(defn set-password!
  "Property.

  Is a DOMString containing the password specified before the domain"
  [this val]
  (aset this "password" val))

(defn origin
  "Property.

  Returns a DOMString containing the canonical form of the origin
  the specific location."
  [this]
  (-> this (.-origin)))

(defn set-origin!
  "Property.

  Returns a DOMString containing the canonical form of the origin
  the specific location."
  [this val]
  (aset this "origin" val))

