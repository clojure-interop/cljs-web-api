(ns web.Document
  "The Document interface represents any web page loaded in the
  and serves as an entry point into the web page's content, which
  the DOM tree."
  (:refer-clojure :exclude [drop]))

(defn adopt-node
  "Method.

  Document.adoptNode() transfers a node from another document into
  method's document. The adopted node and its subtree is removed
  its original document (if any), and its `ownerDocument` is changed
  the current document. The node can then be inserted into the
  document.

  `node = document.adoptNode(externalNode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode`"
  [this external-node]
  (-> this (.adoptNode external-node)))

(defn capture-events
  "Method.

  See Window.captureEvents."
  [this & args]
  (-> this .-captureEvents (.apply this (clj->js args))))

(defn caret-range-from-point
  "Method.

  [Non Standard]

  The caretRangeFromPoint() method of the `web.Document` interface
  a `web.Range` object for the document fragment under the specified

  `var range = document.caretRangeFromPoint(float x, float y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint`"
  [this & args]
  (-> this .-caretRangeFromPoint (.apply this (clj->js args))))

(defn create-attribute
  "Method.

  The Document.createAttribute() method creates a new attribute
  and returns it. The object created a node implementing the `web.Attr`
  The DOM does not enforce what sort of attributes can be added
  a particular element in this manner.

  `attribute = document.createAttribute(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute`"
  [this name]
  (-> this (.createAttribute name)))

(defn create-attribute-ns
  "Method.

  Creates a new attribute node in a given namespace and returns"
  [this & args]
  (-> this .-createAttributeNS (.apply this (clj->js args))))

(defn create-cdata-section
  "Method.

  createCDATASection() creates a new CDATA section node, and returns

  `var CDATASectionNode = document.createCDATASection(data);


  CDATASectionNode is a CDATA Section node.
  data is a string containing the data to be added to the CDATA Section.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection`"
  [this & args]
  (-> this .-createCDATASection (.apply this (clj->js args))))

(defn create-comment
  "Method.

  createComment() creates a new comment node, and returns it.

  `CommentNode = document.createComment(data);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment`"
  [this data]
  (-> this (.createComment data)))

(defn create-document-fragment
  "Method.

  Creates a new empty `web.web-components.DocumentFragment`.

  `var fragment = document.createDocumentFragment();

  fragment is a reference to an empty `web.web-components.DocumentFragment` object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment`"
  [this & args]
  (-> this .-createDocumentFragment (.apply this (clj->js args))))

(defn create-element
  "Method.

  In an HTML document, the document.createElement() method creates
  HTML element specified by tagName, or an `web.dom.HTMLUnknownElement`
  tagName isn't recognized.

  `var element = document.createElement(tagName[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement`"
  [this & args]
  (-> this .-createElement (.apply this (clj->js args))))

(defn create-element-ns
  "Method.

  Creates an element with the specified namespace URI and qualified

  `var element = document.createElementNS(namespaceURI, qualifiedName[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS`"
  [this & args]
  (-> this .-createElementNS (.apply this (clj->js args))))

(defn create-entity-reference
  "Method.

  [Obsolute]

  Prior to Gecko 7.0 this method showed up as present, due to bug
  9850, it always only returned null. The only workaround is to
  a text node, CDATA section, attribute node value, etc. which
  the value referred to by the entity, using Unicode escape sequences
  fromCharCode() as necessary.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createEntityReference`"
  [this & args]
  (-> this .-createEntityReference (.apply this (clj->js args))))

(defn create-event
  "Method.

  Creates an event of the type specified. The returned object should
  first initialized and can then be passed to `EventTarget.dispatchEvent`.

  `var event = document.createEvent(type);


  event is the created Event object.
  type is a string that represents the type of event to be created. Possible event types include \\\"UIEvents\\\", \\\"MouseEvents\\\", \\\"MutationEvents\\\", and \\\"HTMLEvents\\\". See Notes section for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent`"
  [this & args]
  (-> this .-createEvent (.apply this (clj->js args))))

(defn create-node-iterator
  "Method.

  Returns a new NodeIterator object.

  `var nodeIterator = document.createNodeIterator(root, whatToShow, filter);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator`"
  [this root what-to-show filter]
  (-> this (.createNodeIterator root what-to-show filter)))

(defn create-processing-instruction
  "Method.

  createProcessingInstruction() generates a new processing instruction
  and returns it.

  `piNode = document.createProcessingInstruction(target, data)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createProcessingInstruction`"
  [this target data]
  (-> this (.createProcessingInstruction target data)))

(defn create-range
  "Method.

  The Document.createRange() method returns a new `web.Range` object.

  `range = document.createRange();

  range is the created `web.Range` object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange`"
  [this & args]
  (-> this .-createRange (.apply this (clj->js args))))

(defn create-text-node
  "Method.

  Creates a new `web.Text` node. This method can be used to escape
  characters.

  `var text = document.createTextNode(data);


  text is a `web.Text` node.
  data is a string containing the data to be put in the text node.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode`"
  [this & args]
  (-> this .-createTextNode (.apply this (clj->js args))))

(defn create-touch
  "Method.

  [Deprecated]

  The Document.createTouch() method creates and returns a new `web.other.Touch`

  `var touch = DocumentTouch.createTouch(view, target, identifier, pageX, pageY,
  screenX, screenY);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTouch`"
  [this & args]
  (-> this .-createTouch (.apply this (clj->js args))))

(defn create-touch-list
  "Method.

  [Deprecated]

  The Document.createTouchList() method creates and returns a new
  object.

  `var list = DocumentTouch.createTouchList([touch1 [, touch2 [, ...]]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTouchList`"
  [this & args]
  (-> this .-createTouchList (.apply this (clj->js args))))

(defn create-tree-walker
  "Method.

  The Document.createTreeWalker() creator method returns a newly
  `web.TreeWalker` object.

  `document.createTreeWalker(root, whatToShow[, filter[, entityReferenceExpansion]]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker`"
  [this & args]
  (-> this .-createTreeWalker (.apply this (clj->js args))))

(defn enable-style-sheets-for-set
  "Method.

  Enables the style sheets matching the specified name in the current
  sheet set, and disables all other style sheets (except those
  a title, which are always enabled).

  `document.enableStyleSheetsForSet(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/enableStyleSheetsForSet`"
  [this name]
  (-> this (.enableStyleSheetsForSet name)))

(defn exit-pointer-lock
  "Method.

  [Experimental]

  The exitPointerLock() method asynchronously releases a pointer
  previously requested through `Element.requestPointerLock`.

  `document.exitPointerLock();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/exitPointerLock`"
  [this ]
  (-> this (.exitPointerLock)))

(defn get-animations
  "Method.

  [Experimental]

  The getAnimations() method of the `web.Document` interface returns
  array of all `web.animation.Animation` objects currently in effect
  target elements are descendants of the document. This array includes
  Animations, CSS Transitions, and Web Animations.

  `var allAnimations = Document.getAnimations();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getAnimations`"
  [this ]
  (-> this (.getAnimations)))

(defn get-elements-by-class-name
  "Method.

  returns an array-like object of all child elements which have
  of the given class names.

  `var elements = document.getElementsByClassName(names); // or:
  var elements = rootElement.getElementsByClassName(names);


  elements is a live `web.dom.HTMLCollection` of found elements.
  names is a string representing the list of class names to match; class names are separated by whitespace
  `getElementsByClassName` can be called on any element, not only on the `document`. The element on which it is called will be used as the root of the search.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName`"
  [this & args]
  (-> this .-getElementsByClassName (.apply this (clj->js args))))

(defn get-elements-by-tag-name
  "Method.

  returns an `web.dom.HTMLCollection` of elements with the given
  name.

  `var elements = document.getElementsByTagName(name);


  elements is a live `web.dom.HTMLCollection` (but see the note below) of found elements in the order they appear in the tree.
  name is a string representing the name of the elements. The special string \\\"*\\\" represents all elements.


  The latest W3C specification says elements is an HTMLCollection; however, this method returns a `web.NodeList` in WebKit browsers. See bug 14869 for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName`"
  [this & args]
  (-> this .-getElementsByTagName (.apply this (clj->js args))))

(defn get-elements-by-tag-name-ns
  "Method.

  Returns a list of elements with the given tag name belonging
  the given namespace. The complete document is searched, including
  root node.

  `elements = document.getElementsByTagNameNS(namespace, name)


  elements is a live `web.NodeList` (but see the note below) of found elements in the order they appear in the tree.
  namespace is the namespace URI of elements to look for (see `element.namespaceURI`).
  name is either the local name of elements to look for or the special value *, which matches all elements (see `element.localName`).


  Note: While the W3C specification says elements is a NodeList, this method returns a `web.dom.HTMLCollection` both in Gecko and Internet Explorer. Opera returns a NodeList, but with a namedItem method implemented, which makes it similar to a HTMLCollection. As of January 2012, only in WebKit browsers is the returned value a pure NodeList. See bug 14869 for details.

  Note: Currently parameters in this method are case-sensitive, but they were case-insensitive in Firefox 3.5 and before. See the developer release note for Firefox 3.6 and a note in Browser compatibility section in `Element.getElementsByTagNameNS` for details.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS`"
  [this & args]
  (-> this .-getElementsByTagNameNS (.apply this (clj->js args))))

