(ns web.Text
  "The Text interface represents the textual content of `web.Element`
  `web.Attr`. If an element has no markup within its content, it
  a single child implementing Text that contains the element's
  However, if the element contains markup, it is parsed into information
  and Text nodes that form its children."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Text() constructor returns a newly created `web.Text` object with the optional `dom.DOMString` given in parameter as its textual content.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/Text`"
  js/Text)

(defn replace-whole-text
  "Method.

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

  The Text.splitText() method breaks the `web.Text` node into two
  at the specified offset, keeping both nodes in the tree as siblings.

  `newNode = textNode.splitText(offset)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/splitText`"
  [this offset]
  (-> this (.splitText offset)))

(defn assigned-slot
  "Property.

  The assignedSlot property of the `web.Text` interface returns
  `html.HTMLSlotElement` object associated with the element.

  `var htmlSlotElement = text.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot`"
  [this]
  (-> this (.assignedSlot)))

(defn set-assigned-slot!
  "Property.

  The assignedSlot property of the `web.Text` interface returns
  `html.HTMLSlotElement` object associated with the element.

  `var htmlSlotElement = text.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot`"
  [this val]
  (aset this "assignedSlot" val))

(defn is-element-content-whitespace
  "Property.

  The Text.isElementContentWhitespace read-only property returns
  `web.Boolean` flag indicating whether or not the text node's
  consists solely of whitespace.

  `b = textnode.isElementContentWhitespace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/isElementContentWhitespace`"
  [this]
  (-> this (.isElementContentWhitespace)))

(defn set-is-element-content-whitespace!
  "Property.

  The Text.isElementContentWhitespace read-only property returns
  `web.Boolean` flag indicating whether or not the text node's
  consists solely of whitespace.

  `b = textnode.isElementContentWhitespace;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/isElementContentWhitespace`"
  [this val]
  (aset this "isElementContentWhitespace" val))

(defn whole-text
  "Property.

  The Text.wholeText read-only property returns the full text of
  `web.Text` nodes logically adjacent to the node.

  `str = textnode.wholeText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText`"
  [this]
  (-> this (.wholeText)))

(defn set-whole-text!
  "Property.

  The Text.wholeText read-only property returns the full text of
  `web.Text` nodes logically adjacent to the node.

  `str = textnode.wholeText;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText`"
  [this val]
  (aset this "wholeText" val))

