// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function is_number(_expr) {
  while(true) {
    const expr = _expr;
    switch (expr.TAG) {
      case /* Val */0 :
          if (expr._0.TAG === /* Natural */0) {
            return true;
          } else {
            return false;
          }
      case /* Neg */1 :
          _expr = expr._0;
          continue ;
      case /* Sum */2 :
      case /* Pow */3 :
      case /* Frac */4 :
      case /* Gcd */5 :
          return false;
      
    }
  };
}

function compare(context, state, _a, _b) {
  while(true) {
    const b = _b;
    const a = _a;
    let exit = 0;
    let na;
    let da;
    let nb;
    let db;
    let exit$1 = 0;
    let exit$2 = 0;
    let exit$3 = 0;
    switch (a.TAG) {
      case /* Val */0 :
          switch (b.TAG) {
            case /* Val */0 :
                return 111;
            case /* Neg */1 :
                exit$3 = 5;
                break;
            case /* Sum */2 :
                exit$2 = 4;
                break;
            case /* Frac */4 :
                throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                          MEL_EXN_ID: "Assert_failure",
                          _1: [
                            "jscomp/test/gpr_1698_test.ml",
                            45,
                            10
                          ]
                        });
            case /* Pow */3 :
            case /* Gcd */5 :
                exit = 1;
                break;
            
          }
          break;
      case /* Neg */1 :
          _a = a._0;
          continue ;
      case /* Sum */2 :
      case /* Pow */3 :
          exit$3 = 5;
          break;
      case /* Frac */4 :
          switch (b.TAG) {
            case /* Val */0 :
                throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                          MEL_EXN_ID: "Assert_failure",
                          _1: [
                            "jscomp/test/gpr_1698_test.ml",
                            45,
                            10
                          ]
                        });
            case /* Neg */1 :
                exit$3 = 5;
                break;
            case /* Sum */2 :
                exit$2 = 4;
                break;
            case /* Frac */4 :
                na = a._0;
                da = a._1;
                nb = b._0;
                db = b._1;
                exit = 2;
                break;
            case /* Pow */3 :
            case /* Gcd */5 :
                exit = 1;
                break;
            
          }
          break;
      case /* Gcd */5 :
          switch (b.TAG) {
            case /* Neg */1 :
                exit$3 = 5;
                break;
            case /* Sum */2 :
                exit$2 = 4;
                break;
            case /* Gcd */5 :
                na = a._0;
                da = a._1;
                nb = b._0;
                db = b._1;
                exit = 2;
                break;
            default:
              exit$1 = 3;
          }
          break;
      
    }
    if (exit$3 === 5) {
      if (b.TAG === /* Neg */1) {
        _b = b._0;
        continue ;
      }
      if (a.TAG === /* Sum */2) {
        if (is_number(b)) {
          return 1;
        }
        exit$2 = 4;
      } else {
        exit$2 = 4;
      }
    }
    if (exit$2 === 4) {
      if (b.TAG === /* Sum */2) {
        if (is_number(a)) {
          return -1;
        }
        exit$1 = 3;
      } else {
        exit$1 = 3;
      }
    }
    if (exit$1 === 3) {
      switch (a.TAG) {
        case /* Sum */2 :
            exit = 1;
            break;
        case /* Pow */3 :
            return -1;
        case /* Val */0 :
        case /* Frac */4 :
        case /* Gcd */5 :
            return 1;
        
      }
    }
    switch (exit) {
      case 1 :
          switch (b.TAG) {
            case /* Pow */3 :
                return 1;
            case /* Gcd */5 :
                return -1;
            default:
              return -1;
          }
      case 2 :
          const denom = compare(context, state, da, db);
          if (denom !== 0) {
            return denom;
          }
          _b = nb;
          _a = na;
          continue ;
      
    }
  };
}

const a = {
  TAG: /* Sum */2,
  _0: {
    hd: {
      TAG: /* Val */0,
      _0: {
        TAG: /* Symbol */1,
        _0: "a"
      }
    },
    tl: {
      hd: {
        TAG: /* Val */0,
        _0: {
          TAG: /* Natural */0,
          _0: 2
        }
      },
      tl: /* [] */0
    }
  }
};

const b = {
  TAG: /* Val */0,
  _0: {
    TAG: /* Symbol */1,
    _0: "x"
  }
};

console.log(compare(/* InSum */0, {
          complex: true
        }, a, b));

/*  Not a pure module */
