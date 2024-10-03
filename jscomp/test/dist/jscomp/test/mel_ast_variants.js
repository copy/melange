// Generated by Melange
'use strict';


function toEnum(x) {
  switch (x) {
    case /* A */0 :
        return 0;
    case /* B */1 :
        return 1;
    case /* C */2 :
        return 2;
    case /* D */3 :
        return 3;
    case /* E */4 :
        return 4;
    
  }
}

function toString(x) {
  switch (x) {
    case /* A */0 :
        return "A";
    case /* B */1 :
        return "B";
    case /* C */2 :
        return "C";
    case /* D */3 :
        return "D";
    case /* E */4 :
        return "E";
    
  }
}

function bar(x) {
  switch (x) {
    case /* A */0 :
    case /* E */4 :
        return 10;
    default:
      return 0;
  }
}

function and_(x, y) {
  if (x === /* True */0 && y === /* True */0) {
    return /* True */0;
  } else {
    return /* False */1;
  }
}

function id(x) {
  if (x === /* True */0) {
    return /* True */0;
  } else {
    return /* False */1;
  }
}

function not_(x) {
  if (x === /* True */0) {
    return /* False */1;
  } else {
    return /* True */0;
  }
}

function st(state) {
  if (/* tag */typeof state === "number" || typeof state === "string") {
    return 0;
  } else {
    return 23;
  }
}

function showToJs(x) {
  if (/* tag */(typeof x === "number" || typeof x === "string") && x === /* No */0) {
    return false;
  } else {
    return true;
  }
}

function third(l) {
  if (!l) {
    return false;
  }
  const match = l.hd;
  if (match[0] !== 1 || match[1] !== 2 || match[2] !== 3 || l.tl) {
    return false;
  } else {
    return true;
  }
}

function third2(l) {
  if (/* tag */typeof l === "number" || typeof l === "string") {
    return false;
  }
  if (l._0 !== 1) {
    return false;
  }
  const match = l._1;
  if (/* tag */typeof match === "number" || typeof match === "string") {
    return false;
  }
  if (match._0 !== 2) {
    return false;
  }
  const match$1 = match._1;
  if (/* tag */typeof match$1 === "number" || typeof match$1 === "string") {
    return false;
  }
  if (match$1._0 !== 3) {
    return false;
  }
  let tmp = match$1._1;
  if (/* tag */typeof tmp === "number" || typeof tmp === "string") {
    return true;
  } else {
    return false;
  }
}

function foo(x) {
  if (/* tag */typeof x === "number" || typeof x === "string") {
    switch (x) {
      case /* A */"dd" :
          return 1;
      case /* B */12 :
          return 2;
      case /* C */2 :
          return 3;
      
    }
  } else {
    switch (x.TAG) {
      case /* D */"qq" :
          return 4;
      case /* E */42 :
          return 5;
      case /* F */2 :
          return 6;
      
    }
  }
}

const CustomizeTags_d = {
  TAG: /* D */"qq",
  _0: 42
};

const CustomizeTags_e = {
  TAG: /* E */42,
  _0: 0
};

const CustomizeTags = {
  foo: foo,
  a: /* A */"dd",
  b: /* B */12,
  c: /* C */2,
  d: CustomizeTags_d,
  e: CustomizeTags_e
};

exports.toEnum = toEnum;
exports.toString = toString;
exports.bar = bar;
exports.and_ = and_;
exports.id = id;
exports.not_ = not_;
exports.st = st;
exports.showToJs = showToJs;
exports.third = third;
exports.third2 = third2;
exports.CustomizeTags = CustomizeTags;
/* No side effect */
