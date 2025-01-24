// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Mt = require("./mt.js");
const Stdlib__List = require("melange/list.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

let rec_cell = {};

rec_cell.content = 3;

rec_cell.next = rec_cell;

function f0(x) {
  let rec_cell = {};
  Caml_obj.update_dummy(rec_cell, {
        content: Math.imul(x, x) - 6 | 0,
        next: rec_cell
      });
  return rec_cell;
}

function a0(x) {
  return (x.content + x.next.content | 0) + x.next.next.content | 0;
}

eq("File \"jscomp/test/recursive_records_test.ml\", line 29, characters 5-12", a0(rec_cell), 9);

eq("File \"jscomp/test/recursive_records_test.ml\", line 30, characters 5-12", a0(f0(3)), 9);

let rec_cell2 = {};

rec_cell2.content = 3;

rec_cell2.next = rec_cell2;

function f2(x) {
  let rec_cell2 = {};
  Caml_obj.update_dummy(rec_cell2, {
        TAG: /* Cons */ 0,
        content: Math.imul(x, x) - 6 | 0,
        next: rec_cell2
      });
  return rec_cell2;
}

function hd(x) {
  if (/* tag */ typeof x === "number" || typeof x === "string") {
    return 0;
  } else {
    return x.content;
  }
}

function tl_exn(x) {
  if (!/* tag */ (typeof x === "number" || typeof x === "string")) {
    return x.next;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
        MEL_EXN_ID: "Assert_failure",
        _1: [
          "jscomp/test/recursive_records_test.ml",
          52,
          11
        ]
      });
}

eq("File \"jscomp/test/recursive_records_test.ml\", line 56, characters 6-13", (hd(rec_cell2) + hd(tl_exn(rec_cell2)) | 0) + hd(tl_exn(tl_exn(rec_cell2))) | 0, 9);

const rec_cell2$1 = f2(3);

eq("File \"jscomp/test/recursive_records_test.ml\", line 60, characters 5-12", (hd(rec_cell2$1) + hd(tl_exn(rec_cell2$1)) | 0) + hd(tl_exn(tl_exn(rec_cell2$1))) | 0, 9);

let rec_cell3 = {};

rec_cell3.hd = 3;

rec_cell3.tl = rec_cell3;

function f3(x) {
  let rec_cell3 = {};
  Caml_obj.update_dummy(rec_cell3, {
        hd: Math.imul(x, x) - 6 | 0,
        tl: rec_cell3
      });
  return rec_cell3;
}

eq("File \"jscomp/test/recursive_records_test.ml\", line 74, characters 5-12", (Stdlib__List.hd(rec_cell3) + Stdlib__List.hd(Stdlib__List.tl(rec_cell3)) | 0) + Stdlib__List.hd(Stdlib__List.tl(Stdlib__List.tl(rec_cell3))) | 0, 9);

const rec_cell3$1 = f3(3);

eq("File \"jscomp/test/recursive_records_test.ml\", line 77, characters 5-12", (Stdlib__List.hd(rec_cell3$1) + Stdlib__List.hd(Stdlib__List.tl(rec_cell3$1)) | 0) + Stdlib__List.hd(Stdlib__List.tl(Stdlib__List.tl(rec_cell3$1))) | 0, 9);

Mt.from_pair_suites("jscomp/test/recursive_records_test.ml", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  rec_cell,
  f0,
  a0,
  rec_cell2,
  f2,
  hd,
  tl_exn,
  rec_cell3,
  f3,
}
/*  Not a pure module */
