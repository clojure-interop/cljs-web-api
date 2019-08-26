(ns web.clipboard.ClipboardEvent
  "The ClipboardEvent interface represents events providing information
  to modification of the clipboard, that is cut, copy, and paste"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ClipboardEvent() constructor returns a newly created `web.clipboard.ClipboardEvent`, representing an event providing information related to modification of the clipboard, that is cut, copy, and paste events.

  The ClipboardEvent() constructor also inherits arguments from `Event()`.


  type
  Is a `web.dom.DOMString` representing the name of the type of the ClipboardEvent. It is case-sensitive and can be: 'copy', 'cut', or 'paste'.
  options Optional
  Options are as follows:

  clipboardData: A `web.drag.DataTransfer` containing the data concerned by the clipboard event.
  dataType : A `web.dom.DOMString` containing the MIME-type of the data contained in the data argument.
  data : A `web.dom.DOMString` containing the data concerned by the clipboard event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/ClipboardEvent`"
  js/ClipboardEvent)

(defn clipboard-data
  "Method.

  The ClipboardEvent.clipboardData property holds a `web.drag.DataTransfer`
  which can be used:

  `data = ClipboardEvent.clipboardData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData`"
  [this ]
  (-> this (.clipboardData)))

