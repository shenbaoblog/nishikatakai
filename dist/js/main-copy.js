"use strict";

require("whatwg-fetch");

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// sub.jsファイルを読み込む
// import { hello } from "./sub";
//import '../sass/style.scss'; // style.scssをバンドル（webpackでscssをバンドルするよう）
// ----------webpack用---------------
require("intersection-observer"); // polyfill


console.info((0, _add.default)(2, 3));
console.info(["hoge", "fuga", "piyo"].includes("piyo"));

var wait = function wait(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("start");
          _context.next = 3;
          return wait(2000);

        case 3:
          console.log("end");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))(); // ----------テスト------------------
// sub.jsに定義されたJavaScriptを実行する
// hello();


var init = function init() {// alert(hello("Bob", "Tom", "aaa"));
};

function hello() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (accu, curr) {
    return "Hello! Hello! ".concat(accu, " ").concat(curr);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  init();
}); //window.addEventListener('load', () => {
//  alert('babelテストです');
//})
//# sourceMappingURL=main-copy.js.map