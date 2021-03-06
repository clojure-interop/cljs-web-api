(ns web.Node
  "Node Node"
  (:refer-clojure :exclude []))

(defn append-child
  "Method.

  The Node.appendChild() method adds a node to the end of the list
  children of a specified parent node. If the given child is a
  to an existing node in the document, appendChild() moves it from
  current position to the new position (there is no requirement
  remove the node from its parent node before appending it to some
  node).

  `element.appendChild(aChild);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild`"
  [this a-child]
  (-> this (.appendChild a-child)))

(defn clone-node
  "Method.

  The Node.cloneNode() method returns a duplicate of the node on
  this method was called.

  `var dupNode = node.cloneNode([deep]);


  node
  The node to be cloned.
  dupNode
  The new node that will be a clone of node
  deep Optional
  true if the children of the node should also be cloned, or false to clone only the specified node.



  Note: In the DOM4 specification (as implemented in Gecko 13.0 (Firefox 13 / Thunderbird 13 / SeaMonkey 2.10)), deep is an optional argument. If omitted, the method acts as if the value of deep was true, defaulting to using deep cloning as the default behavior. To create a shallow clone, deep must be set to false.

  This behavior has been changed in the latest spec, and if omitted, the method will act as if the value of deep was false. Though it's still optional, you should always provide the deep argument both for backward and forward compatibility. With Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3)), the console warned developers not to omit the argument. Starting with Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), a shallow clone is defaulted instead of a deep clone.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode`"
  [this & args]
  (-> this .-cloneNode (.apply this (clj->js args))))

(defn compare-document-position
  "Method.

  The Node.compareDocumentPosition() method compares the position
  the given node against another node in any document.

  `compareMask = node.compareDocumentPosition(otherNode)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition`"
  [this other-node]
  (-> this (.compareDocumentPosition other-node)))

(defn contains
  "Method.

  The Node.contains() method returns a `js.Boolean` value indicating
  a node is a descendant of a given node, i.e. the node itself,
  of its direct children (`childNodes`), one of the children's
  children, and so on.

  `node.contains( otherNode )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/contains`"
  [this & args]
  (-> this .-contains (.apply this (clj->js args))))

(defn get-root-node
  "Method.

  The getRootNode() method of the `web.Node` interface returns
  context object's root, which optionally includes the shadow root
  it is available.

  `var root = node.getRootNode(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode`"
  [this options]
  (-> this (.getRootNode options)))

(defn has-child-nodes
  "Method.

  The Node.hasChildNodes() method returns a `js.Boolean` value
  whether the given `web.Node` has child nodes or not.

  `bool = node.hasChildNodes();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes`"
  [this ]
  (-> this (.hasChildNodes)))

(defn insert-before
  "Method.

  The Node.insertBefore() method inserts a node before the reference
  as a child of a specified parent node. If the given child is
  reference to an existing node in the document, insertBefore()
  it from its current position to the new position (there is no
  to remove the node from its parent node before appending it to
  other node).

  `var insertedNode = parentNode.insertBefore(newNode, referenceNode);


  insertedNode The node being inserted, that is newNode
  parentNode The parent of the newly inserted node.
  newNode The node to be inserted.
  referenceNode The node before which newNode is inserted.


  If referenceNode is null, the newNode is inserted at the end of the list of child nodes.


  referenceNode is not an optional parameter -- you must explicitly pass a Node or null. Failing to provide it or passing invalid values may behave differently in different browser versions.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore`"
  [this & args]
  (-> this .-insertBefore (.apply this (clj->js args))))

(defn is-default-namespace
  "Method.

  The Node.isDefaultNamespace() method accepts a namespace URI
  an argument and returns a `js.Boolean` with a value of true if
  namespace is the default namespace on the given node or false
  not.

  `result = node.isDefaultNamespace(namespaceURI);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isDefaultNamespace`"
  [this namespace-uri]
  (-> this (.isDefaultNamespace namespace-uri)))

