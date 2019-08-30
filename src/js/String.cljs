(ns js.String
  "The String global object is a constructor for strings or a sequence
  characters."
  (:refer-clojure :exclude [concat quote repeat replace]))

(defn from-char-code
  "Method.

  The static String.fromCharCode() method returns a string created
  the specified sequence of UTF-16 code units.

  `String.fromCharCode(num1[, ...[, numN]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode`"
  [this & args]
  (-> this .-fromCharCode (.apply this (clj->js args))))

(defn from-code-point
  "Method.

  The static String.fromCodePoint() method returns a string created
  using the specified sequence of code points.

  `String.fromCodePoint(num1[, ...[, numN]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint`"
  [this & args]
  (-> this .-fromCodePoint (.apply this (clj->js args))))

(defn raw
  "Method.

  The static String.raw() method is a tag function of template
  similar to the r prefix in Python or the @ prefix in C# for string
  (yet there is a difference: see explanations in this issue).
  used to get the raw string form of template strings, that is,
  (e.g. ${foo}) are processed, but escapes (e.g. \\\\n) are not.

  `String.raw(callSite, ...substitutions)

  String.raw`templateString``

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw`"
  [this & args]
  (-> this .-raw (.apply this (clj->js args))))

(defn anchor
  "Method.

  [Deprecated]

  The anchor() method creates an `<a>` HTML anchor element that
  used as a hypertext target.

  `str.anchor(name)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor`"
  [this name]
  (-> this (.anchor name)))

(defn big
  "Method.

  [Deprecated]

  The big() method creates a `<big>` HTML element that causes a
  to be displayed in a big font.

  `str.big()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/big`"
  [this ]
  (-> this (.big)))

(defn blink
  "Method.

  [Deprecated]

  The blink() method creates a `<blink>` HTML element that causes
  string to blink.

  `str.blink()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink`"
  [this ]
  (-> this (.blink)))

(defn bold
  "Method.

  [Deprecated]

  The bold() method creates a `<b>` HTML element that causes a
  to be displayed as bold.

  `str.bold()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/bold`"
  [this ]
  (-> this (.bold)))

(defn char-at
  "Method.

  The `js.String` object's charAt() method returns a new string
  of the single UTF-16 code unit located at the specified offset
  the string.

  `character = str.charAt(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt`"
  [this index]
  (-> this (.charAt index)))

(defn char-code-at
  "Method.

  The charCodeAt() method returns an integer between 0 and 65535
  the UTF-16 code unit at the given index.

  `str.charCodeAt(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt`"
  [this index]
  (-> this (.charCodeAt index)))

(defn code-point-at
  "Method.

  The codePointAt() method returns a non-negative integer that
  the Unicode code point value.

  `str.codePointAt(pos)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt`"
  [this pos]
  (-> this (.codePointAt pos)))

(defn concat
  "Method.

  The concat() method concatenates the string arguments to the
  string and returns a new string.

  `str.concat(string2[, string3, ..., stringN])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat`"
  [this & args]
  (-> this .-concat (.apply this (clj->js args))))

(defn ends-with
  "Method.

  The endsWith() method determines whether a string ends with the
  of a specified string, returning true or false as appropriate.

  `str.endsWith(searchString[, length])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith`"
  [this & args]
  (-> this .-endsWith (.apply this (clj->js args))))

(defn fixed
  "Method.

  [Deprecated]

  The fixed() method creates a `<tt>` HTML element that causes
  string to be displayed in fixed-pitch font.

  `str.fixed()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fixed`"
  [this ]
  (-> this (.fixed)))

(defn fontcolor
  "Method.

  [Deprecated]

  The fontcolor() method creates a `<font>` HTML element that causes
  string to be displayed in the specified font color.

  `str.fontcolor(color)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor`"
  [this color]
  (-> this (.fontcolor color)))

(defn fontsize
  "Method.

  [Deprecated]

  The fontsize() method creates a `<font>` HTML element that causes
  string to be displayed in the specified font size.

  `str.fontsize(size)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize`"
  [this size]
  (-> this (.fontsize size)))

(defn includes
  "Method.

  The includes() method determines whether one string may be found
  another string, returning true or false as appropriate.

  `str.includes(searchString[, position])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes`"
  [this & args]
  (-> this .-includes (.apply this (clj->js args))))

(defn index-of
  "Method.

  The indexOf() method returns the index within the calling `js.String`
  of the first occurrence of the specified value, starting the
  at fromIndex. Returns -1 if the value is not found.

  `str.indexOf(searchValue)
  str.indexOf(searchValue, fromIndex)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf`"
  [this & args]
  (-> this .-indexOf (.apply this (clj->js args))))

(defn italics
  "Method.

  [Deprecated]

  The italics() method creates an `<i>` HTML element that causes
  string to be italic.

  `str.italics()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/italics`"
  [this ]
  (-> this (.italics)))

(defn last-index-of
  "Method.

  The lastIndexOf() method returns the index within the calling
  object of the last occurrence of the specified value, searching
  from fromIndex. Returns -1 if the value is not found.

  `str.lastIndexOf(searchValue[, fromIndex])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf`"
  [this & args]
  (-> this .-lastIndexOf (.apply this (clj->js args))))

(defn link
  "Method.

  [Deprecated]

  The link() method creates a string representing the code for
  `<a>` HTML element to be used as a hypertext link to another

  `str.link(url)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link`"
  [this url]
  (-> this (.link url)))

(defn locale-compare
  "Method.

  The localeCompare() method returns a number indicating whether
  reference string comes before or after or is the same as the
  string in sort order.

  `referenceStr.localeCompare(compareString[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare`"
  [this & args]
  (-> this .-localeCompare (.apply this (clj->js args))))

(defn match
  "Method.

  The match() method retrieves the result of matching a string
  a regular expression.

  `str.match(regexp)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match`"
  [this regexp]
  (-> this (.match regexp)))

(defn match-all
  "Method.

  The matchAll() method returns an iterator of all results matching
  string against a regular expression, including capturing groups.

  `str.matchAll(regexp)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll`"
  [this regexp]
  (-> this (.matchAll regexp)))

(defn normalize
  "Method.

  The normalize() method returns the Unicode Normalization Form
  a given string (if the value isn't a string, it will be converted
  one first).

  `str.normalize([form])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize`"
  [this & args]
  (-> this .-normalize (.apply this (clj->js args))))

(defn pad-end
  "Method.

  The padEnd() method pads the current string with a given string
  if needed) so that the resulting string reaches a given length.
  padding is applied from the end of the current string.

  `str.padEnd(targetLength [, padString])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd`"
  [this & args]
  (-> this .-padEnd (.apply this (clj->js args))))

(defn pad-start
  "Method.

  The padStart() method pads the current string with another string
  times, if needed) until the resulting string reaches the given

  `str.padStart(targetLength [, padString])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart`"
  [this & args]
  (-> this .-padStart (.apply this (clj->js args))))

(defn quote
  "Method.

  [Non Standard]
  [Obsolute]

  The non-standard quote() method returns a copy of the string,
  various special characters in the string with their escape sequences
  wrapping the result in double-quotes (\\\").

  `str.quote()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/quote`"
  [this ]
  (-> this (.quote)))

(defn repeat
  "Method.

  The repeat() method constructs and returns a new string which
  the specified number of copies of the string on which it was
  concatenated together.

  `str.repeat(count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat`"
  [this count]
  (-> this (.repeat count)))

(defn replace
  "Method.

  The replace() method returns a new string with some or all matches
  a pattern replaced by a replacement.

  `var newStr = str.replace(regexp|substr, newSubstr|function)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace`"
  [this & args]
  (-> this .-replace (.apply this (clj->js args))))

(defn search
  "Method.

  The search() method executes a search for a match between a regular
  and this `js.String` object.

  `str.search(regexp)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search`"
  [this regexp]
  (-> this (.search regexp)))

(defn slice
  "Method.

  The slice() method extracts a section of a string and returns
  as a new string, without modifying the original string.

  `str.slice(beginIndex[, endIndex])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice`"
  [this & args]
  (-> this .-slice (.apply this (clj->js args))))

(defn small
  "Method.

  [Deprecated]

  The small() method creates a `<small>` HTML element that causes
  string to be displayed in a small font.

  `str.small()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/small`"
  [this ]
  (-> this (.small)))

(defn split
  "Method.

  The split() method splits a `js.String` object into an array
  strings by separating the string into substrings, using a specified
  string to determine where to make each split.

  `str.split([separator[, limit]])


  Attention: If an empty string (\\\"\\\") is used as the separator, the string is not split between each user-perceived character (grapheme cluster) or between each unicode character (codepoint) but between each UTF-16 codeunit. This destroys surrogate pairs. See also How do you get a string to a character array in JavaScript? on stackoverflow.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split`"
  [this & args]
  (-> this .-split (.apply this (clj->js args))))

(defn starts-with
  "Method.

  The startsWith() method determines whether a string begins with
  characters of a specified string, returning true or false as

  `str.startsWith(searchString[, position])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith`"
  [this & args]
  (-> this .-startsWith (.apply this (clj->js args))))

(defn strike
  "Method.

  [Deprecated]

  The strike() method creates a `<strike>` HTML element that causes
  string to be displayed as struck-out text.

  `str.strike()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/strike`"
  [this ]
  (-> this (.strike)))

(defn sub
  "Method.

  [Deprecated]

  The sub() method creates a `<sub>` HTML element that causes a
  to be displayed as subscript.

  `str.sub()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sub`"
  [this ]
  (-> this (.sub)))

(defn substr
  "Method.

  The substr() method returns a portion of the string, starting
  the specified index and extending for a given number of characters

  `str.substr(start[, length])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr`"
  [this & args]
  (-> this .-substr (.apply this (clj->js args))))

(defn substring
  "Method.

  The substring() method returns the part of the string between
  start and end indexes, or to the end of the string.

  `str.substring(indexStart[, indexEnd])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring`"
  [this & args]
  (-> this .-substring (.apply this (clj->js args))))

(defn sup
  "Method.

  [Deprecated]

  The sup() method creates a `<sup>` HTML element that causes a
  to be displayed as superscript.

  `str.sup()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/sup`"
  [this ]
  (-> this (.sup)))

(defn to-locale-lower-case
  "Method.

  The toLocaleLowerCase() method returns the calling string value
  to lower case, according to any locale-specific case mappings.

  `str.toLocaleLowerCase()
  str.toLocaleLowerCase(locale)
  str.toLocaleLowerCase([locale, locale, ...])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase`"
  [this & args]
  (-> this .-toLocaleLowerCase (.apply this (clj->js args))))

(defn to-locale-upper-case
  "Method.

  The toLocaleUpperCase() method returns the calling string value
  to upper case, according to any locale-specific case mappings.

  `str.toLocaleUpperCase()
  str.toLocaleUpperCase(locale)
  str.toLocaleUpperCase([locale, locale, ...])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase`"
  [this & args]
  (-> this .-toLocaleUpperCase (.apply this (clj->js args))))

(defn to-lower-case
  "Method.

  The toLowerCase() method returns the calling string value converted
  lower case.

  `str.toLowerCase()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase`"
  [this ]
  (-> this (.toLowerCase)))

(defn to-source
  "Method.

  [Non Standard]

  The toSource() method returns a string representing the source
  of the object.

  `String.toSource()
  str.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toSource`"
  [this & args]
  (-> this .-toSource (.apply this (clj->js args))))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified

  `str.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString`"
  [this ]
  (-> this (.toString)))

(defn to-upper-case
  "Method.

  The toUpperCase() method returns the calling string value converted
  uppercase (the value will be converted to a string if it isn't

  `str.toUpperCase()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase`"
  [this ]
  (-> this (.toUpperCase)))

(defn trim
  "Method.

  The trim() method removes whitespace from both ends of a string.
  in this context is all the whitespace characters (space, tab,
  space, etc.) and all the line terminator characters (LF, CR,

  `str.trim()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim`"
  [this ]
  (-> this (.trim)))

(defn trim-end
  "Method.

  The trimEnd() method removes whitespace from the end of a string.
  is an alias of this method.

  `str.trimEnd();
  str.trimRight();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd`"
  [this & args]
  (-> this .-trimEnd (.apply this (clj->js args))))

(defn trim-start
  "Method.

  The trimStart() method removes whitespace from the beginning
  a string. trimLeft() is an alias of this method.

  `str.trimStart();
  str.trimLeft();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart`"
  [this & args]
  (-> this .-trimStart (.apply this (clj->js args))))

(defn value-of
  "Method.

  The valueOf() method returns the primitive value of a `js.String`

  `str.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn prototype
  "Property.

  The String.prototype property represents the `js.String` prototype

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The String.prototype property represents the `js.String` prototype

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype`"
  [this val]
  (aset this "prototype" val))

(defn length
  "Property.

  The length property of a `js.String` object indicates the length
  a string, in UTF-16 code units.

  `string.length`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length`"
  [this]
  (-> this (.-length)))

(defn set-length!
  "Property.

  The length property of a `js.String` object indicates the length
  a string, in UTF-16 code units.

  `string.length`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length`"
  [this val]
  (aset this "length" val))

