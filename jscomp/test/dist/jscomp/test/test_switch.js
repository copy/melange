// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");

function f(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    if (param === /* G */0) {
      return 4;
    } else {
      return 5;
    }
  }
  switch (param.TAG) {
    case /* A */0 :
        return 0;
    case /* B */1 :
        return 1;
    case /* C */2 :
        return 2;
    case /* F */3 :
        return 3;
    
  }
}

function bind(x, f) {
  if (x.TAG === /* Left */0) {
    return {
      TAG: /* Left */0,
      _0: Curry._1(f, x._0)
    };
  } else {
    return x;
  }
}

exports.f = f;
exports.bind = bind;
/* No side effect */
