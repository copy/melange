// Generated by Melange
'use strict';

const Caml = require("melange.js/caml.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_option = require("melange.js/caml_option.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__Seq = require("melange/seq.js");

const compare = Caml.caml_int_compare;

const funarg = {
  compare: compare
};

function height(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return param.h;
  }
}

function create(l, x, d, r) {
  const hl = height(l);
  const hr = height(r);
  return {
    TAG: /* Node */0,
    l: l,
    v: x,
    d: d,
    r: r,
    h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function singleton(x, d) {
  return {
    TAG: /* Node */0,
    l: /* Empty */0,
    v: x,
    d: d,
    r: /* Empty */0,
    h: 1
  };
}

function bal(l, x, d, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l.h;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r.h;
  if (hl > (hr + 2 | 0)) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
    }
    const lr = l.r;
    const ld = l.d;
    const lv = l.v;
    const ll = l.l;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, ld, create(lr, x, d, r));
    }
    if (!/* tag */(typeof lr === "number" || typeof lr === "string")) {
      return create(create(ll, lv, ld, lr.l), lr.v, lr.d, create(lr.r, x, d, r));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Map.bal"
        });
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: /* Node */0,
      l: l,
      v: x,
      d: d,
      r: r,
      h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (/* tag */typeof r === "number" || typeof r === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Map.bal"
        });
  }
  const rr = r.r;
  const rd = r.d;
  const rv = r.v;
  const rl = r.l;
  if (height(rr) >= height(rl)) {
    return create(create(l, x, d, rl), rv, rd, rr);
  }
  if (!/* tag */(typeof rl === "number" || typeof rl === "string")) {
    return create(create(l, x, d, rl.l), rl.v, rl.d, create(rl.r, rv, rd, rr));
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
        MEL_EXN_ID: "Invalid_argument",
        _1: "Map.bal"
      });
}

function is_empty(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return true;
  } else {
    return false;
  }
}

function add(x, data, m) {
  if (/* tag */typeof m === "number" || typeof m === "string") {
    return {
      TAG: /* Node */0,
      l: /* Empty */0,
      v: x,
      d: data,
      r: /* Empty */0,
      h: 1
    };
  }
  const r = m.r;
  const d = m.d;
  const v = m.v;
  const l = m.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    if (d === data) {
      return m;
    } else {
      return {
        TAG: /* Node */0,
        l: l,
        v: x,
        d: data,
        r: r,
        h: m.h
      };
    }
  }
  if (c < 0) {
    const ll = add(x, data, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  const rr = add(x, data, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function find(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const c = Curry._2(funarg.compare, x, param.v);
    if (c === 0) {
      return param.d;
    }
    _param = c < 0 ? param.l : param.r;
    continue;
  };
}

function find_first(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.l;
      while(true) {
        const param$1 = _param$1;
        const d0 = _d0;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return [
            v0,
            d0
          ];
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.l;
          _d0 = param$1.d;
          _v0 = v$1;
          continue;
        }
        _param$1 = param$1.r;
        continue;
      };
    }
    _param = param.r;
    continue;
  };
}

function find_first_opt(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.l;
      while(true) {
        const param$1 = _param$1;
        const d0 = _d0;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return [
            v0,
            d0
          ];
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.l;
          _d0 = param$1.d;
          _v0 = v$1;
          continue;
        }
        _param$1 = param$1.r;
        continue;
      };
    }
    _param = param.r;
    continue;
  };
}

function find_last(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.r;
      while(true) {
        const param$1 = _param$1;
        const d0 = _d0;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return [
            v0,
            d0
          ];
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.r;
          _d0 = param$1.d;
          _v0 = v$1;
          continue;
        }
        _param$1 = param$1.l;
        continue;
      };
    }
    _param = param.l;
    continue;
  };
}

function find_last_opt(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const v = param.v;
    if (Curry._1(f, v)) {
      let _v0 = v;
      let _d0 = param.d;
      let _param$1 = param.r;
      while(true) {
        const param$1 = _param$1;
        const d0 = _d0;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return [
            v0,
            d0
          ];
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.r;
          _d0 = param$1.d;
          _v0 = v$1;
          continue;
        }
        _param$1 = param$1.l;
        continue;
      };
    }
    _param = param.l;
    continue;
  };
}

