// Generated by Melange
'use strict';

const Caml_obj = require("melange.js/caml_obj.js");

function min_int(prim0, prim1) {
  return Math.min(prim0, prim1);
}

function say(prim0, prim1) {
  return prim1.say(prim0);
}

const v = Caml_obj.caml_compare;

exports.min_int = min_int;
exports.say = say;
exports.v = v;
/* No side effect */
