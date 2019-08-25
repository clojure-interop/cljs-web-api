(ns web.CustomEvent
  "This interface inherits properties from its parent, `web.event.Event`:"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CustomEvent() constructor creates a new `web.CustomEvent`.

  typeArg
  A `web.dom.DOMString` representing the name of the event.
  customEventInit Optional
  A CustomEventInit dictionary, having the following fields:

  \\\"detail\\\", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.



  The CustomEventInit dictionary also accepts fields from the `EventInit` dictionary.

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

