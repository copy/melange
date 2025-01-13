// Generated by Melange
'use strict';

const Caml_oo_curry = require("melange.js/caml_oo_curry.js");
const CamlinternalOO = require("melange/camlinternalOO.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

const object_tables = {
  TAG: /* Cons */ 0,
  key: undefined,
  data: undefined,
  next: undefined
};

const object_tables$1 = {
  TAG: /* Cons */ 0,
  key: undefined,
  data: undefined,
  next: undefined
};

function step1(param) {
  if (!object_tables.key) {
    const $$class = CamlinternalOO.create_table(["step2"]);
    const step2 = CamlinternalOO.get_method_label($$class, "step2");
    CamlinternalOO.set_method($$class, step2, (function (self$1) {
          if (!object_tables$1.key) {
            const $$class = CamlinternalOO.create_table(["step3"]);
            const step3 = CamlinternalOO.get_method_label($$class, "step3");
            CamlinternalOO.set_method($$class, step3, (function (self$2) {
                  return 33;
                }));
            const env_init = function (env) {
              return CamlinternalOO.create_object_opt(undefined, $$class);
            };
            CamlinternalOO.init_class($$class);
            object_tables$1.key = env_init;
          }
          return Curry._1(object_tables$1.key, undefined);
        }));
    const env_init = function (env) {
      return CamlinternalOO.create_object_opt(undefined, $$class);
    };
    CamlinternalOO.init_class($$class);
    object_tables.key = env_init;
  }
  return Curry._1(object_tables.key, undefined);
}

const tmp = step1(undefined);

const tmp$1 = Caml_oo_curry.js1(68057958, 1, tmp);

const x = Caml_oo_curry.js1(68057959, 2, tmp$1);

eq("File \"jscomp/test/gpr_1285_test.ml\", line 20, characters 5-12", x, 33);

Mt.from_pair_suites("Gpr_1285_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.step1 = step1;
exports.x = x;
/* x Not a pure module */
