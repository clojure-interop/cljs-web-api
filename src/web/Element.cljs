(ns web.Element
  "Element is the most general base class from which all objects
  a `web.Document` inherit. It only has methods and properties
  to all kinds of elements. More specific classes inherit from"
  (:refer-clojure :exclude [name remove]))

(defn add-event-listener
  "Method.

  The `web.EventTarget` method addEventListener() sets up a function
  will be called whenever the specified event is delivered to the

  `target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`"
  [this & args]
  (-> this .-addEventListener (.apply this (clj->js args))))

(defn attach-shadow
  "Method.

  The Element.attachShadow() method attaches a shadow DOM tree
  the specified element and returns a reference to its `web.shadow-dom.ShadowRoot`.

  `var shadowroot = element.attachShadow(shadowRootInit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow`"
  [this shadow-root-init]
  (-> this (.attachShadow shadow-root-init)))

(defn animate
  "Method.

  [Experimental]

  The `web.Element` interface's animate() method is a shortcut
  which creates a new `web.animation.Animation`, applies it to
  element, then plays the animation. It returns the created `web.animation.Animation`
  instance.

  `var animation = element.animate(keyframes, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/animate`"
  [this keyframes options]
  (-> this (.animate keyframes options)))

(defn closest
  "Method.

  For browsers that do not support Element.closest(), but carry
  for element.matches() (or a prefixed equivalent, meaning IE9+),
  polyfill exists:

  `var closestElement = element.closest(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/closest`"
  [this selectors]
  (-> this (.closest selectors)))

(defn create-shadow-root
  "Method.

  [Deprecated]
  [Non Standard]
  [Draft]

  Use Element.createShadowRoot to create an instance of shadow
  When shadow DOM is created, it is always attached to an existing
  After the shadow DOM is created, the element that it is attached
  is called the shadow root.

  `var shadowroot = element.createShadowRoot();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/createShadowRoot`"
  [this ]
  (-> this (.createShadowRoot)))

(defn computed-style-map
  "Method.

  [Experimental]

  The computedStyleMap() method of the `web.Element` interface
  a `web.css.StylePropertyMapReadOnly` interface which provides
  read-only representation of a CSS declaration block that is an
  to `web.cssdom.CSSStyleDeclaration`.

  `var stylePropertyMapReadOnly = Element.computedStyleMap()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap`"
  [this ]
  (-> this (.computedStyleMap)))

(defn dispatch-event
  "Method.

  Dispatches an `web.event.Event` at the specified `web.EventTarget`,
  invoking the affected `web.EventListener`s in the appropriate
  The normal event processing rules (including the capturing and
  bubbling phase) also apply to events dispatched manually with

  `cancelled = !target.dispatchEvent(event)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`"
  [this event]
  (-> this (.dispatchEvent event)))

(defn get-animations
  "Method.

  [Experimental]

  The getAnimations() method of the `web.Element` interface (specified
  the Animatable mixin) returns an array of all `web.animation.Animation`
  affecting this element or which are scheduled to do so in future.
  can optionally return `web.animation.Animation` objects for descendant
  too.

  `const animations = Element.getAnimations(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAnimations`"
  [this options]
  (-> this (.getAnimations options)))

(defn get-attribute
  "Method.

  The getAttribute() method of the `web.Element` interface returns
  value of a specified attribute on the element.

  `var attribute = element.getAttribute(attributeName);

  where


  attribute is a string containing the value of attributeName.
  attributeName is the name of the attribute whose value you want to get.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute`"
  [this & args]
  (-> this .-getAttribute (.apply this (clj->js args))))

(defn get-attribute-names
  "Method.

  The getAttributeNames() method of the `web.Element` interface
  the attribute names of the element as an `js.Array` of strings.
  the element has no attributes it returns an empty array.

  `let attributeNames = element.getAttributeNames();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames`"
  [this ]
  (-> this (.getAttributeNames)))

(defn get-attribute-ns
  "Method.

  The getAttributeNS() method of the `web.Element` interface returns
  string value of the attribute with the specified namespace and
  If the named attribute does not exist, the value returned will
  be null or \\\"\\\" (the empty string); see Notes for details.

  `attrVal = element.getAttributeNS(namespace, name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS`"
  [this namespace name]
  (-> this (.getAttributeNS namespace name)))

(defn get-attribute-node
  "Method.

  Returns the specified attribute of the specified element, as
  Attr node.

  `var attrNode = element.getAttributeNode(attrName);


  attrNode is an Attr node for the attribute.
  attrName is a string containing the name of the attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode`"
  [this & args]
  (-> this .-getAttributeNode (.apply this (clj->js args))))

