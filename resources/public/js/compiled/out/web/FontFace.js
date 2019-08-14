// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FontFace');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FontFace() constructor creates a new `web.FontFace` object.
 * 
 *   family
 *   Specifies a name that will be used as the font face value for font properties. Takes the same type of values as the `web.font-family` descriptor of `web.@font-face` .
 *   source
 *   The font source. This can be either:
 * 
 *   A URL
 *   Binary font data
 * 
 * 
 *   descriptors Optional
 *   A set of optional descriptors passed as an object. It can have the following keys:
 * 
 *   family: Family
 *   style: Style
 *   weight: Weight
 *   stretch: Stretch
 *   unicodeRange: Unicode range
 *   variant: variant
 *   featureSettings: Feature settings
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/FontFace`
 */
web.FontFace.constructor$ = FontFace;
/**
 * Method.
 * 
 *   The load() method of the `web.FontFace` interface loads a font
 *   on current object's constructor-passed requirements, including
 *   location or source buffer, and returns a `web.Promise` that resolves
 *   the current FontFace object.
 * 
 *   `var promise = FontFace.load();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/load`
 */
web.FontFace.load = (function web$FontFace$load(this$){
return this$.load();
});
/**
 * Property.
 * 
 *   The display property of the `web.FontFace` interface determines
 *   a font face is displayed based on whether and when it is downloaded
 *   ready to use. This property is equivalent to the CSS font-display
 * 
 *   `var display = FontFace.display
 *   FontFace.display = display`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/display`
 */
web.FontFace.display = (function web$FontFace$display(this$){
return this$.display();
});
/**
 * Property.
 * 
 *   The display property of the `web.FontFace` interface determines
 *   a font face is displayed based on whether and when it is downloaded
 *   ready to use. This property is equivalent to the CSS font-display
 * 
 *   `var display = FontFace.display
 *   FontFace.display = display`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/display`
 */
web.FontFace.set_display_BANG_ = (function web$FontFace$set_display_BANG_(this$,val){
return (this$["display"] = val);
});
/**
 * Property.
 * 
 *   The FontFace.family property allows the author to get or set
 *   font family of a `web.FontFace` object. This is equivalent to
 *   `web.font-family` descriptor of `web.@font-face`.
 * 
 *   `instanceOfFontFace.family = 'font family name';
 *   var fontFace = instanceOfFontFace.family; // \"font family name\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/family`
 */
web.FontFace.family = (function web$FontFace$family(this$){
return this$.family();
});
/**
 * Property.
 * 
 *   The FontFace.family property allows the author to get or set
 *   font family of a `web.FontFace` object. This is equivalent to
 *   `web.font-family` descriptor of `web.@font-face`.
 * 
 *   `instanceOfFontFace.family = 'font family name';
 *   var fontFace = instanceOfFontFace.family; // \"font family name\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/family`
 */
web.FontFace.set_family_BANG_ = (function web$FontFace$set_family_BANG_(this$,val){
return (this$["family"] = val);
});
/**
 * Property.
 * 
 *   The featureSettings property of the `web.FontFace` interface
 *   or sets infrequently used font features that are not available
 *   a font's variant properties. It is equivalent to the `web.font-feature-settings`
 * 
 *   `var featureSettingDescriptor = FontFace.featureSettings;
 *   FontFace.featureSettings = featureSettingDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/featureSettings`
 */
web.FontFace.feature_settings = (function web$FontFace$feature_settings(this$){
return this$.featureSettings();
});
/**
 * Property.
 * 
 *   The featureSettings property of the `web.FontFace` interface
 *   or sets infrequently used font features that are not available
 *   a font's variant properties. It is equivalent to the `web.font-feature-settings`
 * 
 *   `var featureSettingDescriptor = FontFace.featureSettings;
 *   FontFace.featureSettings = featureSettingDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/featureSettings`
 */
web.FontFace.set_feature_settings_BANG_ = (function web$FontFace$set_feature_settings_BANG_(this$,val){
return (this$["featureSettings"] = val);
});
/**
 * Property.
 * 
 *   The loaded read-only property of the `web.FontFace` interface
 *   a `web.Promise` that resolves with the current FontFace object
 *   the font specified in the object's constructor is done loading
 *   rejects with a SyntaxError.
 * 
 *   `var aPromise = FontFace.loaded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/loaded`
 */
web.FontFace.loaded = (function web$FontFace$loaded(this$){
return this$.loaded();
});
/**
 * Property.
 * 
 *   The loaded read-only property of the `web.FontFace` interface
 *   a `web.Promise` that resolves with the current FontFace object
 *   the font specified in the object's constructor is done loading
 *   rejects with a SyntaxError.
 * 
 *   `var aPromise = FontFace.loaded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/loaded`
 */
web.FontFace.set_loaded_BANG_ = (function web$FontFace$set_loaded_BANG_(this$,val){
return (this$["loaded"] = val);
});
/**
 * Property.
 * 
 *   The status read-only property of the `web.FontFace` interface
 *   an enumerated value indicating the status of the font, one of
 *   \"loading\", \"loaded\", or \"error\".
 * 
 *   `var status = FontFace.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/status`
 */
