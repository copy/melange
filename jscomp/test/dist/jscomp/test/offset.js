// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Caml_option = require("melange.js/caml_option.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__Seq = require("melange/seq.js");
const Stdlib__String = require("melange/string.js");

const funarg = {
  compare: Stdlib__String.compare
};

function height(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return param.h;
  }
}

function create(l, v, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l.h;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r.h;
  return {
    TAG: /* Node */0,
    l: l,
    v: v,
    r: r,
    h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function bal(l, v, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l.h;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r.h;
  if (hl > (hr + 2 | 0)) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Set.bal"
          });
    }
    const lr = l.r;
    const lv = l.v;
    const ll = l.l;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, create(lr, v, r));
    }
    if (!/* tag */(typeof lr === "number" || typeof lr === "string")) {
      return create(create(ll, lv, lr.l), lr.v, create(lr.r, v, r));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Set.bal"
        });
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: /* Node */0,
      l: l,
      v: v,
      r: r,
      h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (/* tag */typeof r === "number" || typeof r === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Set.bal"
        });
  }
  const rr = r.r;
  const rv = r.v;
  const rl = r.l;
  if (height(rr) >= height(rl)) {
    return create(create(l, v, rl), rv, rr);
  }
  if (!/* tag */(typeof rl === "number" || typeof rl === "string")) {
    return create(create(l, v, rl.l), rl.v, create(rl.r, rv, rr));
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
        MEL_EXN_ID: "Invalid_argument",
        _1: "Set.bal"
      });
}

function add(x, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return {
      TAG: /* Node */0,
      l: /* Empty */0,
      v: x,
      r: /* Empty */0,
      h: 1
    };
  }
  const r = t.r;
  const v = t.v;
  const l = t.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return t;
  }
  if (c < 0) {
    const ll = add(x, l);
    if (l === ll) {
      return t;
    } else {
      return bal(ll, v, r);
    }
  }
  const rr = add(x, r);
  if (r === rr) {
    return t;
  } else {
    return bal(l, v, rr);
  }
}

function singleton(x) {
  return {
    TAG: /* Node */0,
    l: /* Empty */0,
    v: x,
    r: /* Empty */0,
    h: 1
  };
}

function add_min_element(x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(x);
  } else {
    return bal(add_min_element(x, param.l), param.v, param.r);
  }
}

function add_max_element(x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return singleton(x);
  } else {
    return bal(param.l, param.v, add_max_element(x, param.r));
  }
}

function join(l, v, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return add_min_element(v, r);
  }
  const lh = l.h;
  if (/* tag */typeof r === "number" || typeof r === "string") {
    return add_max_element(v, l);
  }
  const rh = r.h;
  if (lh > (rh + 2 | 0)) {
    return bal(l.l, l.v, join(l.r, v, r));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(l, v, r.l), r.v, r.r);
  } else {
    return create(l, v, r);
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
    const l = param.l;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return param.v;
    }
    _param = l;
    continue ;
  };
}

function min_elt_opt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const l = param.l;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return Caml_option.some(param.v);
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
    let tmp = param.r;
    if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
      return param.v;
    }
    _param = param.r;
    continue ;
  };
}

function max_elt_opt(_param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    let tmp = param.r;
    if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
      return Caml_option.some(param.v);
    }
    _param = param.r;
    continue ;
  };
}

function remove_min_elt(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Set.remove_min_elt"
        });
  }
  const l = param.l;
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return param.r;
  } else {
    return bal(remove_min_elt(l), param.v, param.r);
  }
}

function concat(t1, t2) {
  if (/* tag */typeof t1 === "number" || typeof t1 === "string") {
    return t2;
  } else if (/* tag */typeof t2 === "number" || typeof t2 === "string") {
    return t1;
  } else {
    return join(t1, min_elt(t2), remove_min_elt(t2));
  }
}

