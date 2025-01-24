// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Mt = require("./mt.js");
const Stdlib__Array = require("melange/array.js");

function f(param) {
  const f$1 = function (_acc, _n) {
    while (true) {
      const n = _n;
      const acc = _acc;
      if (n <= 0) {
        return acc;
      }
      _n = n - 1 | 0;
      _acc = acc + n | 0;
      continue;
    };
  };
  const v = Caml_array.make(10, 0);
  for (let i = 0; i <= 9; ++i) {
    Caml_array.set(v, i, f$1(0, i));
  }
  return v;
}

const suites_0 = [
  "acc",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: f(undefined),
      _1: [
        0,
        1,
        3,
        6,
        10,
        15,
        21,
        28,
        36,
        45
      ]
    };
  })
];

const suites_1 = {
  hd: [
    "array_to_list",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: {
          hd: 1,
          tl: {
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */ 0
            }
          }
        },
        _1: Stdlib__Array.to_list([
              1,
              2,
              3
            ])
      };
    })
  ],
  tl: /* [] */ 0
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Tailcall_inline_test", suites);

module.exports = {
  f,
  suites,
}
/*  Not a pure module */
