(ns web.reporting.Report
  "The Report interface of the Reporting API represents a single"
  (:refer-clojure :exclude [type]))

(defn body
  "Property.

  The body read-only property of the `web.reporting.Report` interface
  the body of the report, which is a ReportBody object containing
  detailed report information.

  `let reportBody = reportInstance.body`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/body`"
  [this]
  (-> this (.-body)))

(defn set-body!
  "Property.

  The body read-only property of the `web.reporting.Report` interface
  the body of the report, which is a ReportBody object containing
  detailed report information.

  `let reportBody = reportInstance.body`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/body`"
  [this val]
  (aset this "body" val))

(defn type
  "Property.

  The type read-only property of the `web.reporting.Report` interface
  the type of report generated, e.g. deprecation or intervention.

  `let reportType = reportInstance.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/type`"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.reporting.Report` interface
  the type of report generated, e.g. deprecation or intervention.

  `let reportType = reportInstance.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/type`"
  [this val]
  (aset this "type" val))

(defn url
  "Property.

  The url read-only property of the `web.reporting.Report` interface
  the URL of the document that generated the report.

  `let reportURL = reportInstance.url`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/url`"
  [this]
  (-> this (.-url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.reporting.Report` interface
  the URL of the document that generated the report.

  `let reportURL = reportInstance.url`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Report/url`"
  [this val]
  (aset this "url" val))

