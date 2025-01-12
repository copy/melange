// Generated by Melange
'use strict';

const Belt__Belt_Array = require("melange.belt/belt_Array.js");
const Belt__Belt_Option = require("melange.belt/belt_Option.js");
const Caml_option = require("melange.js/caml_option.js");
const Curry = require("melange.js/curry.js");
const TestUtils = require("react-dom/test-utils");

function act(func) {
  const reactFunc = function () {
    Curry._1(func, undefined);
  };
  TestUtils.act(reactFunc);
}

function actAsync(func) {
  return TestUtils.act(function () {
        return Curry._1(func, undefined);
      });
}

function changeWithValue(element, value) {
  const $$event = {
    target: {
      value: value
    }
  };
  TestUtils.Simulate.change(element, $$event);
}

function changeWithChecked(element, value) {
  const $$event = {
    target: {
      checked: value
    }
  };
  TestUtils.Simulate.change(element, $$event);
}

const Simulate = {
  changeWithValue: changeWithValue,
  changeWithChecked: changeWithChecked
};

function findBySelector(element, selector) {
  return element.querySelector(selector);
}

function findByAllSelector(element, selector) {
  return Array.from(element.querySelectorAll(selector));
}

function findBySelectorAndTextContent(element, selector, content) {
  return Belt__Belt_Array.getBy(Array.from(element.querySelectorAll(selector)), (function (node) {
          return node.textContent === content;
        }));
}

function findBySelectorAndPartialTextContent(element, selector, content) {
  return Belt__Belt_Array.getBy(Array.from(element.querySelectorAll(selector)), (function (node) {
          const arg = node.textContent;
          return arg.includes(content, undefined);
        }));
}

const DOM = {
  findBySelector: findBySelector,
  findByAllSelector: findByAllSelector,
  findBySelectorAndTextContent: findBySelectorAndTextContent,
  findBySelectorAndPartialTextContent: findBySelectorAndPartialTextContent
};

function prepareContainer(container, param) {
  const containerElement = document.createElement("div");
  Belt__Belt_Option.map(document.body, (function (body) {
          return body.appendChild(containerElement);
        }));
  container.contents = Caml_option.some(containerElement);
}

function cleanupContainer(container, param) {
  Belt__Belt_Option.map(container.contents, (function (prim) {
          prim.remove();
        }));
  container.contents = undefined;
}

function getContainer(container) {
  return Belt__Belt_Option.getExn(container.contents);
}

exports.act = act;
exports.actAsync = actAsync;
exports.Simulate = Simulate;
exports.DOM = DOM;
exports.prepareContainer = prepareContainer;
exports.cleanupContainer = cleanupContainer;
exports.getContainer = getContainer;
/* react-dom/test-utils Not a pure module */
