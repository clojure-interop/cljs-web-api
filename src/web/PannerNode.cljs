(ns web.PannerNode
  "A PannerNode always has exactly one input and one output: the
  can be mono or stereo but the output is always stereo (2 channels);
  can't have panning effects without at least two audio channels!"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PannerNode() constructor of the Web Audio API creates a new `web.PannerNode` object instance.

  Inherits parameters from the `audio.AudioNodeOptions` dictionary.


  \\tcontext
  \\tA `web.BaseAudioContext` representing the audio context you want the node to be associated with.
  \\toptions Optional
  \\tA PannerOptions dictionary object defining the properties you want the PannerNode to have (It also inherits the options defined in the AudioNodeOptions dictionary.):

  \\t\\tpanningModel: The `web.PannerNode.panningModel` you want the `web.PannerNode` to have (the default is equalpower.)
  \\t\\tdistanceModel: The `web.PannerNode.distanceModel` you want the `web.PannerNode` to have (the default is inverse.)
  \\t\\tpositionX: The `web.PannerNode.positionX` you want the `web.PannerNode` to have (the default is 0.)
  \\t\\tpositionY: The `web.PannerNode.positionY` you want the `web.PannerNode` to have (the default is 0.)
  \\t\\tpositionZ: The `web.PannerNode.positionZ` you want the `web.PannerNode` to have (the default is 0.)
  \\t\\torientationX: The `web.PannerNode.orientationX` you want the `web.PannerNode` to have (the default is 1.)
  \\t\\torientationY: The `web.PannerNode.orientationY` you want the `web.PannerNode` to have (the default is 0.)
  \\t\\torientationZ: The `web.PannerNode.orientationZ` you want the `web.PannerNode` to have (the default is 0.)
  \\t\\trefDistance: The `web.PannerNode.refDistance` you want the `web.PannerNode` to have. The default is 1, and negative values are not allowed.
  \\t\\tmaxDistance: The `web.PannerNode.maxDistance` you want the `web.PannerNode` to have. The default is 10000, and non-positive values are not allowed.
  \\t\\trollOffFactor: The `web.PannerNode.rollOffFactor` you want the `web.PannerNode` to have. The default is 1, and negative values are not allowed.
  \\t\\tconeInnerAngle: The `web.PannerNode.coneInnerAngle` you want the `web.PannerNode` to have (the default is 360.)
  \\t\\tconeOuterAngle: The `web.PannerNode.coneOuterAngle` you want the `web.PannerNode` to have (the default is 360.)
  \\t\\tconeOuterGain: The `web.PannerNode.coneOuterGain` you want the `web.PannerNode` to have. The default is 0, and its value can be in the range 0–1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/PannerNode`"
  js/PannerNode)

(defn set-orientation
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setOrientation(1,0,0);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setOrientation`"
  [this & args]
  (apply (-> this .-setOrientation) (concat [this] args)))

(defn set-position
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setPosition(0,0,0);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setPosition`"
  [this & args]
  (apply (-> this .-setPosition) (concat [this] args)))

(defn set-velocity
  "Method.

  The setVelocity() method of the `web.PannerNode` Interface defines
  velocity vector of the audio source — how fast it is moving and
  what direction.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.setVelocity(0,0,17);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/setVelocity`"
  [this & args]
  (apply (-> this .-setVelocity) (concat [this] args)))

(defn cone-inner-angle
  "Property.

  A double.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneInnerAngle = 360;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneInnerAngle`"
  [this]
  (-> this (.coneInnerAngle)))

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
  (-> this (.coneOuterAngle)))

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

  The coneOuterGain property of the `web.PannerNode` interface
  a double value, describing the amount of volume reduction outside
  cone, defined by the `web.coneOuterAngle` attribute.

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.coneOuterGain = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/coneOuterGain`"
  [this]
  (-> this (.coneOuterGain)))

