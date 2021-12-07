["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/ui/idgenerator.js"],"~:js","goog.provide(\"goog.ui.IdGenerator\");\ngoog.ui.IdGenerator = function() {\n};\ngoog.addSingletonGetter(goog.ui.IdGenerator);\ngoog.ui.IdGenerator.prototype.nextId_ = 0;\ngoog.ui.IdGenerator.prototype.idPrefix_ = \"\";\ngoog.ui.IdGenerator.prototype.setIdPrefix = function(idPrefix) {\n  this.idPrefix_ = idPrefix;\n};\ngoog.ui.IdGenerator.prototype.getNextUniqueId = function() {\n  return this.idPrefix_ + \":\" + (this.nextId_++).toString(36);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Generator for unique element IDs.\n */\n\ngoog.provide('goog.ui.IdGenerator');\n\n\n\n/**\n * Creates a new id generator.\n * @constructor\n * @final\n */\ngoog.ui.IdGenerator = function() {};\ngoog.addSingletonGetter(goog.ui.IdGenerator);\n\n\n/**\n * Next unique ID to use\n * @type {number}\n * @private\n */\ngoog.ui.IdGenerator.prototype.nextId_ = 0;\n\n\n/**\n * Random ID prefix to help avoid collisions with other closure JavaScript on\n * the same page that may initialize its own IdGenerator singleton.\n * @type {string}\n * @private\n */\ngoog.ui.IdGenerator.prototype.idPrefix_ = '';\n\n\n/**\n * Sets the ID prefix for this singleton. This is a temporary workaround to be\n * backwards compatible with code relying on the undocumented, but consistent,\n * behavior. In the future this will be removed and the prefix will be set to\n * a randomly generated string.\n * @param {string} idPrefix\n */\ngoog.ui.IdGenerator.prototype.setIdPrefix = function(idPrefix) {\n  'use strict';\n  this.idPrefix_ = idPrefix;\n};\n\n\n/**\n * Gets the next unique ID.\n * @return {string} The next unique identifier.\n */\ngoog.ui.IdGenerator.prototype.getNextUniqueId = function() {\n  'use strict';\n  return this.idPrefix_ + ':' + (this.nextId_++).toString(36);\n};\n","~:compiled-at",1638904245601,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.ui.idgenerator.js\",\n\"lineCount\":13,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,qBAAb,CAAA;AASAD,IAAKE,CAAAA,EAAGC,CAAAA,WAAR,GAAsBC,QAAQ,EAAG;CAAjC;AACAJ,IAAKK,CAAAA,kBAAL,CAAwBL,IAAKE,CAAAA,EAAGC,CAAAA,WAAhC,CAAA;AAQAH,IAAKE,CAAAA,EAAGC,CAAAA,WAAYG,CAAAA,SAAUC,CAAAA,OAA9B,GAAwC,CAAxC;AASAP,IAAKE,CAAAA,EAAGC,CAAAA,WAAYG,CAAAA,SAAUE,CAAAA,SAA9B,GAA0C,EAA1C;AAUAR,IAAKE,CAAAA,EAAGC,CAAAA,WAAYG,CAAAA,SAAUG,CAAAA,WAA9B,GAA4CC,QAAQ,CAACC,QAAD,CAAW;AAE7D,MAAKH,CAAAA,SAAL,GAAiBG,QAAjB;AAF6D,CAA/D;AAUAX,IAAKE,CAAAA,EAAGC,CAAAA,WAAYG,CAAAA,SAAUM,CAAAA,eAA9B,GAAgDC,QAAQ,EAAG;AAEzD,SAAO,IAAKL,CAAAA,SAAZ,GAAwB,GAAxB,GAA+CM,CAAhB,IAAKP,CAAAA,OAAL,EAAgBO,EAAAA,QAAjB,CAA0B,EAA1B,CAA9B;AAFyD,CAA3D;;\",\n\"sources\":[\"goog/ui/idgenerator.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Generator for unique element IDs.\\n */\\n\\ngoog.provide('goog.ui.IdGenerator');\\n\\n\\n\\n/**\\n * Creates a new id generator.\\n * @constructor\\n * @final\\n */\\ngoog.ui.IdGenerator = function() {};\\ngoog.addSingletonGetter(goog.ui.IdGenerator);\\n\\n\\n/**\\n * Next unique ID to use\\n * @type {number}\\n * @private\\n */\\ngoog.ui.IdGenerator.prototype.nextId_ = 0;\\n\\n\\n/**\\n * Random ID prefix to help avoid collisions with other closure JavaScript on\\n * the same page that may initialize its own IdGenerator singleton.\\n * @type {string}\\n * @private\\n */\\ngoog.ui.IdGenerator.prototype.idPrefix_ = '';\\n\\n\\n/**\\n * Sets the ID prefix for this singleton. This is a temporary workaround to be\\n * backwards compatible with code relying on the undocumented, but consistent,\\n * behavior. In the future this will be removed and the prefix will be set to\\n * a randomly generated string.\\n * @param {string} idPrefix\\n */\\ngoog.ui.IdGenerator.prototype.setIdPrefix = function(idPrefix) {\\n  'use strict';\\n  this.idPrefix_ = idPrefix;\\n};\\n\\n\\n/**\\n * Gets the next unique ID.\\n * @return {string} The next unique identifier.\\n */\\ngoog.ui.IdGenerator.prototype.getNextUniqueId = function() {\\n  'use strict';\\n  return this.idPrefix_ + ':' + (this.nextId_++).toString(36);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"ui\",\"IdGenerator\",\"goog.ui.IdGenerator\",\"addSingletonGetter\",\"prototype\",\"nextId_\",\"idPrefix_\",\"setIdPrefix\",\"goog.ui.IdGenerator.prototype.setIdPrefix\",\"idPrefix\",\"getNextUniqueId\",\"goog.ui.IdGenerator.prototype.getNextUniqueId\",\"toString\"]\n}\n"]