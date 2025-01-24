// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Mt = require("./mt.js");

const Str = /* @__PURE__ */ Caml_exceptions.create("Extensible_variant_test.Str");

const Int = /* @__PURE__ */ Caml_exceptions.create("Extensible_variant_test.N.Int");

const N = {
  Int: Int
};

const Int$1 = /* @__PURE__ */ Caml_exceptions.create("Extensible_variant_test.Int");

function to_int(x) {
  if (x.MEL_EXN_ID === Str) {
    return -1;
  }
  if (x.MEL_EXN_ID === Int) {
    return x._1;
  }
  if (x.MEL_EXN_ID === Int$1) {
    return x._2;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/extensible_variant_test.ml",
          16,
          9
        ]
      });
}

const suites_0 = [
  "test_int",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: 3,
      _1: to_int({
            MEL_EXN_ID: Int,
            _1: 3,
            _2: 0
          })
    };
  })
];

const suites_1 = {
  hd: [
    "test_int2",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: 0,
        _1: to_int({
              MEL_EXN_ID: Int$1,
              _1: 3,
              _2: 0
            })
      };
    })
  ],
  tl: {
    hd: [
      "test_string",
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: -1,
          _1: to_int({
                MEL_EXN_ID: Str,
                _1: "x"
              })
        };
      })
    ],
    tl: /* [] */ 0
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Extensible_variant_test", suites);

module.exports = {
  Str,
  N,
  Int: Int$1,
  to_int,
  suites,
}
/*  Not a pure module */
