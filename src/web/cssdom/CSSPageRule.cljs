(ns web.cssdom.CSSPageRule
  "CSSPageRule is an interface representing a single CSS `@page`
  It implements the `web.cssdom.CSSRule` interface with a type
  of 6 (CSSRule.PAGE_RULE)."
  (:refer-clojure :exclude []))

(defn selector-text
  "Property.

  Represents the text of the page selector associated with the"
  [this]
  (-> this (.selectorText)))

(defn set-selector-text!
  "Property.

  Represents the text of the page selector associated with the"
  [this val]
  (aset this "selectorText" val))

