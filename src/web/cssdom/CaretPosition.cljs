(ns web.cssdom.CaretPosition
  "The CaretPosition interface represents the caret position, an
  for the text insertion point. You can get a CaretPosition using
  `document.caretPositionFromPoint` method."
  (:refer-clojure :exclude []))

(defn get-client-rect
  "Method."
  [this & args]
  (-> this .-getClientRect (.apply this (clj->js args))))

(defn offset-node
  "Property.

  Returns a Node containing the found node at the caret's position."
  [this]
  (-> this (.-offsetNode)))

(defn set-offset-node!
  "Property.

  Returns a Node containing the found node at the caret's position."
  [this val]
  (aset this "offsetNode" val))

(defn offset
  "Property.

  Returns a long representing the character offset in the caret
  node."
  [this]
  (-> this (.-offset)))

(defn set-offset!
  "Property.

  Returns a long representing the character offset in the caret
  node."
  [this val]
  (aset this "offset" val))

