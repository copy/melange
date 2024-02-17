// Generated by Melange
'use strict';

const Mt = require("./mt.js");
const Fs = require("fs");
const Path = require("path");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, param) {
  const y = param[1];
  const x = param[0];
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

const x = typeof __filename === "undefined" ? undefined : __filename;

const current_file = x !== undefined ? x : "<Not Node JS>";

const x$1 = typeof __dirname === "undefined" ? undefined : __dirname;

const current_dir_name = x$1 !== undefined ? x$1 : "<Not Node Js>";

Fs.readFileSync(current_file, "utf8");

Fs.readdirSync(current_dir_name);

const pathobj = Path.parse(current_dir_name);

const module_ = typeof module === "undefined" ? undefined : module;

if (module_ !== undefined) {
  console.log([
        module_.id,
        module_.paths,
        pathobj.name
      ]);
}

Mt.from_pair_suites("Fs_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* x Not a pure module */
