// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");

function cons_enum(_s, _e) {
  while(true) {
    const e = _e;
    const s = _s;
    if (/* tag */typeof s === "number" || typeof s === "string") {
      return e;
    }
    _e = {
      TAG: /* More */0,
      _0: s._1,
      _1: s._2,
      _2: e
    };
    _s = s._0;
    continue ;
  };
}

function height(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return param._3;
  }
}

function min_elt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const l = param._0;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return param._1;
    }
    _param = l;
    continue ;
  };
}

function max_elt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    let tmp = param._2;
    if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
      return param._1;
    }
    _param = param._2;
    continue ;
  };
}

function is_empty(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return true;
  } else {
    return false;
  }
}

function cardinal_aux(_acc, _param) {
  while(true) {
    const param = _param;
    const acc = _acc;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return acc;
    }
    _param = param._0;
    _acc = cardinal_aux(acc + 1 | 0, param._2);
    continue ;
  };
}

function cardinal(s) {
  return cardinal_aux(0, s);
}

function elements_aux(_accu, _param) {
  while(true) {
    const param = _param;
    const accu = _accu;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return accu;
    }
    _param = param._0;
    _accu = {
      hd: param._1,
      tl: elements_aux(accu, param._2)
    };
    continue ;
  };
}

function elements(s) {
  return elements_aux(/* [] */0, s);
}

function iter(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    iter(f, param._0);
    Curry._1(f, param._1);
    _param = param._2;
    continue ;
  };
}

function fold(f, _s, _accu) {
  while(true) {
    const accu = _accu;
    const s = _s;
    if (/* tag */typeof s === "number" || typeof s === "string") {
      return accu;
    }
    _accu = Curry._2(f, s._1, fold(f, s._0, accu));
    _s = s._2;
    continue ;
  };
}

function for_all(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return true;
    }
    if (!Curry._1(p, param._1)) {
      return false;
    }
    if (!for_all(p, param._0)) {
      return false;
    }
    _param = param._2;
    continue ;
  };
}

function exists(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return false;
    }
    if (Curry._1(p, param._1)) {
      return true;
    }
    if (exists(p, param._0)) {
      return true;
    }
    _param = param._2;
    continue ;
  };
}

function max_int3(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}

function max_int_2(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

const Height_invariant_broken = /* @__PURE__ */Caml_exceptions.create("Set_gen.Height_invariant_broken");

const Height_diff_borken = /* @__PURE__ */Caml_exceptions.create("Set_gen.Height_diff_borken");

function check_height_and_diff(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  }
  const h = param._3;
  const hl = check_height_and_diff(param._0);
  const hr = check_height_and_diff(param._2);
  if (h !== (max_int_2(hl, hr) + 1 | 0)) {
    throw new Caml_js_exceptions.MelangeError(Height_invariant_broken, {
          MEL_EXN_ID: Height_invariant_broken
        });
  }
  const diff = Stdlib.abs(hl - hr | 0);
  if (diff > 2) {
    throw new Caml_js_exceptions.MelangeError(Height_diff_borken, {
          MEL_EXN_ID: Height_diff_borken
        });
  }
  return h;
}

function check(tree) {
  check_height_and_diff(tree);
}

function create(l, v, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l._3;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r._3;
  return {
    TAG: /* Node */0,
    _0: l,
    _1: v,
    _2: r,
    _3: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function internal_bal(l, v, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l._3;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r._3;
  if (hl > (hr + 2 | 0)) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/set_gen.ml",
              225,
              15
            ]
          });
    }
    const lr = l._2;
    const lv = l._1;
    const ll = l._0;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, create(lr, v, r));
    }
    if (!/* tag */(typeof lr === "number" || typeof lr === "string")) {
      return create(create(ll, lv, lr._0), lr._1, create(lr._2, v, r));
    }
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/set_gen.ml",
            235,
            19
          ]
        });
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: /* Node */0,
      _0: l,
      _1: v,
      _2: r,
      _3: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (/* tag */typeof r === "number" || typeof r === "string") {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/set_gen.ml",
            245,
            15
          ]
        });
  }
  const rr = r._2;
  const rv = r._1;
  const rl = r._0;
  if (height(rr) >= height(rl)) {
    return create(create(l, v, rl), rv, rr);
  }
  if (!/* tag */(typeof rl === "number" || typeof rl === "string")) {
    return create(create(l, v, rl._0), rl._1, create(rl._2, rv, rr));
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/set_gen.ml",
          251,
          19
        ]
      });
}

function remove_min_elt(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Set.remove_min_elt"
        });
  }
  const l = param._0;
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return param._2;
  } else {
    return internal_bal(remove_min_elt(l), param._1, param._2);
  }
}

function singleton(x) {
  return {
    TAG: /* Node */0,
    _0: /* Empty */0,
    _1: x,
    _2: /* Empty */0,
    _3: 1
  };
}

