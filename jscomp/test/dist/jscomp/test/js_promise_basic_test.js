// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");

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

function assert_bool(b) {
  if (b) {
    return ;
  }
  throw new Caml_js_exceptions.MelangeError(Stdlib.Invalid_argument, {
        MEL_EXN_ID: Stdlib.Invalid_argument,
        _1: "Assertion Failure."
      });
}

function fail(param) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/js_promise_basic_test.ml",
          17,
          2
        ]
      });
}

function thenTest(param) {
  const p = Promise.resolve(4);
  return p.then(function (x) {
        return Promise.resolve(assert_bool(x === 4));
      });
}

function andThenTest(param) {
  const p = Promise.resolve(6);
  return p.then(function (param) {
          return Promise.resolve(12);
        }).then(function (y) {
        return Promise.resolve(assert_bool(y === 12));
      });
}

const h = Promise.resolve(undefined);

function assertIsNotFound(x) {
  const match = Caml_exceptions.caml_is_extension(x) && x.MEL_EXN_ID === Stdlib.Not_found ? 0 : undefined;
  if (match !== undefined) {
    return h;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/js_promise_basic_test.ml",
          34,
          9
        ]
      });
}

function catchTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.then(fail).catch(assertIsNotFound);
}

function orResolvedTest(param) {
  const p = Promise.resolve(42);
  return p.catch(function (param) {
            return Promise.resolve(22);
          }).then(function (value) {
          return Promise.resolve(assert_bool(value === 42));
        }).catch(fail);
}

function orRejectedTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.catch(function (param) {
            return Promise.resolve(22);
          }).then(function (value) {
          return Promise.resolve(assert_bool(value === 22));
        }).catch(fail);
}

function orElseResolvedTest(param) {
  const p = Promise.resolve(42);
  return p.catch(function (param) {
            return Promise.resolve(22);
          }).then(function (value) {
          return Promise.resolve(assert_bool(value === 42));
        }).catch(fail);
}

function orElseRejectedResolveTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.catch(function (param) {
            return Promise.resolve(22);
          }).then(function (value) {
          return Promise.resolve(assert_bool(value === 22));
        }).catch(fail);
}

function orElseRejectedRejectTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.catch(function (param) {
            return Promise.reject({
                  MEL_EXN_ID: Stdlib.Stack_overflow
                });
          }).then(fail).catch(function (error) {
        const match = Caml_exceptions.caml_is_extension(error) && error.MEL_EXN_ID === Stdlib.Stack_overflow ? 0 : undefined;
        if (match !== undefined) {
          return h;
        }
        throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/js_promise_basic_test.ml",
                76,
                19
              ]
            });
      });
}

function resolveTest(param) {
  const p1 = Promise.resolve(10);
  return p1.then(function (x) {
        return Promise.resolve(assert_bool(x === 10));
      });
}

function rejectTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.catch(assertIsNotFound);
}

function thenCatchChainResolvedTest(param) {
  const p = Promise.resolve(20);
  return p.then(function (value) {
          return Promise.resolve(assert_bool(value === 20));
        }).catch(fail);
}

function thenCatchChainRejectedTest(param) {
  const p = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  return p.then(fail).catch(assertIsNotFound);
}

function allResolvedTest(param) {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);
  const promises = [
    p1,
    p2,
    p3
  ];
  return Promise.all(promises).then(function (resolved) {
        assert_bool(Caml_array.get(resolved, 0) === 1);
        assert_bool(Caml_array.get(resolved, 1) === 2);
        assert_bool(Caml_array.get(resolved, 2) === 3);
        return h;
      });
}

function is_not_found(error) {
  return error.MEL_EXN_ID === Stdlib.Not_found;
}

function allRejectTest(param) {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(3);
  const p3 = Promise.reject({
        MEL_EXN_ID: Stdlib.Not_found
      });
  const promises = [
    p1,
    p2,
    p3
  ];
  return Promise.all(promises).then(fail).catch(function (error) {
        assert_bool(error.MEL_EXN_ID === Stdlib.Not_found);
        return h;
      });
}

