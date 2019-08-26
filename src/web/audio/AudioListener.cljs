(ns web.audio.AudioListener
  "The AudioListener interface represents the position and orientation
  the unique person listening to the audio scene, and is used in
  spatialization. All `web.audio.PannerNode`s spatialize in relation
  the AudioListener stored in the `BaseAudioContext.listener` attribute."
  (:refer-clojure :exclude []))

(defn set-orientation
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.setOrientation(0,0,-1,0,1,0);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/setOrientation`"
  [this & args]
  (apply (-> this .-setOrientation) (concat [this] args)))

(defn set-position
  "Method.

  Void.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.setPosition(1,1,1);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/setPosition`"
  [this & args]
  (apply (-> this .-setPosition) (concat [this] args)))

(defn position-x
  "Property.

  The positionX read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the x position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionX.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionX`"
  [this]
  (-> this (.positionX)))

(defn set-position-x!
  "Property.

  The positionX read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the x position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionX.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionX`"
  [this val]
  (aset this "positionX" val))

(defn doppler-factor
  "Property.

  The deprecated dopplerFactor property of the `web.audio.AudioListener`
  is a double value representing the amount of pitch shift to use
  rendering a doppler effect.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.dopplerFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/dopplerFactor`"
  [this]
  (-> this (.dopplerFactor)))

(defn set-doppler-factor!
  "Property.

  The deprecated dopplerFactor property of the `web.audio.AudioListener`
  is a double value representing the amount of pitch shift to use
  rendering a doppler effect.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.dopplerFactor = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/dopplerFactor`"
  [this val]
  (aset this "dopplerFactor" val))

(defn forward-x
  "Property.

  The forwardX read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the x value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardX.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardX`"
  [this]
  (-> this (.forwardX)))

(defn set-forward-x!
  "Property.

  The forwardX read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the x value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardX.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardX`"
  [this val]
  (aset this "forwardX" val))

(defn forward-y
  "Property.

  The forwardY read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the y value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardY.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardY`"
  [this]
  (-> this (.forwardY)))

(defn set-forward-y!
  "Property.

  The forwardY read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the y value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardY.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardY`"
  [this val]
  (aset this "forwardY" val))

(defn forward-z
  "Property.

  The forwardZ read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the z value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardZ.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardZ`"
  [this]
  (-> this (.forwardZ)))

(defn set-forward-z!
  "Property.

  The forwardZ read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the z value of the
  vector defining the forward direction the listener is pointing

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.forwardZ.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/forwardZ`"
  [this val]
  (aset this "forwardZ" val))

(defn position-y
  "Property.

  The positionY read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the y position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionY.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionY`"
  [this]
  (-> this (.positionY)))

(defn set-position-y!
  "Property.

  The positionY read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the y position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionY.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionY`"
  [this val]
  (aset this "positionY" val))

(defn position-z
  "Property.

  The positionZ read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the z position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionZ.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionZ`"
  [this]
  (-> this (.positionZ)))

(defn set-position-z!
  "Property.

  The positionZ read-only property of the `web.audio.AudioListener`
  is an `web.audio.AudioParam` representing the z position of the
  in 3D cartesian space.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.positionZ.value = 1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/positionZ`"
  [this val]
  (aset this "positionZ" val))

(defn speed-of-sound
  "Property.

  The speedOfSound property of the `web.audio.AudioListener` interface
  a double value representing the speed of sound, in meters per

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.speedOfSound = 343.3;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/speedOfSound`"
  [this]
  (-> this (.speedOfSound)))

(defn set-speed-of-sound!
  "Property.

  The speedOfSound property of the `web.audio.AudioListener` interface
  a double value representing the speed of sound, in meters per

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.speedOfSound = 343.3;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/speedOfSound`"
  [this val]
  (aset this "speedOfSound" val))

(defn up-x
  "Property.

  The upX read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the x value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upX.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upX`"
  [this]
  (-> this (.upX)))

(defn set-up-x!
  "Property.

  The upX read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the x value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upX.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upX`"
  [this val]
  (aset this "upX" val))

(defn up-y
  "Property.

  The upY read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the y value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upY.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upY`"
  [this]
  (-> this (.upY)))

(defn set-up-y!
  "Property.

  The upY read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the y value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upY.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upY`"
  [this val]
  (aset this "upY" val))

(defn up-z
  "Property.

  The upZ read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the z value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upZ.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upZ`"
  [this]
  (-> this (.upZ)))

(defn set-up-z!
  "Property.

  The upZ read-only property of the `web.audio.AudioListener` interface
  an `web.audio.AudioParam` representing the z value of the direction
  defining the up direction the listener is pointing in.

  `var audioCtx = new AudioContext();
  var myListener = audioCtx.listener;
  myListener.upZ.value = 0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioListener/upZ`"
  [this val]
  (aset this "upZ" val))

