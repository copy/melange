// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");

const delayed = {
  contents: (function (param) {
      
    })
};

for (let i = 1; i <= 2; ++i) {
  const f = function (n, j) {
    if (j !== 0) {
      const prev = delayed.contents;
      delayed.contents = (function (param) {
          Curry._1(prev, undefined);
          f(((n + 1 | 0) + i | 0) - i | 0, j - 1 | 0);
        });
      return ;
    }
    if (i === n) {
      return ;
    }
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/gpr_858_unit2_test.ml",
                6,
                13
              ]
            });
  };
  f(0, i);
}

Curry._1(delayed.contents, undefined);

/*  Not a pure module */
