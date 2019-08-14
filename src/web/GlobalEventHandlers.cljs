(ns web.GlobalEventHandlers
  "The GlobalEventHandlers mixin describes the event handlers common
  several interfaces like `html.HTMLElement`, `web.Document`, or"
  (:refer-clojure :exclude []))

(defn onabort
  "Property.

  The onabort property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  The onabort property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing abort events sent to the window.

  `window.onabort = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`"
  [this val]
  (aset this "onabort" val))

(defn onanimationcancel
  "Property.

  The onanimationcancel property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this]
  (-> this (.onanimationcancel)))

(defn set-onanimationcancel!
  "Property.

  The onanimationcancel property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationcancel events.

  `var animCancelHandler = target.onanimationcancel;

  target.onanimationcancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`"
  [this val]
  (aset this "onanimationcancel" val))

(defn onanimationend
  "Property.

  The onanimationend property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this]
  (-> this (.onanimationend)))

(defn set-onanimationend!
  "Property.

  The onanimationend property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationend events.

  `var animEndHandler = target.onanimationend;

  target.onanimationend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`"
  [this val]
  (aset this "onanimationend" val))

(defn onanimationiteration
  "Property.

  The onanimationiteration property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this]
  (-> this (.onanimationiteration)))

(defn set-onanimationiteration!
  "Property.

  The onanimationiteration property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing animationiteration events.

  `var animIterationHandler = target.onanimationiteration;

  target.onanimationiteration = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`"
  [this val]
  (aset this "onanimationiteration" val))

(defn onauxclick
  "Property.

  The onauxclick property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this]
  (-> this (.onauxclick)))

(defn set-onauxclick!
  "Property.

  The onauxclick property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing auxclick events.

  `target.onauxclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`"
  [this val]
  (aset this "onauxclick" val))

(defn onblur
  "Property.

  The onblur property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this]
  (-> this (.onblur)))

(defn set-onblur!
  "Property.

  The onblur property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing blur events. It's available
  `web.Element`, `web.Document`, and `web.Window`.

  `target.onblur = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`"
  [this val]
  (aset this "onblur" val))

(defn oncancel
  "Property.

  The oncancel property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing cancel events sent to a
  element.

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this]
  (-> this (.oncancel)))

(defn set-oncancel!
  "Property.

  The oncancel property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing cancel events sent to a
  element.

  `target.oncancel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`"
  [this val]
  (aset this "oncancel" val))

(defn oncanplay
  "Property.

  The oncanplay property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this]
  (-> this (.oncanplay)))

(defn set-oncanplay!
  "Property.

  The oncanplay property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing canplay events.

  `element.oncanplay = handlerFunction;
  var handlerFunction = element.oncanplay;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`"
  [this val]
  (aset this "oncanplay" val))

(defn oncanplaythrough
  "Property.

  The oncanplaythrough property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this]
  (-> this (.oncanplaythrough)))

(defn set-oncanplaythrough!
  "Property.

  The oncanplaythrough property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing canplaythrough events.

  `element.oncanplaythrough = handlerFunction;
  var handlerFunction = element.oncanplaythrough;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`"
  [this val]
  (aset this "oncanplaythrough" val))

(defn onchange
  "Property.

  The onchange property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` for processing change events.

  `target.onchange = functionRef;

  functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`"
  [this val]
  (aset this "onchange" val))

(defn onclick
  "Property.

  The onclick property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this]
  (-> this (.onclick)))

(defn set-onclick!
  "Property.

  The onclick property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing click events on a given element.

  `target.onclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`"
  [this val]
  (aset this "onclick" val))

(defn onclose
  "Property.

  The onclose property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing close events sent to a `web.<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this]
  (-> this (.onclose)))

(defn set-onclose!
  "Property.

  The onclose property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing close events sent to a `web.<dialog>`

  `target.onclose = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`"
  [this val]
  (aset this "onclose" val))

(defn oncontextmenu
  "Property.

  The oncontextmenu property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this]
  (-> this (.oncontextmenu)))

(defn set-oncontextmenu!
  "Property.

  The oncontextmenu property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes contextmenu events.

  `target.oncontextmenu = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`"
  [this val]
  (aset this "oncontextmenu" val))

