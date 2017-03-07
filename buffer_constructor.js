/**
 * @fileoverview Require use of new Buffer constructor methods in lib
 * @author James M Snell
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const msg = 'Use of the Buffer() constructor has been deprecated. ' +
            'Please use either Buffer.alloc(), Buffer.allocUnsafe(), ' +
            'or Buffer.from()';

function test(context, node) {
  if (node.callee.name === 'Buffer') {
    context.report(node, msg);
  }
}

module.exports = {
  meta: {
    docs: {
      description: 'disallow use of Buffer constructor',
      category: 'Deprecated Code',
      recommended: true
    },
    fixable: 'code',
    schema: []
  },
  create: (context) => {
    return {
      'NewExpression': (node) => test(context, node),
      'CallExpression': (node) => test(context, node)
    };
  }
};
