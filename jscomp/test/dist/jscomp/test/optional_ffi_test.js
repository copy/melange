// Generated by Melange
'use strict';

let Caml_option = require("melange.js/caml_option.js");
let Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, param) {
  const y = param[1];
  const x = param[0];
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

function hey(x, y) {
    if (x === void 0) { x = 3; }
    return x + y;
  }
;

const u = hey(undefined, 3);

const z = hey(5, 3);

eq("File \"jscomp/test/optional_ffi_test.ml\", line 23, characters 5-12", [
      [
        u,
        z
      ],
      [
        6,
        8
      ]
    ]);

const counter = {
  contents: 0
};

function side_effect(x) {
  x.contents = x.contents + 1 | 0;
  return x.contents;
}

function bug_to_fix(f, x) {
  return hey(f(x), 3);
}

function bug_to_fix2(f, x) {
  return hey(Caml_option.option_get(f(x)), 3);
}

const counter2 = {
  contents: 0
};

function side_effect2(x) {
  x.contents = x.contents + 1 | 0;
  return x.contents;
}

const v = bug_to_fix(side_effect, counter);

const pair_0 = [
  v,
  counter.contents
];

const pair_1 = [
  4,
  1
];

const pair = [
  pair_0,
  pair_1
];

const v2 = bug_to_fix2(side_effect2, counter2);

const pair2_0 = [
  v2,
  counter.contents
];

const pair2_1 = [
  4,
  1
];

const pair2 = [
  pair2_0,
  pair2_1
];

eq("File \"jscomp/test/optional_ffi_test.ml\", line 43, characters 5-12", pair);

eq("File \"jscomp/test/optional_ffi_test.ml\", line 44, characters 5-12", pair2);

function heystr(x, y) {
    if (x === void 0) { x = "3"; }
    return x + y;
  }
;

const pair_1$1 = heystr("name", "4");

const pair$1 = [
  "name4",
  pair_1$1
];

eq("File \"jscomp/test/optional_ffi_test.ml\", line 58, characters 5-12", pair$1);

Mt.from_pair_suites("Optional_ffi_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.u = u;
exports.z = z;
exports.counter = counter;
exports.side_effect = side_effect;
exports.bug_to_fix = bug_to_fix;
exports.bug_to_fix2 = bug_to_fix2;
exports.counter2 = counter2;
exports.side_effect2 = side_effect2;
/*  Not a pure module */
