// Generated by Melange
'use strict';

const Caml_float = require("melange.js/caml_float.js");
const Caml_int64 = require("melange.js/caml_int64.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__Printf = require("melange/printf.js");

const one_float = [
  1072693248,
  0
];

const int32_pairs = [
  [
    32,
    4.48415508583941463e-44
  ],
  [
    3,
    4.20389539297445121e-45
  ]
];

function from_pairs(pair) {
  return Stdlib__List.concat(Stdlib__Array.to_list(Stdlib__Array.mapi((function (i, param) {
                const f = param[1];
                const i32 = param[0];
                return {
                  hd: [
                    Curry._1(Stdlib__Printf.sprintf({
                              TAG: /* Format */0,
                              _0: {
                                TAG: /* String_literal */11,
                                _0: "int32_float_of_bits ",
                                _1: {
                                  TAG: /* Int */4,
                                  _0: /* Int_d */0,
                                  _1: /* No_padding */0,
                                  _2: /* No_precision */0,
                                  _3: /* End_of_format */0
                                }
                              },
                              _1: "int32_float_of_bits %d"
                            }), i),
                    (function (param) {
                      return {
                        TAG: /* Eq */0,
                        _0: Caml_float.caml_int32_float_of_bits(i32),
                        _1: f
                      };
                    })
                  ],
                  tl: {
                    hd: [
                      Curry._1(Stdlib__Printf.sprintf({
                                TAG: /* Format */0,
                                _0: {
                                  TAG: /* String_literal */11,
                                  _0: "int32_bits_of_float ",
                                  _1: {
                                    TAG: /* Int */4,
                                    _0: /* Int_d */0,
                                    _1: /* No_padding */0,
                                    _2: /* No_precision */0,
                                    _3: /* End_of_format */0
                                  }
                                },
                                _1: "int32_bits_of_float %d"
                              }), i),
                      (function (param) {
                        return {
                          TAG: /* Eq */0,
                          _0: Caml_float.caml_int32_bits_of_float(f),
                          _1: i32
                        };
                      })
                    ],
                    tl: /* [] */0
                  }
                };
              }), int32_pairs)));
}

const suites = Stdlib.$at({
      hd: [
        "one",
        (function (param) {
          return {
            TAG: /* Eq */0,
            _0: Caml_int64.bits_of_float(1.0),
            _1: one_float
          };
        })
      ],
      tl: {
        hd: [
          "two",
          (function (param) {
            return {
              TAG: /* Eq */0,
              _0: Caml_int64.float_of_bits(one_float),
              _1: 1.0
            };
          })
        ],
        tl: /* [] */0
      }
    }, from_pairs(int32_pairs));

Mt.from_pair_suites("Float_of_bits_test", suites);

exports.one_float = one_float;
exports.int32_pairs = int32_pairs;
exports.from_pairs = from_pairs;
exports.suites = suites;
/* suites Not a pure module */