(defn oncuechange
  "Property.

  The oncuechange property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this]
  (-> this (.oncuechange)))

(defn set-oncuechange!
  "Property.

  The oncuechange property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing cuechange events.

  `element.oncuechange = handlerFunction;
  var handlerFunction = element.oncuechange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`"
  [this val]
  (aset this "oncuechange" val))

(defn ondblclick
  "Property.

  The ondblclick property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this]
  (-> this (.ondblclick)))

(defn set-ondblclick!
  "Property.

  The ondblclick property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes dblclick events on the given

  `target.ondblclick = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`"
  [this val]
  (aset this "ondblclick" val))

(defn ondurationchange
  "Property.

  The ondurationchange property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this]
  (-> this (.ondurationchange)))

(defn set-ondurationchange!
  "Property.

  The ondurationchange property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing durationchange events.

  `element.ondurationchange = handlerFunction;
  var handlerFunction = element.ondurationchange;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`"
  [this val]
  (aset this "ondurationchange" val))

(defn onended
  "Property.

  The onended property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this]
  (-> this (.onended)))

(defn set-onended!
  "Property.

  The onended property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing ended events.

  `element.onended = handlerFunction;
  var handlerFunction = element.onended;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`"
  [this val]
  (aset this "onended" val))

(defn onerror
  "Property.

  The onerror property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes error events.

  `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onfocus
  "Property.

  The onfocus property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this]
  (-> this (.onfocus)))

(defn set-onfocus!
  "Property.

  The onfocus property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes focus events on the given element.

  `target.onfocus = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`"
  [this val]
  (aset this "onfocus" val))

(defn ongotpointercapture
  "Property.

  The ongotpointercapture property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this]
  (-> this (.ongotpointercapture)))

(defn set-ongotpointercapture!
  "Property.

  The ongotpointercapture property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes gotpointercapture events.

  `target.ongotpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`"
  [this val]
  (aset this "ongotpointercapture" val))

(defn oninput
  "Property.

  The oninput property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes input events on the `web.<input>`,
  and `web.<textarea>` elements. It also handles these events on
  where `web.contenteditable` or `web.designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this]
  (-> this (.oninput)))

(defn set-oninput!
  "Property.

  The oninput property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes input events on the `web.<input>`,
  and `web.<textarea>` elements. It also handles these events on
  where `web.contenteditable` or `web.designMode` are turned on.

  `target.oninput = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`"
  [this val]
  (aset this "oninput" val))

(defn oninvalid
  "Property.

  The oninvalid property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this]
  (-> this (.oninvalid)))

(defn set-oninvalid!
  "Property.

  The oninvalid property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes invalid events.

  `target.oninvalid = functionRef;
  var functionRef = target.oninvalid;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`"
  [this val]
  (aset this "oninvalid" val))

(defn onkeydown
  "Property.

  The onkeydown property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this]
  (-> this (.onkeydown)))

(defn set-onkeydown!
  "Property.

  The onkeydown property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes keydown events.

  `target.onkeydown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`"
  [this val]
  (aset this "onkeydown" val))

(defn onkeypress
  "Property.

  The onkeypress property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this]
  (-> this (.onkeypress)))

(defn set-onkeypress!
  "Property.

  The onkeypress property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes keypress events.

  `target.onkeypress = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`"
  [this val]
  (aset this "onkeypress" val))

(defn onkeyup
  "Property.

  The onkeyup property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this]
  (-> this (.onkeyup)))

(defn set-onkeyup!
  "Property.

  The onkeyup property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes keyup events.

  `target.onkeyup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`"
  [this val]
  (aset this "onkeyup" val))

(defn onload
  "Property.

  The onload property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes load events on a `web.Window`,
  `web.<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this]
  (-> this (.onload)))

(defn set-onload!
  "Property.

  The onload property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes load events on a `web.Window`,
  `web.<img>` element, etc.

  `target.onload = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`"
  [this val]
  (aset this "onload" val))

(defn onloadeddata
  "Property.

  The onloadeddata property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this]
  (-> this (.onloadeddata)))

(defn set-onloadeddata!
  "Property.

  The onloadeddata property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing loadeddata events.

  `element.onloadeddata = handlerFunction;
  var handlerFunction = element.onloadeddata;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`"
  [this val]
  (aset this "onloadeddata" val))

(defn onloadedmetadata
  "Property.

  The onloadedmetadata property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this]
  (-> this (.onloadedmetadata)))

(defn set-onloadedmetadata!
  "Property.

  The onloadedmetadata property of the `web.GlobalEventHandlers`
  is the `web.EventHandler` for processing loadedmetadata events.

  `element.onloadedmetadata = handlerFunction;
  var handlerFunction = element.onloadedmetadata;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`"
  [this val]
  (aset this "onloadedmetadata" val))

(defn onloadend
  "Property.

  The onloadend property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` representing the code to be called when
  loadend event is raised (when progress has stopped on the loading
  a resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this]
  (-> this (.onloadend)))

