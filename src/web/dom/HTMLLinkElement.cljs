(ns web.dom.HTMLLinkElement
  "The HTMLLinkElement interface represents reference information
  external resources and the relationship of those resources to
  document and vice-versa (corresponds to <link> element; not to
  confused with <a>, which is represented by HTMLAnchorElement).
  object inherits all of the properties and methods of the `web.dom.HTMLElement`"
  (:refer-clojure :exclude [type]))

(defn as
  "Property.

  [Experimental]

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

  [Experimental]

  The as property of the `web.dom.HTMLLinkElement` interface returns
  `web.dom.DOMString` representing the type of content being loaded
  the HTML link, one of \\\"script\\\", \\\"style\\\", \\\"image\\\", \\\"video\\\",
  \\\"track\\\", \\\"font\\\", \\\"fetch\\\".

  `var as = HTMLLinkElement.as
  HTMLLinkElement.as = as`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/as`"
  [this val]
  (aset this "as" val))

(defn cross-origin
  "Property.

  Is a DOMString that corresponds to the CORS setting for this
  element. See CORS settings attributes for details."
  [this]
  (-> this (.-crossOrigin)))

(defn set-cross-origin!
  "Property.

  Is a DOMString that corresponds to the CORS setting for this
  element. See CORS settings attributes for details."
  [this val]
  (aset this "crossOrigin" val))

(defn disabled
  "Property.

  Is a Boolean which represents whether the link is disabled; currently
  used with style sheet links."
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  Is a Boolean which represents whether the link is disabled; currently
  used with style sheet links."
  [this val]
  (aset this "disabled" val))

(defn href
  "Property.

  Is a DOMString representing the URI for the target resource."
  [this]
  (-> this (.-href)))

(defn set-href!
  "Property.

  Is a DOMString representing the URI for the target resource."
  [this val]
  (aset this "href" val))

(defn hreflang
  "Property.

  Is a DOMString representing the language code for the linked"
  [this]
  (-> this (.-hreflang)))

(defn set-hreflang!
  "Property.

  Is a DOMString representing the language code for the linked"
  [this val]
  (aset this "hreflang" val))

(defn media
  "Property.

  Is a DOMString representing a list of one or more media formats
  which the resource applies."
  [this]
  (-> this (.-media)))

(defn set-media!
  "Property.

  Is a DOMString representing a list of one or more media formats
  which the resource applies."
  [this val]
  (aset this "media" val))

(defn referrer-policy
  "Property.

  [Experimental]

  The HTMLLinkElement.referrerPolicy property reflect the HTML
  attribute of the `<link>` element defining which referrer is
  when fetching the resource.

  `DOMString HTMLLinkElement.referrerPolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  [Experimental]

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

  [Read Only]

  The HTMLLinkElement.relList read-only property reflects the rel
  It is a live `web.dom.DOMTokenList` containing the set of link
  indicating the relationship between the resource represented
  the `<link>` element and the current document.

  `var relstr = linkElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement/relList`"
  [this]
  (-> this (.-relList)))

(defn sizes
  "Property.

  Is a DOMSettableTokenList that reflects the sizes HTML attribute,
  a list of tokens."
  [this]
  (-> this (.-sizes)))

(defn set-sizes!
  "Property.

  Is a DOMSettableTokenList that reflects the sizes HTML attribute,
  a list of tokens."
  [this val]
  (aset this "sizes" val))

(defn sheet
  "Property.

  Returns the StyleSheet object associated with the given element,
  null if there is none."
  [this]
  (-> this (.-sheet)))

(defn set-sheet!
  "Property.

  Returns the StyleSheet object associated with the given element,
  null if there is none."
  [this val]
  (aset this "sheet" val))

(defn type
  "Property.

  Is a DOMString representing the MIME type of the linked resource."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString representing the MIME type of the linked resource."
  [this val]
  (aset this "type" val))

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

