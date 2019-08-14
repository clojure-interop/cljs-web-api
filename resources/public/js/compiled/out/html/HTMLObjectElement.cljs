(ns html.HTMLObjectElement
  "The HTMLObjectElement interface provides special properties and
  (beyond those on the `html.HTMLElement` interface it also has
  to it by inheritance) for manipulating the layout and presentation
  `web.<object>` element, representing external resources."
  (:refer-clojure :exclude [name type]))

(defn check-validity
  "Method.

  The checkValidity() method of the `html.HTMLObjectElement` interface
  a `web.Boolean` that always is true, because object objects are
  candidates for constraint validation.

  `var Boolean = HTMLObjectElement.checkValidity();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/checkValidity`"
  [this ]
  (-> this (.checkValidity)))

(defn set-custom-validity
  "Method.

  The setCustomValidity() method of the `html.HTMLObjectElement`
  sets a custom validity message for the element.

  `HTMLObjectElement.setCustomValidity(message);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity`"
  [this message]
  (-> this (.setCustomValidity message)))

(defn content-document
  "Property.

  The contentDocument read-only property of the `html.HTMLObjectElement`
  Returns a `web.Document` representing the active document of
  object element's nested browsing context, if any; otherwise null.

  `var document = HTMLObjectElement.contentDocument;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/contentDocument`"
  [this]
  (-> this (.contentDocument)))

(defn set-content-document!
  "Property.

  The contentDocument read-only property of the `html.HTMLObjectElement`
  Returns a `web.Document` representing the active document of
  object element's nested browsing context, if any; otherwise null.

  `var document = HTMLObjectElement.contentDocument;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/contentDocument`"
  [this val]
  (aset this "contentDocument" val))

(defn content-window
  "Property.

  The contentWindow read-only property of the `html.HTMLObjectElement`
  returns a `web.WindowProxy` representing the window proxy of
  object element's nested browsing context, if any; otherwise null.

  `var WindowProxy = HTMLObjectElement.contentWindow;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/contentWindow`"
  [this]
  (-> this (.contentWindow)))

(defn set-content-window!
  "Property.

  The contentWindow read-only property of the `html.HTMLObjectElement`
  returns a `web.WindowProxy` representing the window proxy of
  object element's nested browsing context, if any; otherwise null.

  `var WindowProxy = HTMLObjectElement.contentWindow;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/contentWindow`"
  [this val]
  (aset this "contentWindow" val))

(defn data
  "Property.

  The data property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the data HTML attribute, specifying
  address of a resource's data.

  `var data = HTMLObjectElement.data;
  HTMLObjectElement.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the data HTML attribute, specifying
  address of a resource's data.

  `var data = HTMLObjectElement.data;
  HTMLObjectElement.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/data`"
  [this val]
  (aset this "data" val))

(defn form
  "Property.

  The form read-only property of the `html.HTMLObjectElement` interface
  a `html.HTMLFormElement` representing the object element's form
  or null if there isn't one.

  `var HTMLFormElement = HTMLObjectElement.form;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/form`"
  [this]
  (-> this (.form)))

(defn set-form!
  "Property.

  The form read-only property of the `html.HTMLObjectElement` interface
  a `html.HTMLFormElement` representing the object element's form
  or null if there isn't one.

  `var HTMLFormElement = HTMLObjectElement.form;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/form`"
  [this val]
  (aset this "form" val))

(defn height
  "Property.

  The height property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the height HTML attribute, specifying
  displayed height of the resource in CSS pixels.

  `var String = HTMLObjectElement.height;
  HTMLObjectElement.height = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The height property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the height HTML attribute, specifying
  displayed height of the resource in CSS pixels.

  `var String = HTMLObjectElement.height;
  HTMLObjectElement.height = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/height`"
  [this val]
  (aset this "height" val))

(defn name
  "Property.

  The name property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the name HTML attribute, specifying
  name of the browsing context.

  `var String = HTMLObjectElement.name;
  HTMLObjectElement.name = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the name HTML attribute, specifying
  name of the browsing context.

  `var String = HTMLObjectElement.name;
  HTMLObjectElement.name = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/name`"
  [this val]
  (aset this "name" val))

(defn type
  "Property.

  The type property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the type HTML attribute, specifying
  MIME type of the resource.

  `var String = HTMLObjectElement.type
  HTMLObjectElement.type = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type property of the `html.HTMLObjectElement` interface returns
  `dom.DOMString` that reflects the type HTML attribute, specifying
  MIME type of the resource.

  `var String = HTMLObjectElement.type
  HTMLObjectElement.type = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/type`"
  [this val]
  (aset this "type" val))

