// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function blackify(s) {
  if (/* tag */ typeof s === "number" || typeof s === "string" || s._0 === /* Black */ 0) {
    return [
      s,
      true
    ];
  } else {
    return [
      {
        TAG: /* Node */ 0,
        _0: /* Black */ 0,
        _1: s._1,
        _2: s._2,
        _3: s._3
      },
      false
    ];
  }
}

function is_empty(param) {
  if (/* tag */ typeof param === "number" || typeof param === "string") {
    return true;
  } else {
    return false;
  }
}

function mem(x, _param) {
  while (true) {
    const param = _param;
    if (/* tag */ typeof param === "number" || typeof param === "string") {
      return false;
    }
    const y = param._2;
    if (x === y) {
      return true;
    }
    if (x < y) {
      _param = param._1;
      continue;
    }
    _param = param._3;
    continue;
  };
}

function balance_left(l, x, r) {
  let exit = 0;
  let a;
  let x$1;
  let b;
  let y;
  let c;
  let z;
  let d;
  if (/* tag */ typeof l === "number" || typeof l === "string" || l._0 === /* Black */ 0) {
    exit = 1;
  } else {
    const a$1 = l._1;
    let exit$1 = 0;
    if (/* tag */ typeof a$1 === "number" || typeof a$1 === "string" || a$1._0 === /* Black */ 0) {
      exit$1 = 3;
    } else {
      a = a$1._1;
      x$1 = a$1._2;
      b = a$1._3;
      y = l._2;
      c = l._3;
      z = x;
      d = r;
      exit = 2;
    }
    if (exit$1 === 3) {
      const match = l._3;
      if (/* tag */ typeof match === "number" || typeof match === "string" || match._0 === /* Black */ 0) {
        exit = 1;
      } else {
        a = a$1;
        x$1 = l._2;
        b = match._1;
        y = match._2;
        c = match._3;
        z = x;
        d = r;
        exit = 2;
      }
    }
    
  }
  switch (exit) {
    case 1 :
      return {
        TAG: /* Node */ 0,
        _0: /* Black */ 0,
        _1: l,
        _2: x,
        _3: r
      };
    case 2 :
      return {
        TAG: /* Node */ 0,
        _0: /* Red */ 1,
        _1: {
          TAG: /* Node */ 0,
          _0: /* Black */ 0,
          _1: a,
          _2: x$1,
          _3: b
        },
        _2: y,
        _3: {
          TAG: /* Node */ 0,
          _0: /* Black */ 0,
          _1: c,
          _2: z,
          _3: d
        }
      };
  }
}

function balance_right(l, x, r) {
  let exit = 0;
  let a;
  let x$1;
  let b;
  let y;
  let c;
  let z;
  let d;
  if (/* tag */ typeof r === "number" || typeof r === "string" || r._0 === /* Black */ 0) {
    exit = 1;
  } else {
    const b$1 = r._1;
    let exit$1 = 0;
    if (/* tag */ typeof b$1 === "number" || typeof b$1 === "string" || b$1._0 === /* Black */ 0) {
      exit$1 = 3;
    } else {
      a = l;
      x$1 = x;
      b = b$1._1;
      y = b$1._2;
      c = b$1._3;
      z = r._2;
      d = r._3;
      exit = 2;
    }
    if (exit$1 === 3) {
      const match = r._3;
      if (/* tag */ typeof match === "number" || typeof match === "string" || match._0 === /* Black */ 0) {
        exit = 1;
      } else {
        a = l;
        x$1 = x;
        b = b$1;
        y = r._2;
        c = match._1;
        z = match._2;
        d = match._3;
        exit = 2;
      }
    }
    
  }
  switch (exit) {
    case 1 :
      return {
        TAG: /* Node */ 0,
        _0: /* Black */ 0,
        _1: l,
        _2: x,
        _3: r
      };
    case 2 :
      return {
        TAG: /* Node */ 0,
        _0: /* Red */ 1,
        _1: {
          TAG: /* Node */ 0,
          _0: /* Black */ 0,
          _1: a,
          _2: x$1,
          _3: b
        },
        _2: y,
        _3: {
          TAG: /* Node */ 0,
          _0: /* Black */ 0,
          _1: c,
          _2: z,
          _3: d
        }
      };
  }
}

