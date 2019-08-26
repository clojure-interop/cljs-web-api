(ns web.dom.HTMLInputElement
  "The HTMLInputElement interface provides special properties and
  for manipulating the options, layout, and presentation of `<input>`"
  (:refer-clojure :exclude []))

(defn step-down
  "Method.

  Decrements the value by (step * n), where n defaults to 1 if
  specified. Throws an INVALID_STATE_ERR exception:
  if the method is not applicable to for the current type value,
  if the element has no step value,
  if the value cannot be converted to a number,
  if the resulting value is above the max or below the min."
  [this & args]
  (apply (-> this .-stepDown) (concat [this] args)))

(defn step-up
  "Method.

  Increments the value by (step * n), where n defaults to 1 if
  specified. Throws an INVALID_STATE_ERR exception:
  if the method is not applicable to for the current type value.,
  if the element has no step value,
  if the value cannot be converted to a number,
  if the resulting value is above the max or below the min."
  [this & args]
  (apply (-> this .-stepUp) (concat [this] args)))

(defn moz-set-file-array
  "Method.

  Sets the files selected on the input to the given array of File
  This is an alternative to mozSetFileNameArray() which can be
  in frame scripts: a chrome script can open files as File objects
  send them via message manager."
  [this & args]
  (apply (-> this .-mozSetFileArray) (concat [this] args)))

(defn moz-get-file-name-array
  "Method.

  The HTMLInputElement.mozGetFileNameArray() method returns an
  of the names of the files that were selected by the user on an
  input element.

  `inputElement.mozGetFileNameArray(aLength, aFileNames);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/mozGetFileNameArray`"
  [this a-length a-file-names]
  (-> this (.mozGetFileNameArray a-length a-file-names)))

(defn moz-set-file-name-array
  "Method.

  The HTMLInputElement.mozSetFileNameArray() method sets the names
  the files that selected on an HTML input element.

  `inputElement.mozSetFileNameArray(aFileNames, aLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/mozSetFileNameArray`"
  [this a-file-names a-length]
  (-> this (.mozSetFileNameArray a-file-names a-length)))

(defn select
  "Method.

  The HTMLInputElement.select() method selects all the text in
  `<textarea>` element or in an `<input>` element that includes
  text field.

  `element.select();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select`"
  [this ]
  (-> this (.select)))

(defn set-range-text
  "Method.

  The HTMLInputElement.setRangeText() method replaces a range of
  in an `<input>` or `<textarea>` element with a new string.

  `element.setRangeText(replacement);
  element.setRangeText(replacement, start, end [, selectMode]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText`"
  [this & args]
  (apply (-> this .-setRangeText) (concat [this] args)))

(defn set-selection-range
  "Method.

  The HTMLInputElement.setSelectionRange() method sets the start
  end positions of the current text selection in an `<input>` or
  element.

  `element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange`"
  [this & args]
  (apply (-> this .-setSelectionRange) (concat [this] args)))

(defn align
  "Property.

  string: Represents the alignment of the element. Use CSS instead."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  string: Represents the alignment of the element. Use CSS instead."
  [this val]
  (aset this "align" val))

(defn use-map
  "Property.

  string: Represents a client-side image map."
  [this]
  (-> this (.-useMap)))

(defn set-use-map!
  "Property.

  string: Represents a client-side image map."
  [this val]
  (aset this "useMap" val))

(defn labels
  "Property.

  The HTMLInputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<input>` element.

  `var labelElements = input.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels`"
  [this]
  (-> this (.-labels)))

(defn set-labels!
  "Property.

  The HTMLInputElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<input>` element.

  `var labelElements = input.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels`"
  [this val]
  (aset this "labels" val))

(defn multiple
  "Property.

  The HTMLInputElement.multiple property indicates if an input
  have more than one value. Firefox currently only supports multiple
  <input type=\\\"file\\\">.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/multiple`"
  [this]
  (-> this (.-multiple)))

(defn set-multiple!
  "Property.

  The HTMLInputElement.multiple property indicates if an input
  have more than one value. Firefox currently only supports multiple
  <input type=\\\"file\\\">.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/multiple`"
  [this val]
  (aset this "multiple" val))

(defn webkitdirectory
  "Property.

  The HTMLInputElement.webkitdirectory is a property that reflects
  webkitdirectory HTML attribute and indicates that the `<input>`
  should let the user select directories instead of files. When
  directory is selected, the directory and its entire hierarchy
  contents are included in the set of selected items. The selected
  system entries can be obtained using the `webkitEntries` property.

  `HTMLInputElement.webkitdirectory = boolValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`"
  [this]
  (-> this (.-webkitdirectory)))

(defn set-webkitdirectory!
  "Property.

  The HTMLInputElement.webkitdirectory is a property that reflects
  webkitdirectory HTML attribute and indicates that the `<input>`
  should let the user select directories instead of files. When
  directory is selected, the directory and its entire hierarchy
  contents are included in the set of selected items. The selected
  system entries can be obtained using the `webkitEntries` property.

  `HTMLInputElement.webkitdirectory = boolValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`"
  [this val]
  (aset this "webkitdirectory" val))

(defn webkit-entries
  "Property.

  The read-only webkitEntries property of the `web.dom.HTMLInputElement`
  contains an array of file system entries (as objects based on
  representing files and/or directories selected by the user using
  `<input>` element of type file, but only if that selection was
  using drag-and-drop: selecting a file in the dialog will leave
  property empty (bug

  `var entries = HTMLInputElement.webkitEntries;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`"
  [this]
  (-> this (.-webkitEntries)))

(defn set-webkit-entries!
  "Property.

  The read-only webkitEntries property of the `web.dom.HTMLInputElement`
  contains an array of file system entries (as objects based on
  representing files and/or directories selected by the user using
  `<input>` element of type file, but only if that selection was
  using drag-and-drop: selecting a file in the dialog will leave
  property empty (bug

  `var entries = HTMLInputElement.webkitEntries;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`"
  [this val]
  (aset this "webkitEntries" val))