function find_opt(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const c = Curry._2(funarg.compare, x, param.v);
    if (c === 0) {
      return Caml_option.some(param.d);
    }
    _param = c < 0 ? param.l : param.r;
    continue;
  };
}

function mem(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return false;
    }
    const c = Curry._2(funarg.compare, x, param.v);
    if (c === 0) {
      return true;
    }
    _param = c < 0 ? param.l : param.r;
    continue;
  };
}

function min_binding(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const l = param.l;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return [
        param.v,
        param.d
      ];
    }
    _param = l;
    continue;
  };
}

function min_binding_opt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const l = param.l;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return [
        param.v,
        param.d
      ];
    }
    _param = l;
    continue;
  };
}

function max_binding(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    let tmp = param.r;
    if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
      return [
        param.v,
        param.d
      ];
    }
    _param = param.r;
    continue;
  };
}

function max_binding_opt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    let tmp = param.r;
    if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
      return [
        param.v,
        param.d
      ];
    }
    _param = param.r;
    continue;
  };
}

function remove_min_binding(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Map.remove_min_elt"
        });
  }
  const l = param.l;
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return param.r;
  } else {
    return bal(remove_min_binding(l), param.v, param.d, param.r);
  }
}

function merge(t1, t2) {
  if (/* tag */typeof t1 === "number" || typeof t1 === "string") {
    return t2;
  }
  if (/* tag */typeof t2 === "number" || typeof t2 === "string") {
    return t1;
  }
  const match = min_binding(t2);
  return bal(t1, match[0], match[1], remove_min_binding(t2));
}

function remove(x, m) {
  if (/* tag */typeof m === "number" || typeof m === "string") {
    return /* Empty */0;
  }
  const r = m.r;
  const d = m.d;
  const v = m.v;
  const l = m.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return merge(l, r);
  }
  if (c < 0) {
    const ll = remove(x, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  const rr = remove(x, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function update(x, f, m) {
  if (/* tag */typeof m === "number" || typeof m === "string") {
    const data = Curry._1(f, undefined);
    if (data !== undefined) {
      return {
        TAG: /* Node */0,
        l: /* Empty */0,
        v: x,
        d: Caml_option.valFromOption(data),
        r: /* Empty */0,
        h: 1
      };
    } else {
      return /* Empty */0;
    }
  }
  const r = m.r;
  const d = m.d;
  const v = m.v;
  const l = m.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    const data$1 = Curry._1(f, Caml_option.some(d));
    if (data$1 === undefined) {
      return merge(l, r);
    }
    const data$2 = Caml_option.valFromOption(data$1);
    if (d === data$2) {
      return m;
    } else {
      return {
        TAG: /* Node */0,
        l: l,
        v: x,
        d: data$2,
        r: r,
        h: m.h
      };
    }
  }
  if (c < 0) {
    const ll = update(x, f, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  const rr = update(x, f, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function add_to_list(x, data, m) {
  const add = function (l) {
    if (l !== undefined) {
      return {
        hd: data,
        tl: l
      };
    } else {
      return {
        hd: data,
        tl: /* [] */0
      };
    }
  };
  return update(x, add, m);
}

function iter(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    iter(f, param.l);
    Curry._2(f, param.v, param.d);
    _param = param.r;
    continue;
  };
}

function map(f, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return /* Empty */0;
  }
  const l$p = map(f, param.l);
  const d$p = Curry._1(f, param.d);
  const r$p = map(f, param.r);
  return {
    TAG: /* Node */0,
    l: l$p,
    v: param.v,
    d: d$p,
    r: r$p,
    h: param.h
  };
}

function mapi(f, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return /* Empty */0;
  }
  const v = param.v;
  const l$p = mapi(f, param.l);
  const d$p = Curry._2(f, v, param.d);
  const r$p = mapi(f, param.r);
  return {
    TAG: /* Node */0,
    l: l$p,
    v: v,
    d: d$p,
    r: r$p,
    h: param.h
  };
}

function fold(f, _m, _accu) {
  while(true) {
    const accu = _accu;
    const m = _m;
    if (/* tag */typeof m === "number" || typeof m === "string") {
      return accu;
    }
    _accu = Curry._3(f, m.v, m.d, fold(f, m.l, accu));
    _m = m.r;
    continue;
  };
}

function for_all(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return true;
    }
    if (!Curry._2(p, param.v, param.d)) {
      return false;
    }
    if (!for_all(p, param.l)) {
      return false;
    }
    _param = param.r;
    continue;
  };
}

function exists(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return false;
    }
    if (Curry._2(p, param.v, param.d)) {
      return true;
    }
    if (exists(p, param.l)) {
      return true;
    }
    _param = param.r;
    continue;
  };
}