function singleton(x) {
  return {
    TAG: /* Node */ 0,
    _0: /* Black */ 0,
    _1: /* Empty */ 0,
    _2: x,
    _3: /* Empty */ 0
  };
}

function unbalanced_left(param) {
  if (!/* tag */ (typeof param === "number" || typeof param === "string")) {
    if (param._0 === /* Black */ 0) {
      const match = param._1;
      if (!/* tag */ (typeof match === "number" || typeof match === "string")) {
        if (match._0 === /* Black */ 0) {
          return [
            balance_left({
                  TAG: /* Node */ 0,
                  _0: /* Red */ 1,
                  _1: match._1,
                  _2: match._2,
                  _3: match._3
                }, param._2, param._3),
            true
          ];
        }
        const match$1 = match._3;
        if (!/* tag */ (typeof match$1 === "number" || typeof match$1 === "string") && match$1._0 === /* Black */ 0) {
          return [
            {
              TAG: /* Node */ 0,
              _0: /* Black */ 0,
              _1: match._1,
              _2: match._2,
              _3: balance_left({
                    TAG: /* Node */ 0,
                    _0: /* Red */ 1,
                    _1: match$1._1,
                    _2: match$1._2,
                    _3: match$1._3
                  }, param._2, param._3)
            },
            false
          ];
        }
        
      }
      
    } else {
      const match$2 = param._1;
      if (!/* tag */ (typeof match$2 === "number" || typeof match$2 === "string") && match$2._0 === /* Black */ 0) {
        return [
          balance_left({
                TAG: /* Node */ 0,
                _0: /* Red */ 1,
                _1: match$2._1,
                _2: match$2._2,
                _3: match$2._3
              }, param._2, param._3),
          false
        ];
      }
      
    }
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/rbset.ml",
          57,
          9
        ]
      });
}

function unbalanced_right(param) {
  if (!/* tag */ (typeof param === "number" || typeof param === "string")) {
    if (param._0 === /* Black */ 0) {
      const match = param._3;
      const x = param._2;
      const a = param._1;
      if (!/* tag */ (typeof match === "number" || typeof match === "string")) {
        if (match._0 === /* Black */ 0) {
          return [
            balance_right(a, x, {
                  TAG: /* Node */ 0,
                  _0: /* Red */ 1,
                  _1: match._1,
                  _2: match._2,
                  _3: match._3
                }),
            true
          ];
        }
        const match$1 = match._1;
        if (!/* tag */ (typeof match$1 === "number" || typeof match$1 === "string") && match$1._0 === /* Black */ 0) {
          return [
            {
              TAG: /* Node */ 0,
              _0: /* Black */ 0,
              _1: balance_right(a, x, {
                    TAG: /* Node */ 0,
                    _0: /* Red */ 1,
                    _1: match$1._1,
                    _2: match$1._2,
                    _3: match$1._3
                  }),
              _2: match._2,
              _3: match._3
            },
            false
          ];
        }
        
      }
      
    } else {
      const match$2 = param._3;
      if (!/* tag */ (typeof match$2 === "number" || typeof match$2 === "string") && match$2._0 === /* Black */ 0) {
        return [
          balance_right(param._1, param._2, {
                TAG: /* Node */ 0,
                _0: /* Red */ 1,
                _1: match$2._1,
                _2: match$2._2,
                _3: match$2._3
              }),
          false
        ];
      }
      
    }
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/rbset.ml",
          63,
          9
        ]
      });
}

