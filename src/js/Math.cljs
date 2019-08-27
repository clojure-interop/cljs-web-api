(ns js.Math
  "Math is a built-in object that has properties and methods for
  constants and functions. Not a function object."
  (:refer-clojure :exclude [max min]))

(defn abs
  "Method.

  The Math.abs() function returns the absolute value of a number

  `Math.abs(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs`"
  [this x]
  (-> this (.abs x)))

(defn acos
  "Method.

  The Math.acos() function returns the arccosine (in radians) of
  number, that is

  `Math.acos(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos`"
  [this x]
  (-> this (.acos x)))

(defn acosh
  "Method.

  The Math.acosh() function returns the hyperbolic arc-cosine of
  number, that is

  `Math.acosh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh`"
  [this x]
  (-> this (.acosh x)))

(defn asin
  "Method.

  The Math.asin() function returns the arcsine (in radians) of
  number, that is

  `Math.asin(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin`"
  [this x]
  (-> this (.asin x)))

(defn asinh
  "Method.

  The Math.asinh() function returns the hyperbolic arcsine of a
  that is

  `Math.asinh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh`"
  [this x]
  (-> this (.asinh x)))

(defn atan
  "Method.

  The Math.atan() function returns the arctangent (in radians)
  a number, that is

  `Math.atan(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan`"
  [this x]
  (-> this (.atan x)))

(defn atanh
  "Method.

  The Math.atanh() function returns the hyperbolic arctangent of
  number, that is

  `Math.atanh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh`"
  [this x]
  (-> this (.atanh x)))

(defn atan2
  "Method.

  The Math.atan2() function returns the angle in the plane (in
  between the positive x-axis and the ray from (0,0) to the point
  for Math.atan2(y,x).

  `Math.atan2(y, x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2`"
  [this y x]
  (-> this (.atan2 y x)))

(defn cbrt
  "Method.

  The Math.cbrt() function returns the cube root of a number, that

  `Math.cbrt(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt`"
  [this x]
  (-> this (.cbrt x)))

(defn ceil
  "Method.

  The Math.ceil() function always rounds a number up to the next
  whole number or integer.

  `Math.ceil(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil`"
  [this x]
  (-> this (.ceil x)))

(defn clz32
  "Method.

  The Math.clz32() function returns the number of leading zero
  in the 32-bit binary representation of a number.

  `Math.clz32(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32`"
  [this x]
  (-> this (.clz32 x)))

(defn cos
  "Method.

  The Math.cos() static function returns the cosine of the specified
  which must be specified in radians. This value is

  `Math.cos(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos`"
  [this x]
  (-> this (.cos x)))

(defn cosh
  "Method.

  The Math.cosh() function returns the hyperbolic cosine of a number,
  can be expressed using the constant e:

  `Math.cosh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh`"
  [this x]
  (-> this (.cosh x)))

(defn exp
  "Method.

  The Math.exp() function returns ex, where x is the argument,
  e is Euler's number (also known as Napier's constant), the base
  the natural logarithms.

  `Math.exp(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp`"
  [this x]
  (-> this (.exp x)))

(defn expm1
  "Method.

  The Math.expm1() function returns ex - 1, where x is the argument,
  e the base of the natural logarithms.

  `Math.expm1(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1`"
  [this x]
  (-> this (.expm1 x)))

(defn floor
  "Method.

  The Math.floor() function returns the largest integer less than
  equal to a given number.

  `Math.floor(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor`"
  [this x]
  (-> this (.floor x)))

(defn fround
  "Method.

  The Math.fround() function returns the nearest 32-bit single
  float representation of a `js.Number`.

  `var singleFloat = Math.fround(doubleFloat);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround`"
  [this double-float]
  (-> this (.fround double-float)))

(defn hypot
  "Method.

  The Math.hypot() function returns the square root of the sum
  squares of its arguments, that is:

  `Math.hypot([value1[, value2[, ...]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot`"
  [this & args]
  (-> this .-hypot (.apply this (clj->js args))))

(defn imul
  "Method.

  The Math.imul() function returns the result of the C-like 32-bit
  of the two parameters.

  `var product = Math.imul(a, b);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul`"
  [this a b]
  (-> this (.imul a b)))

(defn log
  "Method.

  The Math.log() function returns the natural logarithm (base `e`)
  a number, that is

  `Math.log(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log`"
  [this x]
  (-> this (.log x)))

