'use strict';

const rule = require('..').rules.buffer_constructor;

var eslint;
try {
  eslint = require('eslint');
} catch (err) {
  console.error('eslint is not installed. cannot test');
  process.exit(1);
}

const RuleTester = eslint.RuleTester;

const msg = 'Use of the Buffer() constructor has been deprecated. ' +
            'Please use either Buffer.alloc(), Buffer.allocUnsafe(), ' +
            'or Buffer.from()';

const tester = new RuleTester();

tester.run('buffer_constructor', rule, {
  valid: [
    'Buffer.alloc(10)',
    'Buffer.allocUnsafe(10)',
    'Buffer.from("test")'
  ],

  invalid: [
    {
      code: 'Buffer(10)',
      errors: [{message: msg}]
    },
    {
      code: 'new Buffer(10)',
      errors: [{message: msg}]
    },
    {
      code: 'Buffer("test")',
      errors: [{message: msg}]
    }
  ]
});
