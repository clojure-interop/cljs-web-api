(ns web.event.UIEvent
  "The UIEvent interface represents simple user interface events."
  (:refer-clojure :exclude []))

(defn init-ui-event
  "Method.

  [Deprecated]

  The UIEvent.initUIEvent() method initializes a UI event once
  been created.

  `event.initUIEvent(type, canBubble, cancelable, view, detail)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/initUIEvent`"
  [this type can-bubble cancelable view detail]
  (-> this (.initUIEvent type can-bubble cancelable view detail)))

(defn cancel-bubble
  "Property.

  [Deprecated]
  [Non Standard]

  The UIEvent.cancelBubble property indicates if event bubbling
  this event has been canceled or not. It is set to false by default,
  the event to bubble up the DOM, if it is a bubbleable event.
  this property to true stops the event from bubbling up the DOM.
  all events are allowed to bubble up the DOM.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/cancelBubble`"
  [this]
  (-> this (.-cancelBubble)))

(defn set-cancel-bubble!
  "Property.

  [Deprecated]
  [Non Standard]

  The UIEvent.cancelBubble property indicates if event bubbling
  this event has been canceled or not. It is set to false by default,
  the event to bubble up the DOM, if it is a bubbleable event.
  this property to true stops the event from bubbling up the DOM.
  all events are allowed to bubble up the DOM.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/cancelBubble`"
  [this val]
  (aset this "cancelBubble" val))

(defn detail
  "Property.

  [Read Only]

  The UIEvent.detail read-only property, when non-zero, provides
  current (or next, depending on the event) click count.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail`"
  [this]
  (-> this (.-detail)))

(defn is-char
  "Property.

  [Read Only]
  [Obsolute]

  The UIEvent.isChar read-only property returns a `js.Boolean`
  whether the event produced a key character or not.

  `var isChar = UIEvent.isChar;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/isChar`"
  [this]
  (-> this (.-isChar)))

(defn layer-x
  "Property.

  [Read Only]
  [Non Standard]

  The UIEvent.layerX read-only property returns the horizontal
  of the event relative to the current layer.

  `var xpos = event.layerX


  xpos is an integer value in pixels for the x-coordinate of the mouse pointer, when the mouse event fired.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX`"
  [this]
  (-> this (.-layerX)))

(defn layer-y
  "Property.

  [Read Only]
  [Non Standard]

  The UIEvent.layerY read-only property returns the vertical coordinate
  the event relative to the current layer.

  `var ypos = event.layerY;


  ypos is an integer value in pixels for the y-coordinate of the mouse pointer, when the mouse event fired.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerY`"
  [this]
  (-> this (.-layerY)))

(defn page-x
  "Property.

  [Read Only]
  [Obsolute]

  The non-standard, read-only `web.event.UIEvent` property pageX
  the horizontal coordinate of the event relative to the whole

  `var pos = event.pageX`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageX`"
  [this]
  (-> this (.-pageX)))

(defn page-y
  "Property.

  [Read Only]
  [Non Standard]

  The UIEvent.pageY read-only property returns the vertical coordinate
  the event relative to the whole document.

  `var pageY = event.pageY;

  pageY is an integer value in pixels for the y-coordinate of the mouse pointer, relative to the whole document, when the mouse event fired. This property takes into account any vertical scrolling of the page.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageY`"
  [this]
  (-> this (.-pageY)))

(defn source-capabilities
  "Property.

  [Read Only]
  [Experimental]

  The UIEvent.sourceCapabilities read-only property returns an
  of the `web.other.InputDeviceCapabilities` interface which provides
  about the physical device responsible for generating a touch
  If no input device was responsible for the event, it returns

  `var iDC = event.sourceCapabilities`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/sourceCapabilities`"
  [this]
  (-> this (.-sourceCapabilities)))

(defn view
  "Property.

  [Read Only]

  The UIEvent.view read-only property returns the `WindowProxy`
  from which the event was generated. In browsers, this is the
  object the event happened in.

  `var view = event.view;


  view is a reference to an AbstractView object.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/view`"
  [this]
  (-> this (.-view)))

(defn which
  "Property.

  Returns the numeric keyCode of the key pressed, or the character
  (charCode) for an alphanumeric key pressed."
  [this]
  (-> this (.-which)))

(defn set-which!
  "Property.

  Returns the numeric keyCode of the key pressed, or the character
  (charCode) for an alphanumeric key pressed."
  [this val]
  (aset this "which" val))