(defn has-storage-access
  "Method.

  The hasStorageAccess() method of the `web.Document` interface
  a `js.Promise` that resolves with a boolean value indicating
  the document has access to its first-party storage.

  `Promise<boolean> hasStorageAccess()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hasStorageAccess`"
  [this ]
  (-> this (.hasStorageAccess)))

(defn import-node
  "Method.

  The `web.Document` object's importNode() method creates a copy
  a `web.Node` or `web.web-components.DocumentFragment` from another
  to be inserted into the current document later.

  `var node = document.importNode(externalNode, deep);


  node
  The copied node in the scope of the importing document. The new node's `Node.parentNode` is null, since it has not yet been inserted into the document tree.
  externalNode
  The external Node or DocumentFragment to import into the current document.
  deep
  A Boolean which controls whether or not to import the entire DOM subtree of the externalNode.

  If deep is set to true, then externalNode and all of its descendants are copied.
  If deep is set to false, then only externalNode is imported — the new node has no children.





  Note: In the DOM4 specification, deep was an optional argument with a default value of true.

  This default has changed in the latest spec — the new default value is false. Though it's still an optional argument, you should always provide the deep argument for backward and forward compatibility. With Gecko 28.0 (Firefox 28 / Thunderbird 28 / SeaMonkey 2.25 / Firefox OS 1.3), the console warns developers not to omit the argument. Starting with Gecko 29.0 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26)), a shallow clone is defaulted instead of a deep clone.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode`"
  [this & args]
  (-> this .-importNode (.apply this (clj->js args))))

(defn normalize-document
  "Method.

  Replaces entities, normalizes text nodes, etc."
  [this & args]
  (-> this .-normalizeDocument (.apply this (clj->js args))))

(defn release-capture
  "Method.

  The releaseCapture() method releases mouse capture if it's currently
  on an element within this document. Enabling mouse capture on
  element is done by calling `element.setCapture()`.

  `document.releaseCapture();

  Once mouse capture is released, mouse events will no longer all be directed to the element on which capture is enabled.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/releaseCapture`"
  [this & args]
  (-> this .-releaseCapture (.apply this (clj->js args))))

(defn release-events
  "Method.

  See Window.releaseEvents()."
  [this & args]
  (-> this .-releaseEvents (.apply this (clj->js args))))

(defn request-storage-access
  "Method.

  The requestStorageAccess() method of the `web.Document` interface
  a `js.Promise` that resolves if the access to first-party storage
  granted, and rejects if access was denied.

  `Promise<void> requestStorageAccess()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/requestStorageAccess`"
  [this ]
  (-> this (.requestStorageAccess)))

(defn route-event
  "Method.

  See Window.routeEvent()."
  [this & args]
  (-> this .-routeEvent (.apply this (clj->js args))))

(defn moz-set-image-element
  "Method.

  [Non Standard]

  The Document.mozSetImageElement() method changes the element
  used as the CSS background for a background with a given background
  ID.

  `document.mozSetImageElement(imageElementId, imageElement);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSetImageElement`"
  [this image-element-id image-element]
  (-> this (.mozSetImageElement image-element-id image-element)))

(defn get-element-by-id
  "Method.

  The `web.Document` method getElementById() returns an `web.Element`
  representing the element whose `id` property matches the specified
  Since element IDs are required to be unique if specified, they're
  useful way to get access to a specific element quickly.

  `var element = document.getElementById(id);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById`"
  [this id]
  (-> this (.getElementById id)))

(defn query-selector
  "Method.

  The `web.Document` method querySelector() returns the first `web.Element`
  the document that matches the specified selector, or group of
  If no matches are found, null is returned.

  `element = document.querySelector(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector`"
  [this selectors]
  (-> this (.querySelector selectors)))

(defn query-selector-all
  "Method.

  The `web.Document` method querySelectorAll() returns a static
  live) `web.NodeList` representing a list of the document's elements
  match the specified group of selectors.

  `elementList = parentNode.querySelectorAll(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll`"
  [this selectors]
  (-> this (.querySelectorAll selectors)))

(defn create-expression
  "Method.

  This method compiles an `web.xpath.XPathExpression` which can
  be used for (repeated) evaluations.

  `xpathExpr = document.createExpression(xpathText, namespaceURLMapper);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createExpression`"
  [this xpath-text namespace-url-mapper]
  (-> this (.createExpression xpath-text namespace-url-mapper)))

(defn create-ns-resolver
  "Method.

  Creates an XPathNSResolver which resolves namespaces with respect
  the definitions in scope for a specified node.

  `nsResolver = document.createNSResolver(node);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createNSResolver`"
  [this node]
  (-> this (.createNSResolver node)))

(defn evaluate
  "Method.

  Returns an `web.xpath.XPathResult` based on an XPath expression
  other given parameters.

  `var xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result
  );


  \\txpathExpression is a string representing the XPath to be evaluated.
  \\tcontextNode specifies the context node for the query (see the XPath specification). It's common to pass document as the context node.
  \\tnamespaceResolver is a function that will be passed any namespace prefixes and should return a string representing the namespace URI associated with that prefix. It will be used to resolve prefixes within the XPath itself, so that they can be matched with the document. null is common for HTML documents or when no namespace prefixes are used.
  \\tresultType is an integer that corresponds to the type of result XPathResult to return. Use named constant properties, such as XPathResult.ANY_TYPE, of the XPathResult constructor, which correspond to integers from 0 to 9.
  \\tresult is an existing XPathResult to use for the results. null is the most common and will create a new XPathResult`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate`"
  [this & args]
  (-> this .-evaluate (.apply this (clj->js args))))

(defn clear
  "Method.

  [Deprecated]

  The Document.clear() method clears the whole specified document
  early (pre-1.0) versions of Mozilla.

  `document.clear();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/clear`"
  [this ]
  (-> this (.clear)))

(defn close
  "Method.

  The Document.close() method finishes writing to a document, opened
  `Document.open()`.

  `document.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/close`"
  [this ]
  (-> this (.close)))

(defn exec-command
  "Method.

  When an HTML document has been switched to designMode, its document
  exposes an execCommand method to run commands that manipulate
  current editable region, such as form inputs or contentEditable

  `document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand`"
  [this a-command-name a-show-default-ui a-value-argument]
  (-> this (.execCommand a-command-name a-show-default-ui a-value-argument)))

(defn get-elements-by-name
  "Method.

  The getElementsByName() method of the `web.Document` object returns
  `web.NodeList` Collection of elements with a given `name` in
  document.

  `var elements = document.getElementsByName(name);


  elements is a live `web.NodeList` Collection, meaning it automatically updates as new elements with the same name are added to/removed from the document.
  name is the value of the name attribute of the element(s).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName`"
  [this & args]
  (-> this .-getElementsByName (.apply this (clj->js args))))

(defn has-focus
  "Method.

  The hasFocus() method of the `web.Document` interface returns
  `js.Boolean` value indicating whether the document or any element
  the document has focus. This method can be used to determine
  the active element in a document has focus.

  `var focused = document.hasFocus();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus`"
  [this ]
  (-> this (.hasFocus)))

(defn open
  "Method.

  The Document.open() method opens a document for writing.

  `document.open();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/open`"
  [this ]
  (-> this (.open)))

(defn query-command-enabled
  "Method.

  The Document.queryCommandEnabled() method reports whether or
  the specified editor command is enabled by the browser.

  `isEnabled = document.queryCommandEnabled(command);



  Parameters

  command
  The command for which to determine support.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandEnabled`"
  [this & args]
  (-> this .-queryCommandEnabled (.apply this (clj->js args))))

(defn query-command-indeterm
  "Method.

  Returns true if the formating command is in an indeterminate
  on the current range."
  [this & args]
  (-> this .-queryCommandIndeterm (.apply this (clj->js args))))

(defn query-command-state
  "Method.

  The queryCommandState method will tell you if the current selection
  a certain `Document.execCommand()` command applied.

  `queryCommandState(String command)

  command is a command from `Document.execCommand()``

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandState`"
  [this & args]
  (-> this .-queryCommandState (.apply this (clj->js args))))

