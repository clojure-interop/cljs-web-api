(ns web.cssdom.CaretPosition
  "The CaretPosition interface represents the caret position, an
  for the text insertion point. You can get a CaretPosition using
  `document.caretPositionFromPoint` method."
  (:refer-clojure :exclude []))

(defn get-client-rect
  "Method."
  [this & args]
  (apply (-> this .-getClientRect) (concat [this] args)))

(defn offset-node
  "Property.

  Returns a Node containing the found node at the caret's position."
  [this]
  (-> this (.offsetNode)))

(defn set-offset-node!
  "Property.

  Returns a Node containing the found node at the caret's position."
  [this val]
  (aset this "offsetNode" val))