function add_min_binding(k, x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(k, x);
  } else {
    return bal(add_min_binding(k, x, param.l), param.v, param.d, param.r);
  }
}

function add_max_binding(k, x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(k, x);
  } else {
    return bal(param.l, param.v, param.d, add_max_binding(k, x, param.r));
  }
}

function join(l, v, d, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return add_min_binding(v, d, r);
  }
  const lh = l.h;
  if (/* tag */typeof r === "number" || typeof r === "string") {
    return add_max_binding(v, d, l);
  }
  const rh = r.h;
  if (lh > (rh + 2 | 0)) {
    return bal(l.l, l.v, l.d, join(l.r, v, d, r));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(l, v, d, r.l), r.v, r.d, r.r);
  } else {
    return create(l, v, d, r);
  }
}

function concat(t1, t2) {
  if (/* tag */typeof t1 === "number" || typeof t1 === "string") {
    return t2;
  }
  if (/* tag */typeof t2 === "number" || typeof t2 === "string") {
    return t1;
  }
  const match = min_binding(t2);
  return join(t1, match[0], match[1], remove_min_binding(t2));
}

function concat_or_join(t1, v, d, t2) {
  if (d !== undefined) {
    return join(t1, v, Caml_option.valFromOption(d), t2);
  } else {
    return concat(t1, t2);
  }
}

function split(x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return [
      /* Empty */0,
      undefined,
      /* Empty */0
    ];
  }
  const r = param.r;
  const d = param.d;
  const v = param.v;
  const l = param.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return [
      l,
      Caml_option.some(d),
      r
    ];
  }
  if (c < 0) {
    const match = split(x, l);
    return [
      match[0],
      match[1],
      join(match[2], v, d, r)
    ];
  }
  const match$1 = split(x, r);
  return [
    join(l, v, d, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}

function merge$1(f, s1, s2) {
  if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
    if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
      return /* Empty */0;
    }
    
  } else {
    const v1 = s1.v;
    if (s1.h >= height(s2)) {
      const match = split(v1, s2);
      return concat_or_join(merge$1(f, s1.l, match[0]), v1, Curry._3(f, v1, Caml_option.some(s1.d), match[1]), merge$1(f, s1.r, match[2]));
    }
    
  }
  if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/stdlib/map.ml",
            408,
            10
          ]
        });
  }
  const v2 = s2.v;
  const match$1 = split(v2, s1);
  return concat_or_join(merge$1(f, match$1[0], s2.l), v2, Curry._3(f, v2, match$1[1], Caml_option.some(s2.d)), merge$1(f, match$1[2], s2.r));
}

function union(f, s1, s2) {
  if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
    return s2;
  }
  const d1 = s1.d;
  const v1 = s1.v;
  if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
    return s1;
  }
  const d2 = s2.d;
  const v2 = s2.v;
  if (s1.h >= s2.h) {
    const match = split(v1, s2);
    const d2$1 = match[1];
    const l = union(f, s1.l, match[0]);
    const r = union(f, s1.r, match[2]);
    if (d2$1 !== undefined) {
      return concat_or_join(l, v1, Curry._3(f, v1, d1, Caml_option.valFromOption(d2$1)), r);
    } else {
      return join(l, v1, d1, r);
    }
  }
  const match$1 = split(v2, s1);
  const d1$1 = match$1[1];
  const l$1 = union(f, match$1[0], s2.l);
  const r$1 = union(f, match$1[2], s2.r);
  if (d1$1 !== undefined) {
    return concat_or_join(l$1, v2, Curry._3(f, v2, Caml_option.valFromOption(d1$1), d2), r$1);
  } else {
    return join(l$1, v2, d2, r$1);
  }
}

function filter(p, m) {
  if (/* tag */typeof m === "number" || typeof m === "string") {
    return /* Empty */0;
  }
  const r = m.r;
  const d = m.d;
  const v = m.v;
  const l = m.l;
  const l$p = filter(p, l);
  const pvd = Curry._2(p, v, d);
  const r$p = filter(p, r);
  if (pvd) {
    if (l === l$p && r === r$p) {
      return m;
    } else {
      return join(l$p, v, d, r$p);
    }
  } else {
    return concat(l$p, r$p);
  }
}