(defn query-command-supported
  "Method.

  The Document.queryCommandSupported() method reports whether or
  the specified editor command is supported by the browser.

  `isSupported = document.queryCommandSupported(command);



  Parameters

  command
  The command for which to determine support.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/queryCommandSupported`"
  [this & args]
  (-> this .-queryCommandSupported (.apply this (clj->js args))))

(defn query-command-value
  "Method.

  Returns the current value of the current range for a formating"
  [this & args]
  (-> this .-queryCommandValue (.apply this (clj->js args))))

(defn write
  "Method.

  The Document.write() method writes a string of text to a document
  opened by `document.open()`.

  `document.write(markup);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/write`"
  [this markup]
  (-> this (.write markup)))

(defn writeln
  "Method.

  Writes a string of text followed by a newline character to a

  `document.writeln(line);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/writeln`"
  [this line]
  (-> this (.writeln line)))

(defn get-selection
  "Method.

  [Experimental]

  The getSelection() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.other.Selection` object representing the range
  text selected by the user, or the current position of the caret.

  `var selection = documentOrShadowRootInstance.getSelection()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn element-from-point
  "Method.

  The elementFromPoint() method—available on both the `web.Document`
  `web.shadow-dom.ShadowRoot` objects—returns the topmost `web.Element`
  the specified coordinates (relative to the viewport).

  `var element = document.elementFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint`"
  [this x y]
  (-> this (.elementFromPoint x y)))

(defn elements-from-point
  "Method.

  [Experimental]

  The elementsFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns an array of all elements at the specified coordinates
  to the viewport).

  `var elements = document.elementsFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint`"
  [this x y]
  (-> this (.elementsFromPoint x y)))