function raceTest(param) {
  const p1 = Promise.resolve("first");
  const p2 = Promise.resolve("second");
  const p3 = Promise.resolve("third");
  const promises = [
    p1,
    p2,
    p3
  ];
  return Promise.race(promises).then(function (resolved) {
          return h;
        }).catch(fail);
}

function createPromiseRejectTest(param) {
  return new Promise((function (resolve, reject) {
            reject({
                  MEL_EXN_ID: Stdlib.Not_found
                });
          })).catch(function (error) {
        assert_bool(error.MEL_EXN_ID === Stdlib.Not_found);
        return h;
      });
}

function createPromiseFulfillTest(param) {
  return new Promise((function (resolve, param) {
              resolve("success");
            })).then(function (resolved) {
          assert_bool(resolved === "success");
          return h;
        }).catch(fail);
}

thenTest(undefined);

andThenTest(undefined);

catchTest(undefined);

orResolvedTest(undefined);

orRejectedTest(undefined);

orElseResolvedTest(undefined);

orElseRejectedResolveTest(undefined);

orElseRejectedRejectTest(undefined);

thenCatchChainResolvedTest(undefined);

thenCatchChainRejectedTest(undefined);

allResolvedTest(undefined);

allRejectTest(undefined);

raceTest(undefined);

createPromiseRejectTest(undefined);

createPromiseFulfillTest(undefined);

Promise.all([
        Promise.resolve(2),
        Promise.resolve(3)
      ]).then(function (param) {
      eq("File \"jscomp/test/js_promise_basic_test.ml\", line 168, characters 12-19", [
            param[0],
            param[1]
          ], [
            2,
            3
          ]);
      return Promise.resolve(undefined);
    });

console.log(Stdlib__List.length(suites.contents));

console.log("hey");

Mt.from_pair_suites("Js_promise_basic_test", suites.contents);

const twop = Promise.resolve(2);

function then_(prim0, prim1) {
  return prim1.then(Curry.__1(prim0));
}

function re(prim) {
  return Promise.resolve(prim);
}

Mt.from_promise_suites("Js_promise_basic_test", {
      hd: [
        "File \"jscomp/test/js_promise_basic_test.ml\", line 188, characters 5-12",
        twop.then(function (x) {
              return Promise.resolve({
                    TAG: /* Eq */0,
                    _0: x,
                    _1: 2
                  });
            })
      ],
      tl: {
        hd: [
          "File \"jscomp/test/js_promise_basic_test.ml\", line 189, characters 5-12",
          twop.then(function (x) {
                return Promise.resolve({
                      TAG: /* Neq */1,
                      _0: x,
                      _1: 3
                    });
              })
        ],
        tl: /* [] */0
      }
    });

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.assert_bool = assert_bool;
exports.fail = fail;
exports.thenTest = thenTest;
exports.andThenTest = andThenTest;
exports.h = h;
exports.assertIsNotFound = assertIsNotFound;
exports.catchTest = catchTest;
exports.orResolvedTest = orResolvedTest;
exports.orRejectedTest = orRejectedTest;
exports.orElseResolvedTest = orElseResolvedTest;
exports.orElseRejectedResolveTest = orElseRejectedResolveTest;
exports.orElseRejectedRejectTest = orElseRejectedRejectTest;
exports.resolveTest = resolveTest;
exports.rejectTest = rejectTest;
exports.thenCatchChainResolvedTest = thenCatchChainResolvedTest;
exports.thenCatchChainRejectedTest = thenCatchChainRejectedTest;
exports.allResolvedTest = allResolvedTest;
exports.is_not_found = is_not_found;
exports.allRejectTest = allRejectTest;
exports.raceTest = raceTest;
exports.createPromiseRejectTest = createPromiseRejectTest;
exports.createPromiseFulfillTest = createPromiseFulfillTest;
exports.twop = twop;
exports.then_ = then_;
exports.re = re;
/* h Not a pure module */
