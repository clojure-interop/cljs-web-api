(ns web.dom.HTMLAreaElement
  "The HTMLAreaElement interface provides special properties and
  (beyond those of the regular object `web.dom.HTMLElement` interface
  also has available to it by inheritance) for manipulating the
  and presentation of `<area>` elements."
  (:refer-clojure :exclude [hash type]))

(defn to-string
  "Method.

  The HTMLHyperlinkElementUtils.toString() stringifier method returns
  `web.USVString` containing the whole URL. It is a read-only version
  `HTMLHyperlinkElementUtils.href`.

  `string = object.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/toString`"
  [this ]
  (-> this (.toString)))

(defn access-key
  "Property.

  Is a DOMString containing a single character that switches input
  to the control."
  [this]
  (-> this (.-accessKey)))

(defn set-access-key!
  "Property.

  Is a DOMString containing a single character that switches input
  to the control."
  [this val]
  (aset this "accessKey" val))

(defn alt
  "Property.

  Is a DOMString that reflects the alt HTML attribute, containing
  text for the element."
  [this]
  (-> this (.-alt)))

(defn set-alt!
  "Property.

  Is a DOMString that reflects the alt HTML attribute, containing
  text for the element."
  [this val]
  (aset this "alt" val))

(defn coords
  "Property.

  Is a DOMString that reflects the coords HTML attribute, containing
  to define the hot-spot region."
  [this]
  (-> this (.-coords)))

(defn set-coords!
  "Property.

  Is a DOMString that reflects the coords HTML attribute, containing
  to define the hot-spot region."
  [this val]
  (aset this "coords" val))

(defn download
  "Property.

  Is a DOMString indicating that the linked resource is intended
  be downloaded rather than displayed in the browser. The value
  the proposed name of the file. If the name is not a valid filename
  the underlying OS, browser will adapt it."
  [this]
  (-> this (.-download)))

(defn set-download!
  "Property.

  Is a DOMString indicating that the linked resource is intended
  be downloaded rather than displayed in the browser. The value
  the proposed name of the file. If the name is not a valid filename
  the underlying OS, browser will adapt it."
  [this val]
  (aset this "download" val))

(defn hash
  "Property.

  The HTMLHyperlinkElementUtils.hash property returns a `web.dom.DOMString`
  a '#' followed by the fragment identifier of the URL.

  `string = object.hash;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash`"
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  The HTMLHyperlinkElementUtils.hash property returns a `web.dom.DOMString`
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
  (-> this (.-host)))

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
  (-> this (.-hostname)))

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
  (-> this (.-href)))

