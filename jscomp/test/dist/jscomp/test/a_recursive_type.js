// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");

function g(x) {
  return Curry._1(x._0, x);
}

const loop = g({
      TAG: /* A */0,
      _0: g
    });

const x = {
  TAG: /* A */0,
  _0: g
};

const non_terminate = g(x);

let xx = {};

xx.xx = xx;

exports.loop = loop;
exports.non_terminate = non_terminate;
/* loop Not a pure module */
