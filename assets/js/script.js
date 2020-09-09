// var $ = require('jQuery');
// var testJs = require('./modules/test.js');

//jQuery
$(function() {
  var url = location.pathname.split("/")[1];
  $(".gnav > li > a").each(function(){
    var href = $(this).attr("href").split("/")[1];
    if( href == url ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass('active');
      }
  });
});

$(function(){
  $('.icon-fav').click(function(){
    $(this).toggleClass('is-active');
  });
});

$(function(){
  $('input, textarea').focus(function(){
    $(this).prev().css("color","#c6755c");
    $(this).css("border-color","orange");
    $(this).closest('.flex').prev().css("color","#c6755c");
  }).blur(function(){
    $(this).prev().css("color","#333");
    $(this).css("border-color","#000");
    $(this).closest('.flex').prev().css("color","#333");
  });
});

$(function() {
    $('.send').prop("disabled", true);
    $('form input:required').each(function () {
        $(this).prev("label").addClass("required");
    });
    $('form input:required').change(function () {
        let flag = true;
        $('form input:required').each(function(e) {
            //もし必須項目が空なら
            if ($('form input:required').eq(e).val() === "") {
                flag = false;
            }
        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.send').prop("disabled", false);
        }
        else {
            //送信ボタンを閉じる
            $('.send').prop("disabled", true);
        }
    });
});

$(function() {
  // アップロードするファイルを選択
  $('input[type=file]').change(function() {
    var file = $(this).prop('files')[0];
    // 画像以外は処理を停止
    if (! file.type.match('image.*')) {
      // クリア
      $(this).val('');
      // $('span').html('');
      return;
    }
    for (  var i = 0;  i < 10;  i++  ) {
      var reader = new FileReader();
      reader.onload = function() {
        var img_src = $('<img>').attr('src', reader.result);
        // $('span').html(img_src);
        $('.hasImg').append('<img alt="" id="uploadPreview">');
        $('#uploadPreview').attr('src', reader.result);
        $('.hasImg').addClass('is-img');
        $('.close-icon').addClass('is-active');
      }
    }
    reader.readAsDataURL(file);
  });
});

  //resizeが終わった時一度だけ実行（横幅のみ監視）
  $(function(){
      var timer = false;
      var winWidth = $(window).width();
      var winWidth_resized;

      $(window).on('resize', function(){
        if (timer !== false) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          winWidth_resized = $(window).width();
          if ( winWidth != winWidth_resized ) {
            if(window.innerWidth > 480) {
              $('.l-navArea').removeClass('is-active');
              $('.menu-trigger').removeClass('is-active');
              $('.l-navArea__inner').removeAttr('style');
              $('.l-navArea').removeAttr('style');
            }
            winWidth = $(window).width();
          }
        }, 200);
      });
    });
// /home-slider
$(function () {
  $('.main-slide').slick({
    arrows: false,
    autoplay: true,
    /* ポイントここから～ */
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 20000,
    /* ～ここまで */
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

$(function () {
  $('.work-slide').slick({
    slidesToShow: 1,
    fade: false,
    arrows: true,
    autoplay: false,
  });
});

//messageの左側をクリックしたら表示される仕組み
jQuery(function(){
  $('.chat-left ul li a').click(function(){
      $('.box').toggleClass('active');
  });
})