(defn is-equal-node
  "Method.

  The Node.isEqualNode() method tests whether two nodes are equal.
  nodes are equal when they have the same type, defining characteristics
  elements, this would be their ID, number of children, and so
  its attributes match, and so on. The specific set of data points
  must match varies depending on the types of the nodes.

  `var isEqualNode = node.isEqualNode(otherNode);


  otherNode: The `web.Node` to compare equality with.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode`"
  [this & args]
  (-> this .-isEqualNode (.apply this (clj->js args))))

(defn is-same-node
  "Method.

  The Node.isSameNode() method tests whether two nodes are the
  that is if they reference the same object.

  `var isSameNode = node.isSameNode(otherNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode`"
  [this other-node]
  (-> this (.isSameNode other-node)))

(defn lookup-prefix
  "Method.

  The Node.lookupPrefix() method returns a `web.dom.DOMString`
  the prefix for a given namespace URI, if present, and null if
  When multiple prefixes are possible, the result is implementation-dependent.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupPrefix`"
  [this & args]
  (-> this .-lookupPrefix (.apply this (clj->js args))))

(defn lookup-namespace-uri
  "Method.

  The Node.lookupNamespaceURI() method accepts a prefix and returns
  namespace URI associated with it on the given node if found (and
  if not).

  `var namespace = node.lookupNamespaceURI(prefix);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupNamespaceURI`"
  [this prefix]
  (-> this (.lookupNamespaceURI prefix)))

(defn normalize
  "Method.

  The Node.normalize() method puts the specified node and all of
  sub-tree into a \\\"normalized\\\" form. In a normalized sub-tree,
  text nodes in the sub-tree are empty and there are no adjacent
  nodes.

  `element.normalize();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize`"
  [this ]
  (-> this (.normalize)))

(defn remove-child
  "Method.

  The Node.removeChild() method removes a child node from the DOM
  returns the removed node.

  `var oldChild = node.removeChild(child);
  OR
  node.removeChild(child);


  child is the child node to be removed from the DOM.
  node is the parent node of child.
  oldChild holds a reference to the removed child node, i.e., oldChild === child.


  The removed child node still exists in memory, but is no longer part of the DOM. With the first syntax form shown, you may reuse the removed node later in your code, via the oldChild object reference.

  In the second syntax form, however, there is no oldChild reference kept, so assuming your code has not kept any other reference to the node elsewhere, it will immediately become unusable and irretrievable, and will usually be automatically deleted from memory after a short time.

  If child is actually not a child of the element node, the method throws an exception. This will also happen if child was in fact a child of element at the time of the call, but was removed by an event handler invoked in the course of trying to remove the element (e.g., blur.)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild`"
  [this & args]
  (-> this .-removeChild (.apply this (clj->js args))))

(defn replace-child
  "Method.

  The Node.replaceChild() method replaces a child node within the
  (parent) node.

  `replacedNode = parentNode.replaceChild(newChild, oldChild);


  newChild is the new node to replace oldChild. If it already exists in the DOM, it is first removed.
  oldChild is the existing child to be replaced.
  replacedNode is the replaced node. This is the same node as oldChild.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild`"
  [this & args]
  (-> this .-replaceChild (.apply this (clj->js args))))

(defn get-feature
  "Method."
  [this & args]
  (-> this .-getFeature (.apply this (clj->js args))))

(defn get-user-data
  "Method.

  [Obsolute]

  The Node.getUserData() method returns any user `web.dom.DOMUserData`
  previously on the given node by `Node.setUserData()`.

  `userData = someNode.getUserData(userKey);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getUserData`"
  [this user-key]
  (-> this (.getUserData user-key)))

(defn has-attributes
  "Method.

  Returns a Boolean indicating if the element has any attributes,
  not."
  [this & args]
  (-> this .-hasAttributes (.apply this (clj->js args))))

(defn is-supported
  "Method.

  [Obsolute]

  The Node.isSupported()returns a `js.Boolean` flag containing
  result of a test whether the DOM implementation implements a
  feature and this feature is supported by the specific node.

  `boolValue = element.isSupported(feature, version)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isSupported`"
  [this feature version]
  (-> this (.isSupported feature version)))

(defn set-user-data
  "Method.

  [Obsolute]

  The Node.setUserData() method allows a user to attach (or remove)
  to an element, without needing to modify the DOM. Note that such
  will not be preserved when imported via `Node.importNode`, as
  `Node.cloneNode()` and `Node.renameNode()` operations (though
  does preserve the information), and equality tests in `Node.isEqualNode()`
  not consider user data in making the assessment.

  `var prevUserData = someNode.setUserData(userKey, userData, handler);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/setUserData`"
  [this user-key user-data handler]
  (-> this (.setUserData user-key user-data handler)))

(defn base-uri
  "Property.

  [Read Only]

  The baseURI read-only property returns the absolute base URL
  a `web.Node`.

  `var nodeBaseURI = node.baseURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI`"
  [this]
  (-> this (.-baseURI)))

(defn base-uri-object
  "Property.

  [Read Only]
  [Non Standard]

  The Node.baseURIObject property returns the nsIURI representing
  node's (typically a document or an element) base URL. It's similar
  `Node.baseURI`, except it returns an nsIURI instead of a string.

  `uriObj = node.baseURIObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURIObject`"
  [this]
  (-> this (.-baseURIObject)))

(defn child-nodes
  "Property.

  [Read Only]

  The Node.childNodes read-only property returns a live `web.NodeList`
  child `nodes` of the given element where the first child node
  assigned index 0.

  `var nodeList = elementNodeReference.childNodes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes`"
  [this]
  (-> this (.-childNodes)))

(defn first-child
  "Property.

  [Read Only]

  The Node.firstChild read-only property returns the node's first
  in the tree, or null if the node has no children.

  `var childNode = node.firstChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild`"
  [this]
  (-> this (.-firstChild)))

(defn is-connected
  "Property.

  [Read Only]

  The isConnected read-only property of the `web.Node` interface
  a boolean indicating whether the node is connected (directly
  indirectly) to the context object, for example the `web.Document`
  in the case of the normal DOM, or the `web.shadow-dom.ShadowRoot`
  the case of a shadow DOM.

  `var isItConnected = nodeObjectInstance.isConnected`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`"
  [this]
  (-> this (.-isConnected)))

