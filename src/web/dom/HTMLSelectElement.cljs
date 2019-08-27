(ns web.dom.HTMLSelectElement
  "The HTMLSelectElement interface represents a `<select>` HTML
  These elements also share all of the properties and methods of
  HTML elements via the `web.dom.HTMLElement` interface."
  (:refer-clojure :exclude [name type remove]))

(defn add
  "Method.

  The HTMLSelectElement.add() method adds an element to the collection
  option elements for this select element.

  `collection.add(item[, before]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add`"
  [this & args]
  (-> this .-add (.apply this (clj->js args))))

(defn blur
  "Method.

  Removes input focus from this element. This method is now implemented
  HTMLElement."
  [this & args]
  (-> this .-blur (.apply this (clj->js args))))

(defn check-validity
  "Method.

  The HTMLSelectElement.checkValidity() method checks whether the
  has any constraints and whether it satisfies them. If the element
  its constraints, the browser fires a cancelable invalid event
  the element, and then returns false.

  `var result = selectElt.checkValidity();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity`"
  [this ]
  (-> this (.checkValidity)))

(defn focus
  "Method.

  Gives input focus to this element. This method is now implemented
  HTMLElement."
  [this & args]
  (-> this .-focus (.apply this (clj->js args))))

(defn item
  "Method.

  The HTMLSelectElement.item() method returns the `web.Element`
  to the `web.dom.HTMLOptionElement` whose position in the options
  corresponds to the index given in the parameter, or null if there
  none.

  `var item = collection.item(index);
  var item = collection[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/item`"
  [this & args]
  (-> this .-item (.apply this (clj->js args))))

(defn named-item
  "Method.

  The HTMLSelectElement.namedItem() method returns the `web.dom.HTMLOptionElement`
  to the `web.dom.HTMLOptionElement` whose name or id match the
  name, or null if no option matches.

  `var item = collection.namedItem(str);
  var item = collection[str];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/namedItem`"
  [this & args]
  (-> this .-namedItem (.apply this (clj->js args))))

(defn remove
  "Method.

  The HTMLSelectElement.remove() method removes the element at
  specified index from the options collection for this select element.

  `collection.remove(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/remove`"
  [this index]
  (-> this (.remove index)))

(defn set-custom-validity
  "Method.

  The HTMLSelectElement.setCustomValidity() method sets the custom
  message for the selection element to the specified message. Use
  empty string to indicate that the element does not have a custom
  error.

  `selectElt.setCustomValidity(string);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity`"
  [this string]
  (-> this (.setCustomValidity string)))

(defn autofocus
  "Property.

  The HTMLSelectElement.autofocus property is a `js.Boolean` that
  the autofocus HTML attribute, which indicates whether the associated
  element will get input focus when the page loads, unless the
  overrides it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus`"
  [this]
  (-> this (.-autofocus)))

(defn set-autofocus!
  "Property.

  The HTMLSelectElement.autofocus property is a `js.Boolean` that
  the autofocus HTML attribute, which indicates whether the associated
  element will get input focus when the page loads, unless the
  overrides it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus`"
  [this val]
  (aset this "autofocus" val))

(defn disabled
  "Property.

  The HTMLSelectElement.disabled Is a Boolean that reflects the
  HTML attribute, which indicates whether the control is disabled.
  it is disabled, it does not accept clicks. A disabled element
  unusable and un-clickable.

  `Edit



  aSelectElement.disabled = aBool;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled`"
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  The HTMLSelectElement.disabled Is a Boolean that reflects the
  HTML attribute, which indicates whether the control is disabled.
  it is disabled, it does not accept clicks. A disabled element
  unusable and un-clickable.

  `Edit



  aSelectElement.disabled = aBool;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled`"
  [this val]
  (aset this "disabled" val))

(defn form
  "Property.

  The HTMLSelectElement.form read-only property returns a `web.dom.HTMLFormElement`
  the form that this element is associated with. If the element
  not associated with of a `<form>` element, then it returns null.

  `Edit



  aForm = aSelectElement.form.selectname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/form`"
  [this]
  (-> this (.-form)))

(defn labels
  "Property.

  The HTMLSelectElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<select>` element.

  `var labelElements = select.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`"
  [this]
  (-> this (.-labels)))

(defn set-labels!
  "Property.

  The HTMLSelectElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<select>` element.

  `var labelElements = select.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`"
  [this val]
  (aset this "labels" val))

(defn length
  "Property.

  An unsigned long The number of <option> elements in this select"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  An unsigned long The number of <option> elements in this select"
  [this val]
  (aset this "length" val))

