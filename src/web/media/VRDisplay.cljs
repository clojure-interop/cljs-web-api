(ns web.media.VRDisplay
  "The VRDisplay interface of the WebVR API represents any VR device
  by this API. It includes generic information such as device IDs
  descriptions, as well as methods for starting to present a VR
  retrieving eye parameters and display capabilities, and other
  functionality."
  (:refer-clojure :exclude []))

(defn get-eye-parameters
  "Method.

  The getEyeParameters() method of the `web.media.VRDisplay` interface
  the `web.vr.VREyeParameters` object containing the eye parameters
  the specified eye.

  `var myEyeParameters = vrDisplayInstance.getEyeParameters(whichEye);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getEyeParameters`"
  [this which-eye]
  (-> this (.getEyeParameters which-eye)))

(defn get-frame-data
  "Method.

  The getFrameData() method of the `web.media.VRDisplay` interface
  a `web.vr.VRFrameData` object and populates it with the information
  to render the current frame.

  `vrDisplayInstance.getFrameData(frameData);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getFrameData`"
  [this frame-data]
  (-> this (.getFrameData frame-data)))

(defn get-layers
  "Method.

  The getLayers() method of the `web.media.VRDisplay` interface
  the layers currently being presented by the VRDisplay.

  `var myLayers = vrDisplayInstance.getLayers();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getLayers`"
  [this ]
  (-> this (.getLayers)))

(defn reset-pose
  "Method.

  The resetPose() method of the `web.media.VRDisplay` interface
  the pose for the VRDisplay, treating its current `VRPose.position`
  `VRPose.orientation` as the \\\"origin/zero\\\" values.

  `vrDisplayInstance.resetPose();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/resetPose`"
  [this ]
  (-> this (.resetPose)))

(defn cancel-animation-frame
  "Method.

  The cancelAnimationFrame() method of the `web.media.VRDisplay`
  is a special implementation of `Window.cancelAnimationFrame`
  unregisters callbacks registered with `VRDisplay.requestAnimationFrame()`.

  `vrDisplayInstance.cancelAnimationFrame(handle);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/cancelAnimationFrame`"
  [this handle]
  (-> this (.cancelAnimationFrame handle)))

(defn request-animation-frame
  "Method.

  The requestAnimationFrame() method of the `web.media.VRDisplay`
  is a special implementation of `Window.requestAnimationFrame`
  a callback function that will be called every time a new frame
  the VRDisplay presentation is rendered:

  `var handle = vrDisplayInstance.requestAnimationFrame(callback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/requestAnimationFrame`"
  [this callback]
  (-> this (.requestAnimationFrame callback)))

(defn request-present
  "Method.

  The requestPresent() method of the `web.media.VRDisplay` interface
  the VRDisplay presenting a scene.

  `vrDisplayInstance.requestPresent(layers).then(function() {
  // Do something after the presentation has begun
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/requestPresent`"
  [this & args]
  (apply (-> this .-requestPresent) (concat [this] args)))

(defn exit-present
  "Method.

  The exitPresent() method of the `web.media.VRDisplay` interface
  the VRDisplay presenting a scene.

  `vrDisplayInstance.exitPresent().then(function() {
  // Do something after the presentation has ended
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/exitPresent`"
  [this & args]
  (apply (-> this .-exitPresent) (concat [this] args)))

(defn submit-frame
  "Method.

  The submitFrame() method of the `web.media.VRDisplay` interface
  the current state of the `web.vr.VRLayerInit` currently being
  and displays it on the VRDisplay.

  `vrDisplayInstance.submitFrame();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/submitFrame`"
  [this ]
  (-> this (.submitFrame)))

(defn get-pose
  "Method.

  The getPose() method of the `web.media.VRDisplay` interface returns
  `web.vr.VRPose` object defining the future predicted pose of
  VRDisplay as it will be when the current frame is actually presented.

  `var myPose = vrDisplayInstance.getPose();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getPose`"
  [this ]
  (-> this (.getPose)))

(defn get-immediate-pose
  "Method.

  The getImmediatePose() method of the `web.media.VRDisplay` interface
  a `web.vr.VRPose` object defining the current pose of the VRDisplay,
  no prediction applied.

  `var myImmediatePose = vrDisplayInstance.getImmediatePose();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/getImmediatePose`"
  [this ]
  (-> this (.getImmediatePose)))

(defn hardware-unit-id
  "Method.

  The hardwareUnitId read-only property of the `VRDevice` interface
  the distinct hardware ID for the overall hardware unit that this
  is a part of. All devices that are part of the same physical
  of hardware will have the same hardwareUnitId.

  `var hardwareID = VRDevice.hardwareUnitId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/hardwareUnitId`"
  [this ]
  (-> this (.hardwareUnitId)))

(defn capabilities
  "Property.

  The capabilities read-only property of the `web.media.VRDisplay`
  returns a `web.vr.VRDisplayCapabilities` object that indicates
  various capabilities of the VRDisplay.

  `var myCapabilities = vrDisplayInstance.capabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/capabilities`"
  [this]
  (-> this (.-capabilities)))

