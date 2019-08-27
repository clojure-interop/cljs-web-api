(ns web.dom.HTMLOutputElement
  "The HTMLOutputElement interface provides properties and methods
  those inherited from `web.dom.HTMLElement`) for manipulating
  layout and presentation of `<output>` elements."
  (:refer-clojure :exclude [name type]))

(defn check-validity
  "Method.

  Checks the validity of the element and returns a Boolean holding
  check result."
  [this & args]
  (-> this .-checkValidity (.apply this (clj->js args))))

(defn report-validity
  "Method.

  This method reports the problems with the constraints on the
  if any, to the user. If there are problems, fires an invalid
  at the element, and returns false; if there are no problems,
  returns true."
  [this & args]
  (-> this .-reportValidity (.apply this (clj->js args))))

(defn default-value
  "Property.

  A DOMString representing the default value of the element, initially
  empty string."
  [this]
  (-> this (.-defaultValue)))

(defn set-default-value!
  "Property.

  A DOMString representing the default value of the element, initially
  empty string."
  [this val]
  (aset this "defaultValue" val))

(defn form
  "Property.

  An HTMLFormElement indicating the form associated with the control,
  the form HTML attribute if it is defined."
  [this]
  (-> this (.-form)))

(defn set-form!
  "Property.

  An HTMLFormElement indicating the form associated with the control,
  the form HTML attribute if it is defined."
  [this val]
  (aset this "form" val))

(defn html-for
  "Property.

  A DOMTokenList reflecting the for HTML attribute, containing
  list of IDs of other elements in the same document that contribute
  (or otherwise affect) the calculated value."
  [this]
  (-> this (.-htmlFor)))

(defn set-html-for!
  "Property.

  A DOMTokenList reflecting the for HTML attribute, containing
  list of IDs of other elements in the same document that contribute
  (or otherwise affect) the calculated value."
  [this val]
  (aset this "htmlFor" val))

(defn labels
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<output>` element.

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this]
  (-> this (.-labels)))

(defn set-labels!
  "Property.

  The HTMLOutputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<output>` element.

  `var labelElements = output.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement/labels`"
  [this val]
  (aset this "labels" val))

(defn name
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  for the control that is submitted with form data."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  for the control that is submitted with form data."
  [this val]
  (aset this "name" val))

(defn type
  "Property.

  The DOMString \"output\"."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The DOMString \"output\"."
  [this val]
  (aset this "type" val))

(defn validation-message
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the control does not satisfy (if any). This
  the empty string if the control is not a candidate for constraint
  (willValidate is false), or it satisfies its constraints."
  [this]
  (-> this (.-validationMessage)))

(defn set-validation-message!
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the control does not satisfy (if any). This
  the empty string if the control is not a candidate for constraint
  (willValidate is false), or it satisfies its constraints."
  [this val]
  (aset this "validationMessage" val))

(defn validity
  "Property.

  A ValidityState representing the validity states that this element
  in."
  [this]
  (-> this (.-validity)))

(defn set-validity!
  "Property.

  A ValidityState representing the validity states that this element
  in."
  [this val]
  (aset this "validity" val))

(defn value
  "Property.

  A DOMString representing the value of the contents of the elements.
  like the Node.textContent property."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  A DOMString representing the value of the contents of the elements.
  like the Node.textContent property."
  [this val]
  (aset this "value" val))

(defn will-validate
  "Property.

  A Boolean indicating whether the element is a candidate for constraint"
  [this]
  (-> this (.-willValidate)))

(defn set-will-validate!
  "Property.

  A Boolean indicating whether the element is a candidate for constraint"
  [this val]
  (aset this "willValidate" val))

