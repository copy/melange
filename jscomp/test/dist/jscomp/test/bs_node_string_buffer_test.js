// Generated by Melange
'use strict';

const $$Node = require("melange.node/node.js");

function f(str) {
  const match = $$Node.test(str);
  if (match[0] === /* String */ 0) {
    console.log([
      "string",
      match[1]
    ]);
    return;
  }
  console.log([
    "buffer",
    Buffer.isBuffer(match[1])
  ]);
}

f("xx");

f((Buffer.from ('xx')
));

module.exports = {
  f,
}
/*  Not a pure module */