(defn set-onloadend!
  "Property.

  The onloadend property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` representing the code to be called when
  loadend event is raised (when progress has stopped on the loading
  a resource.)

  `img.onloadend = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`"
  [this val]
  (aset this "onloadend" val))

(defn onloadstart
  "Property.

  The onloadstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this]
  (-> this (.onloadstart)))

(defn set-onloadstart!
  "Property.

  The onloadstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` representing the code to be called when
  loadstart event is raised (when progress has begun on the loading
  a resource.)

  `img.onloadstart = funcRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`"
  [this val]
  (aset this "onloadstart" val))

(defn onlostpointercapture
  "Property.

  The onlostpointercapture property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this]
  (-> this (.onlostpointercapture)))

(defn set-onlostpointercapture!
  "Property.

  The onlostpointercapture property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes lostpointercapture events.

  `target.onlostpointercapture = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`"
  [this val]
  (aset this "onlostpointercapture" val))

(defn onmousedown
  "Property.

  The onmousedown property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this]
  (-> this (.onmousedown)))

(defn set-onmousedown!
  "Property.

  The onmousedown property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mousedown events.

  `target.onmousedown = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`"
  [this val]
  (aset this "onmousedown" val))

(defn onmouseenter
  "Property.

  The onmouseenter property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this]
  (-> this (.onmouseenter)))

(defn set-onmouseenter!
  "Property.

  The onmouseenter property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing mouseenter events.

  `element.onmouseenter = handlerFunction;
  var handlerFunction = element.onmouseenter;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`"
  [this val]
  (aset this "onmouseenter" val))

(defn onmouseleave
  "Property.

  The onmouseleave property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this]
  (-> this (.onmouseleave)))

(defn set-onmouseleave!
  "Property.

  The onmouseleave property of the `web.GlobalEventHandlers` mixin
  the `web.EventHandler` for processing mouseleave events.

  `element.onmouseleave = handlerFunction;
  var handlerFunction = element.onmouseleave;

  handlerFunction is either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`"
  [this val]
  (aset this "onmouseleave" val))

(defn onmousemove
  "Property.

  The onmousemove property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this]
  (-> this (.onmousemove)))

(defn set-onmousemove!
  "Property.

  The onmousemove property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mousemove events.

  `target.onmousemove = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`"
  [this val]
  (aset this "onmousemove" val))

(defn onmouseout
  "Property.

  The onmouseout property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this]
  (-> this (.onmouseout)))

(defn set-onmouseout!
  "Property.

  The onmouseout property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseout events.

  `element.onmouseout = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`"
  [this val]
  (aset this "onmouseout" val))

(defn onmouseover
  "Property.

  The onmouseover property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this]
  (-> this (.onmouseover)))

(defn set-onmouseover!
  "Property.

  The onmouseover property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseover events.

  `element.onmouseover = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`"
  [this val]
  (aset this "onmouseover" val))

(defn onmouseup
  "Property.

  The onmouseup property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this]
  (-> this (.onmouseup)))

(defn set-onmouseup!
  "Property.

  The onmouseup property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes mouseup events.

  `target.onmouseup = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`"
  [this val]
  (aset this "onmouseup" val))

(defn onpause
  "Property.

  The onpause property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this]
  (-> this (.onpause)))

(defn set-onpause!
  "Property.

  The onpause property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing pause events.

  `element.onpause = handlerFunction;
  var handlerFunction = element.onpause;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`"
  [this val]
  (aset this "onpause" val))

(defn onplay
  "Property.

  The onplay property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this]
  (-> this (.onplay)))

