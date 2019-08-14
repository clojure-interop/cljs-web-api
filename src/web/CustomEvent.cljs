(ns web.CustomEvent
  "This interface inherits properties from its parent, `web.Event`:"
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The CustomEvent() constructor creates a new `web.CustomEvent`.

  typeArg
  A `dom.DOMString` representing the name of the event.
  customEventInit Optional
  A CustomEventInit dictionary, having the following fields:

  \\\"detail\\\", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.



  The CustomEventInit dictionary also accepts fields from the `web.EventInit` dictionary.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent`"
  js/CustomEvent)

(defn init-custom-event
  "Method.

  The CustomEvent.initCustomEvent() method initializes a CustomEvent
  If the event has already been dispatched, this method does nothing.

  `event.initCustomEvent(type, canBubble, cancelable, detail);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/initCustomEvent`"
  [this type can-bubble cancelable detail]
  (-> this (.initCustomEvent type can-bubble cancelable detail)))

(defn create-event
  "Method.

  Creates a new event, which must then be initialized by calling
  initEvent() method.

  `document.createEvent(type)


  type
  A string indicating the event type to create.


  This method returns a new DOM `web.Event` object of the specified type, which must be initialized before use.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/createEvent`"
  [this & args]
  (apply (-> this .-createEvent) (concat [this] args)))

(defn composed-path
  "Method.

  The composedPath() method of the `web.Event` interface returns
  event’s path which is an array of the objects on which listeners
  be invoked. This does not include nodes in shadow trees if the
  root was created with its `web.ShadowRoot.mode` closed.

  `var composed = Event.composedPath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`"
  [this ]
  (-> this (.composedPath)))

(defn init-event
  "Method.

  The Event.initEvent() method is used to initialize the value
  an `web.event` created using `web.Document.createEvent()`.

  `event.initEvent(type, bubbles, cancelable);


  type
  Is a `dom.DOMString` defining the type of event.
  bubbles
  Is a `web.Boolean` deciding whether the event should bubble up through the event chain or not. Once set, the read-only property `web.Event.bubbles` will give its value.
  cancelable
  Is a `web.Boolean` defining whether the event can be canceled. Once set, the read-only property `web.Event.cancelable` will give its value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent`"
  [this & args]
  (apply (-> this .-initEvent) (concat [this] args)))

(defn prevent-default
  "Method.

  The `web.Event` interface's preventDefault() method tells the
  agent that if the event does not get explicitly handled, its
  action should not be taken as it normally would be.

  `event.preventDefault();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`"
  [this ]
  (-> this (.preventDefault)))

(defn stop-immediate-propagation
  "Method.

  The stopImmediatePropagation() method of the `web.Event` interface
  other listeners of the same event from being called.

  `event.stopImmediatePropagation();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation`"
  [this ]
  (-> this (.stopImmediatePropagation)))

(defn stop-propagation
  "Method.

  The stopPropagation() method of the `web.Event` interface prevents
  propagation of the current event in the capturing and bubbling

  `event.stopPropagation();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation`"
  [this ]
  (-> this (.stopPropagation)))

(defn detail
  "Property.

  The detail readonly property of the `web.CustomEvent` interface
  any data passed when initializing the event.

  `let myDetail = customEventInstance.detail;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail`"
  [this]
  (-> this (.detail)))

(defn set-detail!
  "Property.

  The detail readonly property of the `web.CustomEvent` interface
  any data passed when initializing the event.

  `let myDetail = customEventInstance.detail;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail`"
  [this val]
  (aset this "detail" val))

(defn bubbles
  "Property.

  The bubbles read-only property of the `web.Event` interface indicates
  the event bubbles up through the DOM or not.

  `var doesItBubble = event.bubbles;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles`"
  [this]
  (-> this (.bubbles)))

(defn cancel-bubble
  "Property.

  The cancelBubble property of the `web.Event` interface is a historical
  to `web.Event.stopPropagation()`. Setting its value to true before
  from an event handler prevents propagation of the event. In later
  setting this to false does nothing. See Browser compatibility
  details.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`"
  [this]
  (-> this (.cancelBubble)))

