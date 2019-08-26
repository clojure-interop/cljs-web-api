(ns web.svg.SVGElement
  "All of the SVG DOM interfaces that correspond directly to elements
  the SVG language derive from the SVGElement interface."
  (:refer-clojure :exclude [load]))

(defn focus
  "Method.

  Makes the element the currently-focused element; this makes it
  target for future keyboard events, among other things."
  [this & args]
  (apply (-> this .-focus) (concat [this] args)))

(defn dataset
  "Property.

  The SVGElement.dataset property allows access, both in reading
  writing mode, to all the custom data attributes (data-*) set
  the element. It is a map of `web.dom.DOMString`s representing
  to `web.dom.DOMString`s representing the values for those keys,
  one entry for each custom data attribute. Each key corresponds
  the name of a custom data attribute; for example, a custom attribute
  data-foo is in the map with the key \\\"foo\\\".

  `string = SVGElement.dataset.camelCasedName;

  SVGElement.dataset.camelCasedName = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGElement/dataset`"
  [this]
  (-> this (.-dataset)))

(defn set-dataset!
  "Property.

  The SVGElement.dataset property allows access, both in reading
  writing mode, to all the custom data attributes (data-*) set
  the element. It is a map of `web.dom.DOMString`s representing
  to `web.dom.DOMString`s representing the values for those keys,
  one entry for each custom data attribute. Each key corresponds
  the name of a custom data attribute; for example, a custom attribute
  data-foo is in the map with the key \\\"foo\\\".

  `string = SVGElement.dataset.camelCasedName;

  SVGElement.dataset.camelCasedName = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGElement/dataset`"
  [this val]
  (aset this "dataset" val))

(defn id
  "Property.

  A DOMString representing the value of the id attribute on the
  element, or the empty string if id is not present."
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  A DOMString representing the value of the id attribute on the
  element, or the empty string if id is not present."
  [this val]
  (aset this "id" val))

(defn xmlbase
  "Property.

  A DOMString corresponding to the xml:base attribute on the given"
  [this]
  (-> this (.-xmlbase)))

(defn set-xmlbase!
  "Property.

  A DOMString corresponding to the xml:base attribute on the given"
  [this val]
  (aset this "xmlbase" val))

(defn owner-svg-element
  "Property.

  An SVGSVGElement referring to the nearest ancestor <svg> element.
  if the given element is the outermost <svg> element."
  [this]
  (-> this (.-ownerSVGElement)))

(defn set-owner-svg-element!
  "Property.

  An SVGSVGElement referring to the nearest ancestor <svg> element.
  if the given element is the outermost <svg> element."
  [this val]
  (aset this "ownerSVGElement" val))

(defn viewport-element
  "Property.

  The SVGElement, which established the current viewport. Often,
  nearest ancestor <svg> element. null if the given element is
  outermost <svg> element."
  [this]
  (-> this (.-viewportElement)))

(defn set-viewport-element!
  "Property.

  The SVGElement, which established the current viewport. Often,
  nearest ancestor <svg> element. null if the given element is
  outermost <svg> element."
  [this val]
  (aset this "viewportElement" val))

(defn onabort
  "Property.

  The onabort property of the `web.dom.GlobalEventHandlers` mixin
  the `EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

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

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this]
  (-> this (.-onanimationiteration)))

(defn set-onanimationiteration!
  "Property.

  The onanimationiteration property of the `web.dom.GlobalEventHandlers`
  is the `EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this val]
  (aset this "onanimationiteration" val))

(defn onauxclick
  "Property.

  The onauxclick property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this]
  (-> this (.-onauxclick)))

(defn set-onauxclick!
  "Property.

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

  The onclose property of the `web.dom.GlobalEventHandlers` mixin
  an `EventHandler` for processing close events sent to a `<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this]
  (-> this (.-onclose)))

(defn set-onclose!
  "Property.

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

  The onkeypress property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this]
  (-> this (.-onkeypress)))

(defn set-onkeypress!
  "Property.

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

(defn onselectionchange
  "Property.

  The onselectionchange property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this]
  (-> this (.-onselectionchange)))

(defn set-onselectionchange!
  "Property.

  The onselectionchange property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this val]
  (aset this "onselectionchange" val))

(defn onselectstart
  "Property.

  The onselectstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this]
  (-> this (.-onselectstart)))

(defn set-onselectstart!
  "Property.

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

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this]
  (-> this (.-ontouchcancel)))

(defn set-ontouchcancel!
  "Property.

  The ontouchcancel property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this val]
  (aset this "ontouchcancel" val))

(defn ontouchstart
  "Property.

  The ontouchstart property of the `web.dom.GlobalEventHandlers`
  is an `EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this]
  (-> this (.-ontouchstart)))

(defn set-ontouchstart!
  "Property.

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

