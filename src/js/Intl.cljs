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
  (-> this (.Collator)))

(defn set-collator!
  "Property.

  The Intl.Collator object is a constructor for collators, objects
  enable language sensitive string comparison.

  `new Intl.Collator([locales[, options]])
  Intl.Collator.call(this[, locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator`"
  [this val]
  (aset this "Collator" val))