(defn set-onplay!
  "Property.

  The onplay property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` for processing play events.

  `element.onplay = handlerFunction;
  var handlerFunction = element.onplay;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`"
  [this val]
  (aset this "onplay" val))

(defn onpointercancel
  "Property.

  The onpointercancel property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this]
  (-> this (.onpointercancel)))

(defn set-onpointercancel!
  "Property.

  The onpointercancel property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes pointercancel events.

  `targetElement.onpointercancel = cancelHandler;

  var cancelHandler = targetElement.onpointercancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`"
  [this val]
  (aset this "onpointercancel" val))

(defn onpointerdown
  "Property.

  The `web.GlobalEventHandlers` event handler onpointerdown is
  to specify the event handler for the pointerdown event, which
  fired when the pointing device is initially pressed. This event
  be sent to `web.Window`, `web.Document`, and `web.Element` objects.

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this]
  (-> this (.onpointerdown)))

(defn set-onpointerdown!
  "Property.

  The `web.GlobalEventHandlers` event handler onpointerdown is
  to specify the event handler for the pointerdown event, which
  fired when the pointing device is initially pressed. This event
  be sent to `web.Window`, `web.Document`, and `web.Element` objects.

  `target.onpointerdown = downHandler;

  var downHandler = target.onpointerdown;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`"
  [this val]
  (aset this "onpointerdown" val))

(defn onpointerenter
  "Property.

  The onpointerenter property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes pointerenter events.

  `targetElement.onpointerenter = enterHandler;

  var enterHandler = targetElement.onpointerenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`"
  [this]
  (-> this (.onpointerenter)))

(defn set-onpointerenter!
  "Property.

  The onpointerenter property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes pointerenter events.

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
  (-> this (.onpointerleave)))

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

  The onpointermove property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this]
  (-> this (.onpointermove)))

(defn set-onpointermove!
  "Property.

  The onpointermove property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointermove events.

  `targetElement.onpointermove = moveHandler;

  var moveHandler = targetElement.onpointermove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`"
  [this val]
  (aset this "onpointermove" val))

(defn onpointerout
  "Property.

  The onpointerout property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this]
  (-> this (.onpointerout)))

(defn set-onpointerout!
  "Property.

  The onpointerout property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerout events.

  `targetElement.onpointerout = outHandler;

  var outHandler = targetElement.onpointerout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`"
  [this val]
  (aset this "onpointerout" val))

(defn onpointerover
  "Property.

  The onpointerover property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this]
  (-> this (.onpointerover)))

(defn set-onpointerover!
  "Property.

  The onpointerover property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerover events.

  `targetElement.onpointerover = overHandler;

  var overHandler = targetElement.onpointerover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`"
  [this val]
  (aset this "onpointerover" val))

(defn onpointerup
  "Property.

  The onpointerup property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this]
  (-> this (.onpointerup)))

(defn set-onpointerup!
  "Property.

  The onpointerup property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes pointerup events.

  `targetElement.onpointerup = upHandler;

  var upHandler = targetElement.onpointerup;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`"
  [this val]
  (aset this "onpointerup" val))

(defn onreset
  "Property.

  The onreset property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this]
  (-> this (.onreset)))

(defn set-onreset!
  "Property.

  The onreset property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes reset events.

  `target.onreset = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`"
  [this val]
  (aset this "onreset" val))

(defn onresize
  "Property.

  The onresize property of the `web.GlobalEventHandlers` interface
  an `web.EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this]
  (-> this (.onresize)))

(defn set-onresize!
  "Property.

  The onresize property of the `web.GlobalEventHandlers` interface
  an `web.EventHandler` that processes resize events.

  `window.onresize = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`"
  [this val]
  (aset this "onresize" val))

(defn onscroll
  "Property.

  The onscroll property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this]
  (-> this (.onscroll)))

(defn set-onscroll!
  "Property.

  The onscroll property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes scroll events.

  `target.onscroll = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`"
  [this val]
  (aset this "onscroll" val))

