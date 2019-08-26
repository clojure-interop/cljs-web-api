(ns js.PluralRules
  "The Intl.PluralRules object is a constructor for objects that
  plural sensitive formatting and plural language rules."
  (:refer-clojure :exclude []))

(defn resolved-options
  "Method.

  The Intl.PluralRules.prototype.resolvedOptions() method returns
  new object with properties reflecting the locale and plural formatting
  computed during initialization of this `js.PluralRules` object.

  `pluralRule.resolvedOptions()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/resolvedOptions`"
  [this ]
  (-> this (.resolvedOptions)))

(defn select
  "Method.

  The Intl.PluralRules.prototype.select method returns a String
  which plural rule to use for locale-aware formatting.

  `pluralRule.select(number)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/select`"
  [this number]
  (-> this (.select number)))

(defn supported-locales-of
  "Method.

  The Intl.PluralRules.supportedLocalesOf() method returns an array
  those of the provided locales that are supported in plural formatting
  having to fall back to the runtime's default locale.

  `Intl.PluralRules.supportedLocalesOf(locales[, options])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/supportedLocalesOf`"
  [this & args]
  (apply (-> this .-supportedLocalesOf) (concat [this] args)))

(defn prototype
  "Property.

  The Intl.PluralRules.prototype property represents the prototype
  for the `Intl.PluralRules` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Intl.PluralRules.prototype property represents the prototype
  for the `Intl.PluralRules` constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype`"
  [this val]
  (aset this "prototype" val))