(defn multiple
  "Property.

  A Boolean reflecting the multiple HTML attribute, which indicates
  multiple items can be selected."
  [this]
  (-> this (.-multiple)))

(defn set-multiple!
  "Property.

  A Boolean reflecting the multiple HTML attribute, which indicates
  multiple items can be selected."
  [this val]
  (aset this "multiple" val))

(defn name
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  of this control used by servers and DOM search functions."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString reflecting the name HTML attribute, containing the
  of this control used by servers and DOM search functions."
  [this val]
  (aset this "name" val))

(defn options
  "Property.

  The HTMLSelectElement.options read-only property returns a `web.dom.HTMLOptionsCollection`
  the `<option>` elements contained by the `<select>` element.

  `var options = select.options;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options`"
  [this]
  (-> this (.-options)))

(defn required
  "Property.

  A Boolean reflecting the required HTML attribute, which indicates
  the user is required to select a value before submitting the"
  [this]
  (-> this (.-required)))

(defn set-required!
  "Property.

  A Boolean reflecting the required HTML attribute, which indicates
  the user is required to select a value before submitting the"
  [this val]
  (aset this "required" val))

(defn selected-index
  "Property.

  The HTMLSelectElement.selectedIndex is a long that reflects the
  of the first or last selected `<option>` element, depending on
  value of multiple. The value -1 indicates that no element is

  `var index = selectElem.selectedIndex;
  selectElem.selectedIndex = index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`"
  [this]
  (-> this (.-selectedIndex)))

(defn set-selected-index!
  "Property.

  The HTMLSelectElement.selectedIndex is a long that reflects the
  of the first or last selected `<option>` element, depending on
  value of multiple. The value -1 indicates that no element is

  `var index = selectElem.selectedIndex;
  selectElem.selectedIndex = index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`"
  [this val]
  (aset this "selectedIndex" val))

(defn selected-options
  "Property.

  The read-only `web.dom.HTMLSelectElement` property selectedOptions
  a list of the `<option>` elements contained within the `<select>`
  that are currently selected. The list of selected options is
  `web.dom.HTMLCollection` object with one entry per currently
  option.

  `var selectedCollection = HTMLSelectElement.selectedOptions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions`"
  [this]
  (-> this (.-selectedOptions)))

(defn size
  "Property.

  A long reflecting the size HTML attribute, which contains the
  of visible items in the control. The default is 1, unless multiple
  true, in which case it is 4."
  [this]
  (-> this (.-size)))

(defn set-size!
  "Property.

  A long reflecting the size HTML attribute, which contains the
  of visible items in the control. The default is 1, unless multiple
  true, in which case it is 4."
  [this val]
  (aset this "size" val))

(defn type
  "Property.

  The HTMLSelectElement.type read-only property returns the form
  type.

  `var str = selectElt.type;

  The possible values are:


  \\\"select-multiple\\\" if multiple values can be selected.
  \\\"select-one\\\" if only one value can be selected.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/type`"
  [this]
  (-> this (.-type)))

(defn validation-message
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the control does not satisfy (if any). This
  is the empty string if the control is not a candidate for constraint
  (willValidate is false), or it satisfies its constraints."
  [this]
  (-> this (.-validationMessage)))

(defn set-validation-message!
  "Property.

  A DOMString representing a localized message that describes the
  constraints that the control does not satisfy (if any). This
  is the empty string if the control is not a candidate for constraint
  (willValidate is false), or it satisfies its constraints."
  [this val]
  (aset this "validationMessage" val))

(defn validity
  "Property.

  A ValidityState reflecting the validity state that this control
  in."
  [this]
  (-> this (.-validity)))

(defn set-validity!
  "Property.

  A ValidityState reflecting the validity state that this control
  in."
  [this val]
  (aset this "validity" val))

(defn value
  "Property.

  A DOMString reflecting the value of the form control. Returns
  value property of the first selected option element if there
  one, otherwise the empty string."
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  A DOMString reflecting the value of the form control. Returns
  value property of the first selected option element if there
  one, otherwise the empty string."
  [this val]
  (aset this "value" val))

(defn will-validate
  "Property.

  A Boolean that indicates whether the button is a candidate for
  validation. It is false if any conditions bar it from constraint"
  [this]
  (-> this (.-willValidate)))

(defn set-will-validate!
  "Property.

  A Boolean that indicates whether the button is a candidate for
  validation. It is false if any conditions bar it from constraint"
  [this val]
  (aset this "willValidate" val))

