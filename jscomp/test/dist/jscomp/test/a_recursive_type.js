// Generated by Melange
'use strict';

let Curry = require("melange.js/curry.js");

function g(x) {
  return Curry._1(x._0, x);
}

const loop = g(/* A */{
      _0: g
    });

const x = /* A */{
  _0: g
};

const non_terminate = g(x);

let xx = {};

xx.xx = xx;

exports.loop = loop;
exports.non_terminate = non_terminate;
/* loop Not a pure module */
