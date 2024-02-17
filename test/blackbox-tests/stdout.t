`melc` outputs to stdout if `-o` isn't specified

  $ . ./setup.sh
  $ echo 'let () = Format.eprintf "hello, world@."' > foo.ml
  $ melc foo.ml
  // Generated by Melange
  'use strict';
  
  const Stdlib__Format = require("melange/format.js");
  
  Stdlib__Format.eprintf(/* Format */{
        _0: {
          TAG: /* String_literal */11,
          _0: "hello, world",
          _1: {
            TAG: /* Formatting_lit */17,
            _0: /* Flush_newline */4,
            _1: /* End_of_format */0
          }
        },
        _1: "hello, world@."
      });
  
  /*  Not a pure module */
