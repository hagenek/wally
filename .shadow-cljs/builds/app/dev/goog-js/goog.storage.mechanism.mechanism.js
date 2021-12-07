["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/storage/mechanism/mechanism.js"],"~:js","goog.provide(\"goog.storage.mechanism.Mechanism\");\ngoog.storage.mechanism.Mechanism = function() {\n};\ngoog.storage.mechanism.Mechanism.prototype.set = function(key, value) {\n};\ngoog.storage.mechanism.Mechanism.prototype.get = function(key) {\n};\ngoog.storage.mechanism.Mechanism.prototype.remove = function(key) {\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Abstract interface for storing and retrieving data using\n * some persistence mechanism.\n */\n\ngoog.provide('goog.storage.mechanism.Mechanism');\n\n\n\n/**\n * Basic interface for all storage mechanisms.\n *\n * @constructor\n * @struct\n * @abstract\n */\ngoog.storage.mechanism.Mechanism = function() {};\n\n\n/**\n * Set a value for a key.\n *\n * @param {string} key The key to set.\n * @param {string} value The string to save.\n * @abstract\n */\ngoog.storage.mechanism.Mechanism.prototype.set = function(key, value) {};\n\n\n/**\n * Get the value stored under a key.\n *\n * @param {string} key The key to get.\n * @return {?string} The corresponding value, null if not found.\n * @abstract\n */\ngoog.storage.mechanism.Mechanism.prototype.get = function(key) {};\n\n\n/**\n * Remove a key and its value.\n *\n * @param {string} key The key to remove.\n * @abstract\n */\ngoog.storage.mechanism.Mechanism.prototype.remove = function(key) {};\n","~:compiled-at",1638904245534,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.storage.mechanism.mechanism.js\",\n\"lineCount\":10,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,kCAAb,CAAA;AAWAD,IAAKE,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,SAAvB,GAAmCC,QAAQ,EAAG;CAA9C;AAUAL,IAAKE,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,SAAUE,CAAAA,SAAUC,CAAAA,GAA3C,GAAiDC,QAAQ,CAACC,GAAD,EAAMC,KAAN,CAAa;CAAtE;AAUAV,IAAKE,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,SAAUE,CAAAA,SAAUK,CAAAA,GAA3C,GAAiDC,QAAQ,CAACH,GAAD,CAAM;CAA/D;AASAT,IAAKE,CAAAA,OAAQC,CAAAA,SAAUC,CAAAA,SAAUE,CAAAA,SAAUO,CAAAA,MAA3C,GAAoDC,QAAQ,CAACL,GAAD,CAAM;CAAlE;;\",\n\"sources\":[\"goog/storage/mechanism/mechanism.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Abstract interface for storing and retrieving data using\\n * some persistence mechanism.\\n */\\n\\ngoog.provide('goog.storage.mechanism.Mechanism');\\n\\n\\n\\n/**\\n * Basic interface for all storage mechanisms.\\n *\\n * @constructor\\n * @struct\\n * @abstract\\n */\\ngoog.storage.mechanism.Mechanism = function() {};\\n\\n\\n/**\\n * Set a value for a key.\\n *\\n * @param {string} key The key to set.\\n * @param {string} value The string to save.\\n * @abstract\\n */\\ngoog.storage.mechanism.Mechanism.prototype.set = function(key, value) {};\\n\\n\\n/**\\n * Get the value stored under a key.\\n *\\n * @param {string} key The key to get.\\n * @return {?string} The corresponding value, null if not found.\\n * @abstract\\n */\\ngoog.storage.mechanism.Mechanism.prototype.get = function(key) {};\\n\\n\\n/**\\n * Remove a key and its value.\\n *\\n * @param {string} key The key to remove.\\n * @abstract\\n */\\ngoog.storage.mechanism.Mechanism.prototype.remove = function(key) {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"storage\",\"mechanism\",\"Mechanism\",\"goog.storage.mechanism.Mechanism\",\"prototype\",\"set\",\"goog.storage.mechanism.Mechanism.prototype.set\",\"key\",\"value\",\"get\",\"goog.storage.mechanism.Mechanism.prototype.get\",\"remove\",\"goog.storage.mechanism.Mechanism.prototype.remove\"]\n}\n"]