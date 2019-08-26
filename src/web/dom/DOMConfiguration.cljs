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
  (apply (-> this .-canSetParameter) (concat [this] args)))

(defn get-parameter
  "Method.

  Returns a DOMUserData"
  [this & args]
  (apply (-> this .-getParameter) (concat [this] args)))

(defn set-parameter
  "Method.

  Sets a parameter"
  [this & args]
  (apply (-> this .-setParameter) (concat [this] args)))

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