(defn get-attribute-node-ns
  "Method.

  Returns the Attr node for the attribute with the given namespace
  name.

  `attributeNode = element.getAttributeNodeNS(namespace, nodeName)


  attributeNode is the node for specified attribute.
  namespace is a string specifying the namespace of the attribute.
  nodeName is a string specifying the name of the attribute.


  == Example == TBD The example needs to be fixed pre> // html: <div id=\\\"top\\\" /> t = document.getElementById(\\\"top\\\"); specialNode = t.getAttributeNodeNS( \\\"http://www.mozilla.org/ns/specialspace\\\", \\\"id\\\"); // iNode.value = \\\"full-top\\\" </pre`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNodeNS`"
  [this & args]
  (-> this .-getAttributeNodeNS (.apply this (clj->js args))))

(defn get-bounding-client-rect
  "Method.

  The Element.getBoundingClientRect() method returns the size of
  element and its position relative to the viewport.

  `domRect = element.getBoundingClientRect();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect`"
  [this ]
  (-> this (.getBoundingClientRect)))

(defn get-client-rects
  "Method.

  The getClientRects() method of the `web.Element` interface returns
  collection of `web.dom.DOMRect` objects that indicate the bounding
  for each CSS border box in a client.

  `let rectCollection = object.getClientRects();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects`"
  [this ]
  (-> this (.getClientRects)))

(defn get-elements-by-class-name
  "Method.

  The `web.Element` method getElementsByClassName() returns a live
  which contains every descendant element which has the specified
  name or names.

  `var elements = element.getElementsByClassName(names);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName`"
  [this names]
  (-> this (.getElementsByClassName names)))

(defn get-elements-by-tag-name
  "Method.

  The Element.getElementsByTagName() method returns a live `web.dom.HTMLCollection`
  elements with the given tag name.

  `elements = element.getElementsByTagName(tagName)


  \\telements is a live `web.dom.HTMLCollection` of elements with a matching tag name, in the order they appear. If no elements are found, the HTMLCollection is empty.
  \\telement is the element from where the search starts. Only the element's descendants are included, not the element itself.
  \\ttagName is the qualified name to look for. The special string \\\"*\\\" represents all elements. For compatibility with XHTML, lower-case should be used.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName`"
  [this & args]
  (-> this .-getElementsByTagName (.apply this (clj->js args))))

(defn get-elements-by-tag-name-ns
  "Method.

  The Element.getElementsByTagNameNS() method returns a live `web.dom.HTMLCollection`
  elements with the given tag name belonging to the given namespace.
  is similar to `Document.getElementsByTagNameNS`, except that
  search is restricted to descendants of the specified element.

  `elements = element.getElementsByTagNameNS(namespaceURI, localName)


  elements is a live `web.dom.HTMLCollection` of found elements in the order they appear in the tree.
  element is the element from where the search should start. Note that only the descendants of this element are included in the search, not the node itself.
  namespaceURI is the namespace URI of elements to look for (see `Element.namespaceURI` and `Attr.namespaceURI`). For example, if you need to look for XHTML elements, use the XHTML namespace URI, http://www.w3.org/1999/xhtml.
  localName is either the local name of elements to look for or the special value \\\"*\\\", which matches all elements (see `Element.localName` and `Attr.localName`).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagNameNS`"
  [this & args]
  (-> this .-getElementsByTagNameNS (.apply this (clj->js args))))

(defn has-attribute
  "Method.

  The Element.hasAttribute() method returns a Boolean value indicating
  the specified element has the specified attribute or not.

  `var result = element.hasAttribute(name);


  result
  holds the return value true or false.
  name
  is a string representing the name of the attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute`"
  [this & args]
  (-> this .-hasAttribute (.apply this (clj->js args))))

(defn has-attribute-ns
  "Method.

  hasAttributeNS returns a boolean value indicating whether the
  element has the specified attribute.

  `result = element.hasAttributeNS(namespace,localName)


  result is the boolean value true or false.
  namespace is a string specifying the namespace of the attribute.
  localName is the name of the attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributeNS`"
  [this & args]
  (-> this .-hasAttributeNS (.apply this (clj->js args))))

(defn has-attributes
  "Method.

  The hasAttributes() method of the `web.Element` interface returns
  `js.Boolean` indicating whether the current element has any attributes
  not.

  `var result = element.hasAttributes();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes`"
  [this ]
  (-> this (.hasAttributes)))

(defn has-pointer-capture
  "Method.

  The hasPointerCapture() method of the `web.Element` interface
  whether the element on which it is invoked has pointer capture
  the pointer identified by the given pointer ID.

  `targetElement.hasPointerCapture(pointerId);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture`"
  [this pointer-id]
  (-> this (.hasPointerCapture pointer-id)))

