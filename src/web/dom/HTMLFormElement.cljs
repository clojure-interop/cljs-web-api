(ns web.dom.HTMLFormElement
  "The `web.dom.HTMLFormElement` interface represents a `<form>`
  in the DOM; it allows access to and in some cases modification
  aspects of the form, as well as access to its component elements."
  (:refer-clojure :exclude [name]))

(defn submit
  "Method.

  The HTMLFormElement.submit() method submits a given `<form>`.

  `HTMLFormElement.submit()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit`"
  [this ]
  (-> this (.submit)))

(defn reset
  "Method.

  The HTMLFormElement.reset() method restores a form element's
  values. This method does the same thing as clicking the form's
  button.

  `HTMLFormElement.reset()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset`"
  [this ]
  (-> this (.reset)))

(defn check-validity
  "Method.

  Returns true if the element's child controls are subject to constraint
  and satisfy those contraints; returns false if some controls
  not satisfy their constraints. Fires an event named invalid at
  control that does not satisfy its constraints; such controls
  considered invalid if the event is not canceled. It is up to
  programmer to decide how to respond to false."
  [this & args]
  (-> this .-checkValidity (.apply this (clj->js args))))

(defn report-validity
  "Method.

  The HTMLFormElement.reportValidity() method returns true if the
  child controls satisfy their validation constraints. When false
  returned, cancelable invalid events are fired for each invalid
  and validation problems are reported to the user.

  `HTMLFormElement.reportValidity()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity`"
  [this ]
  (-> this (.reportValidity)))

(defn request-autocomplete
  "Method.

  Triggers a native browser interface to assist the user in completing
  fields which have an autofill field name value that is not off
  on. The form will receive an event once the user has finished
  the interface, the event will either be autocomplete when the
  have been filled or autocompleteerror when there was a problem.
  method has been removed from Chrome and Firefox — see bug 1270740
  background information on why."
  [this & args]
  (-> this .-requestAutocomplete (.apply this (clj->js args))))

(defn elements
  "Property.

  [Read Only]

  The `web.dom.HTMLFormElement` property elements returns an `web.dom.HTMLFormControlsCollection`
  all the form controls contained in the `<form>` element.

  `nodeList = HTMLFormElement.elements`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements`"
  [this]
  (-> this (.-elements)))

(defn length
  "Property.

  [Read Only]

  The HTMLFormElement.length read-only property returns the number
  controls in the `<form>` element.

  `numControls = form.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/length`"
  [this]
  (-> this (.-length)))

(defn name
  "Property.

  The HTMLFormElement.name property represents the name of the
  `<form>` element as a string.

  `var string = form.name;
  form.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The HTMLFormElement.name property represents the name of the
  `<form>` element as a string.

  `var string = form.name;
  form.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`"
  [this val]
  (aset this "name" val))

(defn method
  "Property.

  The HTMLFormElement.method property represents the HTTP method
  to submit the `<form>`.

  `var string = form.method;
  form.method = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`"
  [this]
  (-> this (.-method)))

(defn set-method!
  "Property.

  The HTMLFormElement.method property represents the HTTP method
  to submit the `<form>`.

  `var string = form.method;
  form.method = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`"
  [this val]
  (aset this "method" val))

(defn target
  "Property.

  The target property of the `web.dom.HTMLFormElement` interface
  the target of the form's action (i.e., the frame in which to
  its output).

  `string = HTMLFormElement.target
  HTMLFormElement.target = string`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`"
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  The target property of the `web.dom.HTMLFormElement` interface
  the target of the form's action (i.e., the frame in which to
  its output).

  `string = HTMLFormElement.target
  HTMLFormElement.target = string`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`"
  [this val]
  (aset this "target" val))

(defn action
  "Property.

  The HTMLFormElement.action property represents the action of
  `<form>` element.

  `var string = form.action;
  form.action = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`"
  [this]
  (-> this (.-action)))

(defn set-action!
  "Property.

  The HTMLFormElement.action property represents the action of
  `<form>` element.

  `var string = form.action;
  form.action = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`"
  [this val]
  (aset this "action" val))

(defn encoding
  "Property.

  The HTMLFormElement.encoding property is an alternative name
  the `enctype` element on the DOM `web.dom.HTMLFormElement` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`"
  [this]
  (-> this (.-encoding)))

(defn set-encoding!
  "Property.

  The HTMLFormElement.encoding property is an alternative name
  the `enctype` element on the DOM `web.dom.HTMLFormElement` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`"
  [this val]
  (aset this "encoding" val))

(defn accept-charset
  "Property.

  The HTMLFormElement.acceptCharset property represents a list
  the supported character encodings for the given FORM element.
  list can be comma- or space-separated.

  `var string = form.acceptCharset;
  form.acceptCharset = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset`"
  [this]
  (-> this (.-acceptCharset)))

(defn set-accept-charset!
  "Property.

  The HTMLFormElement.acceptCharset property represents a list
  the supported character encodings for the given FORM element.
  list can be comma- or space-separated.

  `var string = form.acceptCharset;
  form.acceptCharset = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset`"
  [this val]
  (aset this "acceptCharset" val))

(defn autocomplete
  "Property.

  A DOMString reflecting the value of the form's autocomplete HTML
  indicating whether the controls in this form can have their values
  populated by the browser."
  [this]
  (-> this (.-autocomplete)))

(defn set-autocomplete!
  "Property.

  A DOMString reflecting the value of the form's autocomplete HTML
  indicating whether the controls in this form can have their values
  populated by the browser."
  [this val]
  (aset this "autocomplete" val))

(defn no-validate
  "Property.

  A Boolean reflecting the value of the form's novalidate HTML
  indicating whether the form should not be validated."
  [this]
  (-> this (.-noValidate)))

(defn set-no-validate!
  "Property.

  A Boolean reflecting the value of the form's novalidate HTML
  indicating whether the form should not be validated."
  [this val]
  (aset this "noValidate" val))

(defn enctype
  "Property.

  The HTMLFormElement.enctype property is the MIME type of content
  is used to submit the form to the server. Possible values are:

  `var string = form.enctype;
  form.enctype = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`"
  [this]
  (-> this (.-enctype)))

(defn set-enctype!
  "Property.

  The HTMLFormElement.enctype property is the MIME type of content
  is used to submit the form to the server. Possible values are:

  `var string = form.enctype;
  form.enctype = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`"
  [this val]
  (aset this "enctype" val))

