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
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function nextFor(x) {
  if (x !== undefined) {
    if (x === /* Required */ 0) {
      return /* Optional */ 1;
    } else {
      return;
    }
  } else {
    return /* Required */ 0;
  }
}

eq("File \"jscomp/test/gpr_4519_test.ml\", line 17, characters 6-13", nextFor(/* Required */ 0), /* Optional */ 1);

Mt.from_pair_suites("Gpr_4519_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  nextFor,
}
/*  Not a pure module */
