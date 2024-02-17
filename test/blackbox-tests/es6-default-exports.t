Show that `$$default` exports are not emitted in the resulting JS

  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF
  $ cat > dune <<EOF
  > (melange.emit
  >  (target output)
  >  (alias mel)
  >  (emit_stdlib false)
  >  (preprocess (pps melange.ppx))
  >  (module_systems (commonjs js) (es6 mjs)))
  > EOF

Output a module with a default export

  $ cat > exports_something.ml <<EOF
  > let default = "world"
  > EOF

Consume the default export

  $ cat > main.ml <<EOF
  > let () = Js.log ("Hello, " ^ Exports_something.default)
  > EOF

  $ dune build @mel

  $ cat ./_build/default/output/exports_something.mjs
  // Generated by Melange
  
  
  const $$default = "world";
  
  export {
    $$default as default,
  }
  /* No side effect */

  $ cat ./_build/default/output/main.mjs
  // Generated by Melange
  
  import * as Melange__Exports_something from "./exports_something.mjs";
  
  console.log("Hello, " + Melange__Exports_something.default);
  
  export {
    
  }
  /*  Not a pure module */

Runs correctly in Node.js

  $ node ./_build/default/output/main.mjs
  Hello, world

CommonJS:

  $ cat ./_build/default/output/exports_something.js
  // Generated by Melange
  'use strict';
  
  
  const $$default = "world";
  
  exports.default = $$default;
  exports.__esModule = true;
  /* No side effect */

  $ cat ./_build/default/output/main.js
  // Generated by Melange
  'use strict';
  
  const Melange__Exports_something = require("./exports_something.js");
  
  console.log("Hello, " + Melange__Exports_something.default);
  
  /*  Not a pure module */

  $ node ./_build/default/output/main.js
  Hello, world
