// Generated by Melange
'use strict';

const Caml_option = require("melange.js/caml_option.js");

const v = {
  "Content-Type": 3,
  l: 2,
  open: 2
};

const b = v.l;

const c = v.open;

function ff(param) {
  v["Content-Type"] = 3;
  v.l = 2;
}

const partial_arg = "x";

function h0(param) {
  let tmp = {
    hi: 2
  };
  if (partial_arg !== undefined) {
    tmp["lo-x"] = Caml_option.valFromOption(partial_arg);
  }
  return tmp;
}

const h1 = {
  "lo-x": "x",
  hi: 2
};

const h2 = {
  hi: 2
};

function hh(x) {
  x["lo-x"] = "3";
  return Caml_option.undefined_to_opt(x["lo-x"]);
}

function hh2(x) {
  const match = x["lo-x"];
  if (match !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

const u = {
  "xx-yy": 3
};

const x = u["xx-yy"];

const v$1 = x !== undefined ? x : 0;

module.exports = {
  b,
  c,
  ff,
  h0,
  h1,
  h2,
  hh,
  hh2,
  u,
  v: v$1,
}
/*  Not a pure module */
