// Generated by Melange
'use strict';

let Caml_array = require("melange.js/caml_array.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");
let Stdlib__Array = require("melange/array.js");

function test(param) {
  const v = {
    contents: 0
  };
  const f = function (_n, _acc) {
    while(true) {
      const acc = _acc;
      const n = _n;
      if (n === 0) {
        return Curry._1(acc, undefined);
      }
      _acc = (function (param) {
          v.contents = v.contents + n | 0;
          return Curry._1(acc, undefined);
        });
      _n = n - 1 | 0;
      continue ;
    };
  };
  f(10, (function (param) {
          
        }));
  return v.contents;
}

function test_closure(param) {
  const v = {
    contents: 0
  };
  const arr = Caml_array.make(6, (function (x) {
          return x;
        }));
  for(let i = 0; i <= 5; ++i){
    Caml_array.set(arr, i, (function (param) {
            return i;
          }));
  }
  Stdlib__Array.iter((function (i) {
          v.contents = v.contents + Curry._1(i, 0) | 0;
        }), arr);
  return v.contents;
}

function test_closure2(param) {
  const v = {
    contents: 0
  };
  const arr = Caml_array.make(6, (function (x) {
          return x;
        }));
  for(let i = 0; i <= 5; ++i){
    const j = i + i | 0;
    Caml_array.set(arr, i, (function (param) {
            return j;
          }));
  }
  Stdlib__Array.iter((function (i) {
          v.contents = v.contents + Curry._1(i, 0) | 0;
        }), arr);
  return v.contents;
}

Mt.from_pair_suites("Cps_test", {
      hd: [
        "cps_test_sum",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: 55,
                    _1: test(undefined)
                  };
          })
      ],
      tl: {
        hd: [
          "cps_test_closure",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: 15,
                      _1: test_closure(undefined)
                    };
            })
        ],
        tl: {
          hd: [
            "cps_test_closure2",
            (function (param) {
                return {
                        TAG: /* Eq */0,
                        _0: 30,
                        _1: test_closure2(undefined)
                      };
              })
          ],
          tl: /* [] */0
        }
      }
    });

exports.test = test;
exports.test_closure = test_closure;
exports.test_closure2 = test_closure2;
/*  Not a pure module */