web.FontFace.status = (function web$FontFace$status(this$){
return this$.status();
});
/**
 * Property.
 * 
 *   The status read-only property of the `web.FontFace` interface
 *   an enumerated value indicating the status of the font, one of
 *   \"loading\", \"loaded\", or \"error\".
 * 
 *   `var status = FontFace.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/status`
 */
web.FontFace.set_status_BANG_ = (function web$FontFace$set_status_BANG_(this$,val){
return (this$["status"] = val);
});
/**
 * Property.
 * 
 *   The stretch property of the `web.FontFace` interface retrieves
 *   sets how the font stretches. It is equivalent to the `web.font-stretch`
 * 
 *   `var stretchDescriptor = FontFace.stretch;
 *   FontFace.stretch = stretchDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/stretch`
 */
web.FontFace.stretch = (function web$FontFace$stretch(this$){
return this$.stretch();
});
/**
 * Property.
 * 
 *   The stretch property of the `web.FontFace` interface retrieves
 *   sets how the font stretches. It is equivalent to the `web.font-stretch`
 * 
 *   `var stretchDescriptor = FontFace.stretch;
 *   FontFace.stretch = stretchDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/stretch`
 */
web.FontFace.set_stretch_BANG_ = (function web$FontFace$set_stretch_BANG_(this$,val){
return (this$["stretch"] = val);
});
/**
 * Property.
 * 
 *   The style property of the `web.FontFace` interface retrieves
 *   sets the font's style. It is equivalent to the `web.font-style`
 * 
 *   `var style = FontFace.style;
 *   FontFace.style = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/style`
 */
web.FontFace.style = (function web$FontFace$style(this$){
return this$.style();
});
/**
 * Property.
 * 
 *   The style property of the `web.FontFace` interface retrieves
 *   sets the font's style. It is equivalent to the `web.font-style`
 * 
 *   `var style = FontFace.style;
 *   FontFace.style = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/style`
 */
web.FontFace.set_style_BANG_ = (function web$FontFace$set_style_BANG_(this$,val){
return (this$["style"] = val);
});
/**
 * Property.
 * 
 *   The unicodeRange property of the `web.FontFace` interface retrieves
 *   sets the range of unicode codepoints encompassing the font. It
 *   equivalent to the `web.unicode-range` descriptor.
 * 
 *   `var unicodeRangeDescriptor = FontFace.unicodeRange;
 *   FontFace.unicodeRange = unicodeRangeDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/unicodeRange`
 */
web.FontFace.unicode_range = (function web$FontFace$unicode_range(this$){
return this$.unicodeRange();
});
/**
 * Property.
 * 
 *   The unicodeRange property of the `web.FontFace` interface retrieves
 *   sets the range of unicode codepoints encompassing the font. It
 *   equivalent to the `web.unicode-range` descriptor.
 * 
 *   `var unicodeRangeDescriptor = FontFace.unicodeRange;
 *   FontFace.unicodeRange = unicodeRangeDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/unicodeRange`
 */
web.FontFace.set_unicode_range_BANG_ = (function web$FontFace$set_unicode_range_BANG_(this$,val){
return (this$["unicodeRange"] = val);
});
/**
 * Property.
 * 
 *   The variant property of the `web.FontFace` interface programatically
 *   or sets font variant values. It is equivalent to the `web.font-variant`
 * 
 *   `var variantSubProperty = FontFace.variant;
 *   FontFace.variant = variantSubProperty;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/variant`
 */
web.FontFace.variant = (function web$FontFace$variant(this$){
return this$.variant();
});
/**
 * Property.
 * 
 *   The variant property of the `web.FontFace` interface programatically
 *   or sets font variant values. It is equivalent to the `web.font-variant`
 * 
 *   `var variantSubProperty = FontFace.variant;
 *   FontFace.variant = variantSubProperty;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/variant`
 */
web.FontFace.set_variant_BANG_ = (function web$FontFace$set_variant_BANG_(this$,val){
return (this$["variant"] = val);
});
/**
 * Property.
 * 
 *   The weight property of the `web.FontFace` interface retrieves
 *   sets the weight of the font. It is equivalent to the `web.font-weight`
 * 
 *   `var weightDescriptor = FontFace.weight;
 *   FontFace.weight = weightDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/weight`
 */
web.FontFace.weight = (function web$FontFace$weight(this$){
return this$.weight();
});
/**
 * Property.
 * 
 *   The weight property of the `web.FontFace` interface retrieves
 *   sets the weight of the font. It is equivalent to the `web.font-weight`
 * 
 *   `var weightDescriptor = FontFace.weight;
 *   FontFace.weight = weightDescriptor;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FontFace/weight`
 */
web.FontFace.set_weight_BANG_ = (function web$FontFace$set_weight_BANG_(this$,val){
return (this$["weight"] = val);
});

//# sourceMappingURL=FontFace.js.map?rel=1565798813129
