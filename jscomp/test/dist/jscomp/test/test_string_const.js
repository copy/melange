// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_string = require("melange.js/caml_string.js");
const Stdlib = require("melange/stdlib.js");

let hh;

try {
  hh = Caml_string.get("ghsogh", -3);
}
catch (raw_exn){
  const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
    console.log(exn._1);
    hh = /* 'a' */97;
  } else {
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

const f = /* 'o' */111;

exports.f = f;
exports.hh = hh;
/* hh Not a pure module */
