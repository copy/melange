// Generated by Melange
'use strict';

const Mt = require("./mt.js");

function f(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

function f2(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

function f4(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
}

const u = 1;

const v = true;

const suites_0 = [
  "caml_bool_eq_caml_bool",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: u,
      _1: true
    };
  })
];

const suites_1 = {
  hd: [
    "js_bool_eq_js_bool",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: v,
        _1: true
      };
    })
  ],
  tl: {
    hd: [
      "js_bool_neq_acml_bool",
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: true,
          _1: true === true
        };
      })
    ],
    tl: /* [] */ 0
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

function ff(u) {
  if (u === true) {
    return 1;
  } else {
    return 2;
  }
}

function fi(x, y) {
  return x === y;
}

function fb(x, y) {
  return x === y;
}

function fadd(x, y) {
  return x + y | 0;
}

function ffadd(x, y) {
  return x + y;
}

function ss(x) {
  return "xx" > x;
}

function bb(x) {
  return [
    true > x,
    true < x,
    true >= x,
    true <= x,
    false > x,
    false < x,
    false >= x,
    false <= x
  ];
}

const consts = [
  false,
  false,
  true,
  false,
  true,
  false,
  true,
  true
];

const bool_array = [
  true,
  false
];

Mt.from_pair_suites("Js_bool_test", suites);

const f3 = true;

module.exports = {
  f,
  f2,
  f4,
  f3,
  u,
  v,
  suites,
  ff,
  fi,
  fb,
  fadd,
  ffadd,
  ss,
  bb,
  consts,
  bool_array,
}
/*  Not a pure module */
