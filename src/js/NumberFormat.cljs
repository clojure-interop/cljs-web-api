(ns js.NumberFormat
  "The Intl.NumberFormat object is a constructor for objects that
  language sensitive number formatting."
  (:refer-clojure :exclude []))

(defn format
  "Method.

  The Intl.NumberFormat.prototype.format() method formats a number
  to the locale and formatting options of this `js.NumberFormat`

  `numberFormat.format(number)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/format`"
  [this number]
  (-> this (.format number)))

(defn format-to-parts
  "Method.

  The Intl.Numberformat.prototype.formatToParts() method allows
  formatting of strings produced by NumberTimeFormat formatters.

  `Intl.NumberFormat.prototype.formatToParts(number)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts`"
  [this number]
  (-> this (.formatToParts number)))

(defn resolved-options
  "Method.

  The Intl.NumberFormat.prototype.resolvedOptions() method returns
  new object with properties reflecting the locale and number formatting
  computed during initialization of this `js.NumberFormat` object.

  `numberFormat.resolvedOptions()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/resolvedOptions`"
  [this ]
  (-> this (.resolvedOptions)))

(defn supported-locales-of
  "Method.

  The Intl.NumberFormat.supportedLocalesOf() method returns an
  containing those of the provided locales that are supported in
  formatting without having to fall back to the runtime's default

  `Intl.NumberFormat.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn prototype
  "Property.

  The Intl.NumberFormat.prototype property represents the prototype
  for the `Intl.NumberFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype`"
  [this]
  (-> this (.-prototype)))

(defn set-prototype!
  "Property.

  The Intl.NumberFormat.prototype property represents the prototype
  for the `Intl.NumberFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype`"
  [this val]
  (aset this "prototype" val))

