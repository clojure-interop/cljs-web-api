(ns web.dom.HTMLFieldSetElement
  "The HTMLFieldSetElement interface provides special properties
  methods (beyond the regular `web.dom.HTMLElement` interface it
  has available to it by inheritance) for manipulating the layout
  presentation of `<fieldset>` elements."
  (:refer-clojure :exclude [name type]))

(defn check-validity
  "Method.

  Always returns true because <fieldset> objects are never candidates
  constraint validation."
  [this & args]
  (-> this .-checkValidity (.apply this (clj->js args))))

(defn report-validity
  "Method.

  Always returns true because <fieldset> objects are never candidates
  constraint validation."
  [this & args]
  (-> this .-reportValidity (.apply this (clj->js args))))

(defn set-custom-validity
  "Method.

  Sets a custom validity message for the field set. If this message
  not the empty string, then the field set is suffering from a
  validity error, and does not validate."
  [this & args]
  (-> this .-setCustomValidity (.apply this (clj->js args))))

(defn disabled
  "Property.

  A Boolean reflecting the disabled HTML attribute, indicating
  the user can interact with the control."
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  A Boolean reflecting the disabled HTML attribute, indicating
  the user can interact with the control."
  [this val]
  (aset this "disabled" val))

(defn elements
  "Property.

  The elements belonging to this field set. The type of this property
  on the version of the spec that is implemented by the browser."
  [this]
  (-> this (.-elements)))

(defn set-elements!
  "Property.

  The elements belonging to this field set. The type of this property
  on the version of the spec that is implemented by the browser."
  [this val]
  (aset this "elements" val))

(defn form
  "Property.

  An HTMLFormControlsCollection or HTMLCollection referencing the
  form element, if this element is in a form.
  If the field set is not a descendant of a form element, then
  attribute can be the ID of any form element in the same document
  is related to, or the null value if none matches."
  [this]
  (-> this (.-form)))

(defn set-form!
  "Property.

  An HTMLFormControlsCollection or HTMLCollection referencing the
  form element, if this element is in a form.
  If the field set is not a descendant of a form element, then
  attribute can be the ID of any form element in the same document
  is related to, or the null value if none matches."
  [this val]
  (aset this "form" val))

(defn name
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  of the field set, used for submitting the form."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  of the field set, used for submitting the form."
  [this val]
  (aset this "name" val))

(defn type
  "Property.

  The DOMString \"fieldset\"."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The DOMString \"fieldset\"."
  [this val]
  (aset this "type" val))

(defn validation-message
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the element does not satisfy (if any). This
  the empty string if the element is not a candidate for constraint
  (willValidate is false), or it satisfies its constraints."
  [this]
  (-> this (.-validationMessage)))

(defn set-validation-message!
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the element does not satisfy (if any). This
  the empty string if the element is not a candidate for constraint
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

(defn will-validate
  "Property.

  A Boolean false, because <fieldset> objects are never candidates
  constraint validation."
  [this]
  (-> this (.-willValidate)))

(defn set-will-validate!
  "Property.

  A Boolean false, because <fieldset> objects are never candidates
  constraint validation."
  [this val]
  (aset this "willValidate" val))

