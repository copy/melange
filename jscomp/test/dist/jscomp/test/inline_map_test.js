// Generated by Melange
'use strict';

const Caml = require("melange.js/caml.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");

function height(param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return param._4;
  }
}

function create(l, x, d, r) {
  const hl = height(l);
  const hr = height(r);
  return {
    TAG: /* Node */0,
    _0: l,
    _1: x,
    _2: d,
    _3: r,
    _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function bal(l, x, d, r) {
  let hl;
  hl = /* tag */typeof l === "number" || typeof l === "string" ? 0 : l._4;
  let hr;
  hr = /* tag */typeof r === "number" || typeof r === "string" ? 0 : r._4;
  if (hl > (hr + 2 | 0)) {
    if (/* tag */typeof l === "number" || typeof l === "string") {
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
    }
    const lr = l._3;
    const ld = l._2;
    const lv = l._1;
    const ll = l._0;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, ld, create(lr, x, d, r));
    }
    if (!/* tag */(typeof lr === "number" || typeof lr === "string")) {
      return create(create(ll, lv, ld, lr._0), lr._1, lr._2, create(lr._3, x, d, r));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Map.bal"
        });
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: /* Node */0,
      _0: l,
      _1: x,
      _2: d,
      _3: r,
      _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (/* tag */typeof r === "number" || typeof r === "string") {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Map.bal"
        });
  }
  const rr = r._3;
  const rd = r._2;
  const rv = r._1;
  const rl = r._0;
  if (height(rr) >= height(rl)) {
    return create(create(l, x, d, rl), rv, rd, rr);
  }
  if (!/* tag */(typeof rl === "number" || typeof rl === "string")) {
    return create(create(l, x, d, rl._0), rl._1, rl._2, create(rl._3, rv, rd, rr));
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
        MEL_EXN_ID: "Invalid_argument",
        _1: "Map.bal"
      });
}

function add(x, data, param) {
  if (/* tag */typeof param === "number" || typeof param === "string") {
    return {
      TAG: /* Node */0,
      _0: /* Empty */0,
      _1: x,
      _2: data,
      _3: /* Empty */0,
      _4: 1
    };
  }
  const r = param._3;
  const d = param._2;
  const v = param._1;
  const l = param._0;
  const c = Caml.caml_int_compare(x, v);
  if (c === 0) {
    return {
      TAG: /* Node */0,
      _0: l,
      _1: x,
      _2: data,
      _3: r,
      _4: param._4
    };
  } else if (c < 0) {
    return bal(add(x, data, l), v, d, r);
  } else {
    return bal(l, v, d, add(x, data, r));
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
    const c = Caml.caml_int_compare(x, param._1);
    if (c === 0) {
      return param._2;
    }
    _param = c < 0 ? param._0 : param._3;
    continue;
  };
}

const m = Stdlib__List.fold_left((function (acc, param) {
      return add(param[0], param[1], acc);
    }), /* Empty */0, {
      hd: [
        10,
        /* 'a' */97
      ],
      tl: {
        hd: [
          3,
          /* 'b' */98
        ],
        tl: {
          hd: [
            7,
            /* 'c' */99
          ],
          tl: {
            hd: [
              20,
              /* 'd' */100
            ],
            tl: /* [] */0
          }
        }
      }
    });

Mt.from_pair_suites("Inline_map_test", {
      hd: [
        "find",
        (function (param) {
          return {
            TAG: /* Eq */0,
            _0: find(10, m),
            _1: /* 'a' */97
          };
        })
      ],
      tl: /* [] */0
    });

/* m Not a pure module */
