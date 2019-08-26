(ns web.dom.HTMLDialogElement.ev
  "HTMLDialogElement Events."
  (:refer-clojure :exclude []))

(def close
  "Event.

  Fired when the dialog is closed.
  Also available via the onclose property."

  "close")

(def cancel
  "Event.

  The cancel event fires on a `<dialog>` when the user instructs
  browser that they wish to dismiss the current open dialog. For
  the browser might fire this event when the user presses the Esc
  or clicks a \\\"Close dialog\\\" button which is part of the browser's

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/cancel_event`"

  "cancel")

