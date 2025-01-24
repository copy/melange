// Generated by Melange
'use strict';

const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");

const v = (Number.EPSILON?Number.EPSILON:2.220446049250313e-16
);

const suites_0 = [
  "epsilon",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: Stdlib.epsilon_float,
      _1: v
    };
  })
];

const suites_1 = {
  hd: [
    "raw_epsilon",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: 2.220446049250313e-16,
        _1: v
      };
    })
  ],
  tl: /* [] */ 0
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Epsilon_test", suites);

module.exports = {
  v,
  suites,
}
/* v Not a pure module */
