(ns html.HTMLAnchorElement
  "The HTMLAnchorElement interface represents hyperlink elements
  provides special properties and methods (beyond those of the
  `html.HTMLElement` object interface that they inherit from) for
  the layout and presentation of such elements."
  (:refer-clojure :exclude [hash]))

(defn to-string
  "Method.

  The HTMLHyperlinkElementUtils.toString() stringifier method returns
  `web.USVString` containing the whole URL. It is a read-only version
  `html.HTMLHyperlinkElementUtils.href`.

  `string = object.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/toString`"
  [this ]
  (-> this (.toString)))

(defn blur
  "Method.

  The HTMLElement.blur() method removes keyboard focus from the
  element.

  `element.blur();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur`"
  [this ]
  (-> this (.blur)))

(defn focus
  "Method.

  The HTMLElement.focus() method sets focus on the specified element,
  it can be focused. The focused element is the element which will
  keyboard and similar events by default.

  `element.focus(options); // Object parameter`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus`"
  [this options]
  (-> this (.focus options)))

(defn download
  "Property.

  The HTMLAnchorElement.download property is a `dom.DOMString`
  that the linked resource is intended to be downloaded rather
  displayed in the browser. The value, if any, specifies the default
  name for use in labeling the resource in a local file system.
  the name is not a valid file name in the underlying OS, the browser
  adjust it.

  `var dnload = anchorElt.download;
  anchorElt.download = dnload;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download`"
  [this]
  (-> this (.download)))

(defn set-download!
  "Property.

  The HTMLAnchorElement.download property is a `dom.DOMString`
  that the linked resource is intended to be downloaded rather
  displayed in the browser. The value, if any, specifies the default
  name for use in labeling the resource in a local file system.
  the name is not a valid file name in the underlying OS, the browser
  adjust it.

  `var dnload = anchorElt.download;
  anchorElt.download = dnload;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download`"
  [this val]
  (aset this "download" val))

(defn hash
  "Property.

  The HTMLHyperlinkElementUtils.hash property returns a `dom.DOMString`
  a '#' followed by the fragment identifier of the URL.

  `string = object.hash;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash`"
  [this]
  (-> this (.hash)))

(defn set-hash!
  "Property.

  The HTMLHyperlinkElementUtils.hash property returns a `dom.DOMString`
  a '#' followed by the fragment identifier of the URL.

  `string = object.hash;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash`"
  [this val]
  (aset this "hash" val))

(defn host
  "Property.

  The HTMLHyperlinkElementUtils.host property is a `web.USVString`
  the host, that is the hostname, and then, if the port of the
  is nonempty, a ':', and the port of the URL.

  `string = object.host;
  object.host = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/host`"
  [this]
  (-> this (.host)))

(defn set-host!
  "Property.

  The HTMLHyperlinkElementUtils.host property is a `web.USVString`
  the host, that is the hostname, and then, if the port of the
  is nonempty, a ':', and the port of the URL.

  `string = object.host;
  object.host = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/host`"
  [this val]
  (aset this "host" val))

(defn hostname
  "Property.

  The HTMLHyperlinkElementUtils.hostname property is a `web.USVString`
  the domain of the URL.

  `string = object.hostname;
  object.hostname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname`"
  [this]
  (-> this (.hostname)))

(defn set-hostname!
  "Property.

  The HTMLHyperlinkElementUtils.hostname property is a `web.USVString`
  the domain of the URL.

  `string = object.hostname;
  object.hostname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname`"
  [this val]
  (aset this "hostname" val))

(defn href
  "Property.

  The HTMLHyperlinkElementUtils.href property is a `web.USVString`
  the whole URL.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href`"
  [this]
  (-> this (.href)))

