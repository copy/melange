// Generated by Melange
'use strict';

const Caml_obj = require("melange.js/caml_obj.js");
const Caml_oo = require("melange.js/caml_oo.js");
const Caml_oo_curry = require("melange.js/caml_oo_curry.js");
const Caml_option = require("melange.js/caml_option.js");
const CamlinternalOO = require("melange/camlinternalOO.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

const shared = ["copy"];

const shared$1 = [
  "move",
  "get_x"
];

const shared$2 = [
  "save",
  "restore"
];

const shared$3 = [
  "get",
  "set"
];

const shared$4 = ["window"];

const shared$5 = ["x"];

const shared$6 = ["top_widget"];

const suites = {
  contents: /* [] */0
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
            TAG: /* Eq */0,
            _0: x,
            _1: y
          };
        })
    ],
    tl: suites.contents
  };
}

function point_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, shared$1, shared$5);
  const move = ids[0];
  const get_x = ids[1];
  const x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get_x,
        (function (self$1) {
            return self$1[x];
          }),
        move,
        (function (self$1, d) {
            self$1[x] = self$1[x] + d | 0;
          })
      ]);
  return function (env, self, x_init) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x_init;
    return self$1;
  };
}

const point = CamlinternalOO.make_class(shared$1, point_init);

const p = Curry._2(point[0], undefined, 55);

const q = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(p));

Caml_oo_curry.js2(-933174511, 1, q, 7);

eq("File \"jscomp/test/class7_test.ml\", line 22, characters 5-12", [
      55,
      62
    ], [
      Caml_oo_curry.js1(291546447, 2, p),
      Caml_oo_curry.js1(291546447, 3, q)
    ]);

function ref_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, [
        "set",
        "get"
      ], shared$5);
  const set = ids[0];
  const get = ids[1];
  const x = ids[2];
  CamlinternalOO.set_methods($$class, [
        get,
        (function (self$2) {
            return self$2[x];
          }),
        set,
        (function (self$2, y) {
            self$2[x] = y;
          })
      ]);
  return function (env, self, x_init) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[x] = x_init;
    return self$1;
  };
}

const ref = CamlinternalOO.make_class(shared$3, ref_init);

function backup_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, shared$2, shared);
  const save = ids[0];
  const restore = ids[1];
  const copy = ids[2];
  CamlinternalOO.set_methods($$class, [
        save,
        (function (self$3) {
            const copy$1 = Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(self$3));
            self$3[copy] = Caml_option.some((copy$1[copy] = undefined, copy$1));
          }),
        restore,
        (function (self$3) {
            const x = self$3[copy];
            if (x !== undefined) {
              return Caml_option.valFromOption(x);
            } else {
              return self$3;
            }
          })
      ]);
  return function (env, self) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[copy] = undefined;
    return self$1;
  };
}

const backup = CamlinternalOO.make_class(shared$2, backup_init);

function backup_ref_init($$class) {
  CamlinternalOO.get_method_labels($$class, [
        "set",
        "save",
        "restore",
        "get"
      ]);
  const inh = CamlinternalOO.inherits($$class, shared$5, 0, shared$3, ref, true);
  const obj_init = inh[0];
  const inh$1 = CamlinternalOO.inherits($$class, shared, 0, [
        "restore",
        "save"
      ], backup, true);
  const obj_init$1 = inh$1[0];
  return function (env, self, x) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._2(obj_init, self$1, x);
    Curry._1(obj_init$1, self$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

const backup_ref = CamlinternalOO.make_class([
      "save",
      "restore",
      "get",
      "set"
    ], backup_ref_init);

function get(_p, _n) {
  while(true) {
    const n = _n;
    const p = _p;
    if (n === 0) {
      return Caml_oo_curry.js1(5144726, 6, p);
    }
    _n = n - 1 | 0;
    _p = Caml_oo_curry.js1(-357537970, 7, p);
    continue;
  };
}

const p$1 = Curry._2(backup_ref[0], undefined, 0);

Caml_oo_curry.js1(-867333315, 8, p$1);

Caml_oo_curry.js2(5741474, 9, p$1, 1);

Caml_oo_curry.js1(-867333315, 10, p$1);

Caml_oo_curry.js2(5741474, 11, p$1, 2);

eq("File \"jscomp/test/class7_test.ml\", line 47, characters 5-12", [
      2,
      1,
      1,
      1,
      1
    ], [
      get(p$1, 0),
      get(p$1, 1),
      get(p$1, 2),
      get(p$1, 3),
      get(p$1, 4)
    ]);

function backup2_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, [
        "save",
        "restore",
        "clear"
      ], shared);
  const save = ids[0];
  const restore = ids[1];
  const clear = ids[2];
  const copy = ids[3];
  CamlinternalOO.set_methods($$class, [
        save,
        (function (self$5) {
            self$5[copy] = Caml_option.some(Caml_oo.caml_set_oo_id(Caml_obj.caml_obj_dup(self$5)));
          }),
        restore,
        (function (self$5) {
            const x = self$5[copy];
            if (x !== undefined) {
              return Caml_option.valFromOption(x);
            } else {
              return self$5;
            }
          }),
        clear,
        (function (self$5) {
            self$5[copy] = undefined;
          })
      ]);
  return function (env, self) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[copy] = undefined;
    return self$1;
  };
}