function internal_merge(l, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return r;
  } else if (/* tag */typeof r === "number" || typeof r === "string") {
    return l;
  } else {
    return internal_bal(l, min_elt(r), remove_min_elt(r));
  }
}

function add_min_element(v, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(v);
  } else {
    return internal_bal(add_min_element(v, param._0), param._1, param._2);
  }
}

function add_max_element(v, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(v);
  } else {
    return internal_bal(param._0, param._1, add_max_element(v, param._2));
  }
}

function internal_join(l, v, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return add_min_element(v, r);
  }
  const lh = l._3;
  if (/* tag */typeof r === "number" || typeof r === "string") {
    return add_max_element(v, l);
  }
  const rh = r._3;
  if (lh > (rh + 2 | 0)) {
    return internal_bal(l._0, l._1, internal_join(l._2, v, r));
  } else if (rh > (lh + 2 | 0)) {
    return internal_bal(internal_join(l, v, r._0), r._1, r._2);
  } else {
    return create(l, v, r);
  }
}

function internal_concat(t1, t2) {
  if (/* tag */typeof t1 === "number" || typeof t1 === "string") {
    return t2;
  } else if (/* tag */typeof t2 === "number" || typeof t2 === "string") {
    return t1;
  } else {
    return internal_join(t1, min_elt(t2), remove_min_elt(t2));
  }
}

function filter(p, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return /* Empty */0;
  }
  const v = param._1;
  const l$p = filter(p, param._0);
  const pv = Curry._1(p, v);
  const r$p = filter(p, param._2);
  if (pv) {
    return internal_join(l$p, v, r$p);
  } else {
    return internal_concat(l$p, r$p);
  }
}

function partition(p, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return [
      /* Empty */0,
      /* Empty */0
    ];
  }
  const v = param._1;
  const match = partition(p, param._0);
  const lf = match[1];
  const lt = match[0];
  const pv = Curry._1(p, v);
  const match$1 = partition(p, param._2);
  const rf = match$1[1];
  const rt = match$1[0];
  if (pv) {
    return [
      internal_join(lt, v, rt),
      internal_concat(lf, rf)
    ];
  } else {
    return [
      internal_concat(lt, rt),
      internal_join(lf, v, rf)
    ];
  }
}

function of_sorted_list(l) {
  const sub = function (n, l) {
    switch (n) {
      case 0 :
          return [
            /* Empty */0,
            l
          ];
      case 1 :
          if (l) {
            return [
              {
                TAG: /* Node */0,
                _0: /* Empty */0,
                _1: l.hd,
                _2: /* Empty */0,
                _3: 1
              },
              l.tl
            ];
          }
          break;
      case 2 :
          if (l) {
            const match = l.tl;
            if (match) {
              return [
                {
                  TAG: /* Node */0,
                  _0: {
                    TAG: /* Node */0,
                    _0: /* Empty */0,
                    _1: l.hd,
                    _2: /* Empty */0,
                    _3: 1
                  },
                  _1: match.hd,
                  _2: /* Empty */0,
                  _3: 2
                },
                match.tl
              ];
            }
            
          }
          break;
      case 3 :
          if (l) {
            const match$1 = l.tl;
            if (match$1) {
              const match$2 = match$1.tl;
              if (match$2) {
                return [
                  {
                    TAG: /* Node */0,
                    _0: {
                      TAG: /* Node */0,
                      _0: /* Empty */0,
                      _1: l.hd,
                      _2: /* Empty */0,
                      _3: 1
                    },
                    _1: match$1.hd,
                    _2: {
                      TAG: /* Node */0,
                      _0: /* Empty */0,
                      _1: match$2.hd,
                      _2: /* Empty */0,
                      _3: 1
                    },
                    _3: 2
                  },
                  match$2.tl
                ];
              }
              
            }
            
          }
          break;
      default:
        
    }
    const nl = n / 2 | 0;
    const match$3 = sub(nl, l);
    const l$1 = match$3[1];
    if (l$1) {
      const match$4 = sub((n - nl | 0) - 1 | 0, l$1.tl);
      return [
        create(match$3[0], l$1.hd, match$4[0]),
        match$4[1]
      ];
    }
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/set_gen.ml",
            361,
            14
          ]
        });
  };
  return sub(Stdlib__List.length(l), l)[0];
}

