/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @format
 * 
 */

'use strict';

var gkx = require('./gkx');

var experimentalTreeDataSupport = gkx('draft_tree_data_support');

module.exports = experimentalTreeDataSupport ? require('./DraftEditorContentsExperimental.react') : require('./DraftEditorContents-core.react');