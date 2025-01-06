// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function $$eval(_bdd, vars) {
  while(true) {
    const bdd = _bdd;
    if (/* tag */typeof bdd === "number" || typeof bdd === "string") {
      if (bdd === /* One */0) {
        return true;
      } else {
        return false;
      }
    }
    if (Caml_array.get(vars, bdd._1)) {
      _bdd = bdd._3;
      continue ;
    }
    _bdd = bdd._0;
    continue ;
  };
}

function getId(bdd) {
  if (/* tag */typeof bdd === "number" || typeof bdd === "string") {
    if (bdd === /* One */0) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return bdd._2;
  }
}

const nodeC = {
  contents: 1
};

const sz_1 = {
  contents: 8191
};

const htab = {
  contents: Caml_array.make(sz_1.contents + 1 | 0, /* [] */0)
};

const n_items = {
  contents: 0
};

function hashVal(x, y, v) {
  return ((x << 1) + y | 0) + (v << 2) | 0;
}

function resize(newSize) {
  const arr = htab.contents;
  const newSz_1 = newSize - 1 | 0;
  const newArr = Caml_array.make(newSize, /* [] */0);
  const copyBucket = function (_bucket) {
    while(true) {
      const bucket = _bucket;
      if (!bucket) {
        return ;
      }
      const n = bucket.hd;
      if (/* tag */typeof n === "number" || typeof n === "string") {
        if (n === /* One */0) {
          throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                    MEL_EXN_ID: "Assert_failure",
                    _1: [
                      "jscomp/test/bdd.ml",
                      54,
                      27
                    ]
                  });
        }
        throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                  MEL_EXN_ID: "Assert_failure",
                  _1: [
                    "jscomp/test/bdd.ml",
                    54,
                    27
                  ]
                });
      } else {
        const ind = hashVal(getId(n._0), getId(n._3), n._1) & newSz_1;
        Caml_array.set(newArr, ind, {
              hd: n,
              tl: Caml_array.get(newArr, ind)
            });
        _bucket = bucket.tl;
        continue ;
      }
    };
  };
  for (let n = 0 ,n_finish = sz_1.contents; n <= n_finish; ++n) {
    copyBucket(Caml_array.get(arr, n));
  }
  htab.contents = newArr;
  sz_1.contents = newSz_1;
}

function insert(idl, idh, v, ind, bucket, newNode) {
  if (n_items.contents <= sz_1.contents) {
    Caml_array.set(htab.contents, ind, {
          hd: newNode,
          tl: bucket
        });
    n_items.contents = n_items.contents + 1 | 0;
    return ;
  }
  resize((sz_1.contents + sz_1.contents | 0) + 2 | 0);
  const ind$1 = hashVal(idl, idh, v) & sz_1.contents;
  Caml_array.set(htab.contents, ind$1, {
        hd: newNode,
        tl: Caml_array.get(htab.contents, ind$1)
      });
}

function resetUnique(param) {
  sz_1.contents = 8191;
  htab.contents = Caml_array.make(sz_1.contents + 1 | 0, /* [] */0);
  n_items.contents = 0;
  nodeC.contents = 1;
}

function mkNode(low, v, high) {
  const idl = getId(low);
  const idh = getId(high);
  if (idl === idh) {
    return low;
  }
  const ind = hashVal(idl, idh, v) & sz_1.contents;
  const bucket = Caml_array.get(htab.contents, ind);
  let _b = bucket;
  while(true) {
    const b = _b;
    if (b) {
      const n = b.hd;
      if (/* tag */typeof n === "number" || typeof n === "string") {
        if (n === /* One */0) {
          throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                    MEL_EXN_ID: "Assert_failure",
                    _1: [
                      "jscomp/test/bdd.ml",
                      99,
                      31
                    ]
                  });
        }
        throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                  MEL_EXN_ID: "Assert_failure",
                  _1: [
                    "jscomp/test/bdd.ml",
                    99,
                    31
                  ]
                });
      } else {
        if (v === n._1 && idl === getId(n._0) && idh === getId(n._3)) {
          return n;
        }
        _b = b.tl;
        continue ;
      }
    } else {
      const n_2 = (nodeC.contents = nodeC.contents + 1 | 0, nodeC.contents);
      const n$1 = {
        TAG: /* Node */0,
        _0: low,
        _1: v,
        _2: n_2,
        _3: high
      };
      insert(getId(low), getId(high), v, ind, bucket, n$1);
      return n$1;
    }
  };
}