function filter_map(f, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return /* Empty */0;
  }
  const v = param.v;
  const l$p = filter_map(f, param.l);
  const fvd = Curry._2(f, v, param.d);
  const r$p = filter_map(f, param.r);
  if (fvd !== undefined) {
    return join(l$p, v, Caml_option.valFromOption(fvd), r$p);
  } else {
    return concat(l$p, r$p);
  }
}

function partition(p, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return [
      /* Empty */0,
      /* Empty */0
    ];
  }
  const d = param.d;
  const v = param.v;
  const match = partition(p, param.l);
  const lf = match[1];
  const lt = match[0];
  const pvd = Curry._2(p, v, d);
  const match$1 = partition(p, param.r);
  const rf = match$1[1];
  const rt = match$1[0];
  if (pvd) {
    return [
      join(lt, v, d, rt),
      concat(lf, rf)
    ];
  } else {
    return [
      concat(lt, rt),
      join(lf, v, d, rf)
    ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    const e = _e;
    const m = _m;
    if (/* tag */typeof m === "number" || typeof m === "string") {
      return e;
    }
    _e = {
      TAG: /* More */0,
      _0: m.v,
      _1: m.d,
      _2: m.r,
      _3: e
    };
    _m = m.l;
    continue;
  };
}

function compare$1(cmp, m1, m2) {
  let _e1 = cons_enum(m1, /* End */0);
  let _e2 = cons_enum(m2, /* End */0);
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
    const c = Curry._2(funarg.compare, e1._0, e2._0);
    if (c !== 0) {
      return c;
    }
    const c$1 = Curry._2(cmp, e1._1, e2._1);
    if (c$1 !== 0) {
      return c$1;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue;
  };
}

function equal(cmp, m1, m2) {
  let _e1 = cons_enum(m1, /* End */0);
  let _e2 = cons_enum(m2, /* End */0);
  while(true) {
    const e2 = _e2;
    const e1 = _e1;
    if (/* tag */typeof e1 === "number" || typeof e1 === "string") {
      if (/* tag */typeof e2 === "number" || typeof e2 === "string") {
        return true;
      } else {
        return false;
      }
    }
    if (/* tag */typeof e2 === "number" || typeof e2 === "string") {
      return false;
    }
    if (Curry._2(funarg.compare, e1._0, e2._0) !== 0) {
      return false;
    }
    if (!Curry._2(cmp, e1._1, e2._1)) {
      return false;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue;
  };
}

function cardinal(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return (cardinal(param.l) + 1 | 0) + cardinal(param.r) | 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    const param = _param;
    const accu = _accu;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return accu;
    }
    _param = param.l;
    _accu = {
      hd: [
        param.v,
        param.d
      ],
      tl: bindings_aux(accu, param.r)
    };
    continue;
  };
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

function of_list(bs) {
  return Stdlib__List.fold_left((function (m, param) {
          return add(param[0], param[1], m);
        }), /* Empty */0, bs);
}

function add_seq(i, m) {
  return Stdlib__Seq.fold_left((function (m, param) {
          return add(param[0], param[1], m);
        }), m, i);
}

function of_seq(i) {
  return add_seq(i, /* Empty */0);
}

function seq_of_enum_(c, param) {
  if (/* tag */typeof c === "number" || typeof c === "string") {
    return /* Nil */0;
  }
  const partial_arg = cons_enum(c._2, c._3);
  return {
    TAG: /* Cons */0,
    _0: [
      c._0,
      c._1
    ],
    _1: (function (param) {
        return seq_of_enum_(partial_arg, param);
      })
  };
}

function to_seq(m) {
  const partial_arg = cons_enum(m, /* End */0);
  return function (param) {
    return seq_of_enum_(partial_arg, param);
  };
}

function snoc_enum(_s, _e) {
  while(true) {
    const e = _e;
    const s = _s;
    if (/* tag */typeof s === "number" || typeof s === "string") {
      return e;
    }
    _e = {
      TAG: /* More */0,
      _0: s.v,
      _1: s.d,
      _2: s.l,
      _3: e
    };
    _s = s.r;
    continue;
  };
}

