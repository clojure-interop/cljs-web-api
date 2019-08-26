(ns web.shadow-dom.HTMLSlotElement
  "Fired on an HTMLSlotElement instance (<slot> element) when the
  contained in that slot change."
  (:refer-clojure :exclude [name]))

(defn assigned-nodes
  "Method.

  The assignedNodes() property of the `web.shadow-dom.HTMLSlotElement`
  returns a sequence of the nodes assigned to this slot, and if
  flatten option is set to true, the assigned nodes of any other
  that are descendants of this slot. If no assigned nodes are found,
  returns the slot's fallback content.

  `var assignedNodes = HTMLSlotElement.assignedNodes(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedNodes`"
  [this options]
  (-> this (.assignedNodes options)))

(defn assigned-elements
  "Method.

  The assignedElements() property of the `web.shadow-dom.HTMLSlotElement`
  returns a sequence of the elements assigned to this slot (and
  other nodes). If the flatten option is set to true, it also returns
  assigned elements of any other slots that are descendants of
  slot. If no assigned nodes are found, it returns the slot's fallback

  `var assignedElements = HTMLSlotElement.assignedElements(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements`"
  [this options]
  (-> this (.assignedElements options)))

(defn name
  "Property.

  The name property of the `web.shadow-dom.HTMLSlotElement` interface
  or sets the slot name. A slot is a placeholder inside a web component
  users can fill with their own markup.

  `var name = htmlSlotElement.name
  htmlSlotElement.name = name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The name property of the `web.shadow-dom.HTMLSlotElement` interface
  or sets the slot name. A slot is a placeholder inside a web component
  users can fill with their own markup.

  `var name = htmlSlotElement.name
  htmlSlotElement.name = name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/name`"
  [this val]
  (aset this "name" val))

