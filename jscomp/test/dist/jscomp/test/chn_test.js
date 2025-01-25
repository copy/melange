// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_string = require("melange.js/caml_string.js");
const Mt = require("./mt.js");
const Stdlib__Array = require("melange/array.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

console.log("你好，\n世界");

console.log("\x3f\u003f\b\t\n\v\f\r\0\"'");

function convert(s) {
  return Stdlib__Array.to_list(Array.from(s, (function (x) {
    const x$1 = x.codePointAt(0);
    if (x$1 !== undefined) {
      return x$1;
    }
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
          MEL_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/test/chn_test.ml",
            20,
            22
          ]
        });
  })));
}

eq("File \"jscomp/test/chn_test.ml\", line 25, characters 7-14", "你好，\n世界", "你好，\n世界");

eq("File \"jscomp/test/chn_test.ml\", line 27, characters 7-14", convert("汉字是世界上最美丽的character"), {
  hd: 27721,
  tl: {
    hd: 23383,
    tl: {
      hd: 26159,
      tl: {
        hd: 19990,
        tl: {
          hd: 30028,
          tl: {
            hd: 19978,
            tl: {
              hd: 26368,
              tl: {
                hd: 32654,
                tl: {
                  hd: 20029,
                  tl: {
                    hd: 30340,
                    tl: {
                      hd: 99,
                      tl: {
                        hd: 104,
                        tl: {
                          hd: 97,
                          tl: {
                            hd: 114,
                            tl: {
                              hd: 97,
                              tl: {
                                hd: 99,
                                tl: {
                                  hd: 116,
                                  tl: {
                                    hd: 101,
                                    tl: {
                                      hd: 114,
                                      tl: /* [] */ 0
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 48, characters 5-12", convert("\x3f\x3fa"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */ 0
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 50, characters 5-12", convert("??a"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */ 0
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 52, characters 5-12", convert("\u003f\x3fa"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */ 0
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 54, characters 5-12", convert("🚀🚀a"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: {
      hd: 97,
      tl: /* [] */ 0
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 56, characters 5-12", convert("\uD83D\uDE80a"), {
  hd: 128640,
  tl: {
    hd: 97,
    tl: /* [] */ 0
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 58, characters 5-12", convert("\uD83D\uDE80\x3f"), {
  hd: 128640,
  tl: {
    hd: 63,
    tl: /* [] */ 0
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 63, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80a"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: {
      hd: 97,
      tl: /* [] */ 0
    }
  }
});

eq("No inline string length", "\uD83D\uDE80\0".length, 3);

eq("No inline string access", Caml_string.get("\uD83D\uDE80\0", 0) & 255, 61);

eq("File \"jscomp/test/chn_test.ml\", line 79, characters 5-12", convert("\uD83D\uDE80"), {
  hd: 128640,
  tl: /* [] */ 0
});

eq("File \"jscomp/test/chn_test.ml\", line 81, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: /* [] */ 0
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 82, characters 5-12", convert(" \b\t\n\v\f\ra"), {
  hd: 32,
  tl: {
    hd: 8,
    tl: {
      hd: 9,
      tl: {
        hd: 10,
        tl: {
          hd: 11,
          tl: {
            hd: 12,
            tl: {
              hd: 13,
              tl: {
                hd: 97,
                tl: /* [] */ 0
              }
            }
          }
        }
      }
    }
  }
});

eq("File \"jscomp/test/chn_test.ml\", line 89, characters 6-13", convert(" \b\t\n\v\f\r\"'\\\0a"), {
  hd: 32,
  tl: {
    hd: 8,
    tl: {
      hd: 9,
      tl: {
        hd: 10,
        tl: {
          hd: 11,
          tl: {
            hd: 12,
            tl: {
              hd: 13,
              tl: {
                hd: 34,
                tl: {
                  hd: 39,
                  tl: {
                    hd: 92,
                    tl: {
                      hd: 0,
                      tl: {
                        hd: 97,
                        tl: /* [] */ 0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

Mt.from_pair_suites("Chn_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  convert,
}
/*  Not a pure module */
