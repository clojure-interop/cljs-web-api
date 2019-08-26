(ns web.event.Event
  "The Event interface represents an event which takes place in
  DOM."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The Event() constructor creates a new `web.event.Event`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/Event`"
  js/Event)

(defn create-event
  "Method.

  Creates a new event, which must then be initialized by calling
  initEvent() method.

  `document.createEvent(type)


  type
  A string indicating the event type to create.


  This method returns a new DOM `web.event.Event` object of the specified type, which must be initialized before use.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/createEvent`"
  [this & args]
  (apply (-> this .-createEvent) (concat [this] args)))

(defn init-event
  "Method.

  The Event.initEvent() method is used to initialize the value
  an `event` created using `Document.createEvent()`.

  `event.initEvent(type, bubbles, cancelable);


  type
  Is a `web.dom.DOMString` defining the type of event.
  bubbles
  Is a `js.Boolean` deciding whether the event should bubble up through the event chain or not. Once set, the read-only property `Event.bubbles` will give its value.
  cancelable
  Is a `js.Boolean` defining whether the event can be canceled. Once set, the read-only property `Event.cancelable` will give its value.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent`"
  [this & args]
  (apply (-> this .-initEvent) (concat [this] args)))

(defn get-prevent-default
  "Method.

  Non-standard. Returns the value of Event.defaultPrevented. Use
  instead."
  [this & args]
  (apply (-> this .-getPreventDefault) (concat [this] args)))

(defn composed-path
  "Method.

  The composedPath() method of the `web.event.Event` interface
  the event’s path which is an array of the objects on which listeners
  be invoked. This does not include nodes in shadow trees if the
  root was created with its `ShadowRoot.mode` closed.

  `var composed = Event.composedPath();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath`"
  [this ]
  (-> this (.composedPath)))

(defn ms-convert-url
  "Method.

  The msConvertURL method instructs the HTML paste operation on
  to modify the src attribute that corresponds to each file in
  clipboardData.files collection, allowing otherwise inaccessible
  to be converted to blob or data URIs.

  `var retVal = DragEvent.msConvertURL(file, targetType, targetURL);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/msConvertURL`"
  [this file target-type target-url]
  (-> this (.msConvertURL file target-type target-url)))

(defn prevent-default
  "Method.

  The `web.event.Event` interface's preventDefault() method tells
  user agent that if the event does not get explicitly handled,
  default action should not be taken as it normally would be.

  `event.preventDefault();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault`"
  [this ]
  (-> this (.preventDefault)))

(defn stop-immediate-propagation
  "Method.

  The stopImmediatePropagation() method of the `web.event.Event`
  prevents other listeners of the same event from being called.

  `event.stopImmediatePropagation();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation`"
  [this ]
  (-> this (.stopImmediatePropagation)))

(defn stop-propagation
  "Method.

  The stopPropagation() method of the `web.event.Event` interface
  further propagation of the current event in the capturing and
  phases.

  `event.stopPropagation();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation`"
  [this ]
  (-> this (.stopPropagation)))

(defn bubbles
  "Property.

  The bubbles read-only property of the `web.event.Event` interface
  whether the event bubbles up through the DOM or not.

  `var doesItBubble = event.bubbles;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles`"
  [this]
  (-> this (.bubbles)))

(defn scoped
  "Property.

  A Boolean indicating whether the given event will bubble across
  the shadow root into the standard DOM. This property has been
  to composed."
  [this]
  (-> this (.scoped)))

(defn set-scoped!
  "Property.

  A Boolean indicating whether the given event will bubble across
  the shadow root into the standard DOM. This property has been
  to composed."
  [this val]
  (aset this "scoped" val))

(defn cancelable
  "Property.

  The cancelable read-only property of the `web.event.Event` interface
  whether the event can be canceled, and therefore prevented as
  the event never happened.

  `bool = event.cancelable;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable`"
  [this]
  (-> this (.cancelable)))

