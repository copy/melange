// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Ffi_js_test = require("./ffi_js_test.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");

const x = "\x01\x02\x03";

const max = Math.max;

function $$test(x,y){
  return x + y;
}
;

const regression3 = Math.max;

const regression4 = Math.max;

function g(a) {
  const regression = (function(x,y){
   return ""
}
  );
  const regression2 = Math.max;
  regression(a, Stdlib.failwith);
  Curry._2(regression2, 3, 2);
  regression3(3, 2);
  regression4(3, (function (x) {
        return x;
      }));
}

const max2 = Math.max;

function umax(a, b) {
  return max2(a, b);
}

function u(h) {
  return max2(3, h);
}

const max3 = Math.max;

function uu(h) {
  return max2(3, h);
}

const empty = Object.keys(3);

const v = $$test(1, 2);

Mt.from_pair_suites("Unsafe_ppx_test", {
      hd: [
        "unsafe_max",
        (function (param) {
          return {
            TAG: /* Eq */0,
            _0: 2,
            _1: max(1, 2)
          };
        })
      ],
      tl: {
        hd: [
          "unsafe_test",
          (function (param) {
            return {
              TAG: /* Eq */0,
              _0: 3,
              _1: v
            };
          })
        ],
        tl: {
          hd: [
            "unsafe_max2",
            (function (param) {
              return {
                TAG: /* Eq */0,
                _0: 2,
                _1: Math.max(1, 2)
              };
            })
          ],
          tl: {
            hd: [
              "ffi_keys",
              (function (param) {
                return {
                  TAG: /* Eq */0,
                  _0: ["a"],
                  _1: Ffi_js_test.keys({a : 3})
                };
              })
            ],
            tl: /* [] */0
          }
        }
      }
    });

exports.x = x;
exports.max = max;
exports.regression3 = regression3;
exports.regression4 = regression4;
exports.g = g;
exports.max2 = max2;
exports.umax = umax;
exports.u = u;
exports.max3 = max3;
exports.uu = uu;
exports.empty = empty;
exports.v = v;
/* max Not a pure module */
