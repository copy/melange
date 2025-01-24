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

const uu = {
  "'x": 3
};

const uu2 = {
  then: 1,
  catch: 2,
  "'x": 3
};

const hh = uu["'x"];

eq("File \"jscomp/test/gpr_459_test.ml\", line 25, characters 12-19", hh, 3);

eq("File \"jscomp/test/gpr_459_test.ml\", line 28, characters 5-12", [
      1,
      2,
      3
    ], [
      uu2.then,
      uu2.catch,
      uu2["'x"]
    ]);

Mt.from_pair_suites("Gpr_459_test", suites.contents);
/* hh Not a pure module */
