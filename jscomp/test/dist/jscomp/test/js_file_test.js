// Generated by Melange
'use strict';

const Mt = require("./mt.js");

function make_with_options(param) {
  const file = new File(["hello"].values(), "foo.txt", {
        lastModified: 0
      });
  return {
    TAG: /* Eq */ 0,
    _0: file.lastModified,
    _1: 0
  };
}

function file_size(param) {
  const file = new File(["hello"].values(), "foo.txt", undefined);
  return {
    TAG: /* Eq */ 0,
    _0: file.size,
    _1: 5
  };
}

function file_type(param) {
  const file = new File(["hello"].values(), "foo.txt", undefined);
  return {
    TAG: /* Eq */ 0,
    _0: file.type,
    _1: ""
  };
}

Mt.from_pair_suites("Js_file_test", {
      hd: [
        "make with options",
        make_with_options
      ],
      tl: {
        hd: [
          "file type",
          file_size
        ],
        tl: {
          hd: [
            "file size",
            file_type
          ],
          tl: /* [] */ 0
        }
      }
    });

exports.make_with_options = make_with_options;
exports.file_size = file_size;
exports.file_type = file_type;
/*  Not a pure module */
