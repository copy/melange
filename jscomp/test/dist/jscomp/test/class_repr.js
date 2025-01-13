// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Caml_oo = require("melange.js/caml_oo.js");
const Caml_oo_curry = require("melange.js/caml_oo_curry.js");
const CamlinternalOO = require("melange/camlinternalOO.js");
const Curry = require("melange.js/curry.js");
const Stdlib__Sys = require("melange/sys.js");

const shared = ["get_x"];

const shared$1 = [
  "incr",
  "get_money"
];

const shared$2 = ["x"];

function x0_init($$class) {
  const x = CamlinternalOO.new_variable($$class, "x");
  return function (env, self, v) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = v + 2 | 0;
    return self$1;
  };
}

const x0 = CamlinternalOO.make_class(0, x0_init);

function x_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, shared, shared$2);
  const get_x = ids[0];
  const x = ids[1];
  CamlinternalOO.set_method($$class, get_x, (function (self$2) {
        return self$2[x];
      }));
  return function (env, self, v) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = v;
    return self$1;
  };
}

const x = CamlinternalOO.make_class(shared, x_init);

const v = Curry._2(x[0], undefined, 3);

const u = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(v));

if (Caml_oo_curry.js1(291546447, 1, v) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/class_repr.ml",
          28,
          9
        ]
      });
}

if (Caml_oo_curry.js1(291546447, 2, u) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/class_repr.ml",
          30,
          9
        ]
      });
}

function xx_init($$class) {
  const x = CamlinternalOO.new_variable($$class, "");
  const ids = CamlinternalOO.new_methods_variables($$class, shared$1, ["money"]);
  const incr = ids[0];
  const get_money = ids[1];
  const money = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_money,
        (function (self$3) {
          return self$3[money];
        }),
        incr,
        (function (self$3) {
          const copy = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(self$3));
          copy[money] = 2 * self$3[x] + Curry._1(self$3[0][get_money], self$3);
          return copy;
        })
      ]);
  return function (env, self, x$1) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x$1;
    self$1[money] = x$1;
    return self$1;
  };
}

const xx = CamlinternalOO.make_class(shared$1, xx_init);

const v1 = Curry._2(xx[0], undefined, 3);

const v2 = Caml_oo_curry.js1(-977586732, 3, v1);

if (Caml_oo_curry.js1(-804710761, 4, v1) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/class_repr.ml",
          42,
          9
        ]
      });
}

if (/* tag */typeof Stdlib__Sys.backend_type === "number" || typeof Stdlib__Sys.backend_type === "string") {
  Stdlib__Sys.backend_type === /* Native */0;
} else if (Stdlib__Sys.backend_type._0 === "Melange") {
  console.log([
        Caml_oo_curry.js1(-804710761, 5, v1),
        Caml_oo_curry.js1(-804710761, 6, v2)
      ]);
}

if (Caml_oo_curry.js1(-804710761, 7, v2) !== 9) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/class_repr.ml",
          57,
          9
        ]
      });
}

function point_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, [
        "get_x5",
        "get_x"
      ], shared$2);
  const get_x5 = ids[0];
  const get_x = ids[1];
  const x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$4) {
          return self$4[x];
        }),
        get_x5,
        (function (self$4) {
          return Curry._1(self$4[0][get_x], self$4) + 5 | 0;
        })
      ]);
  return function (env, self) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = 0;
    return self$1;
  };
}

const point = CamlinternalOO.make_class([
      "get_x",
      "get_x5"
    ], point_init);

const v$1 = Curry._1(point[0], undefined);

if (Caml_oo_curry.js1(590348294, 8, v$1) !== 5) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/class_repr.ml",
          104,
          2
        ]
      });
}

function xx0_init($$class) {
  const x = CamlinternalOO.new_variable($$class, "");
  const ids = CamlinternalOO.new_methods_variables($$class, shared$1, [
        "money",
        "a0",
        "a1",
        "a2"
      ]);
  const incr = ids[0];
  const get_money = ids[1];
  const money = ids[2];
  const a0 = ids[3];
  const a1 = ids[4];
  const a2 = ids[5];
  CamlinternalOO.set_methods($$class, [
        get_money,
        (function (self$5) {
          return self$5[money];
        }),
        incr,
        (function (self$5) {
          const copy = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(self$5));
          copy[money] = 2 * self$5[x] + Curry._1(self$5[0][get_money], self$5);
          copy[a0] = 2;
          return copy;
        })
      ]);
  return function (env, self, x$1) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x$1;
    self$1[money] = x$1;
    self$1[a0] = 0;
    self$1[a1] = 1;
    self$1[a2] = 2;
    return self$1;
  };
}

const xx0 = CamlinternalOO.make_class(shared$1, xx0_init);

exports.x0 = x0;
exports.x = x;
exports.u = u;
exports.xx = xx;
exports.v1 = v1;
exports.v2 = v2;
exports.point = point;
exports.v = v$1;
exports.xx0 = xx0;
/* x0 Not a pure module */
