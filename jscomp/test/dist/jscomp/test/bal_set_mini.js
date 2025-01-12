// Generated by Melange
'use strict';


function height(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return param._3;
  }
}

function create(l, v, r) {
  const hl = height(l);
  const hr = height(r);
  return {
    TAG: /* Node */0,
    _0: l,
    _1: v,
    _2: r,
    _3: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function bal(l, v, r) {
  const hl = height(l);
  const hr = height(r);
  if (hl > (hr + 2 | 0)) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return /* Empty */0;
    }
    const lr = l._2;
    const lv = l._1;
    const ll = l._0;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, create(lr, v, r));
    } else if (/* tag */typeof lr === "number" || typeof lr === "string") {
      return /* Empty */0;
    } else {
      return create(create(ll, lv, lr._0), lr._1, create(lr._2, v, r));
    }
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
    return /* Empty */0;
  }
  const rr = r._2;
  const rv = r._1;
  const rl = r._0;
  if (height(rr) >= height(rl)) {
    return create(create(l, v, rl), rv, rr);
  } else if (/* tag */typeof rl === "number" || typeof rl === "string") {
    return /* Empty */0;
  } else {
    return create(create(l, v, rl._0), rl._1, create(rl._2, rv, rr));
  }
}

function compare_int(x, y) {
  if (x > y) {
    return 1;
  } else if (x === y) {
    return 0;
  } else {
    return -1;
  }
}

function add(x, t) {
  if (/* tag */typeof t === "number" || typeof t === "string") {
    return {
      TAG: /* Node */0,
      _0: /* Empty */0,
      _1: x,
      _2: /* Empty */0,
      _3: 1
    };
  }
  const r = t._2;
  const v = t._1;
  const l = t._0;
  const c = compare_int(x, v);
  if (c === 0) {
    return t;
  } else if (c < 0) {
    return bal(add(x, l), v, r);
  } else {
    return bal(l, v, add(x, r));
  }
}

function min_elt(_def, _param) {
  while(true) {
    const param = _param;
    const def = _def;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return def;
    }
    const l = param._0;
    if (/* tag */typeof l === "number" || typeof l === "string") {
      return param._1;
    }
    _param = l;
    _def = param._1;
    continue;
  };
}

function remove_min_elt(l, v, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return r;
  } else {
    return bal(remove_min_elt(l._0, l._1, l._2), v, r);
  }
}

function internal_merge(l, r) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return r;
  }
  if (/* tag */typeof r === "number" || typeof r === "string") {
    return l;
  }
  const rv = r._1;
  return bal(l, min_elt(rv, r), remove_min_elt(r._0, rv, r._2));
}

function remove(x, tree) {
  if (/* tag */typeof tree === "number" || typeof tree === "string") {
    return /* Empty */0;
  }
  const r = tree._2;
  const v = tree._1;
  const l = tree._0;
  const c = compare_int(x, v);
  if (c === 0) {
    return internal_merge(l, r);
  } else if (c < 0) {
    return bal(remove(x, l), v, r);
  } else {
    return bal(l, v, remove(x, r));
  }
}

function mem(x, _param) {
  while(true) {
    const param = _param;
    if (/* tag */typeof param === "number" || typeof param === "string") {
      return false;
    }
    const c = compare_int(x, param._1);
    if (c === 0) {
      return true;
    }
    _param = c < 0 ? param._0 : param._2;
    continue;
  };
}

let v = /* Empty */0;

for (let i = 0; i <= 100000; ++i) {
  v = add(i, v);
}

for (let i$1 = 0; i$1 <= 100000; ++i$1) {
  if (!mem(i$1, v)) {
    console.log("impossible");
  }
  
}

for (let i$2 = 0; i$2 <= 100000; ++i$2) {
  v = remove(i$2, v);
}

const match = v;

if (!/* tag */(typeof match === "number" || typeof match === "string")) {
  console.log("impossible");
}

exports.height = height;
exports.create = create;
exports.bal = bal;
exports.compare_int = compare_int;
exports.add = add;
exports.min_elt = min_elt;
exports.remove_min_elt = remove_min_elt;
exports.internal_merge = internal_merge;
exports.remove = remove;
exports.mem = mem;
/*  Not a pure module */
