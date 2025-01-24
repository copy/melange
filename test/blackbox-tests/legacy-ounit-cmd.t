
  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > type 'a arra = 'a array
  > external
  >   f :
  >   int -> int -> int arra -> unit
  >   = ""
  >   [@@mel.send.pipe:int]
  >   [@@mel.variadic]
  > EOF
  $ melc -ppx melppx -alert -unprocessed x.ml
  File "x.ml", lines 2-7, characters 0-18:
  2 | external
  3 |   f :
  4 |   int -> int -> int arra -> unit
  5 |   = ""
  6 |   [@@mel.send.pipe:int]
  7 |   [@@mel.variadic]
  Error: `[@mel.variadic]' expects its last argument to be an array
  [2]

  $ cat > x.ml <<EOF
  > external
  >   f2 :
  >   int -> int -> ?y:int array -> unit
  >   = ""
  >   [@@mel.send.pipe:int]
  >   [@@mel.variadic]
  > EOF
  $ melc -ppx melppx -alert -unprocessed x.ml
  File "x.ml", lines 1-6, characters 0-18:
  1 | external
  2 |   f2 :
  3 |   int -> int -> ?y:int array -> unit
  4 |   = ""
  5 |   [@@mel.send.pipe:int]
  6 |   [@@mel.variadic]
  Error: `[@mel.variadic]' cannot be applied to an optionally labelled argument
  [2]

