(ns web.dom.History
  "The History interface allows manipulation of the browser session
  that is the pages visited in the tab or frame that the current
  is loaded in."
  (:refer-clojure :exclude [next]))

(defn back
  "Method.

  Goes to the previous page in session history, the same action
  when the user clicks the browser's Back button. Equivalent to
  Calling this method to go back beyond the first page in the
  history has no effect and doesn't raise an exception."
  [this & args]
  (apply (-> this .-back) (concat [this] args)))

(defn forward
  "Method.

  Goes to the next page in session history, the same action as
  the user clicks the browser's Forward button; this is equivalent
  history.go(1).
  Calling this method to go forward beyond the most recent page
  the session history has no effect and doesn't raise an exception."
  [this & args]
  (apply (-> this .-forward) (concat [this] args)))

(defn go
  "Method.

  Loads a page from the session history, identified by its relative
  to the current page, for example -1 for the previous page or
  for the next page. If you specify an out-of-bounds value (for
  specifying -1 when there are no previously-visited pages in the
  history), this method silently has no effect. Calling go() without
  or a value of 0 reloads the current page. Internet Explorer lets
  specify a string, instead of an integer, to go to a specific
  in the history list."
  [this & args]
  (apply (-> this .-go) (concat [this] args)))

(defn push-state
  "Method.

  Pushes the given data onto the session history stack with the
  title and, if provided, URL. The data is treated as opaque by
  DOM; you may specify any JavaScript object that can be serialized.
  that Firefox currently ignores the title parameter; for more
  see manipulating the browser history."
  [this & args]
  (apply (-> this .-pushState) (concat [this] args)))

(defn replace-state
  "Method.

  Updates the most recent entry on the history stack to have the
  data, title, and, if provided, URL. The data is treated as opaque
  the DOM; you may specify any JavaScript object that can be serialized.
  that Firefox currently ignores the title parameter; for more
  see manipulating the browser history."
  [this & args]
  (apply (-> this .-replaceState) (concat [this] args)))

(defn length
  "Property.

  The History.length read-only property returns an Integer representing
  number of elements in the session history, including the currently
  page. For example, for a page loaded in a new tab this property
  1.

  `length = history.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/History/length`"
  [this]
  (-> this (.-length)))

(defn current
  "Property.

  Returns a DOMString representing the URL of the active item of
  session history. This property was never available to web content
  is no more supported by any browser. Use Location.href instead."
  [this]
  (-> this (.-current)))

(defn set-current!
  "Property.

  Returns a DOMString representing the URL of the active item of
  session history. This property was never available to web content
  is no more supported by any browser. Use Location.href instead."
  [this val]
  (aset this "current" val))

(defn next
  "Property.

  Returns a DOMString representing the URL of the next item in
  session history. This property was never available to web content
  is not supported by other browsers."
  [this]
  (-> this (.-next)))

(defn set-next!
  "Property.

  Returns a DOMString representing the URL of the next item in
  session history. This property was never available to web content
  is not supported by other browsers."
  [this val]
  (aset this "next" val))

(defn previous
  "Property.

  Returns a DOMString representing the URL of the previous item
  the session history. This property was never available to web
  and is not supported by other browsers."
  [this]
  (-> this (.-previous)))

(defn set-previous!
  "Property.

  Returns a DOMString representing the URL of the previous item
  the session history. This property was never available to web
  and is not supported by other browsers."
  [this val]
  (aset this "previous" val))

(defn scroll-restoration
  "Property.

  Allows web applications to explicitly set default scroll restoration
  on history navigation. This property can be either auto or manual."
  [this]
  (-> this (.-scrollRestoration)))

(defn set-scroll-restoration!
  "Property.

  Allows web applications to explicitly set default scroll restoration
  on history navigation. This property can be either auto or manual."
  [this val]
  (aset this "scrollRestoration" val))

(defn state
  "Property.

  Returns an any value representing the state at the top of the
  stack. This is a way to look at the state without having to wait
  a popstate event."
  [this]
  (-> this (.-state)))

(defn set-state!
  "Property.

  Returns an any value representing the state at the top of the
  stack. This is a way to look at the state without having to wait
  a popstate event."
  [this val]
  (aset this "state" val))

