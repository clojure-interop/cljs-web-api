(ns html.HTMLFormElement
  "The `html.HTMLFormElement` interface represents a `web.<form>`
  in the DOM; it allows access to and in some cases modification
  aspects of the form, as well as access to its component elements."
  (:refer-clojure :exclude [name]))

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

(defn reset
  "Method.

  The HTMLFormElement.reset() method restores a form element's
  values. This method does the same thing as clicking the form's
  button.

  `HTMLFormElement.reset()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset`"
  [this ]
  (-> this (.reset)))

(defn submit
  "Method.

  The HTMLFormElement.submit() method submits a given `web.<form>`.

  `HTMLFormElement.submit()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit`"
  [this ]
  (-> this (.submit)))

(defn accept-charset
  "Property.

  The HTMLFormElement.acceptCharset property represents a list
  the supported character encodings for the given FORM element.
  list can be comma- or space-separated.

  `var string = form.acceptCharset;
  form.acceptCharset = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset`"
  [this]
  (-> this (.acceptCharset)))

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

(defn action
  "Property.

  The HTMLFormElement.action property represents the action of
  `web.<form>` element.

  `var string = form.action;
  form.action = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`"
  [this]
  (-> this (.action)))

(defn set-action!
  "Property.

  The HTMLFormElement.action property represents the action of
  `web.<form>` element.

  `var string = form.action;
  form.action = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`"
  [this val]
  (aset this "action" val))

(defn elements
  "Property.

  The `html.HTMLFormElement` property elements returns an `html.HTMLFormControlsCollection`
  all the form controls contained in the `web.<form>` element.

  `nodeList = HTMLFormElement.elements`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements`"
  [this]
  (-> this (.elements)))

(defn set-elements!
  "Property.

  The `html.HTMLFormElement` property elements returns an `html.HTMLFormControlsCollection`
  all the form controls contained in the `web.<form>` element.

  `nodeList = HTMLFormElement.elements`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements`"
  [this val]
  (aset this "elements" val))

(defn encoding
  "Property.

  The HTMLFormElement.encoding property is an alternative name
  the `web.enctype` element on the DOM `html.HTMLFormElement` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`"
  [this]
  (-> this (.encoding)))

(defn set-encoding!
  "Property.

  The HTMLFormElement.encoding property is an alternative name
  the `web.enctype` element on the DOM `html.HTMLFormElement` object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`"
  [this val]
  (aset this "encoding" val))

(defn enctype
  "Property.

  The HTMLFormElement.enctype property is the MIME type of content
  is used to submit the form to the server. Possible values are:

  `var string = form.enctype;
  form.enctype = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`"
  [this]
  (-> this (.enctype)))

(defn set-enctype!
  "Property.

  The HTMLFormElement.enctype property is the MIME type of content
  is used to submit the form to the server. Possible values are:

  `var string = form.enctype;
  form.enctype = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`"
  [this val]
  (aset this "enctype" val))

(defn length
  "Property.

  The HTMLFormElement.length read-only property returns the number
  controls in the `web.<form>` element.

  `numControls = form.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/length`"
  [this]
  (-> this (.length)))

(defn method
  "Property.

  The HTMLFormElement.method property represents the HTTP method
  to submit the `web.<form>`.

  `var string = form.method;
  form.method = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`"
  [this]
  (-> this (.method)))

(defn set-method!
  "Property.

  The HTMLFormElement.method property represents the HTTP method
  to submit the `web.<form>`.

  `var string = form.method;
  form.method = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`"
  [this val]
  (aset this "method" val))

(defn name
  "Property.

  The HTMLFormElement.name property represents the name of the
  `web.<form>` element as a string.

  `var string = form.name;
  form.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The HTMLFormElement.name property represents the name of the
  `web.<form>` element as a string.

  `var string = form.name;
  form.name = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`"
  [this val]
  (aset this "name" val))

(defn target
  "Property.

  The target property of the `html.HTMLFormElement` interface represents
  target of the form's action (i.e., the frame in which to render
  output).

  `string = HTMLFormElement.target
  HTMLFormElement.target = string`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`"
  [this]
  (-> this (.target)))

(defn set-target!
  "Property.

  The target property of the `html.HTMLFormElement` interface represents
  target of the form's action (i.e., the frame in which to render
  output).

  `string = HTMLFormElement.target
  HTMLFormElement.target = string`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`"
  [this val]
  (aset this "target" val))

