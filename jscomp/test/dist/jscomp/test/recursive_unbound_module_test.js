// Generated by Melange
'use strict';

const Caml_module = require("melange.js/caml_module.js");

function Make(X) {
  const f = function (param) {
    
  };
  const M = {
    f: f
  };
  return {
    M: M
  };
}

const B = Caml_module.init_mod([
  "jscomp/test/recursive_unbound_module_test.ml",
  18,
  0
], {
  TAG: /* Module */ 0,
  _0: [[
      {
        TAG: /* Module */ 0,
        _0: [[
            /* Function */ 0,
            "f"
          ]]
      },
      "M"
    ]]
});

function f(param) {
  
}

const M = {
  f: f
};

Caml_module.update_mod({
  TAG: /* Module */ 0,
  _0: [[
      {
        TAG: /* Module */ 0,
        _0: [[
            /* Function */ 0,
            "f"
          ]]
      },
      "M"
    ]]
}, B, {
  M: M
});

let A;

module.exports = {
  Make,
  A,
  B,
}
/* B Not a pure module */
