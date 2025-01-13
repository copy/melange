// Generated by Melange
'use strict';

const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
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
          TAG: /* Eq */0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

const u = 3;

function nullary() {
  return 3;
}

function unary(a) {
  return a + 3 | 0;
}

const xx = unary(3);

eq("File \"jscomp/test/ppx_apply_test.ml\", line 17, characters 5-12", u, 3);

function h(a) {
  return xx(a);
}

Mt.from_pair_suites("Ppx_apply_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.u = u;
exports.nullary = nullary;
exports.unary = unary;
exports.xx = xx;
exports.h = h;
/* u Not a pure module */
