// Generated by Melange
'use strict';

const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

function f(x) {
  
}

function ff(x) {
  console.log(x);
}

eq("File \"jscomp/test/ignore_test.ml\", line 16, characters 5-12", undefined, undefined);

Mt.from_pair_suites("Ignore_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  f,
  ff,
}
/*  Not a pure module */
