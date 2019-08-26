(ns web.url.URL
  "The URL interface is used to parse, construct, normalize, and
  URLs. It works by providing properties which allow you to easily
  and modify the components of a URL."
  (:refer-clojure :exclude [hash]))

(def constructor
  "Constructor.

  The URL() constructor returns a newly created `web.url.URL` object representing the URL defined by the parameters.

  url
  \\tA `web.USVString` representing an absolute or relative URL. If url is a relative URL, base is required, and will be used as the base URL. If url is an absolute URL, a given base will be ignored.
  \\tbase Optional
  \\tA `web.USVString` representing the base URL to use in case url is a relative URL. If not specified, it defaults to ''.



  Note: You can still use an existing `web.url.URL` object for the base, which stringifies itself to the object's `href` attribute.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/URL`"
  js/URL)

(defn to-string
  "Method.

  The URL.toString() stringifier method returns a `web.USVString`
  the whole URL. It is effectively a read-only version of `URL.href`.

  `string = url.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/toString`"
  [this ]
  (-> this (.toString)))

(defn to-json
  "Method.

  The toJSON() method of the `web.url.URL` interface returns a
  containing a serialized version of the URL, although in practice
  seems to have the same effect as `URL.toString()`.

  `json = url.toJSON();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn create-object-url
  "Method.

  The URL.createObjectURL() static method creates a `web.dom.DOMString`
  a URL representing the object given in the parameter. The URL
  is tied to the `document` in the window on which it was created.
  new object URL represents the specified `web.files.File` object
  `web.files.Blob` object.

  `objectURL = URL.createObjectURL(object);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL`"
  [this object]
  (-> this (.createObjectURL object)))

(defn revoke-object-url
  "Method.

  The URL.revokeObjectURL() static method releases an existing
  URL which was previously created by calling `URL.createObjectURL()`.

  `window.URL.revokeObjectURL(objectURL);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL`"
  [this object-url]
  (-> this (.revokeObjectURL object-url)))

(defn hash
  "Property.

  The hash property of the `web.url.URL` interface returns a `web.USVString`
  a '#' followed by the fragment identifier of the URL.

  `string = object.hash;
  object.hash = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hash`"
  [this]
  (-> this (.-hash)))

(defn set-hash!
  "Property.

  The hash property of the `web.url.URL` interface returns a `web.USVString`
  a '#' followed by the fragment identifier of the URL.

  `string = object.hash;
  object.hash = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hash`"
  [this val]
  (aset this "hash" val))

(defn host
  "Property.

  The host property of the `web.url.URL` interface is a `web.USVString`
  the host, that is the hostname, and then, if the port of the
  is nonempty, a ':', and the port of the URL.

  `string = object.host;
  object.host = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/host`"
  [this]
  (-> this (.-host)))

(defn set-host!
  "Property.

  The host property of the `web.url.URL` interface is a `web.USVString`
  the host, that is the hostname, and then, if the port of the
  is nonempty, a ':', and the port of the URL.

  `string = object.host;
  object.host = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/host`"
  [this val]
  (aset this "host" val))

(defn hostname
  "Property.

  The hostname property of the `web.url.URL` interface is a `web.USVString`
  the domain of the URL.

  `string = object.hostname;
  object.hostname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname`"
  [this]
  (-> this (.-hostname)))

(defn set-hostname!
  "Property.

  The hostname property of the `web.url.URL` interface is a `web.USVString`
  the domain of the URL.

  `string = object.hostname;
  object.hostname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname`"
  [this val]
  (aset this "hostname" val))

(defn href
  "Property.

  The href property of the `web.url.URL` interface is a `web.USVString`
  the whole URL.

  `string = object.href;
  object.href = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/href`"
  [this]
  (-> this (.-href)))

(defn set-href!
  "Property.

  The href property of the `web.url.URL` interface is a `web.USVString`
  the whole URL.

  `string = object.href;
  object.href = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/href`"
  [this val]
  (aset this "href" val))

(defn origin
  "Property.

  The origin read-only property of the `web.url.URL` interface
  a `web.USVString` containing the Unicode serialization of the
  of the represented URL. The exact structure varies depending
  the type of URL:

  `string = URLObject.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/origin`"
  [this]
  (-> this (.-origin)))

(defn password
  "Property.

  The password property of the `web.url.URL` interface is a `web.USVString`
  the password specified before the domain name.

  `string = object.password;
  object.password = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/password`"
  [this]
  (-> this (.-password)))

(defn set-password!
  "Property.

  The password property of the `web.url.URL` interface is a `web.USVString`
  the password specified before the domain name.

  `string = object.password;
  object.password = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/password`"
  [this val]
  (aset this "password" val))

(defn pathname
  "Property.

  The pathname property of the `web.url.URL` interface is a `web.USVString`
  an initial '/' followed by the path of the URL (or the empty
  if there is no path).

  `string = object.pathname;
  object.pathname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname`"
  [this]
  (-> this (.-pathname)))

(defn set-pathname!
  "Property.

  The pathname property of the `web.url.URL` interface is a `web.USVString`
  an initial '/' followed by the path of the URL (or the empty
  if there is no path).

  `string = object.pathname;
  object.pathname = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname`"
  [this val]
  (aset this "pathname" val))

(defn port
  "Property.

  The port property of the `web.url.URL` interface is a `web.USVString`
  the port number of the URL. If the URL does not contain an explicit
  number, it will be set to ''.

  `string = object.port;
  object.port = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/port`"
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  The port property of the `web.url.URL` interface is a `web.USVString`
  the port number of the URL. If the URL does not contain an explicit
  number, it will be set to ''.

  `string = object.port;
  object.port = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/port`"
  [this val]
  (aset this "port" val))

(defn protocol
  "Property.

  The protocol property of the `web.url.URL` interface is a `web.USVString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;
  object.protocol = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol`"
  [this]
  (-> this (.-protocol)))

(defn set-protocol!
  "Property.

  The protocol property of the `web.url.URL` interface is a `web.USVString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;
  object.protocol = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol`"
  [this val]
  (aset this "protocol" val))

(defn search
  "Property.

  The search property of the `web.url.URL` interface is a search
  also called a query string, that is a `web.USVString` containing
  '?' followed by the parameters of the URL.

  `string = object.search;
  object.search = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/search`"
  [this]
  (-> this (.-search)))

(defn set-search!
  "Property.

  The search property of the `web.url.URL` interface is a search
  also called a query string, that is a `web.USVString` containing
  '?' followed by the parameters of the URL.

  `string = object.search;
  object.search = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/search`"
  [this val]
  (aset this "search" val))

(defn search-params
  "Property.

  The searchParams readonly property of the `web.url.URL` interface
  a `web.url.URLSearchParams` object allowing access to the GET
  query arguments contained in the URL.

  `var urlSearchParams = URL.searchParams;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams`"
  [this]
  (-> this (.-searchParams)))

(defn username
  "Property.

  The username property of the `web.url.URL` interface is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/username`"
  [this]
  (-> this (.-username)))

(defn set-username!
  "Property.

  The username property of the `web.url.URL` interface is a `web.USVString`
  the username specified before the domain name.

  `string = object.username;
  object.username = string;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URL/username`"
  [this val]
  (aset this "username" val))

