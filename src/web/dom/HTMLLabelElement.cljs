(ns web.dom.HTMLLabelElement
  "The HTMLLabelElement interface gives access to properties specific
  `<label>` elements. It inherits methods and properties from the
  `web.dom.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn control
  "Property.

  [Read Only]

  The read-only HTMLLabelElement.control property returns a reference
  the control (in the form of an object of type `web.dom.HTMLElement`
  one of its derivatives) with which the `<label>` element is associated,
  null if the label isn't associated with a control.

  `control = HTMLLabelElement.control`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/control`"
  [this]
  (-> this (.-control)))

(defn form
  "Property.

  [Read Only]

  The read-only HTMLLabelElement.form property returns an `web.dom.HTMLFormElement`
  which represents the form of which the label's associated control
  a part, or null if there is either no associated control, or
  that control isn't in a form.

  `form = HTMLLabelElement.form`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/form`"
  [this]
  (-> this (.-form)))

(defn html-for
  "Property.

  The HTMLLabelElement.htmlFor property reflects the value of the
  content property. That means that this script-accessible property
  used to set and read the value of the content property for, which
  the ID of the label's associated control element.

  `controlId = HTMLLabelElement.htmlFor

  HTMLLabelElement.htmlFor = newId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor`"
  [this]
  (-> this (.-htmlFor)))

(defn set-html-for!
  "Property.

  The HTMLLabelElement.htmlFor property reflects the value of the
  content property. That means that this script-accessible property
  used to set and read the value of the content property for, which
  the ID of the label's associated control element.

  `controlId = HTMLLabelElement.htmlFor

  HTMLLabelElement.htmlFor = newId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor`"
  [this val]
  (aset this "htmlFor" val))