(defn caret-position-from-point
  "Method.

  [Experimental]

  The caretPositionFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.cssdom.CaretPosition` object, containing the DOM
  along with the caret and caret's character offset within that

  `var caretPosition = document.caretPositionFromPoint(float x, float y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`"
  [this & args]
  (-> this .-caretPositionFromPoint (.apply this (clj->js args))))

(defn append
  "Method.

  The ParentNode.append() method inserts a set of `web.Node` objects
  `web.dom.DOMString` objects after the last child of the ParentNode.
  objects are inserted as equivalent `web.Text` nodes.

  `[Throws, Unscopable]
  void ParentNode.append((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append`"
  [this & args]
  (-> this .-append (.apply this (clj->js args))))

(defn exit-fullscreen
  "Method.

  The `web.Document` method exitFullscreen() requests that the
  on this document which is currently being presented in full-screen
  be taken out of full-screen mode, restoring the previous state
  the screen.

  `exitPromise = document.exitFullscreen();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen`"
  [this ]
  (-> this (.exitFullscreen)))

(defn get-box-object-for
  "Method.

  [Obsolute]

  Returns a boxObject (x, y, width, height) for a specified element.

  `boxObject = document.getBoxObjectFor(element);


  boxObject is an nsIBoxObject.
  element is a `DOMElement`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/getBoxObjectFor`"
  [this & args]
  (-> this .-getBoxObjectFor (.apply this (clj->js args))))

(defn prepend
  "Method.

  The ParentNode.prepend() method inserts a set of `web.Node` objects
  `web.dom.DOMString` objects before the first child of the `web.ParentNode`.
  objects are inserted as equivalent `web.Text` nodes.

  `ParentNode.prepend(...nodesToPrepend);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`"
  [this & args]
  (-> this .-prepend (.apply this (clj->js args))))

(defn register-element
  "Method.

  [Deprecated]
  [Draft]

  The document.registerElement() method registers a new custom
  in the browser and returns a constructor for the new element.

  `var constructor = document.registerElement(tag-name, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/registerElement`"
  [this & args]
  (-> this .-registerElement (.apply this (clj->js args))))

(defn all
  "Property.

  [Read Only]
  [Deprecated]
  [Draft]

  The `web.Document` interface's read-only all property returns
  `HTMLAllCollection` rooted at the document node. In other words,
  returns the entire contents of the page.

  `var htmlAllCollection = document.all;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/all`"
  [this]
  (-> this (.-all)))

(defn anchors
  "Property.

  [Read Only]
  [Deprecated]

  The anchors read-only property of the `web.Document` interface
  a list of all of the anchors in the document.

  `nodeList = document.anchors;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/anchors`"
  [this]
  (-> this (.-anchors)))

(defn body
  "Property.

  The Document.body property represents the `<body>` or `<frameset>`
  of the current document, or null if no such element exists.

  `var objRef = document.body;
  document.body = objRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`"
  [this]
  (-> this (.-body)))

(defn set-body!
  "Property.

  The Document.body property represents the `<body>` or `<frameset>`
  of the current document, or null if no such element exists.

  `var objRef = document.body;
  document.body = objRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/body`"
  [this val]
  (aset this "body" val))

(defn character-set
  "Property.

  [Read Only]

  The Document.characterSet read-only property returns the character
  of the document that it's currently rendered with.

  `var string = document.characterSet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet`"
  [this]
  (-> this (.-characterSet)))

(defn compat-mode
  "Property.

  [Read Only]

  The Document.compatMode property indicates whether the document
  rendered in Quirks mode or Standards mode.

  `mode = document.compatMode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode`"
  [this]
  (-> this (.-compatMode)))

(defn content-type
  "Property.

  [Read Only]

  The Document.contentType read-only property returns the MIME
  that the document is being rendered as. This may come from HTTP
  or other sources of MIME information, and might be affected by
  type conversions performed by either the browser or extensions.

  `contentType = document.contentType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/contentType`"
  [this]
  (-> this (.-contentType)))

(defn doctype
  "Property.

  [Read Only]

  Returns the Document Type Declaration (DTD) associated with current
  The returned object implements the `web.DocumentType` interface.
  `DOMImplementation.createDocumentType()` to create a DocumentType.

  `doctype = document.doctype;


  doctype is a read-only property.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype`"
  [this]
  (-> this (.-doctype)))

(defn document-element
  "Property.

  [Read Only]

  Document.documentElement returns the `web.Element` that is the
  element of the `document` (for example, the `<html>` element
  HTML documents).

  `var element = document.documentElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement`"
  [this]
  (-> this (.-documentElement)))

(defn document-uri
  "Property.

  [Read Only]

  The documentURI property of the `web.Document` interface returns
  document location as a string.

  `var string = document.documentURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI`"
  [this]
  (-> this (.-documentURI)))

(defn embeds
  "Property.

  [Read Only]

  The embeds read-only property of the `web.Document` interface
  a list of the embedded `<object>` elements within the current

  `nodeList = document.embeds`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/embeds`"
  [this]
  (-> this (.-embeds)))

(defn fonts
  "Property.

  The fonts property of the `web.Document` interface returns the
  interface of the document.

  `let fontFaceSet = document.fonts;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts`"
  [this]
  (-> this (.-fonts)))

(defn set-fonts!
  "Property.

  The fonts property of the `web.Document` interface returns the
  interface of the document.

  `let fontFaceSet = document.fonts;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts`"
  [this val]
  (aset this "fonts" val))

(defn forms
  "Property.

  [Read Only]

  The forms read-only property of the `web.Document` interface
  an `web.dom.HTMLCollection` listing all the `<form>` elements
  in the document.

  `collection = document.forms;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/forms`"
  [this]
  (-> this (.-forms)))

(defn head
  "Property.

  [Read Only]

  The head read-only property of the `web.Document` interface returns
  `<head>` element of the current document.

  `var objRef = document.head;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/head`"
  [this]
  (-> this (.-head)))

(defn hidden
  "Property.

  [Read Only]

  The Document.hidden read-only property returns a Boolean value
  if the page is considered hidden or not.

  `var boolean = document.hidden`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden`"
  [this]
  (-> this (.-hidden)))

(defn images
  "Property.

  [Read Only]

  The images read-only property of the `web.Document` interface
  a collection of the images in the current HTML document.

  `var imageCollection = document.images;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/images`"
  [this]
  (-> this (.-images)))

(defn implementation
  "Property.

  [Read Only]

  The Document.implementation property returns a `web.dom.DOMImplementation`
  associated with the current document.

  `DOMImpObj = document.implementation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/implementation`"
  [this]
  (-> this (.-implementation)))

(defn last-style-sheet-set
  "Property.

  [Read Only]

  The Document.lastStyleSheetSet property returns the last enabled
  sheet set. This property's value changes whenever the `document.selectedStyleSheetSet`
  is changed.

  `var lastStyleSheetSet = document.lastStyleSheetSet

  On return, lastStyleSheetSet indicates the style sheet set that was most recently set. If the current style sheet set has not been changed by setting `document.selectedStyleSheetSet`, the returned value is null.

  Note: This value doesn't change when `document.enableStyleSheetsForSet()` is called.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastStyleSheetSet`"
  [this]
  (-> this (.-lastStyleSheetSet)))

(defn links
  "Property.

  [Read Only]

  The links read-only property of the `web.Document` interface
  a collection of all `<area>` elements and `<a>` elements in a
  with a value for the href attribute.

  `nodeList = document.links`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/links`"
  [this]
  (-> this (.-links)))

(defn moz-synthetic-document
  "Property.

  [Non Standard]

  The Document.mozSyntheticDocument property indicates whether
  not the document is a synthetic one; that is, a document representing
  standalone image, video, audio, or the like.

  `var isSynthetic = document.mozSyntheticDocument;

  On return, isSynthetic is true if the document is a synthetic one; otherwise it's false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSyntheticDocument`"
  [this]
  (-> this (.-mozSyntheticDocument)))

(defn set-moz-synthetic-document!
  "Property.

  [Non Standard]

  The Document.mozSyntheticDocument property indicates whether
  not the document is a synthetic one; that is, a document representing
  standalone image, video, audio, or the like.

  `var isSynthetic = document.mozSyntheticDocument;

  On return, isSynthetic is true if the document is a synthetic one; otherwise it's false.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/mozSyntheticDocument`"
  [this val]
  (aset this "mozSyntheticDocument" val))

(defn plugins
  "Property.

  [Read Only]

  The plugins read-only property of the `web.Document` interface
  an `web.dom.HTMLCollection` object containing one or more `web.dom.HTMLEmbedElement`s
  the `<embed>` elements in the current document.

  `embedArrayObj = document.plugins`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/plugins`"
  [this]
  (-> this (.-plugins)))

(defn feature-policy
  "Property.

  [Read Only]

  The featurePolicy read-only property of the `web.Document` interface
  the `web.other.FeaturePolicy` interface which provides a simple
  for inspecting the feature policies applied to a specific document.

  `var policy = iframeElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/featurePolicy`"
  [this]
  (-> this (.-featurePolicy)))

(defn preferred-style-sheet-set
  "Property.

  [Read Only]

  The preferredStyleSheetSet property returns the preferred style
  set as set by the page author.

  `preferredStyleSheetSet = document.preferredStyleSheetSet

  On return, preferredStyleSheetSet indicates the author's preferred style sheet set. This is determined from the order of style sheet declarations and the Default-Style HTTP header.

  If there isn't a preferred style sheet set defined by the author, the empty string (\\\"\\\") is returned.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/preferredStyleSheetSet`"
  [this]
  (-> this (.-preferredStyleSheetSet)))

(defn scripts
  "Property.

  [Read Only]

  The scripts property of the `web.Document` interface returns
  list of the `<script>` elements in the document. The returned
  is an `web.dom.HTMLCollection`.

  `var scriptList = document.scripts;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scripts`"
  [this]
  (-> this (.-scripts)))

(defn scrolling-element
  "Property.

  [Read Only]

  The scrollingElement read-only property of the `web.Document`
  returns a reference to the `web.Element` that scrolls the document.
  standards mode, this is the root element of the document, `document.documentElement`.

  `var element = document.scrollingElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/scrollingElement`"
  [this]
  (-> this (.-scrollingElement)))

(defn selected-style-sheet-set
  "Property.

  The selectedStyleSheetSet property indicates the name of the
  sheet set that's currently in use.

  `currentStyleSheetSet = document.selectedStyleSheetSet;

  document.selectedStyleSheet = newStyleSheetSet;

  On return, currentStyleSheetSet indicates the name of the style sheet set currently in use. You can also set the current style sheet set using this property.

  Setting the value of this property is equivalent to calling `document.enableStyleSheetsForSet()` with the value of currentStyleSheetSet, then setting the value of lastStyleSheetSet to that value as well.

  Note: This attribute's value is live; directly changing the disabled attribute on style sheets will affect the value of this attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectedStyleSheetSet`"
  [this]
  (-> this (.-selectedStyleSheetSet)))

(defn set-selected-style-sheet-set!
  "Property.

  The selectedStyleSheetSet property indicates the name of the
  sheet set that's currently in use.

  `currentStyleSheetSet = document.selectedStyleSheetSet;

  document.selectedStyleSheet = newStyleSheetSet;

  On return, currentStyleSheetSet indicates the name of the style sheet set currently in use. You can also set the current style sheet set using this property.

  Setting the value of this property is equivalent to calling `document.enableStyleSheetsForSet()` with the value of currentStyleSheetSet, then setting the value of lastStyleSheetSet to that value as well.

  Note: This attribute's value is live; directly changing the disabled attribute on style sheets will affect the value of this attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/selectedStyleSheetSet`"
  [this val]
  (aset this "selectedStyleSheetSet" val))

(defn style-sheet-sets
  "Property.

  [Read Only]

  The styleSheetSets read-only property returns a live list of
  of the currently-available style sheet sets.

  `var sets = document.styleSheetSets;

  On return, sets is a list of style sheet sets that are available.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheetSets`"
  [this]
  (-> this (.-styleSheetSets)))

(defn timeline
  "Property.

  [Read Only]
  [Experimental]

  The timeline readonly property of the `web.Document` interface
  the default timeline of the current document. This timeline is
  special instance of `web.animation.DocumentTimeline` that is
  created on page load.

  `var pageTimeline = document.timeline;
  var thisMoment = pageTimeline.currentTime;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/timeline`"
  [this]
  (-> this (.-timeline)))

(defn undo-manager
  "Property.

  …"
  [this]
  (-> this (.-undoManager)))

(defn set-undo-manager!
  "Property.

  …"
  [this val]
  (aset this "undoManager" val))

(defn visibility-state
  "Property.

  [Read Only]

  The Document.visibilityState read-only property returns the visibility
  the `document`, that is in which context this element is now
  It is useful to know if the document is in the background or
  invisible tab, or only loaded for pre-rendering.

  `var string = document.visibilityState`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState`"
  [this]
  (-> this (.-visibilityState)))

(defn child-element-count
  "Property.

  [Read Only]

  The ParentNode.childElementCount read-only property returns an
  long representing the number of child elements of the given element.

  `var count = node.childElementCount;


  count
  The return value, which is an unsigned long (simply an integer) type.
  node
  An object representing a `web.Document`, `web.web-components.DocumentFragment`, or `web.Element`.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount`"
  [this]
  (-> this (.-childElementCount)))

(defn children
  "Property.

  [Read Only]

  The `web.ParentNode` property children is a read-only property
  returns a live `web.dom.HTMLCollection` which contains all of
  child `elements` of the node upon which it was called.

  `var children = node.children;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children`"
  [this]
  (-> this (.-children)))

(defn first-element-child
  "Property.

  [Read Only]

  The ParentNode.firstElementChild read-only property returns the
  first child `web.Element`, or null if there are no child elements.

  `var element = node.firstElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild`"
  [this]
  (-> this (.-firstElementChild)))

(defn last-element-child
  "Property.

  [Read Only]

  The ParentNode.lastElementChild read-only property returns the
  last child `web.Element` or null if there are no child elements.

  `var element = node.lastElementChild;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/lastElementChild`"
  [this]
  (-> this (.-lastElementChild)))

(defn cookie
  "Property.

  The `web.Document` property cookie lets you read and write cookies
  with the document. It serves as a getter and setter for the actual
  of the cookies.

  ``

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie`"
  [this]
  (-> this (.-cookie)))

(defn set-cookie!
  "Property.

  The `web.Document` property cookie lets you read and write cookies
  with the document. It serves as a getter and setter for the actual
  of the cookies.

  ``

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie`"
  [this val]
  (aset this "cookie" val))

(defn default-view
  "Property.

  [Read Only]

  In browsers, document.defaultView returns the `window` object
  with a document, or null if none is available.

  `var win = document.defaultView;

  This property is read-only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView`"
  [this]
  (-> this (.-defaultView)))

(defn design-mode
  "Property.

  document.designMode controls whether the entire document is editable.
  values are \\\"on\\\" and \\\"off\\\". According to the specification,
  property is meant to default to \\\"off\\\". Firefox follows this
  The earlier versions of Chrome and IE default to \\\"inherit\\\".
  in Chrome 43, the default is \\\"off\\\" and \\\"inherit\\\" is no longer
  In IE6-10, the value is capitalized.

  `var mode = document.designMode;
  document.designMode = \\\"on\\\" || \\\"off\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode`"
  [this]
  (-> this (.-designMode)))

(defn set-design-mode!
  "Property.

  document.designMode controls whether the entire document is editable.
  values are \\\"on\\\" and \\\"off\\\". According to the specification,
  property is meant to default to \\\"off\\\". Firefox follows this
  The earlier versions of Chrome and IE default to \\\"inherit\\\".
  in Chrome 43, the default is \\\"off\\\" and \\\"inherit\\\" is no longer
  In IE6-10, the value is capitalized.

  `var mode = document.designMode;
  document.designMode = \\\"on\\\" || \\\"off\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode`"
  [this val]
  (aset this "designMode" val))

(defn dir
  "Property.

  [Read Only]

  The Document.dir property is a `web.dom.DOMString` representing
  directionality of the text of the document, whether left to right
  or right to left. Possible values are 'rtl', right to left, and
  left to right.

  `dirStr = document.dir;
  document.dir = dirStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/dir`"
  [this]
  (-> this (.-dir)))

(defn domain
  "Property.

  The domain property of the `web.Document` interface gets/sets
  domain portion of the origin of the current document, as used
  the same origin policy.

  `var domainString = document.domain;
  document.domain = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domain`"
  [this]
  (-> this (.-domain)))

(defn set-domain!
  "Property.

  The domain property of the `web.Document` interface gets/sets
  domain portion of the origin of the current document, as used
  the same origin policy.

  `var domainString = document.domain;
  document.domain = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domain`"
  [this val]
  (aset this "domain" val))

(defn last-modified
  "Property.

  [Read Only]

  The lastModified property of the `web.Document` interface returns
  string containing the date and time on which the current document
  last modified.

  `var string = document.lastModified;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified`"
  [this]
  (-> this (.-lastModified)))

(defn location
  "Property.

  [Read Only]

  The Document.location read-only property returns a `web.dom.Location`
  which contains information about the URL of the document and
  methods for changing that URL and loading another URL.

  `locationObj = document.location
  document.location = 'http://www.mozilla.org' // Equivalent to document.location.href = 'http://www.mozilla.org'`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/location`"
  [this]
  (-> this (.-location)))

(defn ready-state
  "Property.

  [Read Only]

  The Document.readyState property describes the loading state
  the `document`.

  `var string = document.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState`"
  [this]
  (-> this (.-readyState)))

(defn referrer
  "Property.

  [Read Only]

  The Document.referrer property returns the URI of the page that
  to this page.

  `var referrer = document.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer`"
  [this]
  (-> this (.-referrer)))

(defn title
  "Property.

  The document.title property gets or sets the current title of
  document.

  `var docTitle = document.title;

  docTitle is a string containing the document's title. If the title was overridden by setting document.title, it contains that value. Otherwise, it contains the title specified in the markup (see the Notes below).



  document.title = newTitle;

  newTitle is the new title of the document. The assignment affects the return value of document.title, the title displayed for the document (e.g. in the titlebar of the window or tab), and it also affects the DOM of the document (e.g. the content of the <title> element in an HTML document).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/title`"
  [this]
  (-> this (.-title)))

(defn set-title!
  "Property.

  The document.title property gets or sets the current title of
  document.

  `var docTitle = document.title;

  docTitle is a string containing the document's title. If the title was overridden by setting document.title, it contains that value. Otherwise, it contains the title specified in the markup (see the Notes below).



  document.title = newTitle;

  newTitle is the new title of the document. The assignment affects the return value of document.title, the title displayed for the document (e.g. in the titlebar of the window or tab), and it also affects the DOM of the document (e.g. the content of the <title> element in an HTML document).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/title`"
  [this val]
  (aset this "title" val))

(defn url
  "Property.

  [Read Only]

  The URL read-only property of the `web.Document` interface returns
  document location as a string.

  `var string = document.URL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/URL`"
  [this]
  (-> this (.-URL)))

(defn active-element
  "Property.

  [Read Only]

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this]
  (-> this (.-activeElement)))

(defn fullscreen-element
  "Property.

  The element that's currently in full screen mode for this document."
  [this]
  (-> this (.-fullscreenElement)))

(defn set-fullscreen-element!
  "Property.

  The element that's currently in full screen mode for this document."
  [this val]
  (aset this "fullscreenElement" val))

(defn pointer-lock-element
  "Property.

  [Read Only]

  The pointerLockElement property of the `web.Document` and `web.shadow-dom.ShadowRoot`
  provides the element set as the target for mouse events while
  pointer is locked. It is null if lock is pending, pointer is
  or the target is in another document.

  `var element = document.pointerLockElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`"
  [this]
  (-> this (.-pointerLockElement)))

(defn style-sheets
  "Property.

  [Read Only]
  [Experimental]

  The styleSheets read-only property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.cssdom.StyleSheetList` of `web.cssdom.CSSStyleSheet`
  for stylesheets explicitly linked into or embedded in a document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`"
  [this]
  (-> this (.-styleSheets)))

(defn onafterscriptexecute
  "Property.

  [Non Standard]

  The Document.onafterscriptexecute property references a function
  fires when a static `<script>` element finishes executing its
  It does not fire if the element is added dynamically, such as
  `appendChild()`.

  `document.onafterscriptexecute = funcRef;

  funcRef is a function reference, called when the event is fired. The event's target attribute is set to the `<script>` element that just finished executing.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onafterscriptexecute`"
  [this]
  (-> this (.-onafterscriptexecute)))

(defn set-onafterscriptexecute!
  "Property.

  [Non Standard]

  The Document.onafterscriptexecute property references a function
  fires when a static `<script>` element finishes executing its
  It does not fire if the element is added dynamically, such as
  `appendChild()`.

  `document.onafterscriptexecute = funcRef;

  funcRef is a function reference, called when the event is fired. The event's target attribute is set to the `<script>` element that just finished executing.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onafterscriptexecute`"
  [this val]
  (aset this "onafterscriptexecute" val))

(defn onbeforescriptexecute
  "Property.

  [Non Standard]

  Fired when the code in a `<script>` element declared in an HTML
  is about to start executing. Does not fire if the element is
  dynamically, eg with appendChild().

  `document.onbeforescriptexecute = funcRef;

  funcRef is a function reference, called when the event is fired. The event's target attribute is set to the script `web.Element` that is about to be executed.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onbeforescriptexecute`"
  [this]
  (-> this (.-onbeforescriptexecute)))

(defn set-onbeforescriptexecute!
  "Property.

  [Non Standard]

  Fired when the code in a `<script>` element declared in an HTML
  is about to start executing. Does not fire if the element is
  dynamically, eg with appendChild().

  `document.onbeforescriptexecute = funcRef;

  funcRef is a function reference, called when the event is fired. The event's target attribute is set to the script `web.Element` that is about to be executed.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onbeforescriptexecute`"
  [this val]
  (aset this "onbeforescriptexecute" val))

(defn oncopy
  "Property.

  Represents the event handling code for the copy event."
  [this]
  (-> this (.-oncopy)))

(defn set-oncopy!
  "Property.

  Represents the event handling code for the copy event."
  [this val]
  (aset this "oncopy" val))

(defn oncut
  "Property.

  Represents the event handling code for the cut event."
  [this]
  (-> this (.-oncut)))

(defn set-oncut!
  "Property.

  Represents the event handling code for the cut event."
  [this val]
  (aset this "oncut" val))

(defn onfullscreenchange
  "Property.

  The `web.Document` interface's onfullscreenchange property is
  event handler for the fullscreenchange event that is fired immediately
  a document transitions into or out of full-screen mode.

  `targetDocument.onfullscreenchange = fullscreenChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenchange`"
  [this]
  (-> this (.-onfullscreenchange)))

(defn set-onfullscreenchange!
  "Property.

  The `web.Document` interface's onfullscreenchange property is
  event handler for the fullscreenchange event that is fired immediately
  a document transitions into or out of full-screen mode.

  `targetDocument.onfullscreenchange = fullscreenChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenchange`"
  [this val]
  (aset this "onfullscreenchange" val))

(defn onfullscreenerror
  "Property.

  The Document.onfullscreenerror property is an event handler for
  fullscreenerror event that is sent to the document when it fails
  transition into full-screen mode after a prior call to `Element.requestFullscreen()`.

  `targetDocument.onfullscreenerror = fullscreenErrorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenerror`"
  [this]
  (-> this (.-onfullscreenerror)))

(defn set-onfullscreenerror!
  "Property.

  The Document.onfullscreenerror property is an event handler for
  fullscreenerror event that is sent to the document when it fails
  transition into full-screen mode after a prior call to `Element.requestFullscreen()`.

  `targetDocument.onfullscreenerror = fullscreenErrorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onfullscreenerror`"
  [this val]
  (aset this "onfullscreenerror" val))

(defn onpaste
  "Property.

  Represents the event handling code for the paste event."
  [this]
  (-> this (.-onpaste)))

(defn set-onpaste!
  "Property.

  Represents the event handling code for the paste event."
  [this val]
  (aset this "onpaste" val))

(defn onreadystatechange
  "Property.

  Represents the event handling code for the readystatechange event."
  [this]
  (-> this (.-onreadystatechange)))

(defn set-onreadystatechange!
  "Property.

  Represents the event handling code for the readystatechange event."
  [this val]
  (aset this "onreadystatechange" val))

(defn onselectionchange
  "Property.

  Is an EventHandler representing the code to be called when the
  event is raised."
  [this]
  (-> this (.-onselectionchange)))

(defn set-onselectionchange!
  "Property.

  Is an EventHandler representing the code to be called when the
  event is raised."
  [this val]
  (aset this "onselectionchange" val))

(defn onvisibilitychange
  "Property.

  The Document.onvisibilitychange property represents the event
  that is called when a visibilitychange event reaches this object.

  `obj.onvisibilitychange = function;


  function is the name of a user-defined function, without the () suffix or any parameters, or an anonymous function declaration.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onvisibilitychange`"
  [this]
  (-> this (.-onvisibilitychange)))

(defn set-onvisibilitychange!
  "Property.

  The Document.onvisibilitychange property represents the event
  that is called when a visibilitychange event reaches this object.

  `obj.onvisibilitychange = function;


  function is the name of a user-defined function, without the () suffix or any parameters, or an anonymous function declaration.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onvisibilitychange`"
  [this val]
  (aset this "onvisibilitychange" val))

(defn alink-color
  "Property.

  [Deprecated]

  Returns or sets the color of an active link in the document body.
  link is active during the time between mousedown and mouseup

  `var color = document.alinkColor;
  document.alinkColor = color;

  color is a string containing the name of the color (e.g., blue, darkblue, etc.) or the hexadecimal value of the color (e.g., #0000FF)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/alinkColor`"
  [this]
  (-> this (.-alinkColor)))

(defn set-alink-color!
  "Property.

  [Deprecated]

  Returns or sets the color of an active link in the document body.
  link is active during the time between mousedown and mouseup

  `var color = document.alinkColor;
  document.alinkColor = color;

  color is a string containing the name of the color (e.g., blue, darkblue, etc.) or the hexadecimal value of the color (e.g., #0000FF)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/alinkColor`"
  [this val]
  (aset this "alinkColor" val))

(defn applets
  "Property.

  [Read Only]
  [Deprecated]

  The applets property of the `web.Document` interface returns
  list of the applets within a document.

  `var nodeList = document.applets;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/applets`"
  [this]
  (-> this (.-applets)))

(defn bg-color
  "Property.

  [Deprecated]

  The deprecated bgColor property gets or sets the background color
  the current document.

  `color = document.bgColor
  document.bgColor =color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/bgColor`"
  [this]
  (-> this (.-bgColor)))

(defn set-bg-color!
  "Property.

  [Deprecated]

  The deprecated bgColor property gets or sets the background color
  the current document.

  `color = document.bgColor
  document.bgColor =color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/bgColor`"
  [this val]
  (aset this "bgColor" val))

(defn charset
  "Property.

  Alias of Document.characterSet. Use this property instead."
  [this]
  (-> this (.-charset)))

(defn set-charset!
  "Property.

  Alias of Document.characterSet. Use this property instead."
  [this val]
  (aset this "charset" val))

(defn dom-config
  "Property.

  [Deprecated]

  This should return the DOMConfiguration for the document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domConfig`"
  [this]
  (-> this (.-domConfig)))

(defn set-dom-config!
  "Property.

  [Deprecated]

  This should return the DOMConfiguration for the document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/domConfig`"
  [this val]
  (aset this "domConfig" val))

(defn fg-color
  "Property.

  [Deprecated]

  fgColor gets/sets the foreground color, or text color, of the
  document.

  `var color = document.fgColor;
  document.fgColor = color;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fgColor`"
  [this]
  (-> this (.-fgColor)))

(defn set-fg-color!
  "Property.

  [Deprecated]

  fgColor gets/sets the foreground color, or text color, of the
  document.

  `var color = document.fgColor;
  document.fgColor = color;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fgColor`"
  [this val]
  (aset this "fgColor" val))

(defn fullscreen
  "Property.

  [Read Only]
  [Deprecated]

  The obsolete `web.Document` interface's fullscreen read-only
  reports whether or not the document is currently displaying content
  full-screen mode.

  `var isFullScreen = document.fullscreen;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreen`"
  [this]
  (-> this (.-fullscreen)))

(defn height
  "Property.

  [Obsolute]

  Returns the height of the `document` object. In most cases, this
  equal to the `<body>` element of the current document.

  `pixels = document.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/height`"
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  [Obsolute]

  Returns the height of the `document` object. In most cases, this
  equal to the `<body>` element of the current document.

  `pixels = document.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/height`"
  [this val]
  (aset this "height" val))

(defn input-encoding
  "Property.

  Alias of Document.characterSet. Use this property instead."
  [this]
  (-> this (.-inputEncoding)))

(defn set-input-encoding!
  "Property.

  Alias of Document.characterSet. Use this property instead."
  [this val]
  (aset this "inputEncoding" val))

(defn link-color
  "Property.

  [Deprecated]

  The Document.linkColor property gets/sets the color of links
  the document.

  `color = document.linkColor
  document.linkColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/linkColor`"
  [this]
  (-> this (.-linkColor)))

(defn set-link-color!
  "Property.

  [Deprecated]

  The Document.linkColor property gets/sets the color of links
  the document.

  `color = document.linkColor
  document.linkColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/linkColor`"
  [this val]
  (aset this "linkColor" val))

(defn vlink-color
  "Property.

  [Deprecated]

  The Document.vlinkColor property gets/sets the color of links
  the user has visited in the document.

  `color = document.vlinkColor
  document.vlinkColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/vlinkColor`"
  [this]
  (-> this (.-vlinkColor)))

(defn set-vlink-color!
  "Property.

  [Deprecated]

  The Document.vlinkColor property gets/sets the color of links
  the user has visited in the document.

  `color = document.vlinkColor
  document.vlinkColor = color`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/vlinkColor`"
  [this val]
  (aset this "vlinkColor" val))

(defn width
  "Property.

  [Obsolute]

  Returns the width of the `<body>` element of the current document
  pixels.

  `pixels = document.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/width`"
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  [Obsolute]

  Returns the width of the `<body>` element of the current document
  pixels.

  `pixels = document.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/width`"
  [this val]
  (aset this "width" val))

(defn xml-encoding
  "Property.

  [Obsolute]

  Returns the encoding as determined by the XML declaration. Should
  null if unspecified or unknown.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlEncoding`"
  [this]
  (-> this (.-xmlEncoding)))

(defn set-xml-encoding!
  "Property.

  [Obsolute]

  Returns the encoding as determined by the XML declaration. Should
  null if unspecified or unknown.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlEncoding`"
  [this val]
  (aset this "xmlEncoding" val))

(defn xml-standalone
  "Property.

  Returns true if the XML declaration specifies the document to
  standalone (e.g., An external part of the DTD affects the document's
  else false."
  [this]
  (-> this (.-xmlStandalone)))

(defn set-xml-standalone!
  "Property.

  Returns true if the XML declaration specifies the document to
  standalone (e.g., An external part of the DTD affects the document's
  else false."
  [this val]
  (aset this "xmlStandalone" val))

(defn xml-version
  "Property.

  [Obsolute]

  Returns the version number as specified in the XML declaration
  <?xml version=\\\"1.0\\\"?>) or \\\"1.0\\\" if the declaration is absent.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlVersion`"
  [this]
  (-> this (.-xmlVersion)))

(defn set-xml-version!
  "Property.

  [Obsolute]

  Returns the version number as specified in the XML declaration
  <?xml version=\\\"1.0\\\"?>) or \\\"1.0\\\" if the declaration is absent.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/xmlVersion`"
  [this val]
  (aset this "xmlVersion" val))

(defn current-script
  "Property.

  The Document.currentScript property returns the `<script>` element
  script is currently being processed and isn't a JavaScript module.
  modules use import.meta instead.)

  `var curScriptElement = document.currentScript;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript`"
  [this]
  (-> this (.-currentScript)))

(defn set-current-script!
  "Property.

  The Document.currentScript property returns the `<script>` element
  script is currently being processed and isn't a JavaScript module.
  modules use import.meta instead.)

  `var curScriptElement = document.currentScript;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript`"
  [this val]
  (aset this "currentScript" val))

(defn document-uri-object
  "Property.

  [Read Only]
  [Non Standard]

  The Document.documentURIObject read-only property returns an
  object representing the URI of the document.

  `var uri = document.documentURIObject;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURIObject`"
  [this]
  (-> this (.-documentURIObject)))

(defn fullscreen-enabled
  "Property.

  [Read Only]

  The read-only fullscreenEnabled property on the `web.Document`
  indicates whether or not full-screen mode is available.

  `var isFullscreenAvailable = document.fullscreenEnabled;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled`"
  [this]
  (-> this (.-fullscreenEnabled)))

(defn onabort
  "Property.

  [Draft]
  [Experimental]

  The onabort property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  [Draft]
  [Experimental]

  The onabort property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onanimationcancel
  "Property.

  The onanimationcancel property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this]
  (-> this (.-onanimationcancel)))

(defn set-onanimationcancel!
  "Property.

  The onanimationcancel property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this val]
  (aset this "onanimationcancel" val))

