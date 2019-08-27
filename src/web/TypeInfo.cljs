(ns web.TypeInfo
  "The obsolete TypeInfo interface was intended to be used to describe
  DOM data type by keying its name to a namespace within the document's"
  (:refer-clojure :exclude []))

(defn is-derived-from
  "Method.

  Returns a Boolean."
  [this & args]
  (-> this .-isDerivedFrom (.apply this (clj->js args))))

(defn type-name
  "Property.

  Returns a DOMString indicating the type's name."
  [this]
  (-> this (.-typeName)))

(defn set-type-name!
  "Property.

  Returns a DOMString indicating the type's name."
  [this val]
  (aset this "typeName" val))

(defn type-namespace
  "Property.

  Returns a DOMString indicating the type's namespace within the"
  [this]
  (-> this (.-typeNamespace)))

(defn set-type-namespace!
  "Property.

  Returns a DOMString indicating the type's namespace within the"
  [this val]
  (aset this "typeNamespace" val))

