// Generated by Melange
'use strict';

const Mt = require("./mt.js");
const Stdlib__String = require("melange/string.js");

function u(v) {
  return v;
}

const s = Stdlib__String;

const N = {
  s: s
};

function v(x) {
  return x.length;
}

const suites_0 = [
  "const",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: 1,
      _1: 1
    };
  })
];

const suites_1 = {
  hd: [
    "other",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: 3,
        _1: 3
      };
    })
  ],
  tl: /* [] */ 0
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Module_parameter_test", suites);

const v0 = 1;

module.exports = {
  u,
  N,
  v0,
  v,
  suites,
}
/*  Not a pure module */
