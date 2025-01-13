Set up a few directories we'll need

  $ . ./setup.sh
  $ mkdir -p lib
  $ mkdir -p app
  $ mkdir -p lib/.objs/melange
  $ mkdir -p app/.objs/melange
  $ mkdir -p output/lib
  $ mkdir -p output/app

  $ echo "let t = 1" > lib/a.ml
  $ echo "let t = A.t" > app/b.ml

Build cmjs

  $ melc -bs-stop-after-cmj lib/a.ml -o lib/.objs/melange/a.cmj

  $ melc -I lib/.objs/melange -bs-stop-after-cmj app/b.ml -o app/.objs/melange/b.cmj

Linking step

  $ melc -bs-package-output lib/ lib/.objs/melange/a.cmj -o output/lib/a.js

If we pass some file extension or module system in `-bs-package-output`, it
gets used (the correct way to do separate compilation is to use the
`-bs-module-type` flag)

  $ melc -bs-package-output es6:app/:.mjs -I lib/.objs/melange -I output/lib app/.objs/melange/b.cmj -o output/app/cjs_file.js
  $ cat output/app/cjs_file.mjs
  // Generated by Melange
  
  import * as A from "../lib/a.js";
  
  const t = A.t;
  
  export {
    t,
  }
  /* No side effect */
  $ cat output/app/cjs_file.js
  cat: output/app/cjs_file.js: No such file or directory
  [1]

If we don't pass the -I flag to the folder where the dependency .js files are placed, it will fail

  $ melc -bs-package-output app/ -I lib/.objs/melange app/.objs/melange/b.cmj -o output/app/b.js
  File "_none_", line 1:
  Error: a.js not found, needed in script mode
  [2]

Passing `-I output/lib` fixes it

  $ melc $MEL_STDLIB_FLAGS -bs-package-output app/ -I lib/.objs/melange -I output/lib app/.objs/melange/b.cmj -o output/app/b.js

B depends on A, so it should import a.js in the right path, the default module system used is commonJS

  $ cat output/app/b.js
  // Generated by Melange
  'use strict';
  
  const A = require("../lib/a.js");
  
  const t = A.t;
  
  exports.t = t;
  /* No side effect */
