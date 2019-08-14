(ns html.HTMLInputElement
  "The HTMLInputElement interface provides special properties and
  for manipulating the options, layout, and presentation of `web.<input>`"
  (:refer-clojure :exclude []))

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
  `web.<textarea>` element or in an `web.<input>` element that
  a text field.

  `element.select();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select`"
  [this ]
  (-> this (.select)))

(defn set-range-text
  "Method.

  The HTMLInputElement.setRangeText() method replaces a range of
  in an `web.<input>` or `web.<textarea>` element with a new string.

  `element.setRangeText(replacement);
  element.setRangeText(replacement, start, end [, selectMode]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setRangeText`"
  [this & args]
  (apply (-> this .-setRangeText) (concat [this] args)))

(defn set-selection-range
  "Method.

  The HTMLInputElement.setSelectionRange() method sets the start
  end positions of the current text selection in an `web.<input>`
  `web.<textarea>` element.

  `element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange`"
  [this & args]
  (apply (-> this .-setSelectionRange) (concat [this] args)))

(defn labels
  "Property.

  The HTMLInputElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<input>`

  `var labelElements = input.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLInputElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<input>`

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
  (-> this (.multiple)))

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
  webkitdirectory HTML attribute and indicates that the `web.<input>`
  should let the user select directories instead of files. When
  directory is selected, the directory and its entire hierarchy
  contents are included in the set of selected items. The selected
  system entries can be obtained using the `web.webkitEntries`

  `HTMLInputElement.webkitdirectory = boolValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`"
  [this]
  (-> this (.webkitdirectory)))

(defn set-webkitdirectory!
  "Property.

  The HTMLInputElement.webkitdirectory is a property that reflects
  webkitdirectory HTML attribute and indicates that the `web.<input>`
  should let the user select directories instead of files. When
  directory is selected, the directory and its entire hierarchy
  contents are included in the set of selected items. The selected
  system entries can be obtained using the `web.webkitEntries`

  `HTMLInputElement.webkitdirectory = boolValue`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory`"
  [this val]
  (aset this "webkitdirectory" val))

(defn webkit-entries
  "Property.

  The read-only webkitEntries property of the `html.HTMLInputElement`
  contains an array of file system entries (as objects based on
  representing files and/or directories selected by the user using
  `web.<input>` element of type file, but only if that selection
  made using drag-and-drop: selecting a file in the dialog will
  the property empty (bug

  `var entries = HTMLInputElement.webkitEntries;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`"
  [this]
  (-> this (.webkitEntries)))

(defn set-webkit-entries!
  "Property.

  The read-only webkitEntries property of the `html.HTMLInputElement`
  contains an array of file system entries (as objects based on
  representing files and/or directories selected by the user using
  `web.<input>` element of type file, but only if that selection
  made using drag-and-drop: selecting a file in the dialog will
  the property empty (bug

  `var entries = HTMLInputElement.webkitEntries;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitEntries`"
  [this val]
  (aset this "webkitEntries" val))

