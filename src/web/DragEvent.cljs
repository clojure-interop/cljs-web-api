(ns web.DragEvent
  "The DragEvent interface is a `dom.DOM event` that represents
  drag and drop interaction. The user initiates a drag by placing
  pointer device (such as a mouse) on the touch surface and then
  the pointer to a new location (such as another DOM element).
  are free to interpret a drag and drop interaction in an application-specific"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  This constructor is used to create a synthetic `web.DragEvent` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent`"
  js/DragEvent)

(defn data-transfer
  "Property.

  The DragEvent.dataTransfer property holds the drag operation's
  (as a `web.DataTransfer` object).

  `var data = dragEvent.dataTransfer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer`"
  [this]
  (-> this (.dataTransfer)))

(defn set-data-transfer!
  "Property.

  The DragEvent.dataTransfer property holds the drag operation's
  (as a `web.DataTransfer` object).

  `var data = dragEvent.dataTransfer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer`"
  [this val]
  (aset this "dataTransfer" val))

