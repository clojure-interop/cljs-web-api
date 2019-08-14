(ns rtc.RTCSessionDescription
  "The RTCSessionDescription interface describes one end of a connection—or
  connection—and how it's configured. Each RTCSessionDescription
  of a description `web.type` indicating which part of the offer/answer
  process it describes and of the SDP descriptor of the session."
  (:refer-clojure :exclude [type]))

(def constructor
  "Constructor.

  The RTCSessionDescription() constructor creates a new `rtc.RTCSessionDescription` with its properties initialized as described in the specified object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription`"
  js/RTCSessionDescription)

(defn to-json
  "Method.

  The RTCSessionDescription.toJSON() method generates a JSON description
  the object. Both properties, `web.type` and `web.sdp`, are contained
  the generated JSON.

  `var jsonValue = sd.toJSON();

  The result value is a `web.JSON` object containing the following values:


  \\\"type\\\", containing the value of the `rtc.RTCSessionDescription.type` property and can be one of the following values: \\\"offer\\\", \\\"answer\\\", \\\"pranswer\\\" or null.
  \\\"sdp\\\", containing a `dom.DOMString`, or null, with the SDP message corresponding to `rtc.RTCSessionDescription.sdp` property.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/toJSON`"
  [this & args]
  (apply (-> this .-toJSON) (concat [this] args)))

(defn rtc-session-description
  "Method.

  The RTCSessionDescription() constructor creates a new `rtc.RTCSessionDescription`
  its properties initialized as described in the specified object.

  `sessionDescription = new RTCSessionDescription(rtcSessionDescriptionInit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription`"
  [this rtc-session-description-init]
  (-> this (.RTCSessionDescription rtc-session-description-init)))

(defn sdp
  "Property.

  The property RTCSessionDescription.sdp is a read-only `dom.DOMString`
  the SDP which describes the session.

  `var value = sessionDescription.sdp;
  sessionDescription.sdp = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/sdp`"
  [this]
  (-> this (.sdp)))

(defn set-sdp!
  "Property.

  The property RTCSessionDescription.sdp is a read-only `dom.DOMString`
  the SDP which describes the session.

  `var value = sessionDescription.sdp;
  sessionDescription.sdp = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/sdp`"
  [this val]
  (aset this "sdp" val))

(defn type
  "Property.

  The property RTCSessionDescription.type is a read-only value
  type RTCSdpType which describes the description's type.

  `var value = sessionDescription.type;
  sessionDescription.type = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The property RTCSessionDescription.type is a read-only value
  type RTCSdpType which describes the description's type.

  `var value = sessionDescription.type;
  sessionDescription.type = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/type`"
  [this val]
  (aset this "type" val))

