// Generated by Melange
'use strict';

const Caml_obj = require("melange.js/caml_obj.js");
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

function f(param) {
  const x = new Date();
  const y = new Date();
  return [
    Caml_obj.caml_greaterthan(y, x),
    Caml_obj.caml_lessthan(y, x),
    true
  ];
}

const match = f(undefined);

const a2 = match[2];

const a1 = match[1];

const a0 = match[0];

console.log(a0, a1);

eq("File \"jscomp/test/gpr_1817_test.ml\", line 19, characters 6-13", a2, true);

Mt.from_pair_suites("Gpr_1817_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
exports.a0 = a0;
exports.a1 = a1;
exports.a2 = a2;
/* match Not a pure module */