(defn set-cancel-bubble!
  "Property.

  The cancelBubble property of the `web.Event` interface is a historical
  to `web.Event.stopPropagation()`. Setting its value to true before
  from an event handler prevents propagation of the event. In later
  setting this to false does nothing. See Browser compatibility
  details.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`"
  [this val]
  (aset this "cancelBubble" val))

(defn cancelable
  "Property.

  The cancelable read-only property of the `web.Event` interface
  whether the event can be canceled, and therefore prevented as
  the event never happened.

  `bool = event.cancelable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable`"
  [this]
  (-> this (.cancelable)))

(defn composed
  "Property.

  The read-only composed property of the `web.Event` interface
  a `web.Boolean` which indicates whether or not the event will
  across the shadow DOM boundary into the standard DOM.

  `var composed = Event.composed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`"
  [this]
  (-> this (.composed)))

(defn current-target
  "Property.

  The currentTarget read-only property of the `web.Event` interface
  the current target for the event, as the event traverses the
  It always refers to the element to which the event handler has
  attached, as opposed to `web.Event.target`, which identifies
  element on which the event occurred and which may be its direct

  `var currentEventTarget = event.currentTarget;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget`"
  [this]
  (-> this (.currentTarget)))

(defn default-prevented
  "Property.

  The defaultPrevented read-only property of the `web.Event` interface
  a `web.Boolean` indicating whether or not `web.Event.preventDefault()`
  called on the event.

  `var defaultWasPrevented = event.defaultPrevented;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented`"
  [this]
  (-> this (.defaultPrevented)))

(defn event-phase
  "Property.

  The eventPhase read-only property of the `web.Event` interface
  which phase of the event flow is currently being evaluated.

  `var phase = event.eventPhase;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase`"
  [this]
  (-> this (.eventPhase)))

(defn explicit-original-target
  "Property.

  The explicit original target of the event. (Mozilla-specific)

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`"
  [this]
  (-> this (.explicitOriginalTarget)))

(defn set-explicit-original-target!
  "Property.

  The explicit original target of the event. (Mozilla-specific)

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/explicitOriginalTarget`"
  [this val]
  (aset this "explicitOriginalTarget" val))

(defn original-target
  "Property.

  The original target of the event before any retargetings. (Mozilla-specific)

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`"
  [this]
  (-> this (.originalTarget)))

(defn set-original-target!
  "Property.

  The original target of the event before any retargetings. (Mozilla-specific)

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/originalTarget`"
  [this val]
  (aset this "originalTarget" val))

(defn return-value
  "Property.

  The `web.Event` property returnValue indicates whether the default
  for this event has been prevented or not.

  `event.returnValue = bool;

  var bool = event.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`"
  [this]
  (-> this (.returnValue)))

(defn set-return-value!
  "Property.

  The `web.Event` property returnValue indicates whether the default
  for this event has been prevented or not.

  `event.returnValue = bool;

  var bool = event.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`"
  [this val]
  (aset this "returnValue" val))

(defn src-element
  "Property.

  Event.srcElement is a proprietary alias (implemented in Internet
  for the standard `web.Event.target` property, which is supported
  some other browsers for web compatibility purposes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`"
  [this]
  (-> this (.srcElement)))

(defn set-src-element!
  "Property.

  Event.srcElement is a proprietary alias (implemented in Internet
  for the standard `web.Event.target` property, which is supported
  some other browsers for web compatibility purposes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`"
  [this val]
  (aset this "srcElement" val))

(defn target
  "Property.

  The target property of the `web.Event` interface is a reference
  the object that dispatched the event. It is different from `web.Event.currentTarget`
  the event handler is called during the bubbling or capturing
  of the event.

  `var theTarget = event.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`"
  [this]
  (-> this (.target)))

(defn set-target!
  "Property.

  The target property of the `web.Event` interface is a reference
  the object that dispatched the event. It is different from `web.Event.currentTarget`
  the event handler is called during the bubbling or capturing
  of the event.

  `var theTarget = event.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`"
  [this val]
  (aset this "target" val))

(defn time-stamp
  "Property.

  The timeStamp read-only property of the `web.Event` interface
  the time (in milliseconds) at which the event was created.

  `var time = event.timeStamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`"
  [this]
  (-> this (.timeStamp)))

(defn set-time-stamp!
  "Property.

  The timeStamp read-only property of the `web.Event` interface
  the time (in milliseconds) at which the event was created.

  `var time = event.timeStamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`"
  [this val]
  (aset this "timeStamp" val))

(defn type
  "Property.

  The type read-only property of the `web.Event` interface returns
  string containing the event's type. It is set when the event
  constructed and is the name commonly used to refer to the specific
  such as click, load, or error.

  `let eventType = event.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/type`"
  [this]
  (-> this (.type)))

(defn is-trusted
  "Property.

  The isTrusted read-only property of the `web.Event` interface
  a `web.Boolean` that is true when the event was generated by
  user action, and false when the event was created or modified
  a script or dispatched via `web.EventTarget.dispatchEvent()`.

  `var eventIsTrusted = event.isTrusted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted`"
  [this]
  (-> this (.isTrusted)))

