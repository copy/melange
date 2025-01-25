// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");

function map(f, a) {
  const f$1 = Curry.__1(f);
  const l = a.length;
  if (l === 0) {
    return [];
  }
  const r = Caml_array.make(l, f$1(a[0]));
  for (let i = 1; i < l; ++i) {
    r[i] = f$1(a[i]);
  }
  return r;
}

function init(l, f) {
  const f$1 = Curry.__1(f);
  if (l === 0) {
    return [];
  }
  if (l < 0) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Array.init"
        });
  }
  const res = Caml_array.make(l, f$1(0));
  for (let i = 1; i < l; ++i) {
    res[i] = f$1(i);
  }
  return res;
}

function fold_left(f, x, a) {
  const f$1 = Curry.__2(f);
  let r = x;
  for (let i = 0, i_finish = a.length; i < i_finish; ++i) {
    r = f$1(r, a[i]);
  }
  return r;
}

function f2(param) {
  const arr = init(3000000, (function (i) {
    return i;
  }));
  const b = map((function (i) {
    return i + i - 1;
  }), arr);
  const v = fold_left((function (prim0, prim1) {
    return prim0 + prim1;
  }), 0, b);
  console.log(Stdlib.string_of_float(v));
}

f2(undefined);

module.exports = {
  map,
  init,
  fold_left,
  f2,
}
/*  Not a pure module */
