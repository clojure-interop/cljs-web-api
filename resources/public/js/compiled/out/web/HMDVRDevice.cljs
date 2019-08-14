(ns web.HMDVRDevice
  "The HMDVRDevice interface of the WebVR API represents a head
  display, providing access to information about each eye, and
  us to modify the current field of view."
  (:refer-clojure :exclude []))

(defn get-eye-parameters
  "Method.

  The getEyeParameters() method of the `web.HMDVRDevice` interface
  current parameters for the eye specified as its argument (\\\"left\\\"
  \\\"right\\\") — stored in a `vr.VREyeParameters` object.

  `var myLeftEye = HMDVRDevice.getEyeParameters('left');`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/getEyeParameters`"
  [this & args]
  (apply (-> this .-getEyeParameters) (concat [this] args)))

(defn set-field-of-view
  "Method.

  The setFieldOfView() method of the `web.HMDVRDevice` interface
  be used to set the field of view for one eye, or both eyes simultaneously.

  `HMDVRDevice.setFieldOfView(leftFOV,rightFOV,zNear,zFar);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/setFieldOfView`"
  [this left-fov right-fov z-near z-far]
  (-> this (.setFieldOfView left-fov right-fov z-near z-far)))

