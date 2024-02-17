// Generated by Melange
'use strict';

const Caml = require("melange.js/caml.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");

const compare = Caml.caml_int_compare;

const funarg = {
  compare: compare
};

function height(param) {
  if (param) {
    return param.h;
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  const hl = height(l);
  const hr = height(r);
  return /* Node */{
          l: l,
          v: x,
          d: d,
          r: r,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, x, d, r) {
  const hl = l ? l.h : 0;
  const hr = r ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      const lr = l.r;
      const ld = l.d;
      const lv = l.v;
      const ll = l.l;
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      }
      if (lr) {
        return create(create(ll, lv, ld, lr.l), lr.v, lr.d, create(lr.r, x, d, r));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Map.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  if (hr <= (hl + 2 | 0)) {
    return /* Node */{
            l: l,
            v: x,
            d: d,
            r: r,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
  if (r) {
    const rr = r.r;
    const rd = r.d;
    const rv = r.v;
    const rl = r.l;
    if (height(rr) >= height(rl)) {
      return create(create(l, x, d, rl), rv, rd, rr);
    }
    if (rl) {
      return create(create(l, x, d, rl.l), rl.v, rl.d, create(rl.r, rv, rd, rr));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
}

function add(x, data, m) {
  if (!m) {
    return /* Node */{
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
      return /* Node */{
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
    if (param) {
      const c = Curry._2(funarg.compare, x, param.v);
      if (c === 0) {
        return param.d;
      }
      _param = c < 0 ? param.l : param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

const m = Stdlib__List.fold_left((function (acc, param) {
        return Curry._3(add, param[0], param[1], acc);
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

const compare$1 = Caml.caml_string_compare;

const funarg$1 = {
  compare: compare$1
};

function height$1(param) {
  if (param) {
    return param.h;
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  const hl = height$1(l);
  const hr = height$1(r);
  return /* Node */{
          l: l,
          v: x,
          d: d,
          r: r,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal$1(l, x, d, r) {
  const hl = l ? l.h : 0;
  const hr = r ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      const lr = l.r;
      const ld = l.d;
      const lv = l.v;
      const ll = l.l;
      if (height$1(ll) >= height$1(lr)) {
        return create$1(ll, lv, ld, create$1(lr, x, d, r));
      }
      if (lr) {
        return create$1(create$1(ll, lv, ld, lr.l), lr.v, lr.d, create$1(lr.r, x, d, r));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Map.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  if (hr <= (hl + 2 | 0)) {
    return /* Node */{
            l: l,
            v: x,
            d: d,
            r: r,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
  if (r) {
    const rr = r.r;
    const rd = r.d;
    const rv = r.v;
    const rl = r.l;
    if (height$1(rr) >= height$1(rl)) {
      return create$1(create$1(l, x, d, rl), rv, rd, rr);
    }
    if (rl) {
      return create$1(create$1(l, x, d, rl.l), rl.v, rl.d, create$1(rl.r, rv, rd, rr));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
}

function add$1(x, data, m) {
  if (!m) {
    return /* Node */{
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
  const c = Curry._2(funarg$1.compare, x, v);
  if (c === 0) {
    if (d === data) {
      return m;
    } else {
      return /* Node */{
              l: l,
              v: x,
              d: data,
              r: r,
              h: m.h
            };
    }
  }
  if (c < 0) {
    const ll = add$1(x, data, l);
    if (l === ll) {
      return m;
    } else {
      return bal$1(ll, v, d, r);
    }
  }
  const rr = add$1(x, data, r);
  if (r === rr) {
    return m;
  } else {
    return bal$1(l, v, d, rr);
  }
}

function find$1(x, _param) {
  while(true) {
    const param = _param;
    if (param) {
      const c = Curry._2(funarg$1.compare, x, param.v);
      if (c === 0) {
        return param.d;
      }
      _param = c < 0 ? param.l : param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

const s = Stdlib__List.fold_left((function (acc, param) {
        return Curry._3(add$1, param[0], param[1], acc);
      }), /* Empty */0, {
      hd: [
        "10",
        /* 'a' */97
      ],
      tl: {
        hd: [
          "3",
          /* 'b' */98
        ],
        tl: {
          hd: [
            "7",
            /* 'c' */99
          ],
          tl: {
            hd: [
              "20",
              /* 'd' */100
            ],
            tl: /* [] */0
          }
        }
      }
    });

Mt.from_pair_suites("Map_find_test", {
      hd: [
        "int",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: Curry._2(find, 10, m),
                    _1: /* 'a' */97
                  };
          })
      ],
      tl: {
        hd: [
          "string",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: Curry._2(find$1, "10", s),
                      _1: /* 'a' */97
                    };
            })
        ],
        tl: /* [] */0
      }
    });

/* IntMap Not a pure module */
