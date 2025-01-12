// Generated by Melange
'use strict';

const Js__Js_mapper_runtime = require("melange.js/js_mapper_runtime.js");

function tToJs(param) {
  return {
    xx: param.xx,
    yy: param.yy,
    zz: param.zz
  };
}

function tFromJs(param) {
  return {
    xx: param.xx,
    yy: param.yy,
    zz: param.zz
  };
}

const u = tToJs({
      xx: 3,
      yy: "x",
      zz: [
        1,
        2
      ]
    });

tFromJs(u);

tFromJs({
      xx: 3,
      yy: "2",
      zz: [
        1,
        2
      ],
      cc: 3
    });

function searchForSureExists(xs, k) {
  let _i = 0;
  while(true) {
    const i = _i;
    const match = xs[i];
    if (match[0] === k) {
      return match[1];
    }
    _i = i + 1 | 0;
    continue;
  };
}

const _map = {"b0":"b0","b1":"b1","b2":"b2","b3":"b3"};

function bToJs(param) {
  return param;
}

function bFromJs(param) {
  return Js__Js_mapper_runtime.raiseWhenNotFound(_map[param]);
}

exports.tToJs = tToJs;
exports.tFromJs = tFromJs;
exports.searchForSureExists = searchForSureExists;
exports.bToJs = bToJs;
exports.bFromJs = bFromJs;
/* u Not a pure module */
