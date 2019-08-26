(ns web.shadow-dom.ShadowRoot
  "The ShadowRoot interface of the Shadow DOM API is the root node
  a DOM subtree that is rendered separately from a document's main
  tree."
  (:refer-clojure :exclude []))

(defn get-selection
  "Method.

  The getSelection() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.other.Selection` object representing the range
  text selected by the user, or the current position of the caret.

  `var selection = documentOrShadowRootInstance.getSelection()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn delegates-focus
  "Property.

  The delegatesFocus read-only property of the `web.shadow-dom.ShadowRoot`
  returns a boolean that indicates whether delegatesFocus was set
  the shadow was attached (see `Element.attachShadow()`).

  `var df = shadowRoot.delegatesFocus`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`"
  [this]
  (-> this (.delegatesFocus)))

(defn set-delegates-focus!
  "Property.

  The delegatesFocus read-only property of the `web.shadow-dom.ShadowRoot`
  returns a boolean that indicates whether delegatesFocus was set
  the shadow was attached (see `Element.attachShadow()`).

  `var df = shadowRoot.delegatesFocus`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`"
  [this val]
  (aset this "delegatesFocus" val))

(defn active-element
  "Property.

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this]
  (-> this (.activeElement)))

(defn set-active-element!
  "Property.

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this val]
  (aset this "activeElement" val))

(defn host
  "Property.

  The host read-only property of the `web.shadow-dom.ShadowRoot`
  a reference to the DOM element the ShadowRoot is attached to.

  `var element = shadowRoot.host`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`"
  [this]
  (-> this (.host)))

(defn set-host!
  "Property.

  The host read-only property of the `web.shadow-dom.ShadowRoot`
  a reference to the DOM element the ShadowRoot is attached to.

  `var element = shadowRoot.host`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`"
  [this val]
  (aset this "host" val))

(defn inner-html
  "Property.

  The innerHTML property of the `web.shadow-dom.ShadowRoot` interface
  or returns a reference to the DOM tree inside the ShadowRoot.

  `var domString = shadowRoot.innerHTML
  shadowRoot.innerHTML = domString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`"
  [this]
  (-> this (.innerHTML)))

(defn set-inner-html!
  "Property.

  The innerHTML property of the `web.shadow-dom.ShadowRoot` interface
  or returns a reference to the DOM tree inside the ShadowRoot.

  `var domString = shadowRoot.innerHTML
  shadowRoot.innerHTML = domString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`"
  [this val]
  (aset this "innerHTML" val))

(defn mode
  "Property.

  The mode property of the `web.shadow-dom.ShadowRoot` specifies
  mode — either open or closed. This defines whether or not the
  root's internal features are accessible from JavaScript.

  `var mode = shadowRoot.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The mode property of the `web.shadow-dom.ShadowRoot` specifies
  mode — either open or closed. This defines whether or not the
  root's internal features are accessible from JavaScript.

  `var mode = shadowRoot.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`"
  [this val]
  (aset this "mode" val))