function rev_seq_of_enum_(c, param) {
  if (/* tag */typeof c === "number" || typeof c === "string") {
    return /* Nil */0;
  }
  const partial_arg = snoc_enum(c._2, c._3);
  return {
    TAG: /* Cons */0,
    _0: [
      c._0,
      c._1
    ],
    _1: (function (param) {
        return rev_seq_of_enum_(partial_arg, param);
      })
  };
}

function to_rev_seq(c) {
  const partial_arg = snoc_enum(c, /* End */0);
  return function (param) {
    return rev_seq_of_enum_(partial_arg, param);
  };
}

function to_seq_from(low, m) {
  const aux = function (low, _m, _c) {
    while(true) {
      const c = _c;
      const m = _m;
      if (/* tag */typeof m === "number" || typeof m === "string") {
        return c;
      }
      const r = m.r;
      const d = m.d;
      const v = m.v;
      const n = Curry._2(funarg.compare, v, low);
      if (n === 0) {
        return {
          TAG: /* More */0,
          _0: v,
          _1: d,
          _2: r,
          _3: c
        };
      }
      if (n < 0) {
        _m = r;
        continue;
      }
      _c = {
        TAG: /* More */0,
        _0: v,
        _1: d,
        _2: r,
        _3: c
      };
      _m = m.l;
      continue;
    };
  };
  const partial_arg = aux(low, m, /* End */0);
  return function (param) {
    return seq_of_enum_(partial_arg, param);
  };
}

const empty = /* Empty */0;

const add$1 = add;

const add_to_list$1 = add_to_list;

const update$1 = update;

const singleton$1 = singleton;

const remove$1 = remove;

const merge$2 = merge$1;

const union$1 = union;

const cardinal$1 = cardinal;

const bindings$1 = bindings;

const min_binding$1 = min_binding;

const min_binding_opt$1 = min_binding_opt;

const max_binding$1 = max_binding;

const max_binding_opt$1 = max_binding_opt;

const choose = min_binding;

const choose_opt = min_binding_opt;

const find$1 = find;

const find_opt$1 = find_opt;

const find_first$1 = find_first;

const find_first_opt$1 = find_first_opt;

const find_last$1 = find_last;

const find_last_opt$1 = find_last_opt;

const iter$1 = iter;

const fold$1 = fold;

const map$1 = map;

const mapi$1 = mapi;

const filter$1 = filter;

const filter_map$1 = filter_map;

const partition$1 = partition;

const split$1 = split;

const is_empty$1 = is_empty;

const mem$1 = mem;

const equal$1 = equal;

const compare$2 = compare$1;

const for_all$1 = for_all;

const exists$1 = exists;

const to_list = bindings;

const of_list$1 = of_list;

const to_seq$1 = to_seq;

const to_rev_seq$1 = to_rev_seq;

const to_seq_from$1 = to_seq_from;

const add_seq$1 = add_seq;

const of_seq$1 = of_seq;

exports.empty = empty;
exports.add = add$1;
exports.add_to_list = add_to_list$1;
exports.update = update$1;
exports.singleton = singleton$1;
exports.remove = remove$1;
exports.merge = merge$2;
exports.union = union$1;
exports.cardinal = cardinal$1;
exports.bindings = bindings$1;
exports.min_binding = min_binding$1;
exports.min_binding_opt = min_binding_opt$1;
exports.max_binding = max_binding$1;
exports.max_binding_opt = max_binding_opt$1;
exports.choose = choose;
exports.choose_opt = choose_opt;
exports.find = find$1;
exports.find_opt = find_opt$1;
exports.find_first = find_first$1;
exports.find_first_opt = find_first_opt$1;
exports.find_last = find_last$1;
exports.find_last_opt = find_last_opt$1;
exports.iter = iter$1;
exports.fold = fold$1;
exports.map = map$1;
exports.mapi = mapi$1;
exports.filter = filter$1;
exports.filter_map = filter_map$1;
exports.partition = partition$1;
exports.split = split$1;
exports.is_empty = is_empty$1;
exports.mem = mem$1;
exports.equal = equal$1;
exports.compare = compare$2;
exports.for_all = for_all$1;
exports.exists = exists$1;
exports.to_list = to_list;
exports.of_list = of_list$1;
exports.to_seq = to_seq$1;
exports.to_rev_seq = to_rev_seq$1;
exports.to_seq_from = to_seq_from$1;
exports.add_seq = add_seq$1;
exports.of_seq = of_seq$1;
/* include Not a pure module */