(defn set-cone-outer-gain!
  "Property.

  The coneOuterGain property of the `web.PannerNode` interface
  a double value, describing the amount of volume reduction outside
  cone, defined by the `web.coneOuterAngle` attribute.

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
  (-> this (.distanceModel)))

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
  (-> this (.maxDistance)))

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

  An `audio.AudioParam` whose value is the X component of the direction
  which the audio source is facing, in 3D Cartesian coordinate

  `var orientationX = PannerNode.orientationX;

  PannerNode.orientationX.value = newOrientationX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`"
  [this]
  (-> this (.orientationX)))

(defn set-orientation-x!
  "Property.

  An `audio.AudioParam` whose value is the X component of the direction
  which the audio source is facing, in 3D Cartesian coordinate

  `var orientationX = PannerNode.orientationX;

  PannerNode.orientationX.value = newOrientationX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationX`"
  [this val]
  (aset this "orientationX" val))

(defn orientation-y
  "Property.

  An `audio.AudioParam` whose value is the Y component of the direction
  audio source is facing, in 3D Cartesian coordinate space.

  `var orientationY = PannerNode.orientationY;

  PannerNode.orientationY.value = newOrientationY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`"
  [this]
  (-> this (.orientationY)))

(defn set-orientation-y!
  "Property.

  An `audio.AudioParam` whose value is the Y component of the direction
  audio source is facing, in 3D Cartesian coordinate space.

  `var orientationY = PannerNode.orientationY;

  PannerNode.orientationY.value = newOrientationY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationY`"
  [this val]
  (aset this "orientationY" val))

(defn orientation-z
  "Property.

  An `audio.AudioParam` whose value is the Z component of the direction
  audio source is facing, in 3D Cartesian coordinate space.

  `var orientationZ = PannerNode.orientationZ;

  PannerNode.orientationZ.value = newOrientationZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/orientationZ`"
  [this]
  (-> this (.orientationZ)))

(defn set-orientation-z!
  "Property.

  An `audio.AudioParam` whose value is the Z component of the direction
  audio source is facing, in 3D Cartesian coordinate space.

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
  (-> this (.panningModel)))

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

  An `audio.AudioParam` whose value is the X coordinate of the
  source's position, in 3D Cartesian coordinates. The default value
  0.

  `var positionX = PannerNode.positionX;

  PannerNode.positionX.value = newPositionX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`"
  [this]
  (-> this (.positionX)))

(defn set-position-x!
  "Property.

  An `audio.AudioParam` whose value is the X coordinate of the
  source's position, in 3D Cartesian coordinates. The default value
  0.

  `var positionX = PannerNode.positionX;

  PannerNode.positionX.value = newPositionX;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionX`"
  [this val]
  (aset this "positionX" val))

(defn position-y
  "Property.

  An `audio.AudioParam` whose value is the Y coordinate of the
  source's position, in 3D Cartesian coordinates.

  `var positionY = PannerNode.positionY;

  PannerNode.positionY.value = newPositionY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`"
  [this]
  (-> this (.positionY)))

(defn set-position-y!
  "Property.

  An `audio.AudioParam` whose value is the Y coordinate of the
  source's position, in 3D Cartesian coordinates.

  `var positionY = PannerNode.positionY;

  PannerNode.positionY.value = newPositionY;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionY`"
  [this val]
  (aset this "positionY" val))

(defn position-z
  "Property.

  An `audio.AudioParam` whose value is the Z coordinate of the
  source's position, in 3D Cartesian coordinates.

  `var positionZ = PannerNode.positionZ;

  PannerNode.positionZ.value = newPositionZ;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/positionZ`"
  [this]
  (-> this (.positionZ)))

(defn set-position-z!
  "Property.

  An `audio.AudioParam` whose value is the Z coordinate of the
  source's position, in 3D Cartesian coordinates.

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
  (-> this (.refDistance)))

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

  A number whose range depends on the `web.distanceModel` of the
  as follows (negative values are not allowed):

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.rolloffFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`"
  [this]
  (-> this (.rolloffFactor)))

(defn set-rolloff-factor!
  "Property.

  A number whose range depends on the `web.distanceModel` of the
  as follows (negative values are not allowed):

  `var audioCtx = new AudioContext();
  var panner = audioCtx.createPanner();
  panner.rolloffFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PannerNode/rolloffFactor`"
  [this val]
  (aset this "rolloffFactor" val))