function cmpVar(x, y) {
  if (x < y) {
    return /* LESS */0;
  } else if (x > y) {
    return /* GREATER */2;
  } else {
    return /* EQUAL */1;
  }
}

function mkVar(x) {
  return mkNode(/* Zero */1, x, /* One */0);
}

const andslot1 = Caml_array.make(1999, 0);

const andslot2 = Caml_array.make(1999, 0);

const andslot3 = Caml_array.make(1999, /* Zero */1);

const xorslot1 = Caml_array.make(1999, 0);

const xorslot2 = Caml_array.make(1999, 0);

const xorslot3 = Caml_array.make(1999, /* Zero */1);

const notslot1 = Caml_array.make(1999, 0);

const notslot2 = Caml_array.make(1999, /* One */0);

function hash(x, y) {
  return ((x << 1) + y | 0) % 1999;
}

function not(n) {
  if (/* tag */typeof n === "number" || typeof n === "string") {
    if (n === /* One */0) {
      return /* Zero */1;
    } else {
      return /* One */0;
    }
  }
  const id = n._2;
  const h = id % 1999;
  if (id === Caml_array.get(notslot1, h)) {
    return Caml_array.get(notslot2, h);
  }
  const f = mkNode(not(n._0), n._1, not(n._3));
  Caml_array.set(notslot1, h, id);
  Caml_array.set(notslot2, h, f);
  return f;
}

function and2(n1, n2) {
  if (/* tag */typeof n1 === "number" || typeof n1 === "string") {
    if (n1 === /* One */0) {
      return n2;
    } else {
      return /* Zero */1;
    }
  }
  const r1 = n1._3;
  const i1 = n1._2;
  const v1 = n1._1;
  const l1 = n1._0;
  if (/* tag */typeof n2 === "number" || typeof n2 === "string") {
    if (n2 === /* One */0) {
      return n1;
    } else {
      return /* Zero */1;
    }
  }
  const r2 = n2._3;
  const i2 = n2._2;
  const v2 = n2._1;
  const l2 = n2._0;
  const h = hash(i1, i2);
  if (i1 === Caml_array.get(andslot1, h) && i2 === Caml_array.get(andslot2, h)) {
    return Caml_array.get(andslot3, h);
  }
  const match = cmpVar(v1, v2);
  let f;
  switch (match) {
    case /* LESS */0 :
        f = mkNode(and2(l1, n2), v1, and2(r1, n2));
        break;
    case /* EQUAL */1 :
        f = mkNode(and2(l1, l2), v1, and2(r1, r2));
        break;
    case /* GREATER */2 :
        f = mkNode(and2(n1, l2), v2, and2(n1, r2));
        break;
    
  }
  Caml_array.set(andslot1, h, i1);
  Caml_array.set(andslot2, h, i2);
  Caml_array.set(andslot3, h, f);
  return f;
}

function xor(n1, n2) {
  if (/* tag */typeof n1 === "number" || typeof n1 === "string") {
    if (n1 === /* One */0) {
      return not(n2);
    } else {
      return n2;
    }
  }
  const r1 = n1._3;
  const i1 = n1._2;
  const v1 = n1._1;
  const l1 = n1._0;
  if (/* tag */typeof n2 === "number" || typeof n2 === "string") {
    if (n2 === /* One */0) {
      return not(n1);
    } else {
      return n1;
    }
  }
  const r2 = n2._3;
  const i2 = n2._2;
  const v2 = n2._1;
  const l2 = n2._0;
  const h = hash(i1, i2);
  if (i1 === Caml_array.get(andslot1, h) && i2 === Caml_array.get(andslot2, h)) {
    return Caml_array.get(andslot3, h);
  }
  const match = cmpVar(v1, v2);
  let f;
  switch (match) {
    case /* LESS */0 :
        f = mkNode(xor(l1, n2), v1, xor(r1, n2));
        break;
    case /* EQUAL */1 :
        f = mkNode(xor(l1, l2), v1, xor(r1, r2));
        break;
    case /* GREATER */2 :
        f = mkNode(xor(n1, l2), v2, xor(n1, r2));
        break;
    
  }
  Caml_array.set(andslot1, h, i1);
  Caml_array.set(andslot2, h, i2);
  Caml_array.set(andslot3, h, f);
  return f;
}

