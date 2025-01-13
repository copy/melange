// Generated by Melange
'use strict';

const CamlinternalLazy = require("melange/camlinternalLazy.js");

function fix(param) {
  return {
    TAG: /* Fix */ 0,
    _0: {
      LAZY_DONE: false,
      VAL: (function () {
        return fix(undefined);
      })
    }
  };
}

function unfixLeak(_f) {
  while(true) {
    const f = _f;
    _f = CamlinternalLazy.force(f._0);
    continue;
  };
}

function unfix(p) {
  while(true) {
    const match = p.contents;
    p.contents = CamlinternalLazy.force(match._0);
  };
}

exports.fix = fix;
exports.unfixLeak = unfixLeak;
exports.unfix = unfix;
/* No side effect */
