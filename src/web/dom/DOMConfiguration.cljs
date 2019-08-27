(ns web.dom.DOMConfiguration
  "Pre-defined parameters: \\\"canonical-form\\\", \\\"cdata-sections\\\",
  \\\"comments\\\", \\\"datatype-normalization\\\", \\\"element-content-whitespace\\\",
  \\\"error-handler\\\", \\\"infoset\\\", \\\"namespaces\\\", \\\"namespace-declarations\\\",
  \\\"schema-type\\\", \\\"split-cdata-sections\\\", \\\"validate\\\", \\\"validate-if-schema\\\","
  (:refer-clojure :exclude []))

(defn can-set-parameter
  "Method.

  Returns a Boolean"
  [this & args]
  (-> this .-canSetParameter (.apply this (clj->js args))))

(defn get-parameter
  "Method.

  Returns a DOMUserData"
  [this & args]
  (-> this .-getParameter (.apply this (clj->js args))))

(defn set-parameter
  "Method.

  Sets a parameter"
  [this & args]
  (-> this .-setParameter (.apply this (clj->js args))))

(defn parameter-names
  "Property.

  Is a DOMStringList"
  [this]
  (-> this (.-parameterNames)))

(defn set-parameter-names!
  "Property.

  Is a DOMStringList"
  [this val]
  (aset this "parameterNames" val))

