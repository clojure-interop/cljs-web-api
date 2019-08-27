(ns web.mobile.DocumentTouch
  "The DocumentTouch interface used to provide convenience methods
  creating `web.other.Touch` and `web.mobile.TouchList` objects,
  DocumentTouch been removed from the standards. These two methods
  live on the `web.Document` interface."
  (:refer-clojure :exclude []))

(defn create-touch
  "Method.

  Creates a new Touch object."
  [this & args]
  (-> this .-createTouch (.apply this (clj->js args))))

(defn create-touch-list
  "Method.

  Creates a new TouchList object."
  [this & args]
  (-> this .-createTouchList (.apply this (clj->js args))))

