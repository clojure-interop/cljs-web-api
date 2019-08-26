(ns web.dom.HTMLLinkElement
  "The HTMLLinkElement interface represents reference information
  external resources and the relationship of those resources to
  document and vice-versa (corresponds to <link> element; not to
  confused with <a>, which is represented by HTMLAnchorElement).
  object inherits all of the properties and methods of the `web.dom.HTMLElement`"
  (:refer-clojure :exclude []))

(defn dom-string
  "Property.

  HTMLLinkElement.crossOrigin"
  [this]
  (-> this (.-DOMString)))

(defn set-dom-string!
  "Property.

  HTMLLinkElement.crossOrigin"
  [this val]
  (aset this "DOMString" val))

(defn boolean
  "Property.

  HTMLLinkElement.href"
  [this]
  (-> this (.-Boolean)))

(defn set-boolean!
  "Property.

  HTMLLinkElement.href"
  [this val]
  (aset this "Boolean" val))

(defn dom-token-list
  "Property.

  HTMLLinkElement.sizes Read only"
  [this]
  (-> this (.-DOMTokenList)))

(defn set-dom-token-list!
  "Property.

  HTMLLinkElement.sizes Read only"
  [this val]
  (aset this "DOMTokenList" val))

(defn dom-settable-token-list
  "Property.

  LinkStyle.sheet Read only"
  [this]
  (-> this (.-DOMSettableTokenList)))

(defn set-dom-settable-token-list!
  "Property.

  LinkStyle.sheet Read only"
  [this val]
  (aset this "DOMSettableTokenList" val))

(defn style-sheet
  "Property.

  HTMLLinkElement.type"
  [this]
  (-> this (.-StyleSheet)))

(defn set-style-sheet!
  "Property.

  HTMLLinkElement.type"
  [this val]
  (aset this "StyleSheet" val))

(defn charset
  "Property.

  Is a DOMString representing the character encoding for the target"
  [this]
  (-> this (.-charset)))

(defn set-charset!
  "Property.

  Is a DOMString representing the character encoding for the target"
  [this val]
  (aset this "charset" val))

(defn rev
  "Property.

  Is a DOMString representing the reverse relationship of the linked
  from the resource to the document.
  Note: Currently the W3C HTML 5.2 spec states that rev is no
  obsolete, whereas the WHATWG living standard still has it labeled
  Until this discrepancy is resolved, you should still assume it
  obsolete."
  [this]
  (-> this (.-rev)))

(defn set-rev!
  "Property.

  Is a DOMString representing the reverse relationship of the linked
  from the resource to the document.
  Note: Currently the W3C HTML 5.2 spec states that rev is no
  obsolete, whereas the WHATWG living standard still has it labeled
  Until this discrepancy is resolved, you should still assume it
  obsolete."
  [this val]
  (aset this "rev" val))

(defn target
  "Property.

  Is a DOMString representing the name of the target frame to which
  resource applies."
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  Is a DOMString representing the name of the target frame to which
  resource applies."
  [this val]
  (aset this "target" val))

(defn as
  "Property.

  The as property of the `web.dom.HTMLLinkElement` interface returns
  `web.dom.DOMString` representing the type of content being loaded
  the HTML link, one of \\\"script\\\", \\\"style\\\", \\\"image\\\", \\\"video\\\",
  \\\"track\\\", \\\"font\\\", \\\"fetch\\\".

  `var as = HTMLLinkElement.as
  HTMLLinkElement.as = as`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/as`"
  [this]
  (-> this (.-as)))

(defn set-as!
  "Property.

  The as property of the `web.dom.HTMLLinkElement` interface returns
  `web.dom.DOMString` representing the type of content being loaded
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
  attribute of the `<link>` element defining which referrer is
  when fetching the resource.

  `DOMString HTMLLinkElement.referrerPolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLLinkElement.referrerPolicy property reflect the HTML
  attribute of the `<link>` element defining which referrer is
  when fetching the resource.

  `DOMString HTMLLinkElement.referrerPolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn rel
  "Property.

  The HTMLLinkElement.rel property reflects the rel attribute.
  is a `web.dom.DOMString` containing a space-separated list of
  types indicating the relationship between the resource represented
  the `<link>` element and the current document.

  `var relstr = linkElt.rel;
  linkElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel`"
  [this]
  (-> this (.-rel)))

(defn set-rel!
  "Property.

  The HTMLLinkElement.rel property reflects the rel attribute.
  is a `web.dom.DOMString` containing a space-separated list of
  types indicating the relationship between the resource represented
  the `<link>` element and the current document.

  `var relstr = linkElt.rel;
  linkElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/rel`"
  [this val]
  (aset this "rel" val))

(defn rel-list
  "Property.

  The HTMLLinkElement.relList read-only property reflects the rel
  It is a live `web.dom.DOMTokenList` containing the set of link
  indicating the relationship between the resource represented
  the `<link>` element and the current document.

  `var relstr = linkElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/relList`"
  [this]
  (-> this (.-relList)))