function of_sorted_array(l) {
  const sub = function (start, n, l) {
    if (n === 0) {
      return /* Empty */0;
    }
    if (n === 1) {
      const x0 = l[start];
      return {
        TAG: /* Node */0,
        _0: /* Empty */0,
        _1: x0,
        _2: /* Empty */0,
        _3: 1
      };
    }
    if (n === 2) {
      const x0$1 = l[start];
      const x1 = l[start + 1 | 0];
      return {
        TAG: /* Node */0,
        _0: {
          TAG: /* Node */0,
          _0: /* Empty */0,
          _1: x0$1,
          _2: /* Empty */0,
          _3: 1
        },
        _1: x1,
        _2: /* Empty */0,
        _3: 2
      };
    }
    if (n === 3) {
      const x0$2 = l[start];
      const x1$1 = l[start + 1 | 0];
      const x2 = l[start + 2 | 0];
      return {
        TAG: /* Node */0,
        _0: {
          TAG: /* Node */0,
          _0: /* Empty */0,
          _1: x0$2,
          _2: /* Empty */0,
          _3: 1
        },
        _1: x1$1,
        _2: {
          TAG: /* Node */0,
          _0: /* Empty */0,
          _1: x2,
          _2: /* Empty */0,
          _3: 1
        },
        _3: 2
      };
    }
    const nl = n / 2 | 0;
    const left = sub(start, nl, l);
    const mid = start + nl | 0;
    const v = l[mid];
    const right = sub(mid + 1 | 0, (n - nl | 0) - 1 | 0, l);
    return create(left, v, right);
  };
  return sub(0, l.length, l);
}

function is_ordered(cmp, tree) {
  const is_ordered_min_max = function (tree) {
    if (/* tag */typeof tree === "number" || typeof tree === "string") {
      return "Empty";
    }
    const r = tree._2;
    const v = tree._1;
    const match = is_ordered_min_max(tree._0);
    if (typeof match === "string") {
      if (match !== "Empty") {
        return "No";
      }
      const match$1 = is_ordered_min_max(r);
      if (typeof match$1 === "string") {
        if (match$1 === "Empty") {
          return {
            NAME: "V",
            VAL: [
              v,
              v
            ]
          };
        } else {
          return "No";
        }
      }
      const match$2 = match$1.VAL;
      if (Curry._2(cmp, v, match$2[0]) < 0) {
        return {
          NAME: "V",
          VAL: [
            v,
            match$2[1]
          ]
        };
      } else {
        return "No";
      }
    }
    const match$3 = match.VAL;
    const max_v = match$3[1];
    const min_v = match$3[0];
    const match$4 = is_ordered_min_max(r);
    if (typeof match$4 === "string") {
      if (match$4 === "Empty" && Curry._2(cmp, max_v, v) < 0) {
        return {
          NAME: "V",
          VAL: [
            min_v,
            v
          ]
        };
      } else {
        return "No";
      }
    }
    const match$5 = match$4.VAL;
    if (Curry._2(cmp, max_v, match$5[0]) < 0) {
      return {
        NAME: "V",
        VAL: [
          min_v,
          match$5[1]
        ]
      };
    } else {
      return "No";
    }
  };
  return Caml_obj.caml_notequal(is_ordered_min_max(tree), "No");
}

function invariant(cmp, t) {
  check_height_and_diff(t);
  return is_ordered(cmp, t);
}

function compare_aux(cmp, _e1, _e2) {
  while(true) {
    const e2 = _e2;
    const e1 = _e1;
    if (/* tag */typeof e1 === "number" || typeof e1 === "string") {
      if (/* tag */typeof e2 === "number" || typeof e2 === "string") {
        return 0;
      } else {
        return -1;
      }
    }
    if (/* tag */typeof e2 === "number" || typeof e2 === "string") {
      return 1;
    }
    const c = Curry._2(cmp, e1._0, e2._0);
    if (c !== 0) {
      return c;
    }
    _e2 = cons_enum(e2._1, e2._2);
    _e1 = cons_enum(e1._1, e1._2);
    continue ;
  };
}

function compare(cmp, s1, s2) {
  return compare_aux(cmp, cons_enum(s1, /* End */0), cons_enum(s2, /* End */0));
}

const empty = /* Empty */0;

const choose = min_elt;

exports.cons_enum = cons_enum;
exports.height = height;
exports.min_elt = min_elt;
exports.max_elt = max_elt;
exports.empty = empty;
exports.is_empty = is_empty;
exports.cardinal_aux = cardinal_aux;
exports.cardinal = cardinal;
exports.elements_aux = elements_aux;
exports.elements = elements;
exports.choose = choose;
exports.iter = iter;
exports.fold = fold;
exports.for_all = for_all;
exports.exists = exists;
exports.max_int3 = max_int3;
exports.max_int_2 = max_int_2;
exports.Height_invariant_broken = Height_invariant_broken;
exports.Height_diff_borken = Height_diff_borken;
exports.check_height_and_diff = check_height_and_diff;
exports.check = check;
exports.create = create;
exports.internal_bal = internal_bal;
exports.remove_min_elt = remove_min_elt;
exports.singleton = singleton;
exports.internal_merge = internal_merge;
exports.add_min_element = add_min_element;
exports.add_max_element = add_max_element;
exports.internal_join = internal_join;
exports.internal_concat = internal_concat;
exports.filter = filter;
exports.partition = partition;
exports.of_sorted_list = of_sorted_list;
exports.of_sorted_array = of_sorted_array;
exports.is_ordered = is_ordered;
exports.invariant = invariant;
exports.compare_aux = compare_aux;
exports.compare = compare;
/* No side effect */
