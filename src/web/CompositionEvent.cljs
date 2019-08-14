(ns web.CompositionEvent
  "The DOM CompositionEvent represents events that occur due to
  user indirectly entering text."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CompositionEvent() constructor creates a new `web.CompositionEvent` object instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/CompositionEvent`"
  js/CompositionEvent)

(defn init-composition-event
  "Method.

  The initCompositionEvent() method of the `web.CompositionEvent`
  initializes the attributes of a CompositionEvent object instance.

  `compositionEventInstance.initCompositionEvent(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, localeArg)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/initCompositionEvent`"
  [this type-arg can-bubble-arg cancelable-arg view-arg data-arg locale-arg]
  (-> this (.initCompositionEvent type-arg can-bubble-arg cancelable-arg view-arg data-arg locale-arg)))

(defn data
  "Property.

  The data read-only property of the `web.CompositionEvent` interface
  the characters generated by the input method that raised the
  its exact nature varies depending on the type of event that generated
  CompositionEvent object.

  `myData = CompositionEvent.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.CompositionEvent` interface
  the characters generated by the input method that raised the
  its exact nature varies depending on the type of event that generated
  CompositionEvent object.

  `myData = CompositionEvent.data`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/data`"
  [this val]
  (aset this "data" val))

(defn locale
  "Property.

  The locale read-only property of the `web.CompositionEvent` interface
  the locale of current input method (for example, the keyboard
  locale if the composition is associated with IME).

  `myLocale = CompositionEvent.locale`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/locale`"
  [this]
  (-> this (.locale)))

(defn set-locale!
  "Property.

  The locale read-only property of the `web.CompositionEvent` interface
  the locale of current input method (for example, the keyboard
  locale if the composition is associated with IME).

  `myLocale = CompositionEvent.locale`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/locale`"
  [this val]
  (aset this "locale" val))

