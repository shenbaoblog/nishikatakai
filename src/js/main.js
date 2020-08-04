import "./venders/jquery.min"; // jQuery読み込み
import "./venders/lazyload.min"; // lazyload
import objectFitImages from "object-fit-images"; // ポリフィル（object-fit）
import Stickyfill from "stickyfilljs"; // ポリフィル（sticky)

// 画像遅延読み込み
$("img.js_lazyLoad").lazyload();
// ポリフィル（object-fit）
objectFitImages();
// ポリフィル（sticky)
const ly_navigation_sticky = document.querySelectorAll(".ly_navigation");
Stickyfill.add(ly_navigation_sticky);
// ポリフィル（sticky)
const ly_header_sticky = document.querySelectorAll(".ly_header");
Stickyfill.add(ly_header_sticky);

import "./functions/toTop"; // トップへ戻るボタンを途中表示
import "./functions/autoCloseDrawer"; // ハンバーガーメニューをクリックで自動クローズ
import "./functions/currentScroll"; // カレントスクロール
import "./functions/smoothScroll"; // カレントスクロール
import "./functions/accordion"; // アコーディオン
