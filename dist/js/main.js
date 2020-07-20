"use strict";

objectFitImages();
jQuery(function ($) {
  $(".js_accordion_title").on("click", function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/

    $(this).toggleClass("open", 200);
  });
});
//# sourceMappingURL=main.js.map