function split(x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return [
      /* Empty */0,
      false,
      /* Empty */0
    ];
  }
  const r = param.r;
  const v = param.v;
  const l = param.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return [
      l,
      true,
      r
    ];
  }
  if (c < 0) {
    const match = split(x, l);
    return [
      match[0],
      match[1],
      join(match[2], v, r)
    ];
  }
  const match$1 = split(x, r);
  return [
    join(l, v, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}

function is_empty(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return true;
  } else {
    return false;
  }
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
    continue ;
  };
}

function remove(x, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return /* Empty */0;
  }
  const r = t.r;
  const v = t.v;
  const l = t.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return r;
    } else if (/* tag */typeof r === "number" || typeof r === "string") {
      return l;
    } else {
      return bal(l, min_elt(r), remove_min_elt(r));
    }
  }
  if (c < 0) {
    const ll = remove(x, l);
    if (l === ll) {
      return t;
    } else {
      return bal(ll, v, r);
    }
  }
  const rr = remove(x, r);
  if (r === rr) {
    return t;
  } else {
    return bal(l, v, rr);
  }
}

function union(s1, s2) {
  if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
    return s2;
  }
  const h1 = s1.h;
  const v1 = s1.v;
  if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
    return s1;
  }
  const h2 = s2.h;
  const v2 = s2.v;
  if (h1 >= h2) {
    if (h2 === 1) {
      return add(v2, s1);
    }
    const match = split(v1, s2);
    return join(union(s1.l, match[0]), v1, union(s1.r, match[2]));
  }
  if (h1 === 1) {
    return add(v1, s2);
  }
  const match$1 = split(v2, s1);
  return join(union(match$1[0], s2.l), v2, union(match$1[2], s2.r));
}

function inter(s1, s2) {
  if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
    return /* Empty */0;
  }
  if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
    return /* Empty */0;
  }
  const r1 = s1.r;
  const v1 = s1.v;
  const l1 = s1.l;
  const match = split(v1, s2);
  const l2 = match[0];
  if (match[1]) {
    return join(inter(l1, l2), v1, inter(r1, match[2]));
  } else {
    return concat(inter(l1, l2), inter(r1, match[2]));
  }
}

function split_bis(x, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return {
      TAG: /* NotFound */0,
      _0: /* Empty */0,
      _1: (function (param) {
          return /* Empty */0;
        })
    };
  }
  const r = param.r;
  const v = param.v;
  const l = param.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    return /* Found */0;
  }
  if (c < 0) {
    const match = split_bis(x, l);
    if (/* tag */typeof match === "number" || typeof match === "string") {
      return /* Found */0;
    }
    const rl = match._1;
    return {
      TAG: /* NotFound */0,
      _0: match._0,
      _1: (function (param) {
          return join(Curry._1(rl, undefined), v, r);
        })
    };
  }
  const match$1 = split_bis(x, r);
  if (/* tag */typeof match$1 === "number" || typeof match$1 === "string") {
    return /* Found */0;
  } else {
    return {
      TAG: /* NotFound */0,
      _0: join(l, v, match$1._0),
      _1: match$1._1
    };
  }
}

function disjoint(_s1, _s2) {
  while(true) {
    const s2 = _s2;
    const s1 = _s1;
    if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
      return true;
    }
    if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
      return true;
    }
    if (s1 === s2) {
      return false;
    }
    const match = split_bis(s1.v, s2);
    if (/* tag */typeof match === "number" || typeof match === "string") {
      return false;
    }
    if (!disjoint(s1.l, match._0)) {
      return false;
    }
    _s2 = Curry._1(match._1, undefined);
    _s1 = s1.r;
    continue ;
  };
}

function diff(s1, s2) {
  if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
    return /* Empty */0;
  }
  if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
    return s1;
  }
  const r1 = s1.r;
  const v1 = s1.v;
  const l1 = s1.l;
  const match = split(v1, s2);
  const l2 = match[0];
  if (match[1]) {
    return concat(diff(l1, l2), diff(r1, match[2]));
  } else {
    return join(diff(l1, l2), v1, diff(r1, match[2]));
  }
}

