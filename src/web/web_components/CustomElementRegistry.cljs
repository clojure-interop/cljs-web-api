(ns web.web-components.CustomElementRegistry
  "The CustomElementRegistry interface provides methods for registering
  elements and querying registered elements. To get an instance
  it, use the `window.customElements` property."
  (:refer-clojure :exclude []))

(defn define
  "Method.

  The define() method of the `web.web-components.CustomElementRegistry`
  defines a new custom element.

  `customElements.define(name, constructor, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define`"
  [this name constructor options]
  (-> this (.define name constructor options)))

(defn create-element
  "Method.

  In an HTML document, the document.createElement() method creates
  HTML element specified by tagName, or an `web.dom.HTMLUnknownElement`
  tagName isn't recognized.

  `var element = document.createElement(tagName[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement`"
  [this & args]
  (apply (-> this .-createElement) (concat [this] args)))

(defn attach-shadow
  "Method.

  The Element.attachShadow() method attaches a shadow DOM tree
  the specified element and returns a reference to its `web.shadow-dom.ShadowRoot`.

  `var shadowroot = element.attachShadow(shadowRootInit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow`"
  [this shadow-root-init]
  (-> this (.attachShadow shadow-root-init)))

(defn get-root-node
  "Method.

  The getRootNode() method of the `web.Node` interface returns
  context object's root, which optionally includes the shadow root
  it is available.

  `var root = node.getRootNode(options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode`"
  [this options]
  (-> this (.getRootNode options)))

(defn shadow-root
  "Property.

  The Element.shadowRoot read-only property represents the shadow
  hosted by the element.

  `var shadowroot = element.shadowRoot;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot`"
  [this]
  (-> this (.shadowRoot)))

(defn set-shadow-root!
  "Property.

  The Element.shadowRoot read-only property represents the shadow
  hosted by the element.

  `var shadowroot = element.shadowRoot;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot`"
  [this val]
  (aset this "shadowRoot" val))

(defn slot
  "Property.

  The slot property of the `web.Element` interface returns the
  of the shadow DOM slot the element is inserted in.

  `var aString = element.slot
  element.slot = aString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`"
  [this]
  (-> this (.slot)))

(defn set-slot!
  "Property.

  The slot property of the `web.Element` interface returns the
  of the shadow DOM slot the element is inserted in.

  `var aString = element.slot
  element.slot = aString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Element/slot`"
  [this val]
  (aset this "slot" val))

(defn composed
  "Property.

  The read-only composed property of the `web.event.Event` interface
  a `js.Boolean` which indicates whether or not the event will
  across the shadow DOM boundary into the standard DOM.

  `var composed = Event.composed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`"
  [this]
  (-> this (.composed)))

(defn composed-path
  "Property.

  The composedPath() method of the `web.event.Event` interface
  the event’s path which is an array of the objects on which listeners
  be invoked. This does not include nodes in shadow trees if the
  root was created with its `ShadowRoot.mode` closed.

  `var composed = Event.composedPath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`"
  [this]
  (-> this (.composedPath)))

(defn set-composed-path!
  "Property.

  The composedPath() method of the `web.event.Event` interface
  the event’s path which is an array of the objects on which listeners
  be invoked. This does not include nodes in shadow trees if the
  root was created with its `ShadowRoot.mode` closed.

  `var composed = Event.composedPath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`"
  [this val]
  (aset this "composedPath" val))

(defn is-connected
  "Property.

  The isConnected read-only property of the `web.Node` interface
  a boolean indicating whether the node is connected (directly
  indirectly) to the context object, for example the `web.Document`
  in the case of the normal DOM, or the `web.shadow-dom.ShadowRoot`
  the case of a shadow DOM.

  `var isItConnected = nodeObjectInstance.isConnected`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`"
  [this]
  (-> this (.isConnected)))

(defn set-is-connected!
  "Property.

  The isConnected read-only property of the `web.Node` interface
  a boolean indicating whether the node is connected (directly
  indirectly) to the context object, for example the `web.Document`
  in the case of the normal DOM, or the `web.shadow-dom.ShadowRoot`
  the case of a shadow DOM.

  `var isItConnected = nodeObjectInstance.isConnected`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected`"
  [this val]
  (aset this "isConnected" val))

(defn custom-elements
  "Property.

  The customElements read-only property of the `web.Window` interface
  a reference to the `web.web-components.CustomElementRegistry`
  which can be used to register new custom elements and get information
  previously registered custom elements.

  `let customElementRegistry = window.customElements;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`"
  [this]
  (-> this (.customElements)))

(defn set-custom-elements!
  "Property.

  The customElements read-only property of the `web.Window` interface
  a reference to the `web.web-components.CustomElementRegistry`
  which can be used to register new custom elements and get information
  previously registered custom elements.

  `let customElementRegistry = window.customElements;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`"
  [this val]
  (aset this "customElements" val))
