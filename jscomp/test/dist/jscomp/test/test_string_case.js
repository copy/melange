// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function f(param) {
  switch (param) {
    case "abcd" :
        return 0;
    case "bcde" :
        return 1;
    default:
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/test_string_case.ml",
                  4,
                  9
                ]
              });
  }
}

exports.f = f;
/* No side effect */
