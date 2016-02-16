'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/on-destroy');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var eslintTester = new RuleTester();

eslintTester.run('on-destroy', rule, {
    valid: [
        'scope.$on("$destroy")',
        'scope.$watch("$destroy")',
        '$rootScope.$on("$destroy")',
        '$rootScope.$watch("$destroy")',
        'scope.$watch("destroy")'
    ],
    invalid: [
        {code: '$rootScope.$on("destroy")', errors: [{message: 'You probably misspelled $on("$destroy").'}]},
        {code: 'scope.$on("destroy")', errors: [{message: 'You probably misspelled $on("$destroy").'}]}
    ]
});
