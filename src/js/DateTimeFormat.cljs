(ns js.DateTimeFormat
  "The Intl.DateTimeFormat object is a constructor for objects that
  language-sensitive date and time formatting."
  (:refer-clojure :exclude []))

(defn format
  "Method.

  The Intl.DateTimeFormat.prototype.format() method formats a date
  to the locale and formatting options of this `Intl.DateTimeFormat`

  `dateTimeFormat.format(date)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format`"
  [this date]
  (-> this (.format date)))

(defn format-to-parts
  "Method.

  The Intl.DateTimeFormat.prototype.formatToParts() method allows
  formatting of strings produced by DateTimeFormat formatters.

  `Intl.DateTimeFormat.prototype.formatToParts(date)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts`"
  [this date]
  (-> this (.formatToParts date)))

(defn resolved-options
  "Method.

  The Intl.DateTimeFormat.prototype.resolvedOptions() method returns
  new object with properties reflecting the locale and date and
  formatting options computed during initialization of this `js.DateTimeFormat`

  `dateTimeFormat.resolvedOptions()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions`"
  [this ]
  (-> this (.resolvedOptions)))

(defn supported-locales-of
  "Method.

  The Intl.DateTimeFormat.supportedLocalesOf() method returns an
  containing those of the provided locales that are supported in
  and time formatting without having to fall back to the runtime's
  locale.

  `Intl.DateTimeFormat.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn prototype
  "Property.

  The Intl.DateTimeFormat.prototype property represents the prototype
  for the `Intl.DateTimeFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Intl.DateTimeFormat.prototype property represents the prototype
  for the `Intl.DateTimeFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype`"
  [this val]
  (aset this "prototype" val))