(defn onanimationend
  "Property.

  The onanimationend property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this]
  (-> this (.-onanimationend)))

(defn set-onanimationend!
  "Property.

  The onanimationend property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this val]
  (aset this "onanimationend" val))

(defn onanimationiteration
  "Property.

  [Draft]

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this]
  (-> this (.-onanimationiteration)))

(defn set-onanimationiteration!
  "Property.

  [Draft]

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this val]
  (aset this "onanimationiteration" val))

(defn onauxclick
  "Property.

  [Experimental]

  The onauxclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this]
  (-> this (.-onauxclick)))

(defn set-onauxclick!
  "Property.

  [Experimental]

  The onauxclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this val]
  (aset this "onauxclick" val))

(defn onblur
  "Property.

  The onblur property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this]
  (-> this (.-onblur)))

(defn set-onblur!
  "Property.

  The onblur property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this val]
  (aset this "onblur" val))

(defn oncancel
  "Property.

  The oncancel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing cancel events sent to a `<dialog>`

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this]
  (-> this (.-oncancel)))

(defn set-oncancel!
  "Property.

  The oncancel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing cancel events sent to a `<dialog>`

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this val]
  (aset this "oncancel" val))

(defn oncanplay
  "Property.

  The oncanplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this]
  (-> this (.-oncanplay)))

