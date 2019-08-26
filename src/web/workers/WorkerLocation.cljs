(ns web.workers.WorkerLocation
  "The WorkerLocation interface defines the absolute location of
  script executed by the `web.workers.Worker`. Such an object is
  for each worker and is available via the `WorkerGlobalScope.location`
  obtained by calling self.location."
  (:refer-clojure :exclude [hash]))

(defn to-string
  "Method.

  The URLUtilsReadOnly.toString() stringifier method returns a
  containing the whole URL. It is a synonym for `URLUtilsReadOnly.href`.

  `string = object.toString();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/toString`"
  [this ]
  (-> this (.toString)))

(defn href
  "Property.

  The URLUtilsReadOnly.href read-only property returns a `web.dom.DOMString`
  the whole URL.

  `string = object.href;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/href`"
  [this]
  (-> this (.-href)))

(defn protocol
  "Property.

  The URLUtilsReadOnly.protocol read-only property returns a `web.dom.DOMString`
  the protocol scheme of the URL, including the final ':'.

  `string = object.protocol;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/protocol`"
  [this]
  (-> this (.-protocol)))

(defn host
  "Property.

  The URLUtilsReadOnly.host read-only property returns a `web.dom.DOMString`
  the host, that is the hostname, a ':', and the port of the URL.

  `string = object.host;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/host`"
  [this]
  (-> this (.-host)))

(defn hostname
  "Property.

  The URLUtilsReadOnly.hostname read-only property returns a `web.dom.DOMString`
  the domain of the URL.

  `string = object.hostname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/hostname`"
  [this]
  (-> this (.-hostname)))

(defn origin
  "Property.

  The URLUtilsReadOnly.origin read-only property is a `web.dom.DOMString`
  the Unicode serialization of the origin of the represented URL,
  is, for http and https, the scheme followed by '://', followed
  the domain, followed by ':', followed by the port (the default
  80 and 443 respectively, if explicitely specified). For URL using
  scheme, the value is browser dependant.

  `string = object.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/origin`"
  [this]
  (-> this (.-origin)))

(defn port
  "Property.

  The URLUtilsReadOnly.port read-only property returns a `web.dom.DOMString`
  the port number of the URL.

  `string = object.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/port`"
  [this]
  (-> this (.-port)))

(defn pathname
  "Property.

  The URLUtilsReadOnly.pathname read-only property returns a `web.dom.DOMString`
  an initial '/' followed by the path of the URL.

  `string = object.pathname;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/pathname`"
  [this]
  (-> this (.-pathname)))

(defn search
  "Property.

  The URLUtilsReadOnly.search read-only property returns a `web.dom.DOMString`
  a '?' followed by the parameters of the URL.

  `string = object.search;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/search`"
  [this]
  (-> this (.-search)))

(defn hash
  "Property.

  The URLUtilsReadOnly.hash read-only property returns a `web.dom.DOMString`
  a '#' followed by the fragment identifier of the URL. The hash
  not percent encoded.

  `string = object.hash;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/URLUtilsReadOnly/hash`"
  [this]
  (-> this (.-hash)))

