// ポリフィル（object-fit）
objectFitImages();
// ポリフィル（sticky)
const elements = document.querySelectorAll(".ly_navigation");
Stickyfill.add(elements);
// ポリフィル（sticky)
const elements2 = document.querySelectorAll(".ly_header");
Stickyfill.add(elements2);

// トップへ戻るボタンを途中表示
jQuery(function() {
  $(window).scroll(function() {
    let now = $(window).scrollTop();
    if (now > 100) {
      // $(".bl_toTop").fadeIn("200");
      $(".bl_toTop").addClass("js_visible");
    } else {
      // $(".bl_toTop").fadeOut("200");
      $(".bl_toTop").removeClass("js_visible");
    }
  });
});

// スクロールカレント
jQuery(function() {
  let set = 200; //ウインドウ上部からどれぐらいの位置で変化させるか
  let positionTop = new Array(); // 指定要素の上部位置
  let current = -1; // 現在位置
  //カレントを切り替えたい要素の位置（js_positionNowはカレントを取得したい対象の要素に付ける）
  $(".js_positionNow").each(function(i) {
    positionTop[i] = $(this).offset().top;
  });
  //最初（現在位置）の要素にclass="js_positionNow"をつける
  changeBox(0);
  let positionCount = positionTop.length; // カレントを取得したい場所の数
  //スクロールした時の処理
  $(window).scroll(function() {
    // let scrollPosition = $(window).scrollTop();
    for (let i = positionCount - 1; i >= 0; i--) {
      if ($(window).scrollTop() > positionTop[i] - set) {
        changeBox(i);
        break;
      }
    }
  });
  //ナビの処理
  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;
      // すべてのナビからcurrentクラスを削除
      $(".bl_headerNav_link").removeClass("js_current");

      //以下にcurrentクラス付与したい要素のid名と付与したいクラス名
      if (current == 0) {
        $("#js_id_top").addClass("js_current");
      } else if (current == 1) {
        $("#js_id_customerVoice").addClass("js_current");
      } else if (current == 2) {
        $("#js_id_feature").addClass("js_current");
      } else if (current == 3) {
        $("#js_id_facility").addClass("js_current");
      } else if (current == 4) {
        $("#js_id_flow").addClass("js_current");
      } else if (current == 5) {
        $("#js_id_fee").addClass("js_current");
      } else if (current == 6) {
        $("#js_id_access").addClass("js_current");
      } else if (current == 7) {
        $("#js_id_time").addClass("js_current");
      }
    }
  }
});

// スムーススクロール
jQuery(function() {
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function() {
    let adjust = 0; // スクロール位置の微調整
    let speed = 500; // スクロール速度（ミリ秒で記述）
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// アコーディオン
jQuery(function($) {
  $(".js_accordion_title").on("click", function() {
    /*クリックでコンテンツを開閉*/
    $(this)
      .next()
      .slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass("open", 200);
  });
});
