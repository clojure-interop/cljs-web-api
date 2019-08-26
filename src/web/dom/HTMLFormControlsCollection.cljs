(ns web.dom.HTMLFormControlsCollection
  "The HTMLFormControlsCollection interface represents a collection
  HTML form control elements."
  (:refer-clojure :exclude []))

(defn named-item
  "Method.

  The HTMLFormControlsCollection.namedItem() method returns the
  or the `web.Element` in the collection whose name or id match
  specified name, or null if no node matches.

  `var item = collection.namedItem(str);
  var item = collection[str];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection/namedItem`"
  [this & args]
  (apply (-> this .-namedItem) (concat [this] args)))

