// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Mt_global = require("./mt_global.js");
const Stdlib__Scanf = require("melange/scanf.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(f, param) {
  Mt_global.collect_eq(test_id, suites, f, param[0], param[1]);
}

eq("File \"jscomp/test/scanf_test.ml\", line 6, characters 5-12", [
      Curry._1(Stdlib__Scanf.sscanf("32 31", {
                TAG: /* Format */0,
                _0: {
                  TAG: /* Int */4,
                  _0: /* Int_d */0,
                  _1: /* No_padding */0,
                  _2: /* No_precision */0,
                  _3: {
                    TAG: /* Char_literal */12,
                    _0: /* ' ' */32,
                    _1: {
                      TAG: /* Int */4,
                      _0: /* Int_d */0,
                      _1: /* No_padding */0,
                      _2: /* No_precision */0,
                      _3: /* End_of_format */0
                    }
                  }
                },
                _1: "%d %d"
              }), (function (x, y) {
              return x + y | 0;
            })),
      63
    ]);

eq("File \"jscomp/test/scanf_test.ml\", line 7, characters 5-12", [
      Curry._1(Stdlib__Scanf.sscanf("12306459064359371967", {
                TAG: /* Format */0,
                _0: {
                  TAG: /* Int64 */7,
                  _0: /* Int_u */12,
                  _1: /* No_padding */0,
                  _2: /* No_precision */0,
                  _3: /* End_of_format */0
                },
                _1: "%Lu"
              }), (function (i) {
              return i;
            })),
      [
        -1429646511,
        235324607
      ]
    ]);

Mt.from_pair_suites("Scanf_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */
