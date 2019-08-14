(ns web.InputEvent
  "The InputEvent interface represents an event notifying of editable
  change."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The InputEvent() constructor creates a new `web.InputEvent`.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/InputEvent`"
  js/InputEvent)

(defn get-target-ranges
  "Method.

  The getTargetRanges() property of the `web.InputEvent` interface
  an array of static ranges that will be affected by a change to
  DOM if the input event is not canceled.

  `var staticRanges[] = inputEvent.getTargetRanges()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/getTargetRanges`"
  [this ]
  (-> this (.getTargetRanges)))

(defn data
  "Property.

  The data read-only property of the `web.InputEvent` interface
  a `dom.DOMString` with the inserted characters. This may be an
  string if the change doesn't insert text (such as when deleting
  for example).

  `var aString = inputEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.InputEvent` interface
  a `dom.DOMString` with the inserted characters. This may be an
  string if the change doesn't insert text (such as when deleting
  for example).

  `var aString = inputEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data`"
  [this val]
  (aset this "data" val))

(defn data-transfer
  "Property.

  The dataTransfer read-only property of the `web.InputEvent` interface
  a `web.DataTransfer` object containing information about richtext
  plaintext data being added to or removed from editible content.

  `var dataTransfer = inputEvent.dataTransfer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/dataTransfer`"
  [this]
  (-> this (.dataTransfer)))

(defn set-data-transfer!
  "Property.

  The dataTransfer read-only property of the `web.InputEvent` interface
  a `web.DataTransfer` object containing information about richtext
  plaintext data being added to or removed from editible content.

  `var dataTransfer = inputEvent.dataTransfer`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/dataTransfer`"
  [this val]
  (aset this "dataTransfer" val))

(defn input-type
  "Property.

  The inputType read-only property of the `web.InputEvent` interface
  the type of change made to editible content. Possible changes
  for example inserting, deleting, and formatting text.

  `var aString = inputEvent.inputType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType`"
  [this]
  (-> this (.inputType)))

(defn set-input-type!
  "Property.

  The inputType read-only property of the `web.InputEvent` interface
  the type of change made to editible content. Possible changes
  for example inserting, deleting, and formatting text.

  `var aString = inputEvent.inputType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType`"
  [this val]
  (aset this "inputType" val))

(defn is-composing
  "Property.

  The InputEvent.isComposing read-only property returns a `web.Boolean`
  indicating if the event is fired after compositionstart and before

  `var bool = event.isComposing;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/isComposing`"
  [this]
  (-> this (.isComposing)))

