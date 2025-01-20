Test `@mel.send` + `@mel.this`

  $ . ./setup.sh

  $ cat > x.ml <<EOF
  > type 'a t = 'a array
  > external push : ?value:'a -> ('a t[@mel.this]) -> unit = "push" [@@mel.send]
  > external pushfirst : 'a t ->'a -> unit = "push" [@@mel.send]
  > let () =
  >   let arr = [| 0; 1; 2 |] in
  >   push arr ~value:3;
  >   pushfirst arr 3
  > EOF

  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  const arr = [
    0,
    1,
    2
  ];
  
  arr.push(3);
  
  arr.push(3);
  
  /*  Not a pure module */

Test: relax of `pushMany` to skip over [@mel.this]

  $ cat > x.ml <<EOF
  > type 'a t = 'a array
  > external pushMany : values:'a array -> ('a t[@mel.this]) -> unit = "push"
  > [@@mel.send] [@@mel.variadic]
  > let () =
  >   let arr = [| 0; 1; 2 |] in
  >   pushMany ~values:[|1;2|] arr
  > EOF

  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  const arr = [
    0,
    1,
    2
  ];
  
  arr.push(1, 2);
  
  /*  Not a pure module */

Test

  $ cat > x.ml <<EOF
  > type t
  > external foo : int -> int -> (_ [@mel.as 1]) -> (t[@mel.this]) -> unit =
  >   "foo" [@@mel.send]
  > external bar : int -> int -> (_ [@mel.as 1]) -> unit =
  >   "bar" [@@mel.send.pipe: t]
  > let () =
  >   let arr: t = Obj.magic [| 0; 1; 2 |] in
  >   bar 1 0 arr;
  >   foo 1 0 arr;
  > EOF

  $ OCAMLRUNPARAM=b melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  const arr = [
    0,
    1,
    2
  ];
  
  arr.bar(1, 0, 1);
  
  arr.foo(1, 0, 1);
  
  /*  Not a pure module */