function cons_enum(_s, _e) {
  while(true) {
    const e = _e;
    const s = _s;
    if (/* tag */typeof s === "number" || typeof s === "string") {
      return e;
    }
    _e = {
      TAG: /* More */0,
      _0: s.v,
      _1: s.r,
      _2: e
    };
    _s = s.l;
    continue ;
  };
}

function compare(s1, s2) {
  let _e1 = cons_enum(s1, /* End */0);
  let _e2 = cons_enum(s2, /* End */0);
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
    _e2 = cons_enum(e2._1, e2._2);
    _e1 = cons_enum(e1._1, e1._2);
    continue ;
  };
}

function equal(s1, s2) {
  return compare(s1, s2) === 0;
}

function subset(_s1, _s2) {
  while(true) {
    const s2 = _s2;
    const s1 = _s1;
    if (/* tag */typeof s1 === "number" || typeof s1 === "string") {
      return true;
    }
    const r1 = s1.r;
    const v1 = s1.v;
    const l1 = s1.l;
    if (/* tag */typeof s2 === "number" || typeof s2 === "string") {
      return false;
    }
    const r2 = s2.r;
    const l2 = s2.l;
    const c = Curry._2(funarg.compare, v1, s2.v);
    if (c === 0) {
      if (!subset(l1, l2)) {
        return false;
      }
      _s2 = r2;
      _s1 = r1;
      continue ;
    }
    if (c < 0) {
      if (!subset({
              TAG: /* Node */0,
              l: l1,
              v: v1,
              r: /* Empty */0,
              h: 0
            }, l2)) {
        return false;
      }
      _s1 = r1;
      continue ;
    }
    if (!subset({
            TAG: /* Node */0,
            l: /* Empty */0,
            v: v1,
            r: r1,
            h: 0
          }, r2)) {
      return false;
    }
    _s1 = l1;
    continue ;
  };
}

function iter(f, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    iter(f, param.l);
    Curry._1(f, param.v);
    _param = param.r;
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
    _accu = Curry._2(f, s.v, fold(f, s.l, accu));
    _s = s.r;
    continue ;
  };
}

function for_all(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return true;
    }
    if (!Curry._1(p, param.v)) {
      return false;
    }
    if (!for_all(p, param.l)) {
      return false;
    }
    _param = param.r;
    continue ;
  };
}

function exists(p, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return false;
    }
    if (Curry._1(p, param.v)) {
      return true;
    }
    if (exists(p, param.l)) {
      return true;
    }
    _param = param.r;
    continue ;
  };
}

function filter(p, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return /* Empty */0;
  }
  const r = t.r;
  const v = t.v;
  const l = t.l;
  const l$p = filter(p, l);
  const pv = Curry._1(p, v);
  const r$p = filter(p, r);
  if (pv) {
    if (l === l$p && r === r$p) {
      return t;
    } else {
      return join(l$p, v, r$p);
    }
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
  const v = param.v;
  const match = partition(p, param.l);
  const lf = match[1];
  const lt = match[0];
  const pv = Curry._1(p, v);
  const match$1 = partition(p, param.r);
  const rf = match$1[1];
  const rt = match$1[0];
  if (pv) {
    return [
      join(lt, v, rt),
      concat(lf, rf)
    ];
  } else {
    return [
      concat(lt, rt),
      join(lf, v, rf)
    ];
  }
}

function cardinal(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return (cardinal(param.l) + 1 | 0) + cardinal(param.r) | 0;
  }
}

function elements_aux(_accu, _param) {
  while(true) {
    const param = _param;
    const accu = _accu;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return accu;
    }
    _param = param.l;
    _accu = {
      hd: param.v,
      tl: elements_aux(accu, param.r)
    };
    continue ;
  };
}

function elements(s) {
  return elements_aux(/* [] */0, s);
}

