["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/ui/menuseparatorrenderer.js"],"~:js","goog.provide(\"goog.ui.MenuSeparatorRenderer\");\ngoog.require(\"goog.dom\");\ngoog.require(\"goog.dom.TagName\");\ngoog.require(\"goog.dom.classlist\");\ngoog.require(\"goog.ui.ControlRenderer\");\ngoog.requireType(\"goog.ui.ControlContent\");\ngoog.ui.MenuSeparatorRenderer = function() {\n  goog.ui.ControlRenderer.call(this);\n};\ngoog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer);\ngoog.addSingletonGetter(goog.ui.MenuSeparatorRenderer);\ngoog.ui.MenuSeparatorRenderer.CSS_CLASS = goog.getCssName(\"goog-menuseparator\");\ngoog.ui.MenuSeparatorRenderer.prototype.createDom = function(separator) {\n  return separator.getDomHelper().createDom(goog.dom.TagName.DIV, this.getCssClass());\n};\ngoog.ui.MenuSeparatorRenderer.prototype.decorate = function(separator, element) {\n  if (element.id) {\n    separator.setId(element.id);\n  }\n  if (element.tagName == goog.dom.TagName.HR) {\n    var hr = element;\n    element = this.createDom(separator);\n    goog.dom.insertSiblingBefore(element, hr);\n    goog.dom.removeNode(hr);\n  } else {\n    goog.dom.classlist.add(element, this.getCssClass());\n  }\n  return element;\n};\ngoog.ui.MenuSeparatorRenderer.prototype.setContent = function(separator, content) {\n};\ngoog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {\n  return goog.ui.MenuSeparatorRenderer.CSS_CLASS;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Renderer for {@link goog.ui.MenuSeparator}s.\n * @suppress {missingRequire} TODO(user): this shouldn't be needed\n */\n\ngoog.provide('goog.ui.MenuSeparatorRenderer');\n\ngoog.require('goog.dom');\ngoog.require('goog.dom.TagName');\ngoog.require('goog.dom.classlist');\ngoog.require('goog.ui.ControlRenderer');\ngoog.requireType('goog.ui.ControlContent');\n\n\n\n/**\n * Renderer for menu separators.\n * @constructor\n * @extends {goog.ui.ControlRenderer}\n */\ngoog.ui.MenuSeparatorRenderer = function() {\n  'use strict';\n  goog.ui.ControlRenderer.call(this);\n};\ngoog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer);\ngoog.addSingletonGetter(goog.ui.MenuSeparatorRenderer);\n\n\n/**\n * Default CSS class to be applied to the root element of components rendered\n * by this renderer.\n * @type {string}\n */\ngoog.ui.MenuSeparatorRenderer.CSS_CLASS = goog.getCssName('goog-menuseparator');\n\n\n/**\n * Returns an empty, styled menu separator DIV.  Overrides {@link\n * goog.ui.ControlRenderer#createDom}.\n * @param {goog.ui.Control} separator goog.ui.Separator to render.\n * @return {!Element} Root element for the separator.\n * @override\n */\ngoog.ui.MenuSeparatorRenderer.prototype.createDom = function(separator) {\n  'use strict';\n  return separator.getDomHelper().createDom(\n      goog.dom.TagName.DIV, this.getCssClass());\n};\n\n\n/**\n * Takes an existing element, and decorates it with the separator.  Overrides\n * {@link goog.ui.ControlRenderer#decorate}.\n * @param {goog.ui.Control} separator goog.ui.MenuSeparator to decorate the\n *     element.\n * @param {Element} element Element to decorate.\n * @return {!Element} Decorated element.\n * @override\n */\ngoog.ui.MenuSeparatorRenderer.prototype.decorate = function(\n    separator, element) {\n  'use strict';\n  // Normally handled in the superclass. But we don't call the superclass.\n  if (element.id) {\n    separator.setId(element.id);\n  }\n\n  if (element.tagName == goog.dom.TagName.HR) {\n    // Replace HR with separator.\n    var hr = element;\n    element = this.createDom(separator);\n    goog.dom.insertSiblingBefore(element, hr);\n    goog.dom.removeNode(hr);\n  } else {\n    goog.dom.classlist.add(element, this.getCssClass());\n  }\n  return element;\n};\n\n\n/**\n * Overrides {@link goog.ui.ControlRenderer#setContent} to do nothing, since\n * separators are empty.\n * @param {Element} separator The separator's root element.\n * @param {goog.ui.ControlContent} content Text caption or DOM structure to be\n *    set as the separators's content (ignored).\n * @override\n */\ngoog.ui.MenuSeparatorRenderer.prototype.setContent = function(\n    separator, content) {\n  // Do nothing.  Separators are empty.\n};\n\n\n/**\n * Returns the CSS class to be applied to the root element of components\n * rendered using this renderer.\n * @return {string} Renderer-specific CSS class.\n * @override\n */\ngoog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {\n  'use strict';\n  return goog.ui.MenuSeparatorRenderer.CSS_CLASS;\n};\n","~:compiled-at",1638904245653,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.ui.menuseparatorrenderer.js\",\n\"lineCount\":35,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,+BAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,UAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,kBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,oBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,yBAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,wBAAjB,CAAA;AASAH,IAAKI,CAAAA,EAAGC,CAAAA,qBAAR,GAAgCC,QAAQ,EAAG;AAEzCN,MAAKI,CAAAA,EAAGG,CAAAA,eAAgBC,CAAAA,IAAxB,CAA6B,IAA7B,CAAA;AAFyC,CAA3C;AAIAR,IAAKS,CAAAA,QAAL,CAAcT,IAAKI,CAAAA,EAAGC,CAAAA,qBAAtB,EAA6CL,IAAKI,CAAAA,EAAGG,CAAAA,eAArD,CAAA;AACAP,IAAKU,CAAAA,kBAAL,CAAwBV,IAAKI,CAAAA,EAAGC,CAAAA,qBAAhC,CAAA;AAQAL,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBM,CAAAA,SAA9B,GAA0CX,IAAKY,CAAAA,UAAL,CAAgB,oBAAhB,CAA1C;AAUAZ,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBQ,CAAAA,SAAUC,CAAAA,SAAxC,GAAoDC,QAAQ,CAACC,SAAD,CAAY;AAEtE,SAAOA,SAAUC,CAAAA,YAAV,EAAyBH,CAAAA,SAAzB,CACHd,IAAKkB,CAAAA,GAAIC,CAAAA,OAAQC,CAAAA,GADd,EACmB,IAAKC,CAAAA,WAAL,EADnB,CAAP;AAFsE,CAAxE;AAgBArB,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBQ,CAAAA,SAAUS,CAAAA,QAAxC,GAAmDC,QAAQ,CACvDP,SADuD,EAC5CQ,OAD4C,CACnC;AAGtB,MAAIA,OAAQC,CAAAA,EAAZ;AACET,aAAUU,CAAAA,KAAV,CAAgBF,OAAQC,CAAAA,EAAxB,CAAA;AADF;AAIA,MAAID,OAAQG,CAAAA,OAAZ,IAAuB3B,IAAKkB,CAAAA,GAAIC,CAAAA,OAAQS,CAAAA,EAAxC,CAA4C;AAE1C,QAAIC,KAAKL,OAAT;AACAA,WAAA,GAAU,IAAKV,CAAAA,SAAL,CAAeE,SAAf,CAAV;AACAhB,QAAKkB,CAAAA,GAAIY,CAAAA,mBAAT,CAA6BN,OAA7B,EAAsCK,EAAtC,CAAA;AACA7B,QAAKkB,CAAAA,GAAIa,CAAAA,UAAT,CAAoBF,EAApB,CAAA;AAL0C,GAA5C;AAOE7B,QAAKkB,CAAAA,GAAIc,CAAAA,SAAUC,CAAAA,GAAnB,CAAuBT,OAAvB,EAAgC,IAAKH,CAAAA,WAAL,EAAhC,CAAA;AAPF;AASA,SAAOG,OAAP;AAhBsB,CADxB;AA6BAxB,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBQ,CAAAA,SAAUqB,CAAAA,UAAxC,GAAqDC,QAAQ,CACzDnB,SADyD,EAC9CoB,OAD8C,CACrC;CADxB;AAYApC,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBQ,CAAAA,SAAUQ,CAAAA,WAAxC,GAAsDgB,QAAQ,EAAG;AAE/D,SAAOrC,IAAKI,CAAAA,EAAGC,CAAAA,qBAAsBM,CAAAA,SAArC;AAF+D,CAAjE;;\",\n\"sources\":[\"goog/ui/menuseparatorrenderer.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Renderer for {@link goog.ui.MenuSeparator}s.\\n * @suppress {missingRequire} TODO(user): this shouldn't be needed\\n */\\n\\ngoog.provide('goog.ui.MenuSeparatorRenderer');\\n\\ngoog.require('goog.dom');\\ngoog.require('goog.dom.TagName');\\ngoog.require('goog.dom.classlist');\\ngoog.require('goog.ui.ControlRenderer');\\ngoog.requireType('goog.ui.ControlContent');\\n\\n\\n\\n/**\\n * Renderer for menu separators.\\n * @constructor\\n * @extends {goog.ui.ControlRenderer}\\n */\\ngoog.ui.MenuSeparatorRenderer = function() {\\n  'use strict';\\n  goog.ui.ControlRenderer.call(this);\\n};\\ngoog.inherits(goog.ui.MenuSeparatorRenderer, goog.ui.ControlRenderer);\\ngoog.addSingletonGetter(goog.ui.MenuSeparatorRenderer);\\n\\n\\n/**\\n * Default CSS class to be applied to the root element of components rendered\\n * by this renderer.\\n * @type {string}\\n */\\ngoog.ui.MenuSeparatorRenderer.CSS_CLASS = goog.getCssName('goog-menuseparator');\\n\\n\\n/**\\n * Returns an empty, styled menu separator DIV.  Overrides {@link\\n * goog.ui.ControlRenderer#createDom}.\\n * @param {goog.ui.Control} separator goog.ui.Separator to render.\\n * @return {!Element} Root element for the separator.\\n * @override\\n */\\ngoog.ui.MenuSeparatorRenderer.prototype.createDom = function(separator) {\\n  'use strict';\\n  return separator.getDomHelper().createDom(\\n      goog.dom.TagName.DIV, this.getCssClass());\\n};\\n\\n\\n/**\\n * Takes an existing element, and decorates it with the separator.  Overrides\\n * {@link goog.ui.ControlRenderer#decorate}.\\n * @param {goog.ui.Control} separator goog.ui.MenuSeparator to decorate the\\n *     element.\\n * @param {Element} element Element to decorate.\\n * @return {!Element} Decorated element.\\n * @override\\n */\\ngoog.ui.MenuSeparatorRenderer.prototype.decorate = function(\\n    separator, element) {\\n  'use strict';\\n  // Normally handled in the superclass. But we don't call the superclass.\\n  if (element.id) {\\n    separator.setId(element.id);\\n  }\\n\\n  if (element.tagName == goog.dom.TagName.HR) {\\n    // Replace HR with separator.\\n    var hr = element;\\n    element = this.createDom(separator);\\n    goog.dom.insertSiblingBefore(element, hr);\\n    goog.dom.removeNode(hr);\\n  } else {\\n    goog.dom.classlist.add(element, this.getCssClass());\\n  }\\n  return element;\\n};\\n\\n\\n/**\\n * Overrides {@link goog.ui.ControlRenderer#setContent} to do nothing, since\\n * separators are empty.\\n * @param {Element} separator The separator's root element.\\n * @param {goog.ui.ControlContent} content Text caption or DOM structure to be\\n *    set as the separators's content (ignored).\\n * @override\\n */\\ngoog.ui.MenuSeparatorRenderer.prototype.setContent = function(\\n    separator, content) {\\n  // Do nothing.  Separators are empty.\\n};\\n\\n\\n/**\\n * Returns the CSS class to be applied to the root element of components\\n * rendered using this renderer.\\n * @return {string} Renderer-specific CSS class.\\n * @override\\n */\\ngoog.ui.MenuSeparatorRenderer.prototype.getCssClass = function() {\\n  'use strict';\\n  return goog.ui.MenuSeparatorRenderer.CSS_CLASS;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"ui\",\"MenuSeparatorRenderer\",\"goog.ui.MenuSeparatorRenderer\",\"ControlRenderer\",\"call\",\"inherits\",\"addSingletonGetter\",\"CSS_CLASS\",\"getCssName\",\"prototype\",\"createDom\",\"goog.ui.MenuSeparatorRenderer.prototype.createDom\",\"separator\",\"getDomHelper\",\"dom\",\"TagName\",\"DIV\",\"getCssClass\",\"decorate\",\"goog.ui.MenuSeparatorRenderer.prototype.decorate\",\"element\",\"id\",\"setId\",\"tagName\",\"HR\",\"hr\",\"insertSiblingBefore\",\"removeNode\",\"classlist\",\"add\",\"setContent\",\"goog.ui.MenuSeparatorRenderer.prototype.setContent\",\"content\",\"goog.ui.MenuSeparatorRenderer.prototype.getCssClass\"]\n}\n"]