(defn last-child
  "Property.

  [Read Only]

  The Node.lastChild read-only property returns the last child
  the node. If its parent is an element, then the child is generally
  element node, a text node, or a comment node. It returns null
  there are no child elements.

  `var childNode = node.lastChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild`"
  [this]
  (-> this (.-lastChild)))

(defn next-sibling
  "Property.

  [Read Only]

  The Node.nextSibling read-only property returns the node immediately
  the specified one in their parent's `childNodes`, or returns
  if the specified node is the last child in the parent element.

  `nextNode = node.nextSibling`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling`"
  [this]
  (-> this (.-nextSibling)))

(defn node-name
  "Property.

  [Read Only]

  The nodeName read-only property returns the name of the current
  as a string.

  `var str = node.nodeName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName`"
  [this]
  (-> this (.-nodeName)))

(defn node-type
  "Property.

  [Read Only]

  The read-only Node.nodeType property is an integer that identifies
  the node is. It distinguishes different kind of nodes from each
  such as `elements`, `text` and `comments`.

  `var type = node.nodeType;

  Returns an integer which specifies the type of the node. Possible values are listed in Node type constants.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType`"
  [this]
  (-> this (.-nodeType)))

(defn node-value
  "Property.

  The nodeValue property of the `web.Node` interface returns or
  the value of the current node.

  `str = node.nodeValue;
  node.nodeValue = str;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`"
  [this]
  (-> this (.-nodeValue)))

(defn set-node-value!
  "Property.

  The nodeValue property of the `web.Node` interface returns or
  the value of the current node.

  `str = node.nodeValue;
  node.nodeValue = str;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue`"
  [this val]
  (aset this "nodeValue" val))

(defn owner-document
  "Property.

  [Read Only]

  The ownerDocument read-only property of the `web.Node` interface
  the top-level document object of the node.

  `var document = element.ownerDocument;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument`"
  [this]
  (-> this (.-ownerDocument)))

(defn parent-node
  "Property.

  [Read Only]

  The Node.parentNode read-only property returns the parent of
  specified node in the DOM tree.

  `parentNode = node.parentNode

  parentNode is the parent of the current node. The parent of an element is an Element node, a Document node, or a DocumentFragment node.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode`"
  [this]
  (-> this (.-parentNode)))

(defn parent-element
  "Property.

  [Read Only]

  The Node.parentElement read-only property returns the DOM node's
  `web.Element`, or null if the node either has no parent, or its
  isn't a DOM `web.Element`.

  `parentElement = node.parentElement

  parentElement is the parent element of the current node. This is always a DOM `web.Element` object, or null.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement`"
  [this]
  (-> this (.-parentElement)))

(defn previous-sibling
  "Property.

  [Read Only]

  The Node.previousSibling read-only property returns the node
  preceding the specified one in its parent's `childNodes` list,
  null if the specified node is the first in that list.

  `previousNode = node.previousSibling;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling`"
  [this]
  (-> this (.-previousSibling)))

(defn text-content
  "Property.

  The textContent property of the `web.Node` interface represents
  text content of the node and its descendants.

  `var text = Node.textContent;
  Node.textContent = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`"
  [this]
  (-> this (.-textContent)))

(defn set-text-content!
  "Property.

  The textContent property of the `web.Node` interface represents
  text content of the node and its descendants.

  `var text = Node.textContent;
  Node.textContent = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent`"
  [this val]
  (aset this "textContent" val))

(defn local-name
  "Property.

  [Read Only]
  [Obsolute]

  The Node.localName read-only property returns the local part
  the qualified name of this node.

  `name = element.localName


  name is the local name as a string (see Notes below for details)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/localName`"
  [this]
  (-> this (.-localName)))

(defn namespace-uri
  "Property.

  [Read Only]
  [Obsolute]

  The Node.namespaceURI read-only property returns the namespace
  of the node, or null if the node is not in a namespace. When
  node is a document, it returns the XML namespace for the current

  `namespace = node.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/namespaceURI`"
  [this]
  (-> this (.-namespaceURI)))

(defn node-principal
  "Property.

  [Read Only]
  [Non Standard]
  [Obsolute]

  The Node.nodePrincipal read-only property returns the nsIPrincipal
  representing current security context of the node.

  `principalObj = Node.nodePrincipal`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/nodePrincipal`"
  [this]
  (-> this (.-nodePrincipal)))

(defn prefix
  "Property.

  [Read Only]
  [Obsolute]

  The Node.prefix read-only property returns the namespace prefix
  the specified node, or null if no prefix is specified.

  `string = node.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/prefix`"
  [this]
  (-> this (.-prefix)))

(defn root-node
  "Property.

  [Read Only]
  [Obsolute]

  The Node.rootNode read-only property returns a `web.Node` object
  the topmost node in the tree, or the current node if it's the
  node in the tree. This is found by walking backward along `Node.parentNode`
  the top is reached.

  `rootNode = node.rootNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/rootNode`"
  [this]
  (-> this (.-rootNode)))

(defn outer-text
  "Property.

  See `HTMLElement.outerText`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/outerText`"
  [this]
  (-> this (.-outerText)))

(defn set-outer-text!
  "Property.

  See `HTMLElement.outerText`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/outerText`"
  [this val]
  (aset this "outerText" val))