function find(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    const v = param.v;
    const c = Curry._2(funarg.compare, x, v);
    if (c === 0) {
      return v;
    }
    _param = c < 0 ? param.l : param.r;
    continue ;
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
      let _param$1 = param.l;
      while(true) {
        const param$1 = _param$1;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return v0;
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.l;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.r;
        continue ;
      };
    }
    _param = param.r;
    continue ;
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
      let _param$1 = param.l;
      while(true) {
        const param$1 = _param$1;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return Caml_option.some(v0);
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.l;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.r;
        continue ;
      };
    }
    _param = param.r;
    continue ;
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
      let _param$1 = param.r;
      while(true) {
        const param$1 = _param$1;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return v0;
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.r;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.l;
        continue ;
      };
    }
    _param = param.l;
    continue ;
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
      let _param$1 = param.r;
      while(true) {
        const param$1 = _param$1;
        const v0 = _v0;
        if (/* tag */typeof param$1 === "number" || typeof param$1 === "string") {
          return Caml_option.some(v0);
        }
        const v$1 = param$1.v;
        if (Curry._1(f, v$1)) {
          _param$1 = param$1.r;
          _v0 = v$1;
          continue ;
        }
        _param$1 = param$1.l;
        continue ;
      };
    }
    _param = param.l;
    continue ;
  };
}

function find_opt(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return ;
    }
    const v = param.v;
    const c = Curry._2(funarg.compare, x, v);
    if (c === 0) {
      return Caml_option.some(v);
    }
    _param = c < 0 ? param.l : param.r;
    continue ;
  };
}

function try_join(l, v, r) {
  if ((Caml_obj.caml_equal(l, /* Empty */0) || Curry._2(funarg.compare, max_elt(l), v) < 0) && (Caml_obj.caml_equal(r, /* Empty */0) || Curry._2(funarg.compare, v, min_elt(r)) < 0)) {
    return join(l, v, r);
  } else {
    return union(l, add(v, r));
  }
}

function map(f, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return /* Empty */0;
  }
  const r = t.r;
  const v = t.v;
  const l = t.l;
  const l$p = map(f, l);
  const v$p = Curry._1(f, v);
  const r$p = map(f, r);
  if (l === l$p && v === v$p && r === r$p) {
    return t;
  } else {
    return try_join(l$p, v$p, r$p);
  }
}

function filter_map(f, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return /* Empty */0;
  }
  const r = t.r;
  const v = t.v;
  const l = t.l;
  const l$p = filter_map(f, l);
  const v$p = Curry._1(f, v);
  const r$p = filter_map(f, r);
  if (v$p === undefined) {
    if (/* tag */typeof l$p === "number" || typeof l$p === "string") {
      return r$p;
    } else if (/* tag */typeof r$p === "number" || typeof r$p === "string") {
      return l$p;
    } else {
      return try_join(l$p, min_elt(r$p), remove_min_elt(r$p));
    }
  }
  const v$p$1 = Caml_option.valFromOption(v$p);
  if (l === l$p && v === v$p$1 && r === r$p) {
    return t;
  } else {
    return try_join(l$p, v$p$1, r$p);
  }
}

function of_list(l) {
  if (!l) {
    return /* Empty */0;
  }
  const match = l.tl;
  const x0 = l.hd;
  if (!match) {
    return singleton(x0);
  }
  const match$1 = match.tl;
  const x1 = match.hd;
  if (!match$1) {
    return add(x1, singleton(x0));
  }
  const match$2 = match$1.tl;
  const x2 = match$1.hd;
  if (!match$2) {
    return add(x2, add(x1, singleton(x0)));
  }
  const match$3 = match$2.tl;
  const x3 = match$2.hd;
  if (match$3) {
    if (match$3.tl) {
      let l$1 = Stdlib__List.sort_uniq(funarg.compare, l);
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
                    l: /* Empty */0,
                    v: l.hd,
                    r: /* Empty */0,
                    h: 1
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
                      l: {
                        TAG: /* Node */0,
                        l: /* Empty */0,
                        v: l.hd,
                        r: /* Empty */0,
                        h: 1
                      },
                      v: match.hd,
                      r: /* Empty */0,
                      h: 2
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
                        l: {
                          TAG: /* Node */0,
                          l: /* Empty */0,
                          v: l.hd,
                          r: /* Empty */0,
                          h: 1
                        },
                        v: match$1.hd,
                        r: {
                          TAG: /* Node */0,
                          l: /* Empty */0,
                          v: match$2.hd,
                          r: /* Empty */0,
                          h: 1
                        },
                        h: 2
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
                "jscomp/stdlib/set.ml",
                571,
                18
              ]
            });
      };
      return sub(Stdlib__List.length(l$1), l$1)[0];
    } else {
      return add(match$3.hd, add(x3, add(x2, add(x1, singleton(x0)))));
    }
  } else {
    return add(x3, add(x2, add(x1, singleton(x0))));
  }
}

