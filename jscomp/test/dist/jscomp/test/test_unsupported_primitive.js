// Generated by Melange
'use strict';

const Caml_external_polyfill = require("melange.js/caml_external_polyfill.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function to_buffer(buff, ofs, len, v, flags) {
  if (ofs < 0 || len < 0 || ofs > (buff.length - len | 0)) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Marshal.to_buffer: substring out of bounds"
        });
  }
  return Caml_external_polyfill.resolve("caml_output_value_to_buffer")(buff, ofs, len, v, flags);
}

exports.to_buffer = to_buffer;
/* No side effect */