(defn set-oncanplay!
  "Property.

  The oncanplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this val]
  (aset this "oncanplay" val))

(defn oncanplaythrough
  "Property.

  The oncanplaythrough property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this]
  (-> this (.-oncanplaythrough)))

(defn set-oncanplaythrough!
  "Property.

  The oncanplaythrough property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this val]
  (aset this "oncanplaythrough" val))

(defn onchange
  "Property.

  The onchange property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.event.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.event.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onclick
  "Property.

  The onclick property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this]
  (-> this (.-onclick)))

(defn set-onclick!
  "Property.

  The onclick property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this val]
  (aset this "onclick" val))

(defn onclose
  "Property.

  [Experimental]

  The onclose property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing close events sent to a `<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

  [Experimental]

  The onclose property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing close events sent to a `<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this val]
  (aset this "onclose" val))

(defn oncontextmenu
  "Property.

  The oncontextmenu property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this]
  (-> this (.-oncontextmenu)))

(defn set-oncontextmenu!
  "Property.

  The oncontextmenu property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this val]
  (aset this "oncontextmenu" val))

(defn oncuechange
  "Property.

  The oncuechange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this]
  (-> this (.-oncuechange)))

(defn set-oncuechange!
  "Property.

  The oncuechange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this val]
  (aset this "oncuechange" val))