(defn cancel-bubble
  "Property.

  The cancelBubble property of the `web.event.Event` interface
  a historical alias to `Event.stopPropagation()`. Setting its
  to true before returning from an event handler prevents propagation
  the event. In later implementations, setting this to false does
  See Browser compatibility for details.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`"
  [this]
  (-> this (.cancelBubble)))

(defn set-cancel-bubble!
  "Property.

  The cancelBubble property of the `web.event.Event` interface
  a historical alias to `Event.stopPropagation()`. Setting its
  to true before returning from an event handler prevents propagation
  the event. In later implementations, setting this to false does
  See Browser compatibility for details.

  `event.cancelBubble = bool;
  var bool = event.cancelBubble;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble`"
  [this val]
  (aset this "cancelBubble" val))

(defn composed
  "Property.

  The read-only composed property of the `web.event.Event` interface
  a `js.Boolean` which indicates whether or not the event will
  across the shadow DOM boundary into the standard DOM.

  `var composed = Event.composed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/composed`"
  [this]
  (-> this (.composed)))

(defn current-target
  "Property.

  The currentTarget read-only property of the `web.event.Event`
  identifies the current target for the event, as the event traverses
  DOM. It always refers to the element to which the event handler
  been attached, as opposed to `Event.target`, which identifies
  element on which the event occurred and which may be its direct

  `var currentEventTarget = event.currentTarget;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget`"
  [this]
  (-> this (.currentTarget)))

(defn default-prevented
  "Property.

  The defaultPrevented read-only property of the `web.event.Event`
  returns a `js.Boolean` indicating whether or not `Event.preventDefault()`
  called on the event.

  `var defaultWasPrevented = event.defaultPrevented;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented`"
  [this]
  (-> this (.defaultPrevented)))

(defn event-phase
  "Property.

  The eventPhase read-only property of the `web.event.Event` interface
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

(defn is-trusted
  "Property.

  The isTrusted read-only property of the `web.event.Event` interface
  a `js.Boolean` that is true when the event was generated by a
  action, and false when the event was created or modified by a
  or dispatched via `EventTarget.dispatchEvent()`.

  `var eventIsTrusted = event.isTrusted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted`"
  [this]
  (-> this (.isTrusted)))

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

  The `web.event.Event` property returnValue indicates whether
  default action for this event has been prevented or not.

  `event.returnValue = bool;

  var bool = event.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`"
  [this]
  (-> this (.returnValue)))

(defn set-return-value!
  "Property.

  The `web.event.Event` property returnValue indicates whether
  default action for this event has been prevented or not.

  `event.returnValue = bool;

  var bool = event.returnValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/returnValue`"
  [this val]
  (aset this "returnValue" val))

(defn src-element
  "Property.

  Event.srcElement is a proprietary alias (implemented in Internet
  for the standard `Event.target` property, which is supported
  some other browsers for web compatibility purposes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`"
  [this]
  (-> this (.srcElement)))

(defn set-src-element!
  "Property.

  Event.srcElement is a proprietary alias (implemented in Internet
  for the standard `Event.target` property, which is supported
  some other browsers for web compatibility purposes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement`"
  [this val]
  (aset this "srcElement" val))

(defn target
  "Property.

  The target property of the `web.event.Event` interface is a reference
  the object that dispatched the event. It is different from `Event.currentTarget`
  the event handler is called during the bubbling or capturing
  of the event.

  `var theTarget = event.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`"
  [this]
  (-> this (.target)))

(defn set-target!
  "Property.

  The target property of the `web.event.Event` interface is a reference
  the object that dispatched the event. It is different from `Event.currentTarget`
  the event handler is called during the bubbling or capturing
  of the event.

  `var theTarget = event.target;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/target`"
  [this val]
  (aset this "target" val))

(defn time-stamp
  "Property.

  The timeStamp read-only property of the `web.event.Event` interface
  the time (in milliseconds) at which the event was created.

  `var time = event.timeStamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`"
  [this]
  (-> this (.timeStamp)))

(defn set-time-stamp!
  "Property.

  The timeStamp read-only property of the `web.event.Event` interface
  the time (in milliseconds) at which the event was created.

  `var time = event.timeStamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp`"
  [this val]
  (aset this "timeStamp" val))

(defn type
  "Property.

  The type read-only property of the `web.event.Event` interface
  a string containing the event's type. It is set when the event
  constructed and is the name commonly used to refer to the specific
  such as click, load, or error.

  `let eventType = event.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Event/type`"
  [this]
  (-> this (.type)))

