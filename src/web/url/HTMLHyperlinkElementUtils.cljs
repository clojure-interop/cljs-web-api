(ns web.url.HTMLHyperlinkElementUtils
  "The HTMLHyperlinkElementUtils mixin defines utility methods and
  to work with `web.dom.HTMLAnchorElement` and `web.dom.HTMLAreaElement`.
  utilities allow to deal with common features like URLs."
  (:refer-clojure :exclude [hash]))

(defn to-string
  "Method.

  The HTMLHyperlinkElementUtils.toString() stringifier method returns
  `web.USVString` containing the whole URL. It is a read-only version
  `HTMLHyperlinkElementUtils.href`.

  `string = object.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/toString`"
  [this ]
  (-> this (.toString)))

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

