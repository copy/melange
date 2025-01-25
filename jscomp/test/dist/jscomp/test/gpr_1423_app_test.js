// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Gpr_1423_nav = require("./gpr_1423_nav.js");
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

function foo(f) {
  console.log(Curry._2(f, "a1", undefined));
}

foo(function (param) {
  return function (param$1) {
    return Gpr_1423_nav.busted(param, "a2", param$1);
  };
});

function foo2(f) {
  return Curry._2(f, "a1", undefined);
}

eq("File \"jscomp/test/gpr_1423_app_test.ml\", line 18, characters 7-14", "a1a2", "a1a2");

Mt.from_pair_suites("Gpr_1423_app_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  foo,
  foo2,
}
/*  Not a pure module */
