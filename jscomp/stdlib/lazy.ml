(**************************************************************************)
(*                                                                        *)
(*                                 OCaml                                  *)
(*                                                                        *)
(*             Damien Doligez, projet Para, INRIA Rocquencourt            *)
(*                                                                        *)
(*   Copyright 1997 Institut National de Recherche en Informatique et     *)
(*     en Automatique.                                                    *)
(*                                                                        *)
(*   All rights reserved.  This file is distributed under the terms of    *)
(*   the GNU Lesser General Public License version 2.1, with the          *)
(*   special exception on linking described in the file LICENSE.          *)
(*                                                                        *)
(**************************************************************************)

(* Module [Lazy]: deferred computations *)


(*
   WARNING: some purple magic is going on here.  Do not take this file
   as an example of how to program in OCaml.
*)


(* We make use of two special tags provided by the runtime:
   [lazy_tag] and [forward_tag].

   A value of type ['a Lazy.t] can be one of three things:
   1. A block of size 1 with tag [lazy_tag].  Its field is a closure of
      type [unit -> 'a] that computes the value.
   2. A block of size 1 with tag [forward_tag].  Its field is the value
      of type ['a] that was computed.
   3. Anything else except a float.  This has type ['a] and is the value
      that was computed.
   Exceptions are stored in format (1).
   The GC will magically change things from (2) to (3) according to its
   fancy.

   If OCaml was configured with the -flat-float-array option (which is
   currently the default), the following is also true:
   We cannot use representation (3) for a [float Lazy.t] because
   [caml_array_make] assumes that only a [float] value can have tag
   [Double_tag].

   We have to use the built-in type constructor [lazy_t] to
   let the compiler implement the special typing and compilation
   rules for the [lazy] keyword.
*)

type 'a t = 'a CamlinternalLazy.t

exception Undefined = CamlinternalLazy.Undefined

(* external make_forward : 'a -> 'a lazy_t = "caml_lazy_make_forward" *)

external force : 'a t -> 'a = "%lazy_force"


let force_val = CamlinternalLazy.force_val
(* let force_val l = CamlinternalLazy.force_gen ~only_val:true l *)

let from_fun f = lazy (f ())

let from_val v = lazy v

let is_val = CamlinternalLazy.is_val

let map f x =
  lazy (f (force x))

let map_val f x =
  if is_val x
  then from_val (f (force x))
  else lazy (f (force x))