function lbalance(x1, x2, x3) {
  if (/* tag */ typeof x1 === "number" || typeof x1 === "string") {
    return {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: x1,
      _2: x2,
      _3: x3
    };
  }
  if (x1._0 === /* Black */ 0) {
    return {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: x1,
      _2: x2,
      _3: x3
    };
  }
  const r = x1._3;
  const l = x1._1;
  if (!/* tag */ (typeof l === "number" || typeof l === "string") && l._0 !== /* Black */ 0) {
    return {
      TAG: /* Node */ 0,
      _0: /* Red */ 1,
      _1: {
        TAG: /* Node */ 0,
        _0: /* Black */ 0,
        _1: l._1,
        _2: l._2,
        _3: l._3
      },
      _2: x1._2,
      _3: {
        TAG: /* Node */ 0,
        _0: /* Black */ 0,
        _1: r,
        _2: x2,
        _3: x3
      }
    };
  }
  if (/* tag */ typeof r === "number" || typeof r === "string") {
    return {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: x1,
      _2: x2,
      _3: x3
    };
  }
  if (r._0 === /* Black */ 0) {
    return {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: x1,
      _2: x2,
      _3: x3
    };
  }
  const y = r._2;
  return {
    TAG: /* Node */ 0,
    _0: /* Red */ 1,
    _1: {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: l,
      _2: y,
      _3: r._1
    },
    _2: y,
    _3: {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: r._3,
      _2: x2,
      _3: x3
    }
  };
}

function rbalance(x1, x2, x3) {
  if (!/* tag */ (typeof x3 === "number" || typeof x3 === "string") && x3._0 !== /* Black */ 0) {
    const b = x3._1;
    let exit = 0;
    if (/* tag */ typeof b === "number" || typeof b === "string") {
      exit = 2;
    } else {
      if (b._0 !== /* Black */ 0) {
        return {
          TAG: /* Node */ 0,
          _0: /* Red */ 1,
          _1: {
            TAG: /* Node */ 0,
            _0: /* Black */ 0,
            _1: x1,
            _2: x2,
            _3: b._1
          },
          _2: b._2,
          _3: {
            TAG: /* Node */ 0,
            _0: /* Black */ 0,
            _1: b._3,
            _2: x3._2,
            _3: x3._3
          }
        };
      }
      exit = 2;
    }
    if (exit === 2) {
      const match = x3._3;
      if (!/* tag */ (typeof match === "number" || typeof match === "string") && match._0 !== /* Black */ 0) {
        return {
          TAG: /* Node */ 0,
          _0: /* Red */ 1,
          _1: {
            TAG: /* Node */ 0,
            _0: /* Black */ 0,
            _1: x1,
            _2: x2,
            _3: b
          },
          _2: x3._2,
          _3: {
            TAG: /* Node */ 0,
            _0: /* Black */ 0,
            _1: match._1,
            _2: match._2,
            _3: match._3
          }
        };
      }
      
    }
    
  }
  return {
    TAG: /* Node */ 0,
    _0: /* Black */ 0,
    _1: x1,
    _2: x2,
    _3: x3
  };
}

function ins(x, s) {
  if (/* tag */ typeof s === "number" || typeof s === "string") {
    return {
      TAG: /* Node */ 0,
      _0: /* Red */ 1,
      _1: /* Empty */ 0,
      _2: x,
      _3: /* Empty */ 0
    };
  }
  if (s._0 === /* Black */ 0) {
    const y = s._2;
    if (x === y) {
      return s;
    }
    const b = s._3;
    const a = s._1;
    if (x < y) {
      return lbalance(ins(x, a), y, b);
    } else {
      return rbalance(a, y, ins(x, b));
    }
  }
  const y$1 = s._2;
  if (x === y$1) {
    return s;
  }
  const b$1 = s._3;
  const a$1 = s._1;
  if (x < y$1) {
    return {
      TAG: /* Node */ 0,
      _0: /* Red */ 1,
      _1: ins(x, a$1),
      _2: y$1,
      _3: b$1
    };
  } else {
    return {
      TAG: /* Node */ 0,
      _0: /* Red */ 1,
      _1: a$1,
      _2: y$1,
      _3: ins(x, b$1)
    };
  }
}

function add(x, s) {
  const s$1 = ins(x, s);
  if (/* tag */ typeof s$1 === "number" || typeof s$1 === "string" || s$1._0 === /* Black */ 0) {
    return s$1;
  } else {
    return {
      TAG: /* Node */ 0,
      _0: /* Black */ 0,
      _1: s$1._1,
      _2: s$1._2,
      _3: s$1._3
    };
  }
}

