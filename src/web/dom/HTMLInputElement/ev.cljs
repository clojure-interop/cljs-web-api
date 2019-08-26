(ns web.dom.HTMLInputElement.ev
  "HTMLInputElement Events."
  (:refer-clojure :exclude []))

(def input
  "Event.

  The input event fires when the value of an `<input>`, `<select>`,
  `<textarea>` element has been changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event`"

  "input")

(def invalid
  "Event.

  Fired when an element does not satisfy its constraints during
  validation.
  Also available via the oninvalid event handler property."

  "invalid")

(def search
  "Event.

  Fired when a search is initiated on an <input> of type=\"search\".
  Also available via the onsearch event handler property."

  "search")

