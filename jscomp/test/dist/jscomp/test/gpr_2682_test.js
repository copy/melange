// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

const sum = ((a,b) => a + b
);

const v = sum(1, 2);

function f(a) {
  return a + 3 | 0;
}

const b = f(1);

const c = f(2);

const forIn = ((o,foo)=> {
  for (var i in o){
    foo(o)
  }
  }
);

function log(x) {
  console.log(x);
}

const N = {
  log2: log
};

forIn({
      x: 3
    }, (function (x) {
        console.log(x);
      }));

forIn({
      x: 3,
      y: 3
    }, (function (x) {
        console.log(x);
      }));

const f3 = (()=>true
);

const bbbb = f3();

if (!bbbb) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/gpr_2682_test.ml",
          59,
          2
        ]
      });
}

exports.sum = sum;
exports.v = v;
exports.f = f;
exports.b = b;
exports.c = c;
exports.forIn = forIn;
exports.N = N;
exports.f3 = f3;
exports.bbbb = bbbb;
/* v Not a pure module */
