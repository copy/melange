// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Stdlib__Array = require("melange/array.js");

function f(a, b, param) {
  return a + b | 0;
}

function f2(a) {
  return function (param) {
    return a + 1 | 0;
  };
}

const a = String(3);

const b = 101;

const arr = Stdlib__Array.init(2, (function (param) {
        return 0;
      }));

for(let i = 0; i <= 1; ++i){
  Caml_array.set(arr, i, i + 1 | 0);
}

console.log([
      a,
      b,
      arr
    ]);

const c = arr;

exports.f = f;
exports.f2 = f2;
exports.a = a;
exports.b = b;
exports.c = c;
/* a Not a pure module */
