
// ハンバーガーメニュー
$(function(){
  $('.js-hamburger').click(function(){
      $(".js-hamburger").toggleClass("is-active");
      $(".header-navlist").toggleClass("open");
      $(".profile-header__navlist").toggleClass("open");
  });
});

// ドロワーメニュークローズ
$(function(){
  $(".header-navitem a, .dropdown-menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".js-hamburger").removeClass("is-active");//ボタンの activeクラスを除去し
    $(".header-navlist").removeClass("open");//ナビゲーションのpanelactiveクラスも除去
  });
});

// ふわっと表示
$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();

    // .proposal-list要素に対する処理
    $('.proposal-list').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });

    // service sectionの処理
    $('.service').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });

    // future sectionの処理
    $('.future').each(function (i) {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).delay(i * 400).queue(function(next){
            $(this).addClass("fadeIn");
            next();
          });
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });

    // .section-main-visual > strong 要素に対する処理
    $('.section-contents-description').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });

    $('.section-future__headline, .section-headline').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });

    $('.profile-headline').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        if (!$(this).hasClass("fadeIn")) {
          $(this).addClass("fadeIn");
        }
      } else {
        $(this).removeClass("fadeIn");
      }
    });
  });
});



// faqセクション
//アコーディオンをクリックした時の動作
jQuery(function ($) {
  $('.faq__accordion-area-q').on('click', function() {//タイトル要素をクリックしたら
    $('.faq__accordion-area-a').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
  
    const findElm = $(this).next(".faq__accordion-area-a");//タイトル直後のアコーディオンを行うエリアを取得
  
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }
  });
  });

// 各セクションへスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.s_01 a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const adjust = 0;
    // スクロールの速度
    const speed = 400; // ミリ秒
    // アンカーの値取得
    const href= $(this).attr("href");
    // 移動先を取得
    const target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    const position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
// ページトップボタンを押すとしたから上に上がる
$(function(){
  const topBtn=$('#pagetop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
  })