(defn set-capabilities!
  "Property.

  The capabilities read-only property of the `web.media.VRDisplay`
  returns a `web.vr.VRDisplayCapabilities` object that indicates
  various capabilities of the VRDisplay.

  `var myCapabilities = vrDisplayInstance.capabilities;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/capabilities`"
  [this val]
  (aset this "capabilities" val))

(defn depth-far
  "Property.

  The depthFar property of the `web.media.VRDisplay` interface
  and sets the z-depth defining the far plane of the eye view frustum,
  the furthest viewable boundary of the scene.

  `var mydepthFar = vrDisplayInstance.depthFar;

  vrDisplayInstance.depthFar = 7500.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthFar`"
  [this]
  (-> this (.-depthFar)))

(defn set-depth-far!
  "Property.

  The depthFar property of the `web.media.VRDisplay` interface
  and sets the z-depth defining the far plane of the eye view frustum,
  the furthest viewable boundary of the scene.

  `var mydepthFar = vrDisplayInstance.depthFar;

  vrDisplayInstance.depthFar = 7500.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthFar`"
  [this val]
  (aset this "depthFar" val))

(defn depth-near
  "Property.

  The depthNear property of the `web.media.VRDisplay` interface
  and sets the z-depth defining the near plane of the eye view
  i.e. the nearest viewable boundary of the scene.

  `var mydepthNear = vrDisplayInstance.depthNear;

  vrDisplayInstance.depthNear = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthNear`"
  [this]
  (-> this (.-depthNear)))

(defn set-depth-near!
  "Property.

  The depthNear property of the `web.media.VRDisplay` interface
  and sets the z-depth defining the near plane of the eye view
  i.e. the nearest viewable boundary of the scene.

  `var mydepthNear = vrDisplayInstance.depthNear;

  vrDisplayInstance.depthNear = 1.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/depthNear`"
  [this val]
  (aset this "depthNear" val))

(defn display-id
  "Property.

  The displayId read-only property of the `web.media.VRDisplay`
  returns an identifier for this particular VRDisplay, which is
  used as an association point in the Gamepad API (see `Gamepad.displayId`).

  `var myDisplayID = vrDisplayInstance.displayId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayId`"
  [this]
  (-> this (.-displayId)))

(defn set-display-id!
  "Property.

  The displayId read-only property of the `web.media.VRDisplay`
  returns an identifier for this particular VRDisplay, which is
  used as an association point in the Gamepad API (see `Gamepad.displayId`).

  `var myDisplayID = vrDisplayInstance.displayId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayId`"
  [this val]
  (aset this "displayId" val))

(defn display-name
  "Property.

  The displayName read-only property of the `web.media.VRDisplay`
  returns a human-readable name to identify the VRDisplay.

  `var myDisplayName = vrDisplayInstance.displayName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayName`"
  [this]
  (-> this (.-displayName)))

(defn set-display-name!
  "Property.

  The displayName read-only property of the `web.media.VRDisplay`
  returns a human-readable name to identify the VRDisplay.

  `var myDisplayName = vrDisplayInstance.displayName;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/displayName`"
  [this val]
  (aset this "displayName" val))

(defn is-connected
  "Property.

  The isConnected read-only property of the `web.media.VRDisplay`
  returns a `js.Boolean` indicating whether the VRDisplay is connected
  the computer.

  `var isItConnected = vrDisplayInstance.isConnected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isConnected`"
  [this]
  (-> this (.-isConnected)))

(defn set-is-connected!
  "Property.

  The isConnected read-only property of the `web.media.VRDisplay`
  returns a `js.Boolean` indicating whether the VRDisplay is connected
  the computer.

  `var isItConnected = vrDisplayInstance.isConnected;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isConnected`"
  [this val]
  (aset this "isConnected" val))

(defn is-presenting
  "Property.

  The isPresenting read-only property of the `web.media.VRDisplay`
  returns a `js.Boolean` indicating whether the VRDisplay is currently
  content presented through it.

  `var isItPresenting = vrDisplayInstance.isPresenting;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isPresenting`"
  [this]
  (-> this (.-isPresenting)))

(defn set-is-presenting!
  "Property.

  The isPresenting read-only property of the `web.media.VRDisplay`
  returns a `js.Boolean` indicating whether the VRDisplay is currently
  content presented through it.

  `var isItPresenting = vrDisplayInstance.isPresenting;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/isPresenting`"
  [this val]
  (aset this "isPresenting" val))

(defn stage-parameters
  "Property.

  The stageParameters read-only property of the `web.media.VRDisplay`
  returns a `web.vr.VRStageParameters` object containing room-scale
  if the VRDisplay is capable of supporting room-scale experiences.

  `var myStageParameters = vrDisplayInstance.stageParameters;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/stageParameters`"
  [this]
  (-> this (.-stageParameters)))

(defn set-stage-parameters!
  "Property.

  The stageParameters read-only property of the `web.media.VRDisplay`
  returns a `web.vr.VRStageParameters` object containing room-scale
  if the VRDisplay is capable of supporting room-scale experiences.

  `var myStageParameters = vrDisplayInstance.stageParameters;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRDisplay/stageParameters`"
  [this val]
  (aset this "stageParameters" val))

