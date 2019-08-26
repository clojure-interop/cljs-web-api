(ns js.Date
  "Creates a JavaScript Date instance that represents a single moment
  time in a platform-independent format."
  (:refer-clojure :exclude []))

(defn now
  "Method.

  The Date.now() method returns the number of milliseconds elapsed
  January 1, 1970 00:00:00 UTC.

  `var timeInMs = Date.now();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now`"
  [this ]
  (-> this (.now)))

(defn utc
  "Method.

  The Date.UTC() method accepts parameters similar to the `js.Date`
  but treats them as UTC. It returns the number of milliseconds
  January 1, 1970, 00:00:00 UTC.

  `ECMAScript 2017 and later:



  Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])

  ECMAScript 2016 and earlier: (month used to be required)



  Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC`"
  [this & args]
  (apply (-> this .-UTC) (concat [this] args)))

(defn parse
  "Method.

  The Date.parse() method parses a string representation of a date,
  returns the number of milliseconds since January 1, 1970, 00:00:00
  or NaN if the string is unrecognized or, in some cases, contains
  date values (e.g. 2015-02-31).

  `Direct call:



  Date.parse(dateString)

  Implicit call:



  new Date(dateString)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse`"
  [this & args]
  (apply (-> this .-parse) (concat [this] args)))

(defn get-date
  "Method.

  The getDate() method returns the day of the month for the specified
  according to local time.

  `dateObj.getDate()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate`"
  [this ]
  (-> this (.getDate)))

(defn get-day
  "Method.

  The getDay() method returns the day of the week for the specified
  according to local time, where 0 represents Sunday.

  `dateObj.getDay()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay`"
  [this ]
  (-> this (.getDay)))

(defn get-full-year
  "Method.

  The getFullYear() method returns the year of the specified date
  to local time.

  `dateObj.getFullYear()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear`"
  [this ]
  (-> this (.getFullYear)))

(defn get-hours
  "Method.

  The getHours() method returns the hour for the specified date,
  to local time.

  `dateObj.getHours()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours`"
  [this ]
  (-> this (.getHours)))

(defn get-milliseconds
  "Method.

  The getMilliseconds() method returns the milliseconds in the
  date according to local time.

  `dateObj.getMilliseconds()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds`"
  [this ]
  (-> this (.getMilliseconds)))

(defn get-minutes
  "Method.

  The getMinutes() method returns the minutes in the specified
  according to local time.

  `dateObj.getMinutes()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes`"
  [this ]
  (-> this (.getMinutes)))

(defn get-month
  "Method.

  The getMonth() method returns the month in the specified date
  to local time, as a zero-based value (where zero indicates the
  month of the year).

  `dateObj.getMonth()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth`"
  [this ]
  (-> this (.getMonth)))

(defn get-seconds
  "Method.

  The getSeconds() method returns the seconds in the specified
  according to local time.

  `dateObj.getSeconds()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds`"
  [this ]
  (-> this (.getSeconds)))

(defn get-time
  "Method.

  The getTime() method returns the number of milliseconds* since
  Unix Epoch.

  `dateObj.getTime()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime`"
  [this ]
  (-> this (.getTime)))

(defn get-timezone-offset
  "Method.

  The getTimezoneOffset() method returns the time zone difference,
  minutes, from current locale (host system settings) to UTC.

  `dateObj.getTimezoneOffset()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset`"
  [this ]
  (-> this (.getTimezoneOffset)))

(defn get-utc-date
  "Method.

  The getUTCDate() method returns the day (date) of the month in
  specified date according to universal time.

  `dateObj.getUTCDate()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate`"
  [this ]
  (-> this (.getUTCDate)))

(defn get-utc-day
  "Method.

  The getUTCDay() method returns the day of the week in the specified
  according to universal time, where 0 represents Sunday.

  `dateObj.getUTCDay()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay`"
  [this ]
  (-> this (.getUTCDay)))

(defn get-utc-full-year
  "Method.

  The getUTCFullYear() method returns the year in the specified
  according to universal time.

  `dateObj.getUTCFullYear()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear`"
  [this ]
  (-> this (.getUTCFullYear)))

(defn get-utc-hours
  "Method.

  The getUTCHours() method returns the hours in the specified date
  to universal time.

  `dateObj.getUTCHours()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours`"
  [this ]
  (-> this (.getUTCHours)))

(defn get-utc-milliseconds
  "Method.

  The getUTCMilliseconds() method returns the milliseconds portion
  the time object's value.

  `dateObj.getUTCMilliseconds()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds`"
  [this ]
  (-> this (.getUTCMilliseconds)))

