// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Float_array = require("./float_array.js");
const Mt = require("./mt.js");
const Mt_global = require("./mt_global.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__Buffer = require("melange/buffer.js");
const Stdlib__Format = require("melange/format.js");

const buf = Stdlib__Buffer.create(50);

const fmt = Stdlib__Format.formatter_of_buffer(buf);

function print_float(f) {
  Curry._1(Stdlib__Format.fprintf(fmt)({
          TAG: /* Format */ 0,
          _0: {
            TAG: /* String */ 2,
            _0: /* No_padding */ 0,
            _1: /* End_of_format */ 0
          },
          _1: "%s"
        }), Stdlib.string_of_float(f));
}

function print_newline(param) {
  Stdlib__Format.fprintf(fmt)({
        TAG: /* Format */ 0,
        _0: {
          TAG: /* Char_literal */ 12,
          _0: /* '\n' */10,
          _1: /* End_of_format */ 0
        },
        _1: "\n"
      });
}

const s = {
  f: 1.0
};

print_float(1.0);

print_newline(undefined);

const b = Float_array.small_float_array(12);

const c = Float_array.longer_float_array(34);

function print_array(a) {
  Stdlib__Array.iter((function (f) {
        print_float(f);
        print_newline(undefined);
      }), a);
  print_newline(undefined);
}

print_array(b[0]);

print_array(c[0]);

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(f, a, b) {
  Mt_global.collect_eq(test_id, suites, f, a, b);
}

eq("File \"jscomp/test/tfloat_record_test.ml\", line 43, characters 5-12", Stdlib__Buffer.contents(buf), "1.\n1.\n2.\n3.\n\n1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n0.\n1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n0.\n1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n0.\n1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.\n0.\n\n");

Mt.from_pair_suites("Tfloat_record_test", suites.contents);

module.exports = {
  buf,
  fmt,
  print_float,
  print_newline,
  s,
  b,
  c,
  print_array,
  suites,
  test_id,
  eq,
}
/* buf Not a pure module */
