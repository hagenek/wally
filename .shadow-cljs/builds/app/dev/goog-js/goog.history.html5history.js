["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/history/html5history.js"],"~:js","goog.provide(\"goog.history.Html5History\");\ngoog.provide(\"goog.history.Html5History.TokenTransformer\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.events\");\ngoog.require(\"goog.events.EventTarget\");\ngoog.require(\"goog.events.EventType\");\ngoog.require(\"goog.history.Event\");\ngoog.requireType(\"goog.events.BrowserEvent\");\ngoog.history.Html5History = function(opt_win, opt_transformer) {\n  goog.events.EventTarget.call(this);\n  goog.asserts.assert(goog.history.Html5History.isSupported(opt_win), \"HTML5 history is not supported.\");\n  this.window_ = opt_win || window;\n  this.transformer_ = opt_transformer || null;\n  this.lastFragment_ = null;\n  goog.events.listen(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);\n  goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n};\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\ngoog.history.Html5History.isSupported = function(opt_win) {\n  var win = opt_win || window;\n  return !!(win.history && win.history.pushState);\n};\ngoog.history.Html5History.prototype.enabled_ = false;\ngoog.history.Html5History.prototype.useFragment_ = true;\ngoog.history.Html5History.prototype.pathPrefix_ = \"/\";\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\n  if (enable == this.enabled_) {\n    return;\n  }\n  this.enabled_ = enable;\n  if (enable) {\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\n  }\n};\ngoog.history.Html5History.prototype.getToken = function() {\n  if (this.useFragment_) {\n    return goog.asserts.assertString(this.getFragment_());\n  } else {\n    return this.transformer_ ? this.transformer_.retrieveToken(this.pathPrefix_, this.window_.location) : this.window_.location.pathname.substr(this.pathPrefix_.length);\n  }\n};\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\n  if (token == this.getToken()) {\n    return;\n  }\n  this.window_.history.pushState(null, opt_title || this.window_.document.title || \"\", this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\n  this.window_.history.replaceState(null, opt_title || this.window_.document.title || \"\", this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\ngoog.history.Html5History.prototype.disposeInternal = function() {\n  goog.events.unlisten(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);\n  if (this.useFragment_) {\n    goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n  }\n};\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\n  if (this.useFragment_ != useFragment) {\n    if (useFragment) {\n      goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n    } else {\n      goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);\n    }\n    this.useFragment_ = useFragment;\n  }\n};\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\n  this.pathPrefix_ = pathPrefix;\n};\ngoog.history.Html5History.prototype.getPathPrefix = function() {\n  return this.pathPrefix_;\n};\ngoog.history.Html5History.prototype.getFragment_ = function() {\n  if (this.useFragment_) {\n    var loc = this.window_.location.href;\n    var index = loc.indexOf(\"#\");\n    return index < 0 ? \"\" : loc.substring(index + 1);\n  } else {\n    return null;\n  }\n};\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\n  if (this.useFragment_) {\n    return \"#\" + token;\n  } else {\n    return this.transformer_ ? this.transformer_.createUrl(token, this.pathPrefix_, this.window_.location) : this.pathPrefix_ + token + this.window_.location.search;\n  }\n};\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\n  if (this.enabled_) {\n    var fragment = this.getFragment_();\n    if (e.type == goog.events.EventType.POPSTATE || fragment != this.lastFragment_) {\n      this.lastFragment_ = fragment;\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\n    }\n  }\n};\ngoog.history.Html5History.TokenTransformer = function() {\n};\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(pathPrefix, location) {\n};\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(token, pathPrefix, location) {\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview HTML5 based history implementation, compatible with\n * goog.History.\n *\n * TODO(user): There should really be a history interface and multiple\n * implementations.\n */\n\n\ngoog.provide('goog.history.Html5History');\ngoog.provide('goog.history.Html5History.TokenTransformer');\n\ngoog.require('goog.asserts');\ngoog.require('goog.events');\ngoog.require('goog.events.EventTarget');\ngoog.require('goog.events.EventType');\ngoog.require('goog.history.Event');\ngoog.requireType('goog.events.BrowserEvent');\n\n\n\n/**\n * An implementation compatible with goog.History that uses the HTML5\n * history APIs.\n *\n * @param {Window=} opt_win The window to listen/dispatch history events on.\n * @param {goog.history.Html5History.TokenTransformer=} opt_transformer\n *     The token transformer that is used to create URL from the token\n *     when storing token without using hash fragment.\n * @constructor\n * @extends {goog.events.EventTarget}\n * @final\n */\ngoog.history.Html5History = function(opt_win, opt_transformer) {\n  'use strict';\n  goog.events.EventTarget.call(this);\n  goog.asserts.assert(\n      goog.history.Html5History.isSupported(opt_win),\n      'HTML5 history is not supported.');\n\n  /**\n   * The window object to use for history tokens.  Typically the top window.\n   * @type {Window}\n   * @private\n   */\n  this.window_ = opt_win || window;\n\n  /**\n   * The token transformer that is used to create URL from the token\n   * when storing token without using hash fragment.\n   * @type {goog.history.Html5History.TokenTransformer}\n   * @private\n   */\n  this.transformer_ = opt_transformer || null;\n\n  /**\n   * The fragment of the last navigation. Used to eliminate duplicate/redundant\n   * NAVIGATE events when a POPSTATE and HASHCHANGE event are triggered for the\n   * same navigation (e.g., back button click).\n   * @private {?string}\n   */\n  this.lastFragment_ = null;\n\n  goog.events.listen(\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\n      this);\n  goog.events.listen(\n      this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n      false, this);\n};\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\n\n\n/**\n * Returns whether Html5History is supported.\n * @param {Window=} opt_win Optional window to check.\n * @return {boolean} Whether html5 history is supported.\n */\ngoog.history.Html5History.isSupported = function(opt_win) {\n  'use strict';\n  var win = opt_win || window;\n  return !!(win.history && win.history.pushState);\n};\n\n\n/**\n * Status of when the object is active and dispatching events.\n * @type {boolean}\n * @private\n */\ngoog.history.Html5History.prototype.enabled_ = false;\n\n\n/**\n * Whether to use the fragment to store the token, defaults to true.\n * @type {boolean}\n * @private\n */\ngoog.history.Html5History.prototype.useFragment_ = true;\n\n\n/**\n * If useFragment is false the path will be used, the path prefix will be\n * prepended to all tokens. Defaults to '/'.\n * @type {string}\n * @private\n */\ngoog.history.Html5History.prototype.pathPrefix_ = '/';\n\n\n/**\n * Starts or stops the History.  When enabled, the History object\n * will immediately fire an event for the current location. The caller can set\n * up event listeners between the call to the constructor and the call to\n * setEnabled.\n *\n * @param {boolean} enable Whether to enable history.\n */\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\n  'use strict';\n  if (enable == this.enabled_) {\n    return;\n  }\n\n  this.enabled_ = enable;\n\n  if (enable) {\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\n  }\n};\n\n\n/**\n * Returns the current token.\n * @return {string} The current token.\n */\ngoog.history.Html5History.prototype.getToken = function() {\n  'use strict';\n  if (this.useFragment_) {\n    return goog.asserts.assertString(this.getFragment_());\n  } else {\n    return this.transformer_ ?\n        this.transformer_.retrieveToken(\n            this.pathPrefix_, this.window_.location) :\n        this.window_.location.pathname.substr(this.pathPrefix_.length);\n  }\n};\n\n\n/**\n * Sets the history state.\n * @param {string} token The history state identifier.\n * @param {string=} opt_title Optional title to associate with history entry.\n */\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\n  'use strict';\n  if (token == this.getToken()) {\n    return;\n  }\n\n  // Per externs/gecko_dom.js document.title can be null.\n  this.window_.history.pushState(\n      null, opt_title || this.window_.document.title || '',\n      this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n\n\n/**\n * Replaces the current history state without affecting the rest of the history\n * stack.\n * @param {string} token The history state identifier.\n * @param {string=} opt_title Optional title to associate with history entry.\n */\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\n  'use strict';\n  // Per externs/gecko_dom.js document.title can be null.\n  this.window_.history.replaceState(\n      null, opt_title || this.window_.document.title || '',\n      this.getUrl_(token));\n  this.dispatchEvent(new goog.history.Event(token, false));\n};\n\n\n/** @override */\ngoog.history.Html5History.prototype.disposeInternal = function() {\n  'use strict';\n  goog.events.unlisten(\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\n      this);\n  if (this.useFragment_) {\n    goog.events.unlisten(\n        this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n        false, this);\n  }\n};\n\n\n/**\n * Sets whether to use the fragment to store tokens.\n * @param {boolean} useFragment Whether to use the fragment.\n */\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\n  'use strict';\n  if (this.useFragment_ != useFragment) {\n    if (useFragment) {\n      goog.events.listen(\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n          false, this);\n    } else {\n      goog.events.unlisten(\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\n          false, this);\n    }\n    this.useFragment_ = useFragment;\n  }\n};\n\n\n/**\n * Sets the path prefix to use if storing tokens in the path. The path\n * prefix should start and end with slash.\n * @param {string} pathPrefix Sets the path prefix.\n */\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\n  'use strict';\n  this.pathPrefix_ = pathPrefix;\n};\n\n\n/**\n * Gets the path prefix.\n * @return {string} The path prefix.\n */\ngoog.history.Html5History.prototype.getPathPrefix = function() {\n  'use strict';\n  return this.pathPrefix_;\n};\n\n\n/**\n * Gets the current hash fragment, if useFragment_ is enabled.\n * @return {?string} The hash fragment.\n * @private\n */\ngoog.history.Html5History.prototype.getFragment_ = function() {\n  'use strict';\n  if (this.useFragment_) {\n    var loc = this.window_.location.href;\n    var index = loc.indexOf('#');\n    return index < 0 ? '' : loc.substring(index + 1);\n  } else {\n    return null;\n  }\n};\n\n\n/**\n * Gets the URL to set when calling history.pushState\n * @param {string} token The history token.\n * @return {string} The URL.\n * @private\n */\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\n  'use strict';\n  if (this.useFragment_) {\n    return '#' + token;\n  } else {\n    return this.transformer_ ?\n        this.transformer_.createUrl(\n            token, this.pathPrefix_, this.window_.location) :\n        this.pathPrefix_ + token + this.window_.location.search;\n  }\n};\n\n\n/**\n * Handles history events dispatched by the browser.\n * @param {goog.events.BrowserEvent} e The browser event object.\n * @private\n */\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\n  'use strict';\n  if (this.enabled_) {\n    var fragment = this.getFragment_();\n    // Only fire NAVIGATE event if it's POPSTATE or if the fragment has changed\n    // without a POPSTATE event. The latter is an indication the browser doesn't\n    // support POPSTATE, and the event is a HASHCHANGE instead.\n    if (e.type == goog.events.EventType.POPSTATE ||\n        fragment != this.lastFragment_) {\n      this.lastFragment_ = fragment;\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\n    }\n  }\n};\n\n\n\n/**\n * A token transformer that can create a URL from a history\n * token. This is used by `goog.history.Html5History` to create\n * URL when storing token without the hash fragment.\n *\n * Given a `window.location` object containing the location\n * created by `createUrl`, the token transformer allows\n * retrieval of the token back via `retrieveToken`.\n *\n * @interface\n */\ngoog.history.Html5History.TokenTransformer = function() {};\n\n\n/**\n * Retrieves a history token given the path prefix and\n * `window.location` object.\n *\n * @param {string} pathPrefix The path prefix to use when storing token\n *     in a path; always begin with a slash.\n * @param {Location} location The `window.location` object.\n *     Treat this object as read-only.\n * @return {string} token The history token.\n */\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(\n    pathPrefix, location) {};\n\n\n/**\n * Creates a URL to be pushed into HTML5 history stack when storing\n * token without using hash fragment.\n *\n * @param {string} token The history token.\n * @param {string} pathPrefix The path prefix to use when storing token\n *     in a path; always begin with a slash.\n * @param {Location} location The `window.location` object.\n *     Treat this object as read-only.\n * @return {string} url The complete URL string from path onwards\n *     (without {@code protocol://host:port} part); must begin with a\n *     slash.\n */\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(\n    token, pathPrefix, location) {};\n","~:compiled-at",1638904245743,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.history.html5history.js\",\n\"lineCount\":106,\n\"mappings\":\"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\",\n\"sources\":[\"goog/history/html5history.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview HTML5 based history implementation, compatible with\\n * goog.History.\\n *\\n * TODO(user): There should really be a history interface and multiple\\n * implementations.\\n */\\n\\n\\ngoog.provide('goog.history.Html5History');\\ngoog.provide('goog.history.Html5History.TokenTransformer');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.events');\\ngoog.require('goog.events.EventTarget');\\ngoog.require('goog.events.EventType');\\ngoog.require('goog.history.Event');\\ngoog.requireType('goog.events.BrowserEvent');\\n\\n\\n\\n/**\\n * An implementation compatible with goog.History that uses the HTML5\\n * history APIs.\\n *\\n * @param {Window=} opt_win The window to listen/dispatch history events on.\\n * @param {goog.history.Html5History.TokenTransformer=} opt_transformer\\n *     The token transformer that is used to create URL from the token\\n *     when storing token without using hash fragment.\\n * @constructor\\n * @extends {goog.events.EventTarget}\\n * @final\\n */\\ngoog.history.Html5History = function(opt_win, opt_transformer) {\\n  'use strict';\\n  goog.events.EventTarget.call(this);\\n  goog.asserts.assert(\\n      goog.history.Html5History.isSupported(opt_win),\\n      'HTML5 history is not supported.');\\n\\n  /**\\n   * The window object to use for history tokens.  Typically the top window.\\n   * @type {Window}\\n   * @private\\n   */\\n  this.window_ = opt_win || window;\\n\\n  /**\\n   * The token transformer that is used to create URL from the token\\n   * when storing token without using hash fragment.\\n   * @type {goog.history.Html5History.TokenTransformer}\\n   * @private\\n   */\\n  this.transformer_ = opt_transformer || null;\\n\\n  /**\\n   * The fragment of the last navigation. Used to eliminate duplicate/redundant\\n   * NAVIGATE events when a POPSTATE and HASHCHANGE event are triggered for the\\n   * same navigation (e.g., back button click).\\n   * @private {?string}\\n   */\\n  this.lastFragment_ = null;\\n\\n  goog.events.listen(\\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\\n      this);\\n  goog.events.listen(\\n      this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n      false, this);\\n};\\ngoog.inherits(goog.history.Html5History, goog.events.EventTarget);\\n\\n\\n/**\\n * Returns whether Html5History is supported.\\n * @param {Window=} opt_win Optional window to check.\\n * @return {boolean} Whether html5 history is supported.\\n */\\ngoog.history.Html5History.isSupported = function(opt_win) {\\n  'use strict';\\n  var win = opt_win || window;\\n  return !!(win.history && win.history.pushState);\\n};\\n\\n\\n/**\\n * Status of when the object is active and dispatching events.\\n * @type {boolean}\\n * @private\\n */\\ngoog.history.Html5History.prototype.enabled_ = false;\\n\\n\\n/**\\n * Whether to use the fragment to store the token, defaults to true.\\n * @type {boolean}\\n * @private\\n */\\ngoog.history.Html5History.prototype.useFragment_ = true;\\n\\n\\n/**\\n * If useFragment is false the path will be used, the path prefix will be\\n * prepended to all tokens. Defaults to '/'.\\n * @type {string}\\n * @private\\n */\\ngoog.history.Html5History.prototype.pathPrefix_ = '/';\\n\\n\\n/**\\n * Starts or stops the History.  When enabled, the History object\\n * will immediately fire an event for the current location. The caller can set\\n * up event listeners between the call to the constructor and the call to\\n * setEnabled.\\n *\\n * @param {boolean} enable Whether to enable history.\\n */\\ngoog.history.Html5History.prototype.setEnabled = function(enable) {\\n  'use strict';\\n  if (enable == this.enabled_) {\\n    return;\\n  }\\n\\n  this.enabled_ = enable;\\n\\n  if (enable) {\\n    this.dispatchEvent(new goog.history.Event(this.getToken(), false));\\n  }\\n};\\n\\n\\n/**\\n * Returns the current token.\\n * @return {string} The current token.\\n */\\ngoog.history.Html5History.prototype.getToken = function() {\\n  'use strict';\\n  if (this.useFragment_) {\\n    return goog.asserts.assertString(this.getFragment_());\\n  } else {\\n    return this.transformer_ ?\\n        this.transformer_.retrieveToken(\\n            this.pathPrefix_, this.window_.location) :\\n        this.window_.location.pathname.substr(this.pathPrefix_.length);\\n  }\\n};\\n\\n\\n/**\\n * Sets the history state.\\n * @param {string} token The history state identifier.\\n * @param {string=} opt_title Optional title to associate with history entry.\\n */\\ngoog.history.Html5History.prototype.setToken = function(token, opt_title) {\\n  'use strict';\\n  if (token == this.getToken()) {\\n    return;\\n  }\\n\\n  // Per externs/gecko_dom.js document.title can be null.\\n  this.window_.history.pushState(\\n      null, opt_title || this.window_.document.title || '',\\n      this.getUrl_(token));\\n  this.dispatchEvent(new goog.history.Event(token, false));\\n};\\n\\n\\n/**\\n * Replaces the current history state without affecting the rest of the history\\n * stack.\\n * @param {string} token The history state identifier.\\n * @param {string=} opt_title Optional title to associate with history entry.\\n */\\ngoog.history.Html5History.prototype.replaceToken = function(token, opt_title) {\\n  'use strict';\\n  // Per externs/gecko_dom.js document.title can be null.\\n  this.window_.history.replaceState(\\n      null, opt_title || this.window_.document.title || '',\\n      this.getUrl_(token));\\n  this.dispatchEvent(new goog.history.Event(token, false));\\n};\\n\\n\\n/** @override */\\ngoog.history.Html5History.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.events.unlisten(\\n      this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false,\\n      this);\\n  if (this.useFragment_) {\\n    goog.events.unlisten(\\n        this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n        false, this);\\n  }\\n};\\n\\n\\n/**\\n * Sets whether to use the fragment to store tokens.\\n * @param {boolean} useFragment Whether to use the fragment.\\n */\\ngoog.history.Html5History.prototype.setUseFragment = function(useFragment) {\\n  'use strict';\\n  if (this.useFragment_ != useFragment) {\\n    if (useFragment) {\\n      goog.events.listen(\\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n          false, this);\\n    } else {\\n      goog.events.unlisten(\\n          this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_,\\n          false, this);\\n    }\\n    this.useFragment_ = useFragment;\\n  }\\n};\\n\\n\\n/**\\n * Sets the path prefix to use if storing tokens in the path. The path\\n * prefix should start and end with slash.\\n * @param {string} pathPrefix Sets the path prefix.\\n */\\ngoog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {\\n  'use strict';\\n  this.pathPrefix_ = pathPrefix;\\n};\\n\\n\\n/**\\n * Gets the path prefix.\\n * @return {string} The path prefix.\\n */\\ngoog.history.Html5History.prototype.getPathPrefix = function() {\\n  'use strict';\\n  return this.pathPrefix_;\\n};\\n\\n\\n/**\\n * Gets the current hash fragment, if useFragment_ is enabled.\\n * @return {?string} The hash fragment.\\n * @private\\n */\\ngoog.history.Html5History.prototype.getFragment_ = function() {\\n  'use strict';\\n  if (this.useFragment_) {\\n    var loc = this.window_.location.href;\\n    var index = loc.indexOf('#');\\n    return index < 0 ? '' : loc.substring(index + 1);\\n  } else {\\n    return null;\\n  }\\n};\\n\\n\\n/**\\n * Gets the URL to set when calling history.pushState\\n * @param {string} token The history token.\\n * @return {string} The URL.\\n * @private\\n */\\ngoog.history.Html5History.prototype.getUrl_ = function(token) {\\n  'use strict';\\n  if (this.useFragment_) {\\n    return '#' + token;\\n  } else {\\n    return this.transformer_ ?\\n        this.transformer_.createUrl(\\n            token, this.pathPrefix_, this.window_.location) :\\n        this.pathPrefix_ + token + this.window_.location.search;\\n  }\\n};\\n\\n\\n/**\\n * Handles history events dispatched by the browser.\\n * @param {goog.events.BrowserEvent} e The browser event object.\\n * @private\\n */\\ngoog.history.Html5History.prototype.onHistoryEvent_ = function(e) {\\n  'use strict';\\n  if (this.enabled_) {\\n    var fragment = this.getFragment_();\\n    // Only fire NAVIGATE event if it's POPSTATE or if the fragment has changed\\n    // without a POPSTATE event. The latter is an indication the browser doesn't\\n    // support POPSTATE, and the event is a HASHCHANGE instead.\\n    if (e.type == goog.events.EventType.POPSTATE ||\\n        fragment != this.lastFragment_) {\\n      this.lastFragment_ = fragment;\\n      this.dispatchEvent(new goog.history.Event(this.getToken(), true));\\n    }\\n  }\\n};\\n\\n\\n\\n/**\\n * A token transformer that can create a URL from a history\\n * token. This is used by `goog.history.Html5History` to create\\n * URL when storing token without the hash fragment.\\n *\\n * Given a `window.location` object containing the location\\n * created by `createUrl`, the token transformer allows\\n * retrieval of the token back via `retrieveToken`.\\n *\\n * @interface\\n */\\ngoog.history.Html5History.TokenTransformer = function() {};\\n\\n\\n/**\\n * Retrieves a history token given the path prefix and\\n * `window.location` object.\\n *\\n * @param {string} pathPrefix The path prefix to use when storing token\\n *     in a path; always begin with a slash.\\n * @param {Location} location The `window.location` object.\\n *     Treat this object as read-only.\\n * @return {string} token The history token.\\n */\\ngoog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(\\n    pathPrefix, location) {};\\n\\n\\n/**\\n * Creates a URL to be pushed into HTML5 history stack when storing\\n * token without using hash fragment.\\n *\\n * @param {string} token The history token.\\n * @param {string} pathPrefix The path prefix to use when storing token\\n *     in a path; always begin with a slash.\\n * @param {Location} location The `window.location` object.\\n *     Treat this object as read-only.\\n * @return {string} url The complete URL string from path onwards\\n *     (without {@code protocol://host:port} part); must begin with a\\n *     slash.\\n */\\ngoog.history.Html5History.TokenTransformer.prototype.createUrl = function(\\n    token, pathPrefix, location) {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"history\",\"Html5History\",\"goog.history.Html5History\",\"opt_win\",\"opt_transformer\",\"events\",\"EventTarget\",\"call\",\"asserts\",\"assert\",\"isSupported\",\"window_\",\"window\",\"transformer_\",\"lastFragment_\",\"listen\",\"EventType\",\"POPSTATE\",\"onHistoryEvent_\",\"HASHCHANGE\",\"inherits\",\"goog.history.Html5History.isSupported\",\"win\",\"pushState\",\"prototype\",\"enabled_\",\"useFragment_\",\"pathPrefix_\",\"setEnabled\",\"goog.history.Html5History.prototype.setEnabled\",\"enable\",\"dispatchEvent\",\"Event\",\"getToken\",\"goog.history.Html5History.prototype.getToken\",\"assertString\",\"getFragment_\",\"retrieveToken\",\"location\",\"pathname\",\"substr\",\"length\",\"setToken\",\"goog.history.Html5History.prototype.setToken\",\"token\",\"opt_title\",\"document\",\"title\",\"getUrl_\",\"replaceToken\",\"goog.history.Html5History.prototype.replaceToken\",\"replaceState\",\"disposeInternal\",\"goog.history.Html5History.prototype.disposeInternal\",\"unlisten\",\"setUseFragment\",\"goog.history.Html5History.prototype.setUseFragment\",\"useFragment\",\"setPathPrefix\",\"goog.history.Html5History.prototype.setPathPrefix\",\"pathPrefix\",\"getPathPrefix\",\"goog.history.Html5History.prototype.getPathPrefix\",\"goog.history.Html5History.prototype.getFragment_\",\"loc\",\"href\",\"index\",\"indexOf\",\"substring\",\"goog.history.Html5History.prototype.getUrl_\",\"createUrl\",\"search\",\"goog.history.Html5History.prototype.onHistoryEvent_\",\"e\",\"fragment\",\"type\",\"TokenTransformer\",\"goog.history.Html5History.TokenTransformer\",\"goog.history.Html5History.TokenTransformer.prototype.retrieveToken\",\"goog.history.Html5History.TokenTransformer.prototype.createUrl\"]\n}\n"]