(defn ondblclick
  "Property.

  The ondblclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this]
  (-> this (.-ondblclick)))

(defn set-ondblclick!
  "Property.

  The ondblclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this val]
  (aset this "ondblclick" val))

(defn ondurationchange
  "Property.

  The ondurationchange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this]
  (-> this (.-ondurationchange)))

(defn set-ondurationchange!
  "Property.

  The ondurationchange property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this val]
  (aset this "ondurationchange" val))

(defn onended
  "Property.

  The onended property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this]
  (-> this (.-onended)))

(defn set-onended!
  "Property.

  The onended property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this val]
  (aset this "onended" val))

(defn onerror
  "Property.

  The onerror property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onfocus
  "Property.

  The onfocus property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this]
  (-> this (.-onfocus)))

(defn set-onfocus!
  "Property.

  The onfocus property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this val]
  (aset this "onfocus" val))

(defn ongotpointercapture
  "Property.

  The ongotpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this]
  (-> this (.-ongotpointercapture)))

(defn set-ongotpointercapture!
  "Property.

  The ongotpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this val]
  (aset this "ongotpointercapture" val))

(defn oninput
  "Property.

  The oninput property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes input events on the `<input>`,
  and `<textarea>` elements. It also handles these events on elements
  `contenteditable` or `designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this]
  (-> this (.-oninput)))

(defn set-oninput!
  "Property.

  The oninput property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes input events on the `<input>`,
  and `<textarea>` elements. It also handles these events on elements
  `contenteditable` or `designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this val]
  (aset this "oninput" val))

(defn oninvalid
  "Property.

  The oninvalid property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this]
  (-> this (.-oninvalid)))

(defn set-oninvalid!
  "Property.

  The oninvalid property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this val]
  (aset this "oninvalid" val))

(defn onkeydown
  "Property.

  The onkeydown property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this]
  (-> this (.-onkeydown)))

(defn set-onkeydown!
  "Property.

  The onkeydown property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this val]
  (aset this "onkeydown" val))

(defn onkeypress
  "Property.

  [Deprecated]

  The onkeypress property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this]
  (-> this (.-onkeypress)))

(defn set-onkeypress!
  "Property.

  [Deprecated]

  The onkeypress property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this val]
  (aset this "onkeypress" val))

(defn onkeyup
  "Property.

  The onkeyup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this]
  (-> this (.-onkeyup)))

(defn set-onkeyup!
  "Property.

  The onkeyup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this val]
  (aset this "onkeyup" val))

(defn onload
  "Property.

  The onload property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes load events on a `web.Window`,
  `<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this]
  (-> this (.-onload)))

(defn set-onload!
  "Property.

  The onload property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes load events on a `web.Window`,
  `<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this val]
  (aset this "onload" val))

(defn onloadeddata
  "Property.

  The onloadeddata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this]
  (-> this (.-onloadeddata)))

(defn set-onloadeddata!
  "Property.

  The onloadeddata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this val]
  (aset this "onloadeddata" val))

(defn onloadedmetadata
  "Property.

  The onloadedmetadata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this]
  (-> this (.-onloadedmetadata)))

(defn set-onloadedmetadata!
  "Property.

  The onloadedmetadata property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this val]
  (aset this "onloadedmetadata" val))

(defn onloadend
  "Property.

  The onloadend property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` representing the code to be called when the
  event is raised (when progress has stopped on the loading of
  resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this]
  (-> this (.-onloadend)))

(defn set-onloadend!
  "Property.

  The onloadend property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` representing the code to be called when the
  event is raised (when progress has stopped on the loading of
  resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this val]
  (aset this "onloadend" val))

(defn onloadstart
  "Property.

  The onloadstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this]
  (-> this (.-onloadstart)))

(defn set-onloadstart!
  "Property.

  The onloadstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this val]
  (aset this "onloadstart" val))

(defn onlostpointercapture
  "Property.

  The onlostpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this]
  (-> this (.-onlostpointercapture)))

(defn set-onlostpointercapture!
  "Property.

  The onlostpointercapture property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this val]
  (aset this "onlostpointercapture" val))

(defn onmousedown
  "Property.

  The onmousedown property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this]
  (-> this (.-onmousedown)))

(defn set-onmousedown!
  "Property.

  The onmousedown property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this val]
  (aset this "onmousedown" val))

(defn onmouseenter
  "Property.

  The onmouseenter property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this]
  (-> this (.-onmouseenter)))

(defn set-onmouseenter!
  "Property.

  The onmouseenter property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this val]
  (aset this "onmouseenter" val))

(defn onmouseleave
  "Property.

  The onmouseleave property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this]
  (-> this (.-onmouseleave)))

(defn set-onmouseleave!
  "Property.

  The onmouseleave property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this val]
  (aset this "onmouseleave" val))

(defn onmousemove
  "Property.

  The onmousemove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this]
  (-> this (.-onmousemove)))

(defn set-onmousemove!
  "Property.

  The onmousemove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this val]
  (aset this "onmousemove" val))

(defn onmouseout
  "Property.

  The onmouseout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this]
  (-> this (.-onmouseout)))

(defn set-onmouseout!
  "Property.

  The onmouseout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this val]
  (aset this "onmouseout" val))

(defn onmouseover
  "Property.

  The onmouseover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this]
  (-> this (.-onmouseover)))

(defn set-onmouseover!
  "Property.

  The onmouseover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this val]
  (aset this "onmouseover" val))

(defn onmouseup
  "Property.

  The onmouseup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this]
  (-> this (.-onmouseup)))

(defn set-onmouseup!
  "Property.

  The onmouseup property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this val]
  (aset this "onmouseup" val))

