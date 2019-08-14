(ns media.MediaError
  "The MediaError interface represents an error which occurred while
  media in an HTML media element based on `html.HTMLMediaElement`,
  as `web.<audio>` or `web.<video>`."
  (:refer-clojure :exclude []))

(defn code
  "Property.

  The read-only property MediaError.code returns a numeric value
  represents the kind of error that occurred on a media element.
  get a text string with specific diagnostic information, see `media.MediaError.message`.

  `var myError = mediaError.code;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/code`"
  [this]
  (-> this (.code)))

(defn message
  "Property.

  The read-only property MediaError.message returns a `dom.DOMString`
  contains a human-readable string offering specific diagnostic
  related to the error described by the MediaError object, or an
  string (\\\"\\\") if no diagnostic information can be determined
  provided.

  `var errorMessage = mediaError.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/message`"
  [this]
  (-> this (.message)))

(defn set-message!
  "Property.

  The read-only property MediaError.message returns a `dom.DOMString`
  contains a human-readable string offering specific diagnostic
  related to the error described by the MediaError object, or an
  string (\\\"\\\") if no diagnostic information can be determined
  provided.

  `var errorMessage = mediaError.message;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaError/message`"
  [this val]
  (aset this "message" val))

