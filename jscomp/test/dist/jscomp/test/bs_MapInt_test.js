// Generated by Melange
'use strict';

const Belt__Belt_MapInt = require("melange.belt/belt_MapInt.js");
const Js__Js_exn = require("melange.js/js_exn.js");

function should(b) {
  if (!b) {
    return Js__Js_exn.raiseError("IMPOSSIBLE");
  }
  
}

function test(param) {
  let m;
  for (let i = 0; i <= 999999; ++i) {
    m = Belt__Belt_MapInt.set(m, i, i);
  }
  for (let i$1 = 0; i$1 <= 999999; ++i$1) {
    should(Belt__Belt_MapInt.get(m, i$1) !== undefined);
  }
  for (let i$2 = 0; i$2 <= 999999; ++i$2) {
    m = Belt__Belt_MapInt.remove(m, i$2);
  }
  should(Belt__Belt_MapInt.isEmpty(m));
}

test(undefined);

module.exports = {
  should,
  test,
}
/*  Not a pure module */