(defn onselect
  "Property.

  The onselect property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes `web.select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this]
  (-> this (.onselect)))

(defn set-onselect!
  "Property.

  The onselect property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes `web.select`.

  `target.onselect = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`"
  [this val]
  (aset this "onselect" val))

(defn onselectionchange
  "Property.

  The onselectionchange property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this]
  (-> this (.onselectionchange)))

(defn set-onselectionchange!
  "Property.

  The onselectionchange property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes selectionchange events.

  `object.onselectionchange = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`"
  [this val]
  (aset this "onselectionchange" val))

(defn onselectstart
  "Property.

  The onselectstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this]
  (-> this (.onselectstart)))

(defn set-onselectstart!
  "Property.

  The onselectstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes selectstart events.

  `object.onselectstart = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`"
  [this val]
  (aset this "onselectstart" val))

(defn onsubmit
  "Property.

  The onsubmit property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this]
  (-> this (.onsubmit)))

(defn set-onsubmit!
  "Property.

  The onsubmit property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes submit events.

  `target.onsubmit = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`"
  [this val]
  (aset this "onsubmit" val))

(defn ontouchcancel
  "Property.

  The ontouchcancel property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this]
  (-> this (.ontouchcancel)))

(defn set-ontouchcancel!
  "Property.

  The ontouchcancel property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes touchcancel events.

  `var cancelHandler = someElement.ontouchcancel;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`"
  [this val]
  (aset this "ontouchcancel" val))

(defn ontouchstart
  "Property.

  The ontouchstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this]
  (-> this (.ontouchstart)))

(defn set-ontouchstart!
  "Property.

  The ontouchstart property of the `web.GlobalEventHandlers` mixin
  an `web.EventHandler` that processes touchstart events.

  `var startHandler = someElement.ontouchstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`"
  [this val]
  (aset this "ontouchstart" val))

(defn ontransitioncancel
  "Property.

  The ontransitioncancel property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this]
  (-> this (.ontransitioncancel)))

(defn set-ontransitioncancel!
  "Property.

  The ontransitioncancel property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes transitioncancel events.

  `var transitionCancelHandler = target.ontransitioncancel;

  target.ontransitioncancel = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`"
  [this val]
  (aset this "ontransitioncancel" val))

(defn ontransitionend
  "Property.

  The ontransitionend property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this]
  (-> this (.ontransitionend)))

(defn set-ontransitionend!
  "Property.

  The ontransitionend property of the `web.GlobalEventHandlers`
  is an `web.EventHandler` that processes transitionend events.

  `var transitionEndHandler = target.ontransitionend;

  target.ontransitionend = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`"
  [this val]
  (aset this "ontransitionend" val))

(defn onwheel
  "Property.

  The onwheel property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this]
  (-> this (.onwheel)))

(defn set-onwheel!
  "Property.

  The onwheel property of the `web.GlobalEventHandlers` mixin is
  `web.EventHandler` that processes wheel events.

  `target.onwheel = functionRef;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`"
  [this val]
  (aset this "onwheel" val))

(defn onanimationstart
  "Property.

  An event handler for the animationstart event. This event is
  when a CSS Animation starts to play.

  `var animStartHandler = target.onanimationstart;

  target.onanimationstart = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart`"
  [this]
  (-> this (.onanimationstart)))

(defn set-onanimationstart!
  "Property.

  An event handler for the animationstart event. This event is
  when a CSS Animation starts to play.

  `var animStartHandler = target.onanimationstart;

  target.onanimationstart = Function`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart`"
  [this val]
  (aset this "onanimationstart" val))

(defn ondrag
  "Property.

  A `web.global event handler` for the drag event.

  `var dragHandler = targetElement.ondrag;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrag`"
  [this]
  (-> this (.ondrag)))

(defn set-ondrag!
  "Property.

  A `web.global event handler` for the drag event.

  `var dragHandler = targetElement.ondrag;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrag`"
  [this val]
  (aset this "ondrag" val))

(defn ondragend
  "Property.

  A `web.global event handler` for the dragend event.

  `var dragendHandler = targetElement.ondragend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragend`"
  [this]
  (-> this (.ondragend)))

(defn set-ondragend!
  "Property.

  A `web.global event handler` for the dragend event.

  `var dragendHandler = targetElement.ondragend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragend`"
  [this val]
  (aset this "ondragend" val))

(defn ondragenter
  "Property.

  A `web.global event handler` for the dragenter event.

  `var dragenterHandler = targetElement.ondragenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragenter`"
  [this]
  (-> this (.ondragenter)))

