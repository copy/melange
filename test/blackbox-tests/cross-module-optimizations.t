Showcase cross-module optimizations

  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.13)
  > (using melange 0.1)
  > EOF

Same module

  $ cat > dune <<EOF
  > (melange.emit
  >  (target output)
  >  (emit_stdlib false))
  > EOF

  $ cat > x.ml <<EOF
  > let compose f g x = f (g x)
  > let logPlusTwo = compose Js.log ((+) 2)
  > EOF

  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Curry = require("melange.js/curry.js");
  
  function compose(f, g, x) {
    return Curry._1(f, Curry._1(g, x));
  }
  
  function logPlusTwo(param) {
    console.log(2 + param | 0);
  }
  
  exports.compose = compose;
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */

Different modules

  $ cat > util.ml <<EOF
  > let compose f g x = f (g x)
  > EOF

  $ cat > x.ml <<EOF
  > let logPlusTwo = Util.compose Js.log ((+) 2)
  > EOF
  $ dune clean
  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Melange__Util = require("./util.js");
  
  function logPlusTwo(param) {
    return Melange__Util.compose((function (prim) {
            console.log(prim);
          }), (function (param) {
            return 2 + param | 0;
          }), param);
  }
  
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */

Different modules with cross-module-optimizations

  $ cat > dune <<EOF
  > (melange.emit
  >  (target output)
  >  (emit_stdlib false)
  >  (compile_flags :standard --mel-cross-module-opt))
  > EOF

  $ dune clean
  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Curry = require("melange.js/curry.js");
  
  function logPlusTwo(param) {
    console.log(Curry._1((function (param) {
                return 2 + param | 0;
              }), param));
  }
  
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */

Library dependency

  $ cat > dune <<EOF
  > (library
  >  (name lib)
  >  (modes melange)
  >  (modules util))
  > 
  > (melange.emit
  >  (target output)
  >  (emit_stdlib false)
  >  (libraries lib)
  >  (modules x))
  > EOF

  $ cat > x.ml <<EOF
  > let logPlusTwo = Lib.Util.compose Js.log ((+) 2)
  > EOF

  $ dune clean
  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Lib__Util = require("./util.js");
  
  function logPlusTwo(param) {
    return Lib__Util.compose((function (prim) {
            console.log(prim);
          }), (function (param) {
            return 2 + param | 0;
          }), param);
  }
  
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */

Library dependency with cross-module optimizations

  $ cat > dune <<EOF
  > (library
  >  (name lib)
  >  (modes melange)
  >  (modules util))
  > 
  > (melange.emit
  >  (target output)
  >  (emit_stdlib false)
  >  (libraries lib)
  >  (modules x)
  >  (compile_flags :standard --mel-cross-module-opt))
  > EOF

  $ cat > x.ml <<EOF
  > let logPlusTwo = Lib.Util.compose Js.log ((+) 2)
  > EOF

  $ dune clean
  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Lib__Util = require("./util.js");
  
  function logPlusTwo(param) {
    return Lib__Util.compose((function (prim) {
            console.log(prim);
          }), (function (param) {
            return 2 + param | 0;
          }), param);
  }
  
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */

Only works across library-boundaries if the library dependency is also compiled
with `--mel-cross-module-opt`

  $ cat > dune <<EOF
  > (library
  >  (name lib)
  >  (modes melange)
  >  (modules util)
  >  (melange.compile_flags :standard --mel-cross-module-opt))
  > 
  > (melange.emit
  >  (target output)
  >  (emit_stdlib false)
  >  (libraries lib)
  >  (modules x)
  >  (compile_flags :standard --mel-cross-module-opt))
  > EOF
  $ dune clean
  $ dune build @melange
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Curry = require("melange.js/curry.js");
  
  function logPlusTwo(param) {
    console.log(Curry._1((function (param) {
                return 2 + param | 0;
              }), param));
  }
  
  exports.logPlusTwo = logPlusTwo;
  /* No side effect */
