(ns web.NonDocumentTypeChildNode
  "The NonDocumentTypeChildNode interface contains methods that
  particular to `web.Node` objects that can have a parent, but
  suitable for `web.DocumentType`."
  (:refer-clojure :exclude []))

(defn previous-element-sibling
  "Property.

  [Read Only]

  The NonDocumentTypeChildNode.previousElementSibling read-only
  returns the `web.Element` immediately prior to the specified
  in its parent's children list, or null if the specified element
  the first one in the list.

  `prevNode = elementNodeReference.previousElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling`"
  [this]
  (-> this (.-previousElementSibling)))

(defn next-element-sibling
  "Property.

  [Read Only]

  The NonDocumentTypeChildNode.nextElementSibling read-only property
  the element immediately following the specified one in its parent's
  list, or null if the specified element is the last one in the

  `var nextNode = elementNodeReference.nextElementSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling`"
  [this]
  (-> this (.-nextElementSibling)))

