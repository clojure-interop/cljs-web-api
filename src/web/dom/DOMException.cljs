(ns web.dom.DOMException
  "The DOMException interface represents an abnormal event (called
  exception) which occurs as a result of calling a method or accessing
  property of a web API."
  (:refer-clojure :exclude [name]))

(defn code
  "Property.

  [Read Only]

  The code read-only property of the `web.dom.DOMException` interface
  a short that contains one of the error code constants, or 0 if
  match. This field is used for historical reasons. New DOM exceptions
  use this anymore: they put this info in the `DOMException.name`

  `var domExceptionCode = domExceptionInstance.code;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code`"
  [this]
  (-> this (.-code)))

(defn message
  "Property.

  [Read Only]

  The message read-only property of the `web.dom.DOMException`
  returns a `web.dom.DOMString` representing a message or description
  with the given error name.

  `var domExceptionMessage = domExceptionInstance.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/message`"
  [this]
  (-> this (.-message)))

(defn name
  "Property.

  [Read Only]

  The name read-only property of the `web.dom.DOMException` interface
  a `web.dom.DOMString` that contains one of the strings associated
  an error name.

  `var domExceptionName = domExceptionInstance.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name`"
  [this]
  (-> this (.-name)))

