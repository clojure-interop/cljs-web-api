(ns js.Collator
  "The Intl.Collator object is a constructor for collators, objects
  enable language sensitive string comparison."
  (:refer-clojure :exclude [compare]))

(defn compare
  "Method.

  The Intl.Collator.prototype.compare() method compares two strings
  to the sort order of this `js.Collator` object.

  `collator.compare(string1, string2)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare`"
  [this string1 string2]
  (-> this (.compare string1 string2)))

(defn resolved-options
  "Method.

  The Intl.Collator.prototype.resolvedOptions() method returns
  new object with properties reflecting the locale and collation
  computed during initialization of this `js.Collator` object.

  `collator.resolvedOptions()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions`"
  [this ]
  (-> this (.resolvedOptions)))

(defn supported-locales-of
  "Method.

  The Intl.Collator.supportedLocalesOf() method returns an array
  those of the provided locales that are supported in collation
  having to fall back to the runtime's default locale.

  `Intl.Collator.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn prototype
  "Property.

  The Intl.Collator.prototype property represents the prototype
  for the `Intl.Collator` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Intl.Collator.prototype property represents the prototype
  for the `Intl.Collator` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/prototype`"
  [this val]
  (aset this "prototype" val))