function hwb(n) {
  const h = function (i, j) {
    if (i === j) {
      return mkNode(/* Zero */1, i, /* One */0);
    } else {
      return xor(and2(not(mkNode(/* Zero */1, j, /* One */0)), h(i, j - 1 | 0)), and2(mkNode(/* Zero */1, j, /* One */0), g(i, j - 1 | 0)));
    }
  };
  const g = function (i, j) {
    if (i === j) {
      return mkNode(/* Zero */1, i, /* One */0);
    } else {
      return xor(and2(not(mkNode(/* Zero */1, i, /* One */0)), h(i + 1 | 0, j)), and2(mkNode(/* Zero */1, i, /* One */0), g(i + 1 | 0, j)));
    }
  };
  return h(0, n - 1 | 0);
}

const seed = {
  contents: 0
};

function random(param) {
  seed.contents = Math.imul(seed.contents, 25173) + 17431 | 0;
  return (seed.contents & 1) > 0;
}

function random_vars(n) {
  const vars = Caml_array.make(n, false);
  for (let i = 0; i < n; ++i) {
    Caml_array.set(vars, i, random(undefined));
  }
  return vars;
}

function bool_equal(a, b) {
  if (a) {
    if (b) {
      return true;
    } else {
      return false;
    }
  } else if (b) {
    return false;
  } else {
    return true;
  }
}

function test_hwb(bdd, vars) {
  let ntrue = 0;
  for (let i = 0 ,i_finish = vars.length; i < i_finish; ++i) {
    if (Caml_array.get(vars, i)) {
      ntrue = ntrue + 1 | 0;
    }
    
  }
  return bool_equal($$eval(bdd, vars), ntrue > 0 ? Caml_array.get(vars, ntrue - 1 | 0) : false);
}

function main(param) {
  const bdd = hwb(22);
  let succeeded = true;
  for (let _i = 1; _i <= 100; ++_i) {
    succeeded = succeeded && test_hwb(bdd, random_vars(22));
  }
  if (succeeded) {
    return ;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/bdd.ml",
              233,
              2
            ]
          });
}

main(undefined);

const initSize_1 = 8191;

const zero = /* Zero */1;

const one = /* One */0;

const cacheSize = 1999;

exports.$$eval = $$eval;
exports.getId = getId;
exports.initSize_1 = initSize_1;
exports.nodeC = nodeC;
exports.sz_1 = sz_1;
exports.htab = htab;
exports.n_items = n_items;
exports.hashVal = hashVal;
exports.resize = resize;
exports.insert = insert;
exports.resetUnique = resetUnique;
exports.mkNode = mkNode;
exports.cmpVar = cmpVar;
exports.zero = zero;
exports.one = one;
exports.mkVar = mkVar;
exports.cacheSize = cacheSize;
exports.andslot1 = andslot1;
exports.andslot2 = andslot2;
exports.andslot3 = andslot3;
exports.xorslot1 = xorslot1;
exports.xorslot2 = xorslot2;
exports.xorslot3 = xorslot3;
exports.notslot1 = notslot1;
exports.notslot2 = notslot2;
exports.hash = hash;
exports.not = not;
exports.and2 = and2;
exports.xor = xor;
exports.hwb = hwb;
exports.seed = seed;
exports.random = random;
exports.random_vars = random_vars;
exports.bool_equal = bool_equal;
exports.test_hwb = test_hwb;
exports.main = main;
/*  Not a pure module */
