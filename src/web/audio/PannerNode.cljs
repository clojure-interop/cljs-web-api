(ns web.audio.PannerNode
  "A PannerNode always has exactly one input and one output: the
  can be mono or stereo but the output is always stereo (2 channels);
  can't have panning effects without at least two audio channels!"
  (:refer-clojure :exclude []))

(defn set-position
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setPosition(0,0,0);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setPosition`"
  [this & args]
  (-> this .-setPosition (.apply this (clj->js args))))

(defn set-orientation
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setOrientation(1,0,0);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setOrientation`"
  [this & args]
  (-> this .-setOrientation (.apply this (clj->js args))))

(defn set-velocity
  "Method.

  [Obsolute]

  The setVelocity() method of the `web.audio.PannerNode` Interface
  the velocity vector of the audio source — how fast it is moving
  in what direction.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setVelocity(0,0,17);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setVelocity`"
  [this & args]
  (-> this .-setVelocity (.apply this (clj->js args))))

(defn cone-inner-angle
  "Property.

  A double.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneInnerAngle = 360;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneInnerAngle`"
  [this]
  (-> this (.-coneInnerAngle)))

(defn set-cone-inner-angle!
  "Property.

  A double.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneInnerAngle = 360;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneInnerAngle`"
  [this val]
  (aset this "coneInnerAngle" val))

(defn cone-outer-angle
  "Property.

  A double.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneOuterAngle = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterAngle`"
  [this]
  (-> this (.-coneOuterAngle)))

(defn set-cone-outer-angle!
  "Property.

  A double.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneOuterAngle = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterAngle`"
  [this val]
  (aset this "coneOuterAngle" val))

(defn cone-outer-gain
  "Property.

  The coneOuterGain property of the `web.audio.PannerNode` interface
  a double value, describing the amount of volume reduction outside
  cone, defined by the `coneOuterAngle` attribute.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneOuterGain = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterGain`"
  [this]
  (-> this (.-coneOuterGain)))

(defn set-cone-outer-gain!
  "Property.

  The coneOuterGain property of the `web.audio.PannerNode` interface
  a double value, describing the amount of volume reduction outside
  cone, defined by the `coneOuterAngle` attribute.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneOuterGain = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterGain`"
  [this val]
  (aset this "coneOuterGain" val))

(defn distance-model
  "Property.

  A enum — see DistanceModelType.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.distanceModel = 'inverse';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel`"
  [this]
  (-> this (.-distanceModel)))

(defn set-distance-model!
  "Property.

  A enum — see DistanceModelType.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.distanceModel = 'inverse';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/distanceModel`"
  [this val]
  (aset this "distanceModel" val))

(defn max-distance
  "Property.

  A double. The default is 10000, and non-positive values are not

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.maxDistance = 10000;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance`"
  [this]
  (-> this (.-maxDistance)))

(defn set-max-distance!
  "Property.

  A double. The default is 10000, and non-positive values are not

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.maxDistance = 10000;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/maxDistance`"
  [this val]
  (aset this "maxDistance" val))

(defn orientation-x
  "Property.

  An `web.audio.AudioParam` whose value is the X component of the
  in which the audio source is facing, in 3D Cartesian coordinate

  `var orientationX = PannerNode.orientationX;

  PannerNode.orientationX.value = newOrientationX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`"
  [this]
  (-> this (.-orientationX)))

(defn set-orientation-x!
  "Property.

  An `web.audio.AudioParam` whose value is the X component of the
  in which the audio source is facing, in 3D Cartesian coordinate

  `var orientationX = PannerNode.orientationX;

  PannerNode.orientationX.value = newOrientationX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`"
  [this val]
  (aset this "orientationX" val))

(defn orientation-y
  "Property.

  An `web.audio.AudioParam` whose value is the Y component of the
  the audio source is facing, in 3D Cartesian coordinate space.

  `var orientationY = PannerNode.orientationY;

  PannerNode.orientationY.value = newOrientationY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`"
  [this]
  (-> this (.-orientationY)))

(defn set-orientation-y!
  "Property.

  An `web.audio.AudioParam` whose value is the Y component of the
  the audio source is facing, in 3D Cartesian coordinate space.

  `var orientationY = PannerNode.orientationY;

  PannerNode.orientationY.value = newOrientationY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`"
  [this val]
  (aset this "orientationY" val))

(defn orientation-z
  "Property.

  An `web.audio.AudioParam` whose value is the Z component of the
  the audio source is facing, in 3D Cartesian coordinate space.

  `var orientationZ = PannerNode.orientationZ;

  PannerNode.orientationZ.value = newOrientationZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationZ`"
  [this]
  (-> this (.-orientationZ)))

(defn set-orientation-z!
  "Property.

  An `web.audio.AudioParam` whose value is the Z component of the
  the audio source is facing, in 3D Cartesian coordinate space.

  `var orientationZ = PannerNode.orientationZ;

  PannerNode.orientationZ.value = newOrientationZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationZ`"
  [this val]
  (aset this "orientationZ" val))

(defn panning-model
  "Property.

  A enum — see PanningModelType.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.panningModel = 'HRTF';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/panningModel`"
  [this]
  (-> this (.-panningModel)))

