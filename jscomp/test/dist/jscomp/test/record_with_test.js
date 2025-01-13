// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

const v = {
  syntax: undefined,
  imports: 0,
  file_options: 0,
  package: 0,
  messages: 0,
  enums: 0,
  extends: 0
};

const u_v = {
  syntax: undefined,
  imports: 0,
  file_options: 0,
  package: 0,
  messages: 0,
  enums: 0,
  extends: 0
};

function f(g, h) {
  const init = Curry._1(g, h);
  return {
    syntax: init.syntax,
    imports: 0,
    file_options: init.file_options,
    package: init.package,
    messages: init.messages,
    enums: init.enums,
    extends: init.extends
  };
}

const suites_0 = [
  "eq_with",
  (function (param) {
    return {
      TAG: /* Eq */0,
      _0: v,
      _1: u_v
    };
  })
];

const suites = {
  hd: suites_0,
  tl: /* [] */0
};

Mt.from_pair_suites("Record_with_test", suites);

const uv = {
  syntax: undefined,
  imports: 1,
  file_options: 0,
  package: 0,
  messages: 0,
  enums: 0,
  extends: 0
};

exports.v = v;
exports.uv = uv;
exports.u_v = u_v;
exports.f = f;
exports.suites = suites;
/*  Not a pure module */