(defn log1p
  "Method.

  The Math.log1p() function returns the natural logarithm (base
  of 1 a number, that is

  `Math.log1p(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p`"
  [this x]
  (-> this (.log1p x)))

(defn log10
  "Method.

  The Math.log10() function returns the base 10 logarithm of a
  that is

  `Math.log10(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10`"
  [this x]
  (-> this (.log10 x)))

(defn log2
  "Method.

  The Math.log2() function returns the base 2 logarithm of a number,
  is

  `Math.log2(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2`"
  [this x]
  (-> this (.log2 x)))

(defn max
  "Method.

  The Math.max() function returns the largest of zero or more numbers.

  `Math.max([value1[, value2[, ...]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max`"
  [this & args]
  (-> this .-max (.apply this (clj->js args))))

(defn min
  "Method.

  The static function Math.min() returns the lowest-valued number
  into it, or `js.NaN` if any parameter isn't a number and can't
  converted into one.

  `Math.min([value1[, value2[, ...]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min`"
  [this & args]
  (-> this .-min (.apply this (clj->js args))))

(defn pow
  "Method.

  The Math.pow() function returns the base to the exponent power,
  is, baseexponent.

  `Math.pow(base, exponent)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow`"
  [this base exponent]
  (-> this (.pow base exponent)))

(defn random
  "Method.

  The Math.random() function returns a floating-point, pseudo-random
  in the range 0–1 (inclusive of 0, but not 1) with approximately
  distribution over that range — which you can then scale to your
  range. The implementation selects the initial seed to the random
  generation algorithm; it cannot be chosen or reset by the user.

  `Math.random()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random`"
  [this ]
  (-> this (.random)))

(defn round
  "Method.

  The Math.round() function returns the value of a number rounded
  the nearest integer.

  `Math.round(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round`"
  [this x]
  (-> this (.round x)))

(defn sign
  "Method.

  The Math.sign() function returns either a positive or negative
  1, indicating the sign of a number passed into the argument.
  the number passed into Math.sign() is 0, it will return a /-
  Note that if the number is positive, an explicit (+) will not
  returned.

  `Math.sign(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign`"
  [this x]
  (-> this (.sign x)))

(defn sin
  "Method.

  The Math.sin() function returns the sine of a number.

  `Math.sin(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sin`"
  [this x]
  (-> this (.sin x)))

(defn sinh
  "Method.

  The Math.sinh() function returns the hyperbolic sine of a number,
  can be expressed using the constant e:

  `Math.sinh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh`"
  [this x]
  (-> this (.sinh x)))

(defn sqrt
  "Method.

  The Math.sqrt() function returns the square root of a number,
  is

  `Math.sqrt(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt`"
  [this x]
  (-> this (.sqrt x)))

(defn tan
  "Method.

  The Math.tan() function returns the tangent of a number.

  `Math.tan(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan`"
  [this x]
  (-> this (.tan x)))

(defn tanh
  "Method.

  The Math.tanh() function returns the hyperbolic tangent of a
  that is

  `Math.tanh(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh`"
  [this x]
  (-> this (.tanh x)))

(defn to-source
  "Method.

  Returns the string \"Math\"."
  [this & args]
  (-> this .-toSource (.apply this (clj->js args))))

(defn trunc
  "Method.

  The Math.trunc() function returns the integer part of a number
  removing any fractional digits.

  `Math.trunc(x)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc`"
  [this x]
  (-> this (.trunc x)))

(defn e
  "Property.

  The Math.E property represents the base of natural logarithms,
  approximately 2.718.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E`"
  [this]
  (-> this (.-E)))

(defn set-e!
  "Property.

  The Math.E property represents the base of natural logarithms,
  approximately 2.718.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E`"
  [this val]
  (aset this "E" val))

(defn ln2
  "Property.

  The Math.LN2 property represents the natural logarithm of 2,
  0.693:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2`"
  [this]
  (-> this (.-LN2)))

(defn set-ln2!
  "Property.

  The Math.LN2 property represents the natural logarithm of 2,
  0.693:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2`"
  [this val]
  (aset this "LN2" val))

(defn ln10
  "Property.

  The Math.LN10 property represents the natural logarithm of 10,
  2.302:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN10`"
  [this]
  (-> this (.-LN10)))

(defn set-ln10!
  "Property.

  The Math.LN10 property represents the natural logarithm of 10,
  2.302:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN10`"
  [this val]
  (aset this "LN10" val))

(defn log2e
  "Property.

  The Math.LOG2E property represents the base 2 logarithm of e,
  1.442:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E`"
  [this]
  (-> this (.-LOG2E)))

(defn set-log2e!
  "Property.

  The Math.LOG2E property represents the base 2 logarithm of e,
  1.442:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E`"
  [this val]
  (aset this "LOG2E" val))

(defn log10e
  "Property.

  The Math.LOG10E property represents the base 10 logarithm of
  approximately 0.434:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E`"
  [this]
  (-> this (.-LOG10E)))

(defn set-log10e!
  "Property.

  The Math.LOG10E property represents the base 10 logarithm of
  approximately 0.434:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E`"
  [this val]
  (aset this "LOG10E" val))

(defn pi
  "Property.

  The Math.PI property represents the ratio of the circumference
  a circle to its diameter, approximately 3.14159:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI`"
  [this]
  (-> this (.-PI)))

(defn set-pi!
  "Property.

  The Math.PI property represents the ratio of the circumference
  a circle to its diameter, approximately 3.14159:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI`"
  [this val]
  (aset this "PI" val))

(defn sqrt12
  "Property.

  The Math.SQRT1_2 property represents the square root of 1/2 which
  approximately 0.707:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2`"
  [this]
  (-> this (.-SQRT1_2)))

(defn set-sqrt12!
  "Property.

  The Math.SQRT1_2 property represents the square root of 1/2 which
  approximately 0.707:

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2`"
  [this val]
  (aset this "SQRT1_2" val))

(defn sqrt2
  "Property.

  The Math.SQRT2 property represents the square root of 2, approximately

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2`"
  [this]
  (-> this (.-SQRT2)))

(defn set-sqrt2!
  "Property.

  The Math.SQRT2 property represents the square root of 2, approximately

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2`"
  [this val]
  (aset this "SQRT2" val))

