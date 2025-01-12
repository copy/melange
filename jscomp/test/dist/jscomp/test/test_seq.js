// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");

const Bad = /* @__PURE__ */Caml_exceptions.create("Test_seq.Bad");

const Help = /* @__PURE__ */Caml_exceptions.create("Test_seq.Help");

const Stop = /* @__PURE__ */Caml_exceptions.create("Test_seq.Stop");

function assoc3(x, _l) {
  while(true) {
    const l = _l;
    if (l) {
      const match = l.hd;
      if (Caml_obj.caml_equal(match[0], x)) {
        return match[1];
      }
      _l = l.tl;
      continue;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
          MEL_EXN_ID: Stdlib.Not_found
        });
  };
}

function help_action(param) {
  throw new Caml_js_exceptions.MelangeError(Stop, {
        MEL_EXN_ID: Stop,
        _1: {
          TAG: /* Unknown */0,
          _0: "-help"
        }
      });
}

function v(speclist) {
  assoc3("-help", speclist);
  return /* [] */0;
}

function f(g, speclist) {
  return Curry._1(g, assoc3("-help", speclist));
}

function add_help(speclist) {
  let add1;
  try {
    assoc3("-help", speclist);
    add1 = /* [] */0;
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Not_found) {
      add1 = {
        hd: [
          "-help",
          {
            TAG: /* Unit */0,
            _0: help_action
          },
          " Display this list of options"
        ],
        tl: /* [] */0
      };
    } else {
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
  }
  let add2;
  try {
    assoc3("--help", speclist);
    add2 = /* [] */0;
  }
  catch (raw_exn$1){
    const exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
    if (exn$1.MEL_EXN_ID === Stdlib.Not_found) {
      add2 = {
        hd: [
          "--help",
          {
            TAG: /* Unit */0,
            _0: help_action
          },
          " Display this list of options"
        ],
        tl: /* [] */0
      };
    } else {
      throw new Caml_js_exceptions.MelangeError(exn$1.MEL_EXN_ID, exn$1);
    }
  }
  return Stdlib.$at(speclist, Stdlib.$at(add1, add2));
}

exports.Bad = Bad;
exports.Help = Help;
exports.Stop = Stop;
exports.assoc3 = assoc3;
exports.help_action = help_action;
exports.v = v;
exports.f = f;
exports.add_help = add_help;
/* No side effect */