const backup2 = CamlinternalOO.make_class([
      "clear",
      "save",
      "restore"
    ], backup2_init);

function backup_ref2_init($$class) {
  CamlinternalOO.get_method_labels($$class, [
        "set",
        "save",
        "restore",
        "get",
        "clear"
      ]);
  const inh = CamlinternalOO.inherits($$class, shared$5, 0, shared$3, ref, true);
  const obj_init = inh[0];
  const inh$1 = CamlinternalOO.inherits($$class, shared, 0, [
        "clear",
        "restore",
        "save"
      ], backup2, true);
  const obj_init$1 = inh$1[0];
  return function (env, self, x) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    Curry._2(obj_init, self$1, x);
    Curry._1(obj_init$1, self$1);
    return CamlinternalOO.run_initializers_opt(self, self$1, $$class);
  };
}

const backup_ref2 = CamlinternalOO.make_class([
      "clear",
      "save",
      "restore",
      "get",
      "set"
    ], backup_ref2_init);

const p$2 = Curry._2(backup_ref2[0], undefined, 0);

Caml_oo_curry.js1(-867333315, 12, p$2);

Caml_oo_curry.js2(5741474, 13, p$2, 1);

Caml_oo_curry.js1(-867333315, 14, p$2);

Caml_oo_curry.js2(5741474, 15, p$2, 2);

eq("File \"jscomp/test/class7_test.ml\", line 63, characters 5-12", [
      2,
      1,
      0,
      0,
      0
    ], [
      get(p$2, 0),
      get(p$2, 1),
      get(p$2, 2),
      get(p$2, 3),
      get(p$2, 4)
    ]);

function window_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, shared$6, shared$6);
  const top_widget = ids[0];
  const top_widget$1 = ids[1];
  CamlinternalOO.set_method($$class, top_widget, (function (self$7) {
          return self$7[top_widget$1];
        }));
  return function (env, self) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[top_widget$1] = undefined;
    return self$1;
  };
}

const $$window = CamlinternalOO.make_class(shared$6, window_init);

function widget_init($$class) {
  const ids = CamlinternalOO.new_methods_variables($$class, shared$4, shared$4);
  const $$window = ids[0];
  const $$window$1 = ids[1];
  CamlinternalOO.set_method($$class, $$window, (function (self$8) {
          return self$8[$$window$1];
        }));
  return function (env, self, w) {
    const self$1 = CamlinternalOO.create_object_opt(self, $$class);
    self$1[$$window$1] = w;
    return self$1;
  };
}

const widget = CamlinternalOO.make_class(shared$4, widget_init);

Mt.from_pair_suites("Class7_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.point = point;
exports.ref = ref;
exports.backup = backup;
exports.backup_ref = backup_ref;
exports.get = get;
exports.backup2 = backup2;
exports.backup_ref2 = backup_ref2;
exports.$$window = $$window;
exports.widget = widget;
/* point Not a pure module */
