// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
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

const u_a = 2;

const u_b = {
  xx: 2,
  yy: 3
};

const u = {
  a: u_a,
  b: u_b
};

const A = /* @__PURE__ */ Caml_exceptions.create("Record_debug_test.A");

const B = /* @__PURE__ */ Caml_exceptions.create("Record_debug_test.B");

const v0 = {
  MEL_EXN_ID: A,
  _1: 3
};

const v1 = {
  MEL_EXN_ID: B,
  _1: 3,
  _2: 2
};

const N = {
  a: 0,
  b: 1
};

function N0_f(prim) {
  return prim;
}

const N0 = {
  a: 0,
  b: 1,
  f: N0_f
};

const i = String(3);

const a_2 = "" + i;

const a_3 = "" + i + i;

const a_4 = "" + i + i + i;

const a_5 = " " + i;

const a = [
  "",
  "a",
  a_2,
  a_3,
  a_4,
  a_5
];

eq("File \"jscomp/test/record_debug_test.ml\", line 59, characters 3-10", a, [
  "",
  "a",
  "3",
  "33",
  "333",
  " 3"
]);

Mt.from_pair_suites("jscomp/test/record_debug_test.ml", suites.contents);

const v = {
  a: 3,
  b: {
    xx: 2,
    yy: 3
  }
};

const h = {
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: {
        hd: 4,
        tl: /* [] */ 0
      }
    }
  }
};

const v2 = {
  NAME: "C",
  VAL: 2
};

const v3 = {
  NAME: "C",
  VAL: [
    2,
    3
  ]
};

module.exports = {
  suites,
  test_id,
  eq,
  v,
  u,
  h,
  A,
  B,
  v0,
  v1,
  v2,
  v3,
  N,
  N0,
}
/* i Not a pure module */