Skip over the temporary file name printed in the error trace

  $ melc -ppx melppx -bs-eval 'let bla4 foo x y= foo##(method1 x y [@u])' 2>&1 | grep -v File
  1 | let bla4 foo x y= foo##(method1 x y [@u])
                                            ^
  Alert unused: Unused attribute [@u]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  'use strict';
  
  
  function bla4(foo, x, y) {
    return foo.method1(x, y);
  }
  
  module.exports = {
    bla4,
  }
  /* No side effect */


  $ melc -ppx melppx -bs-eval 'external mk : int -> ([`a|`b [@mel.string]]) = "mk"' 2>&1 | grep -v File
  1 | external mk : int -> ([`a|`b [@mel.string]]) = "mk"
                                     ^^^^^^^^^^
  Alert unused: Unused attribute [@mel.string]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */


  $ cat > x.ml <<EOF
  > external ff :
  >     resp -> (_ [@mel.as "x"]) -> int -> unit =
  >     "x" [@@mel.set]
  > EOF
  $ melc -ppx melppx -alert -unprocessed x.ml
  File "x.ml", lines 1-3, characters 0-19:
  1 | external ff :
  2 |     resp -> (_ [@mel.as "x"]) -> int -> unit =
  3 |     "x" [@@mel.set]
  Error: `[@mel.set]' requires a function of two arguments
  [2]

  $ cat > x.ml <<EOF
  > external v3 :
  >   int -> int -> (int -> int -> int [@mel.uncurry]) = "v3"
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 2, characters 37-48:
  2 |   int -> int -> (int -> int -> int [@mel.uncurry]) = "v3"
                                           ^^^^^^^^^^^
  Alert unused: Unused attribute [@mel.uncurry]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ cat > x.ml <<EOF
  > external v4 : (int -> int -> int [@mel.uncurry]) = ""
  > EOF
  $ melc -ppx melppx -alert -unprocessed x.ml
  File "x.ml", line 1, characters 0-53:
  1 | external v4 : (int -> int -> int [@mel.uncurry]) = ""
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: `[@mel.uncurry]' must not be applied to the entire annotation
  [2]

  $ melc -ppx melppx -bs-eval '{js| \uFFF|js}' 2>&1 | grep -v File
  1 | {js| \uFFF|js}
          ^^^^^^
  Error: Offset: 3, Invalid \u escape

  $ melc -ppx 'melppx -alert -fragile' -bs-eval 'external mk : int -> ([`a|`b] [@mel.string]) = ""' 2>&1 | grep -v File
  1 | external mk : int -> ([`a|`b] [@mel.string]) = ""
                                      ^^^^^^^^^^
  Alert unused: Unused attribute [@mel.string]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */


  $ melc -ppx melppx -bs-eval 'external mk : int -> ([`a|`b] ) = "mk"' 2>&1 | grep -v File
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ cat > x.ml <<EOF
  > type t
  > external mk : int -> (_ [@mel.as {json| { x : 3 } |json}]) ->  t = "mk"
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ cat > x.ml <<EOF
  > type t
  > external mk : int -> (_ [@mel.as {json| { "x" : 3 } |json}]) ->  t = "mk"
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -ppx melppx -bs-eval 'let should_fail = fun [@mel.this] (Some x) y u -> y + u' 2>&1 | grep -v File
  1 | let should_fail = fun [@mel.this] (Some x) y u -> y + u
                                        ^^^^^^^^
  Error: `@mel.this' expects a simple pattern: an optionally constrained
         variable (or wildcard)

  $ melc -ppx melppx -bs-eval 'let should_fail = fun [@mel.this] (Some x as v) y u -> y + u' 2>&1 | grep -v File
  1 | let should_fail = fun [@mel.this] (Some x as v) y u -> y + u
                                        ^^^^^^^^^^^^^
  Error: `@mel.this' expects a simple pattern: an optionally constrained
         variable (or wildcard)

  $ cat > x.ml <<EOF
  > (* let rec must be rejected *)
  > type t10 = A of t10 [@@ocaml.unboxed];;
  > let rec x = A x;;
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 3, characters 12-15:
  3 | let rec x = A x;;
                  ^^^
  Error: This kind of expression is not allowed as right-hand side of let rec
  [2]

  $ cat > x.ml <<EOF
  > type t = {x: int64} [@@unboxed];;
  > let rec x = {x = y} and y = 3L;;
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 2, characters 12-19:
  2 | let rec x = {x = y} and y = 3L;;
                  ^^^^^^^
  Error: This kind of expression is not allowed as right-hand side of let rec
  [2]

  $ cat > x.ml <<EOF
  > type r = A of r [@@unboxed];;
  > let rec y = A y;;
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 2, characters 12-15:
  2 | let rec y = A y;;
                  ^^^
  Error: This kind of expression is not allowed as right-hand side of let rec
  [2]

  $ melc -ppx melppx -bs-eval 'external f : int = "%identity"' 2>&1 | grep -v File
  1 | external f : int = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: The `%identity' primitive type must take a single argument ('a -> 'b)

  $ melc -ppx melppx -bs-eval 'external f : int -> int = "%identity"'
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -ppx melppx -bs-eval 'external f : int -> int -> int = "%identity"' 2>&1 | grep -v File
  1 | external f : int -> int -> int = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: The `%identity' primitive type must take a single argument ('a -> 'b)

  $ melc -ppx melppx -bs-eval 'external f : (int -> int) -> int = "%identity"'
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */

  $ melc -ppx melppx -bs-eval 'external f : int -> (int-> int) = "%identity"' 2>&1 | grep -v File
  1 | external f : int -> (int-> int) = "%identity"
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: The `%identity' primitive type must take a single argument ('a -> 'b)

  $ cat > x.ml <<EOF
  > external foo_bar :
  >  (_ [@mel.as "foo"]) ->
  >  string ->
  >  string = "bar"
  >  [@@mel.send]
  > EOF
  $ melc -ppx melppx -alert -unprocessed x.ml
  File "x.ml", lines 1-5, characters 0-13:
  1 | external foo_bar :
  2 |  (_ [@mel.as "foo"]) ->
  3 |  string ->
  4 |  string = "bar"
  5 |  [@@mel.send]
  Error: `[@mel.send]`'s first argument must not be a constant
  [2]

  $ melc -ppx melppx -bs-eval 'let bla4 foo x y = foo##(method1 x y [@u])' 2>&1 | grep -v File
  1 | let bla4 foo x y = foo##(method1 x y [@u])
                                             ^
  Alert unused: Unused attribute [@u]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  'use strict';
  
  
  function bla4(foo, x, y) {
    return foo.method1(x, y);
  }
  
  module.exports = {
    bla4,
  }
  /* No side effect */


  $ cat > x.ml <<EOF
  >   external mk : int ->
  > (
  >   [\`a|\`b]
  >    [@mel.string]
  > ) = "mk"
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 4, characters 5-15:
  4 |    [@mel.string]
           ^^^^^^^^^^
  Alert unused: Unused attribute [@mel.string]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  // Generated by Melange
  /* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */


  $ melc -ppx melppx -bs-eval 'let u = [||]' 2>&1 | grep -v File
  1 | let u = [||]
          ^
  Error: The type of this expression, '_weak1 array,
         contains the non-generalizable type variable(s): '_weak1.
         (see manual section 6.1.2)

  $ cat > x.ml <<EOF
  > external push : 'a array -> 'a -> unit = "push" [@@mel.send]
  > let a = [||]
  > let () =
  >   push a 3 |. ignore ;
  >   push a "3" |. ignore
  > EOF
  $ melc -ppx melppx x.ml
  File "x.ml", line 5, characters 9-12:
  5 |   push a "3" |. ignore
               ^^^
  Error: This constant has type string but an expression was expected of type
           int
  [2]
