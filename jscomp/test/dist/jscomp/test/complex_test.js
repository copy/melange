// Generated by Melange
'use strict';

const Mt = require("./mt.js");
const Stdlib__Complex = require("melange/complex.js");

const suites_0 = [
  "basic_add",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: {
                re: 2,
                im: 2
              },
              _1: Stdlib__Complex.add(Stdlib__Complex.add(Stdlib__Complex.add(Stdlib__Complex.one, Stdlib__Complex.one), Stdlib__Complex.i), Stdlib__Complex.i)
            };
    })
];

const suites = {
  hd: suites_0,
  tl: /* [] */0
};

Mt.from_pair_suites("Complex_test", suites);

exports.suites = suites;
/*  Not a pure module */