(defn type-must-match
  "Property.

  The HTMLObjectElement.typeMustMatch property is a `web.Boolean`
  reflects the typemustmatch attribute of the `web.<object>` element.
  indicates if the resource linked by it must match the MIME type
  by `html.HTMLObjectElement.type` in order for this resource to
  used.

  `var mustMatch = obj.typeMustMatch;
  obj.typeMustMatch = mustMatch;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/typeMustMatch`"
  [this]
  (-> this (.typeMustMatch)))

(defn set-type-must-match!
  "Property.

  The HTMLObjectElement.typeMustMatch property is a `web.Boolean`
  reflects the typemustmatch attribute of the `web.<object>` element.
  indicates if the resource linked by it must match the MIME type
  by `html.HTMLObjectElement.type` in order for this resource to
  used.

  `var mustMatch = obj.typeMustMatch;
  obj.typeMustMatch = mustMatch;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/typeMustMatch`"
  [this val]
  (aset this "typeMustMatch" val))

(defn use-map
  "Property.

  The useMap property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the usemap HTML attribute, specifying
  `web.<map>` element to use.

  `var String = HTMLObjectElement.useMap;
  HTMLObjectElement.useMap = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/useMap`"
  [this]
  (-> this (.useMap)))

(defn set-use-map!
  "Property.

  The useMap property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the usemap HTML attribute, specifying
  `web.<map>` element to use.

  `var String = HTMLObjectElement.useMap;
  HTMLObjectElement.useMap = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/useMap`"
  [this val]
  (aset this "useMap" val))

(defn validation-message
  "Property.

  The validationMessage read-only property of the `html.HTMLObjectElement`
  returns a `dom.DOMString` representing a localized message that
  the validation constraints that the control does not satisfy
  any). This is the empty string if the control is not a candidate
  constraint validation (willValidate is false), or it satisfies
  constraints.

  `var String = HTMLObjectElement.validationMessage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage`"
  [this]
  (-> this (.validationMessage)))

(defn set-validation-message!
  "Property.

  The validationMessage read-only property of the `html.HTMLObjectElement`
  returns a `dom.DOMString` representing a localized message that
  the validation constraints that the control does not satisfy
  any). This is the empty string if the control is not a candidate
  constraint validation (willValidate is false), or it satisfies
  constraints.

  `var String = HTMLObjectElement.validationMessage;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage`"
  [this val]
  (aset this "validationMessage" val))

(defn validity
  "Property.

  The validity read-only property of the `html.HTMLObjectElement`
  returns a `web.ValidityState` with the validity states that this
  is in.

  `var ValidityState = HTMLObjectElement.validity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/%5Cvalidity`"
  [this]
  (-> this (.validity)))

(defn set-validity!
  "Property.

  The validity read-only property of the `html.HTMLObjectElement`
  returns a `web.ValidityState` with the validity states that this
  is in.

  `var ValidityState = HTMLObjectElement.validity;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/%5Cvalidity`"
  [this val]
  (aset this "validity" val))

(defn width
  "Property.

  The width property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the width HTML attribute, specifying
  displayed width of the resource in CSS pixels.

  `var String = HTMLObjectElement.width;
  HTMLObjectElement.width = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The width property of the `html.HTMLObjectElement` interface
  a `dom.DOMString` that reflects the width HTML attribute, specifying
  displayed width of the resource in CSS pixels.

  `var String = HTMLObjectElement.width;
  HTMLObjectElement.width = String;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/width`"
  [this val]
  (aset this "width" val))

(defn will-validate
  "Property.

  The willValidate read-only property of the `html.HTMLObjectElement`
  returns a `web.Boolean` that indicates whether the element is
  candidate for constraint validation. Always false for HTMLObjectElement

  `var Boolean = HTMLObjectElement.willValidate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate`"
  [this]
  (-> this (.willValidate)))

(defn set-will-validate!
  "Property.

  The willValidate read-only property of the `html.HTMLObjectElement`
  returns a `web.Boolean` that indicates whether the element is
  candidate for constraint validation. Always false for HTMLObjectElement

  `var Boolean = HTMLObjectElement.willValidate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/willValidate`"
  [this val]
  (aset this "willValidate" val))

