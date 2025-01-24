// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_option = require("melange.js/caml_option.js");
const Curry = require("melange.js/curry.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__List = require("melange/list.js");

function reverse_range(a, i, len) {
  if (len === 0) {
    return;
  }
  for (let k = 0, k_finish = (len - 1 | 0) / 2 | 0; k <= k_finish; ++k) {
    const t = a[i + k | 0];
    a[i + k | 0] = a[((i + len | 0) - 1 | 0) - k | 0];
    a[((i + len | 0) - 1 | 0) - k | 0] = t;
  }
}

function reverse_in_place(a) {
  reverse_range(a, 0, a.length);
}

function reverse(a) {
  const b_len = a.length;
  if (b_len === 0) {
    return [];
  }
  const b = Stdlib__Array.copy(a);
  for (let i = 0; i < b_len; ++i) {
    b[i] = a[(b_len - 1 | 0) - i | 0];
  }
  return b;
}

function reverse_of_list(l) {
  if (!l) {
    return [];
  }
  const len = Stdlib__List.length(l);
  const a = Caml_array.make(len, l.hd);
  let _i = 0;
  let _param = l.tl;
  while (true) {
    const param = _param;
    const i = _i;
    if (!param) {
      return a;
    }
    a[(len - i | 0) - 2 | 0] = param.hd;
    _param = param.tl;
    _i = i + 1 | 0;
    continue;
  };
}

function filter(f, a) {
  const arr_len = a.length;
  let _acc = /* [] */ 0;
  let _i = 0;
  while (true) {
    const i = _i;
    const acc = _acc;
    if (i === arr_len) {
      return reverse_of_list(acc);
    }
    const v = a[i];
    if (Curry._1(f, v)) {
      _i = i + 1 | 0;
      _acc = {
        hd: v,
        tl: acc
      };
      continue;
    }
    _i = i + 1 | 0;
    continue;
  };
}

function filter_map(f, a) {
  const arr_len = a.length;
  let _acc = /* [] */ 0;
  let _i = 0;
  while (true) {
    const i = _i;
    const acc = _acc;
    if (i === arr_len) {
      return reverse_of_list(acc);
    }
    const v = a[i];
    const v$1 = Curry._1(f, v);
    if (v$1 !== undefined) {
      _i = i + 1 | 0;
      _acc = {
        hd: Caml_option.valFromOption(v$1),
        tl: acc
      };
      continue;
    }
    _i = i + 1 | 0;
    continue;
  };
}

function range(from, to_) {
  if (from > to_) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Ext_array_test.range"
        });
  }
  return Stdlib__Array.init((to_ - from | 0) + 1 | 0, (function (i) {
        return i + from | 0;
      }));
}

function map2i(f, a, b) {
  const len = a.length;
  if (len !== b.length) {
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
          MEL_EXN_ID: "Invalid_argument",
          _1: "Ext_array_test.map2i"
        });
  }
  return Stdlib__Array.mapi((function (i, a) {
        return Curry._3(f, i, a, b[i]);
      }), a);
}

function tolist_aux(a, f, _i, _res) {
  while (true) {
    const res = _res;
    const i = _i;
    if (i < 0) {
      return res;
    }
    const v = a[i];
    const v$1 = Curry._1(f, v);
    _res = v$1 !== undefined ? ({
        hd: Caml_option.valFromOption(v$1),
        tl: res
      }) : res;
    _i = i - 1 | 0;
    continue;
  };
}

function to_list_map(f, a) {
  return tolist_aux(a, f, a.length - 1 | 0, /* [] */ 0);
}

function to_list_map_acc(f, a, acc) {
  return tolist_aux(a, f, a.length - 1 | 0, acc);
}

function of_list_map(f, a) {
  if (!a) {
    return [];
  }
  const tl = a.tl;
  const hd = Curry._1(f, a.hd);
  const len = Stdlib__List.length(tl) + 1 | 0;
  const arr = Caml_array.make(len, hd);
  let _i = 1;
  let _param = tl;
  while (true) {
    const param = _param;
    const i = _i;
    if (!param) {
      return arr;
    }
    arr[i] = Curry._1(f, param.hd);
    _param = param.tl;
    _i = i + 1 | 0;
    continue;
  };
}

function rfind_with_index(arr, cmp, v) {
  const len = arr.length;
  let _i = len - 1 | 0;
  while (true) {
    const i = _i;
    if (i < 0) {
      return i;
    }
    if (Curry._2(cmp, arr[i], v)) {
      return i;
    }
    _i = i - 1 | 0;
    continue;
  };
}

function rfind_and_split(arr, cmp, v) {
  const i = rfind_with_index(arr, cmp, v);
  if (i < 0) {
    return "No_split";
  } else {
    return {
      NAME: "Split",
      VAL: [
        Stdlib__Array.sub(arr, 0, i),
        Stdlib__Array.sub(arr, i + 1 | 0, (arr.length - i | 0) - 1 | 0)
      ]
    };
  }
}

function find_with_index(arr, cmp, v) {
  const len = arr.length;
  let _i = 0;
  while (true) {
    const i = _i;
    if (i >= len) {
      return -1;
    }
    if (Curry._2(cmp, arr[i], v)) {
      return i;
    }
    _i = i + 1 | 0;
    continue;
  };
}

function find_and_split(arr, cmp, v) {
  const i = find_with_index(arr, cmp, v);
  if (i < 0) {
    return "No_split";
  } else {
    return {
      NAME: "Split",
      VAL: [
        Stdlib__Array.sub(arr, 0, i),
        Stdlib__Array.sub(arr, i + 1 | 0, (arr.length - i | 0) - 1 | 0)
      ]
    };
  }
}

function exists(p, a) {
  const n = a.length;
  let _i = 0;
  while (true) {
    const i = _i;
    if (i === n) {
      return false;
    }
    if (Curry._1(p, a[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue;
  };
}

function is_empty(arr) {
  return arr.length === 0;
}

function unsafe_loop(_index, len, p, xs, ys) {
  while (true) {
    const index = _index;
    if (index >= len) {
      return true;
    }
    if (!Curry._2(p, xs[index], ys[index])) {
      return false;
    }
    _index = index + 1 | 0;
    continue;
  };
}

function for_all2_no_exn(p, xs, ys) {
  const len_xs = xs.length;
  const len_ys = ys.length;
  if (len_xs === len_ys) {
    return unsafe_loop(0, len_xs, p, xs, ys);
  } else {
    return false;
  }
}

module.exports = {
  reverse_range,
  reverse_in_place,
  reverse,
  reverse_of_list,
  filter,
  filter_map,
  range,
  map2i,
  tolist_aux,
  to_list_map,
  to_list_map_acc,
  of_list_map,
  rfind_with_index,
  rfind_and_split,
  find_with_index,
  find_and_split,
  exists,
  is_empty,
  unsafe_loop,
  for_all2_no_exn,
}
/* No side effect */
