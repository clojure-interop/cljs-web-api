(ns web.dom.DOMException
  "The DOMException interface represents an abnormal event (called
  exception) which occurs as a result of calling a method or accessing
  property of a web API."
  (:refer-clojure :exclude [name]))

(def constructor
  "Constructor.

  The DOMException() constructor returns a DOMException object with a specified message and name.

  message Optional
  A description of the exception. If not present, the empty string '' is used.
  name Optional
  Returns a `web.dom.DOMString` that contains one of the strings associated with an error constant.

  Return value

  `web.dom.DOMException`
  A newly created `web.dom.DOMException` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/DOMException`"
  js/DOMException)

(defn code
  "Property.

  The code read-only property of the `web.dom.DOMException` interface
  a short that contains one of the error code constants, or 0 if
  match. This field is used for historical reasons. New DOM exceptions
  use this anymore: they put this info in the `DOMException.name`

  `var domExceptionCode = domExceptionInstance.code;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code`"
  [this]
  (-> this (.code)))

(defn set-code!
  "Property.

  The code read-only property of the `web.dom.DOMException` interface
  a short that contains one of the error code constants, or 0 if
  match. This field is used for historical reasons. New DOM exceptions
  use this anymore: they put this info in the `DOMException.name`

  `var domExceptionCode = domExceptionInstance.code;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code`"
  [this val]
  (aset this "code" val))

(defn message
  "Property.

  The message read-only property of the `web.dom.DOMException`
  returns a `web.dom.DOMString` representing a message or description
  with the given error name.

  `var domExceptionMessage = domExceptionInstance.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The message read-only property of the `web.dom.DOMException`
  returns a `web.dom.DOMString` representing a message or description
  with the given error name.

  `var domExceptionMessage = domExceptionInstance.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/message`"
  [this val]
  (aset this "message" val))

(defn name
  "Property.

  The name read-only property of the `web.dom.DOMException` interface
  a `web.dom.DOMString` that contains one of the strings associated
  an error name.

  `var domExceptionName = domExceptionInstance.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.dom.DOMException` interface
  a `web.dom.DOMString` that contains one of the strings associated
  an error name.

  `var domExceptionName = domExceptionInstance.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name`"
  [this val]
  (aset this "name" val))

