// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

const u = 3;

function f(param) {
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "hi"
          });
}

exports.u = u;
exports.f = f;
/* No side effect */