(defn set-href!
  "Property.

  The HTMLHyperlinkElementUtils.href property is a `web.USVString`
  the whole URL.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href`"
  [this val]
  (aset this "href" val))

(defn origin
  "Property.

  The HTMLHyperlinkElementUtils.origin read-only property is a
  containing the Unicode serialization of the origin of the represented

  `string = object.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin`"
  [this]
  (-> this (.origin)))

(defn password
  "Property.

  The HTMLHyperlinkElementUtils.password property is a `web.USVString`
  the password specified before the domain name.

  `string = object.password;
  object.password = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password`"
  [this]
  (-> this (.password)))

(defn pathname
  "Property.

  The HTMLHyperlinkElementUtils.pathname property is a `web.USVString`
  an initial '/' followed by the path of the URL (or the empty
  if there is no path).

  `string = object.pathname;
  object.pathname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname`"
  [this]
  (-> this (.pathname)))

(defn set-pathname!
  "Property.

  The HTMLHyperlinkElementUtils.pathname property is a `web.USVString`
  an initial '/' followed by the path of the URL (or the empty
  if there is no path).

  `string = object.pathname;
  object.pathname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname`"
  [this val]
  (aset this "pathname" val))

(defn port
  "Property.

  The HTMLHyperlinkElementUtils.port property is a `web.USVString`
  the port number of the URL. If the URL does not contain an explicit
  number, it will be set to ''.

  `string = object.port;
  object.port = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/port`"
  [this]
  (-> this (.port)))

(defn set-port!
  "Property.

  The HTMLHyperlinkElementUtils.port property is a `web.USVString`
  the port number of the URL. If the URL does not contain an explicit
  number, it will be set to ''.

  `string = object.port;
  object.port = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/port`"
  [this val]
  (aset this "port" val))

(defn protocol
  "Property.

  The HTMLHyperlinkElementUtils.protocol property is a `web.USVString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;
  object.protocol = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/protocol`"
  [this]
  (-> this (.protocol)))

(defn set-protocol!
  "Property.

  The HTMLHyperlinkElementUtils.protocol property is a `web.USVString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;
  object.protocol = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/protocol`"
  [this val]
  (aset this "protocol" val))

(defn referrer-policy
  "Property.

  The HTMLAnchorElement.referrerPolicy property reflect the HTML
  attribute of the `web.<a>` element defining which referrer is
  when fetching the resource.

  `refStr = anchorElt.referrerPolicy;
  anchorElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLAnchorElement.referrerPolicy property reflect the HTML
  attribute of the `web.<a>` element defining which referrer is
  when fetching the resource.

  `refStr = anchorElt.referrerPolicy;
  anchorElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn rel
  "Property.

  The HTMLAnchorElement.rel property reflects the rel attribute.
  is a `dom.DOMString` containing a space-separated list of link
  indicating the relationship between the resource represented
  the `web.<a>` element and the current document.

  `var relstr = anchorElt.rel;
  anchorElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/rel`"
  [this]
  (-> this (.rel)))

(defn set-rel!
  "Property.

  The HTMLAnchorElement.rel property reflects the rel attribute.
  is a `dom.DOMString` containing a space-separated list of link
  indicating the relationship between the resource represented
  the `web.<a>` element and the current document.

  `var relstr = anchorElt.rel;
  anchorElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/rel`"
  [this val]
  (aset this "rel" val))

(defn rel-list
  "Property.

  The HTMLAnchorElement.relList read-only property reflects the
  attribute. It is a live `dom.DOMTokenList` containing the set
  link types indicating the relationship between the resource represented
  the `web.<a>` element and the current document.

  `var relstr = anchorElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/relList`"
  [this]
  (-> this (.relList)))

(defn set-rel-list!
  "Property.

  The HTMLAnchorElement.relList read-only property reflects the
  attribute. It is a live `dom.DOMTokenList` containing the set
  link types indicating the relationship between the resource represented
  the `web.<a>` element and the current document.

  `var relstr = anchorElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/relList`"
  [this val]
  (aset this "relList" val))

(defn search
  "Property.

  The HTMLHyperlinkElementUtils.search property is a search string,
  called a query string, that is `web.USVString` containing a '?'
  by the parameters of the URL.

  `string = object.search;
  object.search = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search`"
  [this]
  (-> this (.search)))

(defn set-search!
  "Property.

  The HTMLHyperlinkElementUtils.search property is a search string,
  called a query string, that is `web.USVString` containing a '?'
  by the parameters of the URL.

  `string = object.search;
  object.search = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search`"
  [this val]
  (aset this "search" val))

(defn username
  "Property.

  The HTMLHyperlinkElementUtils.username property is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`"
  [this]
  (-> this (.username)))

(defn set-username!
  "Property.

  The HTMLHyperlinkElementUtils.username property is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`"
  [this val]
  (aset this "username" val))

