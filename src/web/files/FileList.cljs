(ns web.files.FileList
  "An object of this type is returned by the files property of the
  `<input>` element; this lets you access the list of files selected
  the <input type=\\\"file\\\"> element. It's also used for a list
  files dropped into web content when using the drag and drop API;
  the `web.drag.DataTransfer` object for details on this usage."
  (:refer-clojure :exclude []))

(defn index
  "Method.

  The zero-based index of the file to retrieve from the list."
  [this & args]
  (apply (-> this .-index) (concat [this] args)))