(defn insert-adjacent-element
  "Method.

  The insertAdjacentElement() method of the `web.Element` interface
  a given element node at a given position relative to the element
  is invoked upon.

  `targetElement.insertAdjacentElement(position, element);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement`"
  [this position element]
  (-> this (.insertAdjacentElement position element)))

(defn insert-adjacent-html
  "Method.

  The insertAdjacentHTML() method of the `web.Element` interface
  the specified text as HTML or XML and inserts the resulting nodes
  the DOM tree at a specified position. It does not reparse the
  it is being used on, and thus it does not corrupt the existing
  inside that element. This avoids the extra step of serialization,
  it much faster than direct `innerHTML` manipulation.

  `element.insertAdjacentHTML(position, text);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML`"
  [this position text]
  (-> this (.insertAdjacentHTML position text)))

(defn insert-adjacent-text
  "Method.

  The insertAdjacentText() method of the `web.Element` interface
  a given text node at a given position relative to the element
  is invoked upon.

  `element.insertAdjacentText(position, element);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText`"
  [this position element]
  (-> this (.insertAdjacentText position element)))

(defn matches
  "Method.

  selectorString is a string representing the selector to test.

  `var result = element.matches(selectorString);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/matches`"
  [this selector-string]
  (-> this (.matches selector-string)))

(defn pseudo
  "Method.

  Returns a CSSPseudoElement representing the child pseudo-element
  by the specified pseudo-element selector."
  [this & args]
  (-> this .-pseudo (.apply this (clj->js args))))

(defn query-selector
  "Method.

  The querySelector() method of the `web.Element` interface returns
  first element that is a descendant of the element on which it
  invoked that matches the specified group of selectors.

  `element = baseElement.querySelector(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector`"
  [this selectors]
  (-> this (.querySelector selectors)))

(defn query-selector-all
  "Method.

  The `web.Element` method querySelectorAll() returns a static
  live) `web.NodeList` representing a list of elements matching
  specified group of selectors which are descendants of the element
  which the method was called.

  `elementList = parentNode.querySelectorAll(selectors);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll`"
  [this selectors]
  (-> this (.querySelectorAll selectors)))

(defn release-pointer-capture
  "Method.

  The releasePointerCapture() method of the `web.Element` interface
  (stops) pointer capture that was previously set for a specific
  pointer.

  `targetElement.releasePointerCapture(pointerId);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture`"
  [this pointer-id]
  (-> this (.releasePointerCapture pointer-id)))

(defn remove
  "Method.

  The ChildNode.remove() method removes the object from the tree
  belongs to.

  `node.remove();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove`"
  [this ]
  (-> this (.remove)))

(defn remove-attribute
  "Method.

  The `web.Element` method removeAttribute() removes the attribute
  the specified name from the element.

  `element.removeAttribute(attrName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute`"
  [this attr-name]
  (-> this (.removeAttribute attr-name)))

(defn remove-attribute-ns
  "Method.

  The removeAttributeNS() method of the `web.Element` interface
  the specified attribute from an element.

  `element.removeAttributeNS(namespace, attrName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNS`"
  [this namespace attr-name]
  (-> this (.removeAttributeNS namespace attr-name)))

(defn remove-attribute-node
  "Method.

  The removeAttributeNode() method of the `web.Element` object
  the specified attribute from the current element.

  `removedAttr = element.removeAttributeNode(attributeNode)


  attributeNode is the Attr node that needs to be removed.
  removedAttr is the removed Attr node.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNode`"
  [this & args]
  (-> this .-removeAttributeNode (.apply this (clj->js args))))

(defn remove-event-listener
  "Method.

  The EventTarget.removeEventListener() method removes from the
  an event listener previously registered with `EventTarget.addEventListener()`.
  event listener to be removed is identified using a combination
  the event type, the event listener function itself, and various
  options that may affect the matching process; see Matching event
  for removal

  `target.removeEventListener(type, listener[, options]);
  target.removeEventListener(type, listener[, useCapture]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`"
  [this & args]
  (-> this .-removeEventListener (.apply this (clj->js args))))

(defn request-fullscreen
  "Method.

  The Element.requestFullscreen() method issues an asynchronous
  to make the element be displayed in full-screen mode.

  `var Promise = Element.requestFullscreen(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen`"
  [this options]
  (-> this (.requestFullscreen options)))

(defn request-pointer-lock
  "Method.

  [Experimental]

  The Element.requestPointerLock() method lets you asynchronously
  for the pointer to be locked on the given element.

  `instanceOfElement.requestPointerLock();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/requestPointerLock`"
  [this ]
  (-> this (.requestPointerLock)))

