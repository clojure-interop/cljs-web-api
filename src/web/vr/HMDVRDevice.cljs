(ns web.vr.HMDVRDevice
  "The HMDVRDevice interface of the WebVR API represents a head
  display, providing access to information about each eye, and
  us to modify the current field of view."
  (:refer-clojure :exclude []))

(defn get-eye-parameters
  "Method.

  [Experimental]
  [Obsolute]

  The getEyeParameters() method of the `web.vr.HMDVRDevice` interface
  current parameters for the eye specified as its argument (\\\"left\\\"
  \\\"right\\\") — stored in a `web.vr.VREyeParameters` object.

  `var myLeftEye = HMDVRDevice.getEyeParameters('left');`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/getEyeParameters`"
  [this & args]
  (-> this .-getEyeParameters (.apply this (clj->js args))))

(defn set-field-of-view
  "Method.

  [Experimental]
  [Obsolute]

  The setFieldOfView() method of the `web.vr.HMDVRDevice` interface
  be used to set the field of view for one eye, or both eyes simultaneously.

  `HMDVRDevice.setFieldOfView(leftFOV,rightFOV,zNear,zFar);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HMDVRDevice/setFieldOfView`"
  [this left-fov right-fov z-near z-far]
  (-> this (.setFieldOfView left-fov right-fov z-near z-far)))

(defn hardware-unit-id
  "Property.

  Returns the distinct hardware ID for the overall hardware unit
  this VRDevice is a part of. All devices that are part of the
  physical piece of hardware will have the same hardwareUnitId."
  [this]
  (-> this (.-hardwareUnitId)))

(defn set-hardware-unit-id!
  "Property.

  Returns the distinct hardware ID for the overall hardware unit
  this VRDevice is a part of. All devices that are part of the
  physical piece of hardware will have the same hardwareUnitId."
  [this val]
  (aset this "hardwareUnitId" val))

(defn device-id
  "Property.

  Returns the ID for this specific VRDevice. The ID shouldn’t change
  browser restarts, allowing configuration data to be saved based
  it."
  [this]
  (-> this (.-deviceId)))

(defn set-device-id!
  "Property.

  Returns the ID for this specific VRDevice. The ID shouldn’t change
  browser restarts, allowing configuration data to be saved based
  it."
  [this val]
  (aset this "deviceId" val))

(defn device-name
  "Property.

  A human-readable name to identify the VRDevice."
  [this]
  (-> this (.-deviceName)))

(defn set-device-name!
  "Property.

  A human-readable name to identify the VRDevice."
  [this val]
  (aset this "deviceName" val))

