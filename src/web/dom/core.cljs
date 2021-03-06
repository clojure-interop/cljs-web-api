(ns web.dom.core
  "web.dom interfaces."
  (:require [web.dom.AbortController]
            [web.dom.DOMConfiguration]
            [web.dom.DOMException]
            [web.dom.DOMImplementation]
            [web.dom.DOMImplementationList]
            [web.dom.DOMLocator]
            [web.dom.DOMMatrix]
            [web.dom.DOMMatrixReadOnly]
            [web.dom.DOMPoint]
            [web.dom.DOMPointInit]
            [web.dom.DOMPointReadOnly]
            [web.dom.DOMQuad]
            [web.dom.DOMRect]
            [web.dom.DOMRectReadOnly]
            [web.dom.DOMStringList]
            [web.dom.DOMStringMap]
            [web.dom.DOMTokenList]
            [web.dom.GlobalEventHandlers]
            [web.dom.HTMLAnchorElement]
            [web.dom.HTMLAreaElement]
            [web.dom.HTMLBRElement]
            [web.dom.HTMLBaseElement]
            [web.dom.HTMLBaseFontElement]
            [web.dom.HTMLBodyElement]
            [web.dom.HTMLButtonElement]
            [web.dom.HTMLCollection]
            [web.dom.HTMLDListElement]
            [web.dom.HTMLDataElement]
            [web.dom.HTMLDataListElement]
            [web.dom.HTMLDetailsElement]
            [web.dom.HTMLDetailsElement.ev]
            [web.dom.HTMLDialogElement]
            [web.dom.HTMLDialogElement.ev]
            [web.dom.HTMLDivElement]
            [web.dom.HTMLElement]
            [web.dom.HTMLElement.ev]
            [web.dom.HTMLEmbedElement]
            [web.dom.HTMLFieldSetElement]
            [web.dom.HTMLFontElement]
            [web.dom.HTMLFormControlsCollection]
            [web.dom.HTMLFormElement]
            [web.dom.HTMLFormElement.ev]
            [web.dom.HTMLFrameSetElement]
            [web.dom.HTMLHeadElement]
            [web.dom.HTMLHeadingElement]
            [web.dom.HTMLHtmlElement]
            [web.dom.HTMLIFrameElement]
            [web.dom.HTMLImageElement]
            [web.dom.HTMLInputElement]
            [web.dom.HTMLInputElement.ev]
            [web.dom.HTMLIsIndexElement]
            [web.dom.HTMLLIElement]
            [web.dom.HTMLLabelElement]
            [web.dom.HTMLLinkElement]
            [web.dom.HTMLMapElement]
            [web.dom.HTMLMeterElement]
            [web.dom.HTMLModElement]
            [web.dom.HTMLOListElement]
            [web.dom.HTMLObjectElement]
            [web.dom.HTMLOptGroupElement]
            [web.dom.HTMLOutputElement]
            [web.dom.HTMLParagraphElement]
            [web.dom.HTMLParamElement]
            [web.dom.HTMLPreElement]
            [web.dom.HTMLProgressElement]
            [web.dom.HTMLQuoteElement]
            [web.dom.HTMLScriptElement]
            [web.dom.HTMLSelectElement]
            [web.dom.HTMLSelectElement.ev]
            [web.dom.HTMLShadowElement]
            [web.dom.HTMLSourceElement]
            [web.dom.HTMLStyleElement]
            [web.dom.HTMLTableCaptionElement]
            [web.dom.HTMLTableCellElement]
            [web.dom.HTMLTableDataCellElement]
            [web.dom.HTMLTableElement]
            [web.dom.HTMLTableHeaderCellElement]
            [web.dom.HTMLTableRowElement]
            [web.dom.HTMLTableSectionElement]
            [web.dom.HTMLTemplateElement]
            [web.dom.HTMLTextAreaElement]
            [web.dom.HTMLTextAreaElement.ev]
            [web.dom.HTMLTimeElement]
            [web.dom.HTMLTitleElement]
            [web.dom.HTMLTrackElement]
            [web.dom.HTMLTrackElement.ev]
            [web.dom.HTMLUListElement]
            [web.dom.History]
            [web.dom.Location]
            [web.dom.MutationObserver]
            [web.dom.MutationObserverInit]
            [web.dom.NavigatorID]
            [web.dom.NavigatorLanguage]
            [web.dom.NavigatorOnLine]
            [web.dom.NavigatorPlugins]
            [web.dom.PromiseRejectionEvent]
            [web.dom.PromiseRejectionEvent.ev]
            [web.dom.RadioNodeList]
            [web.dom.ValidityState]
            [web.dom.WindowEventHandlers]))