(defn scroll
  "Method.

  The scroll() method of the `web.Element` interface scrolls the
  to a particular set of coordinates inside a given element.

  `element.scroll(x-coord, y-coord)
  element.scroll(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll`"
  [this & args]
  (-> this .-scroll (.apply this (clj->js args))))

(defn scroll-by
  "Method.

  The scrollBy() method of the `web.Element` interface scrolls
  element by the given amount.

  `element.scrollBy(x-coord, y-coord);
  element.scrollBy(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy`"
  [this & args]
  (-> this .-scrollBy (.apply this (clj->js args))))

(defn scroll-into-view
  "Method.

  The `web.Element` interface's scrollIntoView() method scrolls
  element's parent container such that the element on which scrollIntoView()
  called is visible to the user

  `element.scrollIntoView();
  element.scrollIntoView(alignToTop); // Boolean parameter
  element.scrollIntoView(scrollIntoViewOptions); // Object parameter`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView`"
  [this & args]
  (-> this .-scrollIntoView (.apply this (clj->js args))))

(defn scroll-to
  "Method.

  The scrollTo() method of the `web.Element` interface scrolls
  a particular set of coordinates inside a given element.

  `element.scrollTo(x-coord, y-coord)
  element.scrollTo(options)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo`"
  [this & args]
  (-> this .-scrollTo (.apply this (clj->js args))))

(defn set-attribute
  "Method.

  Sets the value of an attribute on the specified element. If the
  already exists, the value is updated; otherwise a new attribute
  added with the specified name and value.

  `Element.setAttribute(name, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute`"
  [this name value]
  (-> this (.setAttribute name value)))

(defn set-attribute-ns
  "Method.

  setAttributeNS adds a new attribute or changes the value of an
  with the given namespace and name.

  `element.setAttributeNS(namespace, name, value)


  namespace is a string specifying the namespace of the attribute.
  name is a string identifying the attribute by its qualified name; that is, a namespace prefix followed by a colon followed by a local name.
  value is the desired string value of the new attribute.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS`"
  [this & args]
  (-> this .-setAttributeNS (.apply this (clj->js args))))

(defn set-attribute-node
  "Method.

  The setAttributeNode() method adds a new Attr node to the specified

  `var replacedAttr = element.setAttributeNode(attribute);


  attribute is the Attr node to set on the element.
  replacedAttr is the replaced attribute node, if any, returned by this function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode`"
  [this & args]
  (-> this .-setAttributeNode (.apply this (clj->js args))))

(defn set-attribute-node-ns
  "Method.

  setAttributeNodeNS adds a new namespaced attribute node to an

  `replacedAttr = element.setAttributeNodeNS(attributeNode)


  replacedAttr is the replaced attribute node, if any, returned by this function.
  attributeNode is an Attr node.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNodeNS`"
  [this & args]
  (-> this .-setAttributeNodeNS (.apply this (clj->js args))))

(defn set-capture
  "Method.

  [Non Standard]

  Call this method during the handling of a mousedown event to
  all mouse events to this element until the mouse button is released
  `document.releaseCapture()` is called.

  `element.setCapture(retargetToElement);


  retargetToElement
  If true, all events are targeted directly to this element; if false, events can also fire at descendants of this element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setCapture`"
  [this & args]
  (-> this .-setCapture (.apply this (clj->js args))))

(defn set-pointer-capture
  "Method.

  The setPointerCapture() method of the `web.Element` interface
  used to designate a specific element as the capture target of
  pointer events. Subsequent events for the pointer will be targeted
  the capture element until capture is released (via `Element.releasePointerCapture()`).

  `targetElement.setPointerCapture(pointerId);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture`"
  [this pointer-id]
  (-> this (.setPointerCapture pointer-id)))

(defn toggle-attribute
  "Method.

  The toggleAttribute() method of the `web.Element` interface toggles
  Boolean attribute (removing it if it is present and adding it
  it is not present) on the given element.

  `Element.toggleAttribute(name [, force]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute`"
  [this & args]
  (-> this .-toggleAttribute (.apply this (clj->js args))))

(defn after
  "Method.

  [Experimental]

  The ChildNode.after() method inserts a set of `web.Node` or `web.dom.DOMString`
  in the children list of this ChildNode's parent, just after this
  `web.dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.after((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after`"
  [this & args]
  (-> this .-after (.apply this (clj->js args))))

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

(defn before
  "Method.

  [Experimental]

  The ChildNode.before() method inserts a set of `web.Node` or
  objects in the children list of this ChildNode's parent, just
  this ChildNode. `web.dom.DOMString` objects are inserted as equivalent
  nodes.

  `[Throws, Unscopable]
  void ChildNode.before((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before`"
  [this & args]
  (-> this .-before (.apply this (clj->js args))))

(defn ms-zoom-to
  "Method.

  [Non Standard]

  The msZoomTo method scrolls and/or zooms an element to its specified
  with animation.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/msZoomTo`"
  [this & args]
  (-> this .-msZoomTo (.apply this (clj->js args))))

(defn prepend
  "Method.

  The ParentNode.prepend() method inserts a set of `web.Node` objects
  `web.dom.DOMString` objects before the first child of the `web.ParentNode`.
  objects are inserted as equivalent `web.Text` nodes.

  `ParentNode.prepend(...nodesToPrepend);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend`"
  [this & args]
  (-> this .-prepend (.apply this (clj->js args))))

(defn replace-with
  "Method.

  [Experimental]

  The ChildNode.replaceWith() method replaces this ChildNode in
  children list of its parent with a set of `web.Node` or `web.dom.DOMString`
  `web.dom.DOMString` objects are inserted as equivalent `web.Text`

  `[Throws, Unscopable]
  void ChildNode.replaceWith((Node or DOMString)... nodes);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith`"
  [this & args]
  (-> this .-replaceWith (.apply this (clj->js args))))

(defn scroll-into-view-if-needed
  "Method.

  [Non Standard]

  The Element.scrollIntoViewIfNeeded() method scrolls the current
  into the visible area of the browser window if it's not already
  the visible area of the browser window. If the element is already
  the visible area of the browser window, then no scrolling takes
  This method is a proprietary variation of the standard `Element.scrollIntoView()`

  `TODO`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded`"
  [this ]
  (-> this (.scrollIntoViewIfNeeded)))

(defn attributes
  "Property.

  [Read Only]

  The Element.attributes property returns a live collection of
  attribute nodes registered to the specified node. It is a `web.NamedNodeMap`,
  an Array, so it has no `js.Array` methods and the `web.Attr`
  indexes may differ among browsers. To be more specific, attributes
  a key/value pair of strings that represents any information regarding
  attribute.

  `var attr = element.attributes;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes`"
  [this]
  (-> this (.-attributes)))

(defn class-list
  "Property.

  [Read Only]

  The Element.classList is a read-only property that returns a
  `web.dom.DOMTokenList` collection of the class attributes of
  element.

  `const elementClasses = elementNodeReference.classList;

  elementClasses is a `web.dom.DOMTokenList` representing the class attribute of elementNodeReference. If the class attribute was not set or is empty elementClasses.length returns 0. element.classList itself is read-only, although you can modify it using the add() and remove() methods.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/classList`"
  [this]
  (-> this (.-classList)))

(defn class-name
  "Property.

  The className property of the `web.Element` interface gets and
  the value of the `class` of the specified element.

  `var cName = elementNodeReference.className;
  elementNodeReference.className = cName;


  cName is a string variable representing the class or space-separated classes of the current element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`"
  [this]
  (-> this (.-className)))

(defn set-class-name!
  "Property.

  The className property of the `web.Element` interface gets and
  the value of the `class` of the specified element.

  `var cName = elementNodeReference.className;
  elementNodeReference.className = cName;


  cName is a string variable representing the class or space-separated classes of the current element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/className`"
  [this val]
  (aset this "className" val))

(defn client-height
  "Property.

  [Read Only]

  The Element.clientHeight read-only property is zero for elements
  no CSS or inline layout boxes; otherwise, it's the inner height
  an element in pixels. It includes padding but excludes borders,
  and horizontal scrollbars (if present).

  `var intElemClientHeight = element.clientHeight;

  intElemClientHeight is an integer corresponding to the clientHeight of element in pixels. The clientHeight property is read–only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight`"
  [this]
  (-> this (.-clientHeight)))

(defn client-left
  "Property.

  [Read Only]

  The width of the left border of an element in pixels. It includes
  width of the vertical scrollbar if the text direction of the
  is right–to–left and if there is an overflow causing a left vertical
  to be rendered. clientLeft does not include the left margin or
  left padding. clientLeft is read-only.

  `var left = element.clientLeft;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft`"
  [this]
  (-> this (.-clientLeft)))

(defn client-top
  "Property.

  [Read Only]

  The width of the top border of an element in pixels. It is a
  integer property of element.

  `var top = element.clientTop;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop`"
  [this]
  (-> this (.-clientTop)))

(defn client-width
  "Property.

  [Read Only]

  The Element.clientWidth property is zero for inline elements
  elements with no CSS; otherwise, it's the inner width of an element
  pixels. It includes padding but excludes borders, margins, and
  scrollbars (if present).

  `var intElemClientWidth = element.clientWidth;

  intElemClientWidth is an integer corresponding to the clientWidth of element in pixels. The clientWidth property is read–only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth`"
  [this]
  (-> this (.-clientWidth)))

(defn computed-name
  "Property.

  Returns a DOMString containing the label exposed to accessibility."
  [this]
  (-> this (.-computedName)))

(defn set-computed-name!
  "Property.

  Returns a DOMString containing the label exposed to accessibility."
  [this val]
  (aset this "computedName" val))

(defn computed-role
  "Property.

  Returns a DOMString containing the ARIA role that has been applied
  a particular element."
  [this]
  (-> this (.-computedRole)))

(defn set-computed-role!
  "Property.

  Returns a DOMString containing the ARIA role that has been applied
  a particular element."
  [this val]
  (aset this "computedRole" val))

(defn id
  "Property.

  The id property of the `web.Element` interface represents the
  identifier, reflecting the id global attribute.

  `var idStr = element.id; // Get the id
  element.id = idStr; // Set the id


  idStr is the identifier of the element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  The id property of the `web.Element` interface represents the
  identifier, reflecting the id global attribute.

  `var idStr = element.id; // Get the id
  element.id = idStr; // Set the id


  idStr is the identifier of the element.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/id`"
  [this val]
  (aset this "id" val))

(defn inner-html
  "Property.

  The `web.Element` property innerHTML gets or sets the HTML or
  markup contained within the element.

  `const content = element.innerHTML;

  element.innerHTML = htmlString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`"
  [this]
  (-> this (.-innerHTML)))

(defn set-inner-html!
  "Property.

  The `web.Element` property innerHTML gets or sets the HTML or
  markup contained within the element.

  `const content = element.innerHTML;

  element.innerHTML = htmlString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML`"
  [this val]
  (aset this "innerHTML" val))

(defn local-name
  "Property.

  [Read Only]

  The Element.localName read-only property returns the local part
  the qualified name of an element.

  `name = element.localName`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/localName`"
  [this]
  (-> this (.-localName)))

(defn namespace-uri
  "Property.

  [Read Only]

  The Element.namespaceURI read-only property returns the namespace
  of the element, or null if the element is not in a namespace.

  `namespace = element.namespaceURI`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI`"
  [this]
  (-> this (.-namespaceURI)))

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

(defn outer-html
  "Property.

  The outerHTML attribute of the `web.Element` DOM interface gets
  serialized HTML fragment describing the element including its
  It can also be set to replace the element with nodes parsed from
  given string.

  `var content = element.outerHTML;

  element.outerHTML = htmlString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML`"
  [this]
  (-> this (.-outerHTML)))

(defn set-outer-html!
  "Property.

  The outerHTML attribute of the `web.Element` DOM interface gets
  serialized HTML fragment describing the element including its
  It can also be set to replace the element with nodes parsed from
  given string.

  `var content = element.outerHTML;

  element.outerHTML = htmlString;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML`"
  [this val]
  (aset this "outerHTML" val))

(defn prefix
  "Property.

  [Read Only]

  The Element.prefix read-only property returns the namespace prefix
  the specified element, or null if no prefix is specified.

  `string = element.prefix`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/prefix`"
  [this]
  (-> this (.-prefix)))

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

(defn scroll-height
  "Property.

  [Read Only]

  The Element.scrollHeight read-only property is a measurement
  the height of an element's content, including content not visible
  the screen due to overflow.

  `var intElemScrollHeight = element.scrollHeight;

  intElemScrollHeight is a variable storing an integer corresponding to the scrollHeight pixel value of the element. The scrollHeight property is read-only.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight`"
  [this]
  (-> this (.-scrollHeight)))

(defn scroll-left
  "Property.

  The Element.scrollLeft property gets or sets the number of pixels
  an element's content is scrolled from its left edge.

  ``

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft`"
  [this]
  (-> this (.-scrollLeft)))

(defn set-scroll-left!
  "Property.

  The Element.scrollLeft property gets or sets the number of pixels
  an element's content is scrolled from its left edge.

  ``

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft`"
  [this val]
  (aset this "scrollLeft" val))

(defn scroll-left-max
  "Property.

  [Read Only]
  [Non Standard]

  The Element.scrollLeftMax read-only property returns a `js.Number`
  the maximum left scroll offset possible for the element.

  `var pxl = element.scrollLeftMax;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeftMax`"
  [this]
  (-> this (.-scrollLeftMax)))

(defn scroll-top
  "Property.

  The Element.scrollTop property gets or sets the number of pixels
  an element's content is scrolled vertically.

  `// Get the number of pixels scrolled.
  var intElemScrollTop = someElement.scrollTop;

  After running this code, intElemScrollTop is an integer corresponding to the number of pixels that the `element`'s content has been scrolled upwards.



  // Set the number of pixels scrolled.
  element.scrollTop = intValue;

  scrollTop can be set to any integer value, with certain caveats:


  If the element can't be scrolled (e.g. it has no overflow or if the element has a property of \\\"non-scrollable\\\"), scrollTop is 0.
  scrollTop doesn't respond to negative values; instead, it sets itself back to 0.
  If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop`"
  [this]
  (-> this (.-scrollTop)))

(defn set-scroll-top!
  "Property.

  The Element.scrollTop property gets or sets the number of pixels
  an element's content is scrolled vertically.

  `// Get the number of pixels scrolled.
  var intElemScrollTop = someElement.scrollTop;

  After running this code, intElemScrollTop is an integer corresponding to the number of pixels that the `element`'s content has been scrolled upwards.



  // Set the number of pixels scrolled.
  element.scrollTop = intValue;

  scrollTop can be set to any integer value, with certain caveats:


  If the element can't be scrolled (e.g. it has no overflow or if the element has a property of \\\"non-scrollable\\\"), scrollTop is 0.
  scrollTop doesn't respond to negative values; instead, it sets itself back to 0.
  If set to a value greater than the maximum available for the element, scrollTop settles itself to the maximum value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop`"
  [this val]
  (aset this "scrollTop" val))

(defn scroll-top-max
  "Property.

  [Read Only]
  [Non Standard]

  The Element.scrollTopMax read-only property returns a `js.Number`
  the maximum top scroll offset possible for the element.

  `var pxl = elt.scrollTopMax;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTopMax`"
  [this]
  (-> this (.-scrollTopMax)))

(defn scroll-width
  "Property.

  [Read Only]

  The Element.scrollWidth read-only property is a measurement of
  width of an element's content, including content not visible
  the screen due to overflow.

  `var xScrollWidth = element.scrollWidth;

  xScrollWidth is the width of the content of element in pixels.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth`"
  [this]
  (-> this (.-scrollWidth)))

(defn shadow-root
  "Property.

  [Read Only]

  The Element.shadowRoot read-only property represents the shadow
  hosted by the element.

  `var shadowroot = element.shadowRoot;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot`"
  [this]
  (-> this (.-shadowRoot)))

(defn open-or-closed-shadow-root
  "Property.

  [Read Only]
  [Non Standard]
  [Draft]

  The Element.openOrCloseShadowRoot read-only property represents
  shadow root hosted by the element, regardless if its `mode` is
  or closed.

  `var shadowroot = element.shadowRoot;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/openOrClosedShadowRoot`"
  [this]
  (-> this (.-openOrClosedShadowRoot)))

(defn slot
  "Property.

  The slot property of the `web.Element` interface returns the
  of the shadow DOM slot the element is inserted in.

  `var aString = element.slot
  element.slot = aString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`"
  [this]
  (-> this (.-slot)))

(defn set-slot!
  "Property.

  The slot property of the `web.Element` interface returns the
  of the shadow DOM slot the element is inserted in.

  `var aString = element.slot
  element.slot = aString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`"
  [this val]
  (aset this "slot" val))

(defn tab-stop
  "Property.

  [Non Standard]
  [Obsolute]

  The tabStop property of the `web.Element` interface returns a
  indicating if the element can receive input focus via the tab
  If the specified element is a shadow host tab navigation is delegated
  its children.

  `var isTabStop = element.tabStop;
  element.tabStop = (true|false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tabStop`"
  [this]
  (-> this (.-tabStop)))

(defn set-tab-stop!
  "Property.

  [Non Standard]
  [Obsolute]

  The tabStop property of the `web.Element` interface returns a
  indicating if the element can receive input focus via the tab
  If the specified element is a shadow host tab navigation is delegated
  its children.

  `var isTabStop = element.tabStop;
  element.tabStop = (true|false);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tabStop`"
  [this val]
  (aset this "tabStop" val))

(defn tag-name
  "Property.

  [Read Only]

  The tagName read-only property of the `web.Element` interface
  the tag name of the element on which it's called.

  `elementName = Element.tagName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName`"
  [this]
  (-> this (.-tagName)))

(defn undo-manager
  "Property.

  Returns the UndoManager associated with the element."
  [this]
  (-> this (.-undoManager)))

(defn set-undo-manager!
  "Property.

  Returns the UndoManager associated with the element."
  [this val]
  (aset this "undoManager" val))

(defn undo-scope
  "Property.

  Is a Boolean indicating if the element is an undo scope host,
  not."
  [this]
  (-> this (.-undoScope)))

(defn set-undo-scope!
  "Property.

  Is a Boolean indicating if the element is an undo scope host,
  not."
  [this val]
  (aset this "undoScope" val))

(defn assigned-slot
  "Property.

  [Read Only]

  The assignedSlot read-only property of the `web.shadow-dom.Slotable`
  returns an `web.shadow-dom.HTMLSlotElement` representing the
  element the node is inserted in.

  `var slotElement = elementInstance.assignedSlot`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Slotable/assignedSlot`"
  [this]
  (-> this (.-assignedSlot)))

(defn onfullscreenchange
  "Property.

  The `web.Element` interface's onfullscreenchange property is
  event handler for the fullscreenchange event that is fired when
  element has transitioned into or out of full-screen mode.

  `targetDocument.onfullscreenchange = fullscreenChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange`"
  [this]
  (-> this (.-onfullscreenchange)))

(defn set-onfullscreenchange!
  "Property.

  The `web.Element` interface's onfullscreenchange property is
  event handler for the fullscreenchange event that is fired when
  element has transitioned into or out of full-screen mode.

  `targetDocument.onfullscreenchange = fullscreenChangeHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenchange`"
  [this val]
  (aset this "onfullscreenchange" val))

(defn onfullscreenerror
  "Property.

  The `web.Element` interface's onfullscreenerror property is an
  handler for the fullscreenerror event which is sent to the element
  an error occurs while attempting to transition into or out of
  mode.

  `targetElement.onfullscreenerror = fullscreenErrorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror`"
  [this]
  (-> this (.-onfullscreenerror)))

(defn set-onfullscreenerror!
  "Property.

  The `web.Element` interface's onfullscreenerror property is an
  handler for the fullscreenerror event which is sent to the element
  an error occurs while attempting to transition into or out of
  mode.

  `targetElement.onfullscreenerror = fullscreenErrorHandler;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/onfullscreenerror`"
  [this val]
  (aset this "onfullscreenerror" val))

(defn access-key
  "Property.

  The Element.accessKey property sets the keystroke which a user
  press to jump to a given element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/accessKey`"
  [this]
  (-> this (.-accessKey)))

(defn set-access-key!
  "Property.

  The Element.accessKey property sets the keystroke which a user
  press to jump to a given element.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/accessKey`"
  [this val]
  (aset this "accessKey" val))

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

(defn current-style
  "Property.

  [Non Standard]

  Element.currentStyle is a proprietary property which is similar
  the standardized `window.getComputedStyle()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/currentStyle`"
  [this]
  (-> this (.-currentStyle)))

(defn set-current-style!
  "Property.

  [Non Standard]

  Element.currentStyle is a proprietary property which is similar
  the standardized `window.getComputedStyle()` method.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/currentStyle`"
  [this val]
  (aset this "currentStyle" val))

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

(defn name
  "Property.

  name gets or sets the name property of an element in the DOM.
  only applies to the following elements: `<a>`, `<applet>`, `<button>`,
  `<frame>`, `<iframe>`, `<img>`, `<input>`, `<map>`, `<meta>`,
  `<param>`, `<select>`, and `<textarea>`.

  `HTMLElement.name = string;
  var elName = HTMLElement.name;

  var fControl = HTMLFormElement.elementName;
  var controlCollection = HTMLFormElement.elements.elementName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  name gets or sets the name property of an element in the DOM.
  only applies to the following elements: `<a>`, `<applet>`, `<button>`,
  `<frame>`, `<iframe>`, `<img>`, `<input>`, `<map>`, `<meta>`,
  `<param>`, `<select>`, and `<textarea>`.

  `HTMLElement.name = string;
  var elName = HTMLElement.name;

  var fControl = HTMLFormElement.elementName;
  var controlCollection = HTMLFormElement.elements.elementName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/name`"
  [this val]
  (aset this "name" val))

(defn runtime-style
  "Property.

  [Non Standard]

  Element.runtimeStyle is a proprietary property similar to `HTMLElement.style`,
  its styles, that have higher precedence and modification.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/runtimeStyle`"
  [this]
  (-> this (.-runtimeStyle)))

(defn set-runtime-style!
  "Property.

  [Non Standard]

  Element.runtimeStyle is a proprietary property similar to `HTMLElement.style`,
  its styles, that have higher precedence and modification.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/runtimeStyle`"
  [this val]
  (aset this "runtimeStyle" val))

