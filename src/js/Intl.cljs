(ns js.Intl
  "The Intl object is the namespace for the ECMAScript Internationalization
  which provides language sensitive string comparison, number formatting,
  date and time formatting. The INTL object provides access to
  constructors as well as functionality common to the internationalization
  and other language sensitive functions."
  (:refer-clojure :exclude []))

(defn get-canonical-locales
  "Method.

  The Intl.getCanonicalLocales() method returns an array containing
  canonical locale names. Duplicates will be omitted and elements
  be validated as structurally valid language tags.

  `Intl.getCanonicalLocales(locales)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales`"
  [this locales]
  (-> this (.getCanonicalLocales locales)))

(defn collator
  "Property.

  The Intl.Collator object is a constructor for collators, objects
  enable language sensitive string comparison.

  `new Intl.Collator([locales[, options]])
  Intl.Collator.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator`"
  [this]
  (-> this (.-Collator)))

(defn set-collator!
  "Property.

  The Intl.Collator object is a constructor for collators, objects
  enable language sensitive string comparison.

  `new Intl.Collator([locales[, options]])
  Intl.Collator.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator`"
  [this val]
  (aset this "Collator" val))

(defn date-time-format
  "Property.

  The Intl.DateTimeFormat object is a constructor for objects that
  language-sensitive date and time formatting.

  `new Intl.DateTimeFormat([locales[, options]])
  Intl.DateTimeFormat.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat`"
  [this]
  (-> this (.-DateTimeFormat)))

(defn set-date-time-format!
  "Property.

  The Intl.DateTimeFormat object is a constructor for objects that
  language-sensitive date and time formatting.

  `new Intl.DateTimeFormat([locales[, options]])
  Intl.DateTimeFormat.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat`"
  [this val]
  (aset this "DateTimeFormat" val))

(defn list-format
  "Property.

  The Intl.ListFormat object is a constructor for objects that
  language-sensitive list formatting.

  `new Intl.ListFormat([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat`"
  [this]
  (-> this (.-ListFormat)))

(defn set-list-format!
  "Property.

  The Intl.ListFormat object is a constructor for objects that
  language-sensitive list formatting.

  `new Intl.ListFormat([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ListFormat`"
  [this val]
  (aset this "ListFormat" val))

(defn number-format
  "Property.

  The Intl.NumberFormat object is a constructor for objects that
  language sensitive number formatting.

  `new Intl.NumberFormat([locales[, options]])
  Intl.NumberFormat.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat`"
  [this]
  (-> this (.-NumberFormat)))

(defn set-number-format!
  "Property.

  The Intl.NumberFormat object is a constructor for objects that
  language sensitive number formatting.

  `new Intl.NumberFormat([locales[, options]])
  Intl.NumberFormat.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat`"
  [this val]
  (aset this "NumberFormat" val))

(defn plural-rules
  "Property.

  The Intl.PluralRules object is a constructor for objects that
  plural sensitive formatting and plural language rules.

  `new Intl.PluralRules([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules`"
  [this]
  (-> this (.-PluralRules)))

(defn set-plural-rules!
  "Property.

  The Intl.PluralRules object is a constructor for objects that
  plural sensitive formatting and plural language rules.

  `new Intl.PluralRules([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules`"
  [this val]
  (aset this "PluralRules" val))

(defn relative-time-format
  "Property.

  The Intl.RelativeTimeFormat object is a constructor for objects
  enable language-sensitive relative time formatting.

  `new Intl.RelativeTimeFormat([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat`"
  [this]
  (-> this (.-RelativeTimeFormat)))

(defn set-relative-time-format!
  "Property.

  The Intl.RelativeTimeFormat object is a constructor for objects
  enable language-sensitive relative time formatting.

  `new Intl.RelativeTimeFormat([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat`"
  [this val]
  (aset this "RelativeTimeFormat" val))

