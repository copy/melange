// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__List = require("melange/list.js");
const Assert = require("assert");
const Path = require("path");
const Process = require("process");

function assert_fail(msg) {
  Assert.fail(undefined, undefined, msg, "");
}

function is_mocha(param) {
  const match = Stdlib__Array.to_list(Process.argv);
  if (!match) {
    return false;
  }
  const match$1 = match.tl;
  if (!match$1) {
    return false;
  }
  const exec = Path.basename(match$1.hd);
  if (exec === "mocha") {
    return true;
  } else {
    return exec === "_mocha";
  }
}

function from_suites(name, suite) {
  const match = Stdlib__Array.to_list(Process.argv);
  if (match && is_mocha(undefined)) {
    describe(name, (function () {
          return Stdlib__List.iter((function (param) {
                const partial_arg = param[1];
                it(param[0], (function () {
                      return Curry._1(partial_arg, undefined);
                    }));
              }), suite);
        }));
    return;
  }
  
}

function close_enough(thresholdOpt, a, b) {
  const threshold = thresholdOpt !== undefined ? thresholdOpt : 0.0000001;
  return Math.abs(a - b) < threshold;
}

function handleCode(spec) {
  switch (spec.TAG) {
    case /* Eq */ 0 :
        Assert.deepEqual(spec._0, spec._1);
        return;
    case /* Neq */ 1 :
        Assert.notDeepEqual(spec._0, spec._1);
        return;
    case /* StrictEq */ 2 :
        Assert.strictEqual(spec._0, spec._1);
        return;
    case /* StrictNeq */ 3 :
        Assert.notStrictEqual(spec._0, spec._1);
        return;
    case /* Ok */ 4 :
        Assert.ok(spec._0);
        return;
    case /* Approx */ 5 :
        const b = spec._1;
        const a = spec._0;
        if (!close_enough(undefined, a, b)) {
          Assert.deepEqual(a, b);
          return;
        } else {
          return;
        }
    case /* ApproxThreshold */ 6 :
        const b$1 = spec._2;
        const a$1 = spec._1;
        if (!close_enough(spec._0, a$1, b$1)) {
          Assert.deepEqual(a$1, b$1);
          return;
        } else {
          return;
        }
    case /* ThrowAny */ 7 :
        Assert.throws(spec._0);
        return;
    case /* Fail */ 8 :
        return assert_fail("failed");
    case /* FailWith */ 9 :
        return assert_fail(spec._0);
    
  }
}

function from_pair_suites(name, suites) {
  const match = Stdlib__Array.to_list(Process.argv);
  if (match) {
    if (is_mocha(undefined)) {
      describe(name, (function () {
            return Stdlib__List.iter((function (param) {
                  const code = param[1];
                  it(param[0], (function () {
                        return handleCode(Curry._1(code, undefined));
                      }));
                }), suites);
          }));
      return;
    } else {
      console.log([
            name,
            "testing"
          ]);
      return Stdlib__List.iter((function (param) {
            const name = param[0];
            const _fn = Curry._1(param[1], undefined);
            switch (_fn.TAG) {
              case /* Eq */ 0 :
                  console.log([
                        name,
                        _fn._0,
                        "eq?",
                        _fn._1
                      ]);
                  return;
              case /* Neq */ 1 :
                  console.log([
                        name,
                        _fn._0,
                        "neq?",
                        _fn._1
                      ]);
                  return;
              case /* StrictEq */ 2 :
                  console.log([
                        name,
                        _fn._0,
                        "strict_eq?",
                        _fn._1
                      ]);
                  return;
              case /* StrictNeq */ 3 :
                  console.log([
                        name,
                        _fn._0,
                        "strict_neq?",
                        _fn._1
                      ]);
                  return;
              case /* Ok */ 4 :
                  console.log([
                        name,
                        _fn._0,
                        "ok?"
                      ]);
                  return;
              case /* Approx */ 5 :
                  console.log([
                        name,
                        _fn._0,
                        "~",
                        _fn._1
                      ]);
                  return;
              case /* ApproxThreshold */ 6 :
                  console.log([
                        name,
                        _fn._1,
                        "~",
                        _fn._2,
                        " (",
                        _fn._0,
                        ")"
                      ]);
                  return;
              case /* ThrowAny */ 7 :
                  return;
              case /* Fail */ 8 :
                  console.log("failed");
                  return;
              case /* FailWith */ 9 :
                  console.log("failed: " + _fn._0);
                  return;
              
            }
          }), suites);
    }
  }
  
}

const val_unit = Promise.resolve(undefined);

function from_promise_suites(name, suites) {
  const match = Stdlib__Array.to_list(Process.argv);
  if (match) {
    if (is_mocha(undefined)) {
      describe(name, (function () {
            return Stdlib__List.iter((function (param) {
                  const code = param[1];
                  it(param[0], (function () {
                        return code.then(function (x) {
                              handleCode(x);
                              return val_unit;
                            });
                      }));
                }), suites);
          }));
    } else {
      console.log("promise suites");
    }
    return;
  }
  
}

function eq_suites(test_id, suites, loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

function bool_suites(test_id, suites, loc, x) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Ok */ 4,
          _0: x
        };
      })
    ],
    tl: suites.contents
  };
}

function throw_suites(test_id, suites, loc, x) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* ThrowAny */ 7,
          _0: x
        };
      })
    ],
    tl: suites.contents
  };
}

exports.from_suites = from_suites;
exports.from_pair_suites = from_pair_suites;
exports.from_promise_suites = from_promise_suites;
exports.eq_suites = eq_suites;
exports.bool_suites = bool_suites;
exports.throw_suites = throw_suites;
/* val_unit Not a pure module */
