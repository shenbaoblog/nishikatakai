// sub.jsファイルを読み込む
// import { hello } from "./sub";

//import '../sass/style.scss'; // style.scssをバンドル（webpackでscssをバンドルするよう）
// ----------webpack用---------------
require("intersection-observer"); // polyfill
import "whatwg-fetch"; // polyfill
// ----------webpack用---------------

// ----------テスト------------------
import add from "./add";

console.info(add(2, 3));
console.info(["hoge", "fuga", "piyo"].includes("piyo"));

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
(async () => {
  console.log("start");
  await wait(2000);
  console.log("end");
})();
// ----------テスト------------------

// sub.jsに定義されたJavaScriptを実行する
// hello();

const init = () => {
  // alert(hello("Bob", "Tom", "aaa"));
};

function hello(...args) {
  return args.reduce((accu, curr) => `Hello! Hello! ${accu} ${curr}`);
}

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});

//window.addEventListener('load', () => {
//  alert('babelテストです');
//})
