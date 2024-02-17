// Generated by Melange
'use strict';

const Stdlib = require("melange/stdlib.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__Stack = require("melange/stack.js");

const List = {
  length: Stdlib__List.length,
  compare_lengths: Stdlib__List.compare_lengths,
  compare_length_with: Stdlib__List.compare_length_with,
  is_empty: Stdlib__List.is_empty,
  cons: Stdlib__List.cons,
  hd: Stdlib__List.hd,
  tl: Stdlib__List.tl,
  nth: Stdlib__List.nth,
  nth_opt: Stdlib__List.nth_opt,
  rev: Stdlib__List.rev,
  init: Stdlib__List.init,
  append: Stdlib__List.append,
  rev_append: Stdlib__List.rev_append,
  concat: Stdlib__List.concat,
  flatten: Stdlib__List.flatten,
  equal: Stdlib__List.equal,
  iter: Stdlib__List.iter,
  iteri: Stdlib__List.iteri,
  map: Stdlib__List.map,
  mapi: Stdlib__List.mapi,
  rev_map: Stdlib__List.rev_map,
  filter_map: Stdlib__List.filter_map,
  concat_map: Stdlib__List.concat_map,
  fold_left_map: Stdlib__List.fold_left_map,
  fold_left: Stdlib__List.fold_left,
  fold_right: Stdlib__List.fold_right,
  iter2: Stdlib__List.iter2,
  map2: Stdlib__List.map2,
  rev_map2: Stdlib__List.rev_map2,
  fold_left2: Stdlib__List.fold_left2,
  fold_right2: Stdlib__List.fold_right2,
  for_all: Stdlib__List.for_all,
  exists: Stdlib__List.exists,
  for_all2: Stdlib__List.for_all2,
  exists2: Stdlib__List.exists2,
  mem: Stdlib__List.mem,
  memq: Stdlib__List.memq,
  find: Stdlib__List.find,
  find_opt: Stdlib__List.find_opt,
  find_index: Stdlib__List.find_index,
  find_map: Stdlib__List.find_map,
  find_mapi: Stdlib__List.find_mapi,
  filter: Stdlib__List.filter,
  find_all: Stdlib__List.find_all,
  filteri: Stdlib__List.filteri,
  partition: Stdlib__List.partition,
  partition_map: Stdlib__List.partition_map,
  assoc: Stdlib__List.assoc,
  assoc_opt: Stdlib__List.assoc_opt,
  assq: Stdlib__List.assq,
  assq_opt: Stdlib__List.assq_opt,
  mem_assoc: Stdlib__List.mem_assoc,
  mem_assq: Stdlib__List.mem_assq,
  remove_assoc: Stdlib__List.remove_assoc,
  remove_assq: Stdlib__List.remove_assq,
  split: Stdlib__List.split,
  combine: Stdlib__List.combine,
  sort: Stdlib__List.sort,
  stable_sort: Stdlib__List.stable_sort,
  fast_sort: Stdlib__List.fast_sort,
  sort_uniq: Stdlib__List.sort_uniq,
  merge: Stdlib__List.merge,
  to_seq: Stdlib__List.to_seq,
  of_seq: Stdlib__List.of_seq,
  invalid_arg: Stdlib.invalid_arg,
  failwith: Stdlib.failwith,
  Exit: Stdlib.Exit,
  Match_failure: Stdlib.Match_failure,
  Assert_failure: Stdlib.Assert_failure,
  Invalid_argument: Stdlib.Invalid_argument,
  Failure: Stdlib.Failure,
  Not_found: Stdlib.Not_found,
  Out_of_memory: Stdlib.Out_of_memory,
  Stack_overflow: Stdlib.Stack_overflow,
  Sys_error: Stdlib.Sys_error,
  End_of_file: Stdlib.End_of_file,
  Division_by_zero: Stdlib.Division_by_zero,
  Sys_blocked_io: Stdlib.Sys_blocked_io,
  Undefined_recursive_module: Stdlib.Undefined_recursive_module,
  abs: Stdlib.abs,
  max_int: Stdlib.max_int,
  min_int: Stdlib.min_int,
  lnot: Stdlib.lnot,
  infinity: Stdlib.infinity,
  neg_infinity: Stdlib.neg_infinity,
  max_float: Stdlib.max_float,
  min_float: Stdlib.min_float,
  epsilon_float: Stdlib.epsilon_float,
  classify_float: Stdlib.classify_float,
  char_of_int: Stdlib.char_of_int,
  string_of_bool: Stdlib.string_of_bool,
  bool_of_string_opt: Stdlib.bool_of_string_opt,
  bool_of_string: Stdlib.bool_of_string,
  int_of_string_opt: Stdlib.int_of_string_opt,
  string_of_float: Stdlib.string_of_float,
  float_of_string_opt: Stdlib.float_of_string_opt,
  $at: Stdlib.$at,
  stdin: Stdlib.stdin,
  stdout: Stdlib.stdout,
  stderr: Stdlib.stderr,
  print_char: Stdlib.print_char,
  print_string: Stdlib.print_string,
  print_bytes: Stdlib.print_bytes,
  print_int: Stdlib.print_int,
  print_float: Stdlib.print_float,
  print_newline: Stdlib.print_newline,
  prerr_char: Stdlib.prerr_char,
  prerr_string: Stdlib.prerr_string,
  prerr_bytes: Stdlib.prerr_bytes,
  prerr_int: Stdlib.prerr_int,
  prerr_float: Stdlib.prerr_float,
  prerr_newline: Stdlib.prerr_newline,
  read_line: Stdlib.read_line,
  read_int_opt: Stdlib.read_int_opt,
  read_int: Stdlib.read_int,
  read_float_opt: Stdlib.read_float_opt,
  read_float: Stdlib.read_float,
  open_out: Stdlib.open_out,
  open_out_bin: Stdlib.open_out_bin,
  open_out_gen: Stdlib.open_out_gen,
  flush: Stdlib.flush,
  flush_all: Stdlib.flush_all,
  output_char: Stdlib.output_char,
  output_string: Stdlib.output_string,
  output_bytes: Stdlib.output_bytes,
  output: Stdlib.output,
  output_substring: Stdlib.output_substring,
  output_byte: Stdlib.output_byte,
  output_binary_int: Stdlib.output_binary_int,
  output_value: Stdlib.output_value,
  seek_out: Stdlib.seek_out,
  pos_out: Stdlib.pos_out,
  out_channel_length: Stdlib.out_channel_length,
  close_out: Stdlib.close_out,
  close_out_noerr: Stdlib.close_out_noerr,
  set_binary_mode_out: Stdlib.set_binary_mode_out,
  open_in: Stdlib.open_in,
  open_in_bin: Stdlib.open_in_bin,
  open_in_gen: Stdlib.open_in_gen,
  input_char: Stdlib.input_char,
  input_line: Stdlib.input_line,
  input: Stdlib.input,
  really_input: Stdlib.really_input,
  really_input_string: Stdlib.really_input_string,
  input_byte: Stdlib.input_byte,
  input_binary_int: Stdlib.input_binary_int,
  input_value: Stdlib.input_value,
  seek_in: Stdlib.seek_in,
  pos_in: Stdlib.pos_in,
  in_channel_length: Stdlib.in_channel_length,
  close_in: Stdlib.close_in,
  close_in_noerr: Stdlib.close_in_noerr,
  set_binary_mode_in: Stdlib.set_binary_mode_in,
  LargeFile: Stdlib.LargeFile,
  string_of_format: Stdlib.string_of_format,
  $caret$caret: Stdlib.$caret$caret,
  exit: Stdlib.exit,
  at_exit: Stdlib.at_exit,
  valid_float_lexem: Stdlib.valid_float_lexem,
  unsafe_really_input: Stdlib.unsafe_really_input,
  do_at_exit: Stdlib.do_at_exit,
  do_domain_local_at_exit: Stdlib.do_domain_local_at_exit
};

const U = {
  Empty: Stdlib__Stack.Empty,
  create: Stdlib__Stack.create,
  push: Stdlib__Stack.push,
  pop: Stdlib__Stack.pop,
  pop_opt: Stdlib__Stack.pop_opt,
  drop: Stdlib__Stack.drop,
  top: Stdlib__Stack.top,
  top_opt: Stdlib__Stack.top_opt,
  clear: Stdlib__Stack.clear,
  copy: Stdlib__Stack.copy,
  is_empty: Stdlib__Stack.is_empty,
  length: Stdlib__Stack.length,
  iter: Stdlib__Stack.iter,
  fold: Stdlib__Stack.fold,
  to_seq: Stdlib__Stack.to_seq,
  add_seq: Stdlib__Stack.add_seq,
  of_seq: Stdlib__Stack.of_seq,
  invalid_arg: Stdlib.invalid_arg,
  failwith: Stdlib.failwith,
  Exit: Stdlib.Exit,
  Match_failure: Stdlib.Match_failure,
  Assert_failure: Stdlib.Assert_failure,
  Invalid_argument: Stdlib.Invalid_argument,
  Failure: Stdlib.Failure,
  Not_found: Stdlib.Not_found,
  Out_of_memory: Stdlib.Out_of_memory,
  Stack_overflow: Stdlib.Stack_overflow,
  Sys_error: Stdlib.Sys_error,
  End_of_file: Stdlib.End_of_file,
  Division_by_zero: Stdlib.Division_by_zero,
  Sys_blocked_io: Stdlib.Sys_blocked_io,
  Undefined_recursive_module: Stdlib.Undefined_recursive_module,
  abs: Stdlib.abs,
  max_int: Stdlib.max_int,
  min_int: Stdlib.min_int,
  lnot: Stdlib.lnot,
  infinity: Stdlib.infinity,
  neg_infinity: Stdlib.neg_infinity,
  max_float: Stdlib.max_float,
  min_float: Stdlib.min_float,
  epsilon_float: Stdlib.epsilon_float,
  classify_float: Stdlib.classify_float,
  char_of_int: Stdlib.char_of_int,
  string_of_bool: Stdlib.string_of_bool,
  bool_of_string_opt: Stdlib.bool_of_string_opt,
  bool_of_string: Stdlib.bool_of_string,
  int_of_string_opt: Stdlib.int_of_string_opt,
  string_of_float: Stdlib.string_of_float,
  float_of_string_opt: Stdlib.float_of_string_opt,
  $at: Stdlib.$at,
  stdin: Stdlib.stdin,
  stdout: Stdlib.stdout,
  stderr: Stdlib.stderr,
  print_char: Stdlib.print_char,
  print_string: Stdlib.print_string,
  print_bytes: Stdlib.print_bytes,
  print_int: Stdlib.print_int,
  print_float: Stdlib.print_float,
  print_newline: Stdlib.print_newline,
  prerr_char: Stdlib.prerr_char,
  prerr_string: Stdlib.prerr_string,
  prerr_bytes: Stdlib.prerr_bytes,
  prerr_int: Stdlib.prerr_int,
  prerr_float: Stdlib.prerr_float,
  prerr_newline: Stdlib.prerr_newline,
  read_line: Stdlib.read_line,
  read_int_opt: Stdlib.read_int_opt,
  read_int: Stdlib.read_int,
  read_float_opt: Stdlib.read_float_opt,
  read_float: Stdlib.read_float,
  open_out: Stdlib.open_out,
  open_out_bin: Stdlib.open_out_bin,
  open_out_gen: Stdlib.open_out_gen,
  flush: Stdlib.flush,
  flush_all: Stdlib.flush_all,
  output_char: Stdlib.output_char,
  output_string: Stdlib.output_string,
  output_bytes: Stdlib.output_bytes,
  output: Stdlib.output,
  output_substring: Stdlib.output_substring,
  output_byte: Stdlib.output_byte,
  output_binary_int: Stdlib.output_binary_int,
  output_value: Stdlib.output_value,
  seek_out: Stdlib.seek_out,
  pos_out: Stdlib.pos_out,
  out_channel_length: Stdlib.out_channel_length,
  close_out: Stdlib.close_out,
  close_out_noerr: Stdlib.close_out_noerr,
  set_binary_mode_out: Stdlib.set_binary_mode_out,
  open_in: Stdlib.open_in,
  open_in_bin: Stdlib.open_in_bin,
  open_in_gen: Stdlib.open_in_gen,
  input_char: Stdlib.input_char,
  input_line: Stdlib.input_line,
  input: Stdlib.input,
  really_input: Stdlib.really_input,
  really_input_string: Stdlib.really_input_string,
  input_byte: Stdlib.input_byte,
  input_binary_int: Stdlib.input_binary_int,
  input_value: Stdlib.input_value,
  seek_in: Stdlib.seek_in,
  pos_in: Stdlib.pos_in,
  in_channel_length: Stdlib.in_channel_length,
  close_in: Stdlib.close_in,
  close_in_noerr: Stdlib.close_in_noerr,
  set_binary_mode_in: Stdlib.set_binary_mode_in,
  LargeFile: Stdlib.LargeFile,
  string_of_format: Stdlib.string_of_format,
  $caret$caret: Stdlib.$caret$caret,
  exit: Stdlib.exit,
  at_exit: Stdlib.at_exit,
  valid_float_lexem: Stdlib.valid_float_lexem,
  unsafe_really_input: Stdlib.unsafe_really_input,
  do_at_exit: Stdlib.do_at_exit,
  do_domain_local_at_exit: Stdlib.do_domain_local_at_exit
};

const f = Stdlib.$at;

const ff = Stdlib__List.length;

const fff = Stdlib.$at;

exports.List = List;
exports.U = U;
exports.f = f;
exports.ff = ff;
exports.fff = fff;
/* No side effect */
