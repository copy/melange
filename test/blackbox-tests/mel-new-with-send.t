Test the interaction between `[@@mel.new]` and `[@@mel.send]`

  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > type blue
  > type red
  > external blue : blue = "path/to/blue.js" [@@mel.module]
  > external red : blue -> string -> red = "Red" [@@mel.send] [@@mel.new]
  > let _ = red blue "foo"
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  const BlueJs = require("path/to/blue.js");
  
  new (BlueJs.Red)("foo");
  /*  Not a pure module */

Test `@mel.variadic` integration

  $ cat > x.ml <<EOF
  > type blue
  > type red
  > external blue : blue = "path/to/blue.js" [@@mel.module]
  > external red : blue -> string array -> red = "Red"
  >  [@@mel.send] [@@mel.new] [@@mel.variadic]
  > let _ = red blue [| "foo"; "bar" |]
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  const BlueJs = require("path/to/blue.js");
  
  new (BlueJs.Red)("foo", "bar");
  /*  Not a pure module */

`@mel.send.pipe` also works

  $ cat > x.ml <<EOF
  > type blue
  > type red
  > external blue : blue = "path/to/blue.js" [@@mel.module]
  > external red : string -> red = "Red" [@@mel.send.pipe: blue] [@@mel.new]
  > let _ = blue |> red "foo"
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  const BlueJs = require("path/to/blue.js");
  
  new (BlueJs.Red)("foo");
  /*  Not a pure module */

Test `@mel.variadic` + `@mel.send.pipe` integration

  $ cat > x.ml <<EOF
  > type blue
  > type red
  > external blue : blue = "path/to/blue.js" [@@mel.module]
  > external red : string array -> red = "Red"
  >   [@@mel.send.pipe: blue] [@@mel.new] [@@mel.variadic]
  > let _ = blue |> red [| "foo"; "bar" |]
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  const BlueJs = require("path/to/blue.js");
  
  new (BlueJs.Red)("foo", "bar");
  /*  Not a pure module */
