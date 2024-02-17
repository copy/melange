// Generated by Melange
'use strict';

const CamlinternalLazy = require("melange/camlinternalLazy.js");

const lazy1 = {
  LAZY_DONE: false,
  VAL: (function () {
      console.log("Hello, lazy");
      return 1;
    })
};

const lazy2 = {
  LAZY_DONE: true,
  VAL: 3
};

console.log(lazy1, lazy2);

const la = CamlinternalLazy.force(lazy1);

const lb = CamlinternalLazy.force(lazy2);

console.log(la, lb);

exports.lazy1 = lazy1;
exports.lazy2 = lazy2;
exports.la = la;
exports.lb = lb;
/*  Not a pure module */
