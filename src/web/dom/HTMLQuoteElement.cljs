(ns web.dom.HTMLQuoteElement
  "The HTMLQuoteElement interface provides special properties and
  (beyond the regular `web.dom.HTMLElement` interface it also has
  to it by inheritance) for manipulating quoting elements, like
  and `<q>`, but not the `<cite>` element."
  (:refer-clojure :exclude []))

(defn cite
  "Property.

  Is a DOMString reflecting the cite HTML attribute, containing
  URL for the source of the quotation."
  [this]
  (-> this (.cite)))

(defn set-cite!
  "Property.

  Is a DOMString reflecting the cite HTML attribute, containing
  URL for the source of the quotation."
  [this val]
  (aset this "cite" val))

