(ns web.clipboard.ClipboardEvent
  "The ClipboardEvent interface represents events providing information
  to modification of the clipboard, that is cut, copy, and paste"
  (:refer-clojure :exclude []))

(defn clipboard-data
  "Method.

  [Experimental]

  The ClipboardEvent.clipboardData property holds a `web.drag.DataTransfer`
  which can be used:

  `data = ClipboardEvent.clipboardData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData`"
  [this ]
  (-> this (.clipboardData)))

