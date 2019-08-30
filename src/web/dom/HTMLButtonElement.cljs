(ns web.dom.HTMLButtonElement
  "The HTMLButtonElement interface provides properties and methods
  the regular `web.dom.HTMLElement` interface it also has available
  it by inheritance) for manipulating `<button>` elements."
  (:refer-clojure :exclude [name type]))

(defn access-key
  "Property.

  Is a DOMString indicating the single-character keyboard key to
  access to the button."
  [this]
  (-> this (.-accessKey)))

(defn set-access-key!
  "Property.

  Is a DOMString indicating the single-character keyboard key to
  access to the button."
  [this val]
  (aset this "accessKey" val))

(defn autofocus
  "Property.

  Is a Boolean indicating whether or not the control should have
  focus when the page loads, unless the user overrides it, for
  by typing in a different control. Only one form-associated element
  a document can have this attribute specified."
  [this]
  (-> this (.-autofocus)))

(defn set-autofocus!
  "Property.

  Is a Boolean indicating whether or not the control should have
  focus when the page loads, unless the user overrides it, for
  by typing in a different control. Only one form-associated element
  a document can have this attribute specified."
  [this val]
  (aset this "autofocus" val))

(defn disabled
  "Property.

  Is a Boolean indicating whether or not the control is disabled,
  that it does not accept any clicks."
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  Is a Boolean indicating whether or not the control is disabled,
  that it does not accept any clicks."
  [this val]
  (aset this "disabled" val))

(defn form
  "Property.

  Is a HTMLFormElement reflecting the form that this button is
  with. If the button is a descendant of a form element, then this
  is the ID of that form element.
  If the button is not a descendant of a form element, then the
  can be the ID of any form element in the same document it is
  to, or the null value if none matches."
  [this]
  (-> this (.-form)))

(defn set-form!
  "Property.

  Is a HTMLFormElement reflecting the form that this button is
  with. If the button is a descendant of a form element, then this
  is the ID of that form element.
  If the button is not a descendant of a form element, then the
  can be the ID of any form element in the same document it is
  to, or the null value if none matches."
  [this val]
  (aset this "form" val))

(defn form-action
  "Property.

  Is a DOMString reflecting the URI of a resource that processes
  submitted by the button. If specified, this attribute overrides
  action attribute of the <form> element that owns this element."
  [this]
  (-> this (.-formAction)))

(defn set-form-action!
  "Property.

  Is a DOMString reflecting the URI of a resource that processes
  submitted by the button. If specified, this attribute overrides
  action attribute of the <form> element that owns this element."
  [this val]
  (aset this "formAction" val))

(defn form-enctype
  "Property.

  Is a DOMString reflecting the type of content that is used to
  the form to the server. If specified, this attribute overrides
  enctype attribute of the <form> element that owns this element."
  [this]
  (-> this (.-formEnctype)))

(defn set-form-enctype!
  "Property.

  Is a DOMString reflecting the type of content that is used to
  the form to the server. If specified, this attribute overrides
  enctype attribute of the <form> element that owns this element."
  [this val]
  (aset this "formEnctype" val))

(defn form-method
  "Property.

  Is a DOMString reflecting the HTTP method that the browser uses
  submit the form. If specified, this attribute overrides the method
  of the <form> element that owns this element."
  [this]
  (-> this (.-formMethod)))

(defn set-form-method!
  "Property.

  Is a DOMString reflecting the HTTP method that the browser uses
  submit the form. If specified, this attribute overrides the method
  of the <form> element that owns this element."
  [this val]
  (aset this "formMethod" val))

(defn form-no-validate
  "Property.

  Is a Boolean indicating that the form is not to be validated
  it is submitted. If specified, this attribute overrides the novalidate
  of the <form> element that owns this element."
  [this]
  (-> this (.-formNoValidate)))

(defn set-form-no-validate!
  "Property.

  Is a Boolean indicating that the form is not to be validated
  it is submitted. If specified, this attribute overrides the novalidate
  of the <form> element that owns this element."
  [this val]
  (aset this "formNoValidate" val))

