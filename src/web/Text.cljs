(ns web.Text
  "The Text interface represents the textual content of `web.Element`
  `web.Attr`. If an element has no markup within its content, it
  a single child implementing Text that contains the element's
  However, if the element contains markup, it is parsed into information
  and Text nodes that form its children."
  (:refer-clojure :exclude []))

(defn replace-whole-text
  "Method.

  [Obsolute]

  The Text.replaceWholeText() method replaces the text of the node
  all of its logically adjacent text nodes with the specified text.
  replaced nodes are removed, including the current node, unless
  was the recipient of the replacement text.

  `replacementNode = textnode.replaceWholeText(content)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/replaceWholeText`"
  [this content]
  (-> this (.replaceWholeText content)))

(defn split-text
  "Method.

  Breaks the node into two nodes at a specified offset."
  [this & args]
  (-> this .-splitText (.apply this (clj->js args))))

(defn is-element-content-whitespace
  "Property.

  [Read Only]
  [Obsolute]

  The Text.isElementContentWhitespace read-only property returns
  `js.Boolean` flag indicating whether or not the text node's content
  solely of whitespace.

  `b = textnode.isElementContentWhitespace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/isElementContentWhitespace`"
  [this]
  (-> this (.-isElementContentWhitespace)))

(defn whole-text
  "Property.

  [Read Only]

  The Text.wholeText read-only property returns the full text of
  `web.Text` nodes logically adjacent to the node.

  `str = textnode.wholeText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText`"
  [this]
  (-> this (.-wholeText)))

(defn assigned-slot
  "Property.

  [Read Only]
  [Experimental]

  The assignedSlot property of the `web.Text` interface returns
  `web.shadow-dom.HTMLSlotElement` object associated with the element.

  `var htmlSlotElement = text.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot`"
  [this]
  (-> this (.-assignedSlot)))

