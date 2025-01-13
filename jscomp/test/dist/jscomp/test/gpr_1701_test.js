// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");

const Foo = /* @__PURE__ */ Caml_exceptions.create("Gpr_1701_test.Foo");

function test(n) {
  if (n === 0) {
    throw new Caml_js_exceptions.MelangeError(Foo, {
          MEL_EXN_ID: Foo
        });
  }
  try {
    return test(n - 1 | 0);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Foo) {
      return;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

test(100);

function read_lines(inc) {
  let _acc = /* [] */ 0;
  while(true) {
    const acc = _acc;
    let l;
    try {
      l = Stdlib.input_line(inc);
    }
    catch (raw_exn){
      const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn.MEL_EXN_ID === Stdlib.End_of_file) {
        l = undefined;
      } else {
        throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
      }
    }
    if (l === undefined) {
      return Stdlib__List.rev(acc);
    }
    _acc = {
      hd: l,
      tl: acc
    };
    continue;
  };
}

function read_lines2(inc) {
  let _acc = /* [] */ 0;
  while(true) {
    const acc = _acc;
    let l;
    try {
      l = Stdlib.input_line(inc);
    }
    catch (raw_exn){
      const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn.MEL_EXN_ID === Stdlib.End_of_file) {
        return Stdlib__List.rev(acc);
      }
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
    _acc = {
      hd: l,
      tl: acc
    };
    continue;
  };
}

function read_lines3(inc) {
  const loop = function (acc) {
    try {
      const l = Stdlib.input_line(inc);
      return loop({
            hd: l,
            tl: acc
          });
    }
    catch (raw_exn){
      const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn.MEL_EXN_ID === Stdlib.End_of_file) {
        return Stdlib__List.rev(acc);
      }
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
  };
  return loop(/* [] */ 0);
}

function fff(f, x) {
  try {
    return fff(f, x);
  }
  catch (exn){
    return x + 1 | 0;
  }
}

exports.Foo = Foo;
exports.test = test;
exports.read_lines = read_lines;
exports.read_lines2 = read_lines2;
exports.read_lines3 = read_lines3;
exports.fff = fff;
/*  Not a pure module */