(defn get-utc-minutes
  "Method.

  The getUTCMinutes() method returns the minutes in the specified
  according to universal time.

  `dateObj.getUTCMinutes()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes`"
  [this ]
  (-> this (.getUTCMinutes)))

(defn get-utc-month
  "Method.

  The getUTCMonth() returns the month of the specified date according
  universal time, as a zero-based value (where zero indicates the
  month of the year).

  `dateObj.getUTCMonth()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth`"
  [this ]
  (-> this (.getUTCMonth)))

(defn get-utc-seconds
  "Method.

  The getUTCSeconds() method returns the seconds in the specified
  according to universal time.

  `dateObj.getUTCSeconds()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds`"
  [this ]
  (-> this (.getUTCSeconds)))

(defn get-year
  "Method.

  The getYear() method returns the year in the specified date according
  local time. Because getYear() does not return full years (\\\"year
  problem\\\"), it is no longer used and has been replaced by the
  method.

  `dateObj.getYear()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear`"
  [this ]
  (-> this (.getYear)))

(defn set-date
  "Method.

  The setDate() method sets the day of the `js.Date` object relative
  the beginning of the currently set month.

  `dateObj.setDate(dayValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate`"
  [this day-value]
  (-> this (.setDate day-value)))

(defn set-full-year
  "Method.

  The setFullYear() method sets the full year for a specified date
  to local time. Returns new timestamp.

  `dateObj.setFullYear(yearValue[, monthValue[, dateValue]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear`"
  [this & args]
  (apply (-> this .-setFullYear) (concat [this] args)))

(defn set-hours
  "Method.

  The setHours() method sets the hours for a specified date according
  local time, and returns the number of milliseconds since January
  1970 00:00:00 UTC until the time represented by the updated `js.Date`

  `dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours`"
  [this & args]
  (apply (-> this .-setHours) (concat [this] args)))

(defn set-milliseconds
  "Method.

  The setMilliseconds() method sets the milliseconds for a specified
  according to local time.

  `dateObj.setMilliseconds(millisecondsValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds`"
  [this milliseconds-value]
  (-> this (.setMilliseconds milliseconds-value)))

(defn set-minutes
  "Method.

  The setMinutes() method sets the minutes for a specified date
  to local time.

  `dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes`"
  [this & args]
  (apply (-> this .-setMinutes) (concat [this] args)))

(defn set-month
  "Method.

  The setMonth() method sets the month for a specified date according
  the currently set year.

  `dateObj.setMonth(monthValue[, dayValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth`"
  [this & args]
  (apply (-> this .-setMonth) (concat [this] args)))

(defn set-seconds
  "Method.

  The setSeconds() method sets the seconds for a specified date
  to local time.

  `dateObj.setSeconds(secondsValue[, msValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds`"
  [this & args]
  (apply (-> this .-setSeconds) (concat [this] args)))

(defn set-time
  "Method.

  The setTime() method sets the `js.Date` object to the time represented
  a number of milliseconds since January 1, 1970, 00:00:00 UTC.

  `dateObj.setTime(timeValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime`"
  [this time-value]
  (-> this (.setTime time-value)))

(defn set-utc-date
  "Method.

  The setUTCDate() method sets the day of the month for a specified
  according to universal time.

  `dateObj.setUTCDate(dayValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate`"
  [this day-value]
  (-> this (.setUTCDate day-value)))

(defn set-utc-full-year
  "Method.

  The setUTCFullYear() method sets the full year for a specified
  according to universal time.

  `dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear`"
  [this & args]
  (apply (-> this .-setUTCFullYear) (concat [this] args)))

(defn set-utc-hours
  "Method.

  The setUTCHours() method sets the hour for a specified date according
  universal time, and returns the number of milliseconds since
  1, 1970 00:00:00 UTC until the time represented by the updated
  instance.

  `dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours`"
  [this & args]
  (apply (-> this .-setUTCHours) (concat [this] args)))

(defn set-utc-milliseconds
  "Method.

  The setUTCMilliseconds() method sets the milliseconds for a specified
  according to universal time.

  `dateObj.setUTCMilliseconds(millisecondsValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds`"
  [this milliseconds-value]
  (-> this (.setUTCMilliseconds milliseconds-value)))

(defn set-utc-minutes
  "Method.

  The setUTCMinutes() method sets the minutes for a specified date
  to universal time.

  `dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes`"
  [this & args]
  (apply (-> this .-setUTCMinutes) (concat [this] args)))

(defn set-utc-month
  "Method.

  The setUTCMonth() method sets the month for a specified date
  to universal time.

  `dateObj.setUTCMonth(monthValue[, dayValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth`"
  [this & args]
  (apply (-> this .-setUTCMonth) (concat [this] args)))

(defn set-utc-seconds
  "Method.

  The setUTCSeconds() method sets the seconds for a specified date
  to universal time.

  `dateObj.setUTCSeconds(secondsValue[, msValue])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds`"
  [this & args]
  (apply (-> this .-setUTCSeconds) (concat [this] args)))

(defn set-year
  "Method.

  The setYear() method sets the year for a specified date according
  local time. Because setYear() does not set full years (\\\"year
  problem\\\"), it is no longer used and has been replaced by the
  method.

  `dateObj.setYear(yearValue)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setYear`"
  [this year-value]
  (-> this (.setYear year-value)))

(defn to-date-string
  "Method.

  The toDateString() method returns the date portion of a `js.Date`
  in English in the following format separated by spaces:

  `dateObj.toDateString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString`"
  [this ]
  (-> this (.toDateString)))

(defn to-gmt-string
  "Method.

  The toGMTString() method converts a date to a string, using Internet
  Mean Time (GMT) conventions. The exact format of the value returned
  toGMTString() varies according to the platform and browser, in
  it should represent a human readable date string.

  `dateObj.toGMTString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString`"
  [this ]
  (-> this (.toGMTString)))

(defn to-iso-string
  "Method.

  The toISOString() method returns a string in simplified extended
  format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ
  ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always
  UTC offset, as denoted by the suffix \\\"Z\\\".

  `dateObj.toISOString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString`"
  [this ]
  (-> this (.toISOString)))

(defn to-json
  "Method.

  The toJSON() method returns a string representation of the `js.Date`

  `dateObj.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn to-locale-date-string
  "Method.

  The toLocaleDateString() method returns a string with a language
  representation of the date portion of this date. The new locales
  options arguments let applications specify the language whose
  conventions should be used and allow to customize the behavior
  the function. In older implementations, which ignore the locales
  options arguments, the locale used and the form of the string
  are entirely implementation dependent.

  `dateObj.toLocaleDateString([locales [, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString`"
  [this & args]
  (apply (-> this .-toLocaleDateString) (concat [this] args)))

(defn to-locale-format
  "Method.

  The non-standard toLocaleFormat() method converts a date to a
  using the specified formatting. `Intl.DateTimeFormat` is an alternative
  format dates in a standards-compliant way. See also the newer
  of `Date.prototype.toLocaleDateString()`.

  `dateObj.toLocaleFormat(formatString)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleFormat`"
  [this format-string]
  (-> this (.toLocaleFormat format-string)))

(defn to-locale-string
  "Method.

  The toLocaleString() method returns a string with a language
  representation of this date. The new locales and options arguments
  applications specify the language whose formatting conventions
  be used and customize the behavior of the function. In older
  which ignore the locales and options arguments, the locale used
  the form of the string returned are entirely implementation dependent.

  `dateObj.toLocaleString([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString`"
  [this & args]
  (apply (-> this .-toLocaleString) (concat [this] args)))

(defn to-locale-time-string
  "Method.

  The toLocaleTimeString() method returns a string with a language
  representation of the time portion of this date. The new locales
  options arguments let applications specify the language whose
  conventions should be used and customize the behavior of the
  In older implementations, which ignore the locales and options
  the locale used and the form of the string returned are entirely
  dependent.

  `dateObj.toLocaleTimeString([locales[, options]])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString`"
  [this & args]
  (apply (-> this .-toLocaleTimeString) (concat [this] args)))

(defn to-source
  "Method.

  The toSource() method returns a string representing the source
  of the object.

  `dateObj.toSource()
  Date.toSource()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toSource`"
  [this & args]
  (apply (-> this .-toSource) (concat [this] args)))

(defn to-string
  "Method.

  The toString() method returns a string representing the specified
  object.

  `dateObj.toString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString`"
  [this ]
  (-> this (.toString)))

(defn to-time-string
  "Method.

  The toTimeString() method returns the time portion of a `js.Date`
  in human readable form in American English.

  `dateObj.toTimeString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString`"
  [this ]
  (-> this (.toTimeString)))

(defn to-utc-string
  "Method.

  The toUTCString() method converts a date to a string, using the
  time zone.

  `dateObj.toUTCString()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString`"
  [this ]
  (-> this (.toUTCString)))

(defn value-of
  "Method.

  The valueOf() method returns the primitive value of a `js.Date`

  `dateObj.valueOf()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf`"
  [this ]
  (-> this (.valueOf)))

(defn prototype
  "Property.

  The Date.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype`"
  [this]
  (-> this (.prototype)))

(defn set-prototype!
  "Property.

  The Date.prototype property represents the prototype for the
  constructor.

  See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype`"
  [this val]
  (aset this "prototype" val))

