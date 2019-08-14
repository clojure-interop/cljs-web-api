(ns web.URLUtilsReadOnly
  "The obsolete URLUtilsReadOnly interface previously defined utility
  for working with URLs. These were then inherited by other interfaces,
  as `web.WorkerLocation`."
  (:refer-clojure :exclude [hash]))

(defn to-string
  "Method.

  The URLUtilsReadOnly.toString() stringifier method returns a
  containing the whole URL. It is a synonym for `web.URLUtilsReadOnly.href`.

  `string = object.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/toString`"
  [this ]
  (-> this (.toString)))

(defn hash
  "Property.

  The URLUtilsReadOnly.hash read-only property returns a `dom.DOMString`
  a '#' followed by the fragment identifier of the URL. The hash
  not percent encoded.

  `string = object.hash;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/hash`"
  [this]
  (-> this (.hash)))

(defn host
  "Property.

  The URLUtilsReadOnly.host read-only property returns a `dom.DOMString`
  the host, that is the hostname, a ':', and the port of the URL.

  `string = object.host;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/host`"
  [this]
  (-> this (.host)))

(defn hostname
  "Property.

  The URLUtilsReadOnly.hostname read-only property returns a `dom.DOMString`
  the domain of the URL.

  `string = object.hostname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/hostname`"
  [this]
  (-> this (.hostname)))

(defn href
  "Property.

  The URLUtilsReadOnly.href read-only property returns a `dom.DOMString`
  the whole URL.

  `string = object.href;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/href`"
  [this]
  (-> this (.href)))

(defn origin
  "Property.

  The URLUtilsReadOnly.origin read-only property is a `dom.DOMString`
  the Unicode serialization of the origin of the represented URL,
  is, for http and https, the scheme followed by '://', followed
  the domain, followed by ':', followed by the port (the default
  80 and 443 respectively, if explicitely specified). For URL using
  scheme, the value is browser dependant.

  `string = object.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/origin`"
  [this]
  (-> this (.origin)))

(defn pathname
  "Property.

  The URLUtilsReadOnly.pathname read-only property returns a `dom.DOMString`
  an initial '/' followed by the path of the URL.

  `string = object.pathname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/pathname`"
  [this]
  (-> this (.pathname)))

(defn port
  "Property.

  The URLUtilsReadOnly.port read-only property returns a `dom.DOMString`
  the port number of the URL.

  `string = object.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/port`"
  [this]
  (-> this (.port)))

(defn protocol
  "Property.

  The URLUtilsReadOnly.protocol read-only property returns a `dom.DOMString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/protocol`"
  [this]
  (-> this (.protocol)))

(defn search
  "Property.

  The URLUtilsReadOnly.search read-only property returns a `dom.DOMString`
  a '?' followed by the parameters of the URL.

  `string = object.search;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/search`"
  [this]
  (-> this (.search)))