(defn set-panning-model!
  "Property.

  A enum — see PanningModelType.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.panningModel = 'HRTF';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/panningModel`"
  [this val]
  (aset this "panningModel" val))

(defn position-x
  "Property.

  An `web.audio.AudioParam` whose value is the X coordinate of
  audio source's position, in 3D Cartesian coordinates. The default
  is 0.

  `var positionX = PannerNode.positionX;

  PannerNode.positionX.value = newPositionX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`"
  [this]
  (-> this (.-positionX)))

(defn set-position-x!
  "Property.

  An `web.audio.AudioParam` whose value is the X coordinate of
  audio source's position, in 3D Cartesian coordinates. The default
  is 0.

  `var positionX = PannerNode.positionX;

  PannerNode.positionX.value = newPositionX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`"
  [this val]
  (aset this "positionX" val))

(defn position-y
  "Property.

  An `web.audio.AudioParam` whose value is the Y coordinate of
  audio source's position, in 3D Cartesian coordinates.

  `var positionY = PannerNode.positionY;

  PannerNode.positionY.value = newPositionY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`"
  [this]
  (-> this (.-positionY)))

(defn set-position-y!
  "Property.

  An `web.audio.AudioParam` whose value is the Y coordinate of
  audio source's position, in 3D Cartesian coordinates.

  `var positionY = PannerNode.positionY;

  PannerNode.positionY.value = newPositionY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`"
  [this val]
  (aset this "positionY" val))

(defn position-z
  "Property.

  An `web.audio.AudioParam` whose value is the Z coordinate of
  audio source's position, in 3D Cartesian coordinates.

  `var positionZ = PannerNode.positionZ;

  PannerNode.positionZ.value = newPositionZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionZ`"
  [this]
  (-> this (.-positionZ)))

(defn set-position-z!
  "Property.

  An `web.audio.AudioParam` whose value is the Z coordinate of
  audio source's position, in 3D Cartesian coordinates.

  `var positionZ = PannerNode.positionZ;

  PannerNode.positionZ.value = newPositionZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionZ`"
  [this val]
  (aset this "positionZ" val))

(defn ref-distance
  "Property.

  A non-negative number. If the value is set to less than 0, a
  is thrown.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.refDistance = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance`"
  [this]
  (-> this (.-refDistance)))

(defn set-ref-distance!
  "Property.

  A non-negative number. If the value is set to less than 0, a
  is thrown.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.refDistance = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/refDistance`"
  [this val]
  (aset this "refDistance" val))

(defn rolloff-factor
  "Property.

  A number whose range depends on the `distanceModel` of the panner
  follows (negative values are not allowed):

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.rolloffFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`"
  [this]
  (-> this (.-rolloffFactor)))

(defn set-rolloff-factor!
  "Property.

  A number whose range depends on the `distanceModel` of the panner
  follows (negative values are not allowed):

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.rolloffFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`"
  [this val]
  (aset this "rolloffFactor" val))

