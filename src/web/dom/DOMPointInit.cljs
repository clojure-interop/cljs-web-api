(ns web.dom.DOMPointInit
  "The DOMPointInit dictionary is used to provide the values of
  coordinates and perspective when creating and JSONifying a `web.dom.DOMPoint`
  `web.dom.DOMPointReadOnly` object."
  (:refer-clojure :exclude []))

(defn x
  "Property.

  The `web.dom.DOMPointInit` dictionary's x property is used to
  the x component of a point in 2D or 3D space when either creating
  serializing a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`.

  `var DOMPointInit = {
  x: xPos
  };

  DOMPointInit.x = xPos;

  var xPos = DOMPointInit.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/x`"
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  The `web.dom.DOMPointInit` dictionary's x property is used to
  the x component of a point in 2D or 3D space when either creating
  serializing a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`.

  `var DOMPointInit = {
  x: xPos
  };

  DOMPointInit.x = xPos;

  var xPos = DOMPointInit.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The `web.dom.DOMPointInit` dictionary's y property is used to
  the y-coordinate of a point in 2D or 3D space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  y: yPos
  };

  DOMPointInit.y = yPos;

  var yPos = DOMPointInit.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/y`"
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  The `web.dom.DOMPointInit` dictionary's y property is used to
  the y-coordinate of a point in 2D or 3D space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  y: yPos
  };

  DOMPointInit.y = yPos;

  var yPos = DOMPointInit.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/y`"
  [this val]
  (aset this "y" val))

(defn z
  "Property.

  The `web.dom.DOMPointInit` dictionary's z property is used to
  the z-coordinate of a point in 2D or 3D space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  z: zPos
  };

  DOMPointInit.z = zPos;

  var zPos = DOMPointInit.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/z`"
  [this]
  (-> this (.-z)))

(defn set-z!
  "Property.

  The `web.dom.DOMPointInit` dictionary's z property is used to
  the z-coordinate of a point in 2D or 3D space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  z: zPos
  };

  DOMPointInit.z = zPos;

  var zPos = DOMPointInit.z;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/z`"
  [this val]
  (aset this "z" val))

(defn w
  "Property.

  The `web.dom.DOMPointInit` dictionary's w property is used to
  the w perspective value of a point in space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  w: wPerspective
  };

  DOMPointInit.w = wPerspective;

  var wPerspective = DOMPointInit.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/w`"
  [this]
  (-> this (.-w)))

(defn set-w!
  "Property.

  The `web.dom.DOMPointInit` dictionary's w property is used to
  the w perspective value of a point in space when either creating
  serializing to JSON a `web.dom.DOMPoint` or `web.dom.DOMPointReadOnly`

  `var DOMPointInit = {
  w: wPerspective
  };

  DOMPointInit.w = wPerspective;

  var wPerspective = DOMPointInit.w;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMPointInit/w`"
  [this val]
  (aset this "w" val))

