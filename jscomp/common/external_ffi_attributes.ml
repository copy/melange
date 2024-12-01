(* Copyright (C) 2023- Authors of Melange
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)

open Import

let external_attrs =
  [|
    "get";
    "set";
    "get_index";
    "return";
    "obj";
    "val";
    "module";
    "scope";
    "variadic";
    "send";
    "new";
    "set_index";
    (* TODO(anmonteiro): re-enable when we enable gentype *)
    (* Literals.gentype_import; *)
  |]

let has_mel_attributes attrs =
  List.exists
    ~f:(fun txt ->
      match String.starts_with txt ~prefix:"mel." with
      | true -> not (String.starts_with txt ~prefix:"mel.internal")
      | false -> Array.exists ~f:(fun (x : string) -> txt = x) external_attrs)
    attrs

let is_mel_attribute txt =
  let len = String.length txt in
  (len = 1 && String.unsafe_get txt 0 = 'u')
  || len >= 5
     && String.unsafe_get txt 0 = 'm'
     && String.unsafe_get txt 1 = 'e'
     && String.unsafe_get txt 2 = 'l'
     && String.unsafe_get txt 3 = '.'