(defn onoffline
  "Property.

  The Document.onoffline event handler is called when an offline
  fired on the `<body>` element and bubbles up, when `navigator.onLine`
  changes and becomes false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onoffline`"
  [this]
  (-> this (.-onoffline)))

(defn set-onoffline!
  "Property.

  The Document.onoffline event handler is called when an offline
  fired on the `<body>` element and bubbles up, when `navigator.onLine`
  changes and becomes false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/onoffline`"
  [this val]
  (aset this "onoffline" val))

(defn ononline
  "Property.

  The Document.online event is fired on the `<body>` of each page
  the browser switches between online and offline mode. Additionally,
  events bubble up from document.body, to document, ending at window.
  events are non-cancellable (you can't prevent the user from coming
  or going offline).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/ononline`"
  [this]
  (-> this (.-ononline)))

(defn set-ononline!
  "Property.

  The Document.online event is fired on the `<body>` of each page
  the browser switches between online and offline mode. Additionally,
  events bubble up from document.body, to document, ending at window.
  events are non-cancellable (you can't prevent the user from coming
  or going offline).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/ononline`"
  [this val]
  (aset this "ononline" val))

(defn onpause
  "Property.

  The onpause property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this]
  (-> this (.-onpause)))

(defn set-onpause!
  "Property.

  The onpause property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this val]
  (aset this "onpause" val))

(defn onplay
  "Property.

  The onplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this]
  (-> this (.-onplay)))

(defn set-onplay!
  "Property.

  The onplay property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this val]
  (aset this "onplay" val))

(defn onpointercancel
  "Property.

  The onpointercancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this]
  (-> this (.-onpointercancel)))

(defn set-onpointercancel!
  "Property.

  The onpointercancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this val]
  (aset this "onpointercancel" val))

(defn onpointerdown
  "Property.

  The `web.dom.GlobalEventHandlers` event handler onpointerdown
  used to specify the event handler for the pointerdown event,
  is fired when the pointing device is initially pressed. This
  can be sent to `web.Window`, `web.Document`, and `web.Element`

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this]
  (-> this (.-onpointerdown)))

(defn set-onpointerdown!
  "Property.

  The `web.dom.GlobalEventHandlers` event handler onpointerdown
  used to specify the event handler for the pointerdown event,
  is fired when the pointing device is initially pressed. This
  can be sent to `web.Window`, `web.Document`, and `web.Element`

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this val]
  (aset this "onpointerdown" val))

(defn onpointerenter
  "Property.

  The onpointerenter property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerenter events.

  `targetElement.onpointerenter = enterHandler;

  var enterHandler = targetElement.onpointerenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`"
  [this]
  (-> this (.-onpointerenter)))

(defn set-onpointerenter!
  "Property.

  The onpointerenter property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerenter events.

  `targetElement.onpointerenter = enterHandler;

  var enterHandler = targetElement.onpointerenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`"
  [this val]
  (aset this "onpointerenter" val))

(defn onpointerleave
  "Property.

  The global event handler for the pointerleave event, which is
  to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
  its hit test area (for example, if the cursor exits an `web.Element`
  `web.Window`'s content area). This event is part of the Pointer
  API.

  `EventTarget.onpointerleave = leaveHandler;

  var leaveHandler = EventTarget.onpointerleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`"
  [this]
  (-> this (.-onpointerleave)))

(defn set-onpointerleave!
  "Property.

  The global event handler for the pointerleave event, which is
  to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
  its hit test area (for example, if the cursor exits an `web.Element`
  `web.Window`'s content area). This event is part of the Pointer
  API.

  `EventTarget.onpointerleave = leaveHandler;

  var leaveHandler = EventTarget.onpointerleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`"
  [this val]
  (aset this "onpointerleave" val))

(defn onpointermove
  "Property.

  The onpointermove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this]
  (-> this (.-onpointermove)))

(defn set-onpointermove!
  "Property.

  The onpointermove property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this val]
  (aset this "onpointermove" val))

(defn onpointerout
  "Property.

  The onpointerout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this]
  (-> this (.-onpointerout)))

(defn set-onpointerout!
  "Property.

  The onpointerout property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this val]
  (aset this "onpointerout" val))

(defn onpointerover
  "Property.

  The onpointerover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this]
  (-> this (.-onpointerover)))

(defn set-onpointerover!
  "Property.

  The onpointerover property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this val]
  (aset this "onpointerover" val))

(defn onpointerup
  "Property.

  The onpointerup property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this]
  (-> this (.-onpointerup)))

(defn set-onpointerup!
  "Property.

  The onpointerup property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this val]
  (aset this "onpointerup" val))

(defn onreset
  "Property.

  The onreset property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this]
  (-> this (.-onreset)))

(defn set-onreset!
  "Property.

  The onreset property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this val]
  (aset this "onreset" val))

(defn onresize
  "Property.

  The onresize property of the `web.dom.GlobalEventHandlers` interface
  an `EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this]
  (-> this (.-onresize)))

(defn set-onresize!
  "Property.

  The onresize property of the `web.dom.GlobalEventHandlers` interface
  an `EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this val]
  (aset this "onresize" val))

(defn onscroll
  "Property.

  The onscroll property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this]
  (-> this (.-onscroll)))

(defn set-onscroll!
  "Property.

  The onscroll property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this val]
  (aset this "onscroll" val))

(defn onselect
  "Property.

  The onselect property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes `select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this]
  (-> this (.-onselect)))

(defn set-onselect!
  "Property.

  The onselect property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes `select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this val]
  (aset this "onselect" val))

(defn onselectstart
  "Property.

  [Experimental]

  The onselectstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this]
  (-> this (.-onselectstart)))

(defn set-onselectstart!
  "Property.

  [Experimental]

  The onselectstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this val]
  (aset this "onselectstart" val))

(defn onsubmit
  "Property.

  The onsubmit property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this]
  (-> this (.-onsubmit)))

(defn set-onsubmit!
  "Property.

  The onsubmit property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this val]
  (aset this "onsubmit" val))

(defn ontouchcancel
  "Property.

  [Experimental]

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this]
  (-> this (.-ontouchcancel)))

(defn set-ontouchcancel!
  "Property.

  [Experimental]

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this val]
  (aset this "ontouchcancel" val))

(defn ontouchstart
  "Property.

  [Experimental]

  The ontouchstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this]
  (-> this (.-ontouchstart)))

(defn set-ontouchstart!
  "Property.

  [Experimental]

  The ontouchstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this val]
  (aset this "ontouchstart" val))

(defn ontransitioncancel
  "Property.

  The ontransitioncancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this]
  (-> this (.-ontransitioncancel)))

(defn set-ontransitioncancel!
  "Property.

  The ontransitioncancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this val]
  (aset this "ontransitioncancel" val))

(defn ontransitionend
  "Property.

  The ontransitionend property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this]
  (-> this (.-ontransitionend)))

(defn set-ontransitionend!
  "Property.

  The ontransitionend property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this val]
  (aset this "ontransitionend" val))

(defn onwheel
  "Property.

  The onwheel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this]
  (-> this (.-onwheel)))

(defn set-onwheel!
  "Property.

  The onwheel property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this val]
  (aset this "onwheel" val))

(defn origin
  "Property.

  [Read Only]
  [Experimental]

  The Document.origin read-only property returns the document's
  In most cases, this property is equivalent to document.defaultView.location.origin.

  `var origin = document.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/origin`"
  [this]
  (-> this (.-origin)))

(defn popup-node
  "Property.

  [Deprecated]

  When a popup attached via the popup or context attributes is
  the XUL document's popupNode property is set to the node that
  clicked on. This will be the target of the mouse event that activated
  popup. If the popup was opened via the keyboard, the popup node
  be set to null. Typically, this property will be checked during
  popupshowing event handler for a context menu to initialize the
  based on the context.

  `var node = document.popupNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/popupNode`"
  [this]
  (-> this (.-popupNode)))

(defn set-popup-node!
  "Property.

  [Deprecated]

  When a popup attached via the popup or context attributes is
  the XUL document's popupNode property is set to the node that
  clicked on. This will be the target of the mouse event that activated
  popup. If the popup was opened via the keyboard, the popup node
  be set to null. Typically, this property will be checked during
  popupshowing event handler for a context menu to initialize the
  based on the context.

  `var node = document.popupNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/popupNode`"
  [this val]
  (aset this "popupNode" val))

(defn tooltip-node
  "Property.

  [Non Standard]
  [Draft]

  The Document.tooltipNode property returns the node which is the
  of the current <xul:tooltip>.

  `document.tooltipNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/tooltipNode`"
  [this]
  (-> this (.-tooltipNode)))

(defn set-tooltip-node!
  "Property.

  [Non Standard]
  [Draft]

  The Document.tooltipNode property returns the node which is the
  of the current <xul:tooltip>.

  `document.tooltipNode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/tooltipNode`"
  [this val]
  (aset this "tooltipNode" val))

