// Generated by Melange
'use strict';

const Caml_oo_curry = require("melange.js/caml_oo_curry.js");
const CamlinternalOO = require("melange/camlinternalOO.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

const shared = [
  "m1",
  "m2"
];

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
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

function a_init($$class) {
  const ids = CamlinternalOO.get_method_labels($$class, [
        "m2",
        "m1"
      ]);
  const m2 = ids[0];
  const m1 = ids[1];
  CamlinternalOO.set_methods($$class, [
        m1,
        (function (self$1) {
          if (!object_tables$1.key) {
            const $$class = CamlinternalOO.create_table(["m3"]);
            const m3 = CamlinternalOO.get_method_label($$class, "m3");
            CamlinternalOO.set_method($$class, m3, (function (self$2) {
                  return 3;
                }));
            const env_init = function (env) {
              return CamlinternalOO.create_object_opt(undefined, $$class);
            };
            CamlinternalOO.init_class($$class);
            object_tables$1.key = env_init;
          }
          return Curry._1(object_tables$1.key, undefined);
        }),
        m2,
        (function (self$1) {
          if (!object_tables.key) {
            const $$class = CamlinternalOO.create_table(["m4"]);
            const env = CamlinternalOO.new_variable($$class, "");
            const m4 = CamlinternalOO.get_method_label($$class, "m4");
            CamlinternalOO.set_method($$class, m4, (function (self$3) {
                  const env$1 = self$3[env];
                  const tmp = env$1[1];
                  return Curry._1(tmp[0][env$1[0]], tmp);
                }));
            const env_init = function (env$1) {
              const self = CamlinternalOO.create_object_opt(undefined, $$class);
              self[env] = env$1;
              return self;
            };
            CamlinternalOO.init_class($$class);
            object_tables.key = env_init;
          }
          return Curry._1(object_tables.key, [
                m1,
                self$1
              ]);
        })
      ]);
  return function (env, self) {
    return CamlinternalOO.create_object_opt(self, $$class);
  };
}

const a = CamlinternalOO.make_class(shared, a_init);

function b_init($$class) {
  const ids = CamlinternalOO.get_method_labels($$class, [
        "m2",
        "m1",
        "a_text"
      ]);
  const a_text = ids[2];
  const inh = CamlinternalOO.inherits($$class, 0, 0, shared, a, true);
  const obj_init = inh[0];
  CamlinternalOO.set_method($$class, a_text, (function (self$4, param) {
        
      }));
  return function (env, self) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._1(obj_init, self$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

const b = CamlinternalOO.make_class([
      "a_text",
      "m1",
      "m2"
    ], b_init);

const tmp = Curry._1(a[0], undefined);

Caml_oo_curry.js1(24357, 1, tmp);

const tmp$1 = Curry._1(b[0], undefined);

const tmp$2 = Caml_oo_curry.js1(24357, 2, tmp$1);

const tmp$3 = Caml_oo_curry.js1(24359, 3, tmp$2);

eq("File \"jscomp/test/opr_3576_test.ml\", line 22, characters 6-13", Caml_oo_curry.js1(24358, 4, tmp$3), 3);

Mt.from_pair_suites("jscomp/test/opr_3576_test.ml", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  a,
  b,
}
/* a Not a pure module */