function remove_min(param) {
  if (/* tag */ typeof param === "number" || typeof param === "string") {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/rbset.ml",
            115,
            4
          ]
        });
  }
  const c = param._0;
  if (c === /* Black */ 0) {
    let tmp = param._1;
    if (/* tag */ typeof tmp === "number" || typeof tmp === "string") {
      const match = param._3;
      const x = param._2;
      if (/* tag */ typeof match === "number" || typeof match === "string") {
        return [
          /* Empty */ 0,
          x,
          true
        ];
      }
      if (match._0 !== /* Black */ 0) {
        return [
          {
            TAG: /* Node */ 0,
            _0: /* Black */ 0,
            _1: match._1,
            _2: match._2,
            _3: match._3
          },
          x,
          false
        ];
      }
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/rbset.ml",
              115,
              4
            ]
          });
    }
    
  } else {
    let tmp$1 = param._1;
    if (/* tag */ typeof tmp$1 === "number" || typeof tmp$1 === "string") {
      return [
        param._3,
        param._2,
        false
      ];
    }
    
  }
  const match$1 = remove_min(param._1);
  const y = match$1[1];
  const s_1 = match$1[0];
  const s_2 = param._2;
  const s_3 = param._3;
  const s = {
    TAG: /* Node */ 0,
    _0: c,
    _1: s_1,
    _2: s_2,
    _3: s_3
  };
  if (!match$1[2]) {
    return [
      s,
      y,
      false
    ];
  }
  const match$2 = unbalanced_right(s);
  return [
    match$2[0],
    y,
    match$2[1]
  ];
}

function remove_aux(x, n) {
  if (/* tag */ typeof n === "number" || typeof n === "string") {
    return [
      /* Empty */ 0,
      false
    ];
  }
  const r = n._3;
  const y = n._2;
  const l = n._1;
  const c = n._0;
  if (x === y) {
    if (/* tag */ typeof r === "number" || typeof r === "string") {
      if (c === /* Red */ 1) {
        return [
          l,
          false
        ];
      } else {
        return blackify(l);
      }
    }
    const match = remove_min(r);
    const n_2 = match[1];
    const n_3 = match[0];
    const n$1 = {
      TAG: /* Node */ 0,
      _0: c,
      _1: l,
      _2: n_2,
      _3: n_3
    };
    if (match[2]) {
      return unbalanced_left(n$1);
    } else {
      return [
        n$1,
        false
      ];
    }
  }
  if (x < y) {
    const match$1 = remove_aux(x, l);
    const n_1 = match$1[0];
    const n$2 = {
      TAG: /* Node */ 0,
      _0: c,
      _1: n_1,
      _2: y,
      _3: r
    };
    if (match$1[1]) {
      return unbalanced_right(n$2);
    } else {
      return [
        n$2,
        false
      ];
    }
  }
  const match$2 = remove_aux(x, r);
  const n_3$1 = match$2[0];
  const n$3 = {
    TAG: /* Node */ 0,
    _0: c,
    _1: l,
    _2: y,
    _3: n_3$1
  };
  if (match$2[1]) {
    return unbalanced_left(n$3);
  } else {
    return [
      n$3,
      false
    ];
  }
}

function remove(x, s) {
  return remove_aux(x, s)[0];
}

function cardinal(param) {
  if (/* tag */ typeof param === "number" || typeof param === "string") {
    return 0;
  } else {
    return (1 + cardinal(param._1) | 0) + cardinal(param._3) | 0;
  }
}

const empty = /* Empty */ 0;

exports.blackify = blackify;
exports.empty = empty;
exports.is_empty = is_empty;
exports.mem = mem;
exports.balance_left = balance_left;
exports.balance_right = balance_right;
exports.singleton = singleton;
exports.unbalanced_left = unbalanced_left;
exports.unbalanced_right = unbalanced_right;
exports.lbalance = lbalance;
exports.rbalance = rbalance;
exports.ins = ins;
exports.add = add;
exports.remove_min = remove_min;
exports.remove_aux = remove_aux;
exports.remove = remove;
exports.cardinal = cardinal;
/* No side effect */
