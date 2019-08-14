(ns html.HTMLSelectElement
  "The HTMLSelectElement interface represents a `web.<select>` HTML
  These elements also share all of the properties and methods of
  HTML elements via the `html.HTMLElement` interface."
  (:refer-clojure :exclude [type remove]))

(defn add
  "Method.

  The HTMLSelectElement.add() method adds an element to the collection
  option elements for this select element.

  `collection.add(item[, before]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

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

(defn item
  "Method.

  The HTMLSelectElement.item() method returns the `web.Element`
  to the `html.HTMLOptionElement` whose position in the options
  corresponds to the index given in the parameter, or null if there
  none.

  `var item = collection.item(index);
  var item = collection[index];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/item`"
  [this & args]
  (apply (-> this .-item) (concat [this] args)))

(defn named-item
  "Method.

  The HTMLSelectElement.namedItem() method returns the `html.HTMLOptionElement`
  to the `html.HTMLOptionElement` whose name or id match the specified
  or null if no option matches.

  `var item = collection.namedItem(str);
  var item = collection[str];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/namedItem`"
  [this & args]
  (apply (-> this .-namedItem) (concat [this] args)))

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

  The HTMLSelectElement.autofocus property is a `web.Boolean` that
  the autofocus HTML attribute, which indicates whether the associated
  element will get input focus when the page loads, unless the
  overrides it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus`"
  [this]
  (-> this (.autofocus)))

(defn set-autofocus!
  "Property.

  The HTMLSelectElement.autofocus property is a `web.Boolean` that
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
  (-> this (.disabled)))

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

  The HTMLSelectElement.form read-only property returns a `html.HTMLFormElement`
  the form that this element is associated with. If the element
  not associated with of a `web.<form>` element, then it returns

  `Edit



  aForm = aSelectElement.form.selectname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/form`"
  [this]
  (-> this (.form)))

(defn labels
  "Property.

  The HTMLSelectElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<select>`

  `var labelElements = select.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLSelectElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<select>`

  `var labelElements = select.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/labels`"
  [this val]
  (aset this "labels" val))

(defn options
  "Property.

  The HTMLSelectElement.options read-only property returns a `html.HTMLOptionsCollection`
  the `web.<option>` elements contained by the `web.<select>` element.

  `var options = select.options;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/options`"
  [this]
  (-> this (.options)))

(defn selected-index
  "Property.

  The HTMLSelectElement.selectedIndex is a long that reflects the
  of the first or last selected `web.<option>` element, depending
  the value of multiple. The value -1 indicates that no element
  selected.

  `var index = selectElem.selectedIndex;
  selectElem.selectedIndex = index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`"
  [this]
  (-> this (.selectedIndex)))

(defn set-selected-index!
  "Property.

  The HTMLSelectElement.selectedIndex is a long that reflects the
  of the first or last selected `web.<option>` element, depending
  the value of multiple. The value -1 indicates that no element
  selected.

  `var index = selectElem.selectedIndex;
  selectElem.selectedIndex = index;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex`"
  [this val]
  (aset this "selectedIndex" val))

(defn selected-options
  "Property.

  The read-only `html.HTMLSelectElement` property selectedOptions
  a list of the `web.<option>` elements contained within the `web.<select>`
  that are currently selected. The list of selected options is
  `html.HTMLCollection` object with one entry per currently selected

  `var selectedCollection = HTMLSelectElement.selectedOptions;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions`"
  [this]
  (-> this (.selectedOptions)))

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
  (-> this (.type)))

