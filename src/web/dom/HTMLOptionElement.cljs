(ns web.dom.HTMLOptionElement
  "The HTMLOptionElement interface represents `<option>` elements
  inherits all classes and methods of the `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Option() constructor creates a new `web.dom.HTMLOptionElement`.

  text Optional
  A `web.dom.DOMString` representing the content of the element, i.e. the displayed text. If this is not specified, a default value of \\\"\\\" (empty string) is used.
  value Optional
  A `web.dom.DOMString` representing the value of the `web.dom.HTMLOptionElement`, i.e. the value attribute of the equivalent `<option>`. If this is not specified, the value of text is used as the value, e.g. for the associated `<select>` element's value when the form is submitted to the server.
  defaultSelected Optional
  A `js.Boolean` that sets the selected attribute value, i.e. so that this `<option>` will be the default value selected in the `<select>` element when the page is first loaded. If this is not specified, a default value of false is used. Note that a value of true does not set the option to selected if it is not already selected.
  selected Optional
  A `js.Boolean` that sets the option's selected state; the default is false (not selected). If omitted, even if the defaultSelected argument is true, the option is not selected.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option`"
  js/Option)

(defn option
  "Method.

  Is a constructor creating an HTMLOptionElement object. It has
  values: the text to display, text, the value associated, value,
  value of defaultSelected, and the value of selected. The last
  values are optional."
  [this & args]
  (apply (-> this .-Option) (concat [this] args)))

