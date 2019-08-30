(ns js.RegExp
  "The RegExp constructor creates a regular expression object for
  text with a pattern."
  (:refer-clojure :exclude [test]))

(defn compile
  "Method.

  [Deprecated]

  The deprecated compile() method is used to (re-)compile a regular
  during execution of a script. It is basically the same as the
  constructor.

  `regexObj.compile(pattern, flags)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile`"
  [this pattern flags]
  (-> this (.compile pattern flags)))

(defn exec
  "Method.

  The exec() method executes a search for a match in a specified
  Returns a result array, or `js.null`.

  `regexObj.exec(str)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec`"
  [this str]
  (-> this (.exec str)))

(defn test
  "Method.

  The test() method executes a search for a match between a regular
  and a specified string. Returns true or false.

  `regexObj.test(str)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test`"
  [this str]
  (-> this (.test str)))

(defn to-source
  "Method.

  [Non Standard]

  The toSource() method returns a string representing the source
  of the object.

  `regexObj.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toSource`"
  [this ]
  (-> this (.toSource)))

(defn to-string
  "Method.

  The toString() method returns a string representing the regular

  `regexObj.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString`"
  [this ]
  (-> this (.toString)))

(defn prototype
  "Property.

  The RegExp.prototype property represents the prototype object
  the `js.RegExp` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The RegExp.prototype property represents the prototype object
  the `js.RegExp` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype`"
  [this val]
  (aset this "prototype" val))

(defn length
  "Property.

  The value of RegExp.length is 2."
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The value of RegExp.length is 2."
  [this val]
  (aset this "length" val))

(defn last-index
  "Property.

  The lastIndex is a read/write integer property of regular expression
  that specifies the index at which to start the next match.

  `regExpObj.lastIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex`"
  [this]
  (-> this (.-lastIndex)))

(defn set-last-index!
  "Property.

  The lastIndex is a read/write integer property of regular expression
  that specifies the index at which to start the next match.

  `regExpObj.lastIndex`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex`"
  [this val]
  (aset this "lastIndex" val))

(defn input
  "Property.

  [Non Standard]

  The non-standard input property is a static property of regular
  that contains the string against which a regular expression is
  RegExp.$_ is an alias for this property.

  `RegExp.input
  RegExp.$_`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input`"
  [this]
  (-> this (.-input)))

(defn set-input!
  "Property.

  [Non Standard]

  The non-standard input property is a static property of regular
  that contains the string against which a regular expression is
  RegExp.$_ is an alias for this property.

  `RegExp.input
  RegExp.$_`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input`"
  [this val]
  (aset this "input" val))

(defn last-match
  "Property.

  [Read Only]
  [Non Standard]

  The non-standard lastMatch property is a static and read-only
  of regular expressions that contains the last matched characters.
  is an alias for this property.

  `RegExp.lastMatch
  RegExp['$&']`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch`"
  [this]
  (-> this (.-lastMatch)))

(defn last-paren
  "Property.

  [Read Only]
  [Non Standard]

  The non-standard lastParen property is a static and read-only
  of regular expressions that contains the last parenthesized substring
  if any. RegExp.$+ is an alias for this property.

  `RegExp.lastParen
  RegExp['$+']`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen`"
  [this]
  (-> this (.-lastParen)))

(defn left-context
  "Property.

  [Read Only]
  [Non Standard]

  The non-standard leftContext property is a static and read-only
  of regular expressions that contains the substring preceding
  most recent match. RegExp.$` is an alias for this property.

  `RegExp.leftContext
  RegExp['$`']`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext`"
  [this]
  (-> this (.-leftContext)))

(defn dot-all
  "Property.

  [Read Only]
  [Draft]

  The dotAll property indicates whether or not the \\\"s\\\" flag is
  with the regular expression. dotAll is a read-only property of
  individual regular expression instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll`"
  [this]
  (-> this (.-dotAll)))

(defn flags
  "Property.

  The flags property returns a string consisting of the flags of
  current regular expression object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags`"
  [this]
  (-> this (.-flags)))

(defn set-flags!
  "Property.

  The flags property returns a string consisting of the flags of
  current regular expression object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags`"
  [this val]
  (aset this "flags" val))

(defn global
  "Property.

  [Read Only]

  The global property indicates whether or not the \\\"g\\\" flag is
  with the regular expression. global is a read-only property of
  individual regular expression instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global`"
  [this]
  (-> this (.-global)))

(defn ignore-case
  "Property.

  [Read Only]

  The ignoreCase property indicates whether or not the \\\"i\\\" flag
  used with the regular expression. ignoreCase is a read-only property
  an individual regular expression instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase`"
  [this]
  (-> this (.-ignoreCase)))

(defn multiline
  "Property.

  [Read Only]

  The multiline property indicates whether or not the \\\"m\\\" flag
  used with the regular expression. multiline is a read-only property
  an individual regular expression instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline`"
  [this]
  (-> this (.-multiline)))

(defn source
  "Property.

  The source property returns a `js.String` containing the source
  of the regexp object, and it doesn't contain the two forward
  on both sides and any flags.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source`"
  [this]
  (-> this (.-source)))

(defn set-source!
  "Property.

  The source property returns a `js.String` containing the source
  of the regexp object, and it doesn't contain the two forward
  on both sides and any flags.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source`"
  [this val]
  (aset this "source" val))

(defn sticky
  "Property.

  [Read Only]

  The sticky property reflects whether or not the search is sticky
  in strings only from the index indicated by the `lastIndex` property
  this regular expression). sticky is a read-only property of an
  regular expression object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky`"
  [this]
  (-> this (.-sticky)))

(defn unicode
  "Property.

  [Read Only]

  The unicode property indicates whether or not the \\\"u\\\" flag
  used with a regular expression. unicode is a read-only property
  an individual regular expression instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode`"
  [this]
  (-> this (.-unicode)))

(defn right-context
  "Property.

  [Read Only]
  [Non Standard]

  The non-standard rightContext property is a static and read-only
  of regular expressions that contains the substring following
  most recent match. RegExp.$' is an alias for this property.

  `RegExp.rightContext
  RegExp[\\\"$'\\\"]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext`"
  [this]
  (-> this (.-rightContext)))

