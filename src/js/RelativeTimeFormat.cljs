(ns js.RelativeTimeFormat
  "The Intl.RelativeTimeFormat object is a constructor for objects
  enable language-sensitive relative time formatting."
  (:refer-clojure :exclude []))

(defn format
  "Method.

  The Intl.RelativeTimeFormat.prototype.format() method formats
  value and unit according to the locale and formatting options
  this `js.RelativeTimeFormat` object.

  `relativeTimeFormat.format(value, unit)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/format`"
  [this value unit]
  (-> this (.format value unit)))

(defn format-to-parts
  "Method.

  The Intl.RelativeTimeFormat.prototype.formatToParts() method
  an `js.Array` of objects representing the relative time format
  parts that can be used for custom locale-aware formatting.

  `RelativeTimeFormat.formatToParts(value, unit)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/formatToParts`"
  [this value unit]
  (-> this (.formatToParts value unit)))

(defn resolved-options
  "Method.

  The Intl.RelativeTimeFormat.prototype.resolvedOptions() method
  a new object with properties reflecting the locale and relative
  formatting options computed during initialization of this `js.RelativeTimeFormat`

  `relativeTimeFormat.resolvedOptions()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/resolvedOptions`"
  [this ]
  (-> this (.resolvedOptions)))

(defn supported-locales-of
  "Method.

  The Intl.RelativeTimeFormat.supportedLocalesOf() method returns
  array containing those of the provided locales that are supported
  date and time formatting without having to fall back to the runtime's
  locale.

  `Intl.RelativeTimeFormat.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn prototype
  "Property.

  The Intl.RelativeTimeFormat.prototype property represents the
  object for the `Intl.RelativeTimeFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Intl.RelativeTimeFormat.prototype property represents the
  object for the `Intl.RelativeTimeFormat` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype`"
  [this val]
  (aset this "prototype" val))

