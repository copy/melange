// Generated by Melange
'use strict';

const Caml_obj = require("melange.js/caml_obj.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eqs(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function eq(param, param$1) {
  const x = param.contents;
  const y = param$1.contents;
  return x === y;
}

function eq2(x, param) {
  const y = param.contents;
  return Caml_obj.caml_equal(x.contents, y);
}

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 14, characters 7-14", false, eq({
          contents: 1
        }, {
          contents: 2
        }));

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 15, characters 7-14", true, eq({
          contents: 2
        }, {
          contents: 2
        }));

const u = {
  hi: (function (param, param$1) {
      const x = param.contents;
      const y = param$1.contents;
      return x === y;
    })
};

const h = u.hi({
      contents: 1
    }, {
      contents: 2
    });

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 25, characters 7-14", h, false);

function ut3(param, param$1, param$2) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  return [
          x0,
          x1,
          x2
        ];
}

function t3(param, param$1, param$2) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  return [
          x0,
          x1,
          x2
        ];
}

function ut4(param, param$1, param$2, param$3) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const x3 = param$3.contents;
  return [
          x0,
          x1,
          x2,
          x3
        ];
}

function t4(param, param$1, param$2, param$3) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const x3 = param$3.contents;
  return [
          x0,
          x1,
          x2,
          x3
        ];
}

function ut5(param, param$1, param$2, param$3, param$4) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const x3 = param$3.contents;
  const x4 = param$4.contents;
  return [
          x0,
          x1,
          x2,
          x3,
          x4
        ];
}

function t5(param, param$1, param$2, param$3, param$4) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const x3 = param$3.contents;
  const x4 = param$4.contents;
  return [
          x0,
          x1,
          x2,
          x3,
          x4
        ];
}

function nested0(param, param$1, param$2) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const a = (x0 + x1 | 0) + x2 | 0;
  return function (param, param$1, param$2) {
    const x0 = param.contents;
    const x1 = param$1.contents;
    const x2 = param$2.contents;
    return ((a + x0 | 0) + x1 | 0) + x2 | 0;
  };
}

function nested1(param, param$1, param$2) {
  const x0 = param.contents;
  const x1 = param$1.contents;
  const x2 = param$2.contents;
  const a = (x0 + x1 | 0) + x2 | 0;
  return function (param, param$1, param$2) {
    const x0 = param.contents;
    const x1 = param$1.contents;
    const x2 = param$2.contents;
    return ((a + x0 | 0) + x1 | 0) + x2 | 0;
  };
}

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 55, characters 9-16", ut3({
          contents: 1
        }, {
          contents: 2
        }, {
          contents: 3
        }), [
      1,
      2,
      3
    ]);

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 56, characters 7-14", t3({
          contents: 1
        }, {
          contents: 2
        }, {
          contents: 3
        }), [
      1,
      2,
      3
    ]);

eqs("File \"jscomp/test/mutable_uncurry_test.ml\", line 58, characters 7-14", ut5({
          contents: 1
        }, {
          contents: 2
        }, {
          contents: 3
        }, {
          contents: 1
        }, {
          contents: 1
        }), [
      1,
      2,
      3,
      1,
      1
    ]);

Mt.from_pair_suites("jscomp/test/mutable_uncurry_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eqs = eqs;
exports.eq = eq;
exports.eq2 = eq2;
exports.u = u;
exports.h = h;
exports.ut3 = ut3;
exports.t3 = t3;
exports.ut4 = ut4;
exports.t4 = t4;
exports.ut5 = ut5;
exports.t5 = t5;
exports.nested0 = nested0;
exports.nested1 = nested1;
/*  Not a pure module */