function add_seq(i, m) {
  return Stdlib__Seq.fold_left((function (s, x) {
          return add(x, s);
        }), m, i);
}

function of_seq(i) {
  return add_seq(i, /* Empty */0);
}

function seq_of_enum_(c, param) {
  if (/* tag */typeof c === "number" || typeof c === "string") {
    return /* Nil */0;
  }
  const partial_arg = cons_enum(c._1, c._2);
  return {
    TAG: /* Cons */0,
    _0: c._0,
    _1: (function (param) {
        return seq_of_enum_(partial_arg, param);
      })
  };
}

function to_seq(c) {
  const partial_arg = cons_enum(c, /* End */0);
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
      _1: s.l,
      _2: e
    };
    _s = s.r;
    continue ;
  };
}

function rev_seq_of_enum_(c, param) {
  if (/* tag */typeof c === "number" || typeof c === "string") {
    return /* Nil */0;
  }
  const partial_arg = snoc_enum(c._1, c._2);
  return {
    TAG: /* Cons */0,
    _0: c._0,
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

function to_seq_from(low, s) {
  const aux = function (low, _s, _c) {
    while(true) {
      const c = _c;
      const s = _s;
      if (/* tag */typeof s === "number" || typeof s === "string") {
        return c;
      }
      const r = s.r;
      const v = s.v;
      const n = Curry._2(funarg.compare, v, low);
      if (n === 0) {
        return {
          TAG: /* More */0,
          _0: v,
          _1: r,
          _2: c
        };
      }
      if (n < 0) {
        _s = r;
        continue ;
      }
      _c = {
        TAG: /* More */0,
        _0: v,
        _1: r,
        _2: c
      };
      _s = s.l;
      continue ;
    };
  };
  const partial_arg = aux(low, s, /* End */0);
  return function (param) {
    return seq_of_enum_(partial_arg, param);
  };
}

const $$Set = {
  empty: /* Empty */0,
  add: add,
  singleton: singleton,
  remove: remove,
  union: union,
  inter: inter,
  disjoint: disjoint,
  diff: diff,
  cardinal: cardinal,
  elements: elements,
  min_elt: min_elt,
  min_elt_opt: min_elt_opt,
  max_elt: max_elt,
  max_elt_opt: max_elt_opt,
  choose: min_elt,
  choose_opt: min_elt_opt,
  find: find,
  find_opt: find_opt,
  find_first: find_first,
  find_first_opt: find_first_opt,
  find_last: find_last,
  find_last_opt: find_last_opt,
  iter: iter,
  fold: fold,
  map: map,
  filter: filter,
  filter_map: filter_map,
  partition: partition,
  split: split,
  is_empty: is_empty,
  mem: mem,
  equal: equal,
  compare: compare,
  subset: subset,
  for_all: for_all,
  exists: exists,
  to_list: elements,
  of_list: of_list,
  to_seq_from: to_seq_from,
  to_seq: to_seq,
  to_rev_seq: to_rev_seq,
  add_seq: add_seq,
  of_seq: of_seq
};

const M = {
  x: 1,
  $$Set: $$Set
};

const x = 1;

exports.M = M;
exports.x = x;
exports.$$Set = $$Set;
/* Set Not a pure module */
