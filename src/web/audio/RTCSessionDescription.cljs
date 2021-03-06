(ns web.audio.RTCSessionDescription
  "The RTCSessionDescription interface describes one end of a connection—or
  connection—and how it's configured. Each RTCSessionDescription
  of a description `type` indicating which part of the offer/answer
  process it describes and of the SDP descriptor of the session."
  (:refer-clojure :exclude [type]))

(defn rtc-session-description
  "Method.

  [Deprecated]
  [Experimental]

  The RTCSessionDescription() constructor creates a new `web.audio.RTCSessionDescription`
  its properties initialized as described in the specified object.

  `sessionDescription = new RTCSessionDescription(rtcSessionDescriptionInit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription`"
  [this rtc-session-description-init]
  (-> this (.RTCSessionDescription rtc-session-description-init)))

(defn to-json
  "Method.

  [Experimental]

  The RTCSessionDescription.toJSON() method generates a JSON description
  the object. Both properties, `type` and `sdp`, are contained
  the generated JSON.

  `var jsonValue = sd.toJSON();

  The result value is a `js.JSON` object containing the following values:


  \\\"type\\\", containing the value of the `RTCSessionDescription.type` property and can be one of the following values: \\\"offer\\\", \\\"answer\\\", \\\"pranswer\\\" or null.
  \\\"sdp\\\", containing a `web.dom.DOMString`, or null, with the SDP message corresponding to `RTCSessionDescription.sdp` property.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/toJSON`"
  [this & args]
  (-> this .-toJSON (.apply this (clj->js args))))

(defn type
  "Property.

  [Read Only]
  [Experimental]

  The property RTCSessionDescription.type is a read-only value
  type RTCSdpType which describes the description's type.

  `var value = sessionDescription.type;
  sessionDescription.type = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/type`"
  [this]
  (-> this (.-type)))

(defn sdp
  "Property.

  [Read Only]
  [Experimental]

  The property RTCSessionDescription.sdp is a read-only `web.dom.DOMString`
  the SDP which describes the session.

  `var value = sessionDescription.sdp;
  sessionDescription.sdp = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/sdp`"
  [this]
  (-> this (.-sdp)))

