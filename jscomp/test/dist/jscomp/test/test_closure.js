// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Stdlib__Array = require("melange/array.js");

const v = {
  contents: 0
};

function f(param) {
  const arr = Caml_array.make(10, (function (param) {
          
        }));
  for(let i = 0; i <= 9; ++i){
    Caml_array.set(arr, i, (function (param) {
            v.contents = v.contents + i | 0;
          }));
  }
  return arr;
}

const u = f(undefined);

Stdlib__Array.iter((function (x) {
        Curry._1(x, undefined);
      }), u);

if (v.contents !== 45) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/test_closure.ml",
              53,
              2
            ]
          });
}

exports.v = v;
exports.f = f;
/* u Not a pure module */