(defn set-ondragenter!
  "Property.

  A `web.global event handler` for the dragenter event.

  `var dragenterHandler = targetElement.ondragenter;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragenter`"
  [this val]
  (aset this "ondragenter" val))

(defn ondragexit
  "Property.

  The GlobalEventHandler.ondragexit property is an event handler
  the dragexit event.

  `var dragexitHandler = targetElement.ondragexit;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragexit`"
  [this]
  (-> this (.ondragexit)))

(defn set-ondragexit!
  "Property.

  The GlobalEventHandler.ondragexit property is an event handler
  the dragexit event.

  `var dragexitHandler = targetElement.ondragexit;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragexit`"
  [this val]
  (aset this "ondragexit" val))

(defn ondragleave
  "Property.

  A `web.global event handler` for the dragleave event.

  `var dragleaveHandler = targetElement.ondragleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave`"
  [this]
  (-> this (.ondragleave)))

(defn set-ondragleave!
  "Property.

  A `web.global event handler` for the dragleave event.

  `var dragleaveHandler = targetElement.ondragleave;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragleave`"
  [this val]
  (aset this "ondragleave" val))

(defn ondragover
  "Property.

  A `web.global event handler` for the dragover event.

  `var dragoverHandler = targetElement.ondragover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover`"
  [this]
  (-> this (.ondragover)))

(defn set-ondragover!
  "Property.

  A `web.global event handler` for the dragover event.

  `var dragoverHandler = targetElement.ondragover;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragover`"
  [this val]
  (aset this "ondragover" val))

(defn ondragstart
  "Property.

  A `web.global event handler` for the dragstart event.

  `var dragstartHandler = targetElement.ondragstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart`"
  [this]
  (-> this (.ondragstart)))

(defn set-ondragstart!
  "Property.

  A `web.global event handler` for the dragstart event.

  `var dragstartHandler = targetElement.ondragstart;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart`"
  [this val]
  (aset this "ondragstart" val))

(defn ondrop
  "Property.

  A `web.global event handler` for the drop event.

  `var dropHandler = targetElement.ondrop;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop`"
  [this]
  (-> this (.ondrop)))

(defn set-ondrop!
  "Property.

  A `web.global event handler` for the drop event.

  `var dropHandler = targetElement.ondrop;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrop`"
  [this val]
  (aset this "ondrop" val))

(defn onemptied
  "Property.

  The onemptied property sets and returns the event handler for
  emptied event.

  `element.onemptied = handlerFunction;
  var handlerFunction = element.onemptied;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onemptied`"
  [this]
  (-> this (.onemptied)))

(defn set-onemptied!
  "Property.

  The onemptied property sets and returns the event handler for
  emptied event.

  `element.onemptied = handlerFunction;
  var handlerFunction = element.onemptied;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onemptied`"
  [this val]
  (aset this "onemptied" val))

(defn onmousewheel
  "Property.

  The onmousewheel property sets and returns the event handler
  the mousewheel event.

  `element.onmousewheel = handlerFunction;
  var handlerFunction = element.onmousewheel;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousewheel`"
  [this]
  (-> this (.onmousewheel)))

(defn set-onmousewheel!
  "Property.

  The onmousewheel property sets and returns the event handler
  the mousewheel event.

  `element.onmousewheel = handlerFunction;
  var handlerFunction = element.onmousewheel;

  handlerFunction should be either null or a JavaScript function specifying the handler for the event.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousewheel`"
  [this val]
  (aset this "onmousewheel" val))

(defn ontouchend
  "Property.

  A `web.global event handler` for the touchend event.

  `var endHandler = targetElement.ontouchend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchend`"
  [this]
  (-> this (.ontouchend)))

(defn set-ontouchend!
  "Property.

  A `web.global event handler` for the touchend event.

  `var endHandler = targetElement.ontouchend;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchend`"
  [this val]
  (aset this "ontouchend" val))

(defn ontouchmove
  "Property.

  A `web.global event handler` for the touchmove event.

  `var moveHandler = someElement.ontouchmove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchmove`"
  [this]
  (-> this (.ontouchmove)))

(defn set-ontouchmove!
  "Property.

  A `web.global event handler` for the touchmove event.

  `var moveHandler = someElement.ontouchmove;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchmove`"
  [this val]
  (aset this "ontouchmove" val))