(defn set-href!
  "Property.

  The HTMLHyperlinkElementUtils.href property is a `web.USVString`
  the whole URL.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/href`"
  [this val]
  (aset this "href" val))

(defn hreflang
  "Property.

  Is a DOMString containing that reflects the hreflang HTML attribute,
  the language of the linked resource."
  [this]
  (-> this (.-hreflang)))

(defn set-hreflang!
  "Property.

  Is a DOMString containing that reflects the hreflang HTML attribute,
  the language of the linked resource."
  [this val]
  (aset this "hreflang" val))

(defn media
  "Property.

  Is a DOMString containing that reflects the media HTML attribute,
  target media of the linked resource."
  [this]
  (-> this (.-media)))

(defn set-media!
  "Property.

  Is a DOMString containing that reflects the media HTML attribute,
  target media of the linked resource."
  [this val]
  (aset this "media" val))

(defn no-href
  "Property.

  Is a Boolean flag indicating if the area is inactive (true) or
  (false)."
  [this]
  (-> this (.-noHref)))

(defn set-no-href!
  "Property.

  Is a Boolean flag indicating if the area is inactive (true) or
  (false)."
  [this val]
  (aset this "noHref" val))

(defn password
  "Property.

  [Read Only]

  The HTMLHyperlinkElementUtils.password property is a `web.USVString`
  the password specified before the domain name.

  `string = object.password;
  object.password = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password`"
  [this]
  (-> this (.-password)))

(defn origin
  "Property.

  [Read Only]

  The HTMLHyperlinkElementUtils.origin read-only property is a
  containing the Unicode serialization of the origin of the represented

  `string = object.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin`"
  [this]
  (-> this (.-origin)))

(defn pathname
  "Property.

  The HTMLHyperlinkElementUtils.pathname property is a `web.USVString`
  an initial '/' followed by the path of the URL (or the empty
  if there is no path).

  `string = object.pathname;
  object.pathname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname`"
  [this]
  (-> this (.-pathname)))

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
  (-> this (.-port)))

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
  (-> this (.-protocol)))

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

  [Experimental]

  The HTMLAreaElement.referrerPolicy property reflect the HTML
  attribute of the `<area>` element defining which referrer is
  when fetching the resource.

  `refStr = areaElt.referrerPolicy;
  areaElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  [Experimental]

  The HTMLAreaElement.referrerPolicy property reflect the HTML
  attribute of the `<area>` element defining which referrer is
  when fetching the resource.

  `refStr = areaElt.referrerPolicy;
  areaElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn rel
  "Property.

  The HTMLAreaElement.rel property reflects the rel attribute.
  is a `web.dom.DOMString` containing a space-separated list of
  types indicating the relationship between the resource represented
  the `<a>` element and the current document.

  `var relstr = areaElt.rel;
  areaElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement/rel`"
  [this]
  (-> this (.-rel)))

(defn set-rel!
  "Property.

  The HTMLAreaElement.rel property reflects the rel attribute.
  is a `web.dom.DOMString` containing a space-separated list of
  types indicating the relationship between the resource represented
  the `<a>` element and the current document.

  `var relstr = areaElt.rel;
  areaElt.rel = relstr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement/rel`"
  [this val]
  (aset this "rel" val))

(defn rel-list
  "Property.

  [Read Only]

  The HTMLAreaElement.relList read-only property reflects the rel
  It is a live `web.dom.DOMTokenList` containing the set of link
  indicating the relationship between the resource represented
  the `<area>` element and the current document.

  `var relstr = areaElt.relList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement/relList`"
  [this]
  (-> this (.-relList)))

(defn search
  "Property.

  The HTMLHyperlinkElementUtils.search property is a search string,
  called a query string, that is `web.USVString` containing a '?'
  by the parameters of the URL.

  `string = object.search;
  object.search = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search`"
  [this]
  (-> this (.-search)))

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

(defn shape
  "Property.

  Is a DOMString that reflects the shape HTML attribute, indicating
  shape of the hot-spot, limited to known values."
  [this]
  (-> this (.-shape)))

(defn set-shape!
  "Property.

  Is a DOMString that reflects the shape HTML attribute, indicating
  shape of the hot-spot, limited to known values."
  [this val]
  (aset this "shape" val))

(defn tab-index
  "Property.

  Is a long containing the element's position in the tabbing order."
  [this]
  (-> this (.-tabIndex)))

(defn set-tab-index!
  "Property.

  Is a long containing the element's position in the tabbing order."
  [this val]
  (aset this "tabIndex" val))

(defn target
  "Property.

  Is a DOMString that reflects the target HTML attribute, indicating
  browsing context in which to open the linked resource."
  [this]
  (-> this (.-target)))

(defn set-target!
  "Property.

  Is a DOMString that reflects the target HTML attribute, indicating
  browsing context in which to open the linked resource."
  [this val]
  (aset this "target" val))

(defn type
  "Property.

  Is a DOMString that reflects the type HTML attribute, indicating
  MIME type of the linked resource."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString that reflects the type HTML attribute, indicating
  MIME type of the linked resource."
  [this val]
  (aset this "type" val))

(defn username
  "Property.

  The HTMLHyperlinkElementUtils.username property is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`"
  [this]
  (-> this (.-username)))

(defn set-username!
  "Property.

  The HTMLHyperlinkElementUtils.username property is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username`"
  [this val]
  (aset this "username" val))

