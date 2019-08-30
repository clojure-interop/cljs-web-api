(ns web.fonts.FontFace
  "The FontFace interface represents a single usable font face.
  allows control of the source of the font face, being a URL to
  external resource, or a buffer; it also allows control of when
  font face is loaded and its current status."
  (:refer-clojure :exclude [load]))

(defn load
  "Method.

  [Draft]
  [Experimental]

  The load() method of the `web.fonts.FontFace` interface loads
  font based on current object's constructor-passed requirements,
  a location or source buffer, and returns a `js.Promise` that
  with the current FontFace object.

  `var promise = FontFace.load();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/load`"
  [this ]
  (-> this (.load)))

(defn display
  "Property.

  [Experimental]

  The display property of the `web.fonts.FontFace` interface determines
  a font face is displayed based on whether and when it is downloaded
  ready to use. This property is equivalent to the CSS font-display

  `var display = FontFace.display
  FontFace.display = display`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/display`"
  [this]
  (-> this (.-display)))

(defn set-display!
  "Property.

  [Experimental]

  The display property of the `web.fonts.FontFace` interface determines
  a font face is displayed based on whether and when it is downloaded
  ready to use. This property is equivalent to the CSS font-display

  `var display = FontFace.display
  FontFace.display = display`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/display`"
  [this val]
  (aset this "display" val))

(defn family
  "Property.

  [Draft]
  [Experimental]

  The FontFace.family property allows the author to get or set
  font family of a `web.fonts.FontFace` object. This is equivalent
  the `font-family` descriptor of `@font-face`.

  `instanceOfFontFace.family = 'font family name';
  var fontFace = instanceOfFontFace.family; // \\\"font family name\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/family`"
  [this]
  (-> this (.-family)))

(defn set-family!
  "Property.

  [Draft]
  [Experimental]

  The FontFace.family property allows the author to get or set
  font family of a `web.fonts.FontFace` object. This is equivalent
  the `font-family` descriptor of `@font-face`.

  `instanceOfFontFace.family = 'font family name';
  var fontFace = instanceOfFontFace.family; // \\\"font family name\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/family`"
  [this val]
  (aset this "family" val))

(defn feature-settings
  "Property.

  [Draft]
  [Experimental]

  The featureSettings property of the `web.fonts.FontFace` interface
  or sets infrequently used font features that are not available
  a font's variant properties. It is equivalent to the `font-feature-settings`

  `var featureSettingDescriptor = FontFace.featureSettings;
  FontFace.featureSettings = featureSettingDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/featureSettings`"
  [this]
  (-> this (.-featureSettings)))

(defn set-feature-settings!
  "Property.

  [Draft]
  [Experimental]

  The featureSettings property of the `web.fonts.FontFace` interface
  or sets infrequently used font features that are not available
  a font's variant properties. It is equivalent to the `font-feature-settings`

  `var featureSettingDescriptor = FontFace.featureSettings;
  FontFace.featureSettings = featureSettingDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/featureSettings`"
  [this val]
  (aset this "featureSettings" val))

(defn loaded
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The loaded read-only property of the `web.fonts.FontFace` interface
  a `js.Promise` that resolves with the current FontFace object
  the font specified in the object's constructor is done loading
  rejects with a SyntaxError.

  `var aPromise = FontFace.loaded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/loaded`"
  [this]
  (-> this (.-loaded)))

(defn status
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The status read-only property of the `web.fonts.FontFace` interface
  an enumerated value indicating the status of the font, one of
  \\\"loading\\\", \\\"loaded\\\", or \\\"error\\\".

  `var status = FontFace.status;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/status`"
  [this]
  (-> this (.-status)))

(defn stretch
  "Property.

  [Draft]
  [Experimental]

  The stretch property of the `web.fonts.FontFace` interface retrieves
  sets how the font stretches. It is equivalent to the `font-stretch`

  `var stretchDescriptor = FontFace.stretch;
  FontFace.stretch = stretchDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/stretch`"
  [this]
  (-> this (.-stretch)))

(defn set-stretch!
  "Property.

  [Draft]
  [Experimental]

  The stretch property of the `web.fonts.FontFace` interface retrieves
  sets how the font stretches. It is equivalent to the `font-stretch`

  `var stretchDescriptor = FontFace.stretch;
  FontFace.stretch = stretchDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/stretch`"
  [this val]
  (aset this "stretch" val))

(defn style
  "Property.

  [Draft]
  [Experimental]

  The style property of the `web.fonts.FontFace` interface retrieves
  sets the font's style. It is equivalent to the `font-style` descriptor.

  `var style = FontFace.style;
  FontFace.style = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/style`"
  [this]
  (-> this (.-style)))

(defn set-style!
  "Property.

  [Draft]
  [Experimental]

  The style property of the `web.fonts.FontFace` interface retrieves
  sets the font's style. It is equivalent to the `font-style` descriptor.

  `var style = FontFace.style;
  FontFace.style = value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/style`"
  [this val]
  (aset this "style" val))

(defn unicode-range
  "Property.

  [Draft]
  [Experimental]

  The unicodeRange property of the `web.fonts.FontFace` interface
  or sets the range of unicode codepoints encompassing the font.
  is equivalent to the `unicode-range` descriptor.

  `var unicodeRangeDescriptor = FontFace.unicodeRange;
  FontFace.unicodeRange = unicodeRangeDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/unicodeRange`"
  [this]
  (-> this (.-unicodeRange)))

(defn set-unicode-range!
  "Property.

  [Draft]
  [Experimental]

  The unicodeRange property of the `web.fonts.FontFace` interface
  or sets the range of unicode codepoints encompassing the font.
  is equivalent to the `unicode-range` descriptor.

  `var unicodeRangeDescriptor = FontFace.unicodeRange;
  FontFace.unicodeRange = unicodeRangeDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/unicodeRange`"
  [this val]
  (aset this "unicodeRange" val))

(defn variant
  "Property.

  [Draft]
  [Experimental]

  The variant property of the `web.fonts.FontFace` interface programatically
  or sets font variant values. It is equivalent to the `font-variant`

  `var variantSubProperty = FontFace.variant;
  FontFace.variant = variantSubProperty;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/variant`"
  [this]
  (-> this (.-variant)))

(defn set-variant!
  "Property.

  [Draft]
  [Experimental]

  The variant property of the `web.fonts.FontFace` interface programatically
  or sets font variant values. It is equivalent to the `font-variant`

  `var variantSubProperty = FontFace.variant;
  FontFace.variant = variantSubProperty;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/variant`"
  [this val]
  (aset this "variant" val))

(defn weight
  "Property.

  [Draft]
  [Experimental]

  The weight property of the `web.fonts.FontFace` interface retrieves
  sets the weight of the font. It is equivalent to the `font-weight`

  `var weightDescriptor = FontFace.weight;
  FontFace.weight = weightDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/weight`"
  [this]
  (-> this (.-weight)))

(defn set-weight!
  "Property.

  [Draft]
  [Experimental]

  The weight property of the `web.fonts.FontFace` interface retrieves
  sets the weight of the font. It is equivalent to the `font-weight`

  `var weightDescriptor = FontFace.weight;
  FontFace.weight = weightDescriptor;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/weight`"
  [this val]
  (aset this "weight" val))