(defn form-target
  "Property.

  Is a DOMString reflecting a name or keyword indicating where
  display the response that is received after submitting the form.
  specified, this attribute overrides the target attribute of the
  element that owns this element."
  [this]
  (-> this (.-formTarget)))

(defn set-form-target!
  "Property.

  Is a DOMString reflecting a name or keyword indicating where
  display the response that is received after submitting the form.
  specified, this attribute overrides the target attribute of the
  element that owns this element."
  [this val]
  (aset this "formTarget" val))

(defn labels
  "Property.

  [Read Only]

  The HTMLButtonElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<button>` element.

  `var labelElements = button.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/labels`"
  [this]
  (-> this (.-labels)))

(defn menu
  "Property.

  Is a HTMLMenuElement representing the menu element to be displayed
  the button is clicked and is of type=\"menu\"."
  [this]
  (-> this (.-menu)))

(defn set-menu!
  "Property.

  Is a HTMLMenuElement representing the menu element to be displayed
  the button is clicked and is of type=\"menu\"."
  [this val]
  (aset this "menu" val))

(defn name
  "Property.

  Is a DOMString representing the name of the object when submitted
  a form. HTML5 If specified, it must not be the empty string."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Is a DOMString representing the name of the object when submitted
  a form. HTML5 If specified, it must not be the empty string."
  [this val]
  (aset this "name" val))

(defn tab-index
  "Property.

  Is a long that represents this element's position in the tabbing"
  [this]
  (-> this (.-tabIndex)))

(defn set-tab-index!
  "Property.

  Is a long that represents this element's position in the tabbing"
  [this val]
  (aset this "tabIndex" val))

(defn type
  "Property.

  Is a DOMString indicating the behavior of the button. This is
  enumerated attribute with the following possible values:
  \"submit\": The button submits the form. This is the default value
  the attribute is not specified, HTML5 or if it is dynamically
  to an empty or invalid value.
  \"reset\": The button resets the form.
  \"button\": The button does nothing.
  \"menu\": The button displays a menu."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString indicating the behavior of the button. This is
  enumerated attribute with the following possible values:
  \"submit\": The button submits the form. This is the default value
  the attribute is not specified, HTML5 or if it is dynamically
  to an empty or invalid value.
  \"reset\": The button resets the form.
  \"button\": The button does nothing.
  \"menu\": The button displays a menu."
  [this val]
  (aset this "type" val))

(defn will-validate
  "Property.

  Is a Boolean indicating whether the button is a candidate for
  validation. It is false if any conditions bar it from constraint
  including: its type property is reset or button; it has a datalist
  or the disabled property is set to true."
  [this]
  (-> this (.-willValidate)))

(defn set-will-validate!
  "Property.

  Is a Boolean indicating whether the button is a candidate for
  validation. It is false if any conditions bar it from constraint
  including: its type property is reset or button; it has a datalist
  or the disabled property is set to true."
  [this val]
  (aset this "willValidate" val))

(defn validation-message
  "Property.

  Is a DOMString representing the localized message that describes
  validation constraints that the control does not satisfy (if
  This attribute is the empty string if the control is not a candidate
  constraint validation (willValidate is false), or it satisfies
  constraints."
  [this]
  (-> this (.-validationMessage)))

(defn set-validation-message!
  "Property.

  Is a DOMString representing the localized message that describes
  validation constraints that the control does not satisfy (if
  This attribute is the empty string if the control is not a candidate
  constraint validation (willValidate is false), or it satisfies
  constraints."
  [this val]
  (aset this "validationMessage" val))

(defn validity
  "Property.

  Is a ValidityState representing the validity states that this
  is in."
  [this]
  (-> this (.-validity)))

(defn set-validity!
  "Property.

  Is a ValidityState representing the validity states that this
  is in."
  [this val]
  (aset this "validity" val))

(defn value
  "Property.

  Is a DOMString representing the current form control value of
  button."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  Is a DOMString representing the current form control value of
  button."
  [this val]
  (aset this "value" val))

