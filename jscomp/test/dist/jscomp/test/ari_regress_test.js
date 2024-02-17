// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

const g = 7;

const h = {
  contents: 0
};

function g1(x, y) {
  const u = x + y | 0;
  h.contents = h.contents + 1 | 0;
  return function (xx, yy) {
    return (xx + yy | 0) + u | 0;
  };
}

const u = 8;

const x = u + 6 | 0;

const partial_arg = g1(3, 4);

function v(param) {
  return partial_arg(6, param);
}

const suites_0 = [
  "curry",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: g,
              _1: 7
            };
    })
];

const suites_1 = {
  hd: [
    "curry2",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: 14,
                _1: (Curry._1(v, 1), Curry._1(v, 1))
              };
      })
  ],
  tl: {
    hd: [
      "curry3",
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: 14
                };
        })
    ],
    tl: {
      hd: [
        "File \"jscomp/test/ari_regress_test.ml\", line 20, characters 4-11",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: h.contents,
                    _1: 1
                  };
          })
      ],
      tl: /* [] */0
    }
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Ari_regress_test", suites);

/* partial_arg Not a pure module */
