// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Stdlib = require("melange/stdlib.js");
const Fs = require("fs");
const Path = require("path");

const package_json = "package.json";

function find_package_json(_dir) {
  while (true) {
    const dir = _dir;
    if (Fs.existsSync(Path.join(dir, package_json))) {
      return dir;
    }
    const new_dir = Path.dirname(dir);
    if (new_dir === dir) {
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
            MEL_EXN_ID: Stdlib.Not_found
          });
    }
    _dir = new_dir;
    continue;
  };
}

const x = typeof __dirname === "undefined" ? undefined : __dirname;

if (x !== undefined) {
  console.log(find_package_json(x));
}

module.exports = {
  package_json,
  find_package_json,
}
/* x Not a pure module */
