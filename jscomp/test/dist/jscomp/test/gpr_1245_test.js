// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");

const x = {
  contents: 1
};

const y = {
  contents: 2
};

function f(param) {
  const a = {
    contents: param[0]
  };
  const b = {
    contents: param[1]
  };
  console.log(a, b);
}

function g(param) {
  return 3;
}

function a0(f) {
  const u = Curry._1(f, undefined);
  if (u !== null) {
    console.log(u);
    console.log(u);
    return 1;
  } else {
    return 0;
  }
}

function a1(f) {
  const E = /* @__PURE__ */ Caml_exceptions.create("E");
  try {
    return Curry._1(f, undefined);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === E) {
      return 1;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

const a = 1;

const b = 2;

exports.a = a;
exports.b = b;
exports.x = x;
exports.y = y;
exports.f = f;
exports.g = g;
exports.a0 = a0;
exports.a1 = a1;
/* No side effect */
