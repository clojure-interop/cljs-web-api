(ns web.dom.History
  "The History interface allows manipulation of the browser session
  that is the pages visited in the tab or frame that the current
  is loaded in."
  (:refer-clojure :exclude []))

(defn back
  "Method.

  Goes to the previous page in session history, the same action
  when the user clicks the browser's Back button. Equivalent to
  Calling this method to go back beyond the first page in the
  history has no effect and doesn't raise an exception."
  [this & args]
  (apply (-> this .-back) (concat [this] args)))

(defn length
  "Property.

  The History.length read-only property returns an Integer representing
  number of elements in the session history, including the currently
  page. For example, for a page loaded in a new tab this property
  1.

  `length = history.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/History/length`"
  [this]
  (-> this (.length)))

