(ns html.HTMLLinkElement
  "The HTMLLinkElement interface represents reference information
  external resources and the relationship of those resources to
  document and vice-versa. This object inherits all of the properties
  methods of the `html.HTMLElement` interface."
  (:refer-clojure :exclude []))

(defn as
  "Property.

  The as property of the `html.HTMLLinkElement` interface returns
  `dom.DOMString` representing the type of content being loaded
  the HTML link, one of \\\"script\\\", \\\"style\\\", \\\"image\\\", \\\"video\\\",
  \\\"track\\\", \\\"font\\\", \\\"fetch\\\".

  `var as = HTMLLinkElement.as
  HTMLLinkElement.as = as`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/as`"
  [this]
  (-> this (.as)))

(defn set-as!
  "Property.

  The as property of the `html.HTMLLinkElement` interface returns
  `dom.DOMString` representing the type of content being loaded
  the HTML link, one of \\\"script\\\", \\\"style\\\", \\\"image\\\", \\\"video\\\",
  \\\"track\\\", \\\"font\\\", \\\"fetch\\\".

  `var as = HTMLLinkElement.as
  HTMLLinkElement.as = as`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/as`"
  [this val]
  (aset this "as" val))

(defn referrer-policy
  "Property.

  The HTMLLinkElement.referrerPolicy property reflect the HTML
  attribute of the `web.<link>` element defining which referrer
  sent when fetching the resource.

  `DOMString HTMLLinkElement.referrerPolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLLinkElement.referrerPolicy property reflect the HTML
  attribute of the `web.<link>` element defining which referrer
  sent when fetching the resource.

  `DOMString HTMLLinkElement.referrerPolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn rel
  "Property.

  The HTMLLinkElement.rel property reflects the rel attribute.
  is a `dom.DOMString` containing a space-separated list of link
  indicating the relationship between the resource represented
  the `web.<link>` element and the current document.

  `var relstr = linkElt.rel;
  linkElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel`"
  [this]
  (-> this (.rel)))

(defn set-rel!
  "Property.

  The HTMLLinkElement.rel property reflects the rel attribute.
  is a `dom.DOMString` containing a space-separated list of link
  indicating the relationship between the resource represented
  the `web.<link>` element and the current document.

  `var relstr = linkElt.rel;
  linkElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel`"
  [this val]
  (aset this "rel" val))

(defn rel-list
  "Property.

  The HTMLLinkElement.relList read-only property reflects the rel
  It is a live `dom.DOMTokenList` containing the set of link types
  the relationship between the resource represented by the `web.<link>`
  and the current document.

  `var relstr = linkElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/relList`"
  [this]
  (-> this (.relList)))

