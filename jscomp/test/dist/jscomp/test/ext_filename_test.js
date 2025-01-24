// Generated by Melange
'use strict';

const Caml_bytes = require("melange.js/caml_bytes.js");
const Caml_external_polyfill = require("melange.js/caml_external_polyfill.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_sys = require("melange.js/caml_sys.js");
const CamlinternalLazy = require("melange/camlinternalLazy.js");
const Curry = require("melange.js/curry.js");
const Ext_pervasives_test = require("./ext_pervasives_test.js");
const Ext_string_test = require("./ext_string_test.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Bytes = require("melange/bytes.js");
const Stdlib__Filename = require("melange/filename.js");
const Stdlib__Format = require("melange/format.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__String = require("melange/string.js");
const Stdlib__Sys = require("melange/sys.js");
const Test_literals = require("./test_literals.js");

const node_sep = "/";

const node_parent = "..";

const node_current = ".";

const cwd = {
  LAZY_DONE: false,
  VAL: (function () {
    return Caml_sys.caml_sys_getcwd(undefined);
  })
};

function path_as_directory(x) {
  if (x === "" || Ext_string_test.ends_with(x, Stdlib__Filename.dir_sep)) {
    return x;
  } else {
    return x + Stdlib__Filename.dir_sep;
  }
}

function absolute_path(s) {
  const s$1 = Curry._1(Stdlib__Filename.is_relative, s) ? Stdlib__Filename.concat(CamlinternalLazy.force(cwd), s) : s;
  const aux = function (_s) {
    while (true) {
      const s = _s;
      const base = Curry._1(Stdlib__Filename.basename, s);
      const dir = Curry._1(Stdlib__Filename.dirname, s);
      if (dir === s) {
        return dir;
      }
      if (base !== Stdlib__Filename.current_dir_name) {
        if (base === Stdlib__Filename.parent_dir_name) {
          return Curry._1(Stdlib__Filename.dirname, aux(dir));
        } else {
          return Stdlib__Filename.concat(aux(dir), base);
        }
      }
      _s = dir;
      continue;
    };
  };
  return aux(s$1);
}

function chop_extension(locOpt, name) {
  const loc = locOpt !== undefined ? locOpt : "";
  try {
    return Stdlib__Filename.chop_extension(name);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
      return Curry._2(Stdlib__Format.ksprintf(Stdlib.invalid_arg, {
                TAG: /* Format */ 0,
                _0: {
                  TAG: /* String_literal */ 11,
                  _0: "Filename.chop_extension ( ",
                  _1: {
                    TAG: /* String */ 2,
                    _0: /* No_padding */ 0,
                    _1: {
                      TAG: /* String_literal */ 11,
                      _0: " : ",
                      _1: {
                        TAG: /* String */ 2,
                        _0: /* No_padding */ 0,
                        _1: {
                          TAG: /* String_literal */ 11,
                          _0: " )",
                          _1: /* End_of_format */ 0
                        }
                      }
                    }
                  }
                },
                _1: "Filename.chop_extension ( %s : %s )"
              }), loc, name);
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

function chop_extension_if_any(fname) {
  try {
    return Stdlib__Filename.chop_extension(fname);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
      return fname;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

const os_path_separator_char = Stdlib__Filename.dir_sep.charCodeAt(0);

function relative_path(file_or_dir_1, file_or_dir_2) {
  const relevant_dir1 = file_or_dir_1.NAME === "File" ? Curry._1(Stdlib__Filename.dirname, file_or_dir_1.VAL) : file_or_dir_1.VAL;
  const relevant_dir2 = file_or_dir_2.NAME === "File" ? Curry._1(Stdlib__Filename.dirname, file_or_dir_2.VAL) : file_or_dir_2.VAL;
  const dir1 = Ext_string_test.split(undefined, relevant_dir1, os_path_separator_char);
  const dir2 = Ext_string_test.split(undefined, relevant_dir2, os_path_separator_char);
  const go = function (_dir1, _dir2) {
    while (true) {
      const dir2 = _dir2;
      const dir1 = _dir1;
      if (dir1 && dir2 && dir1.hd === dir2.hd) {
        _dir2 = dir2.tl;
        _dir1 = dir1.tl;
        continue;
      }
      return Stdlib.$at(Stdlib__List.map((function (param) {
                return node_parent;
              }), dir2), dir1);
    };
  };
  const ys = go(dir1, dir2);
  if (ys && ys.hd === node_parent) {
    return Stdlib__String.concat(node_sep, ys);
  } else {
    return Stdlib__String.concat(node_sep, {
          hd: node_current,
          tl: ys
        });
  }
}

function node_relative_path(node_modules_shorten, file1, dep_file) {
  const file2 = dep_file.VAL;
  const v = Ext_string_test.find(undefined, Test_literals.node_modules, file2);
  const len = file2.length;
  if (!(node_modules_shorten && v >= 0)) {
    return relative_path(dep_file.NAME === "File" ? ({
            NAME: "File",
            VAL: absolute_path(dep_file.VAL)
          }) : ({
            NAME: "Dir",
            VAL: absolute_path(dep_file.VAL)
          }), file1.NAME === "File" ? ({
            NAME: "File",
            VAL: absolute_path(file1.VAL)
          }) : ({
            NAME: "Dir",
            VAL: absolute_path(file1.VAL)
          })) + (node_sep + Curry._1(Stdlib__Filename.basename, file2));
  }
  const skip = function (_i) {
    while (true) {
      const i = _i;
      if (i >= len) {
        return Curry._1(Ext_pervasives_test.failwithf("File \"jscomp/test/ext_filename_test.ml\", line 162, characters 43-50", {
                  TAG: /* Format */ 0,
                  _0: {
                    TAG: /* String_literal */ 11,
                    _0: "invalid path: ",
                    _1: {
                      TAG: /* String */ 2,
                      _0: /* No_padding */ 0,
                      _1: /* End_of_format */ 0
                    }
                  },
                  _1: "invalid path: %s"
                }), file2);
      }
      const curr_char = file2.charCodeAt(i);
      if (!(curr_char === os_path_separator_char || curr_char === /* '.' */46)) {
        return i;
      }
      _i = i + 1 | 0;
      continue;
    };
  };
  return Ext_string_test.tail_from(file2, skip(v + Test_literals.node_modules_length | 0));
}

function find_root_filename(_cwd, filename) {
  while (true) {
    const cwd = _cwd;
    if (Caml_external_polyfill.resolve("caml_sys_file_exists")(Stdlib__Filename.concat(cwd, filename))) {
      return cwd;
    }
    const cwd$p = Curry._1(Stdlib__Filename.dirname, cwd);
    if (cwd$p.length >= cwd.length) {
      return Curry._2(Ext_pervasives_test.failwithf("File \"jscomp/test/ext_filename_test.ml\", line 205, characters 13-20", {
                TAG: /* Format */ 0,
                _0: {
                  TAG: /* String */ 2,
                  _0: /* No_padding */ 0,
                  _1: {
                    TAG: /* String_literal */ 11,
                    _0: " not found from ",
                    _1: {
                      TAG: /* String */ 2,
                      _0: /* No_padding */ 0,
                      _1: /* End_of_format */ 0
                    }
                  }
                },
                _1: "%s not found from %s"
              }), filename, cwd);
    }
    _cwd = cwd$p;
    continue;
  };
}

function find_package_json_dir(cwd) {
  return find_root_filename(cwd, Test_literals.bsconfig_json);
}

const package_dir = {
  LAZY_DONE: false,
  VAL: (function () {
    const cwd$1 = CamlinternalLazy.force(cwd);
    return find_root_filename(cwd$1, Test_literals.bsconfig_json);
  })
};

function module_name_of_file(file) {
  const s = Stdlib__Filename.chop_extension(Curry._1(Stdlib__Filename.basename, file));
  return Caml_bytes.bytes_to_string(Stdlib__Bytes.capitalize_ascii(Caml_bytes.bytes_of_string(s)));
}

function module_name_of_file_if_any(file) {
  const s = chop_extension_if_any(Curry._1(Stdlib__Filename.basename, file));
  return Caml_bytes.bytes_to_string(Stdlib__Bytes.capitalize_ascii(Caml_bytes.bytes_of_string(s)));
}

function combine(p1, p2) {
  if (p1 === "" || p1 === Stdlib__Filename.current_dir_name) {
    return p2;
  } else if (p2 === "" || p2 === Stdlib__Filename.current_dir_name) {
    return p1;
  } else if (Curry._1(Stdlib__Filename.is_relative, p2)) {
    return Stdlib__Filename.concat(p1, p2);
  } else {
    return p2;
  }
}

function split_aux(p) {
  let _p = p;
  let _acc = /* [] */ 0;
  while (true) {
    const acc = _acc;
    const p$1 = _p;
    const dir = Curry._1(Stdlib__Filename.dirname, p$1);
    if (dir === p$1) {
      return [
        dir,
        acc
      ];
    }
    const new_path = Curry._1(Stdlib__Filename.basename, p$1);
    if (new_path === Stdlib__Filename.dir_sep) {
      _p = dir;
      continue;
    }
    _acc = {
      hd: new_path,
      tl: acc
    };
    _p = dir;
    continue;
  };
}

function rel_normalized_absolute_path(from, to_) {
  const match = split_aux(from);
  const match$1 = split_aux(to_);
  const root2 = match$1[0];
  if (match[0] !== root2) {
    return root2;
  }
  let _xss = match[1];
  let _yss = match$1[1];
  while (true) {
    const yss = _yss;
    const xss = _xss;
    if (!xss) {
      if (yss) {
        return Stdlib__List.fold_left(Stdlib__Filename.concat, yss.hd, yss.tl);
      } else {
        return Ext_string_test.empty;
      }
    }
    const xs = xss.tl;
    if (!yss) {
      return Stdlib__List.fold_left((function (acc, param) {
            return Stdlib__Filename.concat(acc, Ext_string_test.parent_dir_lit);
          }), Ext_string_test.parent_dir_lit, xs);
    }
    if (xss.hd === yss.hd) {
      _yss = yss.tl;
      _xss = xs;
      continue;
    }
    const start = Stdlib__List.fold_left((function (acc, param) {
          return Stdlib__Filename.concat(acc, Ext_string_test.parent_dir_lit);
        }), Ext_string_test.parent_dir_lit, xs);
    return Stdlib__List.fold_left(Stdlib__Filename.concat, start, yss);
  };
}

function normalize_absolute_path(x) {
  const drop_if_exist = function (xs) {
    if (xs) {
      return xs.tl;
    } else {
      return /* [] */ 0;
    }
  };
  const normalize_list = function (_acc, _paths) {
    while (true) {
      const paths = _paths;
      const acc = _acc;
      if (!paths) {
        return acc;
      }
      const xs = paths.tl;
      const x = paths.hd;
      if (x === Ext_string_test.current_dir_lit) {
        _paths = xs;
        continue;
      }
      if (x === Ext_string_test.parent_dir_lit) {
        _paths = xs;
        _acc = drop_if_exist(acc);
        continue;
      }
      _paths = xs;
      _acc = {
        hd: x,
        tl: acc
      };
      continue;
    };
  };
  const match = split_aux(x);
  const root = match[0];
  const rev_paths = normalize_list(/* [] */ 0, match[1]);
  if (rev_paths) {
    let _acc = rev_paths.hd;
    let _rev_paths = rev_paths.tl;
    while (true) {
      const rev_paths$1 = _rev_paths;
      const acc = _acc;
      if (!rev_paths$1) {
        return Stdlib__Filename.concat(root, acc);
      }
      _rev_paths = rev_paths$1.tl;
      _acc = Stdlib__Filename.concat(rev_paths$1.hd, acc);
      continue;
    };
  } else {
    return root;
  }
}

function get_extension(x) {
  const pos = Ext_string_test.rindex_neg(x, /* '.' */46);
  if (pos < 0) {
    return "";
  } else {
    return Ext_string_test.tail_from(x, pos);
  }
}

let simple_convert_node_path_to_os_path;

if (Stdlib__Sys.unix) {
  simple_convert_node_path_to_os_path = (function (x) {
    return x;
  });
} else if (Stdlib__Sys.win32 || false) {
  simple_convert_node_path_to_os_path = Ext_string_test.replace_slash_backward;
} else {
  const s = "Unknown OS : " + Stdlib__Sys.os_type;
  throw new Caml_js_exceptions.MelangeError("Failure", {
        MEL_EXN_ID: "Failure",
        _1: s
      });
}

const $slash$slash = Stdlib__Filename.concat;

module.exports = {
  node_sep,
  node_parent,
  node_current,
  cwd,
  $slash$slash,
  path_as_directory,
  absolute_path,
  chop_extension,
  chop_extension_if_any,
  os_path_separator_char,
  relative_path,
  node_relative_path,
  find_root_filename,
  find_package_json_dir,
  package_dir,
  module_name_of_file,
  module_name_of_file_if_any,
  combine,
  split_aux,
  rel_normalized_absolute_path,
  normalize_absolute_path,
  get_extension,
  simple_convert_node_path_to_os_path,
}
/* simple_convert_node_path_to_os_path Not a pure module */
