// Generated by Melange
'use strict';

const Caml_format = require("melange.js/caml_format.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Caml_option = require("melange.js/caml_option.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Hashtbl = require("melange/hashtbl.js");
const Stdlib__List = require("melange/list.js");

const equal = Caml_obj.caml_equal;

const compare = Caml_obj.caml_compare;

const hash = Stdlib__Hashtbl.hash;

function of_int(x) {
  return {
    NAME: "Atom",
    VAL: String(x)
  };
}

function of_float(x) {
  return {
    NAME: "Atom",
    VAL: Stdlib.string_of_float(x)
  };
}

function of_bool(x) {
  return {
    NAME: "Atom",
    VAL: x ? "true" : "false"
  };
}

function atom(x) {
  return {
    NAME: "Atom",
    VAL: x
  };
}

function of_list(l) {
  return {
    NAME: "List",
    VAL: l
  };
}

function of_rev_list(l) {
  return {
    NAME: "List",
    VAL: Stdlib__List.rev(l)
  };
}

function of_pair(param) {
  return {
    NAME: "List",
    VAL: {
      hd: param[0],
      tl: {
        hd: param[1],
        tl: /* [] */ 0
      }
    }
  };
}

function of_triple(param) {
  return {
    NAME: "List",
    VAL: {
      hd: param[0],
      tl: {
        hd: param[1],
        tl: {
          hd: param[2],
          tl: /* [] */ 0
        }
      }
    }
  };
}

function of_quad(param) {
  return {
    NAME: "List",
    VAL: {
      hd: param[0],
      tl: {
        hd: param[1],
        tl: {
          hd: param[2],
          tl: {
            hd: param[3],
            tl: /* [] */ 0
          }
        }
      }
    }
  };
}

function of_variant(name, args) {
  return {
    NAME: "List",
    VAL: {
      hd: {
        NAME: "Atom",
        VAL: name
      },
      tl: args
    }
  };
}

function of_field(name, t) {
  return {
    NAME: "List",
    VAL: {
      hd: {
        NAME: "Atom",
        VAL: name
      },
      tl: {
        hd: t,
        tl: /* [] */ 0
      }
    }
  };
}

function of_record(l) {
  return {
    NAME: "List",
    VAL: Stdlib__List.map((function (param) {
          return of_field(param[0], param[1]);
        }), l)
  };
}

function $$return(x) {
  return Caml_option.some(x);
}

function $great$pipe$eq(e, f) {
  if (e !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(e)));
  }
  
}

function $great$great$eq(e, f) {
  if (e !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(e));
  }
  
}

function map_opt(f, l) {
  let _acc = /* [] */ 0;
  let _l = l;
  while (true) {
    const l$1 = _l;
    const acc = _acc;
    if (!l$1) {
      return Stdlib__List.rev(acc);
    }
    const y = Curry._1(f, l$1.hd);
    if (y === undefined) {
      return;
    }
    _l = l$1.tl;
    _acc = {
      hd: Caml_option.valFromOption(y),
      tl: acc
    };
    continue;
  };
}

function list_any(f, e) {
  if (e.NAME === "List") {
    let _l = e.VAL;
    while (true) {
      const l = _l;
      if (!l) {
        return;
      }
      const res = Curry._1(f, l.hd);
      if (res !== undefined) {
        return res;
      }
      _l = l.tl;
      continue;
    };
  }
  
}

function list_all(f, e) {
  if (e.NAME === "List") {
    let _acc = /* [] */ 0;
    let _l = e.VAL;
    while (true) {
      const l = _l;
      const acc = _acc;
      if (!l) {
        return Stdlib__List.rev(acc);
      }
      const tl = l.tl;
      const y = Curry._1(f, l.hd);
      if (y !== undefined) {
        _l = tl;
        _acc = {
          hd: Caml_option.valFromOption(y),
          tl: acc
        };
        continue;
      }
      _l = tl;
      continue;
    };
  } else {
    return /* [] */ 0;
  }
}

function _try_atom(e, f) {
  if (e.NAME === "List") {
    return;
  }
  try {
    return Caml_option.some(Curry._1(f, e.VAL));
  }
  catch (exn){
    return;
  }
}

function to_int(e) {
  return _try_atom(e, Caml_format.caml_int_of_string);
}

function to_bool(e) {
  return _try_atom(e, Stdlib.bool_of_string);
}

function to_float(e) {
  return _try_atom(e, Caml_format.caml_float_of_string);
}

function to_string(e) {
  return _try_atom(e, (function (x) {
        return x;
      }));
}

function to_pair(e) {
  if (typeof e === "string") {
    return;
  }
  if (e.NAME !== "List") {
    return;
  }
  const match = e.VAL;
  if (!match) {
    return;
  }
  const match$1 = match.tl;
  if (match$1 && !match$1.tl) {
    return [
      match.hd,
      match$1.hd
    ];
  }
  
}

function to_pair_with(f1, f2, e) {
  return $great$great$eq(to_pair(e), (function (param) {
        const y = param[1];
        return $great$great$eq(Curry._1(f1, param[0]), (function (x) {
              return $great$great$eq(Curry._1(f2, y), (function (y) {
                    return [
                      x,
                      y
                    ];
                  }));
            }));
      }));
}

