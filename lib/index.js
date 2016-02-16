/**
 * @fileoverview Eslint rules for angular project of TETRIS
 * @author jimmytheneutrino
 * @copyright 2016 jimmytheneutrino. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
  'on-destroy': require('./rules/on-destroy')
}