function to_triple(e) {
  if (typeof e === "string") {
    return;
  }
  if (e.NAME !== "List") {
    return;
  }
  const match = e.VAL;
  if (!match) {
    return;
  }
  const match$1 = match.tl;
  if (!match$1) {
    return;
  }
  const match$2 = match$1.tl;
  if (match$2 && !match$2.tl) {
    return [
      match.hd,
      match$1.hd,
      match$2.hd
    ];
  }
  
}

function to_triple_with(f1, f2, f3, e) {
  return $great$great$eq(to_triple(e), (function (param) {
        const z = param[2];
        const y = param[1];
        return $great$great$eq(Curry._1(f1, param[0]), (function (x) {
              return $great$great$eq(Curry._1(f2, y), (function (y) {
                    return $great$great$eq(Curry._1(f3, z), (function (z) {
                          return [
                            x,
                            y,
                            z
                          ];
                        }));
                  }));
            }));
      }));
}

function to_list(e) {
  if (e.NAME === "List") {
    return Caml_option.some(e.VAL);
  }
  
}

function to_list_with(f, e) {
  if (e.NAME === "List") {
    return map_opt(f, e.VAL);
  }
  
}

function get_field(name, e) {
  if (e.NAME === "List") {
    let _l = e.VAL;
    while (true) {
      const l = _l;
      if (!l) {
        return;
      }
      const match = l.hd;
      if (typeof match === "string") {
        _l = l.tl;
        continue;
      }
      if (match.NAME === "List") {
        const match$1 = match.VAL;
        if (match$1) {
          const match$2 = match$1.hd;
          if (typeof match$2 === "string") {
            _l = l.tl;
            continue;
          }
          if (match$2.NAME === "Atom") {
            const match$3 = match$1.tl;
            if (match$3) {
              if (match$3.tl) {
                _l = l.tl;
                continue;
              }
              if (Caml_obj.caml_equal(name, match$2.VAL)) {
                return match$3.hd;
              }
              _l = l.tl;
              continue;
            }
            _l = l.tl;
            continue;
          }
          _l = l.tl;
          continue;
        }
        _l = l.tl;
        continue;
      }
      _l = l.tl;
      continue;
    };
  }
  
}

function field(name, f, e) {
  return $great$great$eq(get_field(name, e), f);
}

function _get_field_list(name, _l) {
  while (true) {
    const l = _l;
    if (!l) {
      return;
    }
    const match = l.hd;
    if (typeof match === "string") {
      _l = l.tl;
      continue;
    }
    if (match.NAME === "List") {
      const match$1 = match.VAL;
      if (match$1) {
        const match$2 = match$1.hd;
        if (typeof match$2 === "string") {
          _l = l.tl;
          continue;
        }
        if (match$2.NAME === "Atom") {
          if (Caml_obj.caml_equal(name, match$2.VAL)) {
            return match$1.tl;
          }
          _l = l.tl;
          continue;
        }
        _l = l.tl;
        continue;
      }
      _l = l.tl;
      continue;
    }
    _l = l.tl;
    continue;
  };
}

function field_list(name, f, e) {
  if (e.NAME === "List") {
    return $great$great$eq(_get_field_list(name, e.VAL), f);
  }
  
}

function _get_variant(s, args, _l) {
  while (true) {
    const l = _l;
    if (!l) {
      return;
    }
    const match = l.hd;
    if (Caml_obj.caml_equal(s, match[0])) {
      return Curry._1(match[1], args);
    }
    _l = l.tl;
    continue;
  };
}

function get_variant(l, e) {
  if (e.NAME !== "List") {
    return _get_variant(e.VAL, /* [] */ 0, l);
  }
  const match = e.VAL;
  if (!match) {
    return;
  }
  const match$1 = match.hd;
  if (typeof match$1 === "string" || match$1.NAME !== "Atom") {
    return;
  } else {
    return _get_variant(match$1.VAL, match.tl, l);
  }
}

function get_exn(e) {
  if (e !== undefined) {
    return Caml_option.valFromOption(e);
  }
  throw new Caml_js_exceptions.MelangeError("Failure", {
        MEL_EXN_ID: "Failure",
        _1: "CCSexp.Traverse.get_exn"
      });
}

const of_unit = {
  NAME: "List",
  VAL: /* [] */ 0
};

const Traverse = {
  map_opt: map_opt,
  list_any: list_any,
  list_all: list_all,
  to_int: to_int,
  to_string: to_string,
  to_bool: to_bool,
  to_float: to_float,
  to_list: to_list,
  to_list_with: to_list_with,
  to_pair: to_pair,
  to_pair_with: to_pair_with,
  to_triple: to_triple,
  to_triple_with: to_triple_with,
  get_field: get_field,
  field: field,
  get_variant: get_variant,
  field_list: field_list,
  $great$great$eq: $great$great$eq,
  $great$pipe$eq: $great$pipe$eq,
  $$return: $$return,
  get_exn: get_exn
};

module.exports = {
  equal,
  compare,
  hash,
  atom,
  of_int,
  of_bool,
  of_list,
  of_rev_list,
  of_float,
  of_unit,
  of_pair,
  of_triple,
  of_quad,
  of_variant,
  of_field,
  of_record,
  Traverse,
}
/* Stdlib__Hashtbl Not a pure